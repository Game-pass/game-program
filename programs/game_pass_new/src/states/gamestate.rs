use anchor_lang::prelude::*;

use crate::streak::UserStreak;

// This is the Game Pass contract
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init_if_needed, payer = user, space = 8 + 600, seeds = ["game_pass".as_ref(),user.key().as_ref()],bump )]
    pub game_pass: Account<'info, GamePass>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}
//Create Game Account
#[derive(Accounts)]
#[instruction(unique_id: u64)]
pub struct InitializeGameAccount<'info> {
    #[account(
        init,
         payer = user, space = 8 + 600,
         seeds = [b"game_acct", user.key().as_ref(), &unique_id.to_le_bytes()],
          bump)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(mut)]
    pub game_pass: Account<'info, GamePass>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

// Create User Account for a Game
#[derive(Accounts)]
pub struct InitializeUserGameAccount<'info> {
    #[account(init_if_needed, payer = user, space = 8 + 600, seeds = ["user_game_acct".as_ref(), game_acct.key().as_ref(), user.key().as_ref()], bump)]
    pub user_game_acct: Account<'info, UserGameAccount>,
    #[account(mut)]
    pub game_pass: Account<'info, GamePass>,
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

//Update user Account
#[derive(Accounts)]
pub struct UpdateUserScore<'info> {
    #[account(mut)]
    pub user_game_acct: Account<'info, UserGameAccount>,
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    // Specify that signer must be the owner of game_acct
    #[account(mut)]
    // #[account(signer, constraint = game_acct.owner == signer.key())]
    pub signer: Signer<'info>,
}

#[derive(Accounts)]
pub struct UpdateUserAvatar<'info> {
    #[account(mut)]
    pub user_game_account: Account<'info, UserGameAccount>,
    #[account(mut)]
    pub signer: Signer<'info>,
}

#[derive(Accounts)]

pub struct UpdateUserLevel<'info> {
    #[account(mut)]
    pub user_game_acct: Account<'info, UserGameAccount>,
    #[account(mut)]
    pub game_acct: Account<'info, GameAccts>,
    // Specify that signer must be the owner of game_acct
    #[account(mut)]
    // #[account(signer, constraint = game_acct.owner == signer.key())]
    pub signer: Signer<'info>,
}

//initialize User Game Account
#[account]
pub struct UserGameAccount {
    pub image: String,
    pub game_id: String,
    pub account_id: String,
    pub level: u64,
    pub score: u64,
    pub status: String,
    pub assets: Vec<Assets>,
    pub created_at: i64,
    pub update_at: i64,
    pub owner: Pubkey,
    pub badges: Vec<Pubkey>, // Store only badge IDs for gas efficiency
    pub streak: UserStreak,
    pub custom_data: String, // JSON string for game-specific custom data
}

//Initialize GamePass
#[account]
pub struct GamePass {
    pub bump: u8, // Bump seed for PDA
    pub total_users: u64,
    pub total_games: u64,
    pub user_game_account: Vec<UserGameAcct>, //list of user game accounts
    pub games: Vec<GameStructs>,              // List of Games
    pub users: Vec<Users>,                    // List of users
    pub owner: Pubkey,                        // Owner of the contract
}

// Initialize a new game
#[account]
pub struct GameAccts {
    pub image: String,
    pub unique_id: u64,
    pub game_id: String,
    pub game_name: String,
    pub game_status: String,
    pub created_at: i64,
    pub updated_at: i64,
    pub owner: Pubkey,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct GameStructs {
    pub game_id: String,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct UserGameAcct {
    pub account_id: String,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Users {
    pub email_address: String,
    pub wallet_address: Pubkey,
    pub games: Vec<GameStructs>,
    pub created_at: i64,
    pub update_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Assets {
    pub asset_address: Pubkey,
    pub asset_name: String,
}
