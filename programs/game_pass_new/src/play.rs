#[program]
pub mod game_pass {
    use super::*;

    // ... existing functions ...

    pub fn update_leaderboard(ctx: Context<UpdateLeaderboard>) -> Result<()> {
        let game_acct = &ctx.accounts.game_acct;
        let leaderboard = &mut ctx.accounts.leaderboard;
        let user_game_acct = &ctx.accounts.user_game_acct;

        // Check if the user's score is high enough to be on the leaderboard
        if leaderboard.top_players.len() < 10 || user_game_acct.score > leaderboard.top_players.last().unwrap().score {
            // Remove the user if they're already on the leaderboard
            leaderboard.top_players.retain(|entry| entry.user != user_game_acct.key());

            // Add the user to the leaderboard
            let new_entry = LeaderboardEntry {
                user: user_game_acct.key(),
                score: user_game_acct.score,
            };
            leaderboard.top_players.push(new_entry);

            // Sort the leaderboard
            leaderboard.top_players.sort_by(|a, b| b.score.cmp(&a.score));

            // Keep only the top 10 players
            leaderboard.top_players.truncate(10);

            // Update the last updated timestamp
            leaderboard.last_updated = Clock::get()?.unix_timestamp;

            emit!(LeaderboardUpdated {
                game_id: game_acct.key(),
                top_player: leaderboard.top_players[0].user,
                top_score: leaderboard.top_players[0].score,
            });
        }

        Ok(())
    }
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