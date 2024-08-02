use anchor_lang::prelude::*;

#[account]
pub struct UserStreak {
    pub user_game_account: Pubkey,
    pub current_streak: u32,
    pub longest_streak: u32,
    pub last_played_at: i64,
}
