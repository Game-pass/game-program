export type GamePass = {
  "version": "0.1.0",
  "name": "game_pass",
  "instructions": [
    {
      "name": "intializeGamePass",
      "accounts": [
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uniqueId",
          "type": "u64"
        },
        {
          "name": "gameName",
          "type": "string"
        },
        {
          "name": "gameAvatar",
          "type": "string"
        },
        {
          "name": "createdAt",
          "type": "i64"
        }
      ]
    },
    {
      "name": "initializeUserGameAccount",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameId",
          "type": "string"
        },
        {
          "name": "userAvatar",
          "type": "string"
        },
        {
          "name": "createdAt",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateUserAvatar",
      "accounts": [
        {
          "name": "userGameAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateUserScore",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "score",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateUserLevel",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "level",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "badgeName",
          "type": "string"
        },
        {
          "name": "badgeDescription",
          "type": "string"
        },
        {
          "name": "badgeImageUri",
          "type": "string"
        },
        {
          "name": "criteria",
          "type": "string"
        }
      ]
    },
    {
      "name": "assignBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateLeaderboard",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leaderboard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createTieredBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "badgeName",
          "type": "string"
        },
        {
          "name": "badgeDescription",
          "type": "string"
        },
        {
          "name": "tiers",
          "type": {
            "vec": {
              "defined": "BadgeTier"
            }
          }
        },
        {
          "name": "criteria",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateBadgeProgress",
      "accounts": [
        {
          "name": "badge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBadgeProgress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "progress",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "alert",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "alertId",
            "type": "publicKey"
          },
          {
            "name": "alertType",
            "type": "string"
          },
          {
            "name": "alertMessage",
            "type": "string"
          },
          {
            "name": "triggerCondition",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userStreak",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userGameAccount",
            "type": "publicKey"
          },
          {
            "name": "currentStreak",
            "type": "u32"
          },
          {
            "name": "longestStreak",
            "type": "u32"
          },
          {
            "name": "lastPlayedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "badge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "badgeName",
            "type": "string"
          },
          {
            "name": "badgeDescription",
            "type": "string"
          },
          {
            "name": "badgeImageUri",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "publicKey"
          },
          {
            "name": "tiers",
            "type": {
              "vec": {
                "defined": "BadgeTier"
              }
            }
          },
          {
            "name": "criteria",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "userBadgeProgress",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "currentTier",
            "type": "u8"
          },
          {
            "name": "progress",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userBadge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userGameAccount",
            "type": "publicKey"
          },
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "awardedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "userGameAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "string"
          },
          {
            "name": "accountId",
            "type": "string"
          },
          {
            "name": "level",
            "type": "u64"
          },
          {
            "name": "score",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "assets",
            "type": {
              "vec": {
                "defined": "Assets"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updateAt",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "badges",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "streak",
            "type": {
              "defined": "UserStreak"
            }
          },
          {
            "name": "customData",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "gamePass",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalUsers",
            "type": "u64"
          },
          {
            "name": "totalGames",
            "type": "u64"
          },
          {
            "name": "userGameAccount",
            "type": {
              "vec": {
                "defined": "UserGameAcct"
              }
            }
          },
          {
            "name": "games",
            "type": {
              "vec": {
                "defined": "GameStructs"
              }
            }
          },
          {
            "name": "users",
            "type": {
              "vec": {
                "defined": "Users"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "gameAccts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "uniqueId",
            "type": "u64"
          },
          {
            "name": "gameId",
            "type": "string"
          },
          {
            "name": "gameName",
            "type": "string"
          },
          {
            "name": "gameStatus",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "leaderboard",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "publicKey"
          },
          {
            "name": "topPlayers",
            "type": {
              "vec": {
                "defined": "LeaderboardEntry"
              }
            }
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BadgeTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tierName",
            "type": "string"
          },
          {
            "name": "tierImageUri",
            "type": "string"
          },
          {
            "name": "requiredProgress",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "GameStructs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UserGameAcct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accountId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "Users",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "emailAddress",
            "type": "string"
          },
          {
            "name": "walletAddress",
            "type": "publicKey"
          },
          {
            "name": "games",
            "type": {
              "vec": {
                "defined": "GameStructs"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updateAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Assets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetAddress",
            "type": "publicKey"
          },
          {
            "name": "assetName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "LeaderboardEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "score",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ScoreUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newScore",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LeaderboardUpdated",
      "fields": [
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "topPlayer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "topScore",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LevelUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newLevel",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeCreated",
      "fields": [
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeName",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeAssigned",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "TieredBadgeCreated",
      "fields": [
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeName",
          "type": "string",
          "index": false
        },
        {
          "name": "tierCount",
          "type": "u8",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeProgressUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newTier",
          "type": "u8",
          "index": false
        },
        {
          "name": "totalProgress",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameAlreadyCreated",
      "msg": "Game Already Created!"
    },
    {
      "code": 6001,
      "name": "GameDoesNotExist",
      "msg": "Game Doesn't Exist"
    },
    {
      "code": 6002,
      "name": "UserDoesNotExist",
      "msg": "User Doesn't Exist"
    },
    {
      "code": 6003,
      "name": "UserAlreadyRegistered",
      "msg": "User Already Registered"
    },
    {
      "code": 6004,
      "name": "AccountCreationFailed",
      "msg": "Account Creation Failed!"
    },
    {
      "code": 6005,
      "name": "NoChangePermission",
      "msg": "No Permission to make changes"
    },
    {
      "code": 6006,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens available for sale."
    },
    {
      "code": 6007,
      "name": "BadgeAlreadyExists",
      "msg": "Badge already exists"
    },
    {
      "code": 6008,
      "name": "BadgeDoesNotExist",
      "msg": "Badge does not exist"
    },
    {
      "code": 6009,
      "name": "UserAlreadyHasBadge",
      "msg": "User already has this badge"
    },
    {
      "code": 6010,
      "name": "InvalidStreakUpdate",
      "msg": "Invalid streak update"
    },
    {
      "code": 6011,
      "name": "AlertAlreadyExists",
      "msg": "Alert already exists"
    },
    {
      "code": 6012,
      "name": "InvalidAlertCondition",
      "msg": "Invalid alert condition"
    }
  ]
};

export const IDL: GamePass = {
  "version": "0.1.0",
  "name": "game_pass",
  "instructions": [
    {
      "name": "intializeGamePass",
      "accounts": [
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeGame",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "uniqueId",
          "type": "u64"
        },
        {
          "name": "gameName",
          "type": "string"
        },
        {
          "name": "gameAvatar",
          "type": "string"
        },
        {
          "name": "createdAt",
          "type": "i64"
        }
      ]
    },
    {
      "name": "initializeUserGameAccount",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gamePass",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "gameId",
          "type": "string"
        },
        {
          "name": "userAvatar",
          "type": "string"
        },
        {
          "name": "createdAt",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateUserAvatar",
      "accounts": [
        {
          "name": "userGameAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "avatar",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateUserScore",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "score",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateUserLevel",
      "accounts": [
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "level",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "badgeName",
          "type": "string"
        },
        {
          "name": "badgeDescription",
          "type": "string"
        },
        {
          "name": "badgeImageUri",
          "type": "string"
        },
        {
          "name": "criteria",
          "type": "string"
        }
      ]
    },
    {
      "name": "assignBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateLeaderboard",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "leaderboard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "createTieredBadge",
      "accounts": [
        {
          "name": "gameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "badge",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "badgeName",
          "type": "string"
        },
        {
          "name": "badgeDescription",
          "type": "string"
        },
        {
          "name": "tiers",
          "type": {
            "vec": {
              "defined": "BadgeTier"
            }
          }
        },
        {
          "name": "criteria",
          "type": "string"
        }
      ]
    },
    {
      "name": "updateBadgeProgress",
      "accounts": [
        {
          "name": "badge",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userBadgeProgress",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userGameAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "progress",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "alert",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "alertId",
            "type": "publicKey"
          },
          {
            "name": "alertType",
            "type": "string"
          },
          {
            "name": "alertMessage",
            "type": "string"
          },
          {
            "name": "triggerCondition",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "userStreak",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userGameAccount",
            "type": "publicKey"
          },
          {
            "name": "currentStreak",
            "type": "u32"
          },
          {
            "name": "longestStreak",
            "type": "u32"
          },
          {
            "name": "lastPlayedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "badge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "badgeName",
            "type": "string"
          },
          {
            "name": "badgeDescription",
            "type": "string"
          },
          {
            "name": "badgeImageUri",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "publicKey"
          },
          {
            "name": "tiers",
            "type": {
              "vec": {
                "defined": "BadgeTier"
              }
            }
          },
          {
            "name": "criteria",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "userBadgeProgress",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "currentTier",
            "type": "u8"
          },
          {
            "name": "progress",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userBadge",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "userGameAccount",
            "type": "publicKey"
          },
          {
            "name": "badgeId",
            "type": "publicKey"
          },
          {
            "name": "awardedAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "userGameAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "gameId",
            "type": "string"
          },
          {
            "name": "accountId",
            "type": "string"
          },
          {
            "name": "level",
            "type": "u64"
          },
          {
            "name": "score",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "assets",
            "type": {
              "vec": {
                "defined": "Assets"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updateAt",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "badges",
            "type": {
              "vec": "publicKey"
            }
          },
          {
            "name": "streak",
            "type": {
              "defined": "UserStreak"
            }
          },
          {
            "name": "customData",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "gamePass",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "totalUsers",
            "type": "u64"
          },
          {
            "name": "totalGames",
            "type": "u64"
          },
          {
            "name": "userGameAccount",
            "type": {
              "vec": {
                "defined": "UserGameAcct"
              }
            }
          },
          {
            "name": "games",
            "type": {
              "vec": {
                "defined": "GameStructs"
              }
            }
          },
          {
            "name": "users",
            "type": {
              "vec": {
                "defined": "Users"
              }
            }
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "gameAccts",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "image",
            "type": "string"
          },
          {
            "name": "uniqueId",
            "type": "u64"
          },
          {
            "name": "gameId",
            "type": "string"
          },
          {
            "name": "gameName",
            "type": "string"
          },
          {
            "name": "gameStatus",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updatedAt",
            "type": "i64"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "leaderboard",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "publicKey"
          },
          {
            "name": "topPlayers",
            "type": {
              "vec": {
                "defined": "LeaderboardEntry"
              }
            }
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "BadgeTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tierName",
            "type": "string"
          },
          {
            "name": "tierImageUri",
            "type": "string"
          },
          {
            "name": "requiredProgress",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "GameStructs",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gameId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "UserGameAcct",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "accountId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "Users",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "emailAddress",
            "type": "string"
          },
          {
            "name": "walletAddress",
            "type": "publicKey"
          },
          {
            "name": "games",
            "type": {
              "vec": {
                "defined": "GameStructs"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "updateAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Assets",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "assetAddress",
            "type": "publicKey"
          },
          {
            "name": "assetName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "LeaderboardEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "score",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "ScoreUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newScore",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LeaderboardUpdated",
      "fields": [
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "topPlayer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "topScore",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "LevelUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newLevel",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeCreated",
      "fields": [
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeName",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeAssigned",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "TieredBadgeCreated",
      "fields": [
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "gameId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeName",
          "type": "string",
          "index": false
        },
        {
          "name": "tierCount",
          "type": "u8",
          "index": false
        }
      ]
    },
    {
      "name": "BadgeProgressUpdated",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "badgeId",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newTier",
          "type": "u8",
          "index": false
        },
        {
          "name": "totalProgress",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "GameAlreadyCreated",
      "msg": "Game Already Created!"
    },
    {
      "code": 6001,
      "name": "GameDoesNotExist",
      "msg": "Game Doesn't Exist"
    },
    {
      "code": 6002,
      "name": "UserDoesNotExist",
      "msg": "User Doesn't Exist"
    },
    {
      "code": 6003,
      "name": "UserAlreadyRegistered",
      "msg": "User Already Registered"
    },
    {
      "code": 6004,
      "name": "AccountCreationFailed",
      "msg": "Account Creation Failed!"
    },
    {
      "code": 6005,
      "name": "NoChangePermission",
      "msg": "No Permission to make changes"
    },
    {
      "code": 6006,
      "name": "NotEnoughTokens",
      "msg": "Not enough tokens available for sale."
    },
    {
      "code": 6007,
      "name": "BadgeAlreadyExists",
      "msg": "Badge already exists"
    },
    {
      "code": 6008,
      "name": "BadgeDoesNotExist",
      "msg": "Badge does not exist"
    },
    {
      "code": 6009,
      "name": "UserAlreadyHasBadge",
      "msg": "User already has this badge"
    },
    {
      "code": 6010,
      "name": "InvalidStreakUpdate",
      "msg": "Invalid streak update"
    },
    {
      "code": 6011,
      "name": "AlertAlreadyExists",
      "msg": "Alert already exists"
    },
    {
      "code": 6012,
      "name": "InvalidAlertCondition",
      "msg": "Invalid alert condition"
    }
  ]
};
