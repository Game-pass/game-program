use anchor_lang::prelude::*;

#[account]
pub struct Alert {
    pub alert_id: Pubkey,
    pub alert_type: String,
    pub alert_message: String,
    pub trigger_condition: String, // JSON string for customizable conditions
    pub game_id: Pubkey,
}

#[account]
pub struct UserStreak {
    pub user_game_account: Pubkey,
    pub current_streak: u32,
    pub longest_streak: u32,
    pub last_played_at: i64,
}
