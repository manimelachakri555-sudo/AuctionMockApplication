import fs from 'fs';
import path from 'path';

// 1. Team Logos Updates
const teamLogosPath = path.resolve('src/data/teamLogos.ts');
let teamLogosContent = fs.readFileSync(teamLogosPath, 'utf8');

// Update LSG and RR
teamLogosContent = teamLogosContent.replace(
  /LSG:\s*["'][^"']+["']/,
  'LSG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3Lbz-B9khowZoT1oovEPBqqoTVwzHk6-CBOJV1F-MQ&s=10"'
);
teamLogosContent = teamLogosContent.replace(
  /RR:\s*["'][^"']+["']/,
  'RR: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19mYdJ_9C4JQaAWsSgP0hU00oFKTRdpm0bmLz0Ws7KQ&s=10"'
);
fs.writeFileSync(teamLogosPath, teamLogosContent);
console.log('Updated teamLogos.ts for LSG and RR.');

// 2. Player mappings
const playerMappings = [
  // User batch 1
  { name: 'Fazalhaq Farooqi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqcDIUa6X8Cs8wWqwrTUFjEzjisuoeHyxv7ZBUS4s_A&s=10' },
  { name: 'Matt Henry', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkat236j9dgzsKG77iEj0gdSCLZF7z4lJe7LcSUXbkeg&s=10' },
  { name: 'Kyle Jamieson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQguDjwHQqMd6gquD1bYZxJIe2jO7WtgSXVLPDJaMxNKg&s=10' },
  { name: 'Umesh Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrOw8AUoipmhF1Fc_KVp1yOfSlBQLhP8_SD5qzYDe4g&s=10' },
  { name: 'Naveen-ul-Haq', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8i3t9ylzyY09hKmxeEJgQI6ccx5YurRSyzYytxkffg&s=10' },
  { name: 'Rishad Hossain', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5sr0JxKNfXB3pYu2oQmYmu5-LKt7meDwdffbw_Y9EFQ&s=10' },
  { name: 'Pulkit Narang', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSzzjyrT_HXSgy6XtAqb5hbEbusxFnIbhz9g6CThCweA&s=10' },
  { name: 'Taskin Ahmed', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2VO82F0Kl_4O7vjBOnlLnl449DbY-BV-lo9W2y4gaKQ&s=10' },

  // User batch 2 (92 set-wise players)
  { id: 'wiaan-mulder_al1_06', name: 'Wiaan Mulder', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgOxtFRVeuNsEtyINeeRY5Ccam6X6XFojci8eyrplag&s=10' },
  { id: 'mujeeb-rahman_sp1_04', name: 'Mujeeb Rahman', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u7t4NBNSHa3NS2BNo2HWbS1XnPB9IW4hBsNK-qLpPw&s=10' },
  { id: 'aarya-desai_uba1_01', name: 'Aarya Desai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq57ZvQ-NWE05FfS0wOZKJH4E4PavUpWdGnuzcn5u0jA&s=10' },
  { id: 'yash-dhull_uba1_02', name: 'Yash Dhull', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VCL5hhxQePMP73Ulp_g-kY33OCj9rI0dgIFnKZfysg&s=10' },
  { id: 'abhinav-tejrana_uba1_06', name: 'Abhinav Tejrana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONXVW4APZJt8GW-BQ-3EA0pB8-vwB0Okg3wVGyzGeWw&s=10' },
  { id: 'auqib-dar_ual1_01', name: 'Auqib Dar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWuSkEIdF3qMAhefz9-EOXlpTuPPmzuoiWgcghnyRqg&s=10' },
  { id: 'rajvardhan-hangargekar_ual1_02', name: 'Rajvardhan Hangargekar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQjrRkMD3Kd3Vkwe9a1ve3XcEYbU6jgWYAl58IOYCrA&s=10' },
  { id: 'edhen-tom_ual1_09', name: 'Edhen Tom', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKkt0XcedDJiA0DWrCgpAAIqYCmR8rEf-UIt836Zb3w&s=10' },
  { id: 'prashant-veer_ual1_10', name: 'Prashant Veer', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtpDUpo0jWj9P0X3mOfWbSZDJRSgQBC5d-UqNO61fcg&s=10' },
  { id: 'ruchit-ahir_uwk1_01', name: 'Ruchit Ahir', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSQbI5eC1_JeOA0XK3Uzt9ygY7QfZyXwi9bsW465Yqw&s=10' },
  { id: 'vansh-bedi_uwk1_02', name: 'Vansh Bedi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3MQPd-ewfliZify-oKmF9uoM_rPWrrv7ZEZ8cmnYNQ&s=10' },
  { id: 'tushar-raheja_uwk1_04', name: 'Tushar Raheja', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6YRc7nLVSnRCg2GfzwRRagXi0NFkDhCgVVeYTyUXdQ&s=10' },
  { id: 'kartik-sharma_uwk1_05', name: 'Kartik Sharma', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aT9qBKcx26IUgRz0IopWJTBcPxuTz7tJODkY4PCeQw&s=10' },
  { id: 'tejasvi-singh_uwk1_06', name: 'Tejasvi Singh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNBphJivkQcbrNTfPJxMR8sxiRRh4U7y2zpn38zyg_Q&s=10' },
  { id: 'raj-limbani_ufa1_01', name: 'Raj Limbani', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNE7mA0nL2Owen2ttMx8BntYoZ0zfqahVM854h3u45w&s=10' },
  { id: 'shivam-shukla_usp1_04', name: 'Shivam Shukla', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KgALXEA1MEWV-j3xkbJJ6q73Lo3YFC_LcZDz-r5CLQ&s=10' },
  { id: 'wahidullah-zadran_usp1_07', name: 'Wahidullah Zadran', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIel91QCGJes6V3VIflrCEtL5CSjCvxN3jmxhemDVww&s=10' },
  { id: 'sediqullah-atal_ba2_02', name: 'Sediqullah Atal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5RjOlIvr6pOVpBYqnG7MKAsSDx3rF_otk-KYLvl-Sg&s=10' },
  { id: 'ackeem-auguste_ba2_03', name: 'Ackeem Auguste', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZTracA5yGod2HoTe17wLrWpQM7FsBq0FiQK59ZELMg&s=10' },
  { id: 'reeza-hendricks_ba2_04', name: 'Reeza Hendricks', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXWMEftigwDQ035pa8t4049-lqY8FXvFIGkET1tAH6A&s=10' },
  { id: 'pathum-nissanka_ba2_05', name: 'Pathum Nissanka', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-qdbRfZFGtGqns5y1VC2Un2FZXY6pMIsEel1DpVClA&s=10' },
  { id: 'tim-robinson_ba2_06', name: 'Tim Robinson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRcF7FR5rwDIndljE4vgDQNTLZsGhwpFuqzf7SnB2dw&s=10' },
  { id: 'michael-bracewell_al2_02', name: 'Michael Bracewell', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSegg0BGzgP3SlPOZinjg-iu9gcR9-sX0mcHz2mMTUmIQ&s=10' },
  { id: 'zak-foulkes_al2_04', name: 'Zak Foulkes', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCyiGYAH1yzI55CeWNoNb083FQTTnpQnRgqcpX5kZ6Q&s=10' },
  { id: 'daniel-sams_al2_07', name: 'Daniel Sams', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8xoXGjufXDBRQ86XD2XOTypQY1sC2XWqf4I8H4liRw&s=10' },
  { id: 'matthew-short_al2_09', name: 'Matthew Short', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFMd80Ve9Ub84EVKOcYHBuIm7lMgHZh3ZvJYWYT0XMg&s=10' },
  { id: 'ben-mcdermott_wk2_05', name: 'Ben McDermott', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvJuDJxoYE0DKKZVJ9Aid1rZujNGNxrKPi9EwueWp6A&s=10' },
  { id: 'kusal-mendis_wk2_06', name: 'Kusal Mendis', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqVJoAYAJRZyl73stC6x0BB2OqRZNoNLaTNk_Y_Tt2Q&s=10' },
  { id: 'kusal-perera_wk2_07', name: 'Kusal Perera', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK1Em0RJ46la0yJ23iLbyw6ORtRqcxDhYSMtXm7mRXg&s=10' },
  { id: 'saqib-mahmood_fa2_02', name: 'Saqib Mahmood', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn8SoHN92jJMs7nEd3kS9SxWbgBLON_b_ToXvkcClJA&s=10' },
  { id: 'william-o-rourke_fa2_05', name: 'William O’Rourke', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOcRNnCWsAA99fawSPUK2fuDwWTjIWc4uSJ1IAW4yRA&s=10' },
  { id: 'qais-ahmad_sp2_01', name: 'Qais Ahmad', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5McBLNCHJ8m_nsB1nVwV7RecTf3vYybXXE-Orqgmog&s=10' },
  { id: 'waqar-salamkheil_sp2_03', name: 'Waqar Salamkheil', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOggUGnmmW21Ai-han7WNz3TpwH2k5NoUYWF5jULKeA&s=10' },
  { id: 'viyaskanth-vijayakanth_sp2_04', name: 'Viyaskanth Vijayakanth', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzNja2jxrnvFC97Ll7ookTd-9JkQpMT4qt6oz8jv4zQ&s=10' },
  { id: 'ankit-kumar_uba2_01', name: 'Ankit Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJCf8aKITxeM8rCr3ZYD2pAVsvmKFfYCcxSCGq0LcOg&s=10' },
  { id: 'pukhraj-mann_uba2_04', name: 'Pukhraj Mann', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPacCh2NqUCfyOfGQ41qxlFSVXu5ACdglI29YsuG9eag&s=10' },
  { id: 'salman-nizar_uba2_05', name: 'Salman Nizar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31-iJrZJnmvnNMOJGgSmGFDlwtVuaKS1qCORVvRwWgg&s=10' },
  { id: 'aman-rao-perala_uba2_06', name: 'Aman Rao Perala', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzw2mjNxGY9Heveiv-AEOnE194wmS4-VwCf90dZ3bm9Q&s=10' },
  { id: 'manan-vohra_uba2_08', name: 'Manan Vohra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDi57kdC5C2HzPuDby6577XHcvt9PxuOh0EVgtWoa0LA&s=10' },
  { id: 'yuvraj-chaudhary_ual2_01', name: 'Yuvraj Chaudhary', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfA5aq7woFE7ICBunUE221mFlcjLzBNRe1rQ01793a2w&s=10' },
  { id: 'satvik-deswal_ual2_02', name: 'Satvik Deswal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHxt9hcI2puDVy_E4M7i-U3ay08Mf0cscJ37lF7SsWgA&s=10' },
  { id: 'aman-khan_ual2_03', name: 'Aman Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB1PlV8EkSZ4jLtK9m2JQiZghRg7uXpj-xs_dxcZNi-A&s=10' },
  { id: 'darshan-nalkande_ual2_04', name: 'Darshan Nalkande', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarW6_jcTPW3opgikAK8du8v2i1uZK_AKngCSlecizvg&s=10' },
  { id: 'sairaj-patil_ual2_06', name: 'Sairaj Patil', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxNso5v7bmR8vq1j0aF0mOjdfBC9IjOkEtEstVCdWWQ&s=10' },
  { id: 'suyash-prabhudessai_ual2_07', name: 'Suyash Prabhudessai', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmbWxCEsHdY43s8cl3wPnSk9mGW1BSPRstH4ZWgJS7Q&s=10' },
  { id: 'harsh-tyagi_ual2_09', name: 'Harsh Tyagi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVOBFCk5UJrQRAXnycZMbiPc1bA2XDhtS1JK746HfWA&s=10' },
  { id: 'ricky-bhui_uwk2_02', name: 'Ricky Bhui', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIEKF534J6Sq432q_aTVYdH0r9sNurO81DR6oXZZ_tw&s=10' },
  { id: 'rahul-buddhi_uwk2_03', name: 'Rahul Buddhi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tp2x0A2N7Qt7VXRerYRrFf3NsI2en8rua0n1_hEd8A&s=10' },
  { id: 'saurav-chauhan_uwk2_04', name: 'Saurav Chauhan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsesnFaWx4cdotP24Ie_VkjZcQLx8SyFicXXrHCmeYQ&s=10' },
  { id: 'yashvardhan-dalal_uwk2_05', name: 'Yashvardhan Dalal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5e_RxQ6QNKk4ZQQRUzi_mAKk1l2Vg4dbRwCSrdEZX3A&s=10' },
  { id: 'abhishek-pathak_uwk2_06', name: 'Abhishek Pathak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUseTsq1QokEeuWbRHDj3ExF1vTcpz_9aEFKZ6sPpbQ&s=10' },
  { id: 'kunal-rathore_uwk2_07', name: 'Kunal Rathore', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYHzuYC_IjlAW-cyz-GungE9jecKF1TB2Fy8fuMqRrQ&s=10' },
  { id: 'mohammad-izhar_ufa2_03', name: 'Mohammad Izhar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iqleTrV52cdpMrg8eDieKeMi6gpoABNv814KDIXYZw&s=10' },
  { id: 'vijay-kumar_ufa2_05', name: 'Vijay Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRliSj6_MKAC8FXL0L-ZW2blMOle9onFY_R1dH9usgZAA&s=10' },
  { id: 'vidyadhar-patil_ufa2_06', name: 'Vidyadhar Patil', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_OkkAlipQlZhRkVH-YbMU4PCrFYxE4i9hZwz58Z9HA&s=10' },
  { id: 'pv-satyanarayana-raju_ufa2_07', name: 'PV Satyanarayana Raju', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJ3B4w5WHe9_xlECDuh7E4KvXJ2zwuUfi5DUgTSxlZw&s=10' },
  { id: 'prithviraj-yarra_ufa2_09', name: 'Prithviraj Yarra', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8dwbZxjr0m2f8FpsScm_jp_-J8s57uECg_4EA9zYUw&s=10' },
  { id: 'shubham-agrawal_usp2_01', name: 'Shubham Agrawal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwf8426QfVUwz-HXE4-I2ypjDia01v_kX1yo6lMtEPA&s=10' },
  { id: 'tejas-baroka_usp2_03', name: 'Tejas Baroka', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQGceY4XeuAhekSPwl4IcWHI7J0Yjqh8-BQtfWcBiPA&s=10' },
  { id: 'kc-cariappa_usp2_04', name: 'KC Cariappa', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvcjQ5M570o50tdfe3xFt-zxSp-Cu-ZYL8X5eRCn8IQ&s=10' },
  { id: 'kartik-chadha_usp2_05', name: 'Kartik Chadha', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4NCQ9VlSLpHfPLAEDaPL9VlWRFMzTccp-WqWABd6YQ&s=10' },
  { id: 'pravin-dubey_usp2_06', name: 'Pravin Dubey', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTRjegITzgQZ3JleIrolJQoN2MB-I1POkEEPoVxckYA&s=10' },
  { id: 'mohit-rathee_usp2_07', name: 'Mohit Rathee', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmLDc_RgctO5NIGW7gW9jJxeyFLbnhL7UUmrCYonBig&s=10' },
  { id: 'bailapudi-yeswanth_usp2_09', name: 'Bailapudi Yeswanth', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5-beoJYcDQOOitDrlDGi666JgUfNqExhwkHzbka6DA&s=10' },
  { id: 'bevon-john-jacobs_al3_04', name: 'Bevon-John Jacobs', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5a4rqPk0Pn_7xRyHtGlmhTsezRfo57b3Tk7i6odzRQ&s=10' },
  { id: 'daniel-lawrence_al3_05', name: 'Daniel Lawrence', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcjnGelejKT2OVOSbzLyxiQfbNtHfELShvLdx_Yl2gQg&s=10' },
  { id: 'george-linde_al3_06', name: 'George Linde', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2E4EAbB7Z-JW_myrJKq1d2MGACpL_aCfh_p7dWRkqQ&s=10' },
  { id: 'gulbadin-naib_al3_07', name: 'Gulbadin Naib', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRniIYPQdfi3E11WqC-C_DqXbNbEEZoPaSTa3BHxlVSew&s=10' },
  { id: 'will-sutherland_al3_08', name: 'Will Sutherland', altName: 'William Sutherland', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Dth3POLespGe7_bGexcqEefjk9K6Ekm1GT1suabodg&s=10' },
  { id: 'beau-webster_al3_09', name: 'Beau Webster', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGba3Jcb2nDHlEgOqBPnqwx6RzBdnOk2BZ3t3sCuzOw&s=10' },
  { id: 'richard-gleeson_fa3_02', name: 'Richard Gleeson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHPGeJX1TCcow1j3BYadcm1y2BS5pKIQllzAvgse_9g&s=10' },
  { id: 'shamar-joseph_fa3_04', name: 'Shamar Joseph', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-ganhvn1D6-UyVSwl948Pwy583LcgtFRrEFZ5-tRMw&s=10' },
  { id: 'riley-meredith_fa3_05', name: 'Riley Meredith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxz_ksDKkFJcpucR4Js3Ub2VK4fgx3uAmn44etGFiEQ&s=10' },
  { id: 'kunal-chandela_uba3_01', name: 'Kunal Chandela', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWt9RSbu52XhE1m6RWuYPQpSPwbrgD6i4VOXM4YdPcw&s=10' },
  { id: 'ayush-doseja_uba3_02', name: 'Ayush Doseja', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGc3Ol6ZwPJ906mz02QWfdd8h_Q7aTDmDEKdxfxUXSw&s=10' },
  { id: 'qamran-iqbal_uba3_03', name: 'Qamran Iqbal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw44ZN3Zzgd406GJmU3eXe61pSqcHI0OEOawSjMPkvww&s=10' },
  { id: 'dheeraj-kumar_uba3_04', name: 'Dheeraj Kumar', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrUe3usy9GLpUzsgb9lNVdtJ7uqxWSrQfUiCm3iY10A&s=10' },
  { id: 'sahil-parakh_uba3_06', name: 'Sahil Parakh', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjx-XH8mkqv9rkQJQ4uVWS2rcGDGjKiuxBFtb6Dsq4GQ&s=10' },
  { id: 'jagadeesha-suchith_ual3_09', name: 'Jagadeesha Suchith', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7g8oIoBd4ncYALz3wzI-MK-Ot6OkIXxd0d_7cHiV2Vw&s=10' },
  { id: 'tanay-thyagarajann_ual3_10', name: 'Tanay Thyagarajann', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMgT8IVb0u_d20s-8we5gilvU7c73m5n2t2Ct7Eadng&s=10' },
  { id: 'parikshit-dhanak_usp3_03', name: 'Parikshit Dhanak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1UaDFjSpwweJEaDuKfcWBmVlkYaHrV1zsoMMTWlR9oA&s=10' },
  { id: 'daniel-lategan_uba4_06', name: 'Daniel Lategan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGwH745vCwKWM30Hf6Y9CSteH_E46cCRxV-wjuEOCtNA&s=10' },
  { id: 'siddhant-rana_uba4_07', name: 'Siddhant Rana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzrX79PRtRQW4FUWwT-FnpZoDvzM7OqWDLhfNMBKs6A&s=10' },
  { id: 'aaron-varghese_uba4_08', name: 'Aaron Varghese', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROXXZMxx-ZRzKuxMOlvvjXXs_AYpJmd8-YHY6RpnyGg&s=10' },
  { id: 'ayush-vartak_ual4_09', name: 'Ayush Vartak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-ku-U-5XryYNfGuYurE1kTHeqLeu58kHEAYtVyu30g&s=10' },
  { id: 'rakibul-hasan_usp4_05', name: 'Rakibul Hasan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVx8amx9Yrcxb6hPSN2qmnz-v3id_UitrO9UUy4qtdw&s=10' },
  { id: 'traveen-mathew_usp4_06', name: 'Traveen Mathew', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kd9ostsrfYoYnLyarXJlKfcLWQdhun1kbYDOE-XQQQ&s=10' },
  { id: 'naman-pushpak_usp4_07', name: 'Naman Pushpak', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtZHpfWHEOm_aOwE95kCViPOzJKpXxReKvh-DGSBgtw&s=10' },
  { id: 'izaz-sawariya_usp4_08', name: 'Izaz Sawariya', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk707lF3POcYrQy-4-Xv2lJM0lsvmjGf6FwGCvdgP7Cg&s=10' },
  { id: 'roshan-wagshare_usp4_09', name: 'Roshan Wagshare', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiqbn0wVHCPhP90E0_nSkVcAdL7hRyWqkvOvi9VQx7w&s=10' },
  { id: 'siddharth-yadav_ual5_09', name: 'Siddharth Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQou1lR7e2m_0I9zLu4Yr8m2vYWDWudj691K8BgLqjbPQ&s=10' },
  { id: 'r-sonu-yadav_ual5_10', name: 'R Sonu Yadav', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQLrSU4uPHYdZgj8a1i4oiSk1ZcSLTXPjG6aH7hzSvw&s=10' },

  // User batch 3 (additional key players)
  { name: 'Finn Allen', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL51LEkcpBlpPbo_xv8ODrt80NFF2OGCqYXroKXOzD5Q&s=10' },
  { name: 'Sarfaraz Khan', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgYMireUFH_Dm_d3aWycW8MXCaAxwJYy-IcQDWKbnhg&s=10' },
  { name: 'Cameron Green', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQyoTPkPQAu7ce6NI56_lAshN9mgX36eMh-_b65j6rA&s=10' },
  { name: 'Gus Atkinson', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR2bkWoSqRo3LIR9aL3-zcBofub92-vI0baAay2po4kQ&s=10' },
  { name: 'Liam Livingstone', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_9xP8ggP-Xw9bhsyIEhWHj9cdlv6QUPnp7mCJ9d4ow&s=10' },
  { name: 'Akash Deep', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAJJ1pajaRm_m4dgFPfbluqEjNKppT1usJ1hNqE4h-g&s=10' },
  { name: 'Matheesha Pathirana', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwhLf7eqcJW3wxQcvpyMSNmQg2r28-zACoHiHTj7gbtw&s=10' },
  { name: 'Ravi Bishnoi', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofJ0-7wYnKTlQ7x37eTaRUTKqWcOfmNMlfG_F_uFajQ&s=10' },
  { name: 'Yash Dayal', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3szaiGYf_GfTe4vLd-gbE_aImtKJofB88SLKpilA-g&s=10' },
];

function normalize(s) {
  return (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Update JSON files
const jsonFiles = [
  'src/data/official350Players.json',
  'src/data/masterPlayersDatabase.json',
  'data/official350Players.json',
  'data/masterPlayersDatabase.json',
];

for (const filePath of jsonFiles) {
  if (!fs.existsSync(filePath)) continue;
  const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updatedCount = 0;

  for (const item of playerMappings) {
    const normTarget = normalize(item.name);
    const normAlt = item.altName ? normalize(item.altName) : null;
    const targetId = item.id;

    for (const player of list) {
      const matchId = targetId && player.id === targetId;
      const matchName = normalize(player.name) === normTarget || (normAlt && normalize(player.name) === normAlt);

      if (matchId || matchName) {
        player.imageUrl = item.url;
        player.photo = item.url;
        player.imageStatus = 'VERIFIED';
        updatedCount++;
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(list, null, 2));
  console.log(`Updated ${filePath}: mapped ${updatedCount} player matches.`);
}

console.log('Finished updating player database files.');
