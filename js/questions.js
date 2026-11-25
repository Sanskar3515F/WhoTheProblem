/**
 * WHO'S THE PROBLEM? 😂 - Master Question Database (330+ Hilarious Questions)
 * Savage, authentic, relatable Hinglish and Marathiglish friendly-roast questions across 8 categories:
 * 1. College Chaos & Rada (🎓)
 * 2. Group Ka Asli Namoona (🤡)
 * 3. Drama Queen & Overacting (👑)
 * 4. Insta Ke Kide & Reelbaaz (📱)
 * 5. Aage Jaake Kya Kand Karega (🔮)
 * 6. Full Toofan & Dimaag Ka Dahi (🌪️)
 * 7. 3 AM Bakchodi & Raat Ke Kide (🌙)
 * 8. Foodie Chor & Tapri Criminals (🍕)
 *
 * Designed specifically for Indian college gangs, hostelites, tapri squads and friend circles.
 */

const QUESTION_CATEGORIES = [
  {
    "id": "college_chaos",
    "name": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "description": "Proxy attendance, exam se 5 min pehle rona, tapri bunk & viva panics"
  },
  {
    "id": "friend_group_roast",
    "name": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "description": "'2 min me aalo', bill ke time gayab, faltu advice & double dholki"
  },
  {
    "id": "drama_king_queen",
    "name": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "description": "Chhoti baat pe 3-season Netflix series, Oscar acting & fake crying"
  },
  {
    "id": "social_media_addict",
    "name": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "description": "100 selfies, cringe reel banger, aesthetic photo chya naavaat rada"
  },
  {
    "id": "future_predictions",
    "name": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "description": "Achanak viral hona, MLM scam me fasna & fake start-up founder"
  },
  {
    "id": "random_chaos",
    "name": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "description": "Google Maps se ladai, police dekhke shaanpana & random kand"
  },
  {
    "id": "late_night_vibes",
    "name": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "description": "Raat ko 3 baje Maggi, ex ko drunk call, deep philosophical shaanpana"
  },
  {
    "id": "foodie_crimes",
    "name": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "description": "Dost ke fries chori, 'ek bite de na re bhau', bill splitting natak"
  }
];

const QUESTION_DATABASE = [
  {
    "id": "col_1",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Who comes to college sirf proxy lagwane ke liye aur attendance milte hi hawa me gayab ho jata hai?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_2",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Arey bhau, 9 AM lecture chya pehlya 3 min madhye bench var dole laavun ghorknara kon?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_3",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Exam ke 5 minute pehle pure class ke saamne haath jodke 'Bhai thoda padha de na' bolke rone wala?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_4",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Assignment sabse pehle maangta hai lekin submit karte waqt apna naam likhna bhool jata hai?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_5",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Who would accidentally enter the wrong classroom, sit through the entire 1-hour lecture and take notes seriously?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_6",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Professor ke aage buttering karke faltu me group ka monitor banne wala chamcha kon?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_7",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Viva examiner ke saamne blank face banakar aisi kahani sunata hai jiska syllabus se door-door tak naata nahi?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_8",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Arey shaanpana baaga, class bunk karke tapri var cutting chai peetana HOD chya samor pakadla janara kon?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_9",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Group project me 0% contribution deke PPT ke front slide pe sabse bada naam daalne wala?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_10",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Who pretends to listen very seriously in lecture while calculating '75% attendance sathi aani kiti bunk maaraave lagel'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_11",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Exam hall me bagal wale se pencil, eraser, scale, yaha tak ki calculator bhi maangne wala bhikari?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_12",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Ek raat pehle 'Bhai maine toh kuch nahi padha' bolke result ke din 9.5 CGPA laane wala snake 🐍?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_13",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Practical lab me beaker ya test tube todke chupke se doosre ke table pe rakhne wala shaatir chor?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_14",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Hostel ke mess ka khana dekhke aisi shakal banata hai jaise poisonous injection de diya ho?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_15",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Who sets 15 alarms from 6:00 AM to 8:30 AM but still wakes up directly at 11:30 AM?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_16",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "College fest me volunteer ka tag pehenke poore campus me celebrity jaise ghoomne wala overacting star?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_17",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Exam me ek simple answer ko 4 page tak khinchne ke liye purani Bollywood movie ki story likhne wala?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_18",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Sir jab 'Attendance time over' bolte hain tab back bench se achanak zinda hoke 'Present Sir!' chillane wala?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_19",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Who asks the professor doubts at 4:59 PM when the lecture was supposed to end at 5:00 PM?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_20",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Assignment ka xerox nikalte waqt dost ke assignment pe apna naam pen se overwrite karne wala jugaadu?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_21",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Arey bhau, college uniform ya ID card ghar pe bhool ke gatekeeper shi 'Arey uncle, ઓળખtoy ka mala' bolnara kon?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_22",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Exam shuru hone ke 10 min baad aake bolta hai 'Bhai questions dekhke lag raha hai paper out of syllabus hai'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_23",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Canteen me 20 rupaye ki Maggi ke liye 45 minute tak ladai karne wala freeloader?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_24",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Who claims 'Kal se pakka library jaake padhai karunga' but ends up smoking chai at tapri the entire day?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_25",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Class me phone silent pe na rakhke full volume pe Reels scroll karte pakde jaane wala legend?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_26",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "HOD room ke bahar aisi innocent shakal banata hai jaise mandir ka pandit ho?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_27",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Viva me jab professor bolta hai 'Tell me anything you know', bolta hai 'Sir aapka subject bohot interesting hai'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_28",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "College ground pe cricket match me pehli ball pe out hoke bolta hai 'Trial ball tha re bhau!'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_29",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Who asks for previous year question papers 2 hours before the exam in the WhatsApp group?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_30",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Class crush ko impress karne ke liye front bench pe baithke bekaar sawal poochne wala simp?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_31",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Hostel room me bina knock kare aake bolta hai 'Bhai tere paas Maggi ka masala bacha hai kya'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_32",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Who borrows a pen in 1st semester and still hasn't returned it in final year?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_33",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Online class me mic on chhodke ghar ki saari ladaiyan poore batch ko sunane wala namoona?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_34",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Industrial visit me factory ghoomne ke bajaye bus me baithke antakshari khelne wala group leader?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_35",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Who calculates passing marks on the back of the question paper in the first 10 minutes of the exam?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_36",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "College sports day pe 100m race me pehle 20 meter bhagke bolta hai 'Arey hamstring pull zhaala re'?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_37",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Professor jab question poochta hai tab achanak bench ke neeche gir gaya pen dhoondhne ka drama karne wala?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_38",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Arey bhau, semester exam nantar 'Paper ekdam rada gela re' bolun shevati topper ban'nara kon?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_39",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "College bus me seat reserve karne ke liye apna rumaal ya bag phenkne wala desi traveller?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_40",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Hostel ke room me induction stove pe chai banate waqt poore floor ka MCB trip karwane wala scientist?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_41",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 2,
    "text": "Internal assessment me 1 mark badhwane ke liye faculty ke cabin ke 15 chakkar kaatne wala fighter?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "col_42",
    "category": "college_chaos",
    "categoryName": "College Chaos & Rada 🎓",
    "icon": "🎓",
    "spiceLevel": 3,
    "text": "Who sleeps through the college farewell speech and wakes up only when snacks are being distributed?",
    "tags": [
      "college_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_1",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who texts 'Bhai bas 2 minute me pohach raha hu' while still lying under the blanket naked in bed?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_2",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Cafe me bill aate hi achanak 'Arey mera phone call aa raha hai' bolke washroom me bhaagne wala kanjoos?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_3",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Life me sabko gyaan deta hai lekin khud ki life me full raita faila rakha hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_4",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "WhatsApp pe 24 ghante online rehta hai lekin group ke urgent message ka reply 3 din baad deta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_5",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Arey bhau, room madhye aalyanantar 5 min ubha rahun vicharto 'Arey mi ithe kashasathi aaloto'?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_6",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Ek simple Goa ya Lonavala plan ko itna complicate kar deta hai ki end me sab ghar pe baithke ludo khelte hain?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_7",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who borrows ₹100 for 'emergency auto' and conveniently develops temporary memory loss the next day?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_8",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Apne birthday pe group ko aisi sasti tapri pe le jaata hai jaha samosa bhi half-plate milta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_9",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Dost ke phone me aisi gandi photos aur screenshots store karke rakhta hai jo leak ho gayi toh jail ho jaye?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_10",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who says 'Bhai tu jaanta nahi mera connection kaha tak hai' but local bus me ticket ke liye ladta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_11",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Group me jab koi ladai hoti hai, side me baithke popcorn khane wala neutral aag-lagau?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_12",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Arey shaanpana, 4 dostancha plan aslyavar achanak crush cha message aala ki 'Mala thoda kaam ahe' bolun palaat?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_13",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who flexes an iPhone on 12-month EMI but hotspot hamesha doosre friend se maangta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_14",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Ek secret batane ke baad bolta hai 'Bhai kisi ko mat batana', aur 10 min me poore college ko pata chal jata hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_15",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who takes 45 minutes to get ready just to go to the nearby tapri for a 10 rupee chai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_16",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Group voice call pe aake bolta hai 'Bhai sunn ek baat batata hu' aur fir 10 second chup hoke gayab ho jata hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_17",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Har situation me 'Arey meri maano toh...' bolke aisi advice deta hai jisse seedha nuksan hota hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_18",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who always loses their bike keys, wallet, or phone inside their own pocket?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_19",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Dost ki naye jacket ya joote pehenke 'Bhai 2 din me deta hu' bolke 6 mahine tak apna bana leta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_20",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Arey bhau, group photo madhye fakt swatahcha face changla aala ki baaki saglyanchi aisi-taisi karun upload karnara?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_21",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who starts an argument with 'Technically speaking...' when nobody asked for a technical breakdown?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_22",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Group chat me ek lamba emotional paragraph bhejke 5 second baad 'Delete for Everyone' karne wala attention seeker?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_23",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Dost ki bike maangke aisi chalata hai jaise Dhoom 4 ki audition chal rahi ho?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_24",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who pretends to be asleep in the car just to avoid paying for the highway toll or parking ticket?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_25",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Har doosre hafte 'Bhai is baar pakka gym chalu' bolke 1 din me creatine aur protein shake ka dabba khareedta hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_26",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Who laughs so loudly at their own unfunny joke that everybody else just stares in pure silence?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_27",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Chhoti si cold ya sardi hone pe aisi shakal banata hai jaise will likhne ka time aa gaya ho?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_28",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who always says 'Arey bhai tu chal na, main piche se aata hu' and literally never shows up?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_29",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Dost ke ghar aake unke fridge ka inspection unki mummy se pehle karne wala bhukkad?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_30",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who would start fake crying just to get the last slice of pizza in the group?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_31",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Arey bhau, 'Mi drink nahi karat re' bolun party madhye saglyat jaast chakna aani biryani sampavnara kon?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_32",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Who would accidentally forward a screenshot of the chat to the exact same person they were gossiping about?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_33",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Har plan me 'Budget tight hai yaar' bolta hai aur agle din naye branded sneakers pehenke aata hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_34",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Who says 'Chal thoda ghoom ke aate hain' and takes you on a 4-hour aimless bike tour with 0.2 liters petrol?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_35",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Dost ke phone ka password crack karke unke WhatsApp chats scroll karne wala private detective?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_36",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who would agree to split the bill equally after ordering the most expensive imported sizzler on the menu?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_37",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Har baat pe 'Bhai Kasam se bol raha hu' bolta hai jabki uski kasam ki value ₹2 se kam hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_38",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Group me sabse pehle daru ya party ka hype banata hai aur party shuru hote hi 10 baje so jata hai?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_39",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who would borrow your charger at 2% battery and return it to you when your phone is dead and theirs is 100%?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_40",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 1,
    "text": "Dost ke breakup ke 2 din baad hi unke ex ke story pe heart react karne wala gaddaar?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_41",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Arey bhau, group chya sarv plan madhye 'Yes' bolun shevat chya 10 min aadhi 'Mummy ne mana kela' bolnara kon?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fri_42",
    "category": "friend_group_roast",
    "categoryName": "Group Ka Asli Namoona 🤡",
    "icon": "🤡",
    "spiceLevel": 3,
    "text": "Who sends 15 voice notes of 4 seconds each instead of just typing two simple words?",
    "tags": [
      "friend_group_roast",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_1",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Who deserves a Filmfare Award for overacting jab injection lagta hai ya chhota sa paper cut hota hai?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_2",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Chhoti si problem (jaise phone ki battery 10%) pe 3-season Netflix tragedy drama create karne wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_3",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Arey bhau, rickshaw wale ne ₹10 extra maagle tar 'Tumhi aamcha shoshan kartaay' mhanun rada karnara kon?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_4",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Who enters an empty room with full Bollywood slow-motion background music in their head?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_5",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Thoda sa daant padte hi WhatsApp pe black DP lagakar 'Nobody cares about me' status daalne wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_6",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who would dramatically drop to their knees and scream 'KYUN BHAGWAN KYUN' when Wi-Fi stops working?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_7",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Group me achanak 'Maine sab notice kiya hai, sab badal gaye hain' bolke 2 din tak ghost karne wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_8",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Restaurant me waiter soup 2 minute late laaye toh manager ko 'Mera dignity hurt hua hai' bolne wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_9",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who gives a 20-minute Oscar acceptance speech after winning a free ₹10 scratch card on Google Pay?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_10",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Ghar pe mummy ne baingan ki sabzi banayi toh aisi shakal banata hai jaise poison de diya ho?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_11",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Arey shaanpana, haircut thoda chhota zhaala tar 2 aathwade topi ghalun gharat basnara drama master kon?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_12",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who would dramatically look out of a rain-soaked car window while imagining an Arijit Singh sad song?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_13",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Ek breakup ke baad agle 4 saal tak shayari likhne wala certified Devdas?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_14",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who puts 'Feeling heartbroken and betrayed 💔' story on Instagram and when asked says 'DM me mat poocho plz'?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_15",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Exam hall me question paper dekhke itni zor se aah bharta hai ki invigilator ko pani lana padta hai?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_16",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Dost ne call miss kar diya toh seedha 'Lagta hai ab hamari dosti pehle jaisi nahi rahi' bolne wala psycho?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_17",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who pretends to faint in morning assembly or college event just to escape standing in the sun?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_18",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Group chat me 'I am leaving this group forever, bye' bolke agle 10 minute me wapas add hone wala attention seeker?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_19",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Arey bhau, selfie kadhtana achanak aisi serious 'deep thinker' pose denara jyaat kiti tari dukh dista?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_20",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who would gaslight the entire friend circle into believing that everyone forgot their birthday?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_21",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Phone me 1% charging bachi ho toh aisi saansein leta hai jaise ventilator pe ho?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_22",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Who dramatically sighs every 30 seconds until someone finally asks 'Arey kya hua bhai bata na'?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_23",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Movie theater me aisi overacting karke rota hai ki aaju-baaju wale tissue paper offer karne lagte hain?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_24",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who claims 'Main bohot simple aur low-maintenance person hu' while having a 45-step morning routine?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_25",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Traffic jam me phaske aisi gaaliyan deta hai jaise traffic police ne uske khilaaf personal sazish rachi ho?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_26",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who would wear sunglasses inside an air-conditioned dark cinema hall just for the aesthetic drama?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_27",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Dost ke normal mazak pe 'Tumne meri aatma ko chot pahunchayi hai' bolke rone wala snowflake?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_28",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Arey bhau, thoda sa fever aala tar 'Maza shevat cha divas ahe vat-ta' bolun saglyanna bye bolnara?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_29",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who practiced their Bollywood crying scene in front of the bathroom mirror multiple times?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_30",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Birthday party pe cake ka pehla piece dost ko na milne pe achanak 'Mera mood kharab ho gaya' bolne wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_31",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Who gives a dramatic monologue about loyalty and brotherhood over a disputed 50 rupee cab fare?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_32",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Coffee shop me galat naam likha cup milne pe barista ko existence of universe samjhane wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_33",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who would turn down the music in the car just so everyone can hear how deeply they are sighing?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_34",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "College fest me stage pe anchor banne ke liye faculty ke pair padne wala overacting ka badshah?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_35",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who texts in ALL CAPS WITH 50 EXCLAMATION MARKS FOR AN ABSOLUTELY TRIVIAL PIECE OF GOSSIP?!",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_36",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Arey bhau, selfie angle chukla tar 'Maza poora divas kharaab zhaala' bolun 50 photos delete karnara?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_37",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Who packs 4 suitcases for a 2-day weekend trip to Alibaug or Lonavala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_38",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Barish aate hi balcony me aake cup pakadke aisi video banata hai jaise Mohabbatein ka Shah Rukh Khan ho?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_39",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 3,
    "text": "Who takes off their glasses very slowly and dramatically before saying something completely obvious?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "dra_40",
    "category": "drama_king_queen",
    "categoryName": "Drama Queen & Overacting 👑",
    "icon": "👑",
    "spiceLevel": 1,
    "text": "Group me jab koi naya couple banta hai, sabse pehle 'Hume toh bhool hi jaoge ab' bolke rone wala?",
    "tags": [
      "drama_king_queen",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_1",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Khana table pe aate hi sabko rokta hai 'Ruko koi hath mat lagana, pehle photo kheenchne do aesthetic ke liye'?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_2",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Arey bhau, ek photo sathi 45 angles madhye pose deun shevati ek pan photo upload na karnara kon?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_3",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Instagram pe 12 ghante active rehke 'Digital detox chal raha hai guys' bolne wala hypocrite?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_4",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who checks their own Instagram story 85 times a day just to see who viewed it?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_5",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Road pe chalte waqt phone me Reel scroll karte karte khambe ya kutte se takrane wala zombie?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_6",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who takes an aesthetically pleasing photo of black coffee, takes one sip, makes a puking face, and throws it away?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_7",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Crush ke 7 saal purane Facebook aur LinkedIn profile tak stalk karke unke mama ke gaon ka naam nikalne wala CBI?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_8",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Arey bhau, 'Candids only re' bolun 20 minute tak fake hasnyachi acting karnara kon?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_9",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who sends 65 Reels every single day in the DMs without ever replying to an actual question?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_10",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Starbucks me sirf naam ke sath cup ka photo dalne ke liye ₹400 ki faltu bitter cold brew lene wala?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_11",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Har 2 din me naya 'Dump 📸' daalne wala jisme 8 photos blurry aur 2 floor tiles ki hoti hain?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_12",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who would immediately re-record a spontaneous laughing moment because 'Mera angle accha nahi aaya yaar'?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_13",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Phone ki battery 3% pe ho fir bhi full brightness pe Instagram Explore tab scroll karne wala psychopath?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_14",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who remembers someone's exact birthday, ex-partner, and college just by stalking their Instagram highlights?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_15",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Arey bhau, gym madhye 2 dumbbell uthavun 50 photos aani 3 stories taknara 'No pain no gain' fitness influencer kon?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_16",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who poses with someone else's car or bike in a parking lot for that 'CEO grind mindset' post?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_17",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "WhatsApp status pe sad quote daalke monitor karta hai ki crush ne view kiya ya nahi?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_18",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who spends 35 minutes editing a photo with 12 different filter apps and still looks like a potato 🥔?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_19",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Concert me jaakar pure 2 ghante phone screen ke through singer ko dekhne wala cameraman?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_20",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who knows every single trending audio on Instagram before it even hits the algorithm?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_21",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Airport pe check-in se pehle 'Boarding pass + Passport aesthetic photo ✈️' daalne wala jetsetter?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_22",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Arey bhau, group dinner chya veles saglyansobat basun pan fakt phone madhye dole ghusun thevnara kon?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_23",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who has a secret spam/finsta account where they post completely unhinged 2 AM breakdowns?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_24",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Instagram bio me 'Entrepreneur | Hustler | Coffee Lover | DM for collabs' likhne wala jiske paas ₹50 bhi nahi hain?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_25",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who would delete a post within 7 minutes if it doesn't get at least 30 likes?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_26",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Dost ke saath ladai hone ke baad Instagram pe unfollow aur close friends se nikalne wala childish detective?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_27",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who asks their friend 'Bhai meri latest post pe aake accha comment kar na jaldi'?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_28",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Sunset dekhke enjoy karne ke bajaye 'Golden hour lighting waste ho jayegi' bolke chillane wala?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_29",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who has more screen time on Instagram than the total hours they slept this week?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_30",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Arey bhau, reel baghtana achanak zorat hasun poorya room la shantatela bhang karnara kon?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_31",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who would break up with someone if they don't post them on their Instagram grid on anniversary?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_32",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Khane ki delivery aate hi Swiggy delivery boy ke saamne unboxing video shoot karne wala vlogger?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_33",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who checks the view list of their story every 3 minutes like it's the live stock market ticker?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_34",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Dost ki shaadi ya party me dulha-dulhan ko chhodke mirror selfie lene me busy rehne wala?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_35",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who uses hashtag #blessed and #wanderlust on a photo taken in their own building's parking terrace?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_36",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Arey bhau, reel banavnyachya naavaat college corridor madhye lokaanna disturb karnara cringe star?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_37",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who sends you a Reel and immediately calls to ask 'Dekha kya? Kaisa laga bata na'?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_38",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Instagram algorithm ke mutaabiq apne mood aur personality decide karne wala NPC?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_39",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 3,
    "text": "Who takes 10 screenshots of a conversation just to analyze 'In do emojis ka kya matlab ho sakta hai' with the group?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "soc_40",
    "category": "social_media_addict",
    "categoryName": "Insta Ke Kide & Reelbaaz 📱",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Hospital me drip lagne ke baad pehla kaam cannula ka boomerang story daalne wala certified influencer?",
    "tags": [
      "social_media_addict",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_1",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would start a startup, raise ₹1 crore funding from investors, and forget what product they actually sell?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_2",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Arey bhau, 10 varshanantr achanak WhatsApp forward scam madhye 'Ghar baslyaa 50,000 kamva' post karnara kon?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_3",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Achanak ek din ek cringe dance video viral hoke poore desh ka national meme banne wala?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_4",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would become a billionaire but still ask friends to pay ₹10 for their tapri cutting chai?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_5",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who is most likely to accidentally become the spiritual guru / baba of a bizarre online cult?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_6",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Future me arrange marriage ke pehle din hi sasural walo ke aage 'Main bartan nahi dhounga' bolke bawaal karne wala?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_7",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would accidentally buy a whole imaginary island in Metaverse and lose their life savings?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_8",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Arey bhau, 40 chya vayyat pan 'Arey bhava tuzha bhai ajun pan Pune cha don ahe' bolun ghumnara tapori?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_9",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who would get banned from entering an entire foreign country because of a silly argument at immigration?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_10",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Apni shaadi me baaki sab chhodke DJ wale se mike chheenke khud gaana gaane wala besura?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_11",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who would start an MLM pyramid scheme selling miracle herbal weight-loss water to their own relatives?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_12",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who is most likely to get arrested for trying to sneak a live puppy or chicken inside a cinema hall?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_13",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Future me corporate job me 1 hafte ke andar HR ke sath ladai karke poori company ko resignation mail bhejne wala?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_14",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who would build a ₹5 crore bungalow but sleep on a floor mattress because 'Aesthetic minimalist hai bhai'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_15",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Arey bhau, 50 varshancha zhalyaavar pan WhatsApp group madhye 'Good Morning with Gulab Phool' bhejra uncle kon?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_16",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would accidentally marry someone just because they were too polite to say 'No' on the second date?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_17",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Future me shark tank pe aake bolta hai 'Mera idea hai ki hum hawa ko bottle me bechein'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_18",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who would legally change their name to something ridiculous like 'Lord Matrix Chaos'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_19",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who is most likely to survive 30 days in Bigg Boss house purely by fighting with everyone over anda and paratha?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_20",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Apne bacchon ka homework khud na karke Google Gemini aur ChatGPT se solve karwane wala lazy parent?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_21",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who would win a lottery of 10 crores and spend 9.9 crores in the first 48 hours on useless gadgets?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_22",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Arey bhau, future madhye building society cha chairman banun saglyaanchya parking var rada karnara kon?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_23",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who would accidentally join the Russian secret service thinking it's a high-paying BPO call center?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_24",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who is most likely to become a motivational life coach despite having zero direction in their own life?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_25",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Future me apni shaadi ke card pe QR code daalke shagun maangne wala tech-savvy bhikari?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_26",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who would open a high-end restaurant where the only dish on the menu is 15 varieties of Maggi?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_27",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who is most likely to fake their own disappearance just to avoid attending a boring family reunion?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_28",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Achanak 35 ki umar me Himalayas jaakar bolta hai 'Mujhe sansaar se mukti mil gayi hai, bas Wi-Fi chahiye'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_29",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who would run for local municipal corporator / ward election with the slogan 'Har gali me tapri chai free'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_30",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Arey bhau, swatahchya lagnaat ghodyavarun padun rada karun ghenara hero kon?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_31",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would challenge Elon Musk on Twitter/X to a street fight over electric scooter mileage?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_32",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Future me apne pet dog ko apni saari property legal will me naam karne wala eccentric weirdo?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_33",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Who would accidentally leak the company's confidential balance sheet on their personal Instagram story?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_34",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who is most likely to get scammed by an email saying 'You have inherited 5 million dollars from an African Prince'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_35",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Future me parenting karte waqt bache ko bolta hai 'Beta zara Swiggy se do roti order kar do'?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_36",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Arey bhau, 60 varshacha zhalyaavar pan college katta var basun 'Aamchya kaalat...' bolun pakaavnara?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_37",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would become famous on TikTok/Reels for doing absolutely nothing except staring silently at the camera?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_38",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 2,
    "text": "Who is most likely to build a bunker under their bed because they believe aliens are coming next Tuesday?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_39",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 3,
    "text": "Future me apne college reunion pe aisi rented luxury car me aayega jiska petrol bharne ke paise nahi honge?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "fut_40",
    "category": "future_predictions",
    "categoryName": "Aage Jaake Kya Kand Karega 🔮",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who would get kicked out of a luxury casino in Las Vegas for arguing over a ₹50 bet?",
    "tags": [
      "future_predictions",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_1",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Google Maps bol raha hai 'Turn Left', fir bhi bolta hai 'Google chutiya hai, mujhe shortcut pata hai' aur khet me gadi phasa deta hai?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_2",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Arey bhau, police checking dislyavar achanak bina kaaran bhityane helmet thik karun shaanpana karnara kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_3",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Deserted island pe survive karne ke bajaye pehle din hi nariyal todne ke chakkar me sir phod lene wala?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_4",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who would argue with an automatic vending machine when the chips packet gets stuck on the spiral?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_5",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Lift me achanak sabke saamne aisi ajeeb si aawaz nikaalke dusre ke upar blame daalne wala shaatir?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_6",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who tries to push a door that clearly has a giant red sign saying 'PULL' with maximum confidence?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_7",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Arey bhau, rastyavar kutra bhonktana baghun unchyavar double speed madhye bhonknara pagal kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_8",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Who would accidentally lock themselves inside an ATM cabin and start panicking like it's a submarine?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_9",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Ek random pigeon ya sparrow ke sath 10 minute tak eye contact banakar baat karne wala psycho?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_10",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who smells their own socks or shirt before deciding 'Arey abhi do din aur chal jayegi bhai'?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_11",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Microwave me steel ka bartan ya foil rakhke diwali ke patakhe phodane wala scientist?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_12",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Arey bhau, shopping mall madhye escalator var ulta chalnyacha try karun tondavar padnara kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_13",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who panics and starts sweating profusely when the cashier at the grocery store scans items too quickly?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_14",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Water bottle ka dhakkan aise band karta hai ki agle din kholne ke liye plumber aur JCB bulani pade?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_15",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who would try to pay with a metro card or driving license at a roadside panipuri stall?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_16",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Movie me horror scene aane se 5 second pehle hi aisi cheekh maarta hai ki poora theater darr jaye?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_17",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Who walks into a spider web and instantly starts dancing breakdance in the middle of the street?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_18",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Arey bhau, bike chya side mirror madhye baaghun kes set kartana samorun yeun gadi thokanara kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_19",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who would accidentally call 112/100 emergency number and say 'Arey galti se pocket dial ho gaya bhaiya'?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_20",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Public restroom me jaakar dekhta hai ki toilet paper nahi hai aur fir existential crisis me chala jata hai?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_21",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who forgets which side of their car has the petrol tank every single time they pull into a petrol pump?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_22",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Arey bhau, dukaanatun 'Bhaiya ek chewing gum dena' bolun ₹500 chi note kadhnara ameer bhikari?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_23",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Who would accidentally drop their phone into the gap between the bed and the wall and consider moving houses?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_24",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Bina kisi music ke achanak road pe chalte-chalte background beat imagine karke funky walk karne wala?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_25",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who would try to swat a fly on their computer screen by using the mouse cursor?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_26",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Sleep me bolta hai 'Arey 2 plate momos parcel karna' aur jab koi uthata hai bolta hai 'Main toh jag raha tha'?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_27",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Arey bhau, automatic sensor glass door samor ubha rahun 'Khul ja sim sim' bolnara namoona kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_28",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who would look for their sunglasses for 25 minutes while wearing them directly on their forehead?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_29",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Chalti train me washroom jaate waqt balance kho kar random passenger ki god me baithne wala clumsy king?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_30",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who would confidently give completely wrong driving directions to a stranger on the road?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_31",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Raincoat pehenke chata kholne wala aur fir bhi puddle me jump maar ke poora bheegne wala genius?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_32",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Arey bhau, exam chya front page var 'Roll Number' chya jagevar swatahcha mobile number lihinaara kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_33",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who tries to blow air on ice cream because they subconsciously think it's hot food?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_34",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Phone flashlight on karke usi flashlight ki roshni me apna phone dhoondhne wala scientist?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_35",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Who would wave enthusiastically at a stranger on the road thinking it's their friend, and then pretend to stretch?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_36",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Arey bhau, barber la 'Thoda thoda trim kar' bolun shevati military cut ghevun radnaara kon?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_37",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Who would try to scroll up a physical printed paper magazine with their index finger?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_38",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 2,
    "text": "Fridge ka door 5 second baad dobara khol ke dekhta hai ki achanak kuch naya khana spawn hua ya nahi?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_39",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 3,
    "text": "Who gets into an intense argument with Siri or Google Assistant and ends up getting roasted by the AI?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "ran_40",
    "category": "random_chaos",
    "categoryName": "Full Toofan & Dimaag Ka Dahi 🌪️",
    "icon": "🌪️",
    "spiceLevel": 1,
    "text": "Road pe chalte waqt tiles ki lines pe paav na rakhne ka secret mission khelne wala child-at-heart?",
    "tags": [
      "random_chaos",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_1",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ko 3 baje achanak 'Bhai chal Maggi banate hain' bolke hostel ka poora floor jagaane wala cook?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_2",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Arey bhau, 2 AM la Instagram var ex chi profile stalk kartana galti ne 4 varshan purvi chya photo var like karnara?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_3",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ko 2:30 AM aisi philosophical baatein karta hai jaise agle 20 minute me dharti khatam hone wali ho?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_4",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who drunk-calls or texts their high school crush at 3:15 AM saying 'I always respected your vibe'?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_5",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Raat ko 1 baje Amazon ya Flipkart pe aisi bekaar cheez order karta hai jo delivery aane pe khud samajh nahi aati?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_6",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Who watches 4-hour YouTube documentaries on 'Primitive technology mud house building' at 3:45 AM?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_7",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Arey bhau, raat chya 3 vajta tapri var cigarette aani cutting chai sathi 15 km bike chalavnara kon?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_8",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Raat ko horror movie dekhne ke baad 2 baje washroom jaane ke liye roommate ke pair padne wala fattu?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_9",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Who plans their entire 10-year multi-millionaire corporate career plan between 2:00 AM and 2:30 AM?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_10",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ke 3 baje kitchen me bina chappal ke stealth mode me fridge se mithaai chori karne wala ninja?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_11",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Who says 'Bas ye ek aakhri Reel dekhke so jaunga' at 11:30 PM and is still scrolling at 4:15 AM?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_12",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Arey shaanpana, 3 AM la group call lavun saglyanna vicharto 'Arey tula aapan kashasathi jagat aaloy mahitey ka'?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_13",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ko achanak aisi guilt trip me chala jata hai jaise 2012 me class me jo pencil chori ki thi uski wajah se karma kharab hai?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_14",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Who listens to sad Arijit Singh or Prateek Kuhad songs at 2 AM despite having literally zero relationship history?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_15",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ko room me andhere me charging wire dhoondhte waqt apne pair ki ungli bed ke corner se thokanara?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_16",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who wakes up at 3:30 AM to drink water from the bottle and accidentally pours half the water on their own chest?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_17",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Arey bhau, 4 AM la 'Bhai bhook lagi hai kuch order karein kya' bolun Zomato var 40 min menu baghnara?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_18",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ko andhere me bathroom ke mirror me apni shakal dekhke khud hi darr ke cheekhne wala legend?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_19",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who sends completely unhinged voice notes at 3 AM that sound like an ancient cursed ritual?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_20",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Raat ke 2 baje Google pe ajeeb bimari ke lakshan dhoondhke decide kar leta hai ki uske paas bas 2 din bache hain?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_21",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Who starts deep cleaning their room, organizing wardrobe, and rearranging furniture only after midnight?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_22",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Arey bhau, raat chya 3 vajta 'Kal se pakka 6 AM uthun jogging la janar' bolun 12 PM la uthnara athlete kon?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_23",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Who stares at the ceiling at 2:45 AM remembering that one embarrassing thing they said in 6th standard?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_24",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ke 1:30 AM group me achanak 'Are you guys awake?' bhejta hai aur sabke reply aate hi khud so jata hai?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_25",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who eats dry raw uncooked Maggi with masala sprinkled on top in the middle of the night?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_26",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Arey bhau, andharat bed varun khali padun bolto 'Kahi nahi zhaala, aapan neat aahot'?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_27",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ko terrace pe aake romantic hawa enjoy karne ka drama karta hai aur machharon se katwa ke wapas bhaagta hai?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_28",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who texts their best friend at 2 AM 'Bhai agar main kal mar jau toh mera browser history delete kar dena'?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_29",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Raat ko 3 baje YouTube shorts pe 'How to escape a bear attack' dekhne wala jabki gaon me kutta bhi nahi dikhta?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_30",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Who leaves the bathroom door slightly open at night because they think the monster will trap them inside?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_31",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Arey bhau, 2 AM la Swiggy Instamart varun 2 packets Chips aani 1 ice cream order karnara midnight criminal?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_32",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Raat ko bed pe baithke calculation karta hai 'Agar main abhi 3:17 pe so jaun toh mujhe exact 3 ghante 43 minute ki neend milegi'?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_33",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Who texts 'Goodnight guys, sleep well' at 11 PM and is actively watching memes till 5 AM?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_34",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ke 3 baje achanak guitar nikaalke aisi besuri awaaz me bajaata hai ki aaju-baaju wale police ko phone karne sochein?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_35",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Who wakes up the entire hostel room at 3 AM because they thought they saw a shadow moving near the curtain?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_36",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Arey bhau, late night drive var jaaun petrol samplyavar 3 km bike dhakalnara adventurer kon?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_37",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ko 2 baje existential crisis me aakar decide karta hai ki wo kal subah se vegan aur yogi ban jayega?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_38",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 2,
    "text": "Who sends long emotional appreciation voice notes to friends at 3 AM and pretends nothing happened next morning?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_39",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 3,
    "text": "Raat ko pillow ko flip karke cold side dhoondhne ke chakkar me 45 minute neend barbaad karne wala?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "lat_40",
    "category": "late_night_vibes",
    "categoryName": "3 AM Bakchodi & Raat Ke Kide 🌙",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Raat ke 3:30 baje WhatsApp pe crush ka 'Online' status dekhke 50 tarah ke conspiracy theories banane wala FBI agent?",
    "tags": [
      "late_night_vibes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_1",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Dost ke plate se 'Bhai bas ek fry de na' bolke 80% French fries akele chat kar jaane wala daaku?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_2",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Arey bhau, restaurant madhye bill aalyanantar galti ne pan 'Maza wallet room var rahila' bolnara kanjoos kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_3",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Burger khate waqt surgery karke pyaaz, tamatar, pickle sab bahar nikaalke table pe kachra banane wala picky eater?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_4",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Pizza ke slices me se sabse bada aur loaded slice pehle se hi haath maar ke lock karne wala selfish bhukkad?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_5",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who puts ketchup over literally EVERYTHING — Maggi, Biryani, Poha, yaha tak ki Samosa aur Paratha pe bhi?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_6",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Arey bhau, party madhye jevan shuru honyachya aadhi ch starters chya plate var dharak padnara bhukkad kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_7",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Cold drink me aisi aawaz karke straw se aakhri boond tak sip karta hai jaise petrol pump ka vacuum cleaner ho?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_8",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who says 'Main diet pe hu, main kuch nahi khaunga' and then eats half of everyone else's meal?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_9",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Pani puri wale bhaiya ke saamne 'Bhaiya thoda teekha kam, meetha zyada, suji puri dena' bolke 50 nakhre karne wala?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_10",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who steals chocolate from the shared fridge, leaves the empty wrapper inside the fridge, and blames the ghost?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_11",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Buffet me aisi plate bharta hai jaise Titanic ke doobne se pehle aakhri baar khana mil raha ho?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_12",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Arey bhau, cutting chai madhye biscuit budvun to biscuit chai madhye ch padlyavar botane kaadhnara legend kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_13",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who orders food on Zomato, tracks the delivery boy on GPS every 4 seconds, and calls him 15 times?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_14",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Restaurant me free ka saunf aur mishri dono pocket me mutthi bhar ke bharne wala dacoit?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_15",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Who eats the filling inside the Oreo biscuit and leaves the black dry biscuits for the rest of the world?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_16",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Dost ki ice cream cone me se 'Bas ek chhota bite le raha hu' bolke top scoop pura swallow karne wala monster?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_17",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Arey bhau, biryani madhye achanak elaichi aalyavar aisi shakal banavto jaise cyanide kha gela?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_18",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Who licks the Maggi masala packet clean with their tongue before putting it in boiling water?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_19",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Dosa khate waqt sambhar aur chutney 4 baar extra maangta hai aur dosa aadha chhod deta hai?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_20",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who would fight to the death over who gets the crispy corner piece of the garlic bread?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_21",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Dost ke birthday treat me sabse mehnga imported dessert order karke bolta hai 'Bhai birthday toh saal me ek baar aata hai na'?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_22",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Arey bhau, tapri var vadapav khaataana sukha chutney aani mirchi extra maangun poora paper bag bharun ghenara?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_23",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who eats chips by tipping the bag directly into their mouth like a human trash can?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_24",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Shared pizza box khulte hi pehle cheese pull check karta hai aur sabse zyada cheese wala slice kheench leta hai?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_25",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who drinks the leftover milk from the cereal bowl by lifting the entire ceramic bowl with both hands in public?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_26",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Arey bhau, 'Diet chal raha hai' bolun salad madhye 4 spoonful mayonnaise aani cheese taknara health freak kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_27",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Who asks for an extra bowl just to mix 7 different curries together into an unholy cement paste?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_28",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Fast food center me tissue paper ka pura bundle utha ke apne backpack me daalne wala kleptomaniac?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_29",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who checks the bill calculation 4 times with phone calculator just to save ₹3.50 on GST?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_30",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Arey bhau, gulab jamun garma-garam aslyavar pan aakhaa tondat takun poora tond bhaajnara impatient bhukkad?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_31",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who dips French fries directly into vanilla soft-serve ice cream and calls it 'haute cuisine'?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_32",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Dost ke tiffin me mummy ne banaya paratha dekhte hi uspe cheel-giddh jaise toot padne wala tiffin chor?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_33",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Who orders water bottle in an expensive cafe and then complains about ₹150 charge for 45 minutes?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_34",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Arey bhau, samosa cha khalachya tukda (chhota crispy kone) sathi dosti daavavar lavnara kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_35",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who licks the plate clean at a wedding buffet when nobody is looking?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_36",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Bhookh lagne pe aisi shakal banata hai jaise 14 din se Sahara desert me bina paani ke bhatak raha ho?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_37",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who eats peanuts at a bar or party so fast that the bowl looks like a black hole sucked it in?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_38",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Arey bhau, ice cream cup cha cover pan poora jeebhene chaatun saaf karnara middle-class icon kon?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_39",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 3,
    "text": "Who takes one sip of tea, says 'Adrak thoda kam hai', and pretends to be an international Michelin tea taster?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  },
  {
    "id": "foo_40",
    "category": "foodie_crimes",
    "categoryName": "Foodie Chor & Tapri Criminals 🍕",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Dost ka cold drink ka can kholte waqt aadha fizz uske upar spray karne wala mischievous culprit?",
    "tags": [
      "foodie_crimes",
      "roast",
      "hinglish",
      "maranglish"
    ]
  }
];

class QuestionServiceClass {
  constructor() {
    this.questions = [...QUESTION_DATABASE];
    this.categories = [...QUESTION_CATEGORIES];
    this.reportedQuestionIds = new Set(this.loadReportedIds());
    this.customQuestions = this.loadCustomQuestions();
  }

  loadReportedIds() {
    try {
      const stored = localStorage.getItem('wtp_reported_questions');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveReportedIds() {
    try {
      localStorage.setItem('wtp_reported_questions', JSON.stringify([...this.reportedQuestionIds]));
    } catch (e) {}
  }

  loadCustomQuestions() {
    try {
      const stored = localStorage.getItem('wtp_custom_questions');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  saveCustomQuestions() {
    try {
      localStorage.setItem('wtp_custom_questions', JSON.stringify(this.customQuestions));
    } catch (e) {}
  }

  getAll() {
    return [...this.questions, ...this.customQuestions];
  }

  getCategories() {
    return this.categories.map(cat => ({
      ...cat,
      count: this.questions.filter(q => q.category === cat.id).length
    }));
  }

  getByCategories(catIds = []) {
    if (!catIds || catIds.length === 0) return this.getAll();
    return this.getAll().filter(q => catIds.includes(q.category));
  }

  getByFilter({ categories = [], spiceLevel = 'all', search = '' } = {}) {
    let pool = this.getAll();

    if (categories && categories.length > 0) {
      pool = pool.filter(q => categories.includes(q.category));
    }

    if (spiceLevel && spiceLevel !== 'all') {
      const levelNum = parseInt(spiceLevel, 10);
      if (!isNaN(levelNum)) {
        pool = pool.filter(q => q.spiceLevel === levelNum);
      }
    }

    if (search && search.trim()) {
      const term = search.toLowerCase().trim();
      pool = pool.filter(q => 
        q.text.toLowerCase().includes(term) || 
        q.categoryName.toLowerCase().includes(term) ||
        (q.tags && q.tags.some(t => t.toLowerCase().includes(term)))
      );
    }

    return pool;
  }

  getRandomQuestion(usedIds = [], categories = [], spiceLevel = 'all', includeCustom = true) {
    let pool = this.getAll().filter(q => !this.reportedQuestionIds.has(q.id));

    if (categories && categories.length > 0) {
      pool = pool.filter(q => categories.includes(q.category));
    }

    if (spiceLevel && spiceLevel !== 'all') {
      const levelNum = parseInt(spiceLevel, 10);
      if (!isNaN(levelNum)) {
        pool = pool.filter(q => q.spiceLevel === levelNum);
      }
    }

    // Filter out already used questions in this match
    let available = pool.filter(q => !usedIds.includes(q.id));
    if (available.length === 0) {
      // If exhausted, recycle pool
      available = pool;
    }

    if (available.length === 0) {
      return {
        id: 'fallback_1',
        category: 'friend_group_roast',
        categoryName: 'Friend Group Roast',
        icon: '😂',
        spiceLevel: 1,
        text: "Who is most likely to text 'I\'m 5 minutes away' while still lying in bed?"
      };
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    return available[randomIndex];
  }

  reportQuestion(id, reason = 'inappropriate') {
    if (!id) return;
    this.reportedQuestionIds.add(id);
    this.saveReportedIds();
    console.info(`Question ${id} reported: ${reason}`);
  }

  isReported(id) {
    return this.reportedQuestionIds.has(id);
  }

  addCustomQuestion(text, category = 'custom', author = 'Host') {
    if (!text || !text.trim()) return null;
    const cleanText = text.trim();
    const customQ = {
      id: 'custom_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      category: 'custom',
      categoryName: 'Custom Inside Joke',
      icon: '✍️',
      spiceLevel: 2,
      text: cleanText,
      author: author,
      isCustom: true,
      tags: ['custom', 'inside_joke']
    };
    this.customQuestions.push(customQ);
    this.saveCustomQuestions();
    return customQ;
  }

  removeCustomQuestion(id) {
    this.customQuestions = this.customQuestions.filter(q => q.id !== id);
    this.saveCustomQuestions();
  }

  getCustomQuestions() {
    return [...this.customQuestions];
  }
}

// Global Singleton Instance
window.QUESTION_CATEGORIES = QUESTION_CATEGORIES;
window.QUESTION_DATABASE = QUESTION_DATABASE;
window.QuestionService = new QuestionServiceClass();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    QUESTION_CATEGORIES,
    QUESTION_DATABASE,
    QuestionService: window.QuestionService
  };
}
