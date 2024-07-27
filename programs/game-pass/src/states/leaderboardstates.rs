use anchor_lang::prelude::*;

use crate::{GameAccts, UserGameAccount};

#[account]
pub struct Leaderboard {
    pub game_id: Pubkey,
    pub top_players: Vec<LeaderboardEntry>,
    pub last_updated: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Default)]
pub struct LeaderboardEntry {
    pub user: Pubkey,
    pub score: u64,
}

#[derive(Accounts)]
pub struct UpdateLeaderboard<'info> {
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(mut)]
    pub leaderboard: Account<'info, Leaderboard>,
    pub user_game_acct: Account<'info, UserGameAccount>,
    pub user: Signer<'info>,
}

#[event]
pub struct LeaderboardUpdated {
    pub game_id: Pubkey,
    pub top_player: Pubkey,
    pub top_score: u64,
}
