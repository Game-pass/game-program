use anchor_lang::prelude::*;

#[account]
pub struct Alert {
    pub alert_id: Pubkey,
    pub alert_type: String,
    pub alert_message: String,
    pub trigger_condition: String, // JSON string for customizable conditions
    pub game_id: Pubkey,
}
