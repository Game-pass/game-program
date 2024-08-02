use anchor_lang::prelude::*;

#[event]
pub struct ScoreUpdated {
    pub user: Pubkey,
    pub new_score: u64,
}
#[event]
pub struct LeaderboardUpdated {
    pub game_id: Pubkey,
    pub top_player: Pubkey,
    pub top_score: u64,
}
#[event]
pub struct LevelUpdated {
    pub user: Pubkey,
    pub new_level: u64,
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
