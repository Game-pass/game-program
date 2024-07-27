use anchor_lang::prelude::*;

use crate::{GameAccts, UserGameAccount};

#[account]
pub struct Badge {
    pub badge_id: Pubkey,
    pub badge_name: String,
    pub badge_description: String,
    pub badge_image_uri: String,
    pub game_id: Pubkey,
    pub tiers: Vec<BadgeTier>,
    pub criteria: String, // JSON string for customizable criteria
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct BadgeTier {
    pub tier_name: String,
    pub tier_image_uri: String,
    pub required_progress: u64,
}

#[account]
pub struct UserBadgeProgress {
    pub user: Pubkey,
    pub badge_id: Pubkey,
    pub current_tier: u8,
    pub progress: u64,
}

#[event]
pub struct BadgeCreated {
    pub badge_id: Pubkey,
    pub game_id: Pubkey,
    pub badge_name: String,
}

#[event]
pub struct BadgeAssigned {
    pub user: Pubkey,
    pub badge_id: Pubkey,
    pub game_id: Pubkey,
}

// Context structs
#[derive(Accounts)]
pub struct CreateBadge<'info> {
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(init, payer = user, space = 8 + 32 + 64 + 256 + 256 + 32 + 256)]
    pub badge: Account<'info, Badge>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AssignBadge<'info> {
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(mut)]
    pub user_game_acct: Account<'info, UserGameAccount>,
    pub badge: Account<'info, Badge>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct UserBadge {
    pub user_game_account: Pubkey,
    pub badge_id: Pubkey,
    pub awarded_at: i64,
}

#[derive(Accounts)]
pub struct UpdateBadgeProgress<'info> {
    pub badge: Account<'info, Badge>,
    #[account(mut)]
    pub user_badge_progress: Account<'info, UserBadgeProgress>,
    #[account(mut)]
    pub user_game_acct: Account<'info, UserGameAccount>,
    pub user: Signer<'info>,
}

#[event]
pub struct TieredBadgeCreated {
    pub badge_id: Pubkey,
    pub game_id: Pubkey,
    pub badge_name: String,
    pub tier_count: u8,
}

#[event]
pub struct BadgeProgressUpdated {
    pub user: Pubkey,
    pub badge_id: Pubkey,
    pub new_tier: u8,
    pub total_progress: u64,
}

#[derive(Accounts)]
pub struct CreateTieredBadge<'info> {
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(init, payer = user, space = 8 + 32 + 64 + 256 + 32 + 1024 + 256)]
    pub badge: Account<'info, Badge>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
