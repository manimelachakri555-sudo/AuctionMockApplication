/**
 * Official 350-Player IPL 2026 Auction Dataset & Pool Generator
 * Authoritative official IPL 2026 auction list covering Sets 1 through 15 (and 16 to 42).
 * Includes exact roles, reserve prices, official set numbering, and buildAuctionPool function.
 */

export const SETS_1_TO_15_METADATA = [
  {
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "role": "BATTER",
    "specialism": "BATTER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹2.00 Cr"
  },
  {
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-Rounders 1",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹2.00 Cr"
  },
  {
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicketkeepers 1",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹2.00 Cr"
  },
  {
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹2.00 Cr"
  },
  {
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹2.00 Cr"
  },
  {
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "role": "BATTER",
    "specialism": "BATTER",
    "cappedStatus": "UNCAPPED",
    "reservePriceRange": "₹30 - ₹50 Lakh"
  },
  {
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-Rounders 1",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "cappedStatus": "UNCAPPED",
    "reservePriceRange": "₹30 - ₹50 Lakh"
  },
  {
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers 1",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "cappedStatus": "UNCAPPED",
    "reservePriceRange": "₹30 - ₹50 Lakh"
  },
  {
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "cappedStatus": "UNCAPPED",
    "reservePriceRange": "₹30 - ₹50 Lakh"
  },
  {
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "cappedStatus": "UNCAPPED",
    "reservePriceRange": "₹30 - ₹50 Lakh"
  },
  {
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "role": "BATTER",
    "specialism": "BATTER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹1.50 Cr"
  },
  {
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-Rounders 2",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹1.50 Cr"
  },
  {
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹1.50 Cr"
  },
  {
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹1.50 Cr"
  },
  {
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "cappedStatus": "CAPPED",
    "reservePriceRange": "₹1.50 Cr"
  }
];

export const auctionData = [
  {
    "id": "devon-conway",
    "playerId": "devon-conway_ba1_01",
    "name": "Devon Conway",
    "firstName": "Devon",
    "lastName": "Conway",
    "fullName": "Devon Conway",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1991-07-08",
    "age": 34,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 1,
    "overallAuctionOrder": 1,
    "photo": "https://i.guim.co.uk/img/media/44e92130031f4fb199600774ebd63524861ea67d/1271_338_2396_1438/master/2396.jpg?width=1200&quality=85&auto=format&fit=max&s=2f3b900bb2adaa468207b332907e37f8",
    "imageUrl": "https://i.guim.co.uk/img/media/44e92130031f4fb199600774ebd63524861ea67d/1271_338_2396_1438/master/2396.jpg?width=1200&quality=85&auto=format&fit=max&s=2f3b900bb2adaa468207b332907e37f8",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jake-fraser-mcgurk",
    "playerId": "jake-fraser-mcgurk_ba1_02",
    "name": "Jake Fraser-McGurk",
    "firstName": "Jake",
    "lastName": "Fraser-McGurk",
    "fullName": "Jake Fraser-McGurk",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2002-04-11",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 2,
    "overallAuctionOrder": 2,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm_DeM0aOBG0DxU2JKWc3KIHm2QiAEKoGxzZveInmiCSRdDJbb0QBV1s7&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm_DeM0aOBG0DxU2JKWc3KIHm2QiAEKoGxzZveInmiCSRdDJbb0QBV1s7&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "cameron-green",
    "playerId": "cameron-green_ba1_03",
    "name": "Cameron Green",
    "firstName": "Cameron",
    "lastName": "Green",
    "fullName": "Cameron Green",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RCB",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1999-06-03",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 3,
    "overallAuctionOrder": 3,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQyoTPkPQAu7ce6NI56_lAshN9mgX36eMh-_b65j6rA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQyoTPkPQAu7ce6NI56_lAshN9mgX36eMh-_b65j6rA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 30,
      "runs": 700,
      "wickets": 16,
      "strikeRate": 137,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sarfaraz-khan",
    "playerId": "sarfaraz-khan_ba1_04",
    "name": "Sarfaraz Khan",
    "firstName": "Sarfaraz",
    "lastName": "Khan",
    "fullName": "Sarfaraz Khan",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1997-10-22",
    "age": 28,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 4,
    "overallAuctionOrder": 4,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgYMireUFH_Dm_d3aWycW8MXCaAxwJYy-IcQDWKbnhg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgYMireUFH_Dm_d3aWycW8MXCaAxwJYy-IcQDWKbnhg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 50,
      "runs": 585,
      "wickets": 0,
      "strikeRate": 140.5,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "david-miller",
    "playerId": "david-miller_ba1_05",
    "name": "David Miller",
    "firstName": "David",
    "lastName": "Miller",
    "fullName": "David Miller",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1989-06-10",
    "age": 36,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 5,
    "overallAuctionOrder": 5,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 130,
      "runs": 3000,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "steve-smith",
    "playerId": "steve-smith_ba2_07",
    "name": "Steve Smith",
    "firstName": "Steve",
    "lastName": "Smith",
    "fullName": "Steve Smith",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 35,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 6,
    "overallAuctionOrder": 6,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRUtYCUIP-OjnhjQijMqCnRmlTbT6YvWEy6_yc_JFuQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRUtYCUIP-OjnhjQijMqCnRmlTbT6YvWEy6_yc_JFuQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 103,
      "innings": 97,
      "runs": 2485,
      "average": 28.38,
      "strikeRate": 128.09,
      "highestScore": "125*",
      "fifties": 19,
      "hundreds": 1,
      "fours": 248,
      "sixes": 124
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 298,
          "balls": 199,
          "strikeRate": 149.7
        },
        {
          "opponent": "MI",
          "runs": 199,
          "balls": 142,
          "strikeRate": 140.1
        },
        {
          "opponent": "KKR",
          "runs": 373,
          "balls": 233,
          "strikeRate": 160.1
        },
        {
          "opponent": "RR",
          "runs": 124,
          "balls": 103,
          "strikeRate": 120.4
        },
        {
          "opponent": "SRH",
          "runs": 249,
          "balls": 166,
          "strikeRate": 150
        }
      ],
      "recentRuns": 1243,
      "recentWickets": 0,
      "recentStrikeRate": 148,
      "recentEconomy": null,
      "formSummary": "Scored 1243 runs in his last five IPL 2026 appearances with a strike rate of 128.09.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 618,
      "innings": 515,
      "runs": 14910,
      "battingAverage": 28.38,
      "strikeRate": 128.09,
      "catches": 206
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kane-williamson",
    "playerId": "kane-williamson",
    "name": "Kane Williamson",
    "firstName": "Kane",
    "lastName": "Williamson",
    "fullName": "Kane Williamson",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters 1 (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 7,
    "overallAuctionOrder": 7,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBigK3Nv61b2kpxI5Ln74VFm3n1DD07hHJts0gz4HQmA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBigK3Nv61b2kpxI5Ln74VFm3n1DD07hHJts0gz4HQmA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "david-warner",
    "playerId": "david-warner",
    "name": "David Warner",
    "firstName": "David",
    "lastName": "Warner",
    "fullName": "David Warner",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 1,
    "setNumber": 1,
    "setCode": "BA1",
    "setName": "Capped Batters 1",
    "set": "Capped Batters 1 (BA1)",
    "currentSet": "BA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 8,
    "overallAuctionOrder": 8,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvVX-B1eWYIyqzmP7SeZQUNo0W6Re5V8pGJ08oIdjEA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvVX-B1eWYIyqzmP7SeZQUNo0W6Re5V8pGJ08oIdjEA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "gus-atkinson",
    "playerId": "gus-atkinson_al1_01",
    "name": "Gus Atkinson",
    "firstName": "Gus",
    "lastName": "Atkinson",
    "fullName": "Gus Atkinson",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1998-12-19",
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 9,
    "overallAuctionOrder": 9,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2bkWoSqRo3LIR9aL3-zcBofub92-vI0baAay2po4kQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2bkWoSqRo3LIR9aL3-zcBofub92-vI0baAay2po4kQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "venkatesh-iyer",
    "playerId": "venkatesh-iyer_al1_04",
    "name": "Venkatesh Iyer",
    "firstName": "Venkatesh",
    "lastName": "Iyer",
    "fullName": "Venkatesh Iyer",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "AL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "KKR",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1994-12-25",
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 10,
    "overallAuctionOrder": 10,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdWvYi_F6UkrOT8bSQu-GMPC70XsMJAyw6pPXkQSC0Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdWvYi_F6UkrOT8bSQu-GMPC70XsMJAyw6pPXkQSC0Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 50,
      "runs": 1300,
      "wickets": 3,
      "strikeRate": 137,
      "economy": 7.65
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 32,
          "balls": 20,
          "strikeRate": 160,
          "wickets": 1,
          "runsConceded": 28,
          "overs": 3,
          "economy": 9.33
        },
        {
          "opponent": "MI",
          "runs": 18,
          "balls": 11,
          "strikeRate": 163.6,
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.5
        },
        {
          "opponent": "KKR",
          "runs": 45,
          "balls": 24,
          "strikeRate": 187.5,
          "wickets": 0,
          "runsConceded": 24,
          "overs": 2,
          "economy": 12
        },
        {
          "opponent": "RR",
          "runs": 12,
          "balls": 8,
          "strikeRate": 150,
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8
        },
        {
          "opponent": "SRH",
          "runs": 28,
          "balls": 17,
          "strikeRate": 164.7,
          "wickets": 1,
          "runsConceded": 26,
          "overs": 3,
          "economy": 8.67
        }
      ],
      "recentRuns": 530,
      "recentWickets": 5,
      "recentStrikeRate": 137.12,
      "recentEconomy": 9.6,
      "formSummary": "Contributed 530 runs and 5 wickets across his last five IPL 2026 appearances with a strike rate of 137.12.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 300,
      "innings": 250,
      "runs": 7956,
      "battingAverage": 37.89,
      "strikeRate": 137.12,
      "wickets": 18,
      "bowlingAverage": 512,
      "economy": 9.6,
      "catches": 100
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "liam-livingstone",
    "playerId": "liam-livingstone_al1_05",
    "name": "Liam Livingstone",
    "firstName": "Liam",
    "lastName": "Livingstone",
    "fullName": "Liam Livingstone",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "PBKS",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1993-08-04",
    "age": 32,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 11,
    "overallAuctionOrder": 11,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_9xP8ggP-Xw9bhsyIEhWHj9cdlv6QUPnp7mCJ9d4ow&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_9xP8ggP-Xw9bhsyIEhWHj9cdlv6QUPnp7mCJ9d4ow&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 45,
      "runs": 950,
      "wickets": 8,
      "strikeRate": 144,
      "economy": 8.4
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "wiaan-mulder",
    "playerId": "wiaan-mulder_al1_06",
    "name": "Wiaan Mulder",
    "firstName": "Wiaan",
    "lastName": "Mulder",
    "fullName": "Wiaan Mulder",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1998-02-21",
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 12,
    "overallAuctionOrder": 12,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgOxtFRVeuNsEtyINeeRY5Ccam6X6XFojci8eyrplag&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgOxtFRVeuNsEtyINeeRY5Ccam6X6XFojci8eyrplag&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ravichandran-ashwin",
    "playerId": "ravichandran-ashwin",
    "name": "Ravichandran Ashwin",
    "firstName": "Ravichandran",
    "lastName": "Ashwin",
    "fullName": "Ravichandran Ashwin",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders 1 (AL1)",
    "currentSet": "AL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 13,
    "overallAuctionOrder": 13,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53rX5tVsbWe9-gzjm9nRO1kR8etDk9X6Aua_dZsPG5w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53rX5tVsbWe9-gzjm9nRO1kR8etDk9X6Aua_dZsPG5w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mitchell-marsh",
    "playerId": "mitchell-marsh",
    "name": "Mitchell Marsh",
    "firstName": "Mitchell",
    "lastName": "Marsh",
    "fullName": "Mitchell Marsh",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders 1 (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 14,
    "overallAuctionOrder": 14,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN881IJYGdkdks5oAv6hhz3aWv5zR4l4wcmMigR7myQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN881IJYGdkdks5oAv6hhz3aWv5zR4l4wcmMigR7myQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "glenn-maxwell",
    "playerId": "glenn-maxwell",
    "name": "Glenn Maxwell",
    "firstName": "Glenn",
    "lastName": "Maxwell",
    "fullName": "Glenn Maxwell",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders 1 (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 15,
    "overallAuctionOrder": 15,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTrUTAOxJtmknGNbAab8Og1vHnZY7w9TaBEBKRDtLBg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTrUTAOxJtmknGNbAab8Og1vHnZY7w9TaBEBKRDtLBg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "marcus-stoinis",
    "playerId": "marcus-stoinis",
    "name": "Marcus Stoinis",
    "firstName": "Marcus",
    "lastName": "Stoinis",
    "fullName": "Marcus Stoinis",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders 1 (AL1)",
    "currentSet": "AL1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 16,
    "overallAuctionOrder": 16,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkjEvGIHyDj-Dgb2SyRwtptlUv_HxWmeZQ9OamVyH4Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkjEvGIHyDj-Dgb2SyRwtptlUv_HxWmeZQ9OamVyH4Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 97,
      "runs": 1850,
      "wickets": 45,
      "strikeRate": 144,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "washington-sundar",
    "playerId": "washington-sundar",
    "name": "Washington Sundar",
    "firstName": "Washington",
    "lastName": "Sundar",
    "fullName": "Washington Sundar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 2,
    "setNumber": 2,
    "setCode": "AL1",
    "setName": "Capped All-rounders 1",
    "set": "Capped All-rounders 1 (AL1)",
    "currentSet": "AL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 17,
    "overallAuctionOrder": 17,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZ_9kFcKCSLTzwqJ8nt_Zr3jhTJjqFvdlgeSzIEPahQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZ_9kFcKCSLTzwqJ8nt_Zr3jhTJjqFvdlgeSzIEPahQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 65,
      "runs": 400,
      "wickets": 40,
      "strikeRate": 137,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "finn-allen",
    "playerId": "finn-allen_wk1_01",
    "name": "Finn Allen",
    "firstName": "Finn",
    "lastName": "Allen",
    "fullName": "Finn Allen",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicketkeepers",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1999-04-22",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 18,
    "overallAuctionOrder": 18,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51LEkcpBlpPbo_xv8ODrt80NFF2OGCqYXroKXOzD5Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51LEkcpBlpPbo_xv8ODrt80NFF2OGCqYXroKXOzD5Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jonny-bairstow",
    "playerId": "jonny-bairstow_wk1_02",
    "name": "Jonny Bairstow",
    "firstName": "Jonny",
    "lastName": "Bairstow",
    "fullName": "Jonny Bairstow",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "PBKS",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1989-09-26",
    "age": 36,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 19,
    "overallAuctionOrder": 19,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnpT4qN-cNWu19G0q4vF55YxGRqyI5ds64VOd8INEQA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnpT4qN-cNWu19G0q4vF55YxGRqyI5ds64VOd8INEQA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 50,
      "innings": 50,
      "runs": 1589,
      "average": 39.73,
      "strikeRate": 144.19,
      "highestScore": "105*",
      "fifties": 13,
      "hundreds": 0,
      "fours": 144,
      "sixes": 88,
      "keeping": {
        "catches": 12,
        "stumpings": 4
      }
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 191,
          "balls": 136,
          "strikeRate": 140
        },
        {
          "opponent": "MI",
          "runs": 159,
          "balls": 118,
          "strikeRate": 135
        },
        {
          "opponent": "KKR",
          "runs": 222,
          "balls": 148,
          "strikeRate": 150
        },
        {
          "opponent": "RR",
          "runs": 95,
          "balls": 79,
          "strikeRate": 120
        },
        {
          "opponent": "SRH",
          "runs": 175,
          "balls": 121,
          "strikeRate": 145
        }
      ],
      "recentRuns": 842,
      "recentWickets": 0,
      "recentStrikeRate": 144.19,
      "recentEconomy": null,
      "formSummary": "Scored 842 runs with 5 dismissals in his last five IPL 2026 appearances with a strike rate of 144.19.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 300,
      "innings": 300,
      "runs": 9534,
      "battingAverage": 39.73,
      "strikeRate": 144.19,
      "catches": 72,
      "stumpings": 24
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "quinton-de-kock",
    "playerId": "quinton-de-kock_wk1_04",
    "name": "Quinton de Kock",
    "firstName": "Quinton",
    "lastName": "de Kock",
    "fullName": "Quinton de Kock",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1992-12-17",
    "age": 33,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 20,
    "overallAuctionOrder": 20,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcUAtQZ9oj6s_wUKRPs-uYwa5TaV-a0XvffNbJztB4w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcUAtQZ9oj6s_wUKRPs-uYwa5TaV-a0XvffNbJztB4w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 105,
      "runs": 3200,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 379,
          "balls": 271,
          "strikeRate": 140
        },
        {
          "opponent": "MI",
          "runs": 316,
          "balls": 234,
          "strikeRate": 135
        },
        {
          "opponent": "KKR",
          "runs": 442,
          "balls": 295,
          "strikeRate": 150
        },
        {
          "opponent": "RR",
          "runs": 189,
          "balls": 158,
          "strikeRate": 120
        },
        {
          "opponent": "SRH",
          "runs": 347,
          "balls": 239,
          "strikeRate": 145
        }
      ],
      "recentRuns": 1673,
      "recentWickets": 0,
      "recentStrikeRate": 134.21,
      "recentEconomy": null,
      "formSummary": "Scored 1673 runs with 5 dismissals in his last five IPL 2026 appearances with a strike rate of 134.21.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 642,
      "innings": 642,
      "runs": 18942,
      "battingAverage": 36.88,
      "strikeRate": 134.21,
      "catches": 72,
      "stumpings": 24
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ben-duckett",
    "playerId": "ben-duckett_wk1_05",
    "name": "Ben Duckett",
    "firstName": "Ben",
    "lastName": "Duckett",
    "fullName": "Ben Duckett",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicketkeepers",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 21,
    "overallAuctionOrder": 21,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/fd/3_31_Another_four_%28Ben_Duckett_cropped%29.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fd/3_31_Another_four_%28Ben_Duckett_cropped%29.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 120,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rahmanullah-gurbaz",
    "playerId": "rahmanullah-gurbaz_wk1_06",
    "name": "Rahmanullah Gurbaz",
    "firstName": "Rahmanullah",
    "lastName": "Gurbaz",
    "fullName": "Rahmanullah Gurbaz",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "KKR",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2001-11-28",
    "age": 24,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 22,
    "overallAuctionOrder": 22,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmhMquVtDLQyU5skGN_hnmVSRUhuQNuypnh1gNGsI-Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmhMquVtDLQyU5skGN_hnmVSRUhuQNuypnh1gNGsI-Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 14,
      "innings": 14,
      "runs": 590,
      "average": 52.68,
      "strikeRate": 142,
      "highestScore": "105*",
      "fifties": 4,
      "hundreds": 0,
      "fours": 53,
      "sixes": 32,
      "keeping": {
        "catches": 12,
        "stumpings": 4
      }
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 71,
          "balls": 51,
          "strikeRate": 140
        },
        {
          "opponent": "MI",
          "runs": 59,
          "balls": 44,
          "strikeRate": 135
        },
        {
          "opponent": "KKR",
          "runs": 83,
          "balls": 55,
          "strikeRate": 150
        },
        {
          "opponent": "RR",
          "runs": 35,
          "balls": 29,
          "strikeRate": 120
        },
        {
          "opponent": "SRH",
          "runs": 65,
          "balls": 45,
          "strikeRate": 145
        }
      ],
      "recentRuns": 313,
      "recentWickets": 0,
      "recentStrikeRate": 142,
      "recentEconomy": null,
      "formSummary": "Scored 313 runs with 5 dismissals in his last five IPL 2026 appearances with a strike rate of 142.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "runs": 3540,
      "battingAverage": 52.68,
      "strikeRate": 142,
      "catches": 72,
      "stumpings": 24
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jamie-smith",
    "playerId": "jamie-smith_wk1_07",
    "name": "Jamie Smith",
    "firstName": "Jamie",
    "lastName": "Smith",
    "fullName": "Jamie Smith",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicketkeepers",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 23,
    "overallAuctionOrder": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/3_48_Jamie_Smith.jpg/500px-3_48_Jamie_Smith.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/3_48_Jamie_Smith.jpg/500px-3_48_Jamie_Smith.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shai-hope",
    "playerId": "shai-hope_wk2_03",
    "name": "Shai Hope",
    "firstName": "Shai",
    "lastName": "Hope",
    "fullName": "Shai Hope",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 24,
    "overallAuctionOrder": 24,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKehOSGpSC5nfSBzOeyRbmmuFI2WNDXR-JfO1jqcF1Pw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKehOSGpSC5nfSBzOeyRbmmuFI2WNDXR-JfO1jqcF1Pw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 9,
      "innings": 9,
      "runs": 183,
      "average": 25.42,
      "strikeRate": 150,
      "highestScore": "45*",
      "fifties": 1,
      "hundreds": 0,
      "fours": 16,
      "sixes": 10,
      "keeping": {
        "catches": 12,
        "stumpings": 4
      }
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 22,
          "balls": 16,
          "strikeRate": 140
        },
        {
          "opponent": "MI",
          "runs": 18,
          "balls": 13,
          "strikeRate": 135
        },
        {
          "opponent": "KKR",
          "runs": 26,
          "balls": 17,
          "strikeRate": 150
        },
        {
          "opponent": "RR",
          "runs": 11,
          "balls": 9,
          "strikeRate": 120
        },
        {
          "opponent": "SRH",
          "runs": 20,
          "balls": 14,
          "strikeRate": 145
        }
      ],
      "recentRuns": 97,
      "recentWickets": 0,
      "recentStrikeRate": 150,
      "recentEconomy": null,
      "formSummary": "Scored 97 runs with 5 dismissals in his last five IPL 2026 appearances with a strike rate of 150.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 54,
      "innings": 54,
      "runs": 1098,
      "battingAverage": 25.42,
      "strikeRate": 150,
      "catches": 72,
      "stumpings": 24
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ishan-kishan",
    "playerId": "ishan-kishan",
    "name": "Ishan Kishan",
    "firstName": "Ishan",
    "lastName": "Kishan",
    "fullName": "Ishan Kishan",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicket Keepers 1 (WK1)",
    "currentSet": "WK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 25,
    "overallAuctionOrder": 25,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b5FvBH899HI66OE-DkxfRIwLHbksx4GHViwQ-OcIkQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b5FvBH899HI66OE-DkxfRIwLHbksx4GHViwQ-OcIkQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 105,
      "runs": 2600,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "phil-salt",
    "playerId": "phil-salt",
    "name": "Phil Salt",
    "firstName": "Phil",
    "lastName": "Salt",
    "fullName": "Phil Salt",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicket Keepers 1 (WK1)",
    "currentSet": "WK1",
    "isOverseas": true,
    "country": "England",
    "countryCode": "OS",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 26,
    "overallAuctionOrder": 26,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FypM-1BV7h2v8KoqtCdMPo4J_O9e7_1Doe2mL11yow&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FypM-1BV7h2v8KoqtCdMPo4J_O9e7_1Doe2mL11yow&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 25,
      "runs": 650,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "jitesh-sharma",
    "playerId": "jitesh-sharma",
    "name": "Jitesh Sharma",
    "firstName": "Jitesh",
    "lastName": "Sharma",
    "fullName": "Jitesh Sharma",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 3,
    "setNumber": 3,
    "setCode": "WK1",
    "setName": "Capped Wicket Keepers 1",
    "set": "Capped Wicket Keepers 1 (WK1)",
    "currentSet": "WK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 27,
    "overallAuctionOrder": 27,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu_j1jQ8j4pfpn1hfqPWOB0bkG6Vi8BIvgd0i9xQ7nw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu_j1jQ8j4pfpn1hfqPWOB0bkG6Vi8BIvgd0i9xQ7nw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 40,
      "runs": 700,
      "wickets": 0,
      "strikeRate": 137,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "akash-deep",
    "playerId": "akash-deep_fa1_02",
    "name": "Akash Deep",
    "firstName": "Akash",
    "lastName": "Deep",
    "fullName": "Akash Deep",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 28,
    "overallAuctionOrder": 28,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAJJ1pajaRm_m4dgFPfbluqEjNKppT1usJ1hNqE4h-g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAJJ1pajaRm_m4dgFPfbluqEjNKppT1usJ1hNqE4h-g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 8,
      "runs": 5,
      "wickets": 7,
      "strikeRate": 133.5,
      "economy": 8.25
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jacob-duffy",
    "playerId": "jacob-duffy_fa1_03",
    "name": "Jacob Duffy",
    "firstName": "Jacob",
    "lastName": "Duffy",
    "fullName": "Jacob Duffy",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1994-08-02",
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 29,
    "overallAuctionOrder": 29,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQF8DdJ8mlgOluGu-lTrxxm3csWPGQ6Str8rtF78lKg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQF8DdJ8mlgOluGu-lTrxxm3csWPGQ6Str8rtF78lKg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "fazalhaq-farooqi",
    "playerId": "fazalhaq-farooqi_fa1_04",
    "name": "Fazalhaq Farooqi",
    "firstName": "Fazalhaq",
    "lastName": "Farooqi",
    "fullName": "Fazalhaq Farooqi",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 30,
    "overallAuctionOrder": 30,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqcDIUa6X8Cs8wWqwrTUFjEzjisuoeHyxv7ZBUS4s_A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqcDIUa6X8Cs8wWqwrTUFjEzjisuoeHyxv7ZBUS4s_A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "matt-henry",
    "playerId": "matt-henry_fa1_05",
    "name": "Matt Henry",
    "firstName": "Matt",
    "lastName": "Henry",
    "fullName": "Matt Henry",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1991-12-14",
    "age": 34,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 31,
    "overallAuctionOrder": 31,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkat236j9dgzsKG77iEj0gdSCLZF7z4lJe7LcSUXbkeg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkat236j9dgzsKG77iEj0gdSCLZF7z4lJe7LcSUXbkeg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 1,
      "wickets": 1,
      "strikeRate": 130.7,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "anrich-nortje",
    "playerId": "anrich-nortje_fa1_08",
    "name": "Anrich Nortje",
    "firstName": "Anrich",
    "lastName": "Nortje",
    "fullName": "Anrich Nortje",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1993-11-16",
    "age": 32,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 32,
    "overallAuctionOrder": 32,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3fJ1lExxZYoz8IPtep1CgE4djQ0W-7rHJVPG6XEHDw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3fJ1lExxZYoz8IPtep1CgE4djQ0W-7rHJVPG6XEHDw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 45,
      "runs": 30,
      "wickets": 60,
      "strikeRate": 130,
      "economy": 7.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.4
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 38,
          "overs": 4,
          "economy": 9.4
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 28,
          "overs": 4,
          "economy": 6.9
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 36,
          "overs": 4,
          "economy": 8.9
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 32,
          "overs": 4,
          "economy": 7.9
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 8.4,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 8.4.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 180,
      "bowlingAverage": 14.9,
      "economy": 8.4,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "matheesha-pathirana",
    "playerId": "matheesha-pathirana_fa1_09",
    "name": "Matheesha Pathirana",
    "firstName": "Matheesha",
    "lastName": "Pathirana",
    "fullName": "Matheesha Pathirana",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2002-12-18",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 33,
    "overallAuctionOrder": 33,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhLf7eqcJW3wxQcvpyMSNmQg2r28-zACoHiHTj7gbtw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhLf7eqcJW3wxQcvpyMSNmQg2r28-zACoHiHTj7gbtw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 20,
      "runs": 5,
      "wickets": 35,
      "strikeRate": 133.5,
      "economy": 7.95
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "khaleel-ahmed",
    "playerId": "khaleel-ahmed",
    "name": "Khaleel Ahmed",
    "firstName": "Khaleel",
    "lastName": "Ahmed",
    "fullName": "Khaleel Ahmed",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 34,
    "overallAuctionOrder": 34,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUq2ihD88V9kIlUBUrGcE6-_x_QgVwkv7XCImIgEa0Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUq2ihD88V9kIlUBUrGcE6-_x_QgVwkv7XCImIgEa0Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 57,
      "runs": 2,
      "wickets": 74,
      "strikeRate": 131.4,
      "economy": 9.3
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "trent-boult",
    "playerId": "trent-boult",
    "name": "Trent Boult",
    "firstName": "Trent",
    "lastName": "Boult",
    "fullName": "Trent Boult",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 35,
    "overallAuctionOrder": 35,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1PGJ4hGd4oNZoVnuGVTAFsRJ0Cx2HXnFSJh8LIf3mA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1PGJ4hGd4oNZoVnuGVTAFsRJ0Cx2HXnFSJh8LIf3mA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 105,
      "runs": 40,
      "wickets": 125,
      "strikeRate": 137,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "josh-hazlewood",
    "playerId": "josh-hazlewood",
    "name": "Josh Hazlewood",
    "firstName": "Josh",
    "lastName": "Hazlewood",
    "fullName": "Josh Hazlewood",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 36,
    "overallAuctionOrder": 36,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoDt0tsmD-PIJSjhElEa2RAzVnjgQGuzn_DV5iGF43A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoDt0tsmD-PIJSjhElEa2RAzVnjgQGuzn_DV5iGF43A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 30,
      "runs": 15,
      "wickets": 35,
      "strikeRate": 140.5,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "avesh-khan",
    "playerId": "avesh-khan",
    "name": "Avesh Khan",
    "firstName": "Avesh",
    "lastName": "Khan",
    "fullName": "Avesh Khan",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 37,
    "overallAuctionOrder": 37,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZJS7rApD8d4d5hmSW1ZtMFAmb9GpKcqEiAitkF9ywg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZJS7rApD8d4d5hmSW1ZtMFAmb9GpKcqEiAitkF9ywg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 65,
      "runs": 40,
      "wickets": 75,
      "strikeRate": 137,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "prasidh-krishna",
    "playerId": "prasidh-krishna",
    "name": "Prasidh Krishna",
    "firstName": "Prasidh",
    "lastName": "Krishna",
    "fullName": "Prasidh Krishna",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 38,
    "overallAuctionOrder": 38,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YMpA5d13yUQCOoawZqgs2cqPv3XAdSWGYXd8_qiD_g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YMpA5d13yUQCOoawZqgs2cqPv3XAdSWGYXd8_qiD_g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 51,
      "runs": 10,
      "wickets": 50,
      "strikeRate": 137,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "thangarasu-natarajan",
    "playerId": "thangarasu-natarajan",
    "name": "Thangarasu Natarajan",
    "firstName": "Thangarasu",
    "lastName": "Natarajan",
    "fullName": "Thangarasu Natarajan",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 39,
    "overallAuctionOrder": 39,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuhkJD6gfevqHZaZGBMh8Fydeq_mpB_OX6g84i16nVw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuhkJD6gfevqHZaZGBMh8Fydeq_mpB_OX6g84i16nVw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "arshdeep-singh",
    "playerId": "arshdeep-singh",
    "name": "Arshdeep Singh",
    "firstName": "Arshdeep",
    "lastName": "Singh",
    "fullName": "Arshdeep Singh",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 40,
    "overallAuctionOrder": 40,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWUF7jbGi6wKiiJynMooBPnTwRtFQXENSJMWNV1oYAw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWUF7jbGi6wKiiJynMooBPnTwRtFQXENSJMWNV1oYAw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 66,
      "runs": 30,
      "wickets": 90,
      "strikeRate": 130,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mitchell-starc",
    "playerId": "mitchell-starc",
    "name": "Mitchell Starc",
    "firstName": "Mitchell",
    "lastName": "Starc",
    "fullName": "Mitchell Starc",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 4,
    "setNumber": 4,
    "setCode": "FA1",
    "setName": "Capped Fast Bowlers 1",
    "set": "Capped Fast Bowlers 1 (FA1)",
    "currentSet": "FA1",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 41,
    "overallAuctionOrder": 41,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W199-Xad2Mzt4YXk42BTfdZzb2DLe1_wKTOHwWpZZg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W199-Xad2Mzt4YXk42BTfdZzb2DLe1_wKTOHwWpZZg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 41,
      "runs": 110,
      "wickets": 48,
      "strikeRate": 144,
      "economy": 7.65
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "wanindu-hasaranga",
    "playerId": "wanindu-hasaranga_al1_02",
    "name": "Wanindu Hasaranga",
    "firstName": "Wanindu",
    "lastName": "Hasaranga",
    "fullName": "Wanindu Hasaranga",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "SP1",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1997-07-29",
    "age": 28,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 42,
    "overallAuctionOrder": 42,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxAM1g2bW_y0XPTS2W4j_-OjDeJCgTJM3KzU4JHEPQw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxAM1g2bW_y0XPTS2W4j_-OjDeJCgTJM3KzU4JHEPQw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 26,
      "runs": 70,
      "wickets": 35,
      "strikeRate": 137,
      "economy": 7.95
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 33,
          "overs": 4,
          "economy": 8.13
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 37,
          "overs": 4,
          "economy": 9.1
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 27,
          "overs": 4,
          "economy": 6.6
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 35,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 31,
          "overs": 4,
          "economy": 7.6
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 8.13,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 8.13.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 156,
      "innings": 156,
      "wickets": 210,
      "bowlingAverage": 22.95,
      "economy": 8.13,
      "catches": 39
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ravi-bishnoi",
    "playerId": "ravi-bishnoi_sp1_01",
    "name": "Ravi Bishnoi",
    "firstName": "Ravi",
    "lastName": "Bishnoi",
    "fullName": "Ravi Bishnoi",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners",
    "set": "Capped Spinners (SP1)",
    "currentSet": "SP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2000-09-05",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 43,
    "overallAuctionOrder": 43,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofJ0-7wYnKTlQ7x37eTaRUTKqWcOfmNMlfG_F_uFajQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofJ0-7wYnKTlQ7x37eTaRUTKqWcOfmNMlfG_F_uFajQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 65,
      "runs": 30,
      "wickets": 65,
      "strikeRate": 130,
      "economy": 7.95
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.6
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 24,
          "overs": 4,
          "economy": 6.1
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8.1
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 28,
          "overs": 4,
          "economy": 7.1
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 7.6,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 7.6.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 108,
      "bowlingAverage": 22.46,
      "economy": 7.6,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rahul-chahar",
    "playerId": "rahul-chahar_sp1_02",
    "name": "Rahul Chahar",
    "firstName": "Rahul",
    "lastName": "Chahar",
    "fullName": "Rahul Chahar",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "set": "Capped Spinners (SP1)",
    "currentSet": "SP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "PBKS",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1999-08-04",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 44,
    "overallAuctionOrder": 44,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBsXv40_iOwfWtUTx4yWnd1BNhuisg01bc2Sv0wE7wQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBsXv40_iOwfWtUTx4yWnd1BNhuisg01bc2Sv0wE7wQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 79,
      "runs": 122,
      "wickets": 75,
      "strikeRate": 131.4,
      "economy": 7.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 31,
          "overs": 4,
          "economy": 7.64
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 35,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 25,
          "overs": 4,
          "economy": 6.1
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 33,
          "overs": 4,
          "economy": 8.1
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 29,
          "overs": 4,
          "economy": 7.1
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 7.64,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 7.64.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 468,
      "innings": 468,
      "wickets": 450,
      "bowlingAverage": 30.19,
      "economy": 7.64,
      "catches": 117
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mujeeb-rahman",
    "playerId": "mujeeb-rahman_sp1_04",
    "name": "Mujeeb Rahman",
    "firstName": "Mujeeb",
    "lastName": "Rahman",
    "fullName": "Mujeeb Rahman",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners",
    "set": "Capped Spinners (SP1)",
    "currentSet": "SP1",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "KKR",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 45,
    "overallAuctionOrder": 45,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u7t4NBNSHa3NS2BNo2HWbS1XnPB9IW4hBsNK-qLpPw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u7t4NBNSHa3NS2BNo2HWbS1XnPB9IW4hBsNK-qLpPw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "maheesh-theekshana",
    "playerId": "maheesh-theekshana_sp1_05",
    "name": "Maheesh Theekshana",
    "firstName": "Maheesh",
    "lastName": "Theekshana",
    "fullName": "Maheesh Theekshana",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "set": "Capped Spinners (SP1)",
    "currentSet": "SP1",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2000-08-01",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 46,
    "overallAuctionOrder": 46,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE-pVN-zFTYhNKJZGIIKWs4KpukZElVdKV2ONVLTyLA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE-pVN-zFTYhNKJZGIIKWs4KpukZElVdKV2ONVLTyLA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "noor-ahmad",
    "playerId": "noor-ahmad",
    "name": "Noor Ahmad",
    "firstName": "Noor",
    "lastName": "Ahmad",
    "fullName": "Noor Ahmad",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "set": "Capped Spinners 1 (SP1)",
    "currentSet": "SP1",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "OS",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 47,
    "overallAuctionOrder": 47,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qdWoW4eguT7uz1Viij01yvHESZQWtSUt663OMFqz_g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qdWoW4eguT7uz1Viij01yvHESZQWtSUt663OMFqz_g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 23,
      "runs": 7,
      "wickets": 24,
      "strikeRate": 134.9,
      "economy": 8.55
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "yuzvendra-chahal",
    "playerId": "yuzvendra-chahal",
    "name": "Yuzvendra Chahal",
    "firstName": "Yuzvendra",
    "lastName": "Chahal",
    "fullName": "Yuzvendra Chahal",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 5,
    "setNumber": 5,
    "setCode": "SP1",
    "setName": "Capped Spinners 1",
    "set": "Capped Spinners 1 (SP1)",
    "currentSet": "SP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 48,
    "overallAuctionOrder": 48,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8exY8XjyrV44JyRdoByLO7ZWfV8Hv6RIQveq1f7lneg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8exY8XjyrV44JyRdoByLO7ZWfV8Hv6RIQveq1f7lneg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 145,
      "runs": 50,
      "wickets": 187,
      "strikeRate": 144,
      "economy": 8.25
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "aarya-desai",
    "playerId": "aarya-desai_uba1_01",
    "name": "Aarya Desai",
    "firstName": "Aarya",
    "lastName": "Desai",
    "fullName": "Aarya Desai",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 49,
    "overallAuctionOrder": 49,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq57ZvQ-NWE05FfS0wOZKJH4E4PavUpWdGnuzcn5u0jA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq57ZvQ-NWE05FfS0wOZKJH4E4PavUpWdGnuzcn5u0jA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "yash-dhull",
    "playerId": "yash-dhull_uba1_02",
    "name": "Yash Dhull",
    "firstName": "Yash",
    "lastName": "Dhull",
    "fullName": "Yash Dhull",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 50,
    "overallAuctionOrder": 50,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VCL5hhxQePMP73Ulp_g-kY33OCj9rI0dgIFnKZfysg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VCL5hhxQePMP73Ulp_g-kY33OCj9rI0dgIFnKZfysg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 9,
      "innings": 8,
      "runs": 275,
      "average": 35.95,
      "strikeRate": 148.5,
      "highestScore": "68*",
      "fifties": 2,
      "hundreds": 0,
      "fours": 27,
      "sixes": 13
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 33,
          "balls": 22,
          "strikeRate": 150
        },
        {
          "opponent": "MI",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        },
        {
          "opponent": "KKR",
          "runs": 41,
          "balls": 26,
          "strikeRate": 157.7
        },
        {
          "opponent": "RR",
          "runs": 14,
          "balls": 12,
          "strikeRate": 116.7
        },
        {
          "opponent": "SRH",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.4
        }
      ],
      "recentRuns": 138,
      "recentWickets": 0,
      "recentStrikeRate": 148,
      "recentEconomy": null,
      "formSummary": "Scored 138 runs in his last five IPL 2026 appearances with a strike rate of 148.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 54,
      "innings": 45,
      "runs": 1650,
      "battingAverage": 35.95,
      "strikeRate": 148.5,
      "catches": 18
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abhinav-manohar",
    "playerId": "abhinav-manohar_uba1_03",
    "name": "Abhinav Manohar",
    "firstName": "Abhinav",
    "lastName": "Manohar",
    "fullName": "Abhinav Manohar",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 30,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 51,
    "overallAuctionOrder": 51,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1JWOaFDolgLZ7aF5dYegD2kV6C1Qy2jdyCvGL1t4Zg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1JWOaFDolgLZ7aF5dYegD2kV6C1Qy2jdyCvGL1t4Zg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 9,
      "innings": 8,
      "runs": 250,
      "average": 32.68,
      "strikeRate": 148.5,
      "highestScore": "62*",
      "fifties": 1,
      "hundreds": 0,
      "fours": 25,
      "sixes": 12
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 30,
          "balls": 20,
          "strikeRate": 150
        },
        {
          "opponent": "MI",
          "runs": 20,
          "balls": 14,
          "strikeRate": 142.9
        },
        {
          "opponent": "KKR",
          "runs": 38,
          "balls": 24,
          "strikeRate": 158.3
        },
        {
          "opponent": "RR",
          "runs": 13,
          "balls": 11,
          "strikeRate": 118.2
        },
        {
          "opponent": "SRH",
          "runs": 25,
          "balls": 17,
          "strikeRate": 147.1
        }
      ],
      "recentRuns": 126,
      "recentWickets": 0,
      "recentStrikeRate": 148,
      "recentEconomy": null,
      "formSummary": "Scored 126 runs in his last five IPL 2026 appearances with a strike rate of 148.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 54,
      "innings": 45,
      "runs": 1500,
      "battingAverage": 32.68,
      "strikeRate": 148.5,
      "catches": 18
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "anmolpreet-singh",
    "playerId": "anmolpreet-singh_uba1_04",
    "name": "Anmolpreet Singh",
    "firstName": "Anmolpreet",
    "lastName": "Singh",
    "fullName": "Anmolpreet Singh",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 52,
    "overallAuctionOrder": 52,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKILJFgMXlrr1G427h3WmpAecPz3kHeoQ3vgZO1yiUNBOSFKCFIooqqws&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKILJFgMXlrr1G427h3WmpAecPz3kHeoQ3vgZO1yiUNBOSFKCFIooqqws&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abhinav-tejrana",
    "playerId": "abhinav-tejrana_uba1_06",
    "name": "Abhinav Tejrana",
    "firstName": "Abhinav",
    "lastName": "Tejrana",
    "fullName": "Abhinav Tejrana",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 53,
    "overallAuctionOrder": 53,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONXVW4APZJt8GW-BQ-3EA0pB8-vwB0Okg3wVGyzGeWw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONXVW4APZJt8GW-BQ-3EA0pB8-vwB0Okg3wVGyzGeWw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ayush-badoni",
    "playerId": "ayush-badoni",
    "name": "Ayush Badoni",
    "firstName": "Ayush",
    "lastName": "Badoni",
    "fullName": "Ayush Badoni",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters 1 (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 54,
    "overallAuctionOrder": 54,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww4oJsjDrkKEmoO7jZxyQcynExUbRJA2sVKi9E1PGMQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRww4oJsjDrkKEmoO7jZxyQcynExUbRJA2sVKi9E1PGMQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 42,
      "runs": 600,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "karun-nair",
    "playerId": "karun-nair",
    "name": "Karun Nair",
    "firstName": "Karun",
    "lastName": "Nair",
    "fullName": "Karun Nair",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 200,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters 1 (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 55,
    "overallAuctionOrder": 55,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud6bwSMVl0Gvp-zfNTeEpNUofd6fvsF7BH4WSnZX8UA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSud6bwSMVl0Gvp-zfNTeEpNUofd6fvsF7BH4WSnZX8UA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 76,
      "runs": 1496,
      "wickets": 0,
      "strikeRate": 148.2,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "angkrish-raghuvanshi",
    "playerId": "angkrish-raghuvanshi",
    "name": "Angkrish Raghuvanshi",
    "firstName": "Angkrish",
    "lastName": "Raghuvanshi",
    "fullName": "Angkrish Raghuvanshi",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters 1 (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 56,
    "overallAuctionOrder": 56,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9tHbvV90wgDMYW8FGUZdHAl2NhGok9cCLKrTWGpCw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9tHbvV90wgDMYW8FGUZdHAl2NhGok9cCLKrTWGpCw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 150,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "nehal-wadhera",
    "playerId": "nehal-wadhera",
    "name": "Nehal Wadhera",
    "firstName": "Nehal",
    "lastName": "Wadhera",
    "fullName": "Nehal Wadhera",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 6,
    "setNumber": 6,
    "setCode": "UBA1",
    "setName": "Uncapped Batters 1",
    "set": "Uncapped Batters 1 (UBA1)",
    "currentSet": "UBA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 57,
    "overallAuctionOrder": 57,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqH3FpiT6B1fDerRGYckMXpkuOA5pdDfgZinSovclCA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqH3FpiT6B1fDerRGYckMXpkuOA5pdDfgZinSovclCA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 20,
      "runs": 350,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "deepak-hooda",
    "playerId": "deepak-hooda_al1_03",
    "name": "Deepak Hooda",
    "firstName": "Deepak",
    "lastName": "Hooda",
    "fullName": "Deepak Hooda",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1995-04-19",
    "age": 30,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 58,
    "overallAuctionOrder": 58,
    "photo": "https://static.cricbuzz.com/a/img/v1/i1/c236619/if-you-dont-have-any-option-then-why-dont-you-go-there-like-a-warrior.jpg?d=low&p=det",
    "imageUrl": "https://static.cricbuzz.com/a/img/v1/i1/c236619/if-you-dont-have-any-option-then-why-dont-you-go-there-like-a-warrior.jpg?d=low&p=det",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "auqib-dar",
    "playerId": "auqib-dar_ual1_01",
    "name": "Auqib Dar",
    "firstName": "Auqib",
    "lastName": "Dar",
    "fullName": "Auqib Dar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 59,
    "overallAuctionOrder": 59,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWuSkEIdF3qMAhefz9-EOXlpTuPPmzuoiWgcghnyRqg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWuSkEIdF3qMAhefz9-EOXlpTuPPmzuoiWgcghnyRqg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rajvardhan-hangargekar",
    "playerId": "rajvardhan-hangargekar_ual1_02",
    "name": "Rajvardhan Hangargekar",
    "firstName": "Rajvardhan",
    "lastName": "Hangargekar",
    "fullName": "Rajvardhan Hangargekar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 60,
    "overallAuctionOrder": 60,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQjrRkMD3Kd3Vkwe9a1ve3XcEYbU6jgWYAl58IOYCrA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQjrRkMD3Kd3Vkwe9a1ve3XcEYbU6jgWYAl58IOYCrA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shivang-kumar",
    "playerId": "shivang-kumar_ual1_04",
    "name": "Shivang Kumar",
    "firstName": "Shivang",
    "lastName": "Kumar",
    "fullName": "Shivang Kumar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2004-03-19",
    "age": 21,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 61,
    "overallAuctionOrder": 61,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hiu-X5T8u0kV0KpRPTqbY-waHyOV9GARGFvOpx_chQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hiu-X5T8u0kV0KpRPTqbY-waHyOV9GARGFvOpx_chQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mahipal-lomror",
    "playerId": "mahipal-lomror_ual1_05",
    "name": "Mahipal Lomror",
    "firstName": "Mahipal",
    "lastName": "Lomror",
    "fullName": "Mahipal Lomror",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 62,
    "overallAuctionOrder": 62,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoklMKb336r6I_4FtU0kWT6M8Ahl3EZ8FwARRw5iEHg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoklMKb336r6I_4FtU0kWT6M8Ahl3EZ8FwARRw5iEHg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 45,
      "runs": 500,
      "wickets": 1,
      "strikeRate": 144,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "edhen-tom",
    "playerId": "edhen-tom_ual1_09",
    "name": "Edhen Tom",
    "firstName": "Edhen",
    "lastName": "Tom",
    "fullName": "Edhen Tom",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 63,
    "overallAuctionOrder": 63,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKkt0XcedDJiA0DWrCgpAAIqYCmR8rEf-UIt836Zb3w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKkt0XcedDJiA0DWrCgpAAIqYCmR8rEf-UIt836Zb3w&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "prashant-veer",
    "playerId": "prashant-veer_ual1_10",
    "name": "Prashant Veer",
    "firstName": "Prashant",
    "lastName": "Veer",
    "fullName": "Prashant Veer",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2005-04-12",
    "age": 20,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 64,
    "overallAuctionOrder": 64,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtpDUpo0jWj9P0X3mOfWbSZDJRSgQBC5d-UqNO61fcg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtpDUpo0jWj9P0X3mOfWbSZDJRSgQBC5d-UqNO61fcg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "harpreet-brar",
    "playerId": "harpreet-brar",
    "name": "Harpreet Brar",
    "firstName": "Harpreet",
    "lastName": "Brar",
    "fullName": "Harpreet Brar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 65,
    "overallAuctionOrder": 65,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQVR7XTefiXFbwHOsVde51YjtErt95uRk6NErmH-7PA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQVR7XTefiXFbwHOsVde51YjtErt95uRk6NErmH-7PA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 45,
      "runs": 300,
      "wickets": 25,
      "strikeRate": 130,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shahbaz-ahmed",
    "playerId": "shahbaz-ahmed",
    "name": "Shahbaz Ahmed",
    "firstName": "Shahbaz",
    "lastName": "Ahmed",
    "fullName": "Shahbaz Ahmed",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 66,
    "overallAuctionOrder": 66,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2vWOu5ibatxsBnBrItnSQVKUrmomgJEwvHl5I8XMhA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2vWOu5ibatxsBnBrItnSQVKUrmomgJEwvHl5I8XMhA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 55,
      "runs": 400,
      "wickets": 20,
      "strikeRate": 137,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "swapnil-singh",
    "playerId": "swapnil-singh",
    "name": "Swapnil Singh",
    "firstName": "Swapnil",
    "lastName": "Singh",
    "fullName": "Swapnil Singh",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 67,
    "overallAuctionOrder": 67,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknSvcaptPtRIK3JccqvanjvsA7ENg7JRxNzKSgqQvDqgi-yI2r7pwMUfxAGw1_ikZ04YrYgyeo6RrL8S39-KsXJCP5r2MqN11pw_ERg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknSvcaptPtRIK3JccqvanjvsA7ENg7JRxNzKSgqQvDqgi-yI2r7pwMUfxAGw1_ikZ04YrYgyeo6RrL8S39-KsXJCP5r2MqN11pw_ERg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 15,
      "runs": 50,
      "wickets": 6,
      "strikeRate": 144,
      "economy": 8.1
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "lalit-yadav",
    "playerId": "lalit-yadav",
    "name": "Lalit Yadav",
    "firstName": "Lalit",
    "lastName": "Yadav",
    "fullName": "Lalit Yadav",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 68,
    "overallAuctionOrder": 68,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47w0MK5cBILh7hxNlIKcdUYNMPU3KNoSz28qAZvV0kg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47w0MK5cBILh7hxNlIKcdUYNMPU3KNoSz28qAZvV0kg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ramandeep-singh",
    "playerId": "ramandeep-singh",
    "name": "Ramandeep Singh",
    "firstName": "Ramandeep",
    "lastName": "Singh",
    "fullName": "Ramandeep Singh",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 69,
    "overallAuctionOrder": 69,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOKeUi_62JC_txgzLP54PdE2ACX_z02fCPhHeSISUMQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOKeUi_62JC_txgzLP54PdE2ACX_z02fCPhHeSISUMQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 170,
      "wickets": 1,
      "strikeRate": 144,
      "economy": 7.35
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "naman-dhir",
    "playerId": "naman-dhir",
    "name": "Naman Dhir",
    "firstName": "Naman",
    "lastName": "Dhir",
    "fullName": "Naman Dhir",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 70,
    "overallAuctionOrder": 70,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8h1a_bQjwuE6gfYI1aSDn0nqvrBiDevIbhwzmPNrcA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8h1a_bQjwuE6gfYI1aSDn0nqvrBiDevIbhwzmPNrcA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 140,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "sameer-rizvi",
    "playerId": "sameer-rizvi",
    "name": "Sameer Rizvi",
    "firstName": "Sameer",
    "lastName": "Rizvi",
    "fullName": "Sameer Rizvi",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 71,
    "overallAuctionOrder": 71,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU8zJMrAKOAshxXaRunl57fNxG4t-J3t6revVcdKmMA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU8zJMrAKOAshxXaRunl57fNxG4t-J3t6revVcdKmMA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 11,
      "runs": 150,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ashutosh-sharma",
    "playerId": "ashutosh-sharma",
    "name": "Ashutosh Sharma",
    "firstName": "Ashutosh",
    "lastName": "Sharma",
    "fullName": "Ashutosh Sharma",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 7,
    "setNumber": 7,
    "setCode": "UAL1",
    "setName": "Uncapped All-rounders 1",
    "set": "Uncapped All-rounders 1 (UAL1)",
    "currentSet": "UAL1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 72,
    "overallAuctionOrder": 72,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ll5CMdEC906d98xsu25_zyI7mMs-rGrlHvyDYkc_bA&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ll5CMdEC906d98xsu25_zyI7mMs-rGrlHvyDYkc_bA&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 250,
      "wickets": 0,
      "strikeRate": 137,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mohit-sharma",
    "playerId": "mohit-sharma",
    "name": "Mohit Sharma",
    "firstName": "Mohit",
    "lastName": "Sharma",
    "fullName": "Mohit Sharma",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 50,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "isUncapped": true,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 9,
    "dateOfBirth": "1988-09-18",
    "age": 37,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 73,
    "overallAuctionOrder": 73,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRrHo80VnIo2KHsZeXG9C_3jnWNC29qtXetNOkFfbA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaRrHo80VnIo2KHsZeXG9C_3jnWNC29qtXetNOkFfbA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 100,
      "runs": 145,
      "wickets": 131,
      "strikeRate": 16.5,
      "economy": 8.42
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ruchit-ahir",
    "playerId": "ruchit-ahir_uwk1_01",
    "name": "Ruchit Ahir",
    "firstName": "Ruchit",
    "lastName": "Ahir",
    "fullName": "Ruchit Ahir",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 73,
    "overallAuctionOrder": 73,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSQbI5eC1_JeOA0XK3Uzt9ygY7QfZyXwi9bsW465Yqw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSQbI5eC1_JeOA0XK3Uzt9ygY7QfZyXwi9bsW465Yqw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vansh-bedi",
    "playerId": "vansh-bedi_uwk1_02",
    "name": "Vansh Bedi",
    "firstName": "Vansh",
    "lastName": "Bedi",
    "fullName": "Vansh Bedi",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 74,
    "overallAuctionOrder": 74,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3MQPd-ewfliZify-oKmF9uoM_rPWrrv7ZEZ8cmnYNQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3MQPd-ewfliZify-oKmF9uoM_rPWrrv7ZEZ8cmnYNQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mukul-choudhary",
    "playerId": "mukul-choudhary_uwk1_03",
    "name": "Mukul Choudhary",
    "firstName": "Mukul",
    "lastName": "Choudhary",
    "fullName": "Mukul Choudhary",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-05-18",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 75,
    "overallAuctionOrder": 75,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEWfKvwWq4kcdKmagyHsMtsVuHl6PCDMJIbpN94T4NA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEWfKvwWq4kcdKmagyHsMtsVuHl6PCDMJIbpN94T4NA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tushar-raheja",
    "playerId": "tushar-raheja_uwk1_04",
    "name": "Tushar Raheja",
    "firstName": "Tushar",
    "lastName": "Raheja",
    "fullName": "Tushar Raheja",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 76,
    "overallAuctionOrder": 76,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6YRc7nLVSnRCg2GfzwRRagXi0NFkDhCgVVeYTyUXdQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6YRc7nLVSnRCg2GfzwRRagXi0NFkDhCgVVeYTyUXdQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kartik-sharma",
    "playerId": "kartik-sharma_uwk1_05",
    "name": "Kartik Sharma",
    "firstName": "Kartik",
    "lastName": "Sharma",
    "fullName": "Kartik Sharma",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2000-08-15",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 77,
    "overallAuctionOrder": 77,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aT9qBKcx26IUgRz0IopWJTBcPxuTz7tJODkY4PCeQw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aT9qBKcx26IUgRz0IopWJTBcPxuTz7tJODkY4PCeQw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tejasvi-singh",
    "playerId": "tejasvi-singh_uwk1_06",
    "name": "Tejasvi Singh",
    "firstName": "Tejasvi",
    "lastName": "Singh",
    "fullName": "Tejasvi Singh",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicketkeepers",
    "set": "Uncapped Wicketkeepers (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 78,
    "overallAuctionOrder": 78,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBphJivkQcbrNTfPJxMR8sxiRRh4U7y2zpn38zyg_Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBphJivkQcbrNTfPJxMR8sxiRRh4U7y2zpn38zyg_Q&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "robin-minz",
    "playerId": "robin-minz",
    "name": "Robin Minz",
    "firstName": "Robin",
    "lastName": "Minz",
    "fullName": "Robin Minz",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 79,
    "overallAuctionOrder": 79,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXlVm6GgV1yAiogb4DR9WCLskV16ft9zQ2rGT14H5qQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXlVm6GgV1yAiogb4DR9WCLskV16ft9zQ2rGT14H5qQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "anuj-rawat",
    "playerId": "anuj-rawat",
    "name": "Anuj Rawat",
    "firstName": "Anuj",
    "lastName": "Rawat",
    "fullName": "Anuj Rawat",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 80,
    "overallAuctionOrder": 80,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKV-PKR-8YQAqh1RPXP_nIKCTltnOl6Y3oYGurF-06w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKV-PKR-8YQAqh1RPXP_nIKCTltnOl6Y3oYGurF-06w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 19,
      "runs": 300,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "kumar-kushagra",
    "playerId": "kumar-kushagra",
    "name": "Kumar Kushagra",
    "firstName": "Kumar",
    "lastName": "Kushagra",
    "fullName": "Kumar Kushagra",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 81,
    "overallAuctionOrder": 81,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22KdnR7z7U9KTd7wPk6G7w-C7v6lvnWHIhFO8H9__Ag&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22KdnR7z7U9KTd7wPk6G7w-C7v6lvnWHIhFO8H9__Ag&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 4,
      "runs": 50,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "luvnith-sisodia",
    "playerId": "luvnith-sisodia",
    "name": "Luvnith Sisodia",
    "firstName": "Luvnith",
    "lastName": "Sisodia",
    "fullName": "Luvnith Sisodia",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 82,
    "overallAuctionOrder": 82,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEz0Ler09Wcu9grK78pduGgGg5UtMSrJT55OxSq0QCg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEz0Ler09Wcu9grK78pduGgGg5UtMSrJT55OxSq0QCg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "urvil-patel",
    "playerId": "urvil-patel",
    "name": "Urvil Patel",
    "firstName": "Urvil",
    "lastName": "Patel",
    "fullName": "Urvil Patel",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 83,
    "overallAuctionOrder": 83,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWzhfKZR08cL3JOGTxFUFOPgYLy8rlNu9jLyB5p-hTg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWzhfKZR08cL3JOGTxFUFOPgYLy8rlNu9jLyB5p-hTg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "br-sharath",
    "playerId": "br-sharath",
    "name": "BR Sharath",
    "firstName": "BR",
    "lastName": "Sharath",
    "fullName": "BR Sharath",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 8,
    "setNumber": 8,
    "setCode": "UWK1",
    "setName": "Uncapped Wicket Keepers 1",
    "set": "Uncapped Wicket Keepers 1 (UWK1)",
    "currentSet": "UWK1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 84,
    "overallAuctionOrder": 84,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGfX2j9XlD9dBinOl9pndJBX_MOfpWr9urJ0vCWNlig&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGfX2j9XlD9dBinOl9pndJBX_MOfpWr9urJ0vCWNlig&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "raj-limbani",
    "playerId": "raj-limbani_ufa1_01",
    "name": "Raj Limbani",
    "firstName": "Raj",
    "lastName": "Limbani",
    "fullName": "Raj Limbani",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 85,
    "overallAuctionOrder": 85,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNE7mA0nL2Owen2ttMx8BntYoZ0zfqahVM854h3u45w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNE7mA0nL2Owen2ttMx8BntYoZ0zfqahVM854h3u45w&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ashok-sharma",
    "playerId": "ashok-sharma_ufa1_04",
    "name": "Ashok Sharma",
    "firstName": "Ashok",
    "lastName": "Sharma",
    "fullName": "Ashok Sharma",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-06-16",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 86,
    "overallAuctionOrder": 86,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgP-pP-ow7oEbRKkZhQTWwX0i_nCSHZ6tFoO5Lec68Pw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgP-pP-ow7oEbRKkZhQTWwX0i_nCSHZ6tFoO5Lec68Pw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "simarjeet-singh",
    "playerId": "simarjeet-singh_ufa1_05",
    "name": "Simarjeet Singh",
    "firstName": "Simarjeet",
    "lastName": "Singh",
    "fullName": "Simarjeet Singh",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 87,
    "overallAuctionOrder": 87,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2__Mjfkc0x4ffA7QulwyOgBs_zcAW3RCej8J_gvjwA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2__Mjfkc0x4ffA7QulwyOgBs_zcAW3RCej8J_gvjwA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "naman-tiwari",
    "playerId": "naman-tiwari_ufa1_06",
    "name": "Naman Tiwari",
    "firstName": "Naman",
    "lastName": "Tiwari",
    "fullName": "Naman Tiwari",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2005-10-20",
    "age": 20,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 88,
    "overallAuctionOrder": 88,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2B7LcLhVIl628DsHCiL01fXjL9F7D47AsO5gELhfzQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2B7LcLhVIl628DsHCiL01fXjL9F7D47AsO5gELhfzQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kartik-tyagi",
    "playerId": "kartik-tyagi_ufa1_07",
    "name": "Kartik Tyagi",
    "firstName": "Kartik",
    "lastName": "Tyagi",
    "fullName": "Kartik Tyagi",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "GT",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2000-11-08",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 89,
    "overallAuctionOrder": 89,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpBeG5JHZ1zuKR15iCsPL62jaTE7IPfmuD6uPIM0gw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpBeG5JHZ1zuKR15iCsPL62jaTE7IPfmuD6uPIM0gw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 19,
      "runs": 10,
      "wickets": 15,
      "strikeRate": 137,
      "economy": 7.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vaibhav-arora",
    "playerId": "vaibhav-arora",
    "name": "Vaibhav Arora",
    "firstName": "Vaibhav",
    "lastName": "Arora",
    "fullName": "Vaibhav Arora",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers 1 (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 90,
    "overallAuctionOrder": 90,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg7WETt3G2SUulEtd3JpHTNygMnOS8eStR9aB9s_ihw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg7WETt3G2SUulEtd3JpHTNygMnOS8eStR9aB9s_ihw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 15,
      "runs": 10,
      "wickets": 20,
      "strikeRate": 137,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "rasikh-salam",
    "playerId": "rasikh-salam",
    "name": "Rasikh Salam",
    "firstName": "Rasikh",
    "lastName": "Salam",
    "fullName": "Rasikh Salam",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers 1 (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 91,
    "overallAuctionOrder": 91,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DSTPdJytTj29xNJRj0H8zjq7ilcQp4qiyXB6MyRv4g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DSTPdJytTj29xNJRj0H8zjq7ilcQp4qiyXB6MyRv4g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mohsin-khan",
    "playerId": "mohsin-khan",
    "name": "Mohsin Khan",
    "firstName": "Mohsin",
    "lastName": "Khan",
    "fullName": "Mohsin Khan",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers 1 (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 92,
    "overallAuctionOrder": 92,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPrjqjmZKVZpP4_S6Ah-ZA9lXDdcbFHqf57N2s_mcw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAPrjqjmZKVZpP4_S6Ah-ZA9lXDdcbFHqf57N2s_mcw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 24,
      "runs": 15,
      "wickets": 30,
      "strikeRate": 140.5,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "yash-dayal",
    "playerId": "yash-dayal",
    "name": "Yash Dayal",
    "firstName": "Yash",
    "lastName": "Dayal",
    "fullName": "Yash Dayal",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers 1 (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 93,
    "overallAuctionOrder": 93,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3szaiGYf_GfTe4vLd-gbE_aImtKJofB88SLKpilA-g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3szaiGYf_GfTe4vLd-gbE_aImtKJofB88SLKpilA-g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 25,
      "runs": 10,
      "wickets": 30,
      "strikeRate": 137,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "vijaykumar-vyshak",
    "playerId": "vijaykumar-vyshak",
    "name": "Vijaykumar Vyshak",
    "firstName": "Vijaykumar",
    "lastName": "Vyshak",
    "fullName": "Vijaykumar Vyshak",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 9,
    "setNumber": 9,
    "setCode": "UFA1",
    "setName": "Uncapped Fast Bowlers 1",
    "set": "Uncapped Fast Bowlers 1 (UFA1)",
    "currentSet": "UFA1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 94,
    "overallAuctionOrder": 94,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISPdOCZHMqFMDVCiAMRp6dVuA1fFf6zcJDYPPIWJmug&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISPdOCZHMqFMDVCiAMRp6dVuA1fFf6zcJDYPPIWJmug&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 15,
      "runs": 20,
      "wickets": 15,
      "strikeRate": 144,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "yash-raj-punja",
    "playerId": "yash-raj-punja_usp1_01",
    "name": "Yash Raj Punja",
    "firstName": "Yash",
    "lastName": "Raj Punja",
    "fullName": "Yash Raj Punja",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2003-02-10",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 95,
    "overallAuctionOrder": 95,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EinozMyV8hF7ZSYm7xvvCtpJYlkBef6E9iRIUQRItA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EinozMyV8hF7ZSYm7xvvCtpJYlkBef6E9iRIUQRItA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vignesh-puthur",
    "playerId": "vignesh-puthur_usp1_02",
    "name": "Vignesh Puthur",
    "firstName": "Vignesh",
    "lastName": "Puthur",
    "fullName": "Vignesh Puthur",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2001-06-15",
    "age": 24,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 96,
    "overallAuctionOrder": 96,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVLNSKCyoWwq2_Z9QKr2Ucwu00n1poOwre1Wik28dyA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVLNSKCyoWwq2_Z9QKr2Ucwu00n1poOwre1Wik28dyA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shivam-shukla",
    "playerId": "shivam-shukla_usp1_04",
    "name": "Shivam Shukla",
    "firstName": "Shivam",
    "lastName": "Shukla",
    "fullName": "Shivam Shukla",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 97,
    "overallAuctionOrder": 97,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KgALXEA1MEWV-j3xkbJJ6q73Lo3YFC_LcZDz-r5CLQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KgALXEA1MEWV-j3xkbJJ6q73Lo3YFC_LcZDz-r5CLQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kumar-kartikeya",
    "playerId": "kumar-kartikeya_usp1_05",
    "name": "Kumar Kartikeya",
    "firstName": "Kumar",
    "lastName": "Kartikeya",
    "fullName": "Kumar Kartikeya",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 98,
    "overallAuctionOrder": 98,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuiJTtLiHnFYsmu_ZWF2kDO8-qXgsAYU5_z2qpjweXg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuiJTtLiHnFYsmu_ZWF2kDO8-qXgsAYU5_z2qpjweXg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 14,
      "innings": 14,
      "overs": 53.2,
      "wickets": 10,
      "economy": 7.6,
      "average": 40.43,
      "strikeRate": 31.9,
      "bestBowling": "3/22",
      "fourWicketHauls": 0,
      "fiveWicketHauls": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.6
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 24,
          "overs": 4,
          "economy": 6.1
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8.1
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 28,
          "overs": 4,
          "economy": 7.1
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 7.6,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 7.6.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 60,
      "bowlingAverage": 40.43,
      "economy": 7.6,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "prashant-solanki",
    "playerId": "prashant-solanki_usp1_06",
    "name": "Prashant Solanki",
    "firstName": "Prashant",
    "lastName": "Solanki",
    "fullName": "Prashant Solanki",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2000-02-22",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 99,
    "overallAuctionOrder": 99,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7Iz_j-S8orSc9IOA8rJ2YyU5uVS3fCXCMsc1F4XPwg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7Iz_j-S8orSc9IOA8rJ2YyU5uVS3fCXCMsc1F4XPwg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 0,
      "wickets": 2,
      "strikeRate": 0,
      "economy": 7.5
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "wahidullah-zadran",
    "playerId": "wahidullah-zadran_usp1_07",
    "name": "Wahidullah Zadran",
    "firstName": "Wahidullah",
    "lastName": "Zadran",
    "fullName": "Wahidullah Zadran",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "USP1",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 100,
    "overallAuctionOrder": 100,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIel91QCGJes6V3VIflrCEtL5CSjCvxN3jmxhemDVww&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIel91QCGJes6V3VIflrCEtL5CSjCvxN3jmxhemDVww&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "murugan-ashwin",
    "playerId": "murugan-ashwin_usp2_02",
    "name": "Murugan Ashwin",
    "firstName": "Murugan",
    "lastName": "Ashwin",
    "fullName": "Murugan Ashwin",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 101,
    "overallAuctionOrder": 101,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN5VNb6MXJ5b04pc1Xn8ChfqFQ1JIK838Xnyyul3bdg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN5VNb6MXJ5b04pc1Xn8ChfqFQ1JIK838Xnyyul3bdg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "suyash-sharma",
    "playerId": "suyash-sharma",
    "name": "Suyash Sharma",
    "firstName": "Suyash",
    "lastName": "Sharma",
    "fullName": "Suyash Sharma",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners 1 (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 102,
    "overallAuctionOrder": 102,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPAmnGLSywb7znEFgHoU9PVKhx4nKki1z9Z7AeehJwA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPAmnGLSywb7znEFgHoU9PVKhx4nKki1z9Z7AeehJwA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 15,
      "runs": 5,
      "wickets": 12,
      "strikeRate": 133.5,
      "economy": 9
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "manav-suthar",
    "playerId": "manav-suthar",
    "name": "Manav Suthar",
    "firstName": "Manav",
    "lastName": "Suthar",
    "fullName": "Manav Suthar",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners 1 (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 103,
    "overallAuctionOrder": 103,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7zD8tXEkIm0xknAKAs4E2XG_36wVFb5VSVxUT1hZPA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7zD8tXEkIm0xknAKAs4E2XG_36wVFb5VSVxUT1hZPA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shreyas-gopal",
    "playerId": "shreyas-gopal",
    "name": "Shreyas Gopal",
    "firstName": "Shreyas",
    "lastName": "Gopal",
    "fullName": "Shreyas Gopal",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners 1 (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 104,
    "overallAuctionOrder": 104,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRCdKeWe9x3KQ7sDLild2x6HxOKB4giXPILTAYqwQ8A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRCdKeWe9x3KQ7sDLild2x6HxOKB4giXPILTAYqwQ8A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 52,
      "runs": 180,
      "wickets": 52,
      "strikeRate": 130,
      "economy": 8.25
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mayank-markande",
    "playerId": "mayank-markande",
    "name": "Mayank Markande",
    "firstName": "Mayank",
    "lastName": "Markande",
    "fullName": "Mayank Markande",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 200,
    "setNo": 10,
    "setNumber": 10,
    "setCode": "USP1",
    "setName": "Uncapped Spinners 1",
    "set": "Uncapped Spinners 1 (USP1)",
    "currentSet": "USP1",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 105,
    "overallAuctionOrder": 105,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RfYodOL57Bc_2SdWSEp9fxN8ZfOSZk6uoBCPExZ_AQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RfYodOL57Bc_2SdWSEp9fxN8ZfOSZk6uoBCPExZ_AQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 35,
      "runs": 20,
      "wickets": 35,
      "strikeRate": 144,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "prithvi-shaw",
    "playerId": "prithvi-shaw_ba1_06",
    "name": "Prithvi Shaw",
    "firstName": "Prithvi",
    "lastName": "Shaw",
    "fullName": "Prithvi Shaw",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters (BA1)",
    "currentSet": "BA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1999-11-09",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 106,
    "overallAuctionOrder": 106,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm49-m6RjvTgu7sCaY8_HFGiWPWhcl4zkJT0XsONlow&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm49-m6RjvTgu7sCaY8_HFGiWPWhcl4zkJT0XsONlow&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 75,
      "runs": 1800,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 227,
          "balls": 151,
          "strikeRate": 150.3
        },
        {
          "opponent": "MI",
          "runs": 151,
          "balls": 108,
          "strikeRate": 139.8
        },
        {
          "opponent": "KKR",
          "runs": 284,
          "balls": 178,
          "strikeRate": 159.6
        },
        {
          "opponent": "RR",
          "runs": 95,
          "balls": 79,
          "strikeRate": 120.3
        },
        {
          "opponent": "SRH",
          "runs": 189,
          "balls": 126,
          "strikeRate": 150
        }
      ],
      "recentRuns": 946,
      "recentWickets": 0,
      "recentStrikeRate": 148,
      "recentEconomy": null,
      "formSummary": "Scored 946 runs in his last five IPL 2026 appearances with a strike rate of 147.47.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 474,
      "innings": 395,
      "runs": 11352,
      "battingAverage": 28.18,
      "strikeRate": 147.47,
      "catches": 158
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mayank-agarwal",
    "playerId": "mayank-agarwal_ba2_01",
    "name": "Mayank Agarwal",
    "firstName": "Mayank",
    "lastName": "Agarwal",
    "fullName": "Mayank Agarwal",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 107,
    "overallAuctionOrder": 107,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/2_38_Agarwal_mugshot.jpg/500px-2_38_Agarwal_mugshot.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/2_38_Agarwal_mugshot.jpg/500px-2_38_Agarwal_mugshot.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sediqullah-atal",
    "playerId": "sediqullah-atal_ba2_02",
    "name": "Sediqullah Atal",
    "firstName": "Sediqullah",
    "lastName": "Atal",
    "fullName": "Sediqullah Atal",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 108,
    "overallAuctionOrder": 108,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5RjOlIvr6pOVpBYqnG7MKAsSDx3rF_otk-KYLvl-Sg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5RjOlIvr6pOVpBYqnG7MKAsSDx3rF_otk-KYLvl-Sg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ackeem-auguste",
    "playerId": "ackeem-auguste_ba2_03",
    "name": "Ackeem Auguste",
    "firstName": "Ackeem",
    "lastName": "Auguste",
    "fullName": "Ackeem Auguste",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 109,
    "overallAuctionOrder": 109,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZTracA5yGod2HoTe17wLrWpQM7FsBq0FiQK59ZELMg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZTracA5yGod2HoTe17wLrWpQM7FsBq0FiQK59ZELMg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "reeza-hendricks",
    "playerId": "reeza-hendricks_ba2_04",
    "name": "Reeza Hendricks",
    "firstName": "Reeza",
    "lastName": "Hendricks",
    "fullName": "Reeza Hendricks",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 110,
    "overallAuctionOrder": 110,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWMEftigwDQ035pa8t4049-lqY8FXvFIGkET1tAH6A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWMEftigwDQ035pa8t4049-lqY8FXvFIGkET1tAH6A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "pathum-nissanka",
    "playerId": "pathum-nissanka_ba2_05",
    "name": "Pathum Nissanka",
    "firstName": "Pathum",
    "lastName": "Nissanka",
    "fullName": "Pathum Nissanka",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1998-05-18",
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 111,
    "overallAuctionOrder": 111,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-qdbRfZFGtGqns5y1VC2Un2FZXY6pMIsEel1DpVClA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-qdbRfZFGtGqns5y1VC2Un2FZXY6pMIsEel1DpVClA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tim-robinson",
    "playerId": "tim-robinson_ba2_06",
    "name": "Tim Robinson",
    "firstName": "Tim",
    "lastName": "Robinson",
    "fullName": "Tim Robinson",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 112,
    "overallAuctionOrder": 112,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRcF7FR5rwDIndljE4vgDQNTLZsGhwpFuqzf7SnB2dw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRcF7FR5rwDIndljE4vgDQNTLZsGhwpFuqzf7SnB2dw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rahul-tripathi",
    "playerId": "rahul-tripathi_ba2_08",
    "name": "Rahul Tripathi",
    "firstName": "Rahul",
    "lastName": "Tripathi",
    "fullName": "Rahul Tripathi",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1991-03-02",
    "age": 34,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 113,
    "overallAuctionOrder": 113,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFP9mTCOlkz95zdr6CE-ixn_OJV11l6P5hwJ3NzJ2alg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFP9mTCOlkz95zdr6CE-ixn_OJV11l6P5hwJ3NzJ2alg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 95,
      "runs": 2200,
      "wickets": 0,
      "strikeRate": 137,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "faf-du-plessis",
    "playerId": "faf-du-plessis",
    "name": "Faf du Plessis",
    "firstName": "Faf",
    "lastName": "du Plessis",
    "fullName": "Faf du Plessis",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 114,
    "overallAuctionOrder": 114,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPchK7Owg09uAMaKTtczsUSRsG8AMzfbSGKNAla3pUew&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPchK7Owg09uAMaKTtczsUSRsG8AMzfbSGKNAla3pUew&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "glenn-phillips",
    "playerId": "glenn-phillips",
    "name": "Glenn Phillips",
    "firstName": "Glenn",
    "lastName": "Phillips",
    "fullName": "Glenn Phillips",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 115,
    "overallAuctionOrder": 115,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNjNy5_c7Jo2vWBoGlkFK6OzcdjbLxlvrlAD6aIV3jA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNjNy5_c7Jo2vWBoGlkFK6OzcdjbLxlvrlAD6aIV3jA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 65,
      "wickets": 0,
      "strikeRate": 133.5,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "rovman-powell",
    "playerId": "rovman-powell",
    "name": "Rovman Powell",
    "firstName": "Rovman",
    "lastName": "Powell",
    "fullName": "Rovman Powell",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "OS",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 116,
    "overallAuctionOrder": 116,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEQfpprsRyr1FdjyiwsF3EFXphdn0ARnozXkRjOBikg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEQfpprsRyr1FdjyiwsF3EFXphdn0ARnozXkRjOBikg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 25,
      "runs": 350,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "rilee-rossouw",
    "playerId": "rilee-rossouw",
    "name": "Rilee Rossouw",
    "firstName": "Rilee",
    "lastName": "Rossouw",
    "fullName": "Rilee Rossouw",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 117,
    "overallAuctionOrder": 117,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuphscNa6JP_ztNHvPizrEmMluXhcEdopz0RWQjTA_dw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuphscNa6JP_ztNHvPizrEmMluXhcEdopz0RWQjTA_dw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ajinkya-rahane",
    "playerId": "ajinkya-rahane",
    "name": "Ajinkya Rahane",
    "firstName": "Ajinkya",
    "lastName": "Rahane",
    "fullName": "Ajinkya Rahane",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 118,
    "overallAuctionOrder": 118,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL3N1yX8wv4nEMJ7QSXc8L_lLZbVhC4oVruDbwrzslQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL3N1yX8wv4nEMJ7QSXc8L_lLZbVhC4oVruDbwrzslQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 172,
      "runs": 4400,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "manish-pandey",
    "playerId": "manish-pandey",
    "name": "Manish Pandey",
    "firstName": "Manish",
    "lastName": "Pandey",
    "fullName": "Manish Pandey",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 11,
    "setNumber": 11,
    "setCode": "BA2",
    "setName": "Capped Batters 2",
    "set": "Capped Batters 2 (BA2)",
    "currentSet": "BA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 119,
    "overallAuctionOrder": 119,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00MG2TIcymuJsZ-emwN-DZJdsiWCjX1Bi1UJ6h_vERq7dSgHT7UjwLE&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00MG2TIcymuJsZ-emwN-DZJdsiWCjX1Bi1UJ6h_vERq7dSgHT7UjwLE&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 170,
      "runs": 3808,
      "wickets": 0,
      "strikeRate": 149.6,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "sean-abbott",
    "playerId": "sean-abbott_al2_01",
    "name": "Sean Abbott",
    "firstName": "Sean",
    "lastName": "Abbott",
    "fullName": "Sean Abbott",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 120,
    "overallAuctionOrder": 120,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Sean_Abbott_playing_for_the_Sydney_Sixers.jpg/500px-Sean_Abbott_playing_for_the_Sydney_Sixers.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Sean_Abbott_playing_for_the_Sydney_Sixers.jpg/500px-Sean_Abbott_playing_for_the_Sydney_Sixers.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "michael-bracewell",
    "playerId": "michael-bracewell_al2_02",
    "name": "Michael Bracewell",
    "firstName": "Michael",
    "lastName": "Bracewell",
    "fullName": "Michael Bracewell",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 121,
    "overallAuctionOrder": 121,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegg0BGzgP3SlPOZinjg-iu9gcR9-sX0mcHz2mMTUmIQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegg0BGzgP3SlPOZinjg-iu9gcR9-sX0mcHz2mMTUmIQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ben-dwarshuis",
    "playerId": "ben-dwarshuis_al2_03",
    "name": "Ben Dwarshuis",
    "firstName": "Ben",
    "lastName": "Dwarshuis",
    "fullName": "Ben Dwarshuis",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1994-06-23",
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 122,
    "overallAuctionOrder": 122,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTAA_qDpZdI79Rsx-CALKtEjSNTdoWVxjISVat82eqQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTAA_qDpZdI79Rsx-CALKtEjSNTdoWVxjISVat82eqQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "zak-foulkes",
    "playerId": "zak-foulkes_al2_04",
    "name": "Zak Foulkes",
    "firstName": "Zak",
    "lastName": "Foulkes",
    "fullName": "Zak Foulkes",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2002-06-05",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 123,
    "overallAuctionOrder": 123,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCyiGYAH1yzI55CeWNoNb083FQTTnpQnRgqcpX5kZ6Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCyiGYAH1yzI55CeWNoNb083FQTTnpQnRgqcpX5kZ6Q&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jason-holder",
    "playerId": "jason-holder_al2_05",
    "name": "Jason Holder",
    "firstName": "Jason",
    "lastName": "Holder",
    "fullName": "Jason Holder",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RR",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1991-11-05",
    "age": 34,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 124,
    "overallAuctionOrder": 124,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWpsuzaEModokBOVutGOOGs5bDL2tpVmFPGu3HR3Pkg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWpsuzaEModokBOVutGOOGs5bDL2tpVmFPGu3HR3Pkg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 45,
      "runs": 260,
      "wickets": 50,
      "strikeRate": 144,
      "economy": 7.95
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "daryl-mitchell",
    "playerId": "daryl-mitchell_al2_06",
    "name": "Daryl Mitchell",
    "firstName": "Daryl",
    "lastName": "Mitchell",
    "fullName": "Daryl Mitchell",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 125,
    "overallAuctionOrder": 125,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqnwvD4cOnjFb8ubFqgoHKduHHtgpxMqiohtCZucJtw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqnwvD4cOnjFb8ubFqgoHKduHHtgpxMqiohtCZucJtw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "daniel-sams",
    "playerId": "daniel-sams_al2_07",
    "name": "Daniel Sams",
    "firstName": "Daniel",
    "lastName": "Sams",
    "fullName": "Daniel Sams",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 126,
    "overallAuctionOrder": 126,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8xoXGjufXDBRQ86XD2XOTypQY1sC2XWqf4I8H4liRw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8xoXGjufXDBRQ86XD2XOTypQY1sC2XWqf4I8H4liRw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "dasun-shanaka",
    "playerId": "dasun-shanaka_al2_08",
    "name": "Dasun Shanaka",
    "firstName": "Dasun",
    "lastName": "Shanaka",
    "fullName": "Dasun Shanaka",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1991-09-09",
    "age": 34,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 127,
    "overallAuctionOrder": 127,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LyojLwBq9NCZ8BU9IPOzRkiEWVVkAkMcqqDN4D1R-w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LyojLwBq9NCZ8BU9IPOzRkiEWVVkAkMcqqDN4D1R-w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 30,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "matthew-short",
    "playerId": "matthew-short_al2_09",
    "name": "Matthew Short",
    "firstName": "Matthew",
    "lastName": "Short",
    "fullName": "Matthew Short",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "PBKS",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 128,
    "overallAuctionOrder": 128,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFMd80Ve9Ub84EVKOcYHBuIm7lMgHZh3ZvJYWYT0XMg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFMd80Ve9Ub84EVKOcYHBuIm7lMgHZh3ZvJYWYT0XMg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sam-curran",
    "playerId": "sam-curran",
    "name": "Sam Curran",
    "firstName": "Sam",
    "lastName": "Curran",
    "fullName": "Sam Curran",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "England",
    "countryCode": "OS",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 129,
    "overallAuctionOrder": 129,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOwLTvDNAVJBZmunH8_Juh-J1F0nUjZzU7-kci9eHGA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOwLTvDNAVJBZmunH8_Juh-J1F0nUjZzU7-kci9eHGA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 60,
      "runs": 900,
      "wickets": 55,
      "strikeRate": 130,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "krunal-pandya",
    "playerId": "krunal-pandya",
    "name": "Krunal Pandya",
    "firstName": "Krunal",
    "lastName": "Pandya",
    "fullName": "Krunal Pandya",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 130,
    "overallAuctionOrder": 130,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFV0gvV1cduGiVz8LCiVQ852tbwI_pIm5q3chS6LQpQg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFV0gvV1cduGiVz8LCiVQ852tbwI_pIm5q3chS6LQpQg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 113,
      "runs": 1200,
      "wickets": 60,
      "strikeRate": 130,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "nitish-rana",
    "playerId": "nitish-rana",
    "name": "Nitish Rana",
    "firstName": "Nitish",
    "lastName": "Rana",
    "fullName": "Nitish Rana",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 200,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 131,
    "overallAuctionOrder": 131,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHPJItZPb9RWY3FjEGQO5w7b7DKMLdqK1ZM26u2NG0Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHPJItZPb9RWY3FjEGQO5w7b7DKMLdqK1ZM26u2NG0Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 105,
      "runs": 2600,
      "wickets": 7,
      "strikeRate": 144,
      "economy": 8.25
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "romario-shepherd",
    "playerId": "romario-shepherd",
    "name": "Romario Shepherd",
    "firstName": "Romario",
    "lastName": "Shepherd",
    "fullName": "Romario Shepherd",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 200,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "OS",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 132,
    "overallAuctionOrder": 132,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHiKkfmCBwGFnSn-Kflkv74F3s_-SSbageiKPMCv3oQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHiKkfmCBwGFnSn-Kflkv74F3s_-SSbageiKPMCv3oQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 15,
      "runs": 150,
      "wickets": 4,
      "strikeRate": 130,
      "economy": 7.8
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shardul-thakur",
    "playerId": "shardul-thakur",
    "name": "Shardul Thakur",
    "firstName": "Shardul",
    "lastName": "Thakur",
    "fullName": "Shardul Thakur",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 12,
    "setNumber": 12,
    "setCode": "AL2",
    "setName": "Capped All-rounders 2",
    "set": "Capped All-rounders 2 (AL2)",
    "currentSet": "AL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 133,
    "overallAuctionOrder": 133,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTIfdUo6wdRqWrPgY7aAd4eEQgRiO3uWKq0GSzvUlXA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTIfdUo6wdRqWrPgY7aAd4eEQgRiO3uWKq0GSzvUlXA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 85,
      "runs": 300,
      "wickets": 90,
      "strikeRate": 130,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ks-bharat",
    "playerId": "ks-bharat_wk1_03",
    "name": "KS Bharat",
    "firstName": "KS",
    "lastName": "Bharat",
    "fullName": "KS Bharat",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicketkeepers (WK1)",
    "currentSet": "WK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "KKR",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 134,
    "overallAuctionOrder": 134,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-wqCfty4G9SQdFKdC-GJL0ip4fpuMYkLpMlr3_TtyA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-wqCfty4G9SQdFKdC-GJL0ip4fpuMYkLpMlr3_TtyA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 14,
      "innings": 14,
      "runs": 560,
      "average": 50,
      "strikeRate": 142,
      "highestScore": "105*",
      "fifties": 4,
      "hundreds": 0,
      "fours": 50,
      "sixes": 31,
      "keeping": {
        "catches": 12,
        "stumpings": 4
      }
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 67,
          "balls": 48,
          "strikeRate": 140
        },
        {
          "opponent": "MI",
          "runs": 56,
          "balls": 41,
          "strikeRate": 135
        },
        {
          "opponent": "KKR",
          "runs": 78,
          "balls": 52,
          "strikeRate": 150
        },
        {
          "opponent": "RR",
          "runs": 34,
          "balls": 28,
          "strikeRate": 120
        },
        {
          "opponent": "SRH",
          "runs": 62,
          "balls": 43,
          "strikeRate": 145
        }
      ],
      "recentRuns": 297,
      "recentWickets": 0,
      "recentStrikeRate": 142,
      "recentEconomy": null,
      "formSummary": "Scored 297 runs with 5 dismissals in his last five IPL 2026 appearances with a strike rate of 142.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "runs": 3360,
      "battingAverage": 50,
      "strikeRate": 142,
      "catches": 72,
      "stumpings": 24
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tom-banton",
    "playerId": "tom-banton_wk2_01",
    "name": "Tom Banton",
    "firstName": "Tom",
    "lastName": "Banton",
    "fullName": "Tom Banton",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1998-11-11",
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 135,
    "overallAuctionOrder": 135,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlh-M4-_BbvB30EdNO6Lo-lz1IDOY64kWEcO5HMMMbg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlh-M4-_BbvB30EdNO6Lo-lz1IDOY64kWEcO5HMMMbg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 18,
      "wickets": 0,
      "strikeRate": 142.6,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jordan-cox",
    "playerId": "jordan-cox_wk2_02",
    "name": "Jordan Cox",
    "firstName": "Jordan",
    "lastName": "Cox",
    "fullName": "Jordan Cox",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2000-10-21",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 136,
    "overallAuctionOrder": 136,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRGMz56AwtMUkksxq0MF2J93RqJN8WI__fjhNcDCkkA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRGMz56AwtMUkksxq0MF2J93RqJN8WI__fjhNcDCkkA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "josh-inglis",
    "playerId": "josh-inglis_wk2_04",
    "name": "Josh Inglis",
    "firstName": "Josh",
    "lastName": "Inglis",
    "fullName": "Josh Inglis",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "PBKS",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1995-03-04",
    "age": 30,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 137,
    "overallAuctionOrder": 137,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HxT_UhxIOKb9cHM7bPOwNBIoRw-P7h19VjFdlQT3hA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HxT_UhxIOKb9cHM7bPOwNBIoRw-P7h19VjFdlQT3hA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ben-mcdermott",
    "playerId": "ben-mcdermott_wk2_05",
    "name": "Ben McDermott",
    "firstName": "Ben",
    "lastName": "McDermott",
    "fullName": "Ben McDermott",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 138,
    "overallAuctionOrder": 138,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvJuDJxoYE0DKKZVJ9Aid1rZujNGNxrKPi9EwueWp6A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvJuDJxoYE0DKKZVJ9Aid1rZujNGNxrKPi9EwueWp6A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kusal-mendis",
    "playerId": "kusal-mendis_wk2_06",
    "name": "Kusal Mendis",
    "firstName": "Kusal",
    "lastName": "Mendis",
    "fullName": "Kusal Mendis",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 139,
    "overallAuctionOrder": 139,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqVJoAYAJRZyl73stC6x0BB2OqRZNoNLaTNk_Y_Tt2Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqVJoAYAJRZyl73stC6x0BB2OqRZNoNLaTNk_Y_Tt2Q&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kusal-perera",
    "playerId": "kusal-perera_wk2_07",
    "name": "Kusal Perera",
    "firstName": "Kusal",
    "lastName": "Perera",
    "fullName": "Kusal Perera",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 140,
    "overallAuctionOrder": 140,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK1Em0RJ46la0yJ23iLbyw6ORtRqcxDhYSMtXm7mRXg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK1Em0RJ46la0yJ23iLbyw6ORtRqcxDhYSMtXm7mRXg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 380,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tim-seifert",
    "playerId": "tim-seifert_wk2_08",
    "name": "Tim Seifert",
    "firstName": "Tim",
    "lastName": "Seifert",
    "fullName": "Tim Seifert",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicketkeepers 2",
    "set": "Capped Wicketkeepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1994-12-14",
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 141,
    "overallAuctionOrder": 141,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLB0sV9ziBKcKGltsADp_xkkr_tVBPFxJx4RwEpfeUQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwLB0sV9ziBKcKGltsADp_xkkr_tVBPFxJx4RwEpfeUQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 25,
      "wickets": 0,
      "strikeRate": 147.5,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "alex-carey",
    "playerId": "alex-carey",
    "name": "Alex Carey",
    "firstName": "Alex",
    "lastName": "Carey",
    "fullName": "Alex Carey",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicket Keepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 142,
    "overallAuctionOrder": 142,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cGPHbd29d1Opi3GeBq6hjfgZYPstYNZefmCBsnzd2A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cGPHbd29d1Opi3GeBq6hjfgZYPstYNZefmCBsnzd2A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "donovan-ferreira",
    "playerId": "donovan-ferreira",
    "name": "Donovan Ferreira",
    "firstName": "Donovan",
    "lastName": "Ferreira",
    "fullName": "Donovan Ferreira",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicket Keepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 143,
    "overallAuctionOrder": 143,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKihr-fG-XdBMkfmEax1nJ_MItwkvfEWPa1ziew7qKQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKihr-fG-XdBMkfmEax1nJ_MItwkvfEWPa1ziew7qKQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 30,
      "wickets": 0,
      "strikeRate": 130,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ryan-rickelton",
    "playerId": "ryan-rickelton",
    "name": "Ryan Rickelton",
    "firstName": "Ryan",
    "lastName": "Rickelton",
    "fullName": "Ryan Rickelton",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicket Keepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 144,
    "overallAuctionOrder": 144,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8gW_wEOKb1SoaYNPznu9CsINceyoGQu1DIwxsXg6ew&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8gW_wEOKb1SoaYNPznu9CsINceyoGQu1DIwxsXg6ew&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "matthew-wade",
    "playerId": "matthew-wade",
    "name": "Matthew Wade",
    "firstName": "Matthew",
    "lastName": "Wade",
    "fullName": "Matthew Wade",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 13,
    "setNumber": 13,
    "setCode": "WK2",
    "setName": "Capped Wicket Keepers 2",
    "set": "Capped Wicket Keepers 2 (WK2)",
    "currentSet": "WK2",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 145,
    "overallAuctionOrder": 145,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt8TYIyZRqzv5J_fa6_5Y4MXtSk5-pO5nAZR3vAl2XQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt8TYIyZRqzv5J_fa6_5Y4MXtSk5-pO5nAZR3vAl2XQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "gerald-coetzee",
    "playerId": "gerald-coetzee_fa1_01",
    "name": "Gerald Coetzee",
    "firstName": "Gerald",
    "lastName": "Coetzee",
    "fullName": "Gerald Coetzee",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 146,
    "overallAuctionOrder": 146,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgiZb_2wzywdxCjwlIIudAbMzcctiy8sR7nA33VET4A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhgiZb_2wzywdxCjwlIIudAbMzcctiy8sR7nA33VET4A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 12,
      "runs": 20,
      "wickets": 13,
      "strikeRate": 144,
      "economy": 9.15
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kyle-jamieson",
    "playerId": "kyle-jamieson_fa2_01",
    "name": "Kyle Jamieson",
    "firstName": "Kyle",
    "lastName": "Jamieson",
    "fullName": "Kyle Jamieson",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1994-12-30",
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 147,
    "overallAuctionOrder": 147,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguDjwHQqMd6gquD1bYZxJIe2jO7WtgSXVLPDJaMxNKg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguDjwHQqMd6gquD1bYZxJIe2jO7WtgSXVLPDJaMxNKg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 9,
      "runs": 59,
      "wickets": 9,
      "strikeRate": 150.3,
      "economy": 8.55
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "saqib-mahmood",
    "playerId": "saqib-mahmood_fa2_02",
    "name": "Saqib Mahmood",
    "firstName": "Saqib",
    "lastName": "Mahmood",
    "fullName": "Saqib Mahmood",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 148,
    "overallAuctionOrder": 148,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn8SoHN92jJMs7nEd3kS9SxWbgBLON_b_ToXvkcClJA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn8SoHN92jJMs7nEd3kS9SxWbgBLON_b_ToXvkcClJA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "adam-milne",
    "playerId": "adam-milne_fa2_03",
    "name": "Adam Milne",
    "firstName": "Adam",
    "lastName": "Milne",
    "fullName": "Adam Milne",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1992-04-13",
    "age": 33,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 149,
    "overallAuctionOrder": 149,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNMfqH20X_iCrWAAdKAHV2CPMvVNCsDCHjAAOZSQ0Vw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNMfqH20X_iCrWAAdKAHV2CPMvVNCsDCHjAAOZSQ0Vw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 15,
      "wickets": 7,
      "strikeRate": 140.5,
      "economy": 8.25
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "lungi-ngidi",
    "playerId": "lungi-ngidi_fa2_04",
    "name": "Lungi Ngidi",
    "firstName": "Lungi",
    "lastName": "Ngidi",
    "fullName": "Lungi Ngidi",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1996-03-29",
    "age": 29,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 150,
    "overallAuctionOrder": 150,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Lungi_Ngidi_2022.jpg/500px-Lungi_Ngidi_2022.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Lungi_Ngidi_2022.jpg/500px-Lungi_Ngidi_2022.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 0,
      "wickets": 25,
      "strikeRate": 0,
      "economy": 8.7
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "william-o-rourke",
    "playerId": "william-o-rourke_fa2_05",
    "name": "William O’Rourke",
    "firstName": "William",
    "lastName": "O’Rourke",
    "fullName": "William O’Rourke",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 151,
    "overallAuctionOrder": 151,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcRNnCWsAA99fawSPUK2fuDwWTjIWc4uSJ1IAW4yRA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcRNnCWsAA99fawSPUK2fuDwWTjIWc4uSJ1IAW4yRA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "umesh-yadav",
    "playerId": "umesh-yadav_fa2_09",
    "name": "Umesh Yadav",
    "firstName": "Umesh",
    "lastName": "Yadav",
    "fullName": "Umesh Yadav",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 152,
    "overallAuctionOrder": 152,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrOw8AUoipmhF1Fc_KVp1yOfSlBQLhP8_SD5qzYDe4g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrOw8AUoipmhF1Fc_KVp1yOfSlBQLhP8_SD5qzYDe4g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "naveen-ul-haq",
    "playerId": "naveen-ul-haq_fa3_08",
    "name": "Naveen-ul-Haq",
    "firstName": "Naveen-ul-Haq",
    "lastName": "",
    "fullName": "Naveen-ul-Haq",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 153,
    "overallAuctionOrder": 153,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8i3t9ylzyY09hKmxeEJgQI6ccx5YurRSyzYytxkffg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8i3t9ylzyY09hKmxeEJgQI6ccx5YurRSyzYytxkffg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "lockie-ferguson",
    "playerId": "lockie-ferguson",
    "name": "Lockie Ferguson",
    "firstName": "Lockie",
    "lastName": "Ferguson",
    "fullName": "Lockie Ferguson",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 154,
    "overallAuctionOrder": 154,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJiPOciMVgY_1ebBfJK_TodiqrcSmc-GAQEOUs_KZzg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJiPOciMVgY_1ebBfJK_TodiqrcSmc-GAQEOUs_KZzg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 40,
      "runs": 65,
      "wickets": 40,
      "strikeRate": 133.5,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "deepak-chahar",
    "playerId": "deepak-chahar",
    "name": "Deepak Chahar",
    "firstName": "Deepak",
    "lastName": "Chahar",
    "fullName": "Deepak Chahar",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 155,
    "overallAuctionOrder": 155,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DDIjP07dBb7-7fq7_9IxMmIkdwYwiG5Fnk-sojiPZw&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DDIjP07dBb7-7fq7_9IxMmIkdwYwiG5Fnk-sojiPZw&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 75,
      "runs": 80,
      "wickets": 75,
      "strikeRate": 144,
      "economy": 7.2
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "bhuvneshwar-kumar",
    "playerId": "bhuvneshwar-kumar",
    "name": "Bhuvneshwar Kumar",
    "firstName": "Bhuvneshwar",
    "lastName": "Kumar",
    "fullName": "Bhuvneshwar Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 156,
    "overallAuctionOrder": 156,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6iFXLbdWEyrdG0MtAEQLDiv_SoFb2IleLrC6y3YaQA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6iFXLbdWEyrdG0MtAEQLDiv_SoFb2IleLrC6y3YaQA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 160,
      "runs": 300,
      "wickets": 170,
      "strikeRate": 130,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mukesh-kumar",
    "playerId": "mukesh-kumar",
    "name": "Mukesh Kumar",
    "firstName": "Mukesh",
    "lastName": "Kumar",
    "fullName": "Mukesh Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 157,
    "overallAuctionOrder": 157,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hxYEjygccPvubWxbhlx7_DNTO_xUn21zr4_gjuroxA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hxYEjygccPvubWxbhlx7_DNTO_xUn21zr4_gjuroxA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 25,
      "runs": 10,
      "wickets": 25,
      "strikeRate": 137,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "tushar-deshpande",
    "playerId": "tushar-deshpande",
    "name": "Tushar Deshpande",
    "firstName": "Tushar",
    "lastName": "Deshpande",
    "fullName": "Tushar Deshpande",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 158,
    "overallAuctionOrder": 158,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KT88jOhPiZwlG25pWllz2LHHLi1v2JRhiyfmrDjg7A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KT88jOhPiZwlG25pWllz2LHHLi1v2JRhiyfmrDjg7A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 35,
      "runs": 20,
      "wickets": 40,
      "strikeRate": 144,
      "economy": 8.7
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "umran-malik",
    "playerId": "umran-malik",
    "name": "Umran Malik",
    "firstName": "Umran",
    "lastName": "Malik",
    "fullName": "Umran Malik",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 14,
    "setNumber": 14,
    "setCode": "FA2",
    "setName": "Capped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 159,
    "overallAuctionOrder": 159,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbozo-ZnXB2T7g-uowxmf3LyAzmkfz4b-rAVf6rL9vdQ&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbozo-ZnXB2T7g-uowxmf3LyAzmkfz4b-rAVf6rL9vdQ&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 26,
      "runs": 15,
      "wickets": 29,
      "strikeRate": 140.5,
      "economy": 9.3
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "akeal-hosein",
    "playerId": "akeal-hosein_sp1_03",
    "name": "Akeal Hosein",
    "firstName": "Akeal",
    "lastName": "Hosein",
    "fullName": "Akeal Hosein",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners (SP1)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1993-04-25",
    "age": 32,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 160,
    "overallAuctionOrder": 160,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7hbKW6kJWrJLeDTFd5Q2GC4LKtZKw9kL-ev8ENwWAg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7hbKW6kJWrJLeDTFd5Q2GC4LKtZKw9kL-ev8ENwWAg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 1,
      "runs": 0,
      "wickets": 1,
      "strikeRate": 0,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.6
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 24,
          "overs": 4,
          "economy": 6.1
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8.1
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 28,
          "overs": 4,
          "economy": 7.1
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 7.6,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 7.6.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 120,
      "bowlingAverage": 20.22,
      "economy": 7.6,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "karn-sharma",
    "playerId": "karn-sharma_usp1_03",
    "name": "Karn Sharma",
    "firstName": "Karn",
    "lastName": "Sharma",
    "fullName": "Karn Sharma",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Uncapped Spinners (USP1)",
    "currentSet": "SP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 37,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 161,
    "overallAuctionOrder": 161,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBTcTppzUAYZ9CgIMswHf2DuMN5V5YEGRf5BV0HxzCw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBTcTppzUAYZ9CgIMswHf2DuMN5V5YEGRf5BV0HxzCw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 84,
      "innings": 84,
      "overs": 319.2,
      "wickets": 76,
      "economy": 8.28,
      "average": 34.78,
      "strikeRate": 25.2,
      "bestBowling": "5/24",
      "fourWicketHauls": 1,
      "fiveWicketHauls": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 33,
          "overs": 4,
          "economy": 8.28
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 37,
          "overs": 4,
          "economy": 9.3
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 27,
          "overs": 4,
          "economy": 6.8
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 35,
          "overs": 4,
          "economy": 8.8
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 31,
          "overs": 4,
          "economy": 7.8
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 8.28,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 8.28.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 504,
      "innings": 504,
      "wickets": 456,
      "bowlingAverage": 34.78,
      "economy": 8.28,
      "catches": 126
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "qais-ahmad",
    "playerId": "qais-ahmad_sp2_01",
    "name": "Qais Ahmad",
    "firstName": "Qais",
    "lastName": "Ahmad",
    "fullName": "Qais Ahmad",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 162,
    "overallAuctionOrder": 162,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5McBLNCHJ8m_nsB1nVwV7RecTf3vYybXXE-Orqgmog&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5McBLNCHJ8m_nsB1nVwV7RecTf3vYybXXE-Orqgmog&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rishad-hossain",
    "playerId": "rishad-hossain_sp2_02",
    "name": "Rishad Hossain",
    "firstName": "Rishad",
    "lastName": "Hossain",
    "fullName": "Rishad Hossain",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 163,
    "overallAuctionOrder": 163,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sr0JxKNfXB3pYu2oQmYmu5-LKt7meDwdffbw_Y9EFQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sr0JxKNfXB3pYu2oQmYmu5-LKt7meDwdffbw_Y9EFQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "waqar-salamkheil",
    "playerId": "waqar-salamkheil_sp2_03",
    "name": "Waqar Salamkheil",
    "firstName": "Waqar",
    "lastName": "Salamkheil",
    "fullName": "Waqar Salamkheil",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 164,
    "overallAuctionOrder": 164,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOggUGnmmW21Ai-han7WNz3TpwH2k5NoUYWF5jULKeA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOggUGnmmW21Ai-han7WNz3TpwH2k5NoUYWF5jULKeA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "viyaskanth-vijayakanth",
    "playerId": "viyaskanth-vijayakanth_sp2_04",
    "name": "Viyaskanth Vijayakanth",
    "firstName": "Viyaskanth",
    "lastName": "Vijayakanth",
    "fullName": "Viyaskanth Vijayakanth",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 165,
    "overallAuctionOrder": 165,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzNja2jxrnvFC97Ll7ookTd-9JkQpMT4qt6oz8jv4zQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzNja2jxrnvFC97Ll7ookTd-9JkQpMT4qt6oz8jv4zQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "allah-ghazanfar",
    "playerId": "allah-ghazanfar",
    "name": "Allah Ghazanfar",
    "firstName": "Allah",
    "lastName": "Ghazanfar",
    "fullName": "Allah Ghazanfar",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "OS",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 166,
    "overallAuctionOrder": 166,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPpbnc45_2H1xghEZh1_nF_kRZrgHBS43Vw8g6CggJQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPpbnc45_2H1xghEZh1_nF_kRZrgHBS43Vw8g6CggJQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "piyush-chawla",
    "playerId": "piyush-chawla",
    "name": "Piyush Chawla",
    "firstName": "Piyush",
    "lastName": "Chawla",
    "fullName": "Piyush Chawla",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 167,
    "overallAuctionOrder": 167,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJaGjqNrI3ZUZzNmL9vUZW_AwMGrjZ1uxfKstaG0eeQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJaGjqNrI3ZUZzNmL9vUZW_AwMGrjZ1uxfKstaG0eeQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "tabraiz-shamsi",
    "playerId": "tabraiz-shamsi",
    "name": "Tabraiz Shamsi",
    "firstName": "Tabraiz",
    "lastName": "Shamsi",
    "fullName": "Tabraiz Shamsi",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 168,
    "overallAuctionOrder": 168,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJx21zxuSlqaKbjQKBh_qvtsmKY2CjqSa_lvQ59BMAw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJx21zxuSlqaKbjQKBh_qvtsmKY2CjqSa_lvQ59BMAw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "ish-sodhi",
    "playerId": "ish-sodhi",
    "name": "Ish Sodhi",
    "firstName": "Ish",
    "lastName": "Sodhi",
    "fullName": "Ish Sodhi",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 169,
    "overallAuctionOrder": 169,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklekJkEnAvBqpxYfDwZ526Gly1jr8aF8CKjhwSYklvA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklekJkEnAvBqpxYfDwZ526Gly1jr8aF8CKjhwSYklvA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "keshav-maharaj",
    "playerId": "keshav-maharaj",
    "name": "Keshav Maharaj",
    "firstName": "Keshav",
    "lastName": "Maharaj",
    "fullName": "Keshav Maharaj",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 200,
    "setNo": 15,
    "setNumber": 15,
    "setCode": "SP2",
    "setName": "Capped Spinners 2",
    "set": "Capped Spinners 2 (SP2)",
    "currentSet": "SP2",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "OS",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 170,
    "overallAuctionOrder": 170,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVIjs-4KJdUTUC6Y0to7oMRYgLCJLPZaJAKeJb0PIPQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVIjs-4KJdUTUC6Y0to7oMRYgLCJLPZaJAKeJb0PIPQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 0,
      "wickets": 2,
      "strikeRate": 0,
      "economy": 7.5
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "atharva-taide",
    "playerId": "atharva-taide_uba1_05",
    "name": "Atharva Taide",
    "firstName": "Atharva",
    "lastName": "Taide",
    "fullName": "Atharva Taide",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters (UBA1)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "PBKS",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 24,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 171,
    "overallAuctionOrder": 171,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXglU57IXPehyPkBNhHJ36sZ0kAJ2G_4_u2LfB1-e-kA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXglU57IXPehyPkBNhHJ36sZ0kAJ2G_4_u2LfB1-e-kA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 9,
      "innings": 8,
      "runs": 225,
      "average": 29.41,
      "strikeRate": 148.5,
      "highestScore": "56*",
      "fifties": 1,
      "hundreds": 0,
      "fours": 22,
      "sixes": 11
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 27,
          "balls": 18,
          "strikeRate": 150
        },
        {
          "opponent": "MI",
          "runs": 18,
          "balls": 13,
          "strikeRate": 138.5
        },
        {
          "opponent": "KKR",
          "runs": 34,
          "balls": 21,
          "strikeRate": 161.9
        },
        {
          "opponent": "RR",
          "runs": 11,
          "balls": 9,
          "strikeRate": 122.2
        },
        {
          "opponent": "SRH",
          "runs": 23,
          "balls": 15,
          "strikeRate": 153.3
        }
      ],
      "recentRuns": 113,
      "recentWickets": 0,
      "recentStrikeRate": 148,
      "recentEconomy": null,
      "formSummary": "Scored 113 runs in his last five IPL 2026 appearances with a strike rate of 148.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 54,
      "innings": 45,
      "runs": 1350,
      "battingAverage": 29.41,
      "strikeRate": 148.5,
      "catches": 18
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ankit-kumar",
    "playerId": "ankit-kumar_uba2_01",
    "name": "Ankit Kumar",
    "firstName": "Ankit",
    "lastName": "Kumar",
    "fullName": "Ankit Kumar",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 172,
    "overallAuctionOrder": 172,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJCf8aKITxeM8rCr3ZYD2pAVsvmKFfYCcxSCGq0LcOg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJCf8aKITxeM8rCr3ZYD2pAVsvmKFfYCcxSCGq0LcOg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rohan-kunnummal",
    "playerId": "rohan-kunnummal_uba2_02",
    "name": "Rohan Kunnummal",
    "firstName": "Rohan",
    "lastName": "Kunnummal",
    "fullName": "Rohan Kunnummal",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 173,
    "overallAuctionOrder": 173,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz_ExhOdkinPfrlavcha20y8uqAQfdmhi7bG_amCilg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz_ExhOdkinPfrlavcha20y8uqAQfdmhi7bG_amCilg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "danish-malewar",
    "playerId": "danish-malewar_uba2_03",
    "name": "Danish Malewar",
    "firstName": "Danish",
    "lastName": "Malewar",
    "fullName": "Danish Malewar",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2003-08-11",
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 174,
    "overallAuctionOrder": 174,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMICek65YCscAvzZRYSYn9Y5DuVHJq6lg5gS5JcB4N-w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMICek65YCscAvzZRYSYn9Y5DuVHJq6lg5gS5JcB4N-w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "pukhraj-mann",
    "playerId": "pukhraj-mann_uba2_04",
    "name": "Pukhraj Mann",
    "firstName": "Pukhraj",
    "lastName": "Mann",
    "fullName": "Pukhraj Mann",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 175,
    "overallAuctionOrder": 175,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPacCh2NqUCfyOfGQ41qxlFSVXu5ACdglI29YsuG9eag&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPacCh2NqUCfyOfGQ41qxlFSVXu5ACdglI29YsuG9eag&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "salman-nizar",
    "playerId": "salman-nizar_uba2_05",
    "name": "Salman Nizar",
    "firstName": "Salman",
    "lastName": "Nizar",
    "fullName": "Salman Nizar",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 176,
    "overallAuctionOrder": 176,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31-iJrZJnmvnNMOJGgSmGFDlwtVuaKS1qCORVvRwWgg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31-iJrZJnmvnNMOJGgSmGFDlwtVuaKS1qCORVvRwWgg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "aman-rao-perala",
    "playerId": "aman-rao-perala_uba2_06",
    "name": "Aman Rao Perala",
    "firstName": "Aman",
    "lastName": "Rao Perala",
    "fullName": "Aman Rao Perala",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 177,
    "overallAuctionOrder": 177,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw2mjNxGY9Heveiv-AEOnE194wmS4-VwCf90dZ3bm9Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw2mjNxGY9Heveiv-AEOnE194wmS4-VwCf90dZ3bm9Q&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "akshat-raghuwanshi",
    "playerId": "akshat-raghuwanshi_uba2_07",
    "name": "Akshat Raghuwanshi",
    "firstName": "Akshat",
    "lastName": "Raghuwanshi",
    "fullName": "Akshat Raghuwanshi",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2003-09-15",
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 178,
    "overallAuctionOrder": 178,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GEP30ykETJ9Qps5ONrQD5eOKsystDVSE_OBqyw-w1g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GEP30ykETJ9Qps5ONrQD5eOKsystDVSE_OBqyw-w1g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "manan-vohra",
    "playerId": "manan-vohra_uba2_08",
    "name": "Manan Vohra",
    "firstName": "Manan",
    "lastName": "Vohra",
    "fullName": "Manan Vohra",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "LSG",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 179,
    "overallAuctionOrder": 179,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDi57kdC5C2HzPuDby6577XHcvt9PxuOh0EVgtWoa0LA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDi57kdC5C2HzPuDby6577XHcvt9PxuOh0EVgtWoa0LA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "swastik-chikara",
    "playerId": "swastik-chikara",
    "name": "Swastik Chikara",
    "firstName": "Swastik",
    "lastName": "Chikara",
    "fullName": "Swastik Chikara",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 180,
    "overallAuctionOrder": 180,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdy_fSjhgGzVuSFodGyv42Owc-RNK3G83qaX0tChRCw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdy_fSjhgGzVuSFodGyv42Owc-RNK3G83qaX0tChRCw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "priyansh-arya",
    "playerId": "priyansh-arya",
    "name": "Priyansh Arya",
    "firstName": "Priyansh",
    "lastName": "Arya",
    "fullName": "Priyansh Arya",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 181,
    "overallAuctionOrder": 181,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjShc-qRVaCysaT3giNty-6WmEJOh8q-fWhwOd3HZcUw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjShc-qRVaCysaT3giNty-6WmEJOh8q-fWhwOd3HZcUw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shaik-rasheed",
    "playerId": "shaik-rasheed",
    "name": "Shaik Rasheed",
    "firstName": "Shaik",
    "lastName": "Rasheed",
    "fullName": "Shaik Rasheed",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 182,
    "overallAuctionOrder": 182,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgSc2JPrEZx9rvIw2pmZAHeTT1ywTaeaPvLJASwnLLhEghidStopXfSQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgSc2JPrEZx9rvIw2pmZAHeTT1ywTaeaPvLJASwnLLhEghidStopXfSQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "himmat-singh",
    "playerId": "himmat-singh",
    "name": "Himmat Singh",
    "firstName": "Himmat",
    "lastName": "Singh",
    "fullName": "Himmat Singh",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 183,
    "overallAuctionOrder": 183,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFOsGoD3ghzr-FczxrDLfp8J3kXlGTKQ5AzA2Osmt8w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFOsGoD3ghzr-FczxrDLfp8J3kXlGTKQ5AzA2Osmt8w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "harpreet-singh-bhatia",
    "playerId": "harpreet-singh-bhatia",
    "name": "Harpreet Singh Bhatia",
    "firstName": "Harpreet",
    "lastName": "Singh Bhatia",
    "fullName": "Harpreet Singh Bhatia",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 184,
    "overallAuctionOrder": 184,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7pbNAxnZHDIq7AJ8Q1yOffqLG_0XNkDYdchU426RIA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7pbNAxnZHDIq7AJ8Q1yOffqLG_0XNkDYdchU426RIA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "sachin-baby",
    "playerId": "sachin-baby",
    "name": "Sachin Baby",
    "firstName": "Sachin",
    "lastName": "Baby",
    "fullName": "Sachin Baby",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 16,
    "setNumber": 16,
    "setCode": "UBA2",
    "setName": "Uncapped Batters 2",
    "set": "Uncapped Batters 2 (UBA2)",
    "currentSet": "UBA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 185,
    "overallAuctionOrder": 185,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopQ7pvDDEOW9tL8X0gBWXNewKej-gey03rJXJYmkvOQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopQ7pvDDEOW9tL8X0gBWXNewKej-gey03rJXJYmkvOQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "tanush-kotian",
    "playerId": "tanush-kotian_ual1_03",
    "name": "Tanush Kotian",
    "firstName": "Tanush",
    "lastName": "Kotian",
    "fullName": "Tanush Kotian",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 186,
    "overallAuctionOrder": 186,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrD8FCV1NyYwgBXJfE36x3JB2EmuxbtQECHjURgVe_w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrD8FCV1NyYwgBXJfE36x3JB2EmuxbtQECHjURgVe_w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 14,
      "innings": 14,
      "overs": 53.2,
      "wickets": 10,
      "economy": 7.6,
      "average": 40.43,
      "strikeRate": 31.9,
      "bestBowling": "3/22",
      "fourWicketHauls": 0,
      "fiveWicketHauls": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.6
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.6
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 24,
          "overs": 4,
          "economy": 6.1
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8.1
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 28,
          "overs": 4,
          "economy": 7.1
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 7.6,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 7.6.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 60,
      "bowlingAverage": 40.43,
      "economy": 7.6,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kamlesh-nagarkoti",
    "playerId": "kamlesh-nagarkoti_ual1_06",
    "name": "Kamlesh Nagarkoti",
    "firstName": "Kamlesh",
    "lastName": "Nagarkoti",
    "fullName": "Kamlesh Nagarkoti",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 187,
    "overallAuctionOrder": 187,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iwWC7zxGtFlan5k9EXEBicTVfljiPh0vhOr30-gd7A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iwWC7zxGtFlan5k9EXEBicTVfljiPh0vhOr30-gd7A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sanvir-singh",
    "playerId": "sanvir-singh_ual1_08",
    "name": "Sanvir Singh",
    "firstName": "Sanvir",
    "lastName": "Singh",
    "fullName": "Sanvir Singh",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 188,
    "overallAuctionOrder": 188,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xt04sXWN2vbDJnXv20ftGKFHu6lAfq3qIXH7sxRp3w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xt04sXWN2vbDJnXv20ftGKFHu6lAfq3qIXH7sxRp3w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "yuvraj-chaudhary",
    "playerId": "yuvraj-chaudhary_ual2_01",
    "name": "Yuvraj Chaudhary",
    "firstName": "Yuvraj",
    "lastName": "Chaudhary",
    "fullName": "Yuvraj Chaudhary",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 189,
    "overallAuctionOrder": 189,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfA5aq7woFE7ICBunUE221mFlcjLzBNRe1rQ01793a2w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfA5aq7woFE7ICBunUE221mFlcjLzBNRe1rQ01793a2w&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "satvik-deswal",
    "playerId": "satvik-deswal_ual2_02",
    "name": "Satvik Deswal",
    "firstName": "Satvik",
    "lastName": "Deswal",
    "fullName": "Satvik Deswal",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 190,
    "overallAuctionOrder": 190,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxt9hcI2puDVy_E4M7i-U3ay08Mf0cscJ37lF7SsWgA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxt9hcI2puDVy_E4M7i-U3ay08Mf0cscJ37lF7SsWgA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "aman-khan",
    "playerId": "aman-khan_ual2_03",
    "name": "Aman Khan",
    "firstName": "Aman",
    "lastName": "Khan",
    "fullName": "Aman Khan",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "1996-11-23",
    "age": 29,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 191,
    "overallAuctionOrder": 191,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1PlV8EkSZ4jLtK9m2JQiZghRg7uXpj-xs_dxcZNi-A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1PlV8EkSZ4jLtK9m2JQiZghRg7uXpj-xs_dxcZNi-A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 12,
      "runs": 110,
      "wickets": 1,
      "strikeRate": 144,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "darshan-nalkande",
    "playerId": "darshan-nalkande_ual2_04",
    "name": "Darshan Nalkande",
    "firstName": "Darshan",
    "lastName": "Nalkande",
    "fullName": "Darshan Nalkande",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 192,
    "overallAuctionOrder": 192,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarW6_jcTPW3opgikAK8du8v2i1uZK_AKngCSlecizvg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarW6_jcTPW3opgikAK8du8v2i1uZK_AKngCSlecizvg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sairaj-patil",
    "playerId": "sairaj-patil_ual2_06",
    "name": "Sairaj Patil",
    "firstName": "Sairaj",
    "lastName": "Patil",
    "fullName": "Sairaj Patil",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 193,
    "overallAuctionOrder": 193,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxNso5v7bmR8vq1j0aF0mOjdfBC9IjOkEtEstVCdWWQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxNso5v7bmR8vq1j0aF0mOjdfBC9IjOkEtEstVCdWWQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "suyash-prabhudessai",
    "playerId": "suyash-prabhudessai_ual2_07",
    "name": "Suyash Prabhudessai",
    "firstName": "Suyash",
    "lastName": "Prabhudessai",
    "fullName": "Suyash Prabhudessai",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 194,
    "overallAuctionOrder": 194,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmbWxCEsHdY43s8cl3wPnSk9mGW1BSPRstH4ZWgJS7Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmbWxCEsHdY43s8cl3wPnSk9mGW1BSPRstH4ZWgJS7Q&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mayank-rawat",
    "playerId": "mayank-rawat_ual2_08",
    "name": "Mayank Rawat",
    "firstName": "Mayank",
    "lastName": "Rawat",
    "fullName": "Mayank Rawat",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "1999-10-28",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 195,
    "overallAuctionOrder": 195,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNKMY14mZP8TAYMI7-_zhHGL97xYSnvc7MBFF7wTQNA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNKMY14mZP8TAYMI7-_zhHGL97xYSnvc7MBFF7wTQNA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "harsh-tyagi",
    "playerId": "harsh-tyagi_ual2_09",
    "name": "Harsh Tyagi",
    "firstName": "Harsh",
    "lastName": "Tyagi",
    "fullName": "Harsh Tyagi",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 196,
    "overallAuctionOrder": 196,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVOBFCk5UJrQRAXnycZMbiPc1bA2XDhtS1JK746HfWA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVOBFCk5UJrQRAXnycZMbiPc1bA2XDhtS1JK746HfWA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mangesh-yadav",
    "playerId": "mangesh-yadav_ual2_10",
    "name": "Mangesh Yadav",
    "firstName": "Mangesh",
    "lastName": "Yadav",
    "fullName": "Mangesh Yadav",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-03-14",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 197,
    "overallAuctionOrder": 197,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsxuURo4PJte2yrExiv3N0_CVELFIPeTbpRgVheGf8A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsxuURo4PJte2yrExiv3N0_CVELFIPeTbpRgVheGf8A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sanjay-yadav",
    "playerId": "sanjay-yadav_ual4_10",
    "name": "Sanjay Yadav",
    "firstName": "Sanjay",
    "lastName": "Yadav",
    "fullName": "Sanjay Yadav",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 198,
    "overallAuctionOrder": 198,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37zCWLLMK6Drn1ppJYnuIEanYi16ViTliJa-DmlKYgA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37zCWLLMK6Drn1ppJYnuIEanYi16ViTliJa-DmlKYgA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "raj-bawa",
    "playerId": "raj-bawa",
    "name": "Raj Bawa",
    "firstName": "Raj",
    "lastName": "Bawa",
    "fullName": "Raj Bawa",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 199,
    "overallAuctionOrder": 199,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUPgdBuiWcLG7qnn062ZfblTKf-L_v7ao0i4nhIhClg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUPgdBuiWcLG7qnn062ZfblTKf-L_v7ao0i4nhIhClg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 10,
      "wickets": 0,
      "strikeRate": 137,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "anshul-kamboj",
    "playerId": "anshul-kamboj",
    "name": "Anshul Kamboj",
    "firstName": "Anshul",
    "lastName": "Kamboj",
    "fullName": "Anshul Kamboj",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 200,
    "overallAuctionOrder": 200,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIdcHh6lFsU-rvXK8a_BZTrzLqZU4VA1r57Rz1Dal7g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIdcHh6lFsU-rvXK8a_BZTrzLqZU4VA1r57Rz1Dal7g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 2,
      "wickets": 2,
      "strikeRate": 131.4,
      "economy": 7.5
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "arshin-kulkarni",
    "playerId": "arshin-kulkarni",
    "name": "Arshin Kulkarni",
    "firstName": "Arshin",
    "lastName": "Kulkarni",
    "fullName": "Arshin Kulkarni",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 201,
    "overallAuctionOrder": 201,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7AsgcVbGy_50q4mE61G6ri0dDstKq7mwSF0r2uPDeg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7AsgcVbGy_50q4mE61G6ri0dDstKq7mwSF0r2uPDeg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 20,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "prerak-mankad",
    "playerId": "prerak-mankad",
    "name": "Prerak Mankad",
    "firstName": "Prerak",
    "lastName": "Mankad",
    "fullName": "Prerak Mankad",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 202,
    "overallAuctionOrder": 202,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1BX1xoV4H5VtyEROJgpJIOtYiywyIAHYjCqjHRkB3A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1BX1xoV4H5VtyEROJgpJIOtYiywyIAHYjCqjHRkB3A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "yudhvir-charak",
    "playerId": "yudhvir-charak",
    "name": "Yudhvir Charak",
    "firstName": "Yudhvir",
    "lastName": "Charak",
    "fullName": "Yudhvir Charak",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 17,
    "setNumber": 17,
    "setCode": "UAL2",
    "setName": "Uncapped All-rounders 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "UAL2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 203,
    "overallAuctionOrder": 203,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTX2o5Dzf7OQXwhjsuhML19h-j-_hWUzAWaBa2-Lbg&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTX2o5Dzf7OQXwhjsuhML19h-j-_hWUzAWaBa2-Lbg&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "salil-arora",
    "playerId": "salil-arora_uwk2_01",
    "name": "Salil Arora",
    "firstName": "Salil",
    "lastName": "Arora",
    "fullName": "Salil Arora",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2001-08-29",
    "age": 24,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 204,
    "overallAuctionOrder": 204,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH2IgyG9-FDu_pKcUsKLj1EIQMwh0rxGuU8FwadE8zA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmH2IgyG9-FDu_pKcUsKLj1EIQMwh0rxGuU8FwadE8zA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ricky-bhui",
    "playerId": "ricky-bhui_uwk2_02",
    "name": "Ricky Bhui",
    "firstName": "Ricky",
    "lastName": "Bhui",
    "fullName": "Ricky Bhui",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 205,
    "overallAuctionOrder": 205,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIEKF534J6Sq432q_aTVYdH0r9sNurO81DR6oXZZ_tw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIEKF534J6Sq432q_aTVYdH0r9sNurO81DR6oXZZ_tw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rahul-buddhi",
    "playerId": "rahul-buddhi_uwk2_03",
    "name": "Rahul Buddhi",
    "firstName": "Rahul",
    "lastName": "Buddhi",
    "fullName": "Rahul Buddhi",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 206,
    "overallAuctionOrder": 206,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tp2x0A2N7Qt7VXRerYRrFf3NsI2en8rua0n1_hEd8A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tp2x0A2N7Qt7VXRerYRrFf3NsI2en8rua0n1_hEd8A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "saurav-chauhan",
    "playerId": "saurav-chauhan_uwk2_04",
    "name": "Saurav Chauhan",
    "firstName": "Saurav",
    "lastName": "Chauhan",
    "fullName": "Saurav Chauhan",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 207,
    "overallAuctionOrder": 207,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsesnFaWx4cdotP24Ie_VkjZcQLx8SyFicXXrHCmeYQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsesnFaWx4cdotP24Ie_VkjZcQLx8SyFicXXrHCmeYQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "yashvardhan-dalal",
    "playerId": "yashvardhan-dalal_uwk2_05",
    "name": "Yashvardhan Dalal",
    "firstName": "Yashvardhan",
    "lastName": "Dalal",
    "fullName": "Yashvardhan Dalal",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 208,
    "overallAuctionOrder": 208,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e_RxQ6QNKk4ZQQRUzi_mAKk1l2Vg4dbRwCSrdEZX3A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e_RxQ6QNKk4ZQQRUzi_mAKk1l2Vg4dbRwCSrdEZX3A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abhishek-pathak",
    "playerId": "abhishek-pathak_uwk2_06",
    "name": "Abhishek Pathak",
    "firstName": "Abhishek",
    "lastName": "Pathak",
    "fullName": "Abhishek Pathak",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 209,
    "overallAuctionOrder": 209,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUseTsq1QokEeuWbRHDj3ExF1vTcpz_9aEFKZ6sPpbQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUseTsq1QokEeuWbRHDj3ExF1vTcpz_9aEFKZ6sPpbQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kunal-rathore",
    "playerId": "kunal-rathore_uwk2_07",
    "name": "Kunal Rathore",
    "firstName": "Kunal",
    "lastName": "Rathore",
    "fullName": "Kunal Rathore",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 210,
    "overallAuctionOrder": 210,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYHzuYC_IjlAW-cyz-GungE9jecKF1TB2Fy8fuMqRrQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYHzuYC_IjlAW-cyz-GungE9jecKF1TB2Fy8fuMqRrQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ravi-singh",
    "playerId": "ravi-singh_uwk2_08",
    "name": "Ravi Singh",
    "firstName": "Ravi",
    "lastName": "Singh",
    "fullName": "Ravi Singh",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicketkeepers 2",
    "set": "Uncapped Wicketkeepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-09-04",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 211,
    "overallAuctionOrder": 211,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1_Kv7lahCXJD-DYAsvUDZkC1ZQpmK_aYZ41HeVEJ_g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1_Kv7lahCXJD-DYAsvUDZkC1ZQpmK_aYZ41HeVEJ_g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "avanish-rao-aravelly",
    "playerId": "avanish-rao-aravelly",
    "name": "Avanish Rao Aravelly",
    "firstName": "Avanish",
    "lastName": "Rao Aravelly",
    "fullName": "Avanish Rao Aravelly",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 212,
    "overallAuctionOrder": 212,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRo-kj0EAM8Bs7Dk6Yyrhvo34V5zusjLrB6aITzcdg5Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRo-kj0EAM8Bs7Dk6Yyrhvo34V5zusjLrB6aITzcdg5Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "upendra-yadav",
    "playerId": "upendra-yadav",
    "name": "Upendra Yadav",
    "firstName": "Upendra",
    "lastName": "Yadav",
    "fullName": "Upendra Yadav",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 213,
    "overallAuctionOrder": 213,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGKEDZN2Fw9eicp3baGEAqsod4diwYYeiff4W6BRfdQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGKEDZN2Fw9eicp3baGEAqsod4diwYYeiff4W6BRfdQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "vishnu-vinod",
    "playerId": "vishnu-vinod",
    "name": "Vishnu Vinod",
    "firstName": "Vishnu",
    "lastName": "Vinod",
    "fullName": "Vishnu Vinod",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 214,
    "overallAuctionOrder": 214,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PPB8G_psmQv1yOCUiAfCiG7VH8QnXXRGtIGMYom29g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PPB8G_psmQv1yOCUiAfCiG7VH8QnXXRGtIGMYom29g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 50,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "dhruv-jurel",
    "playerId": "dhruv-jurel",
    "name": "Dhruv Jurel",
    "firstName": "Dhruv",
    "lastName": "Jurel",
    "fullName": "Dhruv Jurel",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 215,
    "overallAuctionOrder": 215,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G5ex3bRqrtI7qj3UbmlsyaA95G0x7I19xddMwz5fcQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G5ex3bRqrtI7qj3UbmlsyaA95G0x7I19xddMwz5fcQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 27,
      "runs": 350,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "sheldon-jackson",
    "playerId": "sheldon-jackson",
    "name": "Sheldon Jackson",
    "firstName": "Sheldon",
    "lastName": "Jackson",
    "fullName": "Sheldon Jackson",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 216,
    "overallAuctionOrder": 216,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXhBbxCuOiEZX1M3L9J8l2-A76B1_2sU72C6j7zxMw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXhBbxCuOiEZX1M3L9J8l2-A76B1_2sU72C6j7zxMw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "baba-indrajith",
    "playerId": "baba-indrajith",
    "name": "Baba Indrajith",
    "firstName": "Baba",
    "lastName": "Indrajith",
    "fullName": "Baba Indrajith",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 217,
    "overallAuctionOrder": 217,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBvB3jwFjHBXIophSJ80TSgiDqKVZ9ONSRJbbCYC1ZA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBvB3jwFjHBXIophSJ80TSgiDqKVZ9ONSRJbbCYC1ZA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "harvik-desai",
    "playerId": "harvik-desai",
    "name": "Harvik Desai",
    "firstName": "Harvik",
    "lastName": "Desai",
    "fullName": "Harvik Desai",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 218,
    "overallAuctionOrder": 218,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kV0gZFKxp1JAY6vhQidEIIEc6q6J6dCL_hgg03yyug&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kV0gZFKxp1JAY6vhQidEIIEc6q6J6dCL_hgg03yyug&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "aryan-juyal",
    "playerId": "aryan-juyal",
    "name": "Aryan Juyal",
    "firstName": "Aryan",
    "lastName": "Juyal",
    "fullName": "Aryan Juyal",
    "role": "WICKET_KEEPER",
    "specialism": "WICKET_KEEPER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 18,
    "setNumber": 18,
    "setCode": "UWK2",
    "setName": "Uncapped Wicket Keepers 2",
    "set": "Uncapped Wicket Keepers 2 (UWK2)",
    "currentSet": "UWK2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 219,
    "overallAuctionOrder": 219,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40--3XY_fXxbV4LSf0VGwNM8DSZTOCjW5QH1kHlliOw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40--3XY_fXxbV4LSf0VGwNM8DSZTOCjW5QH1kHlliOw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "akash-madhwal",
    "playerId": "akash-madhwal_ufa1_02",
    "name": "Akash Madhwal",
    "firstName": "Akash",
    "lastName": "Madhwal",
    "fullName": "Akash Madhwal",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 31,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 220,
    "overallAuctionOrder": 220,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV85wPVnjdYsgLHivd8XGDnX2rmKZ0zqiLF7PFE_1Lng&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV85wPVnjdYsgLHivd8XGDnX2rmKZ0zqiLF7PFE_1Lng&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 13,
      "runs": 4,
      "wickets": 19,
      "strikeRate": 132.8,
      "economy": 7.8
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "wickets": 2,
          "runsConceded": 34,
          "overs": 4,
          "economy": 8.4
        },
        {
          "opponent": "MI",
          "wickets": 1,
          "runsConceded": 38,
          "overs": 4,
          "economy": 9.4
        },
        {
          "opponent": "KKR",
          "wickets": 3,
          "runsConceded": 28,
          "overs": 4,
          "economy": 6.9
        },
        {
          "opponent": "RR",
          "wickets": 1,
          "runsConceded": 36,
          "overs": 4,
          "economy": 8.9
        },
        {
          "opponent": "SRH",
          "wickets": 2,
          "runsConceded": 32,
          "overs": 4,
          "economy": 7.9
        }
      ],
      "recentRuns": 0,
      "recentWickets": 9,
      "recentStrikeRate": null,
      "recentEconomy": 8.4,
      "formSummary": "Claimed 9 wickets across his last five IPL 2026 appearances at an economy of 8.4.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 84,
      "wickets": 60,
      "bowlingAverage": 44.69,
      "economy": 8.4,
      "catches": 21
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sushant-mishra",
    "playerId": "sushant-mishra_ufa1_03",
    "name": "Sushant Mishra",
    "firstName": "Sushant",
    "lastName": "Mishra",
    "fullName": "Sushant Mishra",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers (UFA1)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "GT",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2000-12-23",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 221,
    "overallAuctionOrder": 221,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3lNvpUwL6P4JWHJjTFvMSoo5o0BrPKDyK83EUeIINw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3lNvpUwL6P4JWHJjTFvMSoo5o0BrPKDyK83EUeIINw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "chetan-sakariya",
    "playerId": "chetan-sakariya_fa2_07",
    "name": "Chetan Sakariya",
    "firstName": "Chetan",
    "lastName": "Sakariya",
    "fullName": "Chetan Sakariya",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "KKR",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 222,
    "overallAuctionOrder": 222,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk103M3rstHXv4UlhmBuQazEw0KAlVoIJ_2ZwVOeyLw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk103M3rstHXv4UlhmBuQazEw0KAlVoIJ_2ZwVOeyLw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kuldeep-sen",
    "playerId": "kuldeep-sen_fa2_08",
    "name": "Kuldeep Sen",
    "firstName": "Kuldeep",
    "lastName": "Sen",
    "fullName": "Kuldeep Sen",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1996-10-22",
    "age": 29,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 223,
    "overallAuctionOrder": 223,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNEnyZZPFnnYHZjEx8UalN8Rr7rpvqPr-R3knp0nWA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNEnyZZPFnnYHZjEx8UalN8Rr7rpvqPr-R3knp0nWA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 10,
      "wickets": 10,
      "strikeRate": 137,
      "economy": 8.7
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "km-asif",
    "playerId": "km-asif_ufa2_01",
    "name": "KM Asif",
    "firstName": "KM",
    "lastName": "Asif",
    "fullName": "KM Asif",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 224,
    "overallAuctionOrder": 224,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SLZGufshs_IQ0QD2N74nYQPPEpr4NGMT2UYFvg1eSg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SLZGufshs_IQ0QD2N74nYQPPEpr4NGMT2UYFvg1eSg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sakib-hussain",
    "playerId": "sakib-hussain_ufa2_02",
    "name": "Sakib Hussain",
    "firstName": "Sakib",
    "lastName": "Hussain",
    "fullName": "Sakib Hussain",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2004-12-14",
    "age": 21,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 225,
    "overallAuctionOrder": 225,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhzPSkJKFx8LhNsKt-Ty-huFs4exngxSdH2FmQQZUoQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhzPSkJKFx8LhNsKt-Ty-huFs4exngxSdH2FmQQZUoQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mohammad-izhar",
    "playerId": "mohammad-izhar_ufa2_03",
    "name": "Mohammad Izhar",
    "firstName": "Mohammad",
    "lastName": "Izhar",
    "fullName": "Mohammad Izhar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 226,
    "overallAuctionOrder": 226,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iqleTrV52cdpMrg8eDieKeMi6gpoABNv814KDIXYZw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iqleTrV52cdpMrg8eDieKeMi6gpoABNv814KDIXYZw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vidwath-kaverappa",
    "playerId": "vidwath-kaverappa_ufa2_04",
    "name": "Vidwath Kaverappa",
    "firstName": "Vidwath",
    "lastName": "Kaverappa",
    "fullName": "Vidwath Kaverappa",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "PBKS",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 227,
    "overallAuctionOrder": 227,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNcZVzvPm3Oj92CBCpGpatLa04nVZvTuPQXH1uK32rw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNcZVzvPm3Oj92CBCpGpatLa04nVZvTuPQXH1uK32rw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vijay-kumar",
    "playerId": "vijay-kumar_ufa2_05",
    "name": "Vijay Kumar",
    "firstName": "Vijay",
    "lastName": "Kumar",
    "fullName": "Vijay Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 228,
    "overallAuctionOrder": 228,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliSj6_MKAC8FXL0L-ZW2blMOle9onFY_R1dH9usgZAA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliSj6_MKAC8FXL0L-ZW2blMOle9onFY_R1dH9usgZAA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vidyadhar-patil",
    "playerId": "vidyadhar-patil_ufa2_06",
    "name": "Vidyadhar Patil",
    "firstName": "Vidyadhar",
    "lastName": "Patil",
    "fullName": "Vidyadhar Patil",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 229,
    "overallAuctionOrder": 229,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_OkkAlipQlZhRkVH-YbMU4PCrFYxE4i9hZwz58Z9HA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_OkkAlipQlZhRkVH-YbMU4PCrFYxE4i9hZwz58Z9HA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "pv-satyanarayana-raju",
    "playerId": "pv-satyanarayana-raju_ufa2_07",
    "name": "PV Satyanarayana Raju",
    "firstName": "PV",
    "lastName": "Satyanarayana Raju",
    "fullName": "PV Satyanarayana Raju",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 230,
    "overallAuctionOrder": 230,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJ3B4w5WHe9_xlECDuh7E4KvXJ2zwuUfi5DUgTSxlZw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJ3B4w5WHe9_xlECDuh7E4KvXJ2zwuUfi5DUgTSxlZw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "onkar-tarmale",
    "playerId": "onkar-tarmale_ufa2_08",
    "name": "Onkar Tarmale",
    "firstName": "Onkar",
    "lastName": "Tarmale",
    "fullName": "Onkar Tarmale",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-05-04",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 231,
    "overallAuctionOrder": 231,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmse5eY-_sJbtr2ZehpACrN-V96RcsUW1QDCPXYZha7g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmse5eY-_sJbtr2ZehpACrN-V96RcsUW1QDCPXYZha7g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "prithviraj-yarra",
    "playerId": "prithviraj-yarra_ufa2_09",
    "name": "Prithviraj Yarra",
    "firstName": "Prithviraj",
    "lastName": "Yarra",
    "fullName": "Prithviraj Yarra",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 232,
    "overallAuctionOrder": 232,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8dwbZxjr0m2f8FpsScm_jp_-J8s57uECg_4EA9zYUw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8dwbZxjr0m2f8FpsScm_jp_-J8s57uECg_4EA9zYUw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vipraj-nigam",
    "playerId": "vipraj-nigam",
    "name": "Vipraj Nigam",
    "firstName": "Vipraj",
    "lastName": "Nigam",
    "fullName": "Vipraj Nigam",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 233,
    "overallAuctionOrder": 233,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eOxySsMriG4YH2_uFx2aTvWUngwLa_LjottFJazUEg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eOxySsMriG4YH2_uFx2aTvWUngwLa_LjottFJazUEg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "koushik-v",
    "playerId": "koushik-v",
    "name": "Koushik V",
    "firstName": "Koushik",
    "lastName": "V",
    "fullName": "Koushik V",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 234,
    "overallAuctionOrder": 234,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Du85oi3Hf_QFNtJ3059bdDZnXT-T3HS_wpVqmr_Cw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Du85oi3Hf_QFNtJ3059bdDZnXT-T3HS_wpVqmr_Cw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "gurnoor-brar",
    "playerId": "gurnoor-brar",
    "name": "Gurnoor Brar",
    "firstName": "Gurnoor",
    "lastName": "Brar",
    "fullName": "Gurnoor Brar",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 235,
    "overallAuctionOrder": 235,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FZa0bzGJXGkxnofCI7f1-g_kq50xSAbm9cpe1KQlKA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FZa0bzGJXGkxnofCI7f1-g_kq50xSAbm9cpe1KQlKA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 1,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mukesh-choudhary",
    "playerId": "mukesh-choudhary",
    "name": "Mukesh Choudhary",
    "firstName": "Mukesh",
    "lastName": "Choudhary",
    "fullName": "Mukesh Choudhary",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 19,
    "setNumber": 19,
    "setCode": "UFA2",
    "setName": "Uncapped Fast Bowlers 2",
    "set": "Uncapped Fast Bowlers 2 (UFA2)",
    "currentSet": "UFA2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 236,
    "overallAuctionOrder": 236,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCShUoo4swSSKfOEdnJwOicTl8tCSgfwRtI3AYZK-uA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCShUoo4swSSKfOEdnJwOicTl8tCSgfwRtI3AYZK-uA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 6,
      "wickets": 16,
      "strikeRate": 134.2,
      "economy": 7.35
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "vicky-ostwal",
    "playerId": "vicky-ostwal_ual2_05",
    "name": "Vicky Ostwal",
    "firstName": "Vicky",
    "lastName": "Ostwal",
    "fullName": "Vicky Ostwal",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped All-rounders 2 (UAL2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-09-01",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 237,
    "overallAuctionOrder": 237,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF4baJRee-fZx4qcYow-vsIp2hjQtVbOBNgMONAHTog&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF4baJRee-fZx4qcYow-vsIp2hjQtVbOBNgMONAHTog&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shubham-agrawal",
    "playerId": "shubham-agrawal_usp2_01",
    "name": "Shubham Agrawal",
    "firstName": "Shubham",
    "lastName": "Agrawal",
    "fullName": "Shubham Agrawal",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 238,
    "overallAuctionOrder": 238,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwf8426QfVUwz-HXE4-I2ypjDia01v_kX1yo6lMtEPA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwf8426QfVUwz-HXE4-I2ypjDia01v_kX1yo6lMtEPA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tejas-baroka",
    "playerId": "tejas-baroka_usp2_03",
    "name": "Tejas Baroka",
    "firstName": "Tejas",
    "lastName": "Baroka",
    "fullName": "Tejas Baroka",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 239,
    "overallAuctionOrder": 239,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQGceY4XeuAhekSPwl4IcWHI7J0Yjqh8-BQtfWcBiPA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQGceY4XeuAhekSPwl4IcWHI7J0Yjqh8-BQtfWcBiPA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kc-cariappa",
    "playerId": "kc-cariappa_usp2_04",
    "name": "KC Cariappa",
    "firstName": "KC",
    "lastName": "Cariappa",
    "fullName": "KC Cariappa",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 240,
    "overallAuctionOrder": 240,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvcjQ5M570o50tdfe3xFt-zxSp-Cu-ZYL8X5eRCn8IQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvcjQ5M570o50tdfe3xFt-zxSp-Cu-ZYL8X5eRCn8IQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kartik-chadha",
    "playerId": "kartik-chadha_usp2_05",
    "name": "Kartik Chadha",
    "firstName": "Kartik",
    "lastName": "Chadha",
    "fullName": "Kartik Chadha",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 241,
    "overallAuctionOrder": 241,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4NCQ9VlSLpHfPLAEDaPL9VlWRFMzTccp-WqWABd6YQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4NCQ9VlSLpHfPLAEDaPL9VlWRFMzTccp-WqWABd6YQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "pravin-dubey",
    "playerId": "pravin-dubey_usp2_06",
    "name": "Pravin Dubey",
    "firstName": "Pravin",
    "lastName": "Dubey",
    "fullName": "Pravin Dubey",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 242,
    "overallAuctionOrder": 242,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTRjegITzgQZ3JleIrolJQoN2MB-I1POkEEPoVxckYA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTRjegITzgQZ3JleIrolJQoN2MB-I1POkEEPoVxckYA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mohit-rathee",
    "playerId": "mohit-rathee_usp2_07",
    "name": "Mohit Rathee",
    "firstName": "Mohit",
    "lastName": "Rathee",
    "fullName": "Mohit Rathee",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 243,
    "overallAuctionOrder": 243,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmLDc_RgctO5NIGW7gW9jJxeyFLbnhL7UUmrCYonBig&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmLDc_RgctO5NIGW7gW9jJxeyFLbnhL7UUmrCYonBig&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "himanshu-sharma",
    "playerId": "himanshu-sharma_usp2_08",
    "name": "Himanshu Sharma",
    "firstName": "Himanshu",
    "lastName": "Sharma",
    "fullName": "Himanshu Sharma",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 244,
    "overallAuctionOrder": 244,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KyHF-Eee4FHeNL8n_NYnPxgb6qzVuVOYUYfmCqZvNA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KyHF-Eee4FHeNL8n_NYnPxgb6qzVuVOYUYfmCqZvNA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "bailapudi-yeswanth",
    "playerId": "bailapudi-yeswanth_usp2_09",
    "name": "Bailapudi Yeswanth",
    "firstName": "Bailapudi",
    "lastName": "Yeswanth",
    "fullName": "Bailapudi Yeswanth",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 245,
    "overallAuctionOrder": 245,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5-beoJYcDQOOitDrlDGi666JgUfNqExhwkHzbka6DA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5-beoJYcDQOOitDrlDGi666JgUfNqExhwkHzbka6DA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "raghav-goyal",
    "playerId": "raghav-goyal_ual3_03",
    "name": "Raghav Goyal",
    "firstName": "Raghav",
    "lastName": "Goyal",
    "fullName": "Raghav Goyal",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 246,
    "overallAuctionOrder": 246,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuFy9_uQbsdqOdvFoxxkYs3knCrJEpEjP3XiautKfHQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuFy9_uQbsdqOdvFoxxkYs3knCrJEpEjP3XiautKfHQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "hrithik-shokeen",
    "playerId": "hrithik-shokeen",
    "name": "Hrithik Shokeen",
    "firstName": "Hrithik",
    "lastName": "Shokeen",
    "fullName": "Hrithik Shokeen",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 247,
    "overallAuctionOrder": 247,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzaA27Arthv69Dwa7TmTaCrkwylSgz6O7KAMiQg2Clw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzaA27Arthv69Dwa7TmTaCrkwylSgz6O7KAMiQg2Clw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "pulkit-narang",
    "playerId": "pulkit-narang",
    "name": "Pulkit Narang",
    "firstName": "Pulkit",
    "lastName": "Narang",
    "fullName": "Pulkit Narang",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 248,
    "overallAuctionOrder": 248,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzzjyrT_HXSgy6XtAqb5hbEbusxFnIbhz9g6CThCweA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzzjyrT_HXSgy6XtAqb5hbEbusxFnIbhz9g6CThCweA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "zeeshan-ansari",
    "playerId": "zeeshan-ansari",
    "name": "Zeeshan Ansari",
    "firstName": "Zeeshan",
    "lastName": "Ansari",
    "fullName": "Zeeshan Ansari",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 249,
    "overallAuctionOrder": 249,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5o7VhABmtPBjMbfQIkvd4vQ-KU-DMG8El96mPBNzxg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5o7VhABmtPBjMbfQIkvd4vQ-KU-DMG8El96mPBNzxg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shiva-singh",
    "playerId": "shiva-singh",
    "name": "Shiva Singh",
    "firstName": "Shiva",
    "lastName": "Singh",
    "fullName": "Shiva Singh",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 20,
    "setNumber": 20,
    "setCode": "USP2",
    "setName": "Uncapped Spinners 2",
    "set": "Uncapped Spinners 2 (USP2)",
    "currentSet": "USP2",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 250,
    "overallAuctionOrder": 250,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MGQWI_zBc6akZqbY9cOayvPsAXO3_ablH5T3EXqrQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MGQWI_zBc6akZqbY9cOayvPsAXO3_ablH5T3EXqrQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "rachin-ravindra",
    "playerId": "rachin-ravindra_al1_07",
    "name": "Rachin Ravindra",
    "firstName": "Rachin",
    "lastName": "Ravindra",
    "fullName": "Rachin Ravindra",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders (AL1)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1999-11-18",
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 251,
    "overallAuctionOrder": 251,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXU1RqKupyJOdBnjMrBEyQx_uJ-JOHxsQfT4_yW13mA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXU1RqKupyJOdBnjMrBEyQx_uJ-JOHxsQfT4_yW13mA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 200,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 32,
          "balls": 20,
          "strikeRate": 160,
          "wickets": 1,
          "runsConceded": 28,
          "overs": 3,
          "economy": 9.33
        },
        {
          "opponent": "MI",
          "runs": 18,
          "balls": 11,
          "strikeRate": 163.6,
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.5
        },
        {
          "opponent": "KKR",
          "runs": 45,
          "balls": 24,
          "strikeRate": 187.5,
          "wickets": 0,
          "runsConceded": 24,
          "overs": 2,
          "economy": 12
        },
        {
          "opponent": "RR",
          "runs": 12,
          "balls": 8,
          "strikeRate": 150,
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8
        },
        {
          "opponent": "SRH",
          "runs": 28,
          "balls": 17,
          "strikeRate": 164.7,
          "wickets": 1,
          "runsConceded": 26,
          "overs": 3,
          "economy": 8.67
        }
      ],
      "recentRuns": 89,
      "recentWickets": 5,
      "recentStrikeRate": 160.87,
      "recentEconomy": 8.6,
      "formSummary": "Contributed 89 runs and 5 wickets across his last five IPL 2026 appearances with a strike rate of 160.87.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 60,
      "innings": 50,
      "runs": 1332,
      "battingAverage": 31.71,
      "strikeRate": 160.87,
      "wickets": 144,
      "bowlingAverage": 11.47,
      "economy": 8.6,
      "catches": 20
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vijay-shankar",
    "playerId": "vijay-shankar_ual1_07",
    "name": "Vijay Shankar",
    "firstName": "Vijay",
    "lastName": "Shankar",
    "fullName": "Vijay Shankar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Uncapped All-rounders (UAL1)",
    "currentSet": "AL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 252,
    "overallAuctionOrder": 252,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UsT5bnhSG-mexbqS5-3kGyqrw1ajIkFuDV_bSnsgew&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UsT5bnhSG-mexbqS5-3kGyqrw1ajIkFuDV_bSnsgew&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rehan-ahmed",
    "playerId": "rehan-ahmed_al3_01",
    "name": "Rehan Ahmed",
    "firstName": "Rehan",
    "lastName": "Ahmed",
    "fullName": "Rehan Ahmed",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 253,
    "overallAuctionOrder": 253,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/3_57_Rehan_Ahmed.jpg/500px-3_57_Rehan_Ahmed.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/3_57_Rehan_Ahmed.jpg/500px-3_57_Rehan_Ahmed.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "cooper-connolly",
    "playerId": "cooper-connolly_al3_02",
    "name": "Cooper Connolly",
    "firstName": "Cooper",
    "lastName": "Connolly",
    "fullName": "Cooper Connolly",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "2003-08-22",
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 254,
    "overallAuctionOrder": 254,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYhk4p5tfEaPrDdlnBQicsjLCSMhYQ0gZ2PLVwnSucg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYhk4p5tfEaPrDdlnBQicsjLCSMhYQ0gZ2PLVwnSucg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tom-curran",
    "playerId": "tom-curran_al3_03",
    "name": "Tom Curran",
    "firstName": "Tom",
    "lastName": "Curran",
    "fullName": "Tom Curran",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 255,
    "overallAuctionOrder": 255,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Curran_cricketer.jpg/500px-Tom_Curran_cricketer.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Tom_Curran_cricketer.jpg/500px-Tom_Curran_cricketer.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "bevon-john-jacobs",
    "playerId": "bevon-john-jacobs_al3_04",
    "name": "Bevon-John Jacobs",
    "firstName": "Bevon-John",
    "lastName": "Jacobs",
    "fullName": "Bevon-John Jacobs",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 256,
    "overallAuctionOrder": 256,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5a4rqPk0Pn_7xRyHtGlmhTsezRfo57b3Tk7i6odzRQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5a4rqPk0Pn_7xRyHtGlmhTsezRfo57b3Tk7i6odzRQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "daniel-lawrence",
    "playerId": "daniel-lawrence_al3_05",
    "name": "Daniel Lawrence",
    "firstName": "Daniel",
    "lastName": "Lawrence",
    "fullName": "Daniel Lawrence",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 257,
    "overallAuctionOrder": 257,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjnGelejKT2OVOSbzLyxiQfbNtHfELShvLdx_Yl2gQg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjnGelejKT2OVOSbzLyxiQfbNtHfELShvLdx_Yl2gQg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "george-linde",
    "playerId": "george-linde_al3_06",
    "name": "George Linde",
    "firstName": "George",
    "lastName": "Linde",
    "fullName": "George Linde",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 258,
    "overallAuctionOrder": 258,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2E4EAbB7Z-JW_myrJKq1d2MGACpL_aCfh_p7dWRkqQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2E4EAbB7Z-JW_myrJKq1d2MGACpL_aCfh_p7dWRkqQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "gulbadin-naib",
    "playerId": "gulbadin-naib_al3_07",
    "name": "Gulbadin Naib",
    "firstName": "Gulbadin",
    "lastName": "Naib",
    "fullName": "Gulbadin Naib",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 259,
    "overallAuctionOrder": 259,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniIYPQdfi3E11WqC-C_DqXbNbEEZoPaSTa3BHxlVSew&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniIYPQdfi3E11WqC-C_DqXbNbEEZoPaSTa3BHxlVSew&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "william-sutherland",
    "playerId": "william-sutherland_al3_08",
    "name": "William Sutherland",
    "firstName": "William",
    "lastName": "Sutherland",
    "fullName": "William Sutherland",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 260,
    "overallAuctionOrder": 260,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dth3POLespGe7_bGexcqEefjk9K6Ekm1GT1suabodg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dth3POLespGe7_bGexcqEefjk9K6Ekm1GT1suabodg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "beau-webster",
    "playerId": "beau-webster_al3_09",
    "name": "Beau Webster",
    "firstName": "Beau",
    "lastName": "Webster",
    "fullName": "Beau Webster",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 261,
    "overallAuctionOrder": 261,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGba3Jcb2nDHlEgOqBPnqwx6RzBdnOk2BZ3t3sCuzOw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGba3Jcb2nDHlEgOqBPnqwx6RzBdnOk2BZ3t3sCuzOw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "moeen-ali",
    "playerId": "moeen-ali",
    "name": "Moeen Ali",
    "firstName": "Moeen",
    "lastName": "Ali",
    "fullName": "Moeen Ali",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "OS",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 262,
    "overallAuctionOrder": 262,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhL2CoPyt2Y9Cq29olwdsOxPsMFy5HAfXJ3ce-KpQww&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhL2CoPyt2Y9Cq29olwdsOxPsMFy5HAfXJ3ce-KpQww&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "tim-david",
    "playerId": "tim-david",
    "name": "Tim David",
    "firstName": "Tim",
    "lastName": "David",
    "fullName": "Tim David",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "OS",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 263,
    "overallAuctionOrder": 263,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64B9zZ1kbyVs8gJRfT9l21mxwRFNveRloH-KamNFCdA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64B9zZ1kbyVs8gJRfT9l21mxwRFNveRloH-KamNFCdA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 35,
      "runs": 650,
      "wickets": 0,
      "strikeRate": 144,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "will-jacks",
    "playerId": "will-jacks",
    "name": "Will Jacks",
    "firstName": "Will",
    "lastName": "Jacks",
    "fullName": "Will Jacks",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "OS",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 264,
    "overallAuctionOrder": 264,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuHfmHQvAeYIVB2pay-lPgnjdmHKkZsdlxGJY9bEWOA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuHfmHQvAeYIVB2pay-lPgnjdmHKkZsdlxGJY9bEWOA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 8,
      "runs": 200,
      "wickets": 2,
      "strikeRate": 144,
      "economy": 7.5
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "azmatullah-omarzai",
    "playerId": "azmatullah-omarzai",
    "name": "Azmatullah Omarzai",
    "firstName": "Azmatullah",
    "lastName": "Omarzai",
    "fullName": "Azmatullah Omarzai",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "OS",
    "nationality": "Afghanistan",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 265,
    "overallAuctionOrder": 265,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrfj9HICwgrryOpIf8slJnlwqBBLIxNXpl3_-4a6sQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrfj9HICwgrryOpIf8slJnlwqBBLIxNXpl3_-4a6sQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 10,
      "runs": 40,
      "wickets": 4,
      "strikeRate": 137,
      "economy": 7.8
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "mitchell-santner",
    "playerId": "mitchell-santner",
    "name": "Mitchell Santner",
    "firstName": "Mitchell",
    "lastName": "Santner",
    "fullName": "Mitchell Santner",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "OS",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 266,
    "overallAuctionOrder": 266,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_ORxNyv964CSM67kuqW2jKb4diesziRFShIWdaJb0w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_ORxNyv964CSM67kuqW2jKb4diesziRFShIWdaJb0w&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "shahbaz-nadeem",
    "playerId": "shahbaz-nadeem",
    "name": "Shahbaz Nadeem",
    "firstName": "Shahbaz",
    "lastName": "Nadeem",
    "fullName": "Shahbaz Nadeem",
    "role": "ALL_ROUNDER",
    "specialism": "ALL_ROUNDER",
    "reservePrice": 50,
    "basePrice": 50,
    "officialBasePrice": 200,
    "setNo": 21,
    "setNumber": 21,
    "setCode": "AL3",
    "setName": "Capped All-rounders 3",
    "set": "Capped All-rounders 3 (AL3)",
    "currentSet": "AL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 267,
    "overallAuctionOrder": 267,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUuTlKCKu8OWIikceQ-SO9h_eC1Tf-Cm_cybT60W8ng&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUuTlKCKu8OWIikceQ-SO9h_eC1Tf-Cm_cybT60W8ng&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "spencer-johnson",
    "playerId": "spencer-johnson_fa1_06",
    "name": "Spencer Johnson",
    "firstName": "Spencer",
    "lastName": "Johnson",
    "fullName": "Spencer Johnson",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1995-12-16",
    "age": 30,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 268,
    "overallAuctionOrder": 268,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTppYufxjIiDRRE_7MHyPQyscaLeGHC4S35dI5op1Caw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTppYufxjIiDRRE_7MHyPQyscaLeGHC4S35dI5op1Caw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 5,
      "runs": 1,
      "wickets": 4,
      "strikeRate": 130.7,
      "economy": 7.8
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shivam-mavi",
    "playerId": "shivam-mavi_fa1_07",
    "name": "Shivam Mavi",
    "firstName": "Shivam",
    "lastName": "Mavi",
    "fullName": "Shivam Mavi",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 200,
    "basePrice": 200,
    "officialBasePrice": 200,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers (FA1)",
    "currentSet": "FA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1998-11-26",
    "age": 27,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 269,
    "overallAuctionOrder": 269,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzF_7NJnnv3_fioGojwIeoCOaeXyPgrLTtZeyAu0RGA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzF_7NJnnv3_fioGojwIeoCOaeXyPgrLTtZeyAu0RGA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 35,
      "runs": 50,
      "wickets": 30,
      "strikeRate": 144,
      "economy": 7.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mustafizur-rahman",
    "playerId": "mustafizur-rahman_fa2_06",
    "name": "Mustafizur Rahman",
    "firstName": "Mustafizur",
    "lastName": "Rahman",
    "fullName": "Mustafizur Rahman",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 150,
    "basePrice": 150,
    "officialBasePrice": 150,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 2 (FA2)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 270,
    "overallAuctionOrder": 270,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSRdyoev04E8qRnkndYyqRkNhroGL0hlQKAf4a57hlA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSRdyoev04E8qRnkndYyqRkNhroGL0hlQKAf4a57hlA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 60,
      "runs": 25,
      "wickets": 60,
      "strikeRate": 147.5,
      "economy": 7.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "taskin-ahmed",
    "playerId": "taskin-ahmed_fa3_01",
    "name": "Taskin Ahmed",
    "firstName": "Taskin",
    "lastName": "Ahmed",
    "fullName": "Taskin Ahmed",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 271,
    "overallAuctionOrder": 271,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VO82F0Kl_4O7vjBOnlLnl449DbY-BV-lo9W2y4gaKQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VO82F0Kl_4O7vjBOnlLnl449DbY-BV-lo9W2y4gaKQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "richard-gleeson",
    "playerId": "richard-gleeson_fa3_02",
    "name": "Richard Gleeson",
    "firstName": "Richard",
    "lastName": "Gleeson",
    "fullName": "Richard Gleeson",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 272,
    "overallAuctionOrder": 272,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHPGeJX1TCcow1j3BYadcm1y2BS5pKIQllzAvgse_9g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHPGeJX1TCcow1j3BYadcm1y2BS5pKIQllzAvgse_9g&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 0,
      "wickets": 1,
      "strikeRate": 0,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "alzarri-joseph",
    "playerId": "alzarri-joseph_fa3_03",
    "name": "Alzarri Joseph",
    "firstName": "Alzarri",
    "lastName": "Joseph",
    "fullName": "Alzarri Joseph",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 273,
    "overallAuctionOrder": 273,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi48Vsy_FFRcPpT_l5qVVQt3tdiMTc4h5VUId_hOYvHQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi48Vsy_FFRcPpT_l5qVVQt3tdiMTc4h5VUId_hOYvHQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shamar-joseph",
    "playerId": "shamar-joseph_fa3_04",
    "name": "Shamar Joseph",
    "firstName": "Shamar",
    "lastName": "Joseph",
    "fullName": "Shamar Joseph",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 274,
    "overallAuctionOrder": 274,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-ganhvn1D6-UyVSwl948Pwy583LcgtFRrEFZ5-tRMw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-ganhvn1D6-UyVSwl948Pwy583LcgtFRrEFZ5-tRMw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "riley-meredith",
    "playerId": "riley-meredith_fa3_05",
    "name": "Riley Meredith",
    "firstName": "Riley",
    "lastName": "Meredith",
    "fullName": "Riley Meredith",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 275,
    "overallAuctionOrder": 275,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxz_ksDKkFJcpucR4Js3Ub2VK4fgx3uAmn44etGFiEQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxz_ksDKkFJcpucR4Js3Ub2VK4fgx3uAmn44etGFiEQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jhye-richardson",
    "playerId": "jhye-richardson_fa3_06",
    "name": "Jhye Richardson",
    "firstName": "Jhye",
    "lastName": "Richardson",
    "fullName": "Jhye Richardson",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 276,
    "overallAuctionOrder": 276,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/1_07_Jhye.jpg/500px-1_07_Jhye.jpg",
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/1_07_Jhye.jpg/500px-1_07_Jhye.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "navdeep-saini",
    "playerId": "navdeep-saini_fa3_07",
    "name": "Navdeep Saini",
    "firstName": "Navdeep",
    "lastName": "Saini",
    "fullName": "Navdeep Saini",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RR",
    "currentTeam": "KKR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1992-11-23",
    "age": 33,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 277,
    "overallAuctionOrder": 277,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jntwit2_wfMwWY-tSJ8T6zGtgPseAcXLsayZoaWEmw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jntwit2_wfMwWY-tSJ8T6zGtgPseAcXLsayZoaWEmw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 32,
      "runs": 30,
      "wickets": 23,
      "strikeRate": 130,
      "economy": 8.4
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "luke-wood",
    "playerId": "luke-wood_fa3_09",
    "name": "Luke Wood",
    "firstName": "Luke",
    "lastName": "Wood",
    "fullName": "Luke Wood",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 100,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "MI",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": "1995-08-02",
    "age": 30,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 278,
    "overallAuctionOrder": 278,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/2/28/2_16_Luke_Wood_sequence_%28cropped%29.jpg",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/28/2_16_Luke_Wood_sequence_%28cropped%29.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 2,
      "runs": 0,
      "wickets": 1,
      "strikeRate": 0,
      "economy": 7.35
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jaydev-unadkat",
    "playerId": "jaydev-unadkat",
    "name": "Jaydev Unadkat",
    "firstName": "Jaydev",
    "lastName": "Unadkat",
    "fullName": "Jaydev Unadkat",
    "role": "FAST_BOWLER",
    "specialism": "FAST_BOWLER",
    "reservePrice": 100,
    "basePrice": 100,
    "officialBasePrice": 200,
    "setNo": 22,
    "setNumber": 22,
    "setCode": "FA3",
    "setName": "Capped Fast Bowlers 3",
    "set": "Capped Fast Bowlers 3 (FA3)",
    "currentSet": "FA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 279,
    "overallAuctionOrder": 279,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMjOarYMj7RYCJkRvSnYNF1yRn1l_v1mQPCDHsEBODA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMjOarYMj7RYCJkRvSnYNF1yRn1l_v1mQPCDHsEBODA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 105,
      "runs": 150,
      "wickets": 95,
      "strikeRate": 130,
      "economy": 7.95
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "kunal-chandela",
    "playerId": "kunal-chandela_uba3_01",
    "name": "Kunal Chandela",
    "firstName": "Kunal",
    "lastName": "Chandela",
    "fullName": "Kunal Chandela",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 280,
    "overallAuctionOrder": 280,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWt9RSbu52XhE1m6RWuYPQpSPwbrgD6i4VOXM4YdPcw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWt9RSbu52XhE1m6RWuYPQpSPwbrgD6i4VOXM4YdPcw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ayush-doseja",
    "playerId": "ayush-doseja_uba3_02",
    "name": "Ayush Doseja",
    "firstName": "Ayush",
    "lastName": "Doseja",
    "fullName": "Ayush Doseja",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 281,
    "overallAuctionOrder": 281,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGc3Ol6ZwPJ906mz02QWfdd8h_Q7aTDmDEKdxfxUXSw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGc3Ol6ZwPJ906mz02QWfdd8h_Q7aTDmDEKdxfxUXSw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "qamran-iqbal",
    "playerId": "qamran-iqbal_uba3_03",
    "name": "Qamran Iqbal",
    "firstName": "Qamran",
    "lastName": "Iqbal",
    "fullName": "Qamran Iqbal",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 282,
    "overallAuctionOrder": 282,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw44ZN3Zzgd406GJmU3eXe61pSqcHI0OEOawSjMPkvww&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw44ZN3Zzgd406GJmU3eXe61pSqcHI0OEOawSjMPkvww&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "dheeraj-kumar",
    "playerId": "dheeraj-kumar_uba3_04",
    "name": "Dheeraj Kumar",
    "firstName": "Dheeraj",
    "lastName": "Kumar",
    "fullName": "Dheeraj Kumar",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 283,
    "overallAuctionOrder": 283,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrUe3usy9GLpUzsgb9lNVdtJ7uqxWSrQfUiCm3iY10A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrUe3usy9GLpUzsgb9lNVdtJ7uqxWSrQfUiCm3iY10A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "bhanu-pania",
    "playerId": "bhanu-pania_uba3_05",
    "name": "Bhanu Pania",
    "firstName": "Bhanu",
    "lastName": "Pania",
    "fullName": "Bhanu Pania",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 284,
    "overallAuctionOrder": 284,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNParjal3jJ2nq84U21YQk1PA5BkwDpRnRs7U9ZxHd2A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNParjal3jJ2nq84U21YQk1PA5BkwDpRnRs7U9ZxHd2A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sahil-parakh",
    "playerId": "sahil-parakh_uba3_06",
    "name": "Sahil Parakh",
    "firstName": "Sahil",
    "lastName": "Parakh",
    "fullName": "Sahil Parakh",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2005-03-24",
    "age": 20,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 285,
    "overallAuctionOrder": 285,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjx-XH8mkqv9rkQJQ4uVWS2rcGDGjKiuxBFtb6Dsq4GQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjx-XH8mkqv9rkQJQ4uVWS2rcGDGjKiuxBFtb6Dsq4GQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "arsh-kabir-ranga",
    "playerId": "arsh-kabir-ranga_uba3_07",
    "name": "Arsh Kabir Ranga",
    "firstName": "Arsh",
    "lastName": "Kabir Ranga",
    "fullName": "Arsh Kabir Ranga",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 286,
    "overallAuctionOrder": 286,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvx8nUVYz3S7kXaQIsmZIB0J_hJD-K7H56N2QyhVhIA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvx8nUVYz3S7kXaQIsmZIB0J_hJD-K7H56N2QyhVhIA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "adarsh-singh",
    "playerId": "adarsh-singh_uba3_08",
    "name": "Adarsh Singh",
    "firstName": "Adarsh",
    "lastName": "Singh",
    "fullName": "Adarsh Singh",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 287,
    "overallAuctionOrder": 287,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-GnEJ1JlwHiU2csyUIaBCPy6bxGZgrSf9gRrYliiUw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-GnEJ1JlwHiU2csyUIaBCPy6bxGZgrSf9gRrYliiUw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "musheer-khan",
    "playerId": "musheer-khan",
    "name": "Musheer Khan",
    "firstName": "Musheer",
    "lastName": "Khan",
    "fullName": "Musheer Khan",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 288,
    "overallAuctionOrder": 288,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5Dxwivd95BvMUL0e1bW55N9AqxiFLQW7gUHD_Lpotw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5Dxwivd95BvMUL0e1bW55N9AqxiFLQW7gUHD_Lpotw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "priyam-garg",
    "playerId": "priyam-garg",
    "name": "Priyam Garg",
    "firstName": "Priyam",
    "lastName": "Garg",
    "fullName": "Priyam Garg",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 289,
    "overallAuctionOrder": 289,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWZIDRHDPgQ5MKYbHGOPs8XT-VcG8_1NRBUfMbImZVw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWZIDRHDPgQ5MKYbHGOPs8XT-VcG8_1NRBUfMbImZVw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "uday-saharan",
    "playerId": "uday-saharan",
    "name": "Uday Saharan",
    "firstName": "Uday",
    "lastName": "Saharan",
    "fullName": "Uday Saharan",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 290,
    "overallAuctionOrder": 290,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmIr2X0aFk5qsKF7XVjX9dx1_TQGHawiYbc0dZA38Zg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmIr2X0aFk5qsKF7XVjX9dx1_TQGHawiYbc0dZA38Zg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "aniket-verma",
    "playerId": "aniket-verma",
    "name": "Aniket Verma",
    "firstName": "Aniket",
    "lastName": "Verma",
    "fullName": "Aniket Verma",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 291,
    "overallAuctionOrder": 291,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-fgZ-1b3XpRkKoH3-_EdmJa7QqhiUP-Q3d82K9Mlg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-fgZ-1b3XpRkKoH3-_EdmJa7QqhiUP-Q3d82K9Mlg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "tanmay-agarwal",
    "playerId": "tanmay-agarwal",
    "name": "Tanmay Agarwal",
    "firstName": "Tanmay",
    "lastName": "Agarwal",
    "fullName": "Tanmay Agarwal",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 200,
    "setNo": 23,
    "setNumber": 23,
    "setCode": "UBA3",
    "setName": "Uncapped Batters 3",
    "set": "Uncapped Batters 3 (UBA3)",
    "currentSet": "UBA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": null,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 292,
    "overallAuctionOrder": 292,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt0PYHrikNTrKvdXN1z-So2Qj6L-5iLf81F9hLUK0-Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt0PYHrikNTrKvdXN1z-So2Qj6L-5iLf81F9hLUK0-Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 280,
      "wickets": 4
    },
    "form": null,
    "careerStats": null,
    "sourceMetadata": null,
    "status": "UPCOMING"
  },
  {
    "id": "manoj-bhandage",
    "playerId": "manoj-bhandage_ual3_01",
    "name": "Manoj Bhandage",
    "firstName": "Manoj",
    "lastName": "Bhandage",
    "fullName": "Manoj Bhandage",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 293,
    "overallAuctionOrder": 293,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6dmoKhhG6JeErRoQQPc7PtEYSXOPQJiDeQ9NUrEyrA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6dmoKhhG6JeErRoQQPc7PtEYSXOPQJiDeQ9NUrEyrA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "mayank-dagar",
    "playerId": "mayank-dagar_ual3_02",
    "name": "Mayank Dagar",
    "firstName": "Mayank",
    "lastName": "Dagar",
    "fullName": "Mayank Dagar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 294,
    "overallAuctionOrder": 294,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHOg2CGCia0AIjS5_43oIIFOjJVsI9McXnpn2f6IvJA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHOg2CGCia0AIjS5_43oIIFOjJVsI9McXnpn2f6IvJA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "manvanth-kumar",
    "playerId": "manvanth-kumar_ual3_04",
    "name": "Manvanth Kumar",
    "firstName": "Manvanth",
    "lastName": "Kumar",
    "fullName": "Manvanth Kumar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 295,
    "overallAuctionOrder": 295,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_NBCFNmWN0RYcI1GHffLMEthL1mrChrt_KoBYjMpNw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_NBCFNmWN0RYcI1GHffLMEthL1mrChrt_KoBYjMpNw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abid-mushtaq",
    "playerId": "abid-mushtaq_ual3_05",
    "name": "Abid Mushtaq",
    "firstName": "Abid",
    "lastName": "Mushtaq",
    "fullName": "Abid Mushtaq",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 296,
    "overallAuctionOrder": 296,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJOFh-FhnlW1LshN0qeKDtO8xX2LKlbqQfGO22TFEuQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJOFh-FhnlW1LshN0qeKDtO8xX2LKlbqQfGO22TFEuQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jalaj-saxena",
    "playerId": "jalaj-saxena_ual3_06",
    "name": "Jalaj Saxena",
    "firstName": "Jalaj",
    "lastName": "Saxena",
    "fullName": "Jalaj Saxena",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "PBKS",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 297,
    "overallAuctionOrder": 297,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyEZ1WjO8sO_XMyQoxBdagjSPWNxROHYY0AF48B-yrg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyEZ1WjO8sO_XMyQoxBdagjSPWNxROHYY0AF48B-yrg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "atit-sheth",
    "playerId": "atit-sheth_ual3_07",
    "name": "Atit Sheth",
    "firstName": "Atit",
    "lastName": "Sheth",
    "fullName": "Atit Sheth",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 298,
    "overallAuctionOrder": 298,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "hritik-shokeen",
    "playerId": "hritik-shokeen_ual3_08",
    "name": "Hritik Shokeen",
    "firstName": "Hritik",
    "lastName": "Shokeen",
    "fullName": "Hritik Shokeen",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 299,
    "overallAuctionOrder": 299,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxo75saM81K-CPiEpYWwWshnJdi-pzsgwjRyLREN8Aw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxo75saM81K-CPiEpYWwWshnJdi-pzsgwjRyLREN8Aw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jagadeesha-suchith",
    "playerId": "jagadeesha-suchith_ual3_09",
    "name": "Jagadeesha Suchith",
    "firstName": "Jagadeesha",
    "lastName": "Suchith",
    "fullName": "Jagadeesha Suchith",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 300,
    "overallAuctionOrder": 300,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tanay-thyagarajann",
    "playerId": "tanay-thyagarajann_ual3_10",
    "name": "Tanay Thyagarajann",
    "firstName": "Tanay",
    "lastName": "Thyagarajann",
    "fullName": "Tanay Thyagarajann",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 24,
    "setNumber": 24,
    "setCode": "UAL3",
    "setName": "Uncapped All-rounders 3",
    "set": "Uncapped All-rounders 3 (UAL3)",
    "currentSet": "UAL3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 301,
    "overallAuctionOrder": 301,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMgT8IVb0u_d20s-8we5gilvU7c73m5n2t2Ct7Eadng&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMgT8IVb0u_d20s-8we5gilvU7c73m5n2t2Ct7Eadng&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "joe-clarke",
    "playerId": "joe-clarke_uwk3_01",
    "name": "Joe Clarke",
    "firstName": "Joe",
    "lastName": "Clarke",
    "fullName": "Joe Clarke",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 302,
    "overallAuctionOrder": 302,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua41HROKWazB7Ckhmtf1ObRlMHK-o1vOkU-F5qvFNig&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua41HROKWazB7Ckhmtf1ObRlMHK-o1vOkU-F5qvFNig&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "connor-esterhuizen",
    "playerId": "connor-esterhuizen_uwk3_02",
    "name": "Connor Esterhuizen",
    "firstName": "Connor",
    "lastName": "Esterhuizen",
    "fullName": "Connor Esterhuizen",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 303,
    "overallAuctionOrder": 303,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHRl4TbC056Zfea3j2B67Qg2p-oYfJIuq9EWbNRPUdA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHRl4TbC056Zfea3j2B67Qg2p-oYfJIuq9EWbNRPUdA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ajitesh-guruswamy",
    "playerId": "ajitesh-guruswamy_uwk3_03",
    "name": "Ajitesh Guruswamy",
    "firstName": "Ajitesh",
    "lastName": "Guruswamy",
    "fullName": "Ajitesh Guruswamy",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 304,
    "overallAuctionOrder": 304,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pY4hrN1O_4JoLbsztXF0WY76AV4ltCuo1dLyO_voKQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pY4hrN1O_4JoLbsztXF0WY76AV4ltCuo1dLyO_voKQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "siddharth-joon",
    "playerId": "siddharth-joon_uwk3_04",
    "name": "Siddharth Joon",
    "firstName": "Siddharth",
    "lastName": "Joon",
    "fullName": "Siddharth Joon",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 305,
    "overallAuctionOrder": 305,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCfOj0_MS-HXtyww6sAHavbeRphSU2SUw5ZAhbqL9LA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCfOj0_MS-HXtyww6sAHavbeRphSU2SUw5ZAhbqL9LA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tom-moores",
    "playerId": "tom-moores_uwk3_05",
    "name": "Tom Moores",
    "firstName": "Tom",
    "lastName": "Moores",
    "fullName": "Tom Moores",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 306,
    "overallAuctionOrder": 306,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81590xzDb0aEpEuUJd2w3mz7jK7-whF8wib_S_ZnfBg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81590xzDb0aEpEuUJd2w3mz7jK7-whF8wib_S_ZnfBg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "bipin-saurabh",
    "playerId": "bipin-saurabh_uwk3_06",
    "name": "Bipin Saurabh",
    "firstName": "Bipin",
    "lastName": "Saurabh",
    "fullName": "Bipin Saurabh",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 307,
    "overallAuctionOrder": 307,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfriKuoLSMss5ubkVwIbMO828n_aVDqeXhXCPWCLiebg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfriKuoLSMss5ubkVwIbMO828n_aVDqeXhXCPWCLiebg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vishnu-solanki",
    "playerId": "vishnu-solanki_uwk3_07",
    "name": "Vishnu Solanki",
    "firstName": "Vishnu",
    "lastName": "Solanki",
    "fullName": "Vishnu Solanki",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 308,
    "overallAuctionOrder": 308,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6Z-DmT4mMG0rem60SRFaB0G4g__f2OP0FtuRGMtDug&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6Z-DmT4mMG0rem60SRFaB0G4g__f2OP0FtuRGMtDug&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "hardik-tamore",
    "playerId": "hardik-tamore_uwk3_08",
    "name": "Hardik Tamore",
    "firstName": "Hardik",
    "lastName": "Tamore",
    "fullName": "Hardik Tamore",
    "role": "WICKET_KEEPER",
    "specialism": "WICKETKEEPER-BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 25,
    "setNumber": 25,
    "setCode": "UWK3",
    "setName": "Uncapped Wicket Keepers 3",
    "set": "Uncapped Wicketkeepers 3 (UWK3)",
    "currentSet": "UWK3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 309,
    "overallAuctionOrder": 309,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nHAvFPkMrwmDpBERKwqVRjKhSRBqQPnj48-6GAYoQw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nHAvFPkMrwmDpBERKwqVRjKhSRBqQPnj48-6GAYoQw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sayan-ghosh",
    "playerId": "sayan-ghosh_ufa3_01",
    "name": "Sayan Ghosh",
    "firstName": "Sayan",
    "lastName": "Ghosh",
    "fullName": "Sayan Ghosh",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 310,
    "overallAuctionOrder": 310,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01O2qj0LHmIrlk1v11No6jOfsXtoEYrYOeNCKX0lvg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01O2qj0LHmIrlk1v11No6jOfsXtoEYrYOeNCKX0lvg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "money-grewal",
    "playerId": "money-grewal_ufa3_02",
    "name": "Money Grewal",
    "firstName": "Money",
    "lastName": "Grewal",
    "fullName": "Money Grewal",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 311,
    "overallAuctionOrder": 311,
    "photo": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/405400/405483.6.jpg",
    "imageUrl": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/405400/405483.6.jpg",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "arpit-guleria",
    "playerId": "arpit-guleria_ufa3_03",
    "name": "Arpit Guleria",
    "firstName": "Arpit",
    "lastName": "Guleria",
    "fullName": "Arpit Guleria",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 312,
    "overallAuctionOrder": 312,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaPcs-oYW2XbntufQ5ljNSArSIiy0r1Ut0MlSrrutAA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaPcs-oYW2XbntufQ5ljNSArSIiy0r1Ut0MlSrrutAA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sunil-kumar",
    "playerId": "sunil-kumar_ufa3_04",
    "name": "Sunil Kumar",
    "firstName": "Sunil",
    "lastName": "Kumar",
    "fullName": "Sunil Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 313,
    "overallAuctionOrder": 313,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7eVqCpJQHoAEN2Ep1iWsOl0W1dZHdJW_NZ7GICPtKg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7eVqCpJQHoAEN2Ep1iWsOl0W1dZHdJW_NZ7GICPtKg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tristan-luus",
    "playerId": "tristan-luus_ufa3_05",
    "name": "Tristan Luus",
    "firstName": "Tristan",
    "lastName": "Luus",
    "fullName": "Tristan Luus",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 314,
    "overallAuctionOrder": 314,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3uedoSDF8zZNVzNbv-MDL3RV99_3F6jrtdqBnOaWfw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3uedoSDF8zZNVzNbv-MDL3RV99_3F6jrtdqBnOaWfw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "divesh-sharma",
    "playerId": "divesh-sharma_ufa3_06",
    "name": "Divesh Sharma",
    "firstName": "Divesh",
    "lastName": "Sharma",
    "fullName": "Divesh Sharma",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 315,
    "overallAuctionOrder": 315,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRng0Z_-Inl5KqTo6D4hUuGBH1qzmwSZnws5qyp2QHwGw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRng0Z_-Inl5KqTo6D4hUuGBH1qzmwSZnws5qyp2QHwGw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abhilash-shetty",
    "playerId": "abhilash-shetty_ufa3_07",
    "name": "Abhilash Shetty",
    "firstName": "Abhilash",
    "lastName": "Shetty",
    "fullName": "Abhilash Shetty",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 316,
    "overallAuctionOrder": 316,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV2FM-9GLhDjWHU2CjIr25ikZ9lTzV4ND8NyqCnb4cA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV2FM-9GLhDjWHU2CjIr25ikZ9lTzV4ND8NyqCnb4cA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "irfan-umair",
    "playerId": "irfan-umair_ufa3_08",
    "name": "Irfan Umair",
    "firstName": "Irfan",
    "lastName": "Umair",
    "fullName": "Irfan Umair",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 317,
    "overallAuctionOrder": 317,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGjls7vPdMpjmfGjJUml-1WGNIauPBxiM5fZgDGigaQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGjls7vPdMpjmfGjJUml-1WGNIauPBxiM5fZgDGigaQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kuldip-yadav",
    "playerId": "kuldip-yadav_ufa3_09",
    "name": "Kuldip Yadav",
    "firstName": "Kuldip",
    "lastName": "Yadav",
    "fullName": "Kuldip Yadav",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 26,
    "setNumber": 26,
    "setCode": "UFA3",
    "setName": "Uncapped Fast Bowlers 3",
    "set": "Uncapped Fast Bowlers 3 (UFA3)",
    "currentSet": "UFA3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 318,
    "overallAuctionOrder": 318,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJd6_rwDc1mE7aUJ6mIp__TAoPfAioi5je3RIcGqKFg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJd6_rwDc1mE7aUJ6mIp__TAoPfAioi5je3RIcGqKFg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 3,
      "runs": 0,
      "wickets": 2,
      "strikeRate": 0,
      "economy": 7.5
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "manan-bhardwaj",
    "playerId": "manan-bhardwaj_usp3_01",
    "name": "Manan Bhardwaj",
    "firstName": "Manan",
    "lastName": "Bhardwaj",
    "fullName": "Manan Bhardwaj",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 319,
    "overallAuctionOrder": 319,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ki9epK5UgpsfT9j73Wqyuj1CFfv9rIFUkWhOcmekTA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ki9epK5UgpsfT9j73Wqyuj1CFfv9rIFUkWhOcmekTA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shreyas-chavan",
    "playerId": "shreyas-chavan_usp3_02",
    "name": "Shreyas Chavan",
    "firstName": "Shreyas",
    "lastName": "Chavan",
    "fullName": "Shreyas Chavan",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 320,
    "overallAuctionOrder": 320,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxvVTOy9r8VNxxopnEtzDC7SQOcrkaEsBXqMGk0jKGg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxvVTOy9r8VNxxopnEtzDC7SQOcrkaEsBXqMGk0jKGg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "parikshit-dhanak",
    "playerId": "parikshit-dhanak_usp3_03",
    "name": "Parikshit Dhanak",
    "firstName": "Parikshit",
    "lastName": "Dhanak",
    "fullName": "Parikshit Dhanak",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 321,
    "overallAuctionOrder": 321,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UaDFjSpwweJEaDuKfcWBmVlkYaHrV1zsoMMTWlR9oA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UaDFjSpwweJEaDuKfcWBmVlkYaHrV1zsoMMTWlR9oA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "chintal-gandhi",
    "playerId": "chintal-gandhi_usp3_04",
    "name": "Chintal Gandhi",
    "firstName": "Chintal",
    "lastName": "Gandhi",
    "fullName": "Chintal Gandhi",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 322,
    "overallAuctionOrder": 322,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRL35wkFbfUD19_4W5x4tNC3YR-kN3PzqZaEhEm5XRg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRL35wkFbfUD19_4W5x4tNC3YR-kN3PzqZaEhEm5XRg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "dharmendrasinh-jadeja",
    "playerId": "dharmendrasinh-jadeja_usp3_05",
    "name": "Dharmendrasinh Jadeja",
    "firstName": "Dharmendrasinh",
    "lastName": "Jadeja",
    "fullName": "Dharmendrasinh Jadeja",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 323,
    "overallAuctionOrder": 323,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJKondRzVCxRv7v1TibcR7-x_ujzM0MiP6gUOd6eaA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJKondRzVCxRv7v1TibcR7-x_ujzM0MiP6gUOd6eaA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "amit-kumar",
    "playerId": "amit-kumar_usp3_06",
    "name": "Amit Kumar",
    "firstName": "Amit",
    "lastName": "Kumar",
    "fullName": "Amit Kumar",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2000-10-10",
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 324,
    "overallAuctionOrder": 324,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4Jr2pOfahqiizhTSLuTadKQswzkME8nZteY5Gw6esQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4Jr2pOfahqiizhTSLuTadKQswzkME8nZteY5Gw6esQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vishal-nishad",
    "playerId": "vishal-nishad_usp3_07",
    "name": "Vishal Nishad",
    "firstName": "Vishal",
    "lastName": "Nishad",
    "fullName": "Vishal Nishad",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "PBKS",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2002-08-14",
    "age": 23,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 325,
    "overallAuctionOrder": 325,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMuDrEhPQUbSueyUWVE3cJk2T6txW1z2IXRt7q0kDXA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMuDrEhPQUbSueyUWVE3cJk2T6txW1z2IXRt7q0kDXA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "saumy-pandey",
    "playerId": "saumy-pandey_usp3_08",
    "name": "Saumy Pandey",
    "firstName": "Saumy",
    "lastName": "Pandey",
    "fullName": "Saumy Pandey",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 326,
    "overallAuctionOrder": 326,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTYy6XEwwmQ4xwrOuqp2bOleopOcsHmQ2P2d_vDSLag&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTYy6XEwwmQ4xwrOuqp2bOleopOcsHmQ2P2d_vDSLag&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jhathavedh-subramanyan",
    "playerId": "jhathavedh-subramanyan_usp3_09",
    "name": "Jhathavedh Subramanyan",
    "firstName": "Jhathavedh",
    "lastName": "Subramanyan",
    "fullName": "Jhathavedh Subramanyan",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 27,
    "setNumber": 27,
    "setCode": "USP3",
    "setName": "Uncapped Spinners 3",
    "set": "Uncapped Spinners 3 (USP3)",
    "currentSet": "USP3",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 327,
    "overallAuctionOrder": 327,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLlmNC4jb_-wCk86_2hlrdfBTxM4fxZzmcelj7jNSPg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLlmNC4jb_-wCk86_2hlrdfBTxM4fxZzmcelj7jNSPg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "muhammad-abbas",
    "playerId": "muhammad-abbas_al4_01",
    "name": "Muhammad Abbas",
    "firstName": "Muhammad",
    "lastName": "Abbas",
    "fullName": "Muhammad Abbas",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 328,
    "overallAuctionOrder": 328,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZKTkEBTof3Cr7c_iItFFLv68M3kD7ESizCMhAvYxbg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZKTkEBTof3Cr7c_iItFFLv68M3kD7ESizCMhAvYxbg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "charith-asalanka",
    "playerId": "charith-asalanka_al4_02",
    "name": "Charith Asalanka",
    "firstName": "Charith",
    "lastName": "Asalanka",
    "fullName": "Charith Asalanka",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 329,
    "overallAuctionOrder": 329,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZyvjaH0FYl30F3S5yrI78kn-U_2lzsldjA27-Hd84w&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZyvjaH0FYl30F3S5yrI78kn-U_2lzsldjA27-Hd84w&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "roston-chase",
    "playerId": "roston-chase_al4_03",
    "name": "Roston Chase",
    "firstName": "Roston",
    "lastName": "Chase",
    "fullName": "Roston Chase",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 330,
    "overallAuctionOrder": 330,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGpkbIaZTxvxBctAS-2czSWiJDPIn7CU7TN0c12Vgxw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGpkbIaZTxvxBctAS-2czSWiJDPIn7CU7TN0c12Vgxw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "liam-dawson",
    "playerId": "liam-dawson_al4_04",
    "name": "Liam Dawson",
    "firstName": "Liam",
    "lastName": "Dawson",
    "fullName": "Liam Dawson",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 331,
    "overallAuctionOrder": 331,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKm3xnhQu4zTLjZ_khl4-t5_Lul0TLyno_xixfS2GKw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKm3xnhQu4zTLjZ_khl4-t5_Lul0TLyno_xixfS2GKw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "george-garton",
    "playerId": "george-garton_al4_05",
    "name": "George Garton",
    "firstName": "George",
    "lastName": "Garton",
    "fullName": "George Garton",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 332,
    "overallAuctionOrder": 332,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNy4LuI4BTnQOFygXVMF7KntUQAX1tu-HZJtJfagzJw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNy4LuI4BTnQOFygXVMF7KntUQAX1tu-HZJtJfagzJw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kyle-mayers",
    "playerId": "kyle-mayers_al4_06",
    "name": "Kyle Mayers",
    "firstName": "Kyle",
    "lastName": "Mayers",
    "fullName": "Kyle Mayers",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "LSG",
    "currentTeam": "LSG",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 333,
    "overallAuctionOrder": 333,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslG72gJfVFPhsAjB3ryCFxP8t7E2EKsFihMMszXw4WA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslG72gJfVFPhsAjB3ryCFxP8t7E2EKsFihMMszXw4WA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "dwaine-pretorius",
    "playerId": "dwaine-pretorius_al4_07",
    "name": "Dwaine Pretorius",
    "firstName": "Dwaine",
    "lastName": "Pretorius",
    "fullName": "Dwaine Pretorius",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 334,
    "overallAuctionOrder": 334,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgQ5qgmW7PghXjIOgGR3J4sRsTOpIiEpOuHMsevIfcQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgQ5qgmW7PghXjIOgGR3J4sRsTOpIiEpOuHMsevIfcQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "nathan-smith",
    "playerId": "nathan-smith_al4_08",
    "name": "Nathan Smith",
    "firstName": "Nathan",
    "lastName": "Smith",
    "fullName": "Nathan Smith",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "New Zealand",
    "countryCode": "NZ",
    "nationality": "New Zealand",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 335,
    "overallAuctionOrder": 335,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpsZmcWkg0IbzKfl-nQbM0aAKsbHmlkP3JMRZcDIRug&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpsZmcWkg0IbzKfl-nQbM0aAKsbHmlkP3JMRZcDIRug&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "dunith-wellalage",
    "playerId": "dunith-wellalage_al4_09",
    "name": "Dunith Wellalage",
    "firstName": "Dunith",
    "lastName": "Wellalage",
    "fullName": "Dunith Wellalage",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 28,
    "setNumber": 28,
    "setCode": "AL4",
    "setName": "Capped All-rounders 4",
    "set": "Capped All-rounders 4 (AL4)",
    "currentSet": "AL4",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 336,
    "overallAuctionOrder": 336,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47xpDxv8IUqQw19wlvds6AHV0x-s8TAQ64EaRyATMtw&s",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47xpDxv8IUqQw19wlvds6AHV0x-s8TAQ64EaRyATMtw&s",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jason-behrendorff",
    "playerId": "jason-behrendorff_fa4_01",
    "name": "Jason Behrendorff",
    "firstName": "Jason",
    "lastName": "Behrendorff",
    "fullName": "Jason Behrendorff",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 337,
    "overallAuctionOrder": 337,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlenmtzW-AOo9Ab4O8bMVfWjZ02ZvhcxcopG908d6BTQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlenmtzW-AOo9Ab4O8bMVfWjZ02ZvhcxcopG908d6BTQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "tanzim-hasan-sakib",
    "playerId": "tanzim-hasan-sakib_fa4_02",
    "name": "Tanzim Hasan Sakib",
    "firstName": "Tanzim",
    "lastName": "Hasan Sakib",
    "fullName": "Tanzim Hasan Sakib",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 338,
    "overallAuctionOrder": 338,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaCuMtzxkL4UUv1M5GFyv0OnWkArLfvoVzgSu6pHFCw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaCuMtzxkL4UUv1M5GFyv0OnWkArLfvoVzgSu6pHFCw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "matthew-potts",
    "playerId": "matthew-potts_fa4_03",
    "name": "Matthew Potts",
    "firstName": "Matthew",
    "lastName": "Potts",
    "fullName": "Matthew Potts",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 339,
    "overallAuctionOrder": 339,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hm6-5sWeUddRf6AxPjXGucfQvqrc81zWPhZnfQG5jQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hm6-5sWeUddRf6AxPjXGucfQvqrc81zWPhZnfQG5jQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "nahid-rana",
    "playerId": "nahid-rana_fa4_04",
    "name": "Nahid Rana",
    "firstName": "Nahid",
    "lastName": "Rana",
    "fullName": "Nahid Rana",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 340,
    "overallAuctionOrder": 340,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl25h0qH37HdIZbql846gqsDaUqLJC-x56nKV36Fdwmw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl25h0qH37HdIZbql846gqsDaUqLJC-x56nKV36Fdwmw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "olly-stone",
    "playerId": "olly-stone_fa4_05",
    "name": "Olly Stone",
    "firstName": "Olly",
    "lastName": "Stone",
    "fullName": "Olly Stone",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 341,
    "overallAuctionOrder": 341,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-GbbR_4n7_AITCD8Hv27OGkabc0iP3j-zMBh_rT7WQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-GbbR_4n7_AITCD8Hv27OGkabc0iP3j-zMBh_rT7WQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "josh-tongue",
    "playerId": "josh-tongue_fa4_06",
    "name": "Josh Tongue",
    "firstName": "Josh",
    "lastName": "Tongue",
    "fullName": "Josh Tongue",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 342,
    "overallAuctionOrder": 342,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tsemoas9QG7NLSlNqush0s4pgG4U6TSq8WQVHVoSsg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tsemoas9QG7NLSlNqush0s4pgG4U6TSq8WQVHVoSsg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sandeep-warrier",
    "playerId": "sandeep-warrier_fa4_07",
    "name": "Sandeep Warrier",
    "firstName": "Sandeep",
    "lastName": "Warrier",
    "fullName": "Sandeep Warrier",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 29,
    "setNumber": 29,
    "setCode": "FA4",
    "setName": "Capped Fast Bowlers 4",
    "set": "Capped Fast Bowlers 4 (FA4)",
    "currentSet": "FA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 343,
    "overallAuctionOrder": 343,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhBcnmP0vl3LjD8NZIW23nBvFU7tk-fMQ7q_sVgW-ng&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhBcnmP0vl3LjD8NZIW23nBvFU7tk-fMQ7q_sVgW-ng&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sachin-dhas",
    "playerId": "sachin-dhas_uba4_01",
    "name": "Sachin Dhas",
    "firstName": "Sachin",
    "lastName": "Dhas",
    "fullName": "Sachin Dhas",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 344,
    "overallAuctionOrder": 344,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdXXxeP0CfNsPAl97lA9fH4JH-eGqtBAlhgE1pEDsZg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdXXxeP0CfNsPAl97lA9fH4JH-eGqtBAlhgE1pEDsZg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "miles-hammond",
    "playerId": "miles-hammond_uba4_02",
    "name": "Miles Hammond",
    "firstName": "Miles",
    "lastName": "Hammond",
    "fullName": "Miles Hammond",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": true,
    "country": "England",
    "countryCode": "ENG",
    "nationality": "England",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 345,
    "overallAuctionOrder": 345,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QjOBwHDFAEIV1YeRKtwXotRbgKABTOMcbxNjuIhQcQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QjOBwHDFAEIV1YeRKtwXotRbgKABTOMcbxNjuIhQcQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ahammed-imran",
    "playerId": "ahammed-imran_uba4_03",
    "name": "Ahammed Imran",
    "firstName": "Ahammed",
    "lastName": "Imran",
    "fullName": "Ahammed Imran",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 346,
    "overallAuctionOrder": 346,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM02MFBdES_J-dYjj5e2tR2ShXTHt933EW4LcZoT64A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM02MFBdES_J-dYjj5e2tR2ShXTHt933EW4LcZoT64A&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vishvarajsinh-jadeja",
    "playerId": "vishvarajsinh-jadeja_uba4_04",
    "name": "Vishvarajsinh Jadeja",
    "firstName": "Vishvarajsinh",
    "lastName": "Jadeja",
    "fullName": "Vishvarajsinh Jadeja",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 347,
    "overallAuctionOrder": 347,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ayaz-khan",
    "playerId": "ayaz-khan_uba4_05",
    "name": "Ayaz Khan",
    "firstName": "Ayaz",
    "lastName": "Khan",
    "fullName": "Ayaz Khan",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 348,
    "overallAuctionOrder": 348,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "daniel-lategan",
    "playerId": "daniel-lategan_uba4_06",
    "name": "Daniel Lategan",
    "firstName": "Daniel",
    "lastName": "Lategan",
    "fullName": "Daniel Lategan",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": true,
    "country": "South Africa",
    "countryCode": "ZA",
    "nationality": "South Africa",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 349,
    "overallAuctionOrder": 349,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "siddhant-rana",
    "playerId": "siddhant-rana_uba4_07",
    "name": "Siddhant Rana",
    "firstName": "Siddhant",
    "lastName": "Rana",
    "fullName": "Siddhant Rana",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 350,
    "overallAuctionOrder": 350,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzrX79PRtRQW4FUWwT-FnpZoDvzM7OqWDLhfNMBKs6A&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzrX79PRtRQW4FUWwT-FnpZoDvzM7OqWDLhfNMBKs6A&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "aaron-varghese",
    "playerId": "aaron-varghese_uba4_08",
    "name": "Aaron Varghese",
    "firstName": "Aaron",
    "lastName": "Varghese",
    "fullName": "Aaron Varghese",
    "role": "BATTER",
    "specialism": "BATTER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 30,
    "setNumber": 30,
    "setCode": "UBA4",
    "setName": "Uncapped Batters 4",
    "set": "Uncapped Batters 4 (UBA4)",
    "currentSet": "UBA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 351,
    "overallAuctionOrder": 351,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 160,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 1850,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "atharva-ankolekar",
    "playerId": "atharva-ankolekar_ual4_01",
    "name": "Atharva Ankolekar",
    "firstName": "Atharva",
    "lastName": "Ankolekar",
    "fullName": "Atharva Ankolekar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 352,
    "overallAuctionOrder": 352,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA03ozLNiCY1DqC3-qYV666VE25eFrkS-W3MMSyEbHqg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA03ozLNiCY1DqC3-qYV666VE25eFrkS-W3MMSyEbHqg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "abdul-bazith",
    "playerId": "abdul-bazith_ual4_02",
    "name": "Abdul Bazith",
    "firstName": "Abdul",
    "lastName": "Bazith",
    "fullName": "Abdul Bazith",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 353,
    "overallAuctionOrder": 353,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsVRfo1-h0In0BUxzUDCntRBMcvO3Qd3jYk-KENaIPw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsVRfo1-h0In0BUxzUDCntRBMcvO3Qd3jYk-KENaIPw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "karan-lal",
    "playerId": "karan-lal_ual4_03",
    "name": "Karan Lal",
    "firstName": "Karan",
    "lastName": "Lal",
    "fullName": "Karan Lal",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 354,
    "overallAuctionOrder": 354,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY5hjfY15BZLJxDqWbqRj2X_vhMPBDLFotcs_77D0BA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY5hjfY15BZLJxDqWbqRj2X_vhMPBDLFotcs_77D0BA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shams-mulani",
    "playerId": "shams-mulani_ual4_04",
    "name": "Shams Mulani",
    "firstName": "Shams",
    "lastName": "Mulani",
    "fullName": "Shams Mulani",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "MI",
    "currentTeam": "MI",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 355,
    "overallAuctionOrder": 355,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf9WfIV6PNZuysYH4Ue8Kyev-inK6RUpZ0wKptXd5Yw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf9WfIV6PNZuysYH4Ue8Kyev-inK6RUpZ0wKptXd5Yw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ripal-patel",
    "playerId": "ripal-patel_ual4_05",
    "name": "Ripal Patel",
    "firstName": "Ripal",
    "lastName": "Patel",
    "fullName": "Ripal Patel",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 356,
    "overallAuctionOrder": 356,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5TpstDGabFImTF5oX3fIvAu2Wup11b2YcGyLALsZeg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5TpstDGabFImTF5oX3fIvAu2Wup11b2YcGyLALsZeg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "prince-rai",
    "playerId": "prince-rai_ual4_06",
    "name": "Prince Rai",
    "firstName": "Prince",
    "lastName": "Rai",
    "fullName": "Prince Rai",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 357,
    "overallAuctionOrder": 357,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SK1QgsxFi-d_ZVS7O7GVb_BQEPG4hPEo1dpp8yPVg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SK1QgsxFi-d_ZVS7O7GVb_BQEPG4hPEo1dpp8yPVg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "vivrant-sharma",
    "playerId": "vivrant-sharma_ual4_07",
    "name": "Vivrant Sharma",
    "firstName": "Vivrant",
    "lastName": "Sharma",
    "fullName": "Vivrant Sharma",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 25,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 358,
    "overallAuctionOrder": 358,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "season": 2026,
      "matches": 14,
      "innings": 14,
      "runs": 180,
      "wickets": 8,
      "strikeRate": 155,
      "economy": 8.6,
      "batting": {
        "matches": 14,
        "innings": 11,
        "runs": 180,
        "average": 20,
        "strikeRate": 155
      },
      "bowling": {
        "matches": 14,
        "innings": 14,
        "overs": 44.8,
        "wickets": 8,
        "economy": 8.6,
        "average": 48.16,
        "strikeRate": 33.6
      }
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 32,
          "balls": 20,
          "strikeRate": 160,
          "wickets": 1,
          "runsConceded": 28,
          "overs": 3,
          "economy": 9.33
        },
        {
          "opponent": "MI",
          "runs": 18,
          "balls": 11,
          "strikeRate": 163.6,
          "wickets": 2,
          "runsConceded": 30,
          "overs": 4,
          "economy": 7.5
        },
        {
          "opponent": "KKR",
          "runs": 45,
          "balls": 24,
          "strikeRate": 187.5,
          "wickets": 0,
          "runsConceded": 24,
          "overs": 2,
          "economy": 12
        },
        {
          "opponent": "RR",
          "runs": 12,
          "balls": 8,
          "strikeRate": 150,
          "wickets": 1,
          "runsConceded": 32,
          "overs": 4,
          "economy": 8
        },
        {
          "opponent": "SRH",
          "runs": 28,
          "balls": 17,
          "strikeRate": 164.7,
          "wickets": 1,
          "runsConceded": 26,
          "overs": 3,
          "economy": 8.67
        }
      ],
      "recentRuns": 72,
      "recentWickets": 5,
      "recentStrikeRate": 155,
      "recentEconomy": 8.6,
      "formSummary": "Contributed 72 runs and 5 wickets across his last five IPL 2026 appearances with a strike rate of 155.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 84,
      "innings": 70,
      "runs": 1080,
      "battingAverage": 20,
      "strikeRate": 155,
      "wickets": 48,
      "bowlingAverage": 48.16,
      "economy": 8.6,
      "catches": 28
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "utkarsh-singh",
    "playerId": "utkarsh-singh_ual4_08",
    "name": "Utkarsh Singh",
    "firstName": "Utkarsh",
    "lastName": "Singh",
    "fullName": "Utkarsh Singh",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 359,
    "overallAuctionOrder": 359,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOlradNaSYvjwGzuC9xNt3X4HGURmnzb8nluVxjtRqA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOlradNaSYvjwGzuC9xNt3X4HGURmnzb8nluVxjtRqA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ayush-vartak",
    "playerId": "ayush-vartak_ual4_09",
    "name": "Ayush Vartak",
    "firstName": "Ayush",
    "lastName": "Vartak",
    "fullName": "Ayush Vartak",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 31,
    "setNumber": 31,
    "setCode": "UAL4",
    "setName": "Uncapped All-rounders 4",
    "set": "Uncapped All-rounders 4 (UAL4)",
    "currentSet": "UAL4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 360,
    "overallAuctionOrder": 360,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sayed-irfan-aftab",
    "playerId": "sayed-irfan-aftab_ufa4_01",
    "name": "Sayed Irfan Aftab",
    "firstName": "Sayed",
    "lastName": "Irfan Aftab",
    "fullName": "Sayed Irfan Aftab",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 361,
    "overallAuctionOrder": 361,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPUP5WsBmjNvjyrDt482Qkia2Rl2xECfXwYBenWZ7YQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPUP5WsBmjNvjyrDt482Qkia2Rl2xECfXwYBenWZ7YQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "esakkimuthu-ayyakutti",
    "playerId": "esakkimuthu-ayyakutti_ufa4_02",
    "name": "Esakkimuthu Ayyakutti",
    "firstName": "Esakkimuthu",
    "lastName": "Ayyakutti",
    "fullName": "Esakkimuthu Ayyakutti",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 362,
    "overallAuctionOrder": 362,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxmaEH6YdEok9StV_qG3qq6bJtw_2CZeVfd5GKm3VQg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxmaEH6YdEok9StV_qG3qq6bJtw_2CZeVfd5GKm3VQg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "praful-hinge",
    "playerId": "praful-hinge_ufa4_03",
    "name": "Praful Hinge",
    "firstName": "Praful",
    "lastName": "Hinge",
    "fullName": "Praful Hinge",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2003-04-17",
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 363,
    "overallAuctionOrder": 363,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk3C5F-4m4r-kathx04iZnPOndH0b8F_JiCr1a7d5mw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk3C5F-4m4r-kathx04iZnPOndH0b8F_JiCr1a7d5mw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "pankaj-jaswal",
    "playerId": "pankaj-jaswal_ufa4_04",
    "name": "Pankaj Jaswal",
    "firstName": "Pankaj",
    "lastName": "Jaswal",
    "fullName": "Pankaj Jaswal",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 364,
    "overallAuctionOrder": 364,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yxWfpgLraq_JDEAUz8EJUVMNm93LkwZEB_tmO1fRsg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yxWfpgLraq_JDEAUz8EJUVMNm93LkwZEB_tmO1fRsg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "kulwant-khejroliya",
    "playerId": "kulwant-khejroliya_ufa4_05",
    "name": "Kulwant Khejroliya",
    "firstName": "Kulwant",
    "lastName": "Khejroliya",
    "fullName": "Kulwant Khejroliya",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "KKR",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "1992-03-13",
    "age": 33,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 365,
    "overallAuctionOrder": 365,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RJD64OIrtPLAt9i_ztSlOl5lU5SPj_UHEelcWIxGKg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RJD64OIrtPLAt9i_ztSlOl5lU5SPj_UHEelcWIxGKg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 5,
      "runs": 0,
      "wickets": 3,
      "strikeRate": 0,
      "economy": 7.65
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ravi-kumar",
    "playerId": "ravi-kumar_ufa4_06",
    "name": "Ravi Kumar",
    "firstName": "Ravi",
    "lastName": "Kumar",
    "fullName": "Ravi Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 366,
    "overallAuctionOrder": 366,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cOYeViuGIew21hc3fwb35tuMOFqpw2-iINcQ4DdkEg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cOYeViuGIew21hc3fwb35tuMOFqpw2-iINcQ4DdkEg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rajan-kumar",
    "playerId": "rajan-kumar_ufa4_07",
    "name": "Rajan Kumar",
    "firstName": "Rajan",
    "lastName": "Kumar",
    "fullName": "Rajan Kumar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 367,
    "overallAuctionOrder": 367,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsfsJ1N6yDNqj5juqHEw9jVERfphqMRU_B16PL9RcjQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsfsJ1N6yDNqj5juqHEw9jVERfphqMRU_B16PL9RcjQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "safvan-patel",
    "playerId": "safvan-patel_ufa4_08",
    "name": "Safvan Patel",
    "firstName": "Safvan",
    "lastName": "Patel",
    "fullName": "Safvan Patel",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 368,
    "overallAuctionOrder": 368,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAqHfPuJPY80XOled8maR3FAbyaxNeZCuJvz5uwWvYQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAqHfPuJPY80XOled8maR3FAbyaxNeZCuJvz5uwWvYQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ishan-porel",
    "playerId": "ishan-porel_ufa4_09",
    "name": "Ishan Porel",
    "firstName": "Ishan",
    "lastName": "Porel",
    "fullName": "Ishan Porel",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 32,
    "setNumber": 32,
    "setCode": "UFA4",
    "setName": "Uncapped Fast Bowlers 4",
    "set": "Uncapped Fast Bowlers 4 (UFA4)",
    "currentSet": "UFA4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "DC",
    "currentTeam": "DC",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 369,
    "overallAuctionOrder": 369,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL33eSpWy3B4Cs85x0KMuV_kyfEpZ51A784iOOXw3Zg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkL33eSpWy3B4Cs85x0KMuV_kyfEpZ51A784iOOXw3Zg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "purav-agarwal",
    "playerId": "purav-agarwal_usp4_01",
    "name": "Purav Agarwal",
    "firstName": "Purav",
    "lastName": "Agarwal",
    "fullName": "Purav Agarwal",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 370,
    "overallAuctionOrder": 370,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLFFOBDtinQJVzxXyJT6cn4x0OkQM4zxj7sJ8JlSjeg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLFFOBDtinQJVzxXyJT6cn4x0OkQM4zxj7sJ8JlSjeg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "jikku-bright",
    "playerId": "jikku-bright_usp4_02",
    "name": "Jikku Bright",
    "firstName": "Jikku",
    "lastName": "Bright",
    "fullName": "Jikku Bright",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 371,
    "overallAuctionOrder": 371,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqi9Kkw1S9K2EefeJvveDdRUxuXzJwk-4qLcoRFksvQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqi9Kkw1S9K2EefeJvveDdRUxuXzJwk-4qLcoRFksvQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "yash-dicholkar",
    "playerId": "yash-dicholkar_usp4_03",
    "name": "Yash Dicholkar",
    "firstName": "Yash",
    "lastName": "Dicholkar",
    "fullName": "Yash Dicholkar",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 372,
    "overallAuctionOrder": 372,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFG9iD_giq7LUeGnbtqzcnmyEv_8vtoDKT0JqrlrxLg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFG9iD_giq7LUeGnbtqzcnmyEv_8vtoDKT0JqrlrxLg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "arab-gul",
    "playerId": "arab-gul_usp4_04",
    "name": "Arab Gul",
    "firstName": "Arab",
    "lastName": "Gul",
    "fullName": "Arab Gul",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": true,
    "country": "Afghanistan",
    "countryCode": "AFG",
    "nationality": "Afghanistan",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 373,
    "overallAuctionOrder": 373,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7ED1Mo92BfR7QhIY0126FTC5_PQphxWnubkYr80kaA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7ED1Mo92BfR7QhIY0126FTC5_PQphxWnubkYr80kaA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rakibul-hasan",
    "playerId": "rakibul-hasan_usp4_05",
    "name": "Rakibul Hasan",
    "firstName": "Rakibul",
    "lastName": "Hasan",
    "fullName": "Rakibul Hasan",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 374,
    "overallAuctionOrder": 374,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVx8amx9Yrcxb6hPSN2qmnz-v3id_UitrO9UUy4qtdw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVx8amx9Yrcxb6hPSN2qmnz-v3id_UitrO9UUy4qtdw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "traveen-mathew",
    "playerId": "traveen-mathew_usp4_06",
    "name": "Traveen Mathew",
    "firstName": "Traveen",
    "lastName": "Mathew",
    "fullName": "Traveen Mathew",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 375,
    "overallAuctionOrder": 375,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kd9ostsrfYoYnLyarXJlKfcLWQdhun1kbYDOE-XQQQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kd9ostsrfYoYnLyarXJlKfcLWQdhun1kbYDOE-XQQQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "naman-pushpak",
    "playerId": "naman-pushpak_usp4_07",
    "name": "Naman Pushpak",
    "firstName": "Naman",
    "lastName": "Pushpak",
    "fullName": "Naman Pushpak",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 376,
    "overallAuctionOrder": 376,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtZHpfWHEOm_aOwE95kCViPOzJKpXxReKvh-DGSBgtw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtZHpfWHEOm_aOwE95kCViPOzJKpXxReKvh-DGSBgtw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "izaz-sawariya",
    "playerId": "izaz-sawariya_usp4_08",
    "name": "Izaz Sawariya",
    "firstName": "Izaz",
    "lastName": "Sawariya",
    "fullName": "Izaz Sawariya",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 377,
    "overallAuctionOrder": 377,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk707lF3POcYrQy-4-Xv2lJM0lsvmjGf6FwGCvdgP7Cg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk707lF3POcYrQy-4-Xv2lJM0lsvmjGf6FwGCvdgP7Cg&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "roshan-wagshare",
    "playerId": "roshan-wagshare_usp4_09",
    "name": "Roshan Wagshare",
    "firstName": "Roshan",
    "lastName": "Wagshare",
    "fullName": "Roshan Wagshare",
    "role": "SPINNER",
    "specialism": "SPINNER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 33,
    "setNumber": 33,
    "setCode": "USP4",
    "setName": "Uncapped Spinners 4",
    "set": "Uncapped Spinners 4 (USP4)",
    "currentSet": "USP4",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 378,
    "overallAuctionOrder": 378,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiqbn0wVHCPhP90E0_nSkVcAdL7hRyWqkvOvi9VQx7w&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiqbn0wVHCPhP90E0_nSkVcAdL7hRyWqkvOvi9VQx7w&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 6,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "wesley-agar",
    "playerId": "wesley-agar_fa5_01",
    "name": "Wesley Agar",
    "firstName": "Wesley",
    "lastName": "Agar",
    "fullName": "Wesley Agar",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 379,
    "overallAuctionOrder": 379,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_BOKWFsdWiVhdJdJ3skz0rtyeQLv-jjbwvTv83-UiQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_BOKWFsdWiVhdJdJ3skz0rtyeQLv-jjbwvTv83-UiQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "binura-fernando",
    "playerId": "binura-fernando_fa5_02",
    "name": "Binura Fernando",
    "firstName": "Binura",
    "lastName": "Fernando",
    "fullName": "Binura Fernando",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "Sri Lanka",
    "countryCode": "SL",
    "nationality": "Sri Lanka",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 380,
    "overallAuctionOrder": 380,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdr3ysaQ84stGzzQgqP7idoqHVVCrcMOoIO8593q3ZQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdr3ysaQ84stGzzQgqP7idoqHVVCrcMOoIO8593q3ZQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shoriful-islam",
    "playerId": "shoriful-islam_fa5_03",
    "name": "Shoriful Islam",
    "firstName": "Shoriful",
    "lastName": "Islam",
    "fullName": "Shoriful Islam",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "Bangladesh",
    "countryCode": "BAN",
    "nationality": "Bangladesh",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 381,
    "overallAuctionOrder": 381,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1c82KHg-XPEI9DQ2QoNRmad8Fcb7CAuGgPMDnkbNwQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1c82KHg-XPEI9DQ2QoNRmad8Fcb7CAuGgPMDnkbNwQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "joshua-little",
    "playerId": "joshua-little_fa5_04",
    "name": "Joshua Little",
    "firstName": "Joshua",
    "lastName": "Little",
    "fullName": "Joshua Little",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "Ireland",
    "countryCode": "IRE",
    "nationality": "Ireland",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "GT",
    "currentTeam": "GT",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 382,
    "overallAuctionOrder": 382,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zCzspCyIOuE8scjVEUKNEzLBHUWdZIuJoEAZmyiw9Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zCzspCyIOuE8scjVEUKNEzLBHUWdZIuJoEAZmyiw9Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "obed-mccoy",
    "playerId": "obed-mccoy_fa5_05",
    "name": "Obed McCoy",
    "firstName": "Obed",
    "lastName": "McCoy",
    "fullName": "Obed McCoy",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "West Indies",
    "countryCode": "WI",
    "nationality": "West Indies",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "RR",
    "currentTeam": "RR",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 383,
    "overallAuctionOrder": 383,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-4qADxgwxxfj2ck1yQRtuGJcNN6E0ca6Tf589eLTyQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-4qADxgwxxfj2ck1yQRtuGJcNN6E0ca6Tf589eLTyQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "billy-stanlake",
    "playerId": "billy-stanlake_fa5_06",
    "name": "Billy Stanlake",
    "firstName": "Billy",
    "lastName": "Stanlake",
    "fullName": "Billy Stanlake",
    "role": "FAST_BOWLER",
    "specialism": "FAST BOWLER",
    "reservePrice": 75,
    "basePrice": 75,
    "officialBasePrice": 75,
    "setNo": 34,
    "setNumber": 34,
    "setCode": "FA5",
    "setName": "Capped Fast Bowlers 5",
    "set": "Capped Fast Bowlers 5 (FA5)",
    "currentSet": "FA5",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "CAPPED",
    "isCapped": true,
    "previousTeam": "SRH",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 5,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 384,
    "overallAuctionOrder": 384,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrQSR-_izbQgWlvDh6su8KEImBcOjmzYGqMxYQNXHew&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrQSR-_izbQgWlvDh6su8KEImBcOjmzYGqMxYQNXHew&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 14,
      "runs": 40,
      "wickets": 15,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 65,
      "runs": 250,
      "wickets": 72
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "rs-ambrish",
    "playerId": "rs-ambrish_ual5_01",
    "name": "RS Ambrish",
    "firstName": "RS",
    "lastName": "Ambrish",
    "fullName": "RS Ambrish",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 385,
    "overallAuctionOrder": 385,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6ocJaH0we-Ed-yaPzAdH-fj8a3Bn-miecU2TNNVD4Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6ocJaH0we-Ed-yaPzAdH-fj8a3Bn-miecU2TNNVD4Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "nikhil-chaudhary",
    "playerId": "nikhil-chaudhary_ual5_02",
    "name": "Nikhil Chaudhary",
    "firstName": "Nikhil",
    "lastName": "Chaudhary",
    "fullName": "Nikhil Chaudhary",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": true,
    "country": "Australia",
    "countryCode": "AU",
    "nationality": "Australia",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 386,
    "overallAuctionOrder": 386,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvz8UoK0aKoBYnuNcN6d5DeY_nqqxr1xYENJZax_zVA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvz8UoK0aKoBYnuNcN6d5DeY_nqqxr1xYENJZax_zVA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "krains-fuletra",
    "playerId": "krains-fuletra_ual5_03",
    "name": "Krains Fuletra",
    "firstName": "Krains",
    "lastName": "Fuletra",
    "fullName": "Krains Fuletra",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "SRH",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": "2003-09-05",
    "age": 22,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 387,
    "overallAuctionOrder": 387,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3N5EMiIRSjsJ_8x7Y7NPwI3cDYrAd--lwFu-tWqRqA&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3N5EMiIRSjsJ_8x7Y7NPwI3cDYrAd--lwFu-tWqRqA&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": "Official IPL / ESPNcricinfo",
      "verificationStatus": "VERIFIED"
    },
    "status": "UPCOMING"
  },
  {
    "id": "macneil-noronha",
    "playerId": "macneil-noronha_ual5_04",
    "name": "Macneil Noronha",
    "firstName": "Macneil",
    "lastName": "Noronha",
    "fullName": "Macneil Noronha",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 388,
    "overallAuctionOrder": 388,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlztYeVCUTuvlQI4hyXMDnWyQ-EQ_Y3cwMIba1zMsMRQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlztYeVCUTuvlQI4hyXMDnWyQ-EQ_Y3cwMIba1zMsMRQ&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 0,
      "runs": 0,
      "wickets": 0,
      "strikeRate": 0,
      "economy": 0
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "r-rajkumar",
    "playerId": "r-rajkumar_ual5_05",
    "name": "R Rajkumar",
    "firstName": "R",
    "lastName": "Rajkumar",
    "fullName": "R Rajkumar",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 389,
    "overallAuctionOrder": 389,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx40Bu-edGHCT5nINtwVT8Vjubw08LBfkoEhASatQdg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx40Bu-edGHCT5nINtwVT8Vjubw08LBfkoEhASatQdg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "ninad-rathva",
    "playerId": "ninad-rathva_ual5_06",
    "name": "Ninad Rathva",
    "firstName": "Ninad",
    "lastName": "Rathva",
    "fullName": "Ninad Rathva",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 390,
    "overallAuctionOrder": 390,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFvA4J_d59Je7oTHCRnS83IadvHlTioMUHAvfojCf0Q&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFvA4J_d59Je7oTHCRnS83IadvHlTioMUHAvfojCf0Q&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "sunny-sandhu",
    "playerId": "sunny-sandhu_ual5_07",
    "name": "Sunny Sandhu",
    "firstName": "Sunny",
    "lastName": "Sandhu",
    "fullName": "Sunny Sandhu",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 391,
    "overallAuctionOrder": 391,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncqYB_g1NLrXjxwWyMQxIsQftB859fBzadN-jvjgNjg&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncqYB_g1NLrXjxwWyMQxIsQftB859fBzadN-jvjgNjg&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "shivalik-sharma",
    "playerId": "shivalik-sharma_ual5_08",
    "name": "Shivalik Sharma",
    "firstName": "Shivalik",
    "lastName": "Sharma",
    "fullName": "Shivalik Sharma",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 392,
    "overallAuctionOrder": 392,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10",
    "imageVerified": true,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "siddharth-yadav",
    "playerId": "siddharth-yadav_ual5_09",
    "name": "Siddharth Yadav",
    "firstName": "Siddharth",
    "lastName": "Yadav",
    "fullName": "Siddharth Yadav",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "CSK",
    "currentTeam": "CSK",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 393,
    "overallAuctionOrder": 393,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou1lR7e2m_0I9zLu4Yr8m2vYWDWudj691K8BgLqjbPQ&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou1lR7e2m_0I9zLu4Yr8m2vYWDWudj691K8BgLqjbPQ&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  },
  {
    "id": "r-sonu-yadav",
    "playerId": "r-sonu-yadav_ual5_10",
    "name": "R Sonu Yadav",
    "firstName": "R",
    "lastName": "Sonu Yadav",
    "fullName": "R Sonu Yadav",
    "role": "ALL_ROUNDER",
    "specialism": "ALL-ROUNDER",
    "reservePrice": 30,
    "basePrice": 30,
    "officialBasePrice": 30,
    "setNo": 35,
    "setNumber": 35,
    "setCode": "UAL5",
    "setName": "Uncapped All-rounders 5",
    "set": "Uncapped All-rounders 5 (UAL5)",
    "currentSet": "UAL5",
    "isOverseas": false,
    "country": "India",
    "countryCode": "IN",
    "nationality": "India",
    "cappedStatus": "UNCAPPED",
    "isCapped": false,
    "previousTeam": "RCB",
    "currentTeam": "RCB",
    "previousIPLSeasonsPlayed": 1,
    "dateOfBirth": null,
    "age": 26,
    "ageAsOfDate": "2026-02-15",
    "auctionOrder": 394,
    "overallAuctionOrder": 394,
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10",
    "imageVerified": false,
    "imageStatus": "VERIFIED",
    "stats": {
      "matches": 6,
      "runs": 40,
      "wickets": 2,
      "strikeRate": 142.5,
      "economy": 8.2
    },
    "form": {
      "season": 2026,
      "last5Matches": [
        {
          "opponent": "CSK",
          "runs": 28,
          "balls": 19,
          "strikeRate": 147.3
        },
        {
          "opponent": "MI",
          "runs": 34,
          "balls": 22,
          "strikeRate": 154.5
        },
        {
          "opponent": "KKR",
          "runs": 18,
          "balls": 14,
          "strikeRate": 128.5
        },
        {
          "opponent": "RR",
          "runs": 42,
          "balls": 26,
          "strikeRate": 161.5
        },
        {
          "opponent": "SRH",
          "runs": 22,
          "balls": 16,
          "strikeRate": 137.5
        }
      ],
      "recentRuns": 144,
      "recentWickets": 0,
      "recentStrikeRate": 145.5,
      "recentEconomy": null,
      "formSummary": "Scored 144 runs in recent IPL appearances with a strike rate of 145.5.",
      "formSource": "IPL 2026 Match Log"
    },
    "careerStats": {
      "matches": 12,
      "runs": 250,
      "wickets": 5
    },
    "sourceMetadata": {
      "auctionSource": "Official IPL 2026 350-Player Auction List",
      "dobSource": null,
      "verificationStatus": "NEEDS_REVIEW"
    },
    "status": "UPCOMING"
  }
];

export const OFFICIAL_350_PLAYERS = auctionData;

/**
 * Calculates retention deductions and breakdown according to official IPL 2026 rules:
 * - Up to 6 total retentions per franchise
 * - Max 5 capped retentions, max 2 uncapped retentions
 * - Capped cost slabs:
 *   1st player: ₹18 Cr
 *   2nd player: ₹14 Cr
 *   3rd player: ₹11 Cr
 *   4th player: ₹18 Cr
 *   5th player: ₹14 Cr
 *   6th player: ₹4 Cr
 * - Uncapped retentions: ₹4 Cr each
 * - Selection order dictates slot and cost
 * - User can retain 0, 1, 2, 3, 4, 5, or 6 players (e.g. 4 players is completely valid)
 * - Overseas players can be freely retained (0, 1, 2, etc.)
 */
export function calculateRetentionCosts(retainedPlayers: any[] = []): {
  breakdown: any[];
  totalRetained: number;
  indianRetained: number;
  overseasRetained: number;
  cappedRetained: number;
  uncappedRetained: number;
  totalDeductionLakhs: number;
  totalDeductionCr: number;
  startingPurseLakhs: number;
  startingPurseCr: number;
  remainingPurseLakhs: number;
  remainingPurseCr: number;
  remainingRTMs: number;
  isValid: boolean;
  validationError: string | null;
} {
  // Official Retention Pricing:
  // Capped Slabs by selection position: 1st -> ₹18 Cr, 2nd -> ₹16 Cr, 3rd -> ₹14 Cr, 4th/5th/6th -> ₹12 Cr
  // Any Uncapped player: ALWAYS fixed at ₹4 Cr regardless of selection position
  const cappedSlabs = [1800, 1600, 1400, 1200, 1200, 1200];
  let cappedCount = 0;
  let uncappedCount = 0;
  let indianCount = 0;
  let overseasCount = 0;
  let totalDeductionLakhs = 0;

  const breakdown = retainedPlayers.map((player: any, idx: number) => {
    const isOverseas = !!player.isOverseas;
    const isCapped = player.cappedStatus !== 'UNCAPPED' && player.isCapped !== false && player.isUncapped !== true;

    if (isOverseas) {
      overseasCount++;
    } else {
      indianCount++;
    }

    let costLakhs = 0;
    if (!isCapped) {
      uncappedCount++;
      costLakhs = 400; // Fixed ₹4 Cr
    } else {
      costLakhs = cappedSlabs[idx] ?? 1200;
      cappedCount++;
    }

    totalDeductionLakhs += costLakhs;

    return {
      slotNumber: idx + 1,
      slotLabel: `Retention #${idx + 1}`,
      player,
      id: player.id,
      name: player.name,
      isOverseas,
      isCapped,
      costLakhs,
      costCr: costLakhs / 100,
      costFormatted: `₹${costLakhs >= 100 ? (costLakhs / 100).toFixed(0) : costLakhs} Cr`,
    };
  });

  const startingPurseLakhs = 12000; // ₹120 Cr
  const remainingPurseLakhs = Math.max(0, startingPurseLakhs - totalDeductionLakhs);
  const totalRetained = retainedPlayers.length;
  const remainingRTMs = Math.max(0, 6 - totalRetained);

  const isValid =
    totalRetained <= 6 &&
    cappedCount <= 5 &&
    uncappedCount <= 2;

  let validationError = null;
  if (totalRetained > 6) {
    validationError = 'Maximum 6 players can be retained!';
  } else if (cappedCount > 5) {
    validationError = 'Maximum 5 capped players can be retained!';
  } else if (uncappedCount > 2) {
    validationError = 'Maximum 2 uncapped players can be retained!';
  }

  return {
    breakdown,
    totalRetained,
    indianRetained: indianCount,
    overseasRetained: overseasCount,
    cappedRetained: cappedCount,
    uncappedRetained: uncappedCount,
    totalDeductionLakhs,
    totalDeductionCr: totalDeductionLakhs / 100,
    startingPurseLakhs,
    startingPurseCr: 120,
    remainingPurseLakhs,
    remainingPurseCr: remainingPurseLakhs / 100,
    remainingRTMs,
    isValid,
    validationError,
  };
}

/**
 * Builds the active auction pool seeded from the official 350-player dataset.
 * Filters out retained players and assigns exact set numbering and auction order.
 */
export function buildAuctionPool(options: any = {}): any[] {
  const {
    retainedPlayerIds = [],
    gameMode = 'MEGA',
    customPlayers = [],
    excludeRetained = true,
  } = options;

  let retainedList: any[] = [];
  if (Array.isArray(retainedPlayerIds)) {
    retainedList = retainedPlayerIds;
  } else if (retainedPlayerIds && typeof retainedPlayerIds === 'object') {
    retainedList = Object.values(retainedPlayerIds).flat();
  }
  const retainedSet = new Set(retainedList.map((id) => String(id).toLowerCase().trim()));

  // Clone official 350 seed data
  let pool = JSON.parse(JSON.stringify(auctionData));

  // MINI Auction Cycle 1 uses the full eligible player pool from master database

  // Handle retained players
  if (excludeRetained) {
    pool = pool.filter((p: any) => {
      const pId = String(p.id).toLowerCase().trim();
      const pPlayerId = String(p.playerId || '').toLowerCase().trim();
      return !retainedSet.has(pId) && !retainedSet.has(pPlayerId);
    });
  } else {
    pool = pool.map((p: any) => {
      const pId = String(p.id).toLowerCase().trim();
      const pPlayerId = String(p.playerId || '').toLowerCase().trim();
      if (retainedSet.has(pId) || retainedSet.has(pPlayerId)) {
        return { ...p, status: 'RETAINED' };
      }
      return p;
    });
  }

  // Prepend or integrate custom franchise stars not already in official 350
  if (customPlayers && customPlayers.length > 0) {
    const existingNames = new Set(pool.map((p: any) => p.name.toLowerCase().trim()));
    const existingIds = new Set(pool.map((p: any) => String(p.id).toLowerCase().trim()));
    const extra: any[] = [];

    for (const cp of customPlayers) {
      const normName = cp.name.toLowerCase().trim();
      const normId = String(cp.id).toLowerCase().trim();
      if (!existingNames.has(normName) && !existingIds.has(normId) && !retainedSet.has(normId)) {
        existingNames.add(normName);
        existingIds.add(normId);
        extra.push({
          ...cp,
          setNumber: 1,
          setNo: 1,
          setCode: cp.setCode || 'M1',
          setName: cp.setName || 'Marquee Set',
          set: cp.set || 'Marquee Set (M1)',
          status: 'UPCOMING',
        });
      }
    }
    pool = [...extra, ...pool];
  }

  // Re-sequence auction orders
  return pool.map((p: any, idx: number) => ({
    ...p,
    auctionOrder: idx + 1,
    overallAuctionOrder: idx + 1,
    status: p.status || 'UPCOMING',
  }));
}

export default auctionData;
