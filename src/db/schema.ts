/**
 * @file IPL Mock Auction Database Schemas (SQL & NoSQL)
 * Technical Specification for PostgreSQL (Cloud SQL / Supabase) and Firebase Firestore
 */

// ==========================================
// 1. RELATIONAL DATABASE SCHEMA (PostgreSQL / Supabase / Cloud SQL)
// ==========================================

export const POSTGRESQL_SCHEMA_SQL = `
-- 1. Users & Franchise Ownership Table
CREATE TABLE users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) NOT NULL, -- Authenticated Google display name or email prefix
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Auction Rooms Table
CREATE TABLE auction_rooms (
    id VARCHAR(64) PRIMARY KEY,
    room_code VARCHAR(12) UNIQUE NOT NULL,
    host_user_id VARCHAR(64) REFERENCES users(id),
    game_mode VARCHAR(20) NOT NULL CHECK (game_mode IN ('MEGA', 'MINI', 'CLEAN_SLATE')),
    stage VARCHAR(20) NOT NULL DEFAULT 'LOBBY' CHECK (stage IN ('LOBBY', 'RETENTION', 'LIVE', 'ACCELERATED', 'LEADERBOARD')),
    active_team_ids JSONB DEFAULT '[]'::jsonb, -- Active human franchise IDs (e.g. ['CSK', 'MI'])
    current_player_id VARCHAR(64),
    current_bid INTEGER DEFAULT 0, -- In Lakhs
    leading_team_id VARCHAR(10),
    hammer_stage SMALLINT DEFAULT 0, -- 0=None, 1=Once, 2=Twice, 3=Sold
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Franchises / Teams Table
CREATE TABLE teams (
    id VARCHAR(10) PRIMARY KEY, -- 'CSK', 'MI', 'RCB', 'KKR', 'RR', 'SRH', 'GT', 'LSG', 'DC', 'PBKS'
    room_id VARCHAR(64) REFERENCES auction_rooms(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    short_name VARCHAR(10) NOT NULL,
    purse INTEGER NOT NULL, -- In Lakhs (e.g. 12000 for ₹120 Cr)
    initial_purse INTEGER NOT NULL,
    rtm_cards_remaining SMALLINT DEFAULT 6,
    is_active BOOLEAN DEFAULT TRUE, -- TRUE if claimed by human player, FALSE if Inactive/Disabled
    owner_user_id VARCHAR(64) REFERENCES users(id),
    CONSTRAINT unique_room_team UNIQUE (room_id, id)
);

-- 4. Master Players Database Table
CREATE TABLE players (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    nickname VARCHAR(100),
    role VARCHAR(30) NOT NULL CHECK (role IN ('BATTER', 'ALL_ROUNDER', 'WICKET_KEEPER', 'FAST_BOWLER', 'SPINNER')),
    is_overseas BOOLEAN DEFAULT FALSE,
    country VARCHAR(100) DEFAULT 'India',
    country_code VARCHAR(10) DEFAULT 'IN',
    is_capped BOOLEAN DEFAULT TRUE,
    previous_team VARCHAR(10),
    previous_ipl_seasons_played INTEGER DEFAULT 0, -- Strict filter: > 0 for retention eligibility
    base_price INTEGER NOT NULL, -- In Lakhs (e.g. 200 for ₹2 Cr, 30 for ₹30 L)
    current_set VARCHAR(20) NOT NULL, -- 'M1', 'M2', 'BA1', 'AL1', 'WK1', 'FA1', 'SP1', 'UBA', etc.
    set_name VARCHAR(100) NOT NULL,
    photo_url TEXT,
    hidden_form_rating SMALLINT DEFAULT 75, -- 60-99 for post-auction analytics algorithm
    stats JSONB NOT NULL DEFAULT '{}'::jsonb -- { matches, runs, wickets, strikeRate, economy, etc. }
);

-- 5. Pre-Auction Retentions Table
CREATE TABLE retentions (
    id SERIAL PRIMARY KEY,
    room_id VARCHAR(64) REFERENCES auction_rooms(id) ON DELETE CASCADE,
    team_id VARCHAR(10) NOT NULL,
    player_id VARCHAR(64) REFERENCES players(id),
    is_capped BOOLEAN NOT NULL,
    deduction_amount INTEGER NOT NULL, -- In Lakhs (1800, 1400, 1100, 1800, 1400, 400)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_room_retained_player UNIQUE (room_id, player_id)
);

-- 6. Live Auction Bids & Logbook Table
CREATE TABLE bids (
    id VARCHAR(64) PRIMARY KEY,
    room_id VARCHAR(64) REFERENCES auction_rooms(id) ON DELETE CASCADE,
    player_id VARCHAR(64) REFERENCES players(id),
    team_id VARCHAR(10) NOT NULL,
    amount INTEGER NOT NULL, -- In Lakhs
    bid_type VARCHAR(30) NOT NULL, -- 'BID', 'RTM_TRIGGERED', 'RTM_COUNTER_BID', 'RTM_MATCHED', 'SOLD'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indices for rapid querying
CREATE INDEX idx_bids_room ON bids(room_id, created_at DESC);
CREATE INDEX idx_retentions_room ON retentions(room_id, team_id);
`;

// ==========================================
// 2. NOSQL DATABASE SCHEMA (Firebase Firestore / MongoDB)
// ==========================================

export const FIREBASE_FIRESTORE_SCHEMA = {
  collections: {
    // Collection: users
    users: {
      documentId: 'userId (Google Auth UID)',
      fields: {
        email: 'string (authenticated Google email)',
        displayName: 'string (authenticated Google name or email prefix)',
        photoURL: 'string (authenticated Google avatar)',
        createdAt: 'timestamp',
        lastLoginAt: 'timestamp',
      },
    },

    // Collection: auction_rooms
    auction_rooms: {
      documentId: 'roomId (e.g. room-IPL2026)',
      fields: {
        roomCode: 'string (6-digit alphanumeric: IPL2026)',
        hostUserId: 'string (ref: users)',
        hostName: 'string',
        gameMode: 'string ("MEGA" | "MINI" | "CLEAN_SLATE")',
        stage: 'string ("LOBBY" | "RETENTION" | "LIVE" | "ACCELERATED" | "LEADERBOARD")',
        activeTeamIds: 'array of strings (["CSK", "MI"])',
        currentPlayerId: 'string (ref: players)',
        currentBid: 'number (in Lakhs, e.g. 1850)',
        leadingTeamId: 'string ("MI")',
        hammerStage: 'number (0, 1, 2, 3)',
        timer: 'number (remaining seconds)',
        rtmState: {
          active: 'boolean',
          playerId: 'string',
          originalWinningTeamId: 'string',
          originalBid: 'number',
          previousTeamId: 'string',
          step: 'string ("AWAITING_RTM_DECISION" | "AWAITING_COUNTER_BID" | "AWAITING_FINAL_MATCH")',
          counterBid: 'number',
        },
        createdAt: 'timestamp',
      },
      subcollections: {
        // Subcollection: teams
        teams: {
          documentId: 'teamId ("CSK", "MI", ...)',
          fields: {
            name: 'string',
            shortName: 'string',
            purse: 'number (e.g. 10200)',
            initialPurse: 'number (12000)',
            rtmCardsRemaining: 'number (4)',
            isActive: 'boolean (true if human claimed, false if inactive)',
            ownerUserId: 'string',
            ownerName: 'string',
            squad: 'array of player objects with soldPrice and status',
          },
        },
        // Subcollection: bids
        bids: {
          documentId: 'bidId',
          fields: {
            teamId: 'string',
            teamName: 'string',
            amount: 'number',
            type: 'string ("BID" | "SOLD" | "RTM_MATCHED")',
            timestamp: 'number',
          },
        },
        // Subcollection: retentions
        retentions: {
          documentId: 'playerId',
          fields: {
            teamId: 'string',
            isCapped: 'boolean',
            deductionLakhs: 'number',
            timestamp: 'number',
          },
        },
      },
    },

    // Collection: players (Master pool)
    players: {
      documentId: 'playerId (e.g. p-rohit-sharma)',
      fields: {
        name: 'string',
        role: 'string',
        isOverseas: 'boolean',
        country: 'string',
        previousTeam: 'string ("MI")',
        previousIPLSeasonsPlayed: 'number (e.g. 17 - strictly checked for retention)',
        basePrice: 'number (in Lakhs, e.g. 200)',
        currentSet: 'string ("M1")',
        photoUrl: 'string',
        hiddenFormRating: 'number (94)',
        stats: {
          matches: 'number',
          runs: 'number',
          wickets: 'number',
          strikeRate: 'number',
          economy: 'number',
        },
      },
    },
  },
};
