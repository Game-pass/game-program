use anchor_lang::prelude::*;
use anchor_lang::solana_program::log::sol_log_compute_units;

// use anchor_spl::token::{Mint, Token, TokenAccount, Transfer};

pub mod error;
pub mod events;
pub mod states;
pub mod utils;

use crate::{
    error::ErrorCode,
    events::*,
    states::{alertstate::*, badgestates::*, gamestate::*, leaderboardstates::*},
    // utils::*,
};

// Declare the program ID
declare_id!("9oCwyUjA7gb562qDNUN1RM2UcuCgduPAdK3yFHS5ZjwN");

#[program]
pub mod game_pass {

    use anchor_lang::solana_program::entrypoint_deprecated::ProgramResult;

    use super::*;

    pub fn initialize_main_account(ctx: Context<Initialize>) -> ProgramResult {
        let game_pass = &mut ctx.accounts.game_pass;
        game_pass.total_users = 0;
        game_pass.total_games = 0;
        game_pass.users = Vec::new();
        game_pass.user_game_account = Vec::new();
        game_pass.games = Vec::new();
        game_pass.owner = *ctx.accounts.user.key;
        Ok(())
    }

    pub fn initialize_game(
        ctx: Context<InitializeGameAccount>,
        unique_id: u64,
        game_name: String,
        game_avatar: String,
        created_at: i64,
    ) -> Result<()> {
        let game_acct = &mut ctx.accounts.game_acct;
        let game_pass = &mut ctx.accounts.game_pass;

        if game_pass
            .games
            .iter()
            .any(|game| game.game_id == game_acct.to_account_info().key.to_string())
        {
            return Err(ErrorCode::GameAlreadyCreated.into());
        }

        game_acct.image = game_avatar;
        game_acct.unique_id = unique_id;
        game_acct.game_id = game_acct.to_account_info().key.to_string();
        game_acct.game_name = game_name;
        game_acct.game_status = "Active".to_string();
        game_acct.created_at = created_at;
        game_acct.updated_at = created_at;
        game_acct.owner = *ctx.accounts.user.key;

        game_pass.total_games += 1;
        game_pass.games.push(GameStructs {
            game_id: game_acct.game_id.clone(),
        });

        Ok(())
    }

    pub fn initialize_user_game_account(
        ctx: Context<InitializeUserGameAccount>,
        game_id: String,
        user_avatar: String,
        created_at: i64,
    ) -> Result<()> {
        let user_game_acct = &mut ctx.accounts.user_game_acct;
        let game_pass = &mut ctx.accounts.game_pass;

        if game_pass
            .user_game_account
            .iter()
            .any(|game| game.account_id == user_game_acct.to_account_info().key.to_string())
        {
            return Err(ErrorCode::UserAlreadyRegistered.into());
        }

        user_game_acct.image = user_avatar;
        user_game_acct.game_id = game_id;
        user_game_acct.account_id = user_game_acct.to_account_info().key.to_string();
        user_game_acct.level = 0;
        user_game_acct.score = 0;
        user_game_acct.assets = Vec::new();
        user_game_acct.status = "Active".to_string();
        user_game_acct.created_at = created_at;
        user_game_acct.update_at = created_at;
        user_game_acct.owner = *ctx.accounts.user.key;
        user_game_acct.badges = Vec::new();
        user_game_acct.streak = UserStreak {
            user_game_account: user_game_acct.to_account_info().key(),
            current_streak: 0,
            longest_streak: 0,
            last_played_at: created_at,
        };
        user_game_acct.custom_data = "{}".to_string();

        game_pass.user_game_account.push(UserGameAcct {
            account_id: user_game_acct.to_account_info().key.to_string(),
        });

        Ok(())
    }

    pub fn update_user_avatar(ctx: Context<UpdateUserAvatar>, avatar: String) -> Result<()> {
        let user_game_acct = &mut ctx.accounts.user_game_account;
        let signer = &mut ctx.accounts.signer;

        if user_game_acct.owner != *signer.to_account_info().key {
            return Err(ErrorCode::NoChangePermission.into());
        }
        user_game_acct.image = avatar;

        Ok(())
    }

    pub fn update_user_score(ctx: Context<UpdateUserScore>, score: u64) -> Result<()> {
        let user_game_acct = &mut ctx.accounts.user_game_acct;
        let signer = &mut ctx.accounts.signer;
        let game_acct = &ctx.accounts.game_acct;

        if game_acct.owner != *signer.to_account_info().key {
            return Err(ErrorCode::NoChangePermission.into());
        }

        user_game_acct.score += score;

        // // Check if any badges should be awarded
        // check_and_award_badges(ctx, user_game_acct.score)?;

        // // Check if any alerts should be triggered
        // check_and_trigger_alerts(ctx, user_game_acct.score)?;

        sol_log_compute_units();

        emit!(ScoreUpdated {
            user: user_game_acct.key(),
            new_score: user_game_acct.score,
        });

        Ok(())
    }

    pub fn update_user_level(ctx: Context<UpdateUserLevel>, level: u64) -> Result<()> {
        let user_game_acct = &mut ctx.accounts.user_game_acct;
        let signer = &mut ctx.accounts.signer;
        let game_acct = &ctx.accounts.game_acct;

        if game_acct.owner != *signer.to_account_info().key {
            return Err(ErrorCode::NoChangePermission.into());
        }

        user_game_acct.level += level;

        // // Check if any badges should be awarded
        // check_and_award_badges(ctx, user_game_acct.level)?;

        // // Check if any alerts should be triggered
        // check_and_trigger_alerts(ctx, user_game_acct.level)?;

        sol_log_compute_units();

        emit!(LevelUpdated {
            user: user_game_acct.key(),
            new_level: user_game_acct.level,
        });

        Ok(())
    }

    pub fn create_badge(
        ctx: Context<CreateBadge>,
        badge_name: String,
        badge_description: String,
        badge_image_uri: String,
        criteria: String,
    ) -> Result<()> {
        let game_acct = &ctx.accounts.game_acct;
        let badge = &mut ctx.accounts.badge;

        if game_acct.owner != *ctx.accounts.user.key {
            return Err(ErrorCode::NoChangePermission.into());
        }

        if !badge.badge_name.is_empty() {
            return Err(ErrorCode::BadgeAlreadyExists.into());
        }

        badge.badge_name = badge_name;
        badge.badge_description = badge_description;
        badge.badge_image_uri = badge_image_uri;
        badge.game_id = game_acct.key();
        badge.criteria = criteria;

        sol_log_compute_units();

        emit!(BadgeCreated {
            badge_id: badge.key(),
            game_id: game_acct.key(),
            badge_name: badge.badge_name.clone(),
        });

        Ok(())
    }

    pub fn assign_badge(ctx: Context<AssignBadge>) -> Result<()> {
        let game_acct = &ctx.accounts.game_acct;
        let user_game_acct = &mut ctx.accounts.user_game_acct;
        let badge = &ctx.accounts.badge;

        if game_acct.owner != *ctx.accounts.user.key {
            return Err(ErrorCode::NoChangePermission.into());
        }

        if user_game_acct.badges.contains(&badge.key()) {
            return Err(ErrorCode::UserAlreadyHasBadge.into());
        }

        user_game_acct.badges.push(badge.key());

        sol_log_compute_units();

        emit!(BadgeAssigned {
            user: user_game_acct.key(),
            badge_id: badge.key(),
            game_id: game_acct.key(),
        });

        Ok(())
    }

    pub fn update_leaderboard(ctx: Context<UpdateLeaderboard>) -> Result<()> {
        let game_acct = &ctx.accounts.game_acct;
        let leaderboard = &mut ctx.accounts.leaderboard;
        let user_game_acct = &ctx.accounts.user_game_acct;

        if leaderboard.top_players.len() < 10
            || user_game_acct.score > leaderboard.top_players.last().unwrap().score
        {
            leaderboard
                .top_players
                .retain(|entry| entry.user != user_game_acct.key());

            let new_entry = LeaderboardEntry {
                user: user_game_acct.key(),
                score: user_game_acct.score,
            };
            leaderboard.top_players.push(new_entry);

            leaderboard
                .top_players
                .sort_by(|a, b| b.score.cmp(&a.score));

            leaderboard.top_players.truncate(10);

            leaderboard.last_updated = Clock::get()?.unix_timestamp;

            emit!(LeaderboardUpdated {
                game_id: game_acct.key(),
                top_player: leaderboard.top_players[0].user,
                top_score: leaderboard.top_players[0].score,
            });
        }

        Ok(())
    }

    pub fn create_tiered_badge(
        ctx: Context<CreateTieredBadge>,
        badge_name: String,
        badge_description: String,
        tiers: Vec<BadgeTier>,
        criteria: String,
    ) -> Result<()> {
        let game_acct = &ctx.accounts.game_acct;
        let badge = &mut ctx.accounts.badge;

        if game_acct.owner != *ctx.accounts.user.key {
            return Err(ErrorCode::NoChangePermission.into());
        }

        badge.badge_name = badge_name;
        badge.badge_description = badge_description;
        badge.game_id = game_acct.key();
        badge.tiers = tiers;
        badge.criteria = criteria;

        emit!(TieredBadgeCreated {
            badge_id: badge.key(),
            game_id: game_acct.key(),
            badge_name: badge.badge_name.clone(),
            tier_count: badge.tiers.len() as u8,
        });

        Ok(())
    }

    pub fn update_badge_progress(ctx: Context<UpdateBadgeProgress>, progress: u64) -> Result<()> {
        let badge = &ctx.accounts.badge;
        let user_badge_progress = &mut ctx.accounts.user_badge_progress;
        let user_game_acct = &mut ctx.accounts.user_game_acct;

        user_badge_progress.progress += progress;

        let new_tier = badge
            .tiers
            .iter()
            .position(|tier| user_badge_progress.progress >= tier.required_progress);

        if let Some(new_tier) = new_tier {
            if new_tier as u8 > user_badge_progress.current_tier {
                user_badge_progress.current_tier = new_tier as u8;

                if !user_game_acct.badges.contains(&badge.key()) {
                    user_game_acct.badges.push(badge.key());
                }

                emit!(BadgeProgressUpdated {
                    user: user_game_acct.key(),
                    badge_id: badge.key(),
                    new_tier: new_tier as u8,
                    total_progress: user_badge_progress.progress,
                });
            }
        }

        Ok(())
    }
}
