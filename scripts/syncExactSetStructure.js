import fs from 'fs';

const OFFICIAL_SETS = [
  { setNumber: 1, setCode: 'BA1', setName: 'Capped Batters 1' },
  { setNumber: 2, setCode: 'AL1', setName: 'Capped All-rounders 1' },
  { setNumber: 3, setCode: 'WK1', setName: 'Capped Wicket Keepers 1' },
  { setNumber: 4, setCode: 'FA1', setName: 'Capped Fast Bowlers 1' },
  { setNumber: 5, setCode: 'SP1', setName: 'Capped Spinners 1' },
  { setNumber: 6, setCode: 'UBA1', setName: 'Uncapped Batters 1' },
  { setNumber: 7, setCode: 'UAL1', setName: 'Uncapped All-rounders 1' },
  { setNumber: 8, setCode: 'UWK1', setName: 'Uncapped Wicket Keepers 1' },
  { setNumber: 9, setCode: 'UFA1', setName: 'Uncapped Fast Bowlers 1' },
  { setNumber: 10, setCode: 'USP1', setName: 'Uncapped Spinners 1' },
  { setNumber: 11, setCode: 'BA2', setName: 'Capped Batters 2' },
  { setNumber: 12, setCode: 'AL2', setName: 'Capped All-rounders 2' },
  { setNumber: 13, setCode: 'WK2', setName: 'Capped Wicket Keepers 2' },
  { setNumber: 14, setCode: 'FA2', setName: 'Capped Fast Bowlers 2' },
  { setNumber: 15, setCode: 'SP2', setName: 'Capped Spinners 2' },
  { setNumber: 16, setCode: 'UBA2', setName: 'Uncapped Batters 2' },
  { setNumber: 17, setCode: 'UAL2', setName: 'Uncapped All-rounders 2' },
  { setNumber: 18, setCode: 'UWK2', setName: 'Uncapped Wicket Keepers 2' },
  { setNumber: 19, setCode: 'UFA2', setName: 'Uncapped Fast Bowlers 2' },
  { setNumber: 20, setCode: 'USP2', setName: 'Uncapped Spinners 2' },
  { setNumber: 21, setCode: 'AL3', setName: 'Capped All-rounders 3' },
  { setNumber: 22, setCode: 'FA3', setName: 'Capped Fast Bowlers 3' },
  { setNumber: 23, setCode: 'UBA3', setName: 'Uncapped Batters 3' },
  { setNumber: 24, setCode: 'UAL3', setName: 'Uncapped All-rounders 3' },
  { setNumber: 25, setCode: 'UWK3', setName: 'Uncapped Wicket Keepers 3' },
  { setNumber: 26, setCode: 'UFA3', setName: 'Uncapped Fast Bowlers 3' },
  { setNumber: 27, setCode: 'USP3', setName: 'Uncapped Spinners 3' },
  { setNumber: 28, setCode: 'AL4', setName: 'Capped All-rounders 4' },
  { setNumber: 29, setCode: 'FA4', setName: 'Capped Fast Bowlers 4' },
  { setNumber: 30, setCode: 'UBA4', setName: 'Uncapped Batters 4' },
  { setNumber: 31, setCode: 'UAL4', setName: 'Uncapped All-rounders 4' },
  { setNumber: 32, setCode: 'UFA4', setName: 'Uncapped Fast Bowlers 4' },
  { setNumber: 33, setCode: 'USP4', setName: 'Uncapped Spinners 4' },
  { setNumber: 34, setCode: 'FA5', setName: 'Capped Fast Bowlers 5' },
  { setNumber: 35, setCode: 'UAL5', setName: 'Uncapped All-rounders 5' }
];

// Player to Set mapping directly from User's Prompt
export const SETS_DEFINITION = [
  {
    setNumber: 1,
    players: [
      { name: 'Devon Conway', url: 'https://i.guim.co.uk/img/media/44e92130031f4fb199600774ebd63524861ea67d/1271_338_2396_1438/master/2396.jpg?width=1200&quality=85&auto=format&fit=max&s=2f3b900bb2adaa468207b332907e37f8', role: 'BATTER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Jake Fraser-McGurk', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm_DeM0aOBG0DxU2JKWc3KIHm2QiAEKoGxzZveInmiCSRdDJbb0QBV1s7&s=10', role: 'BATTER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'David Miller', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10', role: 'BATTER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Kane Williamson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBigK3Nv61b2kpxI5Ln74VFm3n1DD07hHJts0gz4HQmA&s=10', role: 'BATTER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'David Warner', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvVX-B1eWYIyqzmP7SeZQUNo0W6Re5V8pGJ08oIdjEA&s=10', role: 'BATTER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Steve Smith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRUtYCUIP-OjnhjQijMqCnRmlTbT6YvWEy6_yc_JFuQ&s=10', role: 'BATTER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 2,
    players: [
      { name: 'Ravichandran Ashwin', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53rX5tVsbWe9-gzjm9nRO1kR8etDk9X6Aua_dZsPG5w&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Venkatesh Iyer', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdWvYi_F6UkrOT8bSQu-GMPC70XsMJAyw6pPXkQSC0Q&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Mitchell Marsh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN881IJYGdkdks5oAv6hhz3aWv5zR4l4wcmMigR7myQ&s=10', role: 'ALL_ROUNDER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Glenn Maxwell', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTrUTAOxJtmknGNbAab8Og1vHnZY7w9TaBEBKRDtLBg&s=10', role: 'ALL_ROUNDER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Marcus Stoinis', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanHjImO1SuZIp1jPuEnDToNSoJoVAdKUdHbxZcmKrMA&s=10', role: 'ALL_ROUNDER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Washington Sundar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZ_9kFcKCSLTzwqJ8nt_Zr3jhTJjqFvdlgeSzIEPahQ&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 3,
    players: [
      { name: 'Jonny Bairstow', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnpT4qN-cNWu19G0q4vF55YxGRqyI5ds64VOd8INEQA&s=10', role: 'WICKET_KEEPER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Quinton de Kock', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcUAtQZ9oj6s_wUKRPs-uYwa5TaV-a0XvffNbJztB4w&s=10', role: 'WICKET_KEEPER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Rahmanullah Gurbaz', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmhMquVtDLQyU5skGN_hnmVSRUhuQNuypnh1gNGsI-Q&s=10', role: 'WICKET_KEEPER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Ishan Kishan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b5FvBH899HI66OE-DkxfRIwLHbksx4GHViwQ-OcIkQ&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Phil Salt', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FypM-1BV7h2v8KoqtCdMPo4J_O9e7_1Doe2mL11yow&s=10', role: 'WICKET_KEEPER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Jitesh Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu_j1jQ8j4pfpn1hfqPWOB0bkG6Vi8BIvgd0i9xQ7nw&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 100 },
      { name: 'Shai Hope', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKehOSGpSC5nfSBzOeyRbmmuFI2WNDXR-JfO1jqcF1Pw&s=10', role: 'WICKET_KEEPER', country: 'West Indies', isOverseas: true, isCapped: true, base: 125 },
    ]
  },
  {
    setNumber: 4,
    players: [
      { name: 'Khaleel Ahmed', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUq2ihD88V9kIlUBUrGcE6-_x_QgVwkv7XCImIgEa0Q&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Trent Boult', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1PGJ4hGd4oNZoVnuGVTAFsRJ0Cx2HXnFSJh8LIf3mA&s=10', role: 'FAST_BOWLER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Josh Hazlewood', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoDt0tsmD-PIJSjhElEa2RAzVnjgQGuzn_DV5iGF43A&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Avesh Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZJS7rApD8d4d5hmSW1ZtMFAmb9GpKcqEiAitkF9ywg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Prasidh Krishna', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YMpA5d13yUQCOoawZqgs2cqPv3XAdSWGYXd8_qiD_g&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'T Natarajan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuhkJD6gfevqHZaZGBMh8Fydeq_mpB_OX6g84i16nVw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Anrich Nortje', url: 'https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/4a6a/live/afeb8990-d353-11ef-8ee5-5100e9033936.jpg', role: 'FAST_BOWLER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Arshdeep Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWUF7jbGi6wKiiJynMooBPnTwRtFQXENSJMWNV1oYAw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Mitchell Starc', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W199-Xad2Mzt4YXk42BTfdZzb2DLe1_wKTOHwWpZZg&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 5,
    players: [
      { name: 'Noor Ahmad', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qdWoW4eguT7uz1Viij01yvHESZQWtSUt663OMFqz_g&s=10', role: 'SPINNER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Rahul Chahar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBsXv40_iOwfWtUTx4yWnd1BNhuisg01bc2Sv0wE7wQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 100 },
      { name: 'Yuzvendra Chahal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8exY8XjyrV44JyRdoByLO7ZWfV8Hv6RIQveq1f7lneg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Wanindu Hasaranga', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxAM1g2bW_y0XPTS2W4j_-OjDeJCgTJM3KzU4JHEPQw&s=10', role: 'SPINNER', country: 'Sri Lanka', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Maheesh Theekshana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE-pVN-zFTYhNKJZGIIKWs4KpukZElVdKV2ONVLTyLA&s=10', role: 'SPINNER', country: 'Sri Lanka', isOverseas: true, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 6,
    players: [
      { name: 'Ayush Badoni', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmMMx02mOB-cgApwiTVfMlX3TGKqCqFW7B4C-GTccDA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Abhinav Manohar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1JWOaFDolgLZ7aF5dYegD2kV6C1Qy2jdyCvGL1t4Zg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Karun Nair', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpu4bp6xliOS4nQOnZykQ-T7G5Ni0ErZQG1WQga3ukpNk6vZ68Yqc26Yk&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Angkrish Raghuvanshi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9tHbvV90wgDMYW8FGUZdHAl2NhGok9cCLKrTWGpCw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Anmolpreet Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKILJFgMXlrr1G427h3WmpAecPz3kHeoQ3vgZO1yiUNBOSFKCFIooqqws&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Nehal Wadhera', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKCOJCkOoQX4vs7DZC26Ol-FgBEzWZYMzExen8wTYZA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 7,
    players: [
      { name: 'Harpreet Brar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kyhQhlnxM4tJfSO2UAm9LixuMq7NjC0h1zUunbTy1Y_3A5OFRT1qrZvu&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Deepak Hooda', url: 'https://static.cricbuzz.com/a/img/v1/i1/c236619/if-you-dont-have-any-option-then-why-dont-you-go-there-like-a-warrior.jpg?d=low&p=det', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Shahbaz Ahmed', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJr84Tooe6bVbJi55gtLJnoNn9L3TjPouZqcqghC-O2Tm1RPxV8PJ5JqM&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 100 },
      { name: 'Swapnil Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknSvcaptPtRIK3JccqvanjvsA7ENg7JRxNzKSgqQvDqgi-yI2r7pwMUfxAGw1_ikZ04YrYgyeo6RrL8S39-KsXJCP5r2MqN11pw_ERg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Lalit Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47w0MK5cBILh7hxNlIKcdUYNMPU3KNoSz28qAZvV0kg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ramandeep Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOKeUi_62JC_txgzLP54PdE2ACX_z02fCPhHeSISUMQ&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Naman Dhir', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8h1a_bQjwuE6gfYI1aSDn0nqvrBiDevIbhwzmPNrcA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Mahipal Lomror', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoklMKb336r6I_4FtU0kWT6M8Ahl3EZ8FwARRw5iEHg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 50 },
      { name: 'Sameer Rizvi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqFBUupVeTL3yA1YEfMN7hGPNU-fx5xoDP3MCBleSlA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ashutosh Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdN6K2mvhbv5cD0InXLNfCnTTHuv6P8v8jpqvfpuNvA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 8,
    players: [
      { name: 'Robin Minz', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXlVm6GgV1yAiogb4DR9WCLskV16ft9zQ2rGT14H5qQ&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Anuj Rawat', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKV-PKR-8YQAqh1RPXP_nIKCTltnOl6Y3oYGurF-06w&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kumar Kushagra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22KdnR7z7U9KTd7wPk6G7w-C7v6lvnWHIhFO8H9__Ag&s', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Luvnith Sisodia', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEz0Ler09Wcu9grK78pduGgGg5UtMSrJT55OxSq0QCg&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Urvil Patel', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWzhfKZR08cL3JOGTxFUFOPgYLy8rlNu9jLyB5p-hTg&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'BR Sharath', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGfX2j9XlD9dBinOl9pndJBX_MOfpWr9urJ0vCWNlig&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 9,
    players: [
      { name: 'Vaibhav Arora', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg7WETt3G2SUulEtd3JpHTNygMnOS8eStR9aB9s_ihw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Rasikh Salam', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DSTPdJytTj29xNJRj0H8zjq7ilcQp4qiyXB6MyRv4g&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Mohsin Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAd2GiZfG-bIYtAHR_RduWBWOP6kSfh-clLcCrP19ng&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Yash Dayal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGc8OGw5q0eCDFC2KPEGOA4Q5VQtdLXmrsZQHxjeHwg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Simarjeet Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2__Mjfkc0x4ffA7QulwyOgBs_zcAW3RCej8J_gvjwA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kartik Tyagi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpBeG5JHZ1zuKR15iCsPL62jaTE7IPfmuD6uPIM0gw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vijaykumar Vyshak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISPdOCZHMqFMDVCiAMRp6dVuA1fFf6zcJDYPPIWJmug&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 10,
    players: [
      { name: 'Suyash Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPAmnGLSywb7znEFgHoU9PVKhx4nKki1z9Z7AeehJwA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Manav Suthar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7zD8tXEkIm0xknAKAs4E2XG_36wVFb5VSVxUT1hZPA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shreyas Gopal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRCdKeWe9x3KQ7sDLild2x6HxOKB4giXPILTAYqwQ8A&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Murugan Ashwin', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN5VNb6MXJ5b04pc1Xn8ChfqFQ1JIK838Xnyyul3bdg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Kumar Kartikeya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuiJTtLiHnFYsmu_ZWF2kDO8-qXgsAYU5_z2qpjweXg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Prashant Solanki', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7Iz_j-S8orSc9IOA8rJ2YyU5uVS3fCXCMsc1F4XPwg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Mayank Markande', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RfYodOL57Bc_2SdWSEp9fxN8ZfOSZk6uoBCPExZ_AQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
    ]
  },
  {
    setNumber: 11,
    players: [
      { name: 'Faf du Plessis', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyceeldgR6vwYnjXrCuIT_J3v3XnEb2tzVd9PHdTD8JA&s=10', role: 'BATTER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Glenn Phillips', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNjNy5_c7Jo2vWBoGlkFK6OzcdjbLxlvrlAD6aIV3jA&s=10', role: 'BATTER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Rovman Powell', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEQfpprsRyr1FdjyiwsF3EFXphdn0ARnozXkRjOBikg&s=10', role: 'BATTER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Rilee Rossouw', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuphscNa6JP_ztNHvPizrEmMluXhcEdopz0RWQjTA_dw&s=10', role: 'BATTER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Rahul Tripathi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFP9mTCOlkz95zdr6CE-ixn_OJV11l6P5hwJ3NzJ2alg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Ajinkya Rahane', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL3N1yX8wv4nEMJ7QSXc8L_lLZbVhC4oVruDbwrzslQ&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 150 },
      { name: 'Prithvi Shaw', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm49-m6RjvTgu7sCaY8_HFGiWPWhcl4zkJT0XsONlow&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Manish Pandey', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00MG2TIcymuJsZ-emwN-DZJdsiWCjX1Bi1UJ6h_vERq7dSgHT7UjwLE&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
    ]
  },
  {
    setNumber: 12,
    players: [
      { name: 'Sam Curran', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOwLTvDNAVJBZmunH8_Juh-J1F0nUjZzU7-kci9eHGA&s=10', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Krunal Pandya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFV0gvV1cduGiVz8LCiVQ852tbwI_pIm5q3chS6LQpQg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Nitish Rana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHPJItZPb9RWY3FjEGQO5w7b7DKMLdqK1ZM26u2NG0Q&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 150 },
      { name: 'Romario Shepherd', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHiKkfmCBwGFnSn-Kflkv74F3s_-SSbageiKPMCv3oQ&s=10', role: 'ALL_ROUNDER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Shardul Thakur', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTIfdUo6wdRqWrPgY7aAd4eEQgRiO3uWKq0GSzvUlXA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Jason Holder', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWpsuzaEModokBOVutGOOGs5bDL2tpVmFPGu3HR3Pkg&s=10', role: 'ALL_ROUNDER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Daryl Mitchell', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqnwvD4cOnjFb8ubFqgoHKduHHtgpxMqiohtCZucJtw&s=10', role: 'ALL_ROUNDER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 13,
    players: [
      { name: 'KS Bharat', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-wqCfty4G9SQdFKdC-GJL0ip4fpuMYkLpMlr3_TtyA&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Alex Carey', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cGPHbd29d1Opi3GeBq6hjfgZYPstYNZefmCBsnzd2A&s=10', role: 'WICKET_KEEPER', country: 'Australia', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Donovan Ferreira', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWZnA6u7wsQs6S_d_Vy7azQOoGM156kOw8lQ1yX969g&s=10', role: 'WICKET_KEEPER', country: 'South Africa', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Ryan Rickelton', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8gW_wEOKb1SoaYNPznu9CsINceyoGQu1DIwxsXg6ew&s=10', role: 'WICKET_KEEPER', country: 'South Africa', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Josh Inglis', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOU26ZYmtilEdBtgGe6lZwb2kF7mj4fxYW6d8KRhd9SA&s=10', role: 'WICKET_KEEPER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Matthew Wade', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt8TYIyZRqzv5J_fa6_5Y4MXtSk5-pO5nAZR3vAl2XQ&s=10', role: 'WICKET_KEEPER', country: 'Australia', isOverseas: true, isCapped: true, base: 100 },
    ]
  },
  {
    setNumber: 14,
    players: [
      { name: 'Gerald Coetzee', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78brZWhO7CVtSoGfXXWMZRT64hj1jee7fpl6Q4wiQYw&s=10', role: 'FAST_BOWLER', country: 'South Africa', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Lockie Ferguson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUYvKNoa4QUMHVjI7hLL07UFtiCITbbTe-L-lpa6a_A&s=10', role: 'FAST_BOWLER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Deepak Chahar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DDIjP07dBb7-7fq7_9IxMmIkdwYwiG5Fnk-sojiPZw&s', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Bhuvneshwar Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6iFXLbdWEyrdG0MtAEQLDiv_SoFb2IleLrC6y3YaQA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Mukesh Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QAV2baRh7vrvDrckMkfMn0DeZaPNJ6ykr6NhJhH36A&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 200 },
      { name: 'Tushar Deshpande', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KT88jOhPiZwlG25pWllz2LHHLi1v2JRhiyfmrDjg7A&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 100 },
      { name: 'Umran Malik', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbozo-ZnXB2T7g-uowxmf3LyAzmkfz4b-rAVf6rL9vdQ&s', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Naveen-ul-Haq', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5w4xK2XEdHZcpnhebLK78fBUWPiQ5HlKZCDDLHh61w&s=10', role: 'FAST_BOWLER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 200 },
    ]
  },
  {
    setNumber: 15,
    players: [
      { name: 'Allah Ghazanfar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPpbnc45_2H1xghEZh1_nF_kRZrgHBS43Vw8g6CggJQ&s=10', role: 'SPINNER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Akeal Hosein', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7hbKW6kJWrJLeDTFd5Q2GC4LKtZKw9kL-ev8ENwWAg&s=10', role: 'SPINNER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Karn Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBTcTppzUAYZ9CgIMswHf2DuMN5V5YEGRf5BV0HxzCw&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Piyush Chawla', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJaGjqNrI3ZUZzNmL9vUZW_AwMGrjZ1uxfKstaG0eeQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Tabraiz Shamsi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJx21zxuSlqaKbjQKBh_qvtsmKY2CjqSa_lvQ59BMAw&s=10', role: 'SPINNER', country: 'South Africa', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Ish Sodhi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklekJkEnAvBqpxYfDwZ526Gly1jr8aF8CKjhwSYklvA&s=10', role: 'SPINNER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Keshav Maharaj', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVIjs-4KJdUTUC6Y0to7oMRYgLCJLPZaJAKeJb0PIPQ&s=10', role: 'SPINNER', country: 'South Africa', isOverseas: true, isCapped: true, base: 75 },
    ]
  },
  {
    setNumber: 16,
    players: [
      { name: 'Swastik Chikara', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdy_fSjhgGzVuSFodGyv42Owc-RNK3G83qaX0tChRCw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Priyansh Arya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZXXNNH23yU2KlH-YUoXNMBLD6S9QKSV5N48pXCnaFw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shaik Rasheed', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgSc2JPrEZx9rvIw2pmZAHeTT1ywTaeaPvLJASwnLLhEghidStopXfSQ&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Himmat Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyWKTl7AbAKgE8aHKY5HDL-k4k5co88GgKNgTy7m4AA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Harpreet Singh Bhatia', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7pbNAxnZHDIq7AJ8Q1yOffqLG_0XNkDYdchU426RIA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sachin Baby', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopQ7pvDDEOW9tL8X0gBWXNewKej-gey03rJXJYmkvOQ&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Atharva Taide', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXglU57IXPehyPkBNhHJ36sZ0kAJ2G_4_u2LfB1-e-kA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Rohan Kunnummal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz_ExhOdkinPfrlavcha20y8uqAQfdmhi7bG_amCilg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 17,
    players: [
      { name: 'Raj Bawa', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUPgdBuiWcLG7qnn062ZfblTKf-L_v7ao0i4nhIhClg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Anshul Kamboj', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIdcHh6lFsU-rvXK8a_BZTrzLqZU4VA1r57Rz1Dal7g&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Tanush Kotian', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrD8FCV1NyYwgBXJfE36x3JB2EmuxbtQECHjURgVe_w&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sanjay Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37zCWLLMK6Drn1ppJYnuIEanYi16ViTliJa-DmlKYgA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Arshin Kulkarni', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyBskOgEIpl54qZ3f27PRd3CqYsAG6Ki0j9-jPswkag&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Prerak Mankad', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1BX1xoV4H5VtyEROJgpJIOtYiywyIAHYjCqjHRkB3A&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Yudhvir Charak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTX2o5Dzf7OQXwhjsuhML19h-j-_hWUzAWaBa2-Lbg&s', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shams Mulani', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf9WfIV6PNZuysYH4Ue8Kyev-inK6RUpZ0wKptXd5Yw&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sanvir Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xt04sXWN2vbDJnXv20ftGKFHu6lAfq3qIXH7sxRp3w&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kamlesh Nagarkoti', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iwWC7zxGtFlan5k9EXEBicTVfljiPh0vhOr30-gd7A&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 18,
    players: [
      { name: 'Avanish Rao Aravelly', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRo-kj0EAM8Bs7Dk6Yyrhvo34V5zusjLrB6aITzcdg5Q&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Upendra Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGKEDZN2Fw9eicp3baGEAqsod4diwYYeiff4W6BRfdQ&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vishnu Vinod', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLNwbhNp6LNX6nsuERMr55f3fdMCuhoYeVC9p5Ur5jA&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Dhruv Jurel', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G5ex3bRqrtI7qj3UbmlsyaA95G0x7I19xddMwz5fcQ&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Sheldon Jackson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXhBbxCuOiEZX1M3L9J8l2-A76B1_2sU72C6j7zxMw&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Baba Indrajith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBvB3jwFjHBXIophSJ80TSgiDqKVZ9ONSRJbbCYC1ZA&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Harvik Desai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kV0gZFKxp1JAY6vhQidEIIEc6q6J6dCL_hgg03yyug&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Aryan Juyal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40--3XY_fXxbV4LSf0VGwNM8DSZTOCjW5QH1kHlliOw&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 19,
    players: [
      { name: 'Vipraj Nigam', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzQ01vsbFJnniLqI-XwUe2xXmVuClW0DVXhYqUvcmsg&s', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Chetan Sakariya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk103M3rstHXv4UlhmBuQazEw0KAlVoIJ_2ZwVOeyLw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Akash Madhwal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV85wPVnjdYsgLHivd8XGDnX2rmKZ0zqiLF7PFE_1Lng&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sushant Mishra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3lNvpUwL6P4JWHJjTFvMSoo5o0BrPKDyK83EUeIINw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kuldeep Sen', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNEnyZZPFnnYHZjEx8UalN8Rr7rpvqPr-R3knp0nWA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'KM Asif', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SLZGufshs_IQ0QD2N74nYQPPEpr4NGMT2UYFvg1eSg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Koushik V', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Du85oi3Hf_QFNtJ3059bdDZnXT-T3HS_wpVqmr_Cw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Gurnoor Brar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FZa0bzGJXGkxnofCI7f1-g_kq50xSAbm9cpe1KQlKA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Mukesh Choudhary', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCShUoo4swSSKfOEdnJwOicTl8tCSgfwRtI3AYZK-uA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vidwath Kaverappa', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNcZVzvPm3Oj92CBCpGpatLa04nVZvTuPQXH1uK32rw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 20,
    players: [
      { name: 'Vicky Ostwal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF4baJRee-fZx4qcYow-vsIp2hjQtVbOBNgMONAHTog&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Hrithik Shokeen', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzaA27Arthv69Dwa7TmTaCrkwylSgz6O7KAMiQg2Clw&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Dharmendrasinh Jadeja', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJKondRzVCxRv7v1TibcR7-x_ujzM0MiP6gUOd6eaA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Pulkit Narang', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzzjyrT_HXSgy6XtAqb5hbEbusxFnIbhz9g6CThCweA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Himanshu Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KyHF-Eee4FHeNL8n_NYnPxgb6qzVuVOYUYfmCqZvNA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Zeeshan Ansari', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5o7VhABmtPBjMbfQIkvd4vQ-KU-DMG8El96mPBNzxg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shiva Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MGQWI_zBc6akZqbY9cOayvPsAXO3_ablH5T3EXqrQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Raghav Goyal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuFy9_uQbsdqOdvFoxxkYs3knCrJEpEjP3XiautKfHQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 21,
    players: [
      { name: 'Moeen Ali', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhL2CoPyt2Y9Cq29olwdsOxPsMFy5HAfXJ3ce-KpQww&s=10', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Tim David', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64B9zZ1kbyVs8gJRfT9l21mxwRFNveRloH-KamNFCdA&s=10', role: 'ALL_ROUNDER', country: 'Australia', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Will Jacks', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuHfmHQvAeYIVB2pay-lPgnjdmHKkZsdlxGJY9bEWOA&s=10', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Azmatullah Omarzai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrfj9HICwgrryOpIf8slJnlwqBBLIxNXpl3_-4a6sQ&s=10', role: 'ALL_ROUNDER', country: 'Afghanistan', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Rachin Ravindra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXU1RqKupyJOdBnjMrBEyQx_uJ-JOHxsQfT4_yW13mA&s=10', role: 'ALL_ROUNDER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Mitchell Santner', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_ORxNyv964CSM67kuqW2jKb4diesziRFShIWdaJb0w&s=10', role: 'ALL_ROUNDER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Shahbaz Nadeem', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUuTlKCKu8OWIikceQ-SO9h_eC1Tf-Cm_cybT60W8ng&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
      { name: 'Vijay Shankar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UsT5bnhSG-mexbqS5-3kGyqrw1ajIkFuDV_bSnsgew&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
    ]
  },
  {
    setNumber: 22,
    players: [
      { name: 'Spencer Johnson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTppYufxjIiDRRE_7MHyPQyscaLeGHC4S35dI5op1Caw&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Alzarri Joseph', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi48Vsy_FFRcPpT_l5qVVQt3tdiMTc4h5VUId_hOYvHQ&s=10', role: 'FAST_BOWLER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Shivam Mavi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzF_7NJnnv3_fioGojwIeoCOaeXyPgrLTtZeyAu0RGA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Mustafizur Rahman', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSRdyoev04E8qRnkndYyqRkNhroGL0hlQKAf4a57hlA&s=10', role: 'FAST_BOWLER', country: 'Bangladesh', isOverseas: true, isCapped: true, base: 200 },
      { name: 'Navdeep Saini', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jntwit2_wfMwWY-tSJ8T6zGtgPseAcXLsayZoaWEmw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 75 },
      { name: 'Jaydev Unadkat', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMjOarYMj7RYCJkRvSnYNF1yRn1l_v1mQPCDHsEBODA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 100 },
    ]
  },
  {
    setNumber: 23,
    players: [
      { name: 'Musheer Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEj-2nT8J7Um_Nx9sophhtxh6PVTLJan9x-OLbn6osvw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Priyam Garg', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWZIDRHDPgQ5MKYbHGOPs8XT-VcG8_1NRBUfMbImZVw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Uday Saharan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmIr2X0aFk5qsKF7XVjX9dx1_TQGHawiYbc0dZA38Zg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Arsh Kabir Ranga', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvx8nUVYz3S7kXaQIsmZIB0J_hJD-K7H56N2QyhVhIA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Adarsh Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-GnEJ1JlwHiU2csyUIaBCPy6bxGZgrSf9gRrYliiUw&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Aniket Verma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-fgZ-1b3XpRkKoH3-_EdmJa7QqhiUP-Q3d82K9Mlg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Tanmay Agarwal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt0PYHrikNTrKvdXN1z-So2Qj6L-5iLf81F9hLUK0-Q&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Bhanu Pania', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNParjal3jJ2nq84U21YQk1PA5BkwDpRnRs7U9ZxHd2A&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 24,
    players: [
      { name: 'Manoj Bhandage', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6dmoKhhG6JeErRoQQPc7PtEYSXOPQJiDeQ9NUrEyrA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Mayank Dagar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHOg2CGCia0AIjS5_43oIIFOjJVsI9McXnpn2f6IvJA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Manvanth Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnNQ0tDA-B_O71uuaXR-sMmnGdZRNrDaeuwFHDh-d9g&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Abid Mushtaq', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJOFh-FhnlW1LshN0qeKDtO8xX2LKlbqQfGO22TFEuQ&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Jalaj Saxena', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyEZ1WjO8sO_XMyQoxBdagjSPWNxROHYY0AF48B-yrg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 40 },
      { name: 'Atit Sheth', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Hritik Shokeen', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxo75saM81K-CPiEpYWwWshnJdi-pzsgwjRyLREN8Aw&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 25,
    players: [
      { name: 'Joe Clarke', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua41HROKWazB7Ckhmtf1ObRlMHK-o1vOkU-F5qvFNig&s=10', role: 'WICKET_KEEPER', country: 'England', isOverseas: true, isCapped: false, base: 50 },
      { name: 'Connor Esterhuizen', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHRl4TbC056Zfea3j2B67Qg2p-oYfJIuq9EWbNRPUdA&s=10', role: 'WICKET_KEEPER', country: 'South Africa', isOverseas: true, isCapped: false, base: 30 },
      { name: 'Ajitesh Guruswamy', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pY4hrN1O_4JoLbsztXF0WY76AV4ltCuo1dLyO_voKQ&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Siddharth Joon', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCfOj0_MS-HXtyww6sAHavbeRphSU2SUw5ZAhbqL9LA&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Tom Moores', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81590xzDb0aEpEuUJd2w3mz7jK7-whF8wib_S_ZnfBg&s=10', role: 'WICKET_KEEPER', country: 'England', isOverseas: true, isCapped: false, base: 30 },
      { name: 'Bipin Saurabh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfriKuoLSMss5ubkVwIbMO828n_aVDqeXhXCPWCLiebg&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vishnu Solanki', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6Z-DmT4mMG0rem60SRFaB0G4g__f2OP0FtuRGMtDug&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Hardik Tamore', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nHAvFPkMrwmDpBERKwqVRjKhSRBqQPnj48-6GAYoQw&s=10', role: 'WICKET_KEEPER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 26,
    players: [
      { name: 'Sayan Ghosh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01O2qj0LHmIrlk1v11No6jOfsXtoEYrYOeNCKX0lvg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Money Grewal', url: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/405400/405483.6.jpg', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Arpit Guleria', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaPcs-oYW2XbntufQ5ljNSArSIiy0r1Ut0MlSrrutAA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sunil Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7eVqCpJQHoAEN2Ep1iWsOl0W1dZHdJW_NZ7GICPtKg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Tristan Luus', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3uedoSDF8zZNVzNbv-MDL3RV99_3F6jrtdqBnOaWfw&s=10', role: 'FAST_BOWLER', country: 'South Africa', isOverseas: true, isCapped: false, base: 30 },
      { name: 'Divesh Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRng0Z_-Inl5KqTo6D4hUuGBH1qzmwSZnws5qyp2QHwGw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Abhilash Shetty', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV2FM-9GLhDjWHU2CjIr25ikZ9lTzV4ND8NyqCnb4cA&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Irfan Umair', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGjls7vPdMpjmfGjJUml-1WGNIauPBxiM5fZgDGigaQ&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kuldip Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJd6_rwDc1mE7aUJ6mIp__TAoPfAioi5je3RIcGqKFg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 27,
    players: [
      { name: 'Manan Bhardwaj', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ki9epK5UgpsfT9j73Wqyuj1CFfv9rIFUkWhOcmekTA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shreyas Chavan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxvVTOy9r8VNxxopnEtzDC7SQOcrkaEsBXqMGk0jKGg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Chintal Gandhi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRL35wkFbfUD19_4W5x4tNC3YR-kN3PzqZaEhEm5XRg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Dharmendrasinh Jadeja', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJKondRzVCxRv7v1TibcR7-x_ujzM0MiP6gUOd6eaA&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Amit Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4Jr2pOfahqiizhTSLuTadKQswzkME8nZteY5Gw6esQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vishal Nishad', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiddEkUHIVw-JeUquNdhMBJeiTNpxH4F4JWDJW4_hW6g&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Saumy Pandey', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTYy6XEwwmQ4xwrOuqp2bOleopOcsHmQ2P2d_vDSLag&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Jhathavedh Subramanyan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLlmNC4jb_-wCk86_2hlrdfBTxM4fxZzmcelj7jNSPg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 28,
    players: [
      { name: 'Muhammad Abbas', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZKTkEBTof3Cr7c_iItFFLv68M3kD7ESizCMhAvYxbg&s=10', role: 'ALL_ROUNDER', country: 'Pakistan', isOverseas: true, isCapped: true, base: 50 },
      { name: 'Charith Asalanka', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZyvjaH0FYl30F3S5yrI78kn-U_2lzsldjA27-Hd84w&s', role: 'ALL_ROUNDER', country: 'Sri Lanka', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Roston Chase', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGpkbIaZTxvxBctAS-2czSWiJDPIn7CU7TN0c12Vgxw&s=10', role: 'ALL_ROUNDER', country: 'West Indies', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Liam Dawson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKm3xnhQu4zTLjZ_khl4-t5_Lul0TLyno_xixfS2GKw&s=10', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 100 },
      { name: 'George Garton', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNy4LuI4BTnQOFygXVMF7KntUQAX1tu-HZJtJfagzJw&s=10', role: 'ALL_ROUNDER', country: 'England', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Kyle Mayers', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslG72gJfVFPhsAjB3ryCFxP8t7E2EKsFihMMszXw4WA&s=10', role: 'ALL_ROUNDER', country: 'West Indies', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Dwaine Pretorius', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgQ5qgmW7PghXjIOgGR3J4sRsTOpIiEpOuHMsevIfcQ&s=10', role: 'ALL_ROUNDER', country: 'South Africa', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Nathan Smith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpsZmcWkg0IbzKfl-nQbM0aAKsbHmlkP3JMRZcDIRug&s=10', role: 'ALL_ROUNDER', country: 'New Zealand', isOverseas: true, isCapped: true, base: 50 },
      { name: 'Dunith Wellalage', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47xpDxv8IUqQw19wlvds6AHV0x-s8TAQ64EaRyATMtw&s', role: 'ALL_ROUNDER', country: 'Sri Lanka', isOverseas: true, isCapped: true, base: 75 },
    ]
  },
  {
    setNumber: 29,
    players: [
      { name: 'Jason Behrendorff', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlenmtzW-AOo9Ab4O8bMVfWjZ02ZvhcxcopG908d6BTQ&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 150 },
      { name: 'Tanzim Hasan Sakib', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaCuMtzxkL4UUv1M5GFyv0OnWkArLfvoVzgSu6pHFCw&s=10', role: 'FAST_BOWLER', country: 'Bangladesh', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Matthew Potts', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hm6-5sWeUddRf6AxPjXGucfQvqrc81zWPhZnfQG5jQ&s=10', role: 'FAST_BOWLER', country: 'England', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Nahid Rana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl25h0qH37HdIZbql846gqsDaUqLJC-x56nKV36Fdwmw&s=10', role: 'FAST_BOWLER', country: 'Bangladesh', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Olly Stone', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-GbbR_4n7_AITCD8Hv27OGkabc0iP3j-zMBh_rT7WQ&s=10', role: 'FAST_BOWLER', country: 'England', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Josh Tongue', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tsemoas9QG7NLSlNqush0s4pgG4U6TSq8WQVHVoSsg&s=10', role: 'FAST_BOWLER', country: 'England', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Sandeep Warrier', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhBcnmP0vl3LjD8NZIW23nBvFU7tk-fMQ7q_sVgW-ng&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: true, base: 50 },
    ]
  },
  {
    setNumber: 30,
    players: [
      { name: 'Sachin Dhas', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdXXxeP0CfNsPAl97lA9fH4JH-eGqtBAlhgE1pEDsZg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Miles Hammond', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QjOBwHDFAEIV1YeRKtwXotRbgKABTOMcbxNjuIhQcQ&s=10', role: 'BATTER', country: 'England', isOverseas: true, isCapped: false, base: 50 },
      { name: 'Ahammed Imran', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM02MFBdES_J-dYjj5e2tR2ShXTHt933EW4LcZoT64A&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vishvarajsinh Jadeja', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ayaz Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10', role: 'BATTER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 31,
    players: [
      { name: 'Atharva Ankolekar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA03ozLNiCY1DqC3-qYV666VE25eFrkS-W3MMSyEbHqg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Abdul Bazith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsVRfo1-h0In0BUxzUDCntRBMcvO3Qd3jYk-KENaIPw&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Karan Lal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY5hjfY15BZLJxDqWbqRj2X_vhMPBDLFotcs_77D0BA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shams Mulani', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz5QWTiCdv7Ediwywq69Dqf2Q3mekfmd_5zZBNvEjCWQ&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ripal Patel', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5TpstDGabFImTF5oX3fIvAu2Wup11b2YcGyLALsZeg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Prince Rai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SK1QgsxFi-d_ZVS7O7GVb_BQEPG4hPEo1dpp8yPVg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Vivrant Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Utkarsh Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOlradNaSYvjwGzuC9xNt3X4HGURmnzb8nluVxjtRqA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 32,
    players: [
      { name: 'Sayed Irfan Aftab', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPUP5WsBmjNvjyrDt482Qkia2Rl2xECfXwYBenWZ7YQ&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Esakkimuthu Ayyakutti', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxmaEH6YdEok9StV_qG3qq6bJtw_2CZeVfd5GKm3VQg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Praful Hinge', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk3C5F-4m4r-kathx04iZnPOndH0b8F_JiCr1a7d5mw&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Pankaj Jaswal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yxWfpgLraq_JDEAUz8EJUVMNm93LkwZEB_tmO1fRsg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Kulwant Khejroliya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RJD64OIrtPLAt9i_ztSlOl5lU5SPj_UHEelcWIxGKg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ravi Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cOYeViuGIew21hc3fwb35tuMOFqpw2-iINcQ4DdkEg&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Rajan Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsfsJ1N6yDNqj5juqHEw9jVERfphqMRU_B16PL9RcjQ&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Safvan Patel', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAqHfPuJPY80XOled8maR3FAbyaxNeZCuJvz5uwWvYQ&s=10', role: 'FAST_BOWLER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 33,
    players: [
      { name: 'Purav Agarwal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLFFOBDtinQJVzxXyJT6cn4x0OkQM4zxj7sJ8JlSjeg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Jikku Bright', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqi9Kkw1S9K2EefeJvveDdRUxuXzJwk-4qLcoRFksvQ&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Yash Dicholkar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFG9iD_giq7LUeGnbtqzcnmyEv_8vtoDKT0JqrlrxLg&s=10', role: 'SPINNER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Arab Gul', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7ED1Mo92BfR7QhIY0126FTC5_PQphxWnubkYr80kaA&s=10', role: 'SPINNER', country: 'Afghanistan', isOverseas: true, isCapped: false, base: 30 },
    ]
  },
  {
    setNumber: 34,
    players: [
      { name: 'Wesley Agar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_BOKWFsdWiVhdJdJ3skz0rtyeQLv-jjbwvTv83-UiQ&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Binura Fernando', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdr3ysaQ84stGzzQgqP7idoqHVVCrcMOoIO8593q3ZQ&s=10', role: 'FAST_BOWLER', country: 'Sri Lanka', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Shoriful Islam', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1c82KHg-XPEI9DQ2QoNRmad8Fcb7CAuGgPMDnkbNwQ&s=10', role: 'FAST_BOWLER', country: 'Bangladesh', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Joshua Little', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zCzspCyIOuE8scjVEUKNEzLBHUWdZIuJoEAZmyiw9Q&s=10', role: 'FAST_BOWLER', country: 'Ireland', isOverseas: true, isCapped: true, base: 75 },
      { name: 'Obed McCoy', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-4qADxgwxxfj2ck1yQRtuGJcNN6E0ca6Tf589eLTyQ&s=10', role: 'FAST_BOWLER', country: 'West Indies', isOverseas: true, isCapped: true, base: 100 },
      { name: 'Billy Stanlake', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrQSR-_izbQgWlvDh6su8KEImBcOjmzYGqMxYQNXHew&s=10', role: 'FAST_BOWLER', country: 'Australia', isOverseas: true, isCapped: true, base: 75 },
    ]
  },
  {
    setNumber: 35,
    players: [
      { name: 'RS Ambrish', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6ocJaH0we-Ed-yaPzAdH-fj8a3Bn-miecU2TNNVD4Q&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Nikhil Chaudhary', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvz8UoK0aKoBYnuNcN6d5DeY_nqqxr1xYENJZax_zVA&s=10', role: 'ALL_ROUNDER', country: 'Australia', isOverseas: true, isCapped: false, base: 30 },
      { name: 'Krains Fuletra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3N5EMiIRSjsJ_8x7Y7NPwI3cDYrAd--lwFu-tWqRqA&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Macneil Noronha', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlztYeVCUTuvlQI4hyXMDnWyQ-EQ_Y3cwMIba1zMsMRQ&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'R Rajkumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx40Bu-edGHCT5nINtwVT8Vjubw08LBfkoEhASatQdg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Ninad Rathva', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFvA4J_d59Je7oTHCRnS83IadvHlTioMUHAvfojCf0Q&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Sunny Sandhu', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncqYB_g1NLrXjxwWyMQxIsQftB859fBzadN-jvjgNjg&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
      { name: 'Shivalik Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10', role: 'ALL_ROUNDER', country: 'India', isOverseas: false, isCapped: false, base: 30 },
    ]
  }
];

// Load existing files
const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));

const setConfigs = OFFICIAL_SETS;

// Map all players to their set
let updatedOfficial = [...off];

for (const setDef of SETS_DEFINITION) {
  const setCfg = setConfigs.find(c => c.setNumber === setDef.setNumber);
  const setCode = setCfg ? setCfg.setCode : `SET${setDef.setNumber}`;
  const setName = setCfg ? setCfg.setName : `Set ${setDef.setNumber}`;

  for (const p of setDef.players) {
    const norm = p.name.toLowerCase().trim();
    const existingIdx = updatedOfficial.findIndex(x => x.name.toLowerCase().trim() === norm);
    
    if (existingIdx >= 0) {
      updatedOfficial[existingIdx] = {
        ...updatedOfficial[existingIdx],
        setNumber: setDef.setNumber,
        setNo: setDef.setNumber,
        setCode,
        setName,
        imageUrl: p.url,
        photo: p.url,
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    } else {
      const id = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      updatedOfficial.push({
        id,
        playerId: id,
        name: p.name,
        fullName: p.name,
        role: p.role,
        specialism: p.role,
        country: p.country,
        countryCode: p.isOverseas ? 'OS' : 'IN',
        isOverseas: p.isOverseas,
        isCapped: p.isCapped,
        setNumber: setDef.setNumber,
        setNo: setDef.setNumber,
        setCode,
        setName,
        basePrice: p.base,
        imageUrl: p.url,
        photo: p.url,
        imageVerified: true,
        imageStatus: 'VERIFIED',
        status: 'UPCOMING'
      });
    }
  }
}

// Re-sort players by setNumber ascending
updatedOfficial.sort((a, b) => (a.setNumber || 999) - (b.setNumber || 999));
// Assign clean auctionOrder
updatedOfficial = updatedOfficial.map((p, idx) => ({
  ...p,
  auctionOrder: idx + 1,
  overallAuctionOrder: idx + 1
}));

fs.writeFileSync(offPath, JSON.stringify(updatedOfficial, null, 2));
console.log('Saved official350Players.json with', updatedOfficial.length, 'players!');
