use anchor_lang::error_code;

// Define custom error codes
#[error_code]
pub enum ErrorCode {
    #[msg("Game Already Created!")]
    GameAlreadyCreated,
    #[msg("Game Doesn't Exist")]
    GameDoesNotExist,
    #[msg("User Doesn't Exist")]
    UserDoesNotExist,
    #[msg("User Already Registered")]
    UserAlreadyRegistered,
    #[msg("Account Creation Failed!")]
    AccountCreationFailed,
    #[msg("No Permission to make changes")]
    NoChangePermission,
    #[msg("Not enough tokens available for sale.")]
    NotEnoughTokens,
    #[msg("Badge already exists")]
    BadgeAlreadyExists,
    #[msg("Badge does not exist")]
    BadgeDoesNotExist,
    #[msg("User already has this badge")]
    UserAlreadyHasBadge,
    #[msg("Invalid streak update")]
    InvalidStreakUpdate,
    #[msg("Alert already exists")]
    AlertAlreadyExists,
    #[msg("Invalid alert condition")]
    InvalidAlertCondition,
}
