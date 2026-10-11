import fs from 'fs';

export const ALL_SETS_PLAYER_IMAGES = {
  // Set 1
  'Devon Conway': 'https://i.guim.co.uk/img/media/44e92130031f4fb199600774ebd63524861ea67d/1271_338_2396_1438/master/2396.jpg?width=1200&quality=85&auto=format&fit=max&s=2f3b900bb2adaa468207b332907e37f8',
  'Jake Fraser-McGurk': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjm_DeM0aOBG0DxU2JKWc3KIHm2QiAEKoGxzZveInmiCSRdDJbb0QBV1s7&s=10',
  'David Miller': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6pPLjCL-Ra_YyIjLbyXyuGiUIHIBJAcuYR81UIONsQ&s=10',
  'Kane Williamson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBigK3Nv61b2kpxI5Ln74VFm3n1DD07hHJts0gz4HQmA&s=10',
  'David Warner': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvVX-B1eWYIyqzmP7SeZQUNo0W6Re5V8pGJ08oIdjEA&s=10',
  'Steve Smith': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRUtYCUIP-OjnhjQijMqCnRmlTbT6YvWEy6_yc_JFuQ&s=10',

  // Set 2
  'Ravichandran Ashwin': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53rX5tVsbWe9-gzjm9nRO1kR8etDk9X6Aua_dZsPG5w&s=10',
  'Venkatesh Iyer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdWvYi_F6UkrOT8bSQu-GMPC70XsMJAyw6pPXkQSC0Q&s=10',
  'Mitchell Marsh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN881IJYGdkdks5oAv6hhz3aWv5zR4l4wcmMigR7myQ&s=10',
  'Glenn Maxwell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTrUTAOxJtmknGNbAab8Og1vHnZY7w9TaBEBKRDtLBg&s=10',
  'Marcus Stoinis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanHjImO1SuZIp1jPuEnDToNSoJoVAdKUdHbxZcmKrMA&s=10',
  'Washington Sundar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZ_9kFcKCSLTzwqJ8nt_Zr3jhTJjqFvdlgeSzIEPahQ&s=10',

  // Set 3
  'Jonny Bairstow': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnpT4qN-cNWu19G0q4vF55YxGRqyI5ds64VOd8INEQA&s=10',
  'Quinton de Kock': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcUAtQZ9oj6s_wUKRPs-uYwa5TaV-a0XvffNbJztB4w&s=10',
  'Rahmanullah Gurbaz': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmhMquVtDLQyU5skGN_hnmVSRUhuQNuypnh1gNGsI-Q&s=10',
  'Ishan Kishan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-b5FvBH899HI66OE-DkxfRIwLHbksx4GHViwQ-OcIkQ&s=10',
  'Phil Salt': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FypM-1BV7h2v8KoqtCdMPo4J_O9e7_1Doe2mL11yow&s=10',
  'Jitesh Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLu_j1jQ8j4pfpn1hfqPWOB0bkG6Vi8BIvgd0i9xQ7nw&s=10',
  'Shai Hope': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKehOSGpSC5nfSBzOeyRbmmuFI2WNDXR-JfO1jqcF1Pw&s=10',

  // Set 4
  'Khaleel Ahmed': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUq2ihD88V9kIlUBUrGcE6-_x_QgVwkv7XCImIgEa0Q&s=10',
  'Trent Boult': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1PGJ4hGd4oNZoVnuGVTAFsRJ0Cx2HXnFSJh8LIf3mA&s=10',
  'Josh Hazlewood': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoDt0tsmD-PIJSjhElEa2RAzVnjgQGuzn_DV5iGF43A&s=10',
  'Avesh Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ZJS7rApD8d4d5hmSW1ZtMFAmb9GpKcqEiAitkF9ywg&s=10',
  'Prasidh Krishna': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YMpA5d13yUQCOoawZqgs2cqPv3XAdSWGYXd8_qiD_g&s=10',
  'T Natarajan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuhkJD6gfevqHZaZGBMh8Fydeq_mpB_OX6g84i16nVw&s=10',
  'Anrich Nortje': 'https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/4a6a/live/afeb8990-d353-11ef-8ee5-5100e9033936.jpg',
  'Arshdeep Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWUF7jbGi6wKiiJynMooBPnTwRtFQXENSJMWNV1oYAw&s=10',
  'Mitchell Starc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7W199-Xad2Mzt4YXk42BTfdZzb2DLe1_wKTOHwWpZZg&s=10',

  // Set 5
  'Noor Ahmad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5qdWoW4eguT7uz1Viij01yvHESZQWtSUt663OMFqz_g&s=10',
  'Rahul Chahar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBsXv40_iOwfWtUTx4yWnd1BNhuisg01bc2Sv0wE7wQ&s=10',
  'Yuzvendra Chahal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8exY8XjyrV44JyRdoByLO7ZWfV8Hv6RIQveq1f7lneg&s=10',
  'Wanindu Hasaranga': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxAM1g2bW_y0XPTS2W4j_-OjDeJCgTJM3KzU4JHEPQw&s=10',
  'Maheesh Theekshana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeE-pVN-zFTYhNKJZGIIKWs4KpukZElVdKV2ONVLTyLA&s=10',

  // Set 6
  'Ayush Badoni': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmMMx02mOB-cgApwiTVfMlX3TGKqCqFW7B4C-GTccDA&s=10',
  'Abhinav Manohar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1JWOaFDolgLZ7aF5dYegD2kV6C1Qy2jdyCvGL1t4Zg&s=10',
  'Karun Nair': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpu4bp6xliOS4nQOnZykQ-T7G5Ni0ErZQG1WQga3ukpNk6vZ68Yqc26Yk&s=10',
  'Angkrish Raghuvanshi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-9tHbvV90wgDMYW8FGUZdHAl2NhGok9cCLKrTWGpCw&s=10',
  'Anmolpreet Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKILJFgMXlrr1G427h3WmpAecPz3kHeoQ3vgZO1yiUNBOSFKCFIooqqws&s=10',
  'Nehal Wadhera': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKCOJCkOoQX4vs7DZC26Ol-FgBEzWZYMzExen8wTYZA&s=10',

  // Set 7
  'Harpreet Brar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4kyhQhlnxM4tJfSO2UAm9LixuMq7NjC0h1zUunbTy1Y_3A5OFRT1qrZvu&s=10',
  'Deepak Hooda': 'https://static.cricbuzz.com/a/img/v1/i1/c236619/if-you-dont-have-any-option-then-why-dont-you-go-there-like-a-warrior.jpg?d=low&p=det',
  'Shahbaz Ahmed': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJr84Tooe6bVbJi55gtLJnoNn9L3TjPouZqcqghC-O2Tm1RPxV8PJ5JqM&s=10',
  'Swapnil Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknSvcaptPtRIK3JccqvanjvsA7ENg7JRxNzKSgqQvDqgi-yI2r7pwMUfxAGw1_ikZ04YrYgyeo6RrL8S39-KsXJCP5r2MqN11pw_ERg&s=10',
  'Lalit Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47w0MK5cBILh7hxNlIKcdUYNMPU3KNoSz28qAZvV0kg&s=10',
  'Ramandeep Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOKeUi_62JC_txgzLP54PdE2ACX_z02fCPhHeSISUMQ&s=10',
  'Naman Dhir': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8h1a_bQjwuE6gfYI1aSDn0nqvrBiDevIbhwzmPNrcA&s=10',
  'Mahipal Lomror': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoklMKb336r6I_4FtU0kWT6M8Ahl3EZ8FwARRw5iEHg&s=10',
  'Sameer Rizvi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqFBUupVeTL3yA1YEfMN7hGPNU-fx5xoDP3MCBleSlA&s=10',
  'Ashutosh Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYdN6K2mvhbv5cD0InXLNfCnTTHuv6P8v8jpqvfpuNvA&s=10',

  // Set 8
  'Robin Minz': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXlVm6GgV1yAiogb4DR9WCLskV16ft9zQ2rGT14H5qQ&s=10',
  'Anuj Rawat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKV-PKR-8YQAqh1RPXP_nIKCTltnOl6Y3oYGurF-06w&s=10',
  'Kumar Kushagra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22KdnR7z7U9KTd7wPk6G7w-C7v6lvnWHIhFO8H9__Ag&s',
  'Luvnith Sisodia': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEz0Ler09Wcu9grK78pduGgGg5UtMSrJT55OxSq0QCg&s=10',
  'Urvil Patel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWzhfKZR08cL3JOGTxFUFOPgYLy8rlNu9jLyB5p-hTg&s=10',
  'BR Sharath': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXGfX2j9XlD9dBinOl9pndJBX_MOfpWr9urJ0vCWNlig&s=10',

  // Set 9
  'Vaibhav Arora': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVg7WETt3G2SUulEtd3JpHTNygMnOS8eStR9aB9s_ihw&s=10',
  'Rasikh Salam': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DSTPdJytTj29xNJRj0H8zjq7ilcQp4qiyXB6MyRv4g&s=10',
  'Mohsin Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAd2GiZfG-bIYtAHR_RduWBWOP6kSfh-clLcCrP19ng&s=10',
  'Yash Dayal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGc8OGw5q0eCDFC2KPEGOA4Q5VQtdLXmrsZQHxjeHwg&s=10',
  'Simarjeet Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2__Mjfkc0x4ffA7QulwyOgBs_zcAW3RCej8J_gvjwA&s=10',
  'Kartik Tyagi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjpBeG5JHZ1zuKR15iCsPL62jaTE7IPfmuD6uPIM0gw&s=10',
  'Vijaykumar Vyshak': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISPdOCZHMqFMDVCiAMRp6dVuA1fFf6zcJDYPPIWJmug&s=10',

  // Set 10
  'Suyash Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPAmnGLSywb7znEFgHoU9PVKhx4nKki1z9Z7AeehJwA&s=10',
  'Manav Suthar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7zD8tXEkIm0xknAKAs4E2XG_36wVFb5VSVxUT1hZPA&s=10',
  'Shreyas Gopal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRCdKeWe9x3KQ7sDLild2x6HxOKB4giXPILTAYqwQ8A&s=10',
  'Murugan Ashwin': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuN5VNb6MXJ5b04pc1Xn8ChfqFQ1JIK838Xnyyul3bdg&s=10',
  'Kumar Kartikeya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuiJTtLiHnFYsmu_ZWF2kDO8-qXgsAYU5_z2qpjweXg&s=10',
  'Prashant Solanki': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7Iz_j-S8orSc9IOA8rJ2YyU5uVS3fCXCMsc1F4XPwg&s=10',
  'Mayank Markande': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RfYodOL57Bc_2SdWSEp9fxN8ZfOSZk6uoBCPExZ_AQ&s=10',

  // Set 11
  'Faf du Plessis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyceeldgR6vwYnjXrCuIT_J3v3XnEb2tzVd9PHdTD8JA&s=10',
  'Glenn Phillips': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNjNy5_c7Jo2vWBoGlkFK6OzcdjbLxlvrlAD6aIV3jA&s=10',
  'Rovman Powell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEQfpprsRyr1FdjyiwsF3EFXphdn0ARnozXkRjOBikg&s=10',
  'Rilee Rossouw': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuphscNa6JP_ztNHvPizrEmMluXhcEdopz0RWQjTA_dw&s=10',
  'Rahul Tripathi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFP9mTCOlkz95zdr6CE-ixn_OJV11l6P5hwJ3NzJ2alg&s=10',
  'Ajinkya Rahane': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL3N1yX8wv4nEMJ7QSXc8L_lLZbVhC4oVruDbwrzslQ&s=10',
  'Prithvi Shaw': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm49-m6RjvTgu7sCaY8_HFGiWPWhcl4zkJT0XsONlow&s=10',
  'Manish Pandey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY00MG2TIcymuJsZ-emwN-DZJdsiWCjX1Bi1UJ6h_vERq7dSgHT7UjwLE&s=10',

  // Set 12
  'Sam Curran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOwLTvDNAVJBZmunH8_Juh-J1F0nUjZzU7-kci9eHGA&s=10',
  'Krunal Pandya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFV0gvV1cduGiVz8LCiVQ852tbwI_pIm5q3chS6LQpQg&s=10',
  'Nitish Rana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHPJItZPb9RWY3FjEGQO5w7b7DKMLdqK1ZM26u2NG0Q&s=10',
  'Romario Shepherd': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHiKkfmCBwGFnSn-Kflkv74F3s_-SSbageiKPMCv3oQ&s=10',
  'Shardul Thakur': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRTIfdUo6wdRqWrPgY7aAd4eEQgRiO3uWKq0GSzvUlXA&s=10',
  'Jason Holder': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWpsuzaEModokBOVutGOOGs5bDL2tpVmFPGu3HR3Pkg&s=10',
  'Daryl Mitchell': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqnwvD4cOnjFb8ubFqgoHKduHHtgpxMqiohtCZucJtw&s=10',

  // Set 13
  'KS Bharat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-wqCfty4G9SQdFKdC-GJL0ip4fpuMYkLpMlr3_TtyA&s=10',
  'Alex Carey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cGPHbd29d1Opi3GeBq6hjfgZYPstYNZefmCBsnzd2A&s=10',
  'Donovan Ferreira': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWZnA6u7wsQs6S_d_Vy7azQOoGM156kOw8lQ1yX969g&s=10',
  'Ryan Rickelton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8gW_wEOKb1SoaYNPznu9CsINceyoGQu1DIwxsXg6ew&s=10',
  'Josh Inglis': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOU26ZYmtilEdBtgGe6lZwb2kF7mj4fxYW6d8KRhd9SA&s=10',
  'Matthew Wade': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt8TYIyZRqzv5J_fa6_5Y4MXtSk5-pO5nAZR3vAl2XQ&s=10',

  // Set 14
  'Gerald Coetzee': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78brZWhO7CVtSoGfXXWMZRT64hj1jee7fpl6Q4wiQYw&s=10',
  'Lockie Ferguson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUYvKNoa4QUMHVjI7hLL07UFtiCITbbTe-L-lpa6a_A&s=10',
  'Deepak Chahar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DDIjP07dBb7-7fq7_9IxMmIkdwYwiG5Fnk-sojiPZw&s',
  'Bhuvneshwar Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm6iFXLbdWEyrdG0MtAEQLDiv_SoFb2IleLrC6y3YaQA&s=10',
  'Mukesh Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5QAV2baRh7vrvDrckMkfMn0DeZaPNJ6ykr6NhJhH36A&s=10',
  'Tushar Deshpande': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-KT88jOhPiZwlG25pWllz2LHHLi1v2JRhiyfmrDjg7A&s=10',
  'Umran Malik': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbozo-ZnXB2T7g-uowxmf3LyAzmkfz4b-rAVf6rL9vdQ&s',
  'Naveen-ul-Haq': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5w4xK2XEdHZcpnhebLK78fBUWPiQ5HlKZCDDLHh61w&s=10',

  // Set 15
  'Allah Ghazanfar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPpbnc45_2H1xghEZh1_nF_kRZrgHBS43Vw8g6CggJQ&s=10',
  'Akeal Hosein': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7hbKW6kJWrJLeDTFd5Q2GC4LKtZKw9kL-ev8ENwWAg&s=10',
  'Karn Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBTcTppzUAYZ9CgIMswHf2DuMN5V5YEGRf5BV0HxzCw&s=10',
  'Piyush Chawla': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJaGjqNrI3ZUZzNmL9vUZW_AwMGrjZ1uxfKstaG0eeQ&s=10',
  'Tabraiz Shamsi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJx21zxuSlqaKbjQKBh_qvtsmKY2CjqSa_lvQ59BMAw&s=10',
  'Ish Sodhi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklekJkEnAvBqpxYfDwZ526Gly1jr8aF8CKjhwSYklvA&s=10',
  'Keshav Maharaj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVIjs-4KJdUTUC6Y0to7oMRYgLCJLPZaJAKeJb0PIPQ&s=10',

  // Set 16
  'Swastik Chikara': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdy_fSjhgGzVuSFodGyv42Owc-RNK3G83qaX0tChRCw&s=10',
  'Priyansh Arya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZXXNNH23yU2KlH-YUoXNMBLD6S9QKSV5N48pXCnaFw&s=10',
  'Shaik Rasheed': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgSc2JPrEZx9rvIw2pmZAHeTT1ywTaeaPvLJASwnLLhEghidStopXfSQ&s=10',
  'Himmat Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIyWKTl7AbAKgE8aHKY5HDL-k4k5co88GgKNgTy7m4AA&s=10',
  'Harpreet Singh Bhatia': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7pbNAxnZHDIq7AJ8Q1yOffqLG_0XNkDYdchU426RIA&s=10',
  'Sachin Baby': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopQ7pvDDEOW9tL8X0gBWXNewKej-gey03rJXJYmkvOQ&s=10',
  'Atharva Taide': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXglU57IXPehyPkBNhHJ36sZ0kAJ2G_4_u2LfB1-e-kA&s=10',
  'Rohan Kunnummal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfz_ExhOdkinPfrlavcha20y8uqAQfdmhi7bG_amCilg&s=10',

  // Set 17
  'Raj Bawa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUPgdBuiWcLG7qnn062ZfblTKf-L_v7ao0i4nhIhClg&s=10',
  'Anshul Kamboj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIdcHh6lFsU-rvXK8a_BZTrzLqZU4VA1r57Rz1Dal7g&s=10',
  'Tanush Kotian': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrD8FCV1NyYwgBXJfE36x3JB2EmuxbtQECHjURgVe_w&s=10',
  'Sanjay Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37zCWLLMK6Drn1ppJYnuIEanYi16ViTliJa-DmlKYgA&s=10',
  'Arshin Kulkarni': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyBskOgEIpl54qZ3f27PRd3CqYsAG6Ki0j9-jPswkag&s=10',
  'Prerak Mankad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1BX1xoV4H5VtyEROJgpJIOtYiywyIAHYjCqjHRkB3A&s=10',
  'Yudhvir Charak': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbTX2o5Dzf7OQXwhjsuhML19h-j-_hWUzAWaBa2-Lbg&s',
  'Shams Mulani': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSf9WfIV6PNZuysYH4Ue8Kyev-inK6RUpZ0wKptXd5Yw&s=10',
  'Sanvir Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xt04sXWN2vbDJnXv20ftGKFHu6lAfq3qIXH7sxRp3w&s=10',
  'Kamlesh Nagarkoti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iwWC7zxGtFlan5k9EXEBicTVfljiPh0vhOr30-gd7A&s=10',

  // Set 18
  'Avanish Rao Aravelly': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRo-kj0EAM8Bs7Dk6Yyrhvo34V5zusjLrB6aITzcdg5Q&s=10',
  'Upendra Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGKEDZN2Fw9eicp3baGEAqsod4diwYYeiff4W6BRfdQ&s=10',
  'Vishnu Vinod': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLNwbhNp6LNX6nsuERMr55f3fdMCuhoYeVC9p5Ur5jA&s=10',
  'Dhruv Jurel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-G5ex3bRqrtI7qj3UbmlsyaA95G0x7I19xddMwz5fcQ&s=10',
  'Sheldon Jackson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsXhBbxCuOiEZX1M3L9J8l2-A76B1_2sU72C6j7zxMw&s=10',
  'Baba Indrajith': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBvB3jwFjHBXIophSJ80TSgiDqKVZ9ONSRJbbCYC1ZA&s=10',
  'Harvik Desai': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1kV0gZFKxp1JAY6vhQidEIIEc6q6J6dCL_hgg03yyug&s=10',
  'Aryan Juyal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40--3XY_fXxbV4LSf0VGwNM8DSZTOCjW5QH1kHlliOw&s=10',

  // Set 19
  'Vipraj Nigam': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzQ01vsbFJnniLqI-XwUe2xXmVuClW0DVXhYqUvcmsg&s',
  'Chetan Sakariya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYk103M3rstHXv4UlhmBuQazEw0KAlVoIJ_2ZwVOeyLw&s=10',
  'Akash Madhwal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV85wPVnjdYsgLHivd8XGDnX2rmKZ0zqiLF7PFE_1Lng&s=10',
  'Sushant Mishra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3lNvpUwL6P4JWHJjTFvMSoo5o0BrPKDyK83EUeIINw&s=10',
  'Kuldeep Sen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaNEnyZZPFnnYHZjEx8UalN8Rr7rpvqPr-R3knp0nWA&s=10',
  'KM Asif': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SLZGufshs_IQ0QD2N74nYQPPEpr4NGMT2UYFvg1eSg&s=10',
  'Koushik V': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4Du85oi3Hf_QFNtJ3059bdDZnXT-T3HS_wpVqmr_Cw&s=10',
  'Gurnoor Brar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FZa0bzGJXGkxnofCI7f1-g_kq50xSAbm9cpe1KQlKA&s=10',
  'Mukesh Choudhary': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCShUoo4swSSKfOEdnJwOicTl8tCSgfwRtI3AYZK-uA&s=10',
  'Vidwath Kaverappa': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNcZVzvPm3Oj92CBCpGpatLa04nVZvTuPQXH1uK32rw&s=10',

  // Set 20
  'Vicky Ostwal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF4baJRee-fZx4qcYow-vsIp2hjQtVbOBNgMONAHTog&s=10',
  'Hrithik Shokeen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzaA27Arthv69Dwa7TmTaCrkwylSgz6O7KAMiQg2Clw&s=10',
  'Dharmendrasinh Jadeja': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HJKondRzVCxRv7v1TibcR7-x_ujzM0MiP6gUOd6eaA&s=10',
  'Pulkit Narang': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzzjyrT_HXSgy6XtAqb5hbEbusxFnIbhz9g6CThCweA&s=10',
  'Himanshu Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KyHF-Eee4FHeNL8n_NYnPxgb6qzVuVOYUYfmCqZvNA&s=10',
  'Zeeshan Ansari': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5o7VhABmtPBjMbfQIkvd4vQ-KU-DMG8El96mPBNzxg&s=10',
  'Shiva Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5MGQWI_zBc6akZqbY9cOayvPsAXO3_ablH5T3EXqrQ&s=10',
  'Raghav Goyal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuFy9_uQbsdqOdvFoxxkYs3knCrJEpEjP3XiautKfHQ&s=10',

  // Set 21
  'Moeen Ali': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhL2CoPyt2Y9Cq29olwdsOxPsMFy5HAfXJ3ce-KpQww&s=10',
  'Tim David': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64B9zZ1kbyVs8gJRfT9l21mxwRFNveRloH-KamNFCdA&s=10',
  'Will Jacks': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEuHfmHQvAeYIVB2pay-lPgnjdmHKkZsdlxGJY9bEWOA&s=10',
  'Azmatullah Omarzai': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwrfj9HICwgrryOpIf8slJnlwqBBLIxNXpl3_-4a6sQ&s=10',
  'Rachin Ravindra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXU1RqKupyJOdBnjMrBEyQx_uJ-JOHxsQfT4_yW13mA&s=10',
  'Mitchell Santner': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_ORxNyv964CSM67kuqW2jKb4diesziRFShIWdaJb0w&s=10',
  'Shahbaz Nadeem': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUuTlKCKu8OWIikceQ-SO9h_eC1Tf-Cm_cybT60W8ng&s=10',
  'Vijay Shankar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UsT5bnhSG-mexbqS5-3kGyqrw1ajIkFuDV_bSnsgew&s=10',

  // Set 22
  'Spencer Johnson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTppYufxjIiDRRE_7MHyPQyscaLeGHC4S35dI5op1Caw&s=10',
  'Alzarri Joseph': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi48Vsy_FFRcPpT_l5qVVQt3tdiMTc4h5VUId_hOYvHQ&s=10',
  'Shivam Mavi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzF_7NJnnv3_fioGojwIeoCOaeXyPgrLTtZeyAu0RGA&s=10',
  'Mustafizur Rahman': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSRdyoev04E8qRnkndYyqRkNhroGL0hlQKAf4a57hlA&s=10',
  'Navdeep Saini': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jntwit2_wfMwWY-tSJ8T6zGtgPseAcXLsayZoaWEmw&s=10',
  'Jaydev Unadkat': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMjOarYMj7RYCJkRvSnYNF1yRn1l_v1mQPCDHsEBODA&s=10',

  // Set 23
  'Musheer Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEj-2nT8J7Um_Nx9sophhtxh6PVTLJan9x-OLbn6osvw&s=10',
  'Priyam Garg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWZIDRHDPgQ5MKYbHGOPs8XT-VcG8_1NRBUfMbImZVw&s=10',
  'Uday Saharan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmIr2X0aFk5qsKF7XVjX9dx1_TQGHawiYbc0dZA38Zg&s=10',
  'Arsh Kabir Ranga': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvx8nUVYz3S7kXaQIsmZIB0J_hJD-K7H56N2QyhVhIA&s=10',
  'Adarsh Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-GnEJ1JlwHiU2csyUIaBCPy6bxGZgrSf9gRrYliiUw&s=10',
  'Aniket Verma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31-fgZ-1b3XpRkKoH3-_EdmJa7QqhiUP-Q3d82K9Mlg&s=10',
  'Tanmay Agarwal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSt0PYHrikNTrKvdXN1z-So2Qj6L-5iLf81F9hLUK0-Q&s=10',
  'Bhanu Pania': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNParjal3jJ2nq84U21YQk1PA5BkwDpRnRs7U9ZxHd2A&s=10',

  // Set 24
  'Manoj Bhandage': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6dmoKhhG6JeErRoQQPc7PtEYSXOPQJiDeQ9NUrEyrA&s=10',
  'Mayank Dagar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHOg2CGCia0AIjS5_43oIIFOjJVsI9McXnpn2f6IvJA&s=10',
  'Manvanth Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnNQ0tDA-B_O71uuaXR-sMmnGdZRNrDaeuwFHDh-d9g&s=10',
  'Abid Mushtaq': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJOFh-FhnlW1LshN0qeKDtO8xX2LKlbqQfGO22TFEuQ&s=10',
  'Jalaj Saxena': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyEZ1WjO8sO_XMyQoxBdagjSPWNxROHYY0AF48B-yrg&s=10',
  'Atit Sheth': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10',
  'Hritik Shokeen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxo75saM81K-CPiEpYWwWshnJdi-pzsgwjRyLREN8Aw&s=10',

  // Set 25
  'Joe Clarke': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua41HROKWazB7Ckhmtf1ObRlMHK-o1vOkU-F5qvFNig&s=10',
  'Connor Esterhuizen': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHRl4TbC056Zfea3j2B67Qg2p-oYfJIuq9EWbNRPUdA&s=10',
  'Ajitesh Guruswamy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pY4hrN1O_4JoLbsztXF0WY76AV4ltCuo1dLyO_voKQ&s=10',
  'Siddharth Joon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCfOj0_MS-HXtyww6sAHavbeRphSU2SUw5ZAhbqL9LA&s=10',
  'Tom Moores': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81590xzDb0aEpEuUJd2w3mz7jK7-whF8wib_S_ZnfBg&s=10',
  'Bipin Saurabh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfriKuoLSMss5ubkVwIbMO828n_aVDqeXhXCPWCLiebg&s=10',
  'Vishnu Solanki': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6Z-DmT4mMG0rem60SRFaB0G4g__f2OP0FtuRGMtDug&s=10',
  'Hardik Tamore': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nHAvFPkMrwmDpBERKwqVRjKhSRBqQPnj48-6GAYoQw&s=10',

  // Set 26
  'Sayan Ghosh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-01O2qj0LHmIrlk1v11No6jOfsXtoEYrYOeNCKX0lvg&s=10',
  'Money Grewal': 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/405400/405483.6.jpg',
  'Arpit Guleria': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaPcs-oYW2XbntufQ5ljNSArSIiy0r1Ut0MlSrrutAA&s=10',
  'Sunil Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7eVqCpJQHoAEN2Ep1iWsOl0W1dZHdJW_NZ7GICPtKg&s=10',
  'Tristan Luus': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3uedoSDF8zZNVzNbv-MDL3RV99_3F6jrtdqBnOaWfw&s=10',
  'Divesh Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRng0Z_-Inl5KqTo6D4hUuGBH1qzmwSZnws5qyp2QHwGw&s=10',
  'Abhilash Shetty': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV2FM-9GLhDjWHU2CjIr25ikZ9lTzV4ND8NyqCnb4cA&s=10',
  'Irfan Umair': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGjls7vPdMpjmfGjJUml-1WGNIauPBxiM5fZgDGigaQ&s=10',
  'Kuldip Yadav': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJd6_rwDc1mE7aUJ6mIp__TAoPfAioi5je3RIcGqKFg&s=10',

  // Set 27
  'Manan Bhardwaj': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ki9epK5UgpsfT9j73Wqyuj1CFfv9rIFUkWhOcmekTA&s=10',
  'Shreyas Chavan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxvVTOy9r8VNxxopnEtzDC7SQOcrkaEsBXqMGk0jKGg&s=10',
  'Chintal Gandhi': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRL35wkFbfUD19_4W5x4tNC3YR-kN3PzqZaEhEm5XRg&s=10',
  'Amit Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4Jr2pOfahqiizhTSLuTadKQswzkME8nZteY5Gw6esQ&s=10',
  'Vishal Nishad': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiddEkUHIVw-JeUquNdhMBJeiTNpxH4F4JWDJW4_hW6g&s=10',
  'Saumy Pandey': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCTYy6XEwwmQ4xwrOuqp2bOleopOcsHmQ2P2d_vDSLag&s=10',
  'Jhathavedh Subramanyan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLlmNC4jb_-wCk86_2hlrdfBTxM4fxZzmcelj7jNSPg&s=10',

  // Set 28
  'Muhammad Abbas': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZKTkEBTof3Cr7c_iItFFLv68M3kD7ESizCMhAvYxbg&s=10',
  'Charith Asalanka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZyvjaH0FYl30F3S5yrI78kn-U_2lzsldjA27-Hd84w&s',
  'Roston Chase': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGpkbIaZTxvxBctAS-2czSWiJDPIn7CU7TN0c12Vgxw&s=10',
  'Liam Dawson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKm3xnhQu4zTLjZ_khl4-t5_Lul0TLyno_xixfS2GKw&s=10',
  'George Garton': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNy4LuI4BTnQOFygXVMF7KntUQAX1tu-HZJtJfagzJw&s=10',
  'Kyle Mayers': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslG72gJfVFPhsAjB3ryCFxP8t7E2EKsFihMMszXw4WA&s=10',
  'Dwaine Pretorius': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgQ5qgmW7PghXjIOgGR3J4sRsTOpIiEpOuHMsevIfcQ&s=10',
  'Nathan Smith': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpsZmcWkg0IbzKfl-nQbM0aAKsbHmlkP3JMRZcDIRug&s=10',
  'Dunith Wellalage': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT47xpDxv8IUqQw19wlvds6AHV0x-s8TAQ64EaRyATMtw&s',

  // Set 29
  'Jason Behrendorff': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlenmtzW-AOo9Ab4O8bMVfWjZ02ZvhcxcopG908d6BTQ&s=10',
  'Tanzim Hasan Sakib': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnaCuMtzxkL4UUv1M5GFyv0OnWkArLfvoVzgSu6pHFCw&s=10',
  'Matthew Potts': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hm6-5sWeUddRf6AxPjXGucfQvqrc81zWPhZnfQG5jQ&s=10',
  'Nahid Rana': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl25h0qH37HdIZbql846gqsDaUqLJC-x56nKV36Fdwmw&s=10',
  'Olly Stone': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-GbbR_4n7_AITCD8Hv27OGkabc0iP3j-zMBh_rT7WQ&s=10',
  'Josh Tongue': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tsemoas9QG7NLSlNqush0s4pgG4U6TSq8WQVHVoSsg&s=10',
  'Sandeep Warrier': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIhBcnmP0vl3LjD8NZIW23nBvFU7tk-fMQ7q_sVgW-ng&s=10',

  // Set 30
  'Sachin Dhas': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdXXxeP0CfNsPAl97lA9fH4JH-eGqtBAlhgE1pEDsZg&s=10',
  'Miles Hammond': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QjOBwHDFAEIV1YeRKtwXotRbgKABTOMcbxNjuIhQcQ&s=10',
  'Ahammed Imran': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOM02MFBdES_J-dYjj5e2tR2ShXTHt933EW4LcZoT64A&s=10',
  'Vishvarajsinh Jadeja': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10',
  'Ayaz Khan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10',

  // Set 31
  'Atharva Ankolekar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA03ozLNiCY1DqC3-qYV666VE25eFrkS-W3MMSyEbHqg&s=10',
  'Abdul Bazith': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsVRfo1-h0In0BUxzUDCntRBMcvO3Qd3jYk-KENaIPw&s=10',
  'Karan Lal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY5hjfY15BZLJxDqWbqRj2X_vhMPBDLFotcs_77D0BA&s=10',
  'Ripal Patel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5TpstDGabFImTF5oX3fIvAu2Wup11b2YcGyLALsZeg&s=10',
  'Prince Rai': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7SK1QgsxFi-d_ZVS7O7GVb_BQEPG4hPEo1dpp8yPVg&s=10',
  'Vivrant Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10',
  'Utkarsh Singh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOlradNaSYvjwGzuC9xNt3X4HGURmnzb8nluVxjtRqA&s=10',

  // Set 32
  'Sayed Irfan Aftab': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPUP5WsBmjNvjyrDt482Qkia2Rl2xECfXwYBenWZ7YQ&s=10',
  'Esakkimuthu Ayyakutti': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxmaEH6YdEok9StV_qG3qq6bJtw_2CZeVfd5GKm3VQg&s=10',
  'Praful Hinge': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk3C5F-4m4r-kathx04iZnPOndH0b8F_JiCr1a7d5mw&s=10',
  'Pankaj Jaswal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yxWfpgLraq_JDEAUz8EJUVMNm93LkwZEB_tmO1fRsg&s=10',
  'Kulwant Khejroliya': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RJD64OIrtPLAt9i_ztSlOl5lU5SPj_UHEelcWIxGKg&s=10',
  'Ravi Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cOYeViuGIew21hc3fwb35tuMOFqpw2-iINcQ4DdkEg&s=10',
  'Rajan Kumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsfsJ1N6yDNqj5juqHEw9jVERfphqMRU_B16PL9RcjQ&s=10',
  'Safvan Patel': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAqHfPuJPY80XOled8maR3FAbyaxNeZCuJvz5uwWvYQ&s=10',

  // Set 33
  'Purav Agarwal': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLFFOBDtinQJVzxXyJT6cn4x0OkQM4zxj7sJ8JlSjeg&s=10',
  'Jikku Bright': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqi9Kkw1S9K2EefeJvveDdRUxuXzJwk-4qLcoRFksvQ&s=10',
  'Yash Dicholkar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmFG9iD_giq7LUeGnbtqzcnmyEv_8vtoDKT0JqrlrxLg&s=10',
  'Arab Gul': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7ED1Mo92BfR7QhIY0126FTC5_PQphxWnubkYr80kaA&s=10',

  // Set 34
  'Wesley Agar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_BOKWFsdWiVhdJdJ3skz0rtyeQLv-jjbwvTv83-UiQ&s=10',
  'Binura Fernando': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdr3ysaQ84stGzzQgqP7idoqHVVCrcMOoIO8593q3ZQ&s=10',
  'Shoriful Islam': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1c82KHg-XPEI9DQ2QoNRmad8Fcb7CAuGgPMDnkbNwQ&s=10',
  'Joshua Little': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zCzspCyIOuE8scjVEUKNEzLBHUWdZIuJoEAZmyiw9Q&s=10',
  'Obed McCoy': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-4qADxgwxxfj2ck1yQRtuGJcNN6E0ca6Tf589eLTyQ&s=10',
  'Billy Stanlake': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrQSR-_izbQgWlvDh6su8KEImBcOjmzYGqMxYQNXHew&s=10',

  // Set 35
  'RS Ambrish': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6ocJaH0we-Ed-yaPzAdH-fj8a3Bn-miecU2TNNVD4Q&s=10',
  'Nikhil Chaudhary': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNvz8UoK0aKoBYnuNcN6d5DeY_nqqxr1xYENJZax_zVA&s=10',
  'Krains Fuletra': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3N5EMiIRSjsJ_8x7Y7NPwI3cDYrAd--lwFu-tWqRqA&s=10',
  'Macneil Noronha': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlztYeVCUTuvlQI4hyXMDnWyQ-EQ_Y3cwMIba1zMsMRQ&s=10',
  'R Rajkumar': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx40Bu-edGHCT5nINtwVT8Vjubw08LBfkoEhASatQdg&s=10',
  'Ninad Rathva': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFvA4J_d59Je7oTHCRnS83IadvHlTioMUHAvfojCf0Q&s=10',
  'Sunny Sandhu': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncqYB_g1NLrXjxwWyMQxIsQftB859fBzadN-jvjgNjg&s=10',
  'Shivalik Sharma': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10'
};

// 1. Update official350Players.json
const offPath = 'src/data/official350Players.json';
const off = JSON.parse(fs.readFileSync(offPath, 'utf8'));
let offMatchCount = 0;
const updatedOff = off.map(p => {
  const normName = p.name.toLowerCase().trim();
  const matchKey = Object.keys(ALL_SETS_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === normName);
  if (matchKey) {
    offMatchCount++;
    const url = ALL_SETS_PLAYER_IMAGES[matchKey];
    return {
      ...p,
      imageUrl: url,
      photo: url,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
  return p;
});
fs.writeFileSync(offPath, JSON.stringify(updatedOff, null, 2));
console.log(`Updated official350Players.json: matched ${offMatchCount} players!`);

// 2. Update teamsSquads2026.json
const squadsPath = 'src/data/teamsSquads2026.json';
const squads = JSON.parse(fs.readFileSync(squadsPath, 'utf8'));
let squadMatchCount = 0;
for (const t in squads) {
  squads[t] = squads[t].map(p => {
    const normName = p.name.toLowerCase().trim();
    const matchKey = Object.keys(ALL_SETS_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === normName);
    if (matchKey) {
      squadMatchCount++;
      const url = ALL_SETS_PLAYER_IMAGES[matchKey];
      return {
        ...p,
        imageUrl: url,
        photo: url,
        imageVerified: true,
        imageStatus: 'VERIFIED'
      };
    }
    return p;
  });
}
fs.writeFileSync(squadsPath, JSON.stringify(squads, null, 2));
console.log(`Updated teamsSquads2026.json: matched ${squadMatchCount} players!`);

// 3. Update masterPlayersDatabase.json
const masterPath = 'src/data/masterPlayersDatabase.json';
const master = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
let masterMatchCount = 0;
const updatedMaster = master.map(p => {
  const normName = p.name.toLowerCase().trim();
  const matchKey = Object.keys(ALL_SETS_PLAYER_IMAGES).find(k => k.toLowerCase().trim() === normName);
  if (matchKey) {
    masterMatchCount++;
    const url = ALL_SETS_PLAYER_IMAGES[matchKey];
    return {
      ...p,
      imageUrl: url,
      photo: url,
      imageVerified: true,
      imageStatus: 'VERIFIED'
    };
  }
  return p;
});
fs.writeFileSync(masterPath, JSON.stringify(updatedMaster, null, 2));
console.log(`Updated masterPlayersDatabase.json: matched ${masterMatchCount} players!`);

// 4. Update verifiedPhotosMap.ts
let vContent = fs.readFileSync('src/data/verifiedPhotosMap.ts', 'utf8');
let addedCount = 0;
for (const [name, url] of Object.entries(ALL_SETS_PLAYER_IMAGES)) {
  const entryKey = `'${name}':`;
  if (vContent.includes(entryKey)) {
    const reg = new RegExp(`'${name}':\\s*\\{[\\s\\S]*?\\},`, 'g');
    vContent = vContent.replace(reg, `'${name}': {\n    url: '${url}',\n    source: 'Verified Auction Set Photo',\n  },`);
  } else {
    vContent = vContent.replace(
      'export const VERIFIED_PLAYER_PHOTOS: Record<string, { url: string; source: string }> = {',
      `export const VERIFIED_PLAYER_PHOTOS: Record<string, { url: string; source: string }> = {\n  '${name}': {\n    url: '${url}',\n    source: 'Verified Auction Set Photo',\n  },`
    );
  }
  addedCount++;
}
fs.writeFileSync('src/data/verifiedPhotosMap.ts', vContent, 'utf8');
console.log(`Updated verifiedPhotosMap.ts: recorded ${addedCount} entries!`);
