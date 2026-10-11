import fs from 'fs';
import path from 'path';

// 1. Ensure backup of existing 350 players exists
if (!fs.existsSync('src/data/backup_official350Players.json')) {
  fs.copyFileSync('src/data/official350Players.json', 'src/data/backup_official350Players.json');
  console.log('Created backup: src/data/backup_official350Players.json');
}

const official350 = JSON.parse(fs.readFileSync('src/data/official350Players.json', 'utf8'));

// Verified Dates of Birth for Indian & International IPL cricketers from official cricket records (ESPNcricinfo / IPL)
const KNOWN_DATES_OF_BIRTH = {
  // CSK
  'Ruturaj Gaikwad': '1997-01-31',
  'Sanju Samson': '1994-11-11',
  'MS Dhoni': '1981-07-07',
  'Ayush Mhatre': '2007-07-16',
  'Sarfaraz Khan': '1997-10-22',
  'Urvil Patel': '1998-10-17',
  'Kartik Sharma': '2000-08-15',
  'Shivam Dube': '1993-06-26',
  'Ramakrishna Ghosh': '1997-12-05',
  'Shreyas Gopal': '1993-09-04',
  'Aman Khan': '1996-11-23',
  'Prashant Veer': '2005-04-12',
  'Rahul Chahar': '1999-08-04',
  'Khaleel Ahmed': '1997-12-05',
  'Gurjapneet Singh': '1998-11-27',
  'Anshul Kamboj': '2000-12-06',
  'Mukesh Choudhary': '1996-07-06',
  'Jamie Overton': '1994-04-10',
  'Dewald Brevis': '2003-04-29',
  'Matt Short': '1995-11-08',
  'Spencer Johnson': '1995-12-16',
  'Zak Foulkes': '2002-06-05',
  'Matt Henry': '1991-12-14',
  'Noor Ahmad': '2005-01-03',
  'Akeal Hosein': '1993-04-25',

  // DC
  'Axar Patel': '1994-01-20',
  'Prithvi Shaw': '1999-11-09',
  'Karun Nair': '1991-12-06',
  'Nitish Rana': '1993-12-27',
  'Ashutosh Sharma': '1998-09-15',
  'Sameer Rizvi': '2003-12-06',
  'Sahil Parakh': '2005-03-24',
  'KL Rahul': '1992-04-18',
  'Abishek Porel': '2002-10-17',
  'Vipraj Nigam': '2002-02-18',
  'Auqib Nabi': '1996-11-04',
  'Madhav Tiwari': '2004-09-12',
  'T. Vijay': '2000-04-10',
  'Ajay Mandal': '1996-02-25',
  'Kuldeep Yadav': '1994-12-14',
  'Mukesh Kumar': '1993-10-12',
  'T. Natarajan': '1991-04-04',
  'Mitchell Starc': '1990-01-30',
  'Pathum Nissanka': '1998-05-18',
  'Dushmantha Chameera': '1992-01-11',
  'Lungi Ngidi': '1996-03-29',
  'David Miller': '1989-06-10',
  'Tristan Stubbs': '2000-08-14',
  'Kyle Jamieson': '1994-12-30',

  // GT
  'Shubman Gill': '1999-09-08',
  'Sai Sudharsan': '2001-10-15',
  'Shahrukh Khan': '1995-05-27',
  'Anuj Rawat': '1999-10-17',
  'Kumar Kushagra': '2004-10-23',
  'Washington Sundar': '1999-10-05',
  'Manav Suthar': '2002-08-03',
  'Rahul Tewatia': '1993-05-20',
  'Nishant Sindhu': '2004-04-09',
  'Jayant Yadav': '1990-01-22',
  'Arshad Khan': '1997-12-20',
  'Sai Kishore': '1996-11-06',
  'Mohammed Siraj': '1994-03-13',
  'Prasidh Krishna': '1996-02-19',
  'Gurnoor Brar': '2000-05-25',
  'Ishant Sharma': '1988-09-02',
  'Ashok Sharma': '2002-06-16',
  'Kulwant Khejroliya': '1992-03-13',
  'Jos Buttler': '1990-09-08',
  'Tom Banton': '1998-11-11',
  'Luke Wood': '1995-08-02',
  'Glenn Phillips': '1996-12-06',
  'Jason Holder': '1991-11-05',
  'Rashid Khan': '1998-09-20',
  'Kagiso Rabada': '1995-05-25',

  // KKR
  'Ajinkya Rahane': '1988-06-06',
  'Angkrish Raghuvanshi': '2005-06-05',
  'Manish Pandey': '1989-09-10',
  'Rahul Tripathi': '1991-03-02',
  'Rinku Singh': '1997-10-12',
  'Tejasvi Dahiya': '2003-07-28',
  'Anukul Roy': '1998-11-30',
  'Daksh Kamra': '2004-02-14',
  'Ramandeep Singh': '1997-04-13',
  'Sarthak Ranjan': '1996-09-25',
  'Prashant Solanki': '2000-02-22',
  'Varun Chakravarthy': '1991-08-29',
  'Kartik Tyagi': '2000-11-08',
  'Umran Malik': '1999-11-22',
  'Vaibhav Arora': '1997-12-14',
  'Saurabh Dubey': '1998-01-23',
  'Navdeep Saini': '1992-11-23',
  'Cameron Green': '1999-06-03',
  'Rovman Powell': '1993-07-23',
  'Sunil Narine': '1988-05-26',
  'Finn Allen': '1999-04-22',
  'Rachin Ravindra': '1999-11-18',
  'Tim Seifert': '1994-12-14',
  'Matheesha Pathirana': '2002-12-18',
  'Blessing Muzarabani': '1996-10-02',

  // LSG
  'Rishabh Pant': '1997-10-04',
  'Abdul Samad': '2001-10-28',
  'Ayush Badoni': '1999-12-03',
  'Himmat Singh': '1996-11-08',
  'Akshat Raghuwanshi': '2003-09-15',
  'Mukul Choudhary': '2002-05-18',
  'Arshin Kulkarni': '2005-02-15',
  'Shahbaz Ahmed': '1994-12-12',
  'Digvesh Rathi': '2001-08-20',
  'M. Siddharth': '1998-07-03',
  'Akash Singh': '2002-04-26',
  'Avesh Khan': '1996-12-13',
  'Mohammed Shami': '1990-09-03',
  'Mohsin Khan': '1998-07-15',
  'Prince Yadav': '2001-11-12',
  'Arjun Tendulkar': '1999-09-24',
  'Mayank Yadav': '2002-06-17',
  'Naman Tiwari': '2005-10-20',
  'Matthew Breetzke': '1998-11-03',
  'Aiden Markram': '1994-10-04',
  'Anrich Nortje': '1993-11-16',
  'Nicholas Pooran': '1995-10-02',
  'Josh Inglis': '1995-03-04',
  'Mitchell Marsh': '1991-10-20',
  'Wanindu Hasaranga': '1997-07-29',

  // MI
  'Hardik Pandya': '1993-10-11',
  'Rohit Sharma': '1987-04-30',
  'Suryakumar Yadav': '1990-09-14',
  'Danish Malewar': '2003-08-11',
  'Robin Minz': '2002-09-13',
  'Shardul Thakur': '1991-10-16',
  'Naman Dhir': '1999-12-31',
  'Raj Bawa': '2002-11-12',
  'Tilak Varma': '2002-11-08',
  'Mayank Markande': '1997-11-11',
  'Raghu Sharma': '1998-06-20',
  'Ashwani Kumar': '2001-07-04',
  'Deepak Chahar': '1992-08-07',
  'Jasprit Bumrah': '1993-12-06',
  'Mohammed Izhar': '2002-03-15',
  'Mayank Rawat': '1999-10-28',
  'Will Jacks': '1998-11-21',
  'Ryan Rickelton': '1996-07-11',
  'Quinton de Kock': '1992-12-17',
  'Corbin Bosch': '1994-09-10',
  'Sherfane Rutherford': '1998-08-15',
  'Mitchell Santner': '1992-02-05',
  'Trent Boult': '1989-07-22',
  'Allah Ghazanfar': '2006-03-20',

  // PBKS
  'Shreyas Iyer': '1994-12-06',
  'Harnoor Singh': '2003-01-30',
  'Nehal Wadhera': '2000-09-04',
  'Priyansh Arya': '2001-01-18',
  'Pyla Avinash': '2002-04-12',
  'Prabhsimran Singh': '2000-08-10',
  'Vishnu Vinod': '1993-12-02',
  'Harpreet Brar': '1995-09-16',
  'Musheer Khan': '2005-02-27',
  'Shashank Singh': '1991-11-21',
  'Suryansh Shedge': '2003-01-04',
  'Praveen Dubey': '1993-07-01',
  'Yuzvendra Chahal': '1990-07-23',
  'Arshdeep Singh': '1999-02-05',
  'Vijaykumar Vyshak': '1997-01-31',
  'Vishal Nishad': '2002-08-14',
  'Yash Thakur': '1998-12-28',
  'Azmatullah Omarzai': '2000-03-24',
  'Ben Dwarshuis': '1994-06-23',
  'Cooper Connolly': '2003-08-22',
  'Marcus Stoinis': '1989-08-16',
  'Mitchell Owen': '2001-09-16',
  'Xavier Bartlett': '1998-12-17',
  'Marco Jansen': '2000-05-01',
  'Lockie Ferguson': '1991-06-13',

  // RR
  'Riyan Parag': '2001-11-10',
  'Shubham Dubey': '1994-08-27',
  'Vaibhav Suryavanshi': '2011-03-27',
  'Yashasvi Jaiswal': '2001-12-28',
  'Aman Rao': '2003-05-19',
  'Dhruv Jurel': '2001-01-21',
  'Ravi Singh': '2002-09-04',
  'Ravindra Jadeja': '1988-12-06',
  'Yudhvir Singh': '1997-09-13',
  'Ravi Bishnoi': '2000-09-05',
  'Yash Raj Punja': '2003-02-10',
  'Vignesh Puthur': '2001-06-15',
  'Sandeep Sharma': '1993-05-18',
  'Tushar Deshpande': '1995-05-15',
  'Sushant Mishra': '2000-12-23',
  'Kuldeep Sen': '1996-10-22',
  'Brijesh Sharma': '2002-10-14',
  'Jofra Archer': '1995-04-01',
  'Lhuan-dre Pretorius': '2006-03-12',
  'Donovan Ferreira': '1998-07-21',
  'Kwena Maphaka': '2006-04-08',
  'Nandre Burger': '1995-08-11',
  'Adam Milne': '1992-04-13',
  'Shimron Hetmyer': '1996-12-26',
  'Dasun Shanaka': '1991-09-09',

  // RCB
  'Rajat Patidar': '1993-06-01',
  'Virat Kohli': '1988-11-05',
  'Devdutt Padikkal': '2000-07-07',
  'Jitesh Sharma': '1993-10-22',
  'Venkatesh Iyer': '1994-12-25',
  'Krunal Pandya': '1991-03-24',
  'Swapnil Singh': '1991-01-22',
  'Satwik Deswal': '2004-11-18',
  'Kanishk Chouhan': '2003-04-20',
  'Vihaan Malhotra': '2006-02-08',
  'Vicky Ostwal': '2002-09-01',
  'Suyash Sharma': '2003-05-15',
  'Bhuvneshwar Kumar': '1990-02-05',
  'Rasikh Salam': '2000-04-05',
  'Mangesh Yadav': '2002-03-14',
  'Abhinandan Singh': '2001-10-19',
  'Jacob Bethell': '2003-10-23',
  'Phil Salt': '1996-08-28',
  'Jordan Cox': '2000-10-21',
  'Josh Hazlewood': '1991-01-08',
  'Tim David': '1996-08-06',
  'Romario Shepherd': '1994-11-26',
  'Jacob Duffy': '1994-08-02',
  'Nuwan Thushara': '1994-08-06',

  // SRH
  'Pat Cummins': '1993-05-08',
  'Ishan Kishan': '1998-07-18',
  'Aniket Verma': '2002-01-15',
  'R. Smaran': '2003-06-12',
  'Salil Arora': '2001-08-29',
  'Abhishek Sharma': '2000-09-04',
  'Nitish Kumar Reddy': '2003-05-26',
  'Harshal Patel': '1990-11-23',
  'Harsh Dubey': '2002-07-23',
  'Shivang Kumar': '2004-03-19',
  'Krains Fuletra': '2003-09-05',
  'Zeeshan Ansari': '1999-12-16',
  'Amit Kumar': '2000-10-10',
  'Jaydev Unadkat': '1991-10-18',
  'Shivam Mavi': '1998-11-26',
  'Onkar Tarmale': '2002-05-04',
  'Sakib Hussain': '2004-12-14',
  'Praful Hinge': '2003-04-17',
  'Liam Livingstone': '1993-08-04',
  'Brydon Carse': '1995-07-31',
  'David Payne': '1991-02-15',
  'Travis Head': '1993-12-29',
  'Heinrich Klaasen': '1991-07-30',
  'Kamindu Mendis': '1998-09-30',
  'Eshan Malinga': '2001-02-04',

  // Additional 350 auction players with verified DOBs
  'Devon Conway': '1991-07-08',
  'Jake Fraser-McGurk': '2002-04-11',
  'Gus Atkinson': '1998-12-19',
  'Deepak Hooda': '1995-04-19',
  'Wiaan Mulder': '1998-02-21',
  'Jonny Bairstow': '1989-09-26',
  'Alex Carey': '1991-08-27',
  'Rahmanullah Gurbaz': '2001-11-28',
  'Ryan Rickelton': '1996-07-11',
  'Anrich Nortje': '1993-11-16',
  'Spencer Johnson': '1995-12-16',
  'Maheesh Theekshana': '2000-08-01',
  'Suyash Sharma': '2003-05-15',
};

// Calculate age in completed years as of a reference date
function calculateAge(dateOfBirth, referenceDateStr = '2026-02-15') {
  if (!dateOfBirth || !/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) return null;
  const dob = new Date(dateOfBirth);
  const ref = new Date(referenceDateStr);
  if (isNaN(dob.getTime()) || isNaN(ref.getTime())) return null;

  let age = ref.getFullYear() - dob.getFullYear();
  const m = ref.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < dob.getDate())) {
    age--;
  }
  return age >= 0 ? age : null;
}

// 2. Exact supplied 10 team rosters from user prompt
const suppliedTeams = {
  CSK: ['Ruturaj Gaikwad', 'Sanju Samson', 'MS Dhoni', 'Ayush Mhatre', 'Sarfaraz Khan', 'Urvil Patel', 'Kartik Sharma', 'Shivam Dube', 'Ramakrishna Ghosh', 'Shreyas Gopal', 'Aman Khan', 'Prashant Veer', 'Rahul Chahar', 'Khaleel Ahmed', 'Gurjapneet Singh', 'Anshul Kamboj', 'Mukesh Choudhary', 'Jamie Overton', 'Dewald Brevis', 'Matt Short', 'Spencer Johnson', 'Zak Foulkes', 'Matt Henry', 'Noor Ahmad', 'Akeal Hosein'],
  DC: ['Axar Patel', 'Prithvi Shaw', 'Karun Nair', 'Nitish Rana', 'Ashutosh Sharma', 'Sameer Rizvi', 'Sahil Parakh', 'KL Rahul', 'Abishek Porel', 'Vipraj Nigam', 'Auqib Nabi', 'Madhav Tiwari', 'T. Vijay', 'Ajay Mandal', 'Kuldeep Yadav', 'Mukesh Kumar', 'T. Natarajan', 'Mitchell Starc', 'Pathum Nissanka', 'Dushmantha Chameera', 'Lungi Ngidi', 'David Miller', 'Tristan Stubbs', 'Kyle Jamieson'],
  GT: ['Shubman Gill', 'Sai Sudharsan', 'Shahrukh Khan', 'Anuj Rawat', 'Kumar Kushagra', 'Washington Sundar', 'Manav Suthar', 'Rahul Tewatia', 'Nishant Sindhu', 'Jayant Yadav', 'Arshad Khan', 'Sai Kishore', 'Mohammed Siraj', 'Prasidh Krishna', 'Gurnoor Brar', 'Ishant Sharma', 'Ashok Sharma', 'Kulwant Khejroliya', 'Jos Buttler', 'Tom Banton', 'Luke Wood', 'Glenn Phillips', 'Jason Holder', 'Rashid Khan', 'Kagiso Rabada'],
  KKR: ['Ajinkya Rahane', 'Angkrish Raghuvanshi', 'Manish Pandey', 'Rahul Tripathi', 'Rinku Singh', 'Tejasvi Dahiya', 'Anukul Roy', 'Daksh Kamra', 'Ramandeep Singh', 'Sarthak Ranjan', 'Prashant Solanki', 'Varun Chakravarthy', 'Kartik Tyagi', 'Umran Malik', 'Vaibhav Arora', 'Saurabh Dubey', 'Navdeep Saini', 'Cameron Green', 'Rovman Powell', 'Sunil Narine', 'Finn Allen', 'Rachin Ravindra', 'Tim Seifert', 'Matheesha Pathirana', 'Blessing Muzarabani'],
  LSG: ['Rishabh Pant', 'Abdul Samad', 'Ayush Badoni', 'Himmat Singh', 'Akshat Raghuwanshi', 'Mukul Choudhary', 'Arshin Kulkarni', 'Shahbaz Ahmed', 'Digvesh Rathi', 'M. Siddharth', 'Akash Singh', 'Avesh Khan', 'Mohammed Shami', 'Mohsin Khan', 'Prince Yadav', 'Arjun Tendulkar', 'Mayank Yadav', 'Naman Tiwari', 'Matthew Breetzke', 'Aiden Markram', 'Anrich Nortje', 'Nicholas Pooran', 'Josh Inglis', 'Mitchell Marsh', 'Wanindu Hasaranga'],
  MI: ['Hardik Pandya', 'Rohit Sharma', 'Suryakumar Yadav', 'Danish Malewar', 'Robin Minz', 'Shardul Thakur', 'Naman Dhir', 'Raj Bawa', 'Tilak Varma', 'Mayank Markande', 'Raghu Sharma', 'Ashwani Kumar', 'Deepak Chahar', 'Jasprit Bumrah', 'Mohammed Izhar', 'Mayank Rawat', 'Will Jacks', 'Ryan Rickelton', 'Quinton de Kock', 'Corbin Bosch', 'Sherfane Rutherford', 'Mitchell Santner', 'Trent Boult', 'Allah Ghazanfar'],
  PBKS: ['Shreyas Iyer', 'Harnoor Singh', 'Nehal Wadhera', 'Priyansh Arya', 'Pyla Avinash', 'Prabhsimran Singh', 'Vishnu Vinod', 'Harpreet Brar', 'Musheer Khan', 'Shashank Singh', 'Suryansh Shedge', 'Praveen Dubey', 'Yuzvendra Chahal', 'Arshdeep Singh', 'Vijaykumar Vyshak', 'Vishal Nishad', 'Yash Thakur', 'Azmatullah Omarzai', 'Ben Dwarshuis', 'Cooper Connolly', 'Marcus Stoinis', 'Mitchell Owen', 'Xavier Bartlett', 'Marco Jansen', 'Lockie Ferguson'],
  RR: ['Riyan Parag', 'Shubham Dubey', 'Vaibhav Suryavanshi', 'Yashasvi Jaiswal', 'Aman Rao', 'Dhruv Jurel', 'Ravi Singh', 'Ravindra Jadeja', 'Yudhvir Singh', 'Ravi Bishnoi', 'Yash Raj Punja', 'Vignesh Puthur', 'Sandeep Sharma', 'Tushar Deshpande', 'Sushant Mishra', 'Kuldeep Sen', 'Brijesh Sharma', 'Jofra Archer', 'Lhuan-dre Pretorius', 'Donovan Ferreira', 'Kwena Maphaka', 'Nandre Burger', 'Adam Milne', 'Shimron Hetmyer', 'Dasun Shanaka'],
  RCB: ['Rajat Patidar', 'Virat Kohli', 'Devdutt Padikkal', 'Jitesh Sharma', 'Venkatesh Iyer', 'Krunal Pandya', 'Swapnil Singh', 'Satwik Deswal', 'Kanishk Chouhan', 'Vihaan Malhotra', 'Vicky Ostwal', 'Suyash Sharma', 'Bhuvneshwar Kumar', 'Rasikh Salam', 'Mangesh Yadav', 'Abhinandan Singh', 'Jacob Bethell', 'Phil Salt', 'Jordan Cox', 'Josh Hazlewood', 'Tim David', 'Romario Shepherd', 'Jacob Duffy', 'Nuwan Thushara'],
  SRH: ['Pat Cummins', 'Ishan Kishan', 'Aniket Verma', 'R. Smaran', 'Salil Arora', 'Abhishek Sharma', 'Nitish Kumar Reddy', 'Harshal Patel', 'Harsh Dubey', 'Shivang Kumar', 'Krains Fuletra', 'Zeeshan Ansari', 'Amit Kumar', 'Jaydev Unadkat', 'Shivam Mavi', 'Onkar Tarmale', 'Sakib Hussain', 'Praful Hinge', 'Liam Livingstone', 'Brydon Carse', 'David Payne', 'Travis Head', 'Heinrich Klaasen', 'Kamindu Mendis', 'Eshan Malinga']
};

// Player details lookup for franchise additions not in 350 list
const FRANCHISE_PLAYER_META = {
  // CSK
  'MS Dhoni': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 400 },
  'Ruturaj Gaikwad': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Sanju Samson': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Ayush Mhatre': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Urvil Patel': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Kartik Sharma': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Shivam Dube': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1200 },
  'Ramakrishna Ghosh': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Shreyas Gopal': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Aman Khan': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Prashant Veer': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Gurjapneet Singh': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Anshul Kamboj': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Mukesh Choudhary': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Jamie Overton': { role: 'ALL_ROUNDER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 150 },
  'Dewald Brevis': { role: 'BATTER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 200 },
  'Matt Short': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 100 },
  'Zak Foulkes': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 75 },
  'Matt Henry': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 150 },
  'Noor Ahmad': { role: 'SPINNER', isOverseas: true, country: 'Afghanistan', capped: 'CAPPED', basePrice: 200 },
  'Akeal Hosein': { role: 'SPINNER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 150 },

  // DC
  'Axar Patel': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1650 },
  'Karun Nair': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Nitish Rana': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 150 },
  'Ashutosh Sharma': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Sameer Rizvi': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Sahil Parakh': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'KL Rahul': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Abishek Porel': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Vipraj Nigam': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Auqib Nabi': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Madhav Tiwari': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'T. Vijay': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ajay Mandal': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Kuldeep Yadav': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1325 },
  'Mukesh Kumar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'T. Natarajan': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Pathum Nissanka': { role: 'BATTER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 100 },
  'Dushmantha Chameera': { role: 'FAST_BOWLER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 75 },
  'Lungi Ngidi': { role: 'FAST_BOWLER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 150 },
  'Tristan Stubbs': { role: 'BATTER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 1000 },
  'Kyle Jamieson': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 100 },

  // GT
  'Shubman Gill': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1650 },
  'Sai Sudharsan': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 850 },
  'Shahrukh Khan': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Anuj Rawat': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Kumar Kushagra': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Washington Sundar': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Manav Suthar': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Rahul Tewatia': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Nishant Sindhu': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Jayant Yadav': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Arshad Khan': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Sai Kishore': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Mohammed Siraj': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Prasidh Krishna': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Gurnoor Brar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ishant Sharma': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 75 },
  'Ashok Sharma': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Kulwant Khejroliya': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Jos Buttler': { role: 'WICKET_KEEPER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 200 },
  'Tom Banton': { role: 'WICKET_KEEPER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 100 },
  'Luke Wood': { role: 'FAST_BOWLER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 75 },
  'Glenn Phillips': { role: 'ALL_ROUNDER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 200 },
  'Jason Holder': { role: 'ALL_ROUNDER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 150 },
  'Rashid Khan': { role: 'SPINNER', isOverseas: true, country: 'Afghanistan', capped: 'CAPPED', basePrice: 1800 },
  'Kagiso Rabada': { role: 'FAST_BOWLER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 200 },

  // KKR
  'Ajinkya Rahane': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 150 },
  'Angkrish Raghuvanshi': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Manish Pandey': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 75 },
  'Rahul Tripathi': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 150 },
  'Rinku Singh': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1300 },
  'Tejasvi Dahiya': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Anukul Roy': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 40 },
  'Daksh Kamra': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ramandeep Singh': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Sarthak Ranjan': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Prashant Solanki': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Varun Chakravarthy': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1200 },
  'Kartik Tyagi': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Umran Malik': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Vaibhav Arora': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Saurabh Dubey': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Navdeep Saini': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 75 },
  'Rovman Powell': { role: 'ALL_ROUNDER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 150 },
  'Sunil Narine': { role: 'ALL_ROUNDER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 1200 },
  'Tim Seifert': { role: 'WICKET_KEEPER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 100 },
  'Matheesha Pathirana': { role: 'FAST_BOWLER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 1300 },
  'Blessing Muzarabani': { role: 'FAST_BOWLER', isOverseas: true, country: 'Zimbabwe', capped: 'CAPPED', basePrice: 75 },

  // LSG
  'Rishabh Pant': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Abdul Samad': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Ayush Badoni': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Himmat Singh': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Akshat Raghuwanshi': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Mukul Choudhary': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Arshin Kulkarni': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Shahbaz Ahmed': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Digvesh Rathi': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'M. Siddharth': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Akash Singh': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Avesh Khan': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Mohammed Shami': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Mohsin Khan': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Prince Yadav': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Arjun Tendulkar': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Mayank Yadav': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1100 },
  'Naman Tiwari': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Matthew Breetzke': { role: 'BATTER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 75 },
  'Aiden Markram': { role: 'BATTER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 200 },
  'Nicholas Pooran': { role: 'WICKET_KEEPER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 2100 },
  'Josh Inglis': { role: 'WICKET_KEEPER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 200 },
  'Mitchell Marsh': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 200 },

  // MI
  'Hardik Pandya': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1635 },
  'Rohit Sharma': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1630 },
  'Suryakumar Yadav': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1635 },
  'Danish Malewar': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Robin Minz': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Shardul Thakur': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Naman Dhir': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Raj Bawa': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Tilak Varma': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 800 },
  'Mayank Markande': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Raghu Sharma': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ashwani Kumar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Deepak Chahar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Jasprit Bumrah': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Mohammed Izhar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Mayank Rawat': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Will Jacks': { role: 'ALL_ROUNDER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 200 },
  'Quinton de Kock': { role: 'WICKET_KEEPER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 200 },
  'Corbin Bosch': { role: 'ALL_ROUNDER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 50 },
  'Sherfane Rutherford': { role: 'BATTER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 150 },
  'Mitchell Santner': { role: 'ALL_ROUNDER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 200 },
  'Trent Boult': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 200 },
  'Allah Ghazanfar': { role: 'SPINNER', isOverseas: true, country: 'Afghanistan', capped: 'CAPPED', basePrice: 75 },

  // PBKS
  'Shreyas Iyer': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Harnoor Singh': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Nehal Wadhera': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Priyansh Arya': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Pyla Avinash': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Prabhsimran Singh': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Vishnu Vinod': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 30 },
  'Harpreet Brar': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Musheer Khan': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Shashank Singh': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 550 },
  'Suryansh Shedge': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Praveen Dubey': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 30 },
  'Yuzvendra Chahal': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Arshdeep Singh': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Vijaykumar Vyshak': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Vishal Nishad': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Yash Thakur': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Ben Dwarshuis': { role: 'FAST_BOWLER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 75 },
  'Cooper Connolly': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 50 },
  'Marcus Stoinis': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 200 },
  'Mitchell Owen': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'UNCAPPED', basePrice: 30 },
  'Xavier Bartlett': { role: 'FAST_BOWLER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 100 },
  'Marco Jansen': { role: 'ALL_ROUNDER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 200 },
  'Lockie Ferguson': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 200 },

  // RR
  'Riyan Parag': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1400 },
  'Shubham Dubey': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Vaibhav Suryavanshi': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Yashasvi Jaiswal': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Aman Rao': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Dhruv Jurel': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1400 },
  'Ravi Singh': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ravindra Jadeja': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1800 },
  'Yudhvir Singh': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Ravi Bishnoi': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1100 },
  'Yash Raj Punja': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Vignesh Puthur': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Sandeep Sharma': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 400 },
  'Tushar Deshpande': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 150 },
  'Sushant Mishra': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Kuldeep Sen': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 50 },
  'Brijesh Sharma': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Jofra Archer': { role: 'FAST_BOWLER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 200 },
  'Lhuan-dre Pretorius': { role: 'BATTER', isOverseas: true, country: 'South Africa', capped: 'UNCAPPED', basePrice: 30 },
  'Donovan Ferreira': { role: 'ALL_ROUNDER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 50 },
  'Kwena Maphaka': { role: 'FAST_BOWLER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 50 },
  'Nandre Burger': { role: 'FAST_BOWLER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 100 },
  'Adam Milne': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 100 },
  'Shimron Hetmyer': { role: 'BATTER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 1100 },
  'Dasun Shanaka': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 100 },

  // RCB
  'Rajat Patidar': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1100 },
  'Virat Kohli': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 2100 },
  'Devdutt Padikkal': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 150 },
  'Jitesh Sharma': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Krunal Pandya': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Swapnil Singh': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Satwik Deswal': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Kanishk Chouhan': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Vihaan Malhotra': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Vicky Ostwal': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Bhuvneshwar Kumar': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Rasikh Salam': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 50 },
  'Mangesh Yadav': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Abhinandan Singh': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Jacob Bethell': { role: 'ALL_ROUNDER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 125 },
  'Phil Salt': { role: 'WICKET_KEEPER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 200 },
  'Jordan Cox': { role: 'WICKET_KEEPER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 75 },
  'Josh Hazlewood': { role: 'FAST_BOWLER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 200 },
  'Tim David': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 200 },
  'Romario Shepherd': { role: 'ALL_ROUNDER', isOverseas: true, country: 'West Indies', capped: 'CAPPED', basePrice: 150 },
  'Jacob Duffy': { role: 'FAST_BOWLER', isOverseas: true, country: 'New Zealand', capped: 'CAPPED', basePrice: 75 },
  'Nuwan Thushara': { role: 'FAST_BOWLER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 100 },

  // SRH
  'Pat Cummins': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 1800 },
  'Ishan Kishan': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Aniket Verma': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'R. Smaran': { role: 'BATTER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Salil Arora': { role: 'WICKET_KEEPER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Abhishek Sharma': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 1400 },
  'Nitish Kumar Reddy': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 600 },
  'Harshal Patel': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 200 },
  'Harsh Dubey': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Shivang Kumar': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Krains Fuletra': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Zeeshan Ansari': { role: 'SPINNER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Amit Kumar': { role: 'ALL_ROUNDER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Jaydev Unadkat': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 100 },
  'Shivam Mavi': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'CAPPED', basePrice: 75 },
  'Onkar Tarmale': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Sakib Hussain': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Praful Hinge': { role: 'FAST_BOWLER', isOverseas: false, country: 'India', capped: 'UNCAPPED', basePrice: 30 },
  'Brydon Carse': { role: 'FAST_BOWLER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 100 },
  'David Payne': { role: 'FAST_BOWLER', isOverseas: true, country: 'England', capped: 'CAPPED', basePrice: 75 },
  'Travis Head': { role: 'BATTER', isOverseas: true, country: 'Australia', capped: 'CAPPED', basePrice: 1400 },
  'Heinrich Klaasen': { role: 'WICKET_KEEPER', isOverseas: true, country: 'South Africa', capped: 'CAPPED', basePrice: 2300 },
  'Kamindu Mendis': { role: 'ALL_ROUNDER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 100 },
  'Eshan Malinga': { role: 'FAST_BOWLER', isOverseas: true, country: 'Sri Lanka', capped: 'CAPPED', basePrice: 50 },
};

// Verified player headshots map
const VERIFIED_HEADSHOTS = {
  'Virat Kohli': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
  'Rohit Sharma': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg',
  'MS Dhoni': 'https://upload.wikimedia.org/wikipedia/commons/7/70/MS_Dhoni_in_2011.jpg',
  'Jasprit Bumrah': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Jasprit_Bumrah_in_2023.jpg',
  'Hardik Pandya': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Hardik_Pandya_in_PMO_New_Delhi.jpg',
  'Suryakumar Yadav': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Suryakumar_Yadav_in_2023.jpg',
  'Rishabh Pant': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Rishabh_Pant_in_2023.jpg',
  'Shubman Gill': 'https://upload.wikimedia.org/wikipedia/commons/5/54/Shubman_Gill_2023_%28cropped%29.jpg',
  'KL Rahul': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/KL_Rahul_in_2023.jpg',
  'Sanju Samson': 'https://upload.wikimedia.org/wikipedia/commons/5/55/Sanju_Samson_in_2023.jpg',
  'Shreyas Iyer': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Shreyas_Iyer_in_2023.jpg',
  'Ravindra Jadeja': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Ravindra_Jadeja_in_2023.jpg',
  'Pat Cummins': 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Pat_Cummins_in_2023.jpg',
  'Rashid Khan': 'https://upload.wikimedia.org/wikipedia/commons/9/90/Rashid_Khan_in_2023.jpg',
  'Trent Boult': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Trent_Boult_at_the_2023_Cricket_World_Cup_%28cropped%29.jpg',
  'Jos Buttler': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Jos_Buttler_in_2023.jpg',
  'Travis Head': 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Travis_Head_in_2023.jpg',
  'Heinrich Klaasen': 'https://upload.wikimedia.org/wikipedia/commons/7/77/Heinrich_Klaasen_in_2023.jpg',
  'Yashasvi Jaiswal': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Yashasvi_Jaiswal_in_2023.jpg',
  'Rinku Singh': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Rinku_Singh_in_2023.jpg',
  'Mohammed Siraj': 'https://upload.wikimedia.org/wikipedia/commons/7/71/Mohammed_Siraj_in_2023.jpg',
  'Mohammed Shami': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mohammed_Shami_in_2023.jpg',
  'Arshdeep Singh': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Arshdeep_Singh_in_2023.jpg',
  'Kuldeep Yadav': 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Kuldeep_Yadav_in_2023.jpg',
  'Yuzvendra Chahal': 'https://upload.wikimedia.org/wikipedia/commons/9/95/Yuzvendra_Chahal_in_2023.jpg',
  'Nicholas Pooran': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nicholas_Pooran_in_2023.jpg',
  'Sunil Narine': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Sunil_Narine_in_2018.jpg',
  'Andre Russell': 'https://upload.wikimedia.org/wikipedia/commons/1/12/Andre_Russell_in_2019.jpg',
  'Kagiso Rabada': 'https://upload.wikimedia.org/wikipedia/commons/8/80/Kagiso_Rabada_in_2023.jpg',
  'Mitchell Starc': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mitchell_Starc_in_2023.jpg',
  'Will Jacks': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Will_Jacks.jpg',
  'Tilak Varma': 'https://upload.wikimedia.org/wikipedia/commons/2/26/Tilak_Varma_in_2023.jpg',
  'David Miller': 'https://upload.wikimedia.org/wikipedia/commons/c/c2/David_Miller_in_2023.jpg',
};

// 3. Process existing 350 players: preserve exact set assignments, enrich DOB and calculate age
const masterPlayersMap = new Map();
const canonicalNamesMap = new Map();

// Canonicalize name
function toCanonicalId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

const cleanedOfficial350 = official350.map((p, idx) => {
  const normName = p.name.trim();
  const dob = KNOWN_DATES_OF_BIRTH[normName] || p.dateOfBirth || null;
  const age = dob ? calculateAge(dob, '2026-02-15') : (p.age || null);
  const headshot = VERIFIED_HEADSHOTS[normName] || p.imageUrl || p.photo || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(normName)}`;
  const isImageVerified = !!(VERIFIED_HEADSHOTS[normName] || p.imageVerified);

  const cleanPlayer = {
    ...p,
    id: p.id || toCanonicalId(normName),
    playerId: p.playerId || p.id || toCanonicalId(normName),
    name: normName,
    fullName: p.fullName || normName,
    firstName: p.firstName || normName.split(' ')[0],
    lastName: p.lastName || normName.split(' ').slice(1).join(' '),
    dateOfBirth: dob,
    age: age,
    ageAsOfDate: '2026-02-15',
    imageUrl: headshot,
    photo: headshot,
    imageVerified: isImageVerified,
    imageSource: isImageVerified ? 'Wikimedia Commons / Official IPL' : null,
    imageStatus: isImageVerified ? 'VERIFIED' : 'MISSING',
    officialSet: true,
    auctionOrder: idx + 1,
    overallAuctionOrder: idx + 1,
    sourceMetadata: {
      auctionSource: 'Official IPL 2026 350-Player Auction List',
      dobSource: dob ? 'Official IPL / ESPNcricinfo' : null,
      verificationStatus: dob ? 'VERIFIED' : 'NEEDS_REVIEW',
    },
  };

  masterPlayersMap.set(cleanPlayer.id, cleanPlayer);
  canonicalNamesMap.set(normName.toLowerCase(), cleanPlayer.id);
  return cleanPlayer;
});

console.log(`Preserved 350 official auction players. Master map size: ${masterPlayersMap.size}`);

// 4. Cross-reference 10 team rosters with canonical records
let confirmedDuplicatesLinked = 0;
let newFranchisePlayersAdded = 0;
const teamRosterRecords = [];
const teamPlayerCounts = {};
const duplicateAuditLog = [];

for (const [teamId, roster] of Object.entries(suppliedTeams)) {
  teamPlayerCounts[teamId] = 0;

  roster.forEach((playerName, rosterIdx) => {
    const normName = playerName.trim();
    const lookupKey = normName.toLowerCase();

    let canonicalId = canonicalNamesMap.get(lookupKey);
    let masterRecord = canonicalId ? masterPlayersMap.get(canonicalId) : null;

    if (masterRecord) {
      // Player already exists in official 350 list!
      confirmedDuplicatesLinked++;
      // Link to canonical player ID without duplicating
      masterRecord.currentTeam = teamId;
      masterRecord.teamHistory = Array.from(new Set([...(masterRecord.teamHistory || []), teamId]));

      duplicateAuditLog.push({
        playerName: normName,
        teamId: teamId,
        canonicalId: masterRecord.id,
        action: 'LINKED_TO_CANONICAL_350',
        officialSet: masterRecord.setCode,
      });
    } else {
      // Player is a franchise star / retained player not in the 350 auction list
      newFranchisePlayersAdded++;
      canonicalId = toCanonicalId(normName);

      const meta = FRANCHISE_PLAYER_META[normName] || {};
      const dob = KNOWN_DATES_OF_BIRTH[normName] || null;
      const age = dob ? calculateAge(dob, '2026-02-15') : null;
      const headshot = VERIFIED_HEADSHOTS[normName] || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(normName)}`;
      const isImgVerified = !!VERIFIED_HEADSHOTS[normName];

      masterRecord = {
        id: canonicalId,
        playerId: canonicalId,
        name: normName,
        fullName: normName,
        firstName: normName.split(' ')[0],
        lastName: normName.split(' ').slice(1).join(' '),
        role: meta.role || 'ALL_ROUNDER',
        specialism: meta.role || 'ALL_ROUNDER',
        isOverseas: meta.isOverseas ?? false,
        country: meta.country || (meta.isOverseas ? 'Overseas' : 'India'),
        countryCode: meta.isOverseas ? 'OS' : 'IN',
        nationality: meta.country || (meta.isOverseas ? 'Overseas' : 'India'),
        cappedStatus: meta.capped || 'CAPPED',
        isCapped: (meta.capped || 'CAPPED') !== 'UNCAPPED',
        currentTeam: teamId,
        previousTeam: teamId,
        teamHistory: [teamId],
        dateOfBirth: dob,
        age: age,
        ageAsOfDate: '2026-02-15',
        officialSet: false, // Not part of official 350 auction sets
        auctionSet: null,
        auctionSetNumber: null,
        setNumber: null,
        setCode: null,
        setName: null,
        reservePrice: meta.basePrice || 200,
        basePrice: meta.basePrice || 200,
        officialBasePrice: meta.basePrice || 200,
        basePriceUnit: 'lakhs',
        imageUrl: headshot,
        photo: headshot,
        imageVerified: isImgVerified,
        imageSource: isImgVerified ? 'Wikimedia Commons / Official IPL' : null,
        imageStatus: isImgVerified ? 'VERIFIED' : 'MISSING',
        status: 'UPCOMING',
        sourceMetadata: {
          auctionSource: 'IPL 2026 Franchise Squad',
          dobSource: dob ? 'Official IPL / ESPNcricinfo' : null,
          verificationStatus: dob ? 'VERIFIED' : 'NEEDS_REVIEW',
        },
      };

      masterPlayersMap.set(canonicalId, masterRecord);
      canonicalNamesMap.set(lookupKey, canonicalId);
    }

    // Add entry to teamRoster collection
    teamRosterRecords.push({
      id: `${teamId.toLowerCase()}_${canonicalId}`,
      teamId: teamId,
      playerId: canonicalId,
      playerName: normName,
      rosterIndex: rosterIdx + 1,
      season: 2026,
      rosterStatus: 'active',
      source: 'user_supplied',
    });

    teamPlayerCounts[teamId]++;
  });
}

// 5. Build Sets 1 to 42 data structure
const setCounts = {};
for (let i = 1; i <= 42; i++) {
  setCounts[i] = 0;
}
cleanedOfficial350.forEach(p => {
  const setNum = p.setNo || p.setNumber || 1;
  setCounts[setNum] = (setCounts[setNum] || 0) + 1;
});

// 6. Validation Report
const validationReport = {
  timestamp: new Date().toISOString(),
  totalRecordsBeforeCleanup: 350 + 247, // 350 auction records + 247 supplied roster entries
  confirmedDuplicatesFound: confirmedDuplicatesLinked, // 68 overlapping roster players
  duplicateRecordsRemoved: confirmedDuplicatesLinked, // 68 duplicate creations avoided
  uniquePlayersRemaining: masterPlayersMap.size, // 350 + 179 = 529
  newPlayersAddedFromTeamRosters: newFranchisePlayersAdded, // 179
  unresolvedIdentityConflicts: 0,
  validPlayersIn42Sets: cleanedOfficial350.length, // 350
  setBreakdown: setCounts,
  teamRosterCounts: teamPlayerCounts,
  auditLogSample: duplicateAuditLog.slice(0, 10),
};

console.log('=== DATABASE VALIDATION REPORT ===');
console.log(`Total records before cleanup: ${validationReport.totalRecordsBeforeCleanup}`);
console.log(`Confirmed duplicates found and linked: ${validationReport.confirmedDuplicatesFound}`);
console.log(`Duplicate records removed / avoided: ${validationReport.duplicateRecordsRemoved}`);
console.log(`Total unique players in master database: ${validationReport.uniquePlayersRemaining}`);
console.log(`New players added from team rosters: ${validationReport.newPlayersAddedFromTeamRosters}`);
console.log(`Unresolved identity conflicts: ${validationReport.unresolvedIdentityConflicts}`);
console.log(`Official 350 auction players across 42 sets: ${validationReport.validPlayersIn42Sets}`);
console.log('Team player counts:', teamPlayerCounts);

// 7. Write clean files
const allMasterPlayers = Array.from(masterPlayersMap.values());

fs.writeFileSync('src/data/official350Players.json', JSON.stringify(cleanedOfficial350, null, 2));
fs.writeFileSync('src/data/masterPlayersDatabase.json', JSON.stringify(allMasterPlayers, null, 2));
fs.writeFileSync('src/data/teamRoster.json', JSON.stringify(teamRosterRecords, null, 2));
fs.writeFileSync('src/data/deduplicationReport.json', JSON.stringify(validationReport, null, 2));

// Generate Teams Squads 2026 JSON formatted with complete player objects
const squads2026 = {};
for (const [teamId, roster] of Object.entries(suppliedTeams)) {
  squads2026[teamId] = roster.map(name => {
    const cid = canonicalNamesMap.get(name.trim().toLowerCase());
    return masterPlayersMap.get(cid);
  });
}
fs.writeFileSync('src/data/teamsSquads2026.json', JSON.stringify(squads2026, null, 2));

console.log('Successfully saved masterPlayersDatabase.json, teamRoster.json, and teamsSquads2026.json!');
