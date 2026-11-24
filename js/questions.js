/**
 * WHO'S THE PROBLEM? 😂 - Master Question Database (330+ Hilarious Questions)
 * Handcrafted, original, witty, friendly-roast questions across 8 rich categories:
 * 1. College Chaos (🎓)
 * 2. Friend Group Roast (🤡)
 * 3. Drama King/Queen (👑)
 * 4. Social Media Addict (📱)
 * 5. Future Predictions (🔮)
 * 6. Random Chaos (🌪️)
 * 7. Late Night Vibes (🌙)
 * 8. Foodie Crimes (🍕)
 *
 * All questions are suitable for boys and girls playing together, relatable to college
 * and young adult friend groups, with zero sensitive/appearance-shaming content.
 */

const QUESTION_CATEGORIES = [
  {
    "id": "college_chaos",
    "name": "College Chaos",
    "icon": "🎓",
    "description": "Bunking, exams, professors, attendance & hostel life"
  },
  {
    "id": "friend_group_roast",
    "name": "Friend Group Roast",
    "icon": "🤡",
    "description": "Lies, delayed replies, late arrivals & inside jokes"
  },
  {
    "id": "drama_king_queen",
    "name": "Drama King/Queen",
    "icon": "👑",
    "description": "Oscar-worthy reactions, gasps, crying & high drama"
  },
  {
    "id": "social_media_addict",
    "name": "Social Media Addict",
    "icon": "📱",
    "description": "100 selfies, reels, stalking, aesthetic drinks & screen time"
  },
  {
    "id": "future_predictions",
    "name": "Future Predictions",
    "icon": "🔮",
    "description": "Viral fame, weird businesses, fortune & eccentric lifestyles"
  },
  {
    "id": "random_chaos",
    "name": "Random Chaos",
    "icon": "🌪️",
    "description": "GPS arguments, deserted islands & unhinged daily moments"
  },
  {
    "id": "late_night_vibes",
    "name": "Late Night Vibes",
    "icon": "🌙",
    "description": "3 AM ramen, deep lore, 2 AM impulse buys & existential thoughts"
  },
  {
    "id": "foodie_crimes",
    "name": "Foodie Crimes",
    "icon": "🍕",
    "description": "Fry thieves, ketchup crimes, weird cravings & burger surgery"
  }
];

const QUESTION_DATABASE = [
  {
    "id": "col_1",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🎓",
    "spiceLevel": 1,
    "text": "Who comes to college only to get attendance and immediately vanishes into thin air?",
    "tags": [
      "attendance",
      "college",
      "bunking"
    ]
  },
  {
    "id": "col_2",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "😴",
    "spiceLevel": 1,
    "text": "Who would fall dead asleep in the first 4 minutes of a 9 AM lecture?",
    "tags": [
      "sleep",
      "lecture",
      "morning"
    ]
  },
  {
    "id": "col_3",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📚",
    "spiceLevel": 2,
    "text": "Who asks for exam notes exactly five minutes before the paper starts?",
    "tags": [
      "exam",
      "notes",
      "panic"
    ]
  },
  {
    "id": "col_4",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🚪",
    "spiceLevel": 1,
    "text": "Who would confidently walk into the wrong lecture hall, sit for 20 minutes, and not notice?",
    "tags": [
      "wrong_class",
      "confusion"
    ]
  },
  {
    "id": "col_5",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🍎",
    "spiceLevel": 2,
    "text": "Who would become the professor's favorite pet for absolutely no explainable reason?",
    "tags": [
      "professor",
      "favorite",
      "roast"
    ]
  },
  {
    "id": "col_6",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "👥",
    "spiceLevel": 2,
    "text": "Who does zero work in a group project but gives the opening speech like the CEO of the team?",
    "tags": [
      "group_project",
      "freeloader"
    ]
  },
  {
    "id": "col_7",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🍜",
    "spiceLevel": 1,
    "text": "Who spends more money at the campus canteen than their entire semester tuition?",
    "tags": [
      "canteen",
      "food",
      "money"
    ]
  },
  {
    "id": "col_8",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🎒",
    "spiceLevel": 1,
    "text": "Who carries a backpack with literally just a single dying pen and zero notebooks?",
    "tags": [
      "backpack",
      "unprepared"
    ]
  },
  {
    "id": "col_9",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📑",
    "spiceLevel": 2,
    "text": "Who writes an entire 10-page assignment 45 minutes before the midnight deadline?",
    "tags": [
      "procrastination",
      "deadline",
      "assignment"
    ]
  },
  {
    "id": "col_10",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🏃‍♂️",
    "spiceLevel": 1,
    "text": "Who sprints across campus like an Olympic athlete just to avoid making eye contact with a professor?",
    "tags": [
      "professor",
      "running",
      "dodge"
    ]
  },
  {
    "id": "col_11",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🎤",
    "spiceLevel": 2,
    "text": "Who would sweat profusely and forget their own name during a simple 2-minute class presentation?",
    "tags": [
      "presentation",
      "stagefright"
    ]
  },
  {
    "id": "col_12",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🤫",
    "spiceLevel": 1,
    "text": "Who whispers so loudly during a silent exam that the entire hall hears what question they are stuck on?",
    "tags": [
      "exam",
      "whisper",
      "loud"
    ]
  },
  {
    "id": "col_13",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📝",
    "spiceLevel": 2,
    "text": "Who borrows a pen on the first day of the semester and somehow still has it three years later?",
    "tags": [
      "pen",
      "theft",
      "campus"
    ]
  },
  {
    "id": "col_14",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📖",
    "spiceLevel": 1,
    "text": "Who buys an expensive textbook, leaves the plastic wrapper on, and sells it back at a 90% loss?",
    "tags": [
      "textbook",
      "money",
      "waste"
    ]
  },
  {
    "id": "col_15",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🥱",
    "spiceLevel": 1,
    "text": "Who goes to the campus library specifically to find a quiet desk to take a 3-hour nap?",
    "tags": [
      "library",
      "nap",
      "sleep"
    ]
  },
  {
    "id": "col_16",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🚗",
    "spiceLevel": 2,
    "text": "Who would convince the whole group to bunk a crucial lecture to go eat roadside snacks?",
    "tags": [
      "bunk",
      "snacks",
      "instigator"
    ]
  },
  {
    "id": "col_17",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🤔",
    "spiceLevel": 2,
    "text": "Who raises their hand to ask a complicated question with 30 seconds left in class while everyone is packing up?",
    "tags": [
      "annoying",
      "lecture",
      "traitor"
    ]
  },
  {
    "id": "col_18",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who walks into the classroom 35 minutes late carrying an iced latte and zero shame?",
    "tags": [
      "late",
      "iced_coffee",
      "confidence"
    ]
  },
  {
    "id": "col_19",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📉",
    "spiceLevel": 2,
    "text": "Who calculates the exact minimum percentage of attendance needed down to three decimal places?",
    "tags": [
      "attendance",
      "math",
      "slacker"
    ]
  },
  {
    "id": "col_20",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📊",
    "spiceLevel": 1,
    "text": "Who claims 'I failed that exam so badly' and then gets the highest score in the entire batch?",
    "tags": [
      "exam",
      "liar",
      "topper"
    ]
  },
  {
    "id": "col_21",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "💻",
    "spiceLevel": 1,
    "text": "Who opens their laptop in the front row and casually plays games or online shops the entire period?",
    "tags": [
      "laptop",
      "gaming",
      "shopping"
    ]
  },
  {
    "id": "col_22",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🔍",
    "spiceLevel": 2,
    "text": "Who leaves an exam hall after 20 minutes because 'staring at the paper won't magically reveal the answers'?",
    "tags": [
      "exam",
      "early_exit",
      "defeat"
    ]
  },
  {
    "id": "col_23",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🖨️",
    "spiceLevel": 1,
    "text": "Who gets into an emotional physical argument with the college photocopy machine before an exam?",
    "tags": [
      "printer",
      "photocopy",
      "rage"
    ]
  },
  {
    "id": "col_24",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who accidentally lets their phone blare a loud ringtone or alarm in the dead silence of the exam hall?",
    "tags": [
      "phone",
      "alarm",
      "embarrassing"
    ]
  },
  {
    "id": "col_25",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🤝",
    "spiceLevel": 2,
    "text": "Who promises 'let's study together tonight' and then distracts the group with gossip for six hours straight?",
    "tags": [
      "study_session",
      "distraction",
      "gossip"
    ]
  },
  {
    "id": "col_26",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🪑",
    "spiceLevel": 1,
    "text": "Who claims a specific back-bench seat on day one and acts like they have legal property rights to it?",
    "tags": [
      "backbench",
      "territory"
    ]
  },
  {
    "id": "col_27",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🕵️",
    "spiceLevel": 2,
    "text": "Who knows every single rumor and breakup on campus before the people involved even know?",
    "tags": [
      "gossip",
      "detective",
      "campus"
    ]
  },
  {
    "id": "col_28",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who tries to explain an exam answer they clearly don't know with 4 pages of dramatic philosophical fluff?",
    "tags": [
      "exam",
      "bs",
      "writing"
    ]
  },
  {
    "id": "col_29",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "⏰",
    "spiceLevel": 1,
    "text": "Who sets six alarms for a 10 AM class, wakes up at 1:45 PM, and says 'well, day is basically ruined'?",
    "tags": [
      "alarms",
      "overslept",
      "relatable"
    ]
  },
  {
    "id": "col_30",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🎉",
    "spiceLevel": 2,
    "text": "Who volunteers to organize the college festival just so they can get an official pass to skip all classes?",
    "tags": [
      "fest",
      "excuses",
      "mastermind"
    ]
  },
  {
    "id": "col_31",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🥪",
    "spiceLevel": 1,
    "text": "Who would sneak an entire hot meal into a strict lecture hall and eat it silently behind a notebook?",
    "tags": [
      "food",
      "sneaky",
      "lecture"
    ]
  },
  {
    "id": "col_32",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🧯",
    "spiceLevel": 2,
    "text": "Who would accidentally cause a minor chemical evacuation during a standard 30-minute chemistry lab?",
    "tags": [
      "lab",
      "science",
      "hazard"
    ]
  },
  {
    "id": "col_33",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🏷️",
    "spiceLevel": 2,
    "text": "Who wears their college student ID lanyard around their neck in public like it's a high-end designer necklace?",
    "tags": [
      "id_card",
      "fashion",
      "nerd"
    ]
  },
  {
    "id": "col_34",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🤯",
    "spiceLevel": 2,
    "text": "Who stares blankly at the blackboard for 60 straight minutes and only understands the date written at the top?",
    "tags": [
      "confused",
      "lecture",
      "math"
    ]
  },
  {
    "id": "col_35",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "💬",
    "spiceLevel": 1,
    "text": "Who accidentally replies to the official college announcement group with an unhinged meme?",
    "tags": [
      "whatsapp",
      "group",
      "mishap"
    ]
  },
  {
    "id": "col_36",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🤷‍♂️",
    "spiceLevel": 1,
    "text": "Who asks 'Wait, what chapter are we on?' in the 14th week of the semester?",
    "tags": [
      "lost",
      "clueless",
      "semester"
    ]
  },
  {
    "id": "col_37",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🧃",
    "spiceLevel": 1,
    "text": "Who would loudly slurp the last drop of their juice box while the professor is having an intense monologue?",
    "tags": [
      "juice",
      "loud",
      "awkward"
    ]
  },
  {
    "id": "col_38",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🛌",
    "spiceLevel": 2,
    "text": "Who has attended a college morning Zoom lecture completely from underneath their cozy bed blanket?",
    "tags": [
      "zoom",
      "online_class",
      "bed"
    ]
  },
  {
    "id": "col_39",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🧼",
    "spiceLevel": 2,
    "text": "Who borrows someone else's lab coat, gets blue ink all over it, and returns it saying 'it was like that'?",
    "tags": [
      "lab_coat",
      "borrow",
      "denial"
    ]
  },
  {
    "id": "col_40",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🎯",
    "spiceLevel": 1,
    "text": "Who marks proxy attendance for three friends at the exact same time and gets caught immediately?",
    "tags": [
      "proxy",
      "attendance",
      "busted"
    ]
  },
  {
    "id": "col_41",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "📋",
    "spiceLevel": 2,
    "text": "Who copies an assignment so directly that they accidentally copy the other person's name and roll number?",
    "tags": [
      "cheating",
      "copy",
      "blunder"
    ]
  },
  {
    "id": "col_42",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🥳",
    "spiceLevel": 1,
    "text": "Who starts celebrating the end of exams two full weeks before exams actually finish?",
    "tags": [
      "celebrate",
      "exams",
      "premature"
    ]
  },
  {
    "id": "col_43",
    "category": "college_chaos",
    "categoryName": "College Chaos",
    "icon": "🏃‍♀️",
    "spiceLevel": 1,
    "text": "Who can sprint from the campus gate to the third-floor classroom in 42 seconds flat when late?",
    "tags": [
      "speed",
      "late",
      "stamina"
    ]
  },
  {
    "id": "fgr_1",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🧠",
    "spiceLevel": 2,
    "text": "Who gives two hours of elite relationship advice but makes the absolute worst personal life choices?",
    "tags": [
      "advice",
      "hypocrite",
      "love"
    ]
  },
  {
    "id": "fgr_2",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who is constantly active on Instagram and TikTok but takes 18 business hours to reply to the group chat?",
    "tags": [
      "ghosting",
      "replies",
      "texting"
    ]
  },
  {
    "id": "fgr_3",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🚪",
    "spiceLevel": 1,
    "text": "Who would enter a room, stand in the center looking confused, and completely forget why they came in?",
    "tags": [
      "forgetful",
      "brain_fog"
    ]
  },
  {
    "id": "fgr_4",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🗺️",
    "spiceLevel": 2,
    "text": "Who can turn a simple 10-minute coffee hangout into a complicated 4-hour logistical nightmare?",
    "tags": [
      "plans",
      "complicated",
      "overthinking"
    ]
  },
  {
    "id": "fgr_5",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🚗",
    "spiceLevel": 2,
    "text": "Who texts 'I'm five minutes away, start walking' while they are literally still wearing a bath towel?",
    "tags": [
      "late",
      "liar",
      "punctuality"
    ]
  },
  {
    "id": "fgr_6",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🍟",
    "spiceLevel": 1,
    "text": "Who insists 'I'm not hungry at all' and then systematically consumes half of everyone else's fries?",
    "tags": [
      "fries",
      "food_thief",
      "classic"
    ]
  },
  {
    "id": "fgr_7",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🎧",
    "spiceLevel": 1,
    "text": "Who holds the group hostage in the car with their chaotic, unhinged music playlist?",
    "tags": [
      "aux_cord",
      "music",
      "car"
    ]
  },
  {
    "id": "fgr_8",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🔋",
    "spiceLevel": 1,
    "text": "Who permanently walks around with 2% phone battery and asks for an iPhone charger wherever they go?",
    "tags": [
      "battery",
      "charger",
      "unprepared"
    ]
  },
  {
    "id": "fgr_9",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🤷‍♂️",
    "spiceLevel": 1,
    "text": "Who always answers 'I don't care, anything is fine' when picking dinner, and then hates every suggestion?",
    "tags": [
      "indecisive",
      "food",
      "annoying"
    ]
  },
  {
    "id": "fgr_10",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "💸",
    "spiceLevel": 2,
    "text": "Who 'forgets their wallet' or has an 'app payment glitch' right when the restaurant bill arrives?",
    "tags": [
      "bill",
      "cheap",
      "moocher"
    ]
  },
  {
    "id": "fgr_11",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🧳",
    "spiceLevel": 1,
    "text": "Who packs three full suitcases, seven pairs of shoes, and a hair diffuser for an overnight trip?",
    "tags": [
      "packing",
      "overprepared",
      "travel"
    ]
  },
  {
    "id": "fgr_12",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "😴",
    "spiceLevel": 1,
    "text": "Who begs everyone to watch a specific movie and passes out asleep within the first 6 minutes?",
    "tags": [
      "movie_night",
      "sleep",
      "betrayal"
    ]
  },
  {
    "id": "fgr_13",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🗣️",
    "spiceLevel": 2,
    "text": "Who starts telling a dramatic story, gets sidetracked by 4 irrelevant subplots, and never finishes the point?",
    "tags": [
      "storyteller",
      "rambling",
      "distracted"
    ]
  },
  {
    "id": "fgr_14",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "👗",
    "spiceLevel": 2,
    "text": "Who 'borrows' a jacket or hoodie and incorporates it permanently into their own everyday wardrobe?",
    "tags": [
      "clothes",
      "borrow",
      "hoodie_thief"
    ]
  },
  {
    "id": "fgr_15",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "😂",
    "spiceLevel": 1,
    "text": "Who starts laughing hysterically at their own joke before they even manage to say the punchline?",
    "tags": [
      "laughter",
      "giggles",
      "corny"
    ]
  },
  {
    "id": "fgr_16",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🏎️",
    "spiceLevel": 2,
    "text": "Who makes everyone in the passenger seat grab the ceiling handle and pray for their lives while driving?",
    "tags": [
      "driving",
      "reckless",
      "fear"
    ]
  },
  {
    "id": "fgr_17",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🎤",
    "spiceLevel": 1,
    "text": "Who sends 4-minute unbroken audio voice notes instead of typing a simple three-word text?",
    "tags": [
      "voice_note",
      "podcast",
      "audio"
    ]
  },
  {
    "id": "fgr_18",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "📦",
    "spiceLevel": 1,
    "text": "Who has unopened Amazon and courier delivery boxes sitting by their room door from two weeks ago?",
    "tags": [
      "packages",
      "lazy",
      "shopping"
    ]
  },
  {
    "id": "fgr_19",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Who claims 'I'm staying home to save money this month' and goes out partying the very next evening?",
    "tags": [
      "budget",
      "liar",
      "partying"
    ]
  },
  {
    "id": "fgr_20",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🔑",
    "spiceLevel": 1,
    "text": "Who has had to ask someone to help them look for the glasses or sunglasses resting right on their head?",
    "tags": [
      "sunglasses",
      "blind",
      "oblivious"
    ]
  },
  {
    "id": "fgr_21",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🎳",
    "spiceLevel": 1,
    "text": "Who gets uncontrollably competitive over casual board games and treats Monopoly like high-stakes poker?",
    "tags": [
      "competitive",
      "board_games",
      "rage"
    ]
  },
  {
    "id": "fgr_22",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "💅",
    "spiceLevel": 2,
    "text": "Who takes 45 minutes to get dressed only to wear almost the exact same black t-shirt and jeans?",
    "tags": [
      "outfit",
      "getting_ready",
      "slow"
    ]
  },
  {
    "id": "fgr_23",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🤐",
    "spiceLevel": 2,
    "text": "Who says 'promise not to tell anyone' and tells the entire secret to three other people by nightfall?",
    "tags": [
      "secrets",
      "spill_tea",
      "blabbermouth"
    ]
  },
  {
    "id": "fgr_24",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who makes their entire personality about their coffee order and cannot talk like a human before it?",
    "tags": [
      "coffee",
      "personality",
      "snob"
    ]
  },
  {
    "id": "fgr_25",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "📸",
    "spiceLevel": 1,
    "text": "Who will make everyone redo a group photo 14 times because their hair was tilted 2 degrees to the left?",
    "tags": [
      "photos",
      "perfectionist",
      "retake"
    ]
  },
  {
    "id": "fgr_26",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🛒",
    "spiceLevel": 1,
    "text": "Who walks into a convenience store for a bottle of water and comes out with $40 of totally random snacks?",
    "tags": [
      "snacks",
      "impulse",
      "store"
    ]
  },
  {
    "id": "fgr_27",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who stares into an open refrigerator full of groceries for 5 minutes and says 'there is literally no food'?",
    "tags": [
      "fridge",
      "dramatic",
      "hungry"
    ]
  },
  {
    "id": "fgr_28",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who finishes their entire movie popcorn tub before the opening credits of the movie even roll?",
    "tags": [
      "popcorn",
      "movie",
      "eater"
    ]
  },
  {
    "id": "fgr_29",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🛑",
    "spiceLevel": 2,
    "text": "Who is the absolute first friend to cancel weekend plans the second it looks slightly cloudy outside?",
    "tags": [
      "flaker",
      "cancelling",
      "lazy"
    ]
  },
  {
    "id": "fgr_30",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🔥",
    "spiceLevel": 2,
    "text": "Who drops an explosive controversial take into the group chat, says 'anyway goodnight', and goes to sleep?",
    "tags": [
      "chaos",
      "groupchat",
      "instigator"
    ]
  },
  {
    "id": "fgr_31",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🕶️",
    "spiceLevel": 1,
    "text": "Who acts completely unfazed by things that should terrify them, but screams at a harmless moth?",
    "tags": [
      "phobia",
      "bugs",
      "funny"
    ]
  },
  {
    "id": "fgr_32",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🥗",
    "spiceLevel": 1,
    "text": "Who announces 'I am starting my healthy fitness era tomorrow' every single Sunday evening without fail?",
    "tags": [
      "diet",
      "gym",
      "sunday"
    ]
  },
  {
    "id": "fgr_33",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who acts like an intellectual philosopher after drinking one single sip of energy drink?",
    "tags": [
      "philosopher",
      "energy_drink",
      "deep"
    ]
  },
  {
    "id": "fgr_34",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "👀",
    "spiceLevel": 1,
    "text": "Who cannot keep eye contact during a serious conversation without cracking a stupid smile?",
    "tags": [
      "smile",
      "awkward",
      "giggles"
    ]
  },
  {
    "id": "fgr_35",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🎉",
    "spiceLevel": 2,
    "text": "Who plans their entire birthday month celebration six full months in advance?",
    "tags": [
      "birthday",
      "attention",
      "celebration"
    ]
  },
  {
    "id": "fgr_36",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who drops their phone directly onto their own face while lying in bed at least twice a week?",
    "tags": [
      "phone",
      "bed",
      "clumsy"
    ]
  },
  {
    "id": "fgr_37",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🚶",
    "spiceLevel": 1,
    "text": "Who walks at a speed that forces everyone else in the friend group to either jog or completely drag behind?",
    "tags": [
      "walking",
      "speed",
      "pacing"
    ]
  },
  {
    "id": "fgr_38",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🧙‍♂️",
    "spiceLevel": 2,
    "text": "Who randomly adopts a bizarre new aesthetic or hobby for 10 days and acts like it's their true calling?",
    "tags": [
      "phases",
      "hobby",
      "aesthetic"
    ]
  },
  {
    "id": "fgr_39",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🧼",
    "spiceLevel": 2,
    "text": "Who leaves one microscopic sip of milk or juice in the carton so they don't have to throw it in the trash?",
    "tags": [
      "carton",
      "lazy",
      "petty"
    ]
  },
  {
    "id": "fgr_40",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "💬",
    "spiceLevel": 2,
    "text": "Who deletes their sent messages in the group chat if nobody reacts to them within 3 minutes?",
    "tags": [
      "unsend",
      "insecure",
      "chat"
    ]
  },
  {
    "id": "fgr_41",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🧁",
    "spiceLevel": 1,
    "text": "Who buys a gym membership in January, goes twice, and spends the next 11 months paying for guilt?",
    "tags": [
      "gym",
      "subscription",
      "wasted"
    ]
  },
  {
    "id": "fgr_42",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🤝",
    "spiceLevel": 1,
    "text": "Who makes best friends with a random stranger in the restaurant restroom within 90 seconds?",
    "tags": [
      "extrovert",
      "restroom",
      "friendly"
    ]
  },
  {
    "id": "fgr_43",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🚗",
    "spiceLevel": 2,
    "text": "Who turns down the car stereo volume specifically so they can 'see better' when parallel parking?",
    "tags": [
      "driving",
      "stereo",
      "parking"
    ]
  },
  {
    "id": "fgr_44",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🏖️",
    "spiceLevel": 1,
    "text": "Who plans a group vacation with a color-coded Excel spreadsheet and gets mad when people wake up at 9:05 AM?",
    "tags": [
      "vacation",
      "planner",
      "micromanage"
    ]
  },
  {
    "id": "fgr_45",
    "category": "friend_group_roast",
    "categoryName": "Friend Group Roast",
    "icon": "🏆",
    "spiceLevel": 2,
    "text": "Who is definitely going to bring up their victory in this party game at dinner three months from now?",
    "tags": [
      "bragging",
      "game_night",
      "winner"
    ]
  },
  {
    "id": "dkq_1",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🏆",
    "spiceLevel": 2,
    "text": "Who deserves an international Oscar for overacting in everyday, minor inconveniences?",
    "tags": [
      "oscar",
      "overacting",
      "drama"
    ]
  },
  {
    "id": "dkq_2",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎬",
    "spiceLevel": 2,
    "text": "Who turns a small disagreement about where to eat into a three-season emotional Netflix drama?",
    "tags": [
      "netflix",
      "drama",
      "exaggeration"
    ]
  },
  {
    "id": "dkq_3",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🚪",
    "spiceLevel": 1,
    "text": "Who would make a dramatic slow-motion entrance even when walking into a totally empty room?",
    "tags": [
      "entrance",
      "main_character",
      "flair"
    ]
  },
  {
    "id": "dkq_4",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🩹",
    "spiceLevel": 1,
    "text": "Who treats a tiny paper cut like they require an immediate emergency airlift to intensive care?",
    "tags": [
      "papercut",
      "overreaction",
      "medical"
    ]
  },
  {
    "id": "dkq_5",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🌧️",
    "spiceLevel": 1,
    "text": "Who stares out of the passenger car window during light drizzle like they are in a melancholic music video?",
    "tags": [
      "rain",
      "music_video",
      "melodrama"
    ]
  },
  {
    "id": "dkq_6",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "💬",
    "spiceLevel": 2,
    "text": "Who sends 'We need to talk...' and then goes completely silent for two hours while everyone panics?",
    "tags": [
      "panic",
      "text",
      "cliffhanger"
    ]
  },
  {
    "id": "dkq_7",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "😤",
    "spiceLevel": 2,
    "text": "Who sighs loudly enough to rattle windowpanes just so someone asks 'What's wrong?'",
    "tags": [
      "sigh",
      "attention",
      "subtle"
    ]
  },
  {
    "id": "dkq_8",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎭",
    "spiceLevel": 2,
    "text": "Who delivers everyday gossip like they are narrating a high-stakes Shakespearean tragedy?",
    "tags": [
      "shakespeare",
      "gossip",
      "narrator"
    ]
  },
  {
    "id": "dkq_9",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "💔",
    "spiceLevel": 2,
    "text": "Who claims 'My life is completely ruined forever' when their favorite cafe is out of oat milk?",
    "tags": [
      "oat_milk",
      "ruined",
      "hyperbole"
    ]
  },
  {
    "id": "dkq_10",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who acts like the main character in a movie while everyone else is just unpaid background extras?",
    "tags": [
      "main_character",
      "ego",
      "spotlight"
    ]
  },
  {
    "id": "dkq_11",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "📦",
    "spiceLevel": 1,
    "text": "Who threatens to pack their bags and move to a remote Scottish lighthouse whenever they have a mild bad day?",
    "tags": [
      "lighthouse",
      "runaway",
      "extreme"
    ]
  },
  {
    "id": "dkq_12",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "💅",
    "spiceLevel": 1,
    "text": "Who says 'I literally despise drama' right before unleashing 45 minutes of unfiltered drama on the group?",
    "tags": [
      "hypocrite",
      "tea",
      "gossip"
    ]
  },
  {
    "id": "dkq_13",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🕶️",
    "spiceLevel": 1,
    "text": "Who wears dark sunglasses indoors and expects people to treat them like an incognito international celebrity?",
    "tags": [
      "sunglasses",
      "celebrity",
      "pretense"
    ]
  },
  {
    "id": "dkq_14",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "📴",
    "spiceLevel": 2,
    "text": "Who posts a cryptic black screen with the caption 'Do not contact me' and checks views every 40 seconds?",
    "tags": [
      "cryptic",
      "attention",
      "story"
    ]
  },
  {
    "id": "dkq_15",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🚪",
    "spiceLevel": 2,
    "text": "Who leaves a WhatsApp group chat in a dramatic huff just waiting for someone to privately beg them to rejoin?",
    "tags": [
      "left_group",
      "ragequit",
      "pettiness"
    ]
  },
  {
    "id": "dkq_16",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who acts like their heart was personally shattered into a thousand pieces when their food delivery is 7 minutes late?",
    "tags": [
      "delivery",
      "food",
      "heartbreak"
    ]
  },
  {
    "id": "dkq_17",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎤",
    "spiceLevel": 2,
    "text": "Who turns a casual dinner speech into an emotional farewell monologue where people are about to cry?",
    "tags": [
      "monologue",
      "speech",
      "intensity"
    ]
  },
  {
    "id": "dkq_18",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🧼",
    "spiceLevel": 1,
    "text": "Who will throw themselves face-down onto the sofa like a Victorian royal with a sudden fainting spell?",
    "tags": [
      "victorian",
      "fainting",
      "sofa"
    ]
  },
  {
    "id": "dkq_19",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🧯",
    "spiceLevel": 2,
    "text": "Who manages to find an offense in a compliment that was 100% genuine and kind?",
    "tags": [
      "offended",
      "twist",
      "drama"
    ]
  },
  {
    "id": "dkq_20",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "⚡",
    "spiceLevel": 2,
    "text": "Who responds to a minor mistake with 'No it's fine, I'm used to nobody caring about my feelings'?",
    "tags": [
      "guilt_trip",
      "passive_aggressive",
      "pro"
    ]
  },
  {
    "id": "dkq_21",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who gets physically excited and grabs snacks the second they sense two other friends are having beef?",
    "tags": [
      "tea",
      "spectator",
      "popcorn"
    ]
  },
  {
    "id": "dkq_22",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "📯",
    "spiceLevel": 2,
    "text": "Who sends 24 consecutive one-word text messages instead of typing one normal paragraph?",
    "tags": [
      "spam",
      "notifications",
      "chaotic"
    ]
  },
  {
    "id": "dkq_23",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🕯️",
    "spiceLevel": 1,
    "text": "Who sets up moody room lighting, lights candles, and puts on sad violin music over a mild inconvenience?",
    "tags": [
      "aesthetic",
      "candles",
      "sad"
    ]
  },
  {
    "id": "dkq_24",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "📜",
    "spiceLevel": 2,
    "text": "Who keeps receipts and screenshots of group arguments from 2021 just to bring them up in debate?",
    "tags": [
      "receipts",
      "screenshots",
      "petty"
    ]
  },
  {
    "id": "dkq_25",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "👗",
    "spiceLevel": 1,
    "text": "Who will refuse to attend an event because 'someone else might wear a vaguely similar shade of blue'?",
    "tags": [
      "outfit",
      "clash",
      "fussy"
    ]
  },
  {
    "id": "dkq_26",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🔥",
    "spiceLevel": 2,
    "text": "Who creates an imaginary crisis in their head during the shower and comes out genuinely mad at a friend?",
    "tags": [
      "shower_thoughts",
      "imaginary",
      "anger"
    ]
  },
  {
    "id": "dkq_27",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🛑",
    "spiceLevel": 2,
    "text": "Who would fake an ankle sprain to get out of helping a friend carry furniture up the stairs?",
    "tags": [
      "excuses",
      "injury",
      "moving"
    ]
  },
  {
    "id": "dkq_28",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎧",
    "spiceLevel": 1,
    "text": "Who abruptly puts noise-canceling headphones on during a debate and dramatically closes their eyes?",
    "tags": [
      "shutdown",
      "headphones",
      "exit"
    ]
  },
  {
    "id": "dkq_29",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🧊",
    "spiceLevel": 2,
    "text": "Who gives the ice-cold silent treatment and makes everyone play detective to figure out what happened?",
    "tags": [
      "silent_treatment",
      "clueless",
      "cold"
    ]
  },
  {
    "id": "dkq_30",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "📸",
    "spiceLevel": 1,
    "text": "Who takes a candid selfie looking pensive and writes a deeply philosophical caption about betrayal?",
    "tags": [
      "caption",
      "selfie",
      "betrayal"
    ]
  },
  {
    "id": "dkq_31",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🧳",
    "spiceLevel": 2,
    "text": "Who says 'I'm cutting everyone off and starting a fresh life' and is back in the group chat by 8 PM?",
    "tags": [
      "cut_off",
      "comeback",
      "predictable"
    ]
  },
  {
    "id": "dkq_32",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who stirs their tea slowly while making intense, judging eye contact like a villain in an anime?",
    "tags": [
      "villain",
      "tea",
      "glare"
    ]
  },
  {
    "id": "dkq_33",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎬",
    "spiceLevel": 2,
    "text": "Who narrates their own everyday thoughts out loud like they have a live studio audience watching?",
    "tags": [
      "audience",
      "narrate",
      "loud"
    ]
  },
  {
    "id": "dkq_34",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🔍",
    "spiceLevel": 2,
    "text": "Who analyzes the punctuation in a text message ('they used a period, they definitely hate me')?",
    "tags": [
      "overthinking",
      "punctuation",
      "texts"
    ]
  },
  {
    "id": "dkq_35",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🎉",
    "spiceLevel": 1,
    "text": "Who has to be personally invited three times to a party before they agree to show up?",
    "tags": [
      "hard_to_get",
      "invitation",
      "royal"
    ]
  },
  {
    "id": "dkq_36",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🍔",
    "spiceLevel": 1,
    "text": "Who inspects a fast food burger like a forensic scientist looking for microscopic imperfections?",
    "tags": [
      "picky",
      "inspection",
      "food"
    ]
  },
  {
    "id": "dkq_37",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🪞",
    "spiceLevel": 1,
    "text": "Who checks their reflection in store windows, parked car windows, and soup spoons when walking?",
    "tags": [
      "reflection",
      "vanity",
      "spoons"
    ]
  },
  {
    "id": "dkq_38",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who claims they had a premonition or spiritual vision about something completely obvious?",
    "tags": [
      "psychic",
      "premonition",
      "obvious"
    ]
  },
  {
    "id": "dkq_39",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "💔",
    "spiceLevel": 2,
    "text": "Who holds a grudge for 8 months over someone forgetting to save them a bite of garlic bread?",
    "tags": [
      "grudge",
      "garlic_bread",
      "petty"
    ]
  },
  {
    "id": "dkq_40",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "⚡",
    "spiceLevel": 2,
    "text": "Who walks out of an argument with a dramatic spin and hair-flip like they just won a courtroom trial?",
    "tags": [
      "courtroom",
      "hair_flip",
      "exit"
    ]
  },
  {
    "id": "dkq_41",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "🤒",
    "spiceLevel": 1,
    "text": "Who googles a mild headache and convinces themselves they have 48 hours to live?",
    "tags": [
      "webmd",
      "hypochondriac",
      "panic"
    ]
  },
  {
    "id": "dkq_42",
    "category": "drama_king_queen",
    "categoryName": "Drama King/Queen",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who would wear a literal glittering crown to a casual backyard barbeque without a hint of irony?",
    "tags": [
      "crown",
      "barbeque",
      "royalty"
    ]
  },
  {
    "id": "sma_1",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who checks Instagram every two minutes even when they literally just closed the app?",
    "tags": [
      "instagram",
      "addiction",
      "muscle_memory"
    ]
  },
  {
    "id": "sma_2",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📸",
    "spiceLevel": 1,
    "text": "Who takes 100 selfies with slightly different head angles and uploads literally zero of them?",
    "tags": [
      "selfies",
      "indecisive",
      "camera_roll"
    ]
  },
  {
    "id": "sma_3",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🤡",
    "spiceLevel": 2,
    "text": "Who would accidentally trip in public and end up becoming a viral meme on Twitter overnight?",
    "tags": [
      "viral",
      "meme",
      "clumsy"
    ]
  },
  {
    "id": "sma_4",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🍝",
    "spiceLevel": 1,
    "text": "Who refuses to let anyone touch their hot food until they have staged a 12-shot aesthetic photoshoot?",
    "tags": [
      "food_photo",
      "cold_food",
      "aesthetic"
    ]
  },
  {
    "id": "sma_5",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "👀",
    "spiceLevel": 2,
    "text": "Who accidentally liked someone's vacation photo from 2016 while deep in 3 AM stalker mode?",
    "tags": [
      "stalking",
      "accidental_like",
      "nightmare"
    ]
  },
  {
    "id": "sma_6",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📊",
    "spiceLevel": 2,
    "text": "Who deletes an Instagram post within 14 minutes if it doesn't hit their desired like ratio?",
    "tags": [
      "likes",
      "validation",
      "delete"
    ]
  },
  {
    "id": "sma_7",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🕵️‍♀️",
    "spiceLevel": 2,
    "text": "Who could find a stranger's ex's cousin's dog's birthday within 4 minutes using pure social media stalking?",
    "tags": [
      "fbi",
      "stalker",
      "detective"
    ]
  },
  {
    "id": "sma_8",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🎵",
    "spiceLevel": 1,
    "text": "Who knows every single viral TikTok dance and performs it unconsciously in public queues?",
    "tags": [
      "tiktok",
      "dance",
      "unconscious"
    ]
  },
  {
    "id": "sma_9",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💅",
    "spiceLevel": 2,
    "text": "Who has a 'Finsta' or secret burner account with more wild activity than their main account?",
    "tags": [
      "finsta",
      "burner",
      "secrets"
    ]
  },
  {
    "id": "sma_10",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💬",
    "spiceLevel": 1,
    "text": "Who communicates almost exclusively in reels, memes, and TikTok links with zero actual words?",
    "tags": [
      "reels",
      "memes",
      "communication"
    ]
  },
  {
    "id": "sma_11",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "✈️",
    "spiceLevel": 1,
    "text": "Who goes to a scenic view or concert and watches the entire magical event through their tiny phone screen?",
    "tags": [
      "concert",
      "recording",
      "screen"
    ]
  },
  {
    "id": "sma_12",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who only orders food or drinks based strictly on how visually aesthetic it will look on their story?",
    "tags": [
      "aesthetic",
      "drinks",
      "shallow"
    ]
  },
  {
    "id": "sma_13",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📉",
    "spiceLevel": 1,
    "text": "Who checks who viewed their Instagram story 40 times a day in chronological order?",
    "tags": [
      "story_views",
      "stalking",
      "obsession"
    ]
  },
  {
    "id": "sma_14",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🔋",
    "spiceLevel": 1,
    "text": "Who experiences physical chest tightness when entering a cafe that has no public Wi-Fi?",
    "tags": [
      "wifi",
      "panic",
      "disconnection"
    ]
  },
  {
    "id": "sma_15",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who writes deep inspirational philosophical quotes under a picture that is 98% just their face?",
    "tags": [
      "caption",
      "selfie",
      "cringe"
    ]
  },
  {
    "id": "sma_16",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🪞",
    "spiceLevel": 1,
    "text": "Who cannot walk past a restroom mirror without taking an obligatory flash mirror selfie?",
    "tags": [
      "mirror_selfie",
      "restroom",
      "habit"
    ]
  },
  {
    "id": "sma_17",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🗣️",
    "spiceLevel": 2,
    "text": "Who starts real-life conversations with 'Did you see that TikTok about...' at least 8 times an hour?",
    "tags": [
      "tiktok",
      "conversation",
      "repeater"
    ]
  },
  {
    "id": "sma_18",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🎬",
    "spiceLevel": 2,
    "text": "Who has spent 45 minutes recording a 'get ready with me' video and ended up late to the actual event?",
    "tags": [
      "grwm",
      "late",
      "influencer"
    ]
  },
  {
    "id": "sma_19",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🔍",
    "spiceLevel": 1,
    "text": "Who zooms into the reflection in someone's sunglasses in a photo to figure out who took the picture?",
    "tags": [
      "fbi",
      "reflection",
      "investigator"
    ]
  },
  {
    "id": "sma_20",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📴",
    "spiceLevel": 1,
    "text": "Who announces a 'social media detox' and returns to posting 11 stories within 18 hours?",
    "tags": [
      "detox",
      "failed",
      "relapse"
    ]
  },
  {
    "id": "sma_21",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🎂",
    "spiceLevel": 2,
    "text": "Who posts a birthday wish for a friend with a picture where the friend looks terrible but they look stunning?",
    "tags": [
      "birthday_post",
      "selfish",
      "petty"
    ]
  },
  {
    "id": "sma_22",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🏷️",
    "spiceLevel": 1,
    "text": "Who tags 14 different micro-influencer brands in a post hoping for free PR packages?",
    "tags": [
      "tagging",
      "influencer",
      "freebies"
    ]
  },
  {
    "id": "sma_23",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "😴",
    "spiceLevel": 1,
    "text": "Who says 'one more video before bed' at 11 PM and looks up to see the sunrise at 5:30 AM?",
    "tags": [
      "doomscroll",
      "sleep",
      "tiktok"
    ]
  },
  {
    "id": "sma_24",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💃",
    "spiceLevel": 2,
    "text": "Who would force their friends to record 15 takes of a trendy street dance in the middle of a crowded mall?",
    "tags": [
      "public",
      "embarrassing",
      "takes"
    ]
  },
  {
    "id": "sma_25",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📦",
    "spiceLevel": 1,
    "text": "Who unboxes everything they buy on camera like they have a million subscribers watching?",
    "tags": [
      "unboxing",
      "haul",
      "delusion"
    ]
  },
  {
    "id": "sma_26",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "⚡",
    "spiceLevel": 2,
    "text": "Who has their screen-time report at a terrifying 9+ hours a day and just laughs about it?",
    "tags": [
      "screen_time",
      "hours",
      "addict"
    ]
  },
  {
    "id": "sma_27",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🥑",
    "spiceLevel": 1,
    "text": "Who spends $14 on an overpriced matcha drink purely to take a photo holding it against a white wall?",
    "tags": [
      "matcha",
      "prop",
      "aesthetic"
    ]
  },
  {
    "id": "sma_28",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🤝",
    "spiceLevel": 2,
    "text": "Who unfollows someone on social media and considers it the ultimate form of psychological warfare?",
    "tags": [
      "unfollow",
      "warfare",
      "passive"
    ]
  },
  {
    "id": "sma_29",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🎤",
    "spiceLevel": 1,
    "text": "Who lip-syncs to TikTok sounds while walking down the street thinking nobody can see them?",
    "tags": [
      "lipsync",
      "public",
      "caught"
    ]
  },
  {
    "id": "sma_30",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🔐",
    "spiceLevel": 2,
    "text": "Who has their close friends list curated like a top-secret VIP nightclub guest list?",
    "tags": [
      "close_friends",
      "vip",
      "exclusive"
    ]
  },
  {
    "id": "sma_31",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🌴",
    "spiceLevel": 1,
    "text": "Who posts photos from a vacation two months after they came home with caption 'Take me back'?",
    "tags": [
      "throwback",
      "vacation",
      "delayed"
    ]
  },
  {
    "id": "sma_32",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💬",
    "spiceLevel": 1,
    "text": "Who leaves whole paragraphs in the comments section of celebrity Instagram accounts?",
    "tags": [
      "celebrity",
      "comments",
      "delusion"
    ]
  },
  {
    "id": "sma_33",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who asks for the restaurant Wi-Fi password before they even glance at the food menu?",
    "tags": [
      "wifi",
      "priorities",
      "phone"
    ]
  },
  {
    "id": "sma_34",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🤦‍♀️",
    "spiceLevel": 2,
    "text": "Who gets genuine FOMO from seeing people they don't even like having fun at an event they didn't want to attend?",
    "tags": [
      "fomo",
      "jealousy",
      "irrational"
    ]
  },
  {
    "id": "sma_35",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who checks their phone while crossing the street and relies on intuition to not get hit by traffic?",
    "tags": [
      "jaywalking",
      "danger",
      "phone"
    ]
  },
  {
    "id": "sma_36",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🎉",
    "spiceLevel": 2,
    "text": "Who throws an entire themed party just because they had an aesthetic photo concept in mind?",
    "tags": [
      "party",
      "photoshoot",
      "concept"
    ]
  },
  {
    "id": "sma_37",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🕶️",
    "spiceLevel": 2,
    "text": "Who uses three different photo editing apps to subtly edit out a single photobombing stranger?",
    "tags": [
      "photoshop",
      "editing",
      "perfection"
    ]
  },
  {
    "id": "sma_38",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💌",
    "spiceLevel": 2,
    "text": "Who screenshotted a private chat and almost accidentally sent the screenshot back to the same person?",
    "tags": [
      "close_call",
      "screenshot",
      "panic"
    ]
  },
  {
    "id": "sma_39",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🐶",
    "spiceLevel": 1,
    "text": "Who creates a dedicated Instagram profile for their pet and writes captions in first-person pet voice?",
    "tags": [
      "pet",
      "instagram",
      "cringe"
    ]
  },
  {
    "id": "sma_40",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "💡",
    "spiceLevel": 1,
    "text": "Who knows all the latest internet slang 10 minutes after it's born and uses it non-stop in offline life?",
    "tags": [
      "slang",
      "gen_z",
      "lingo"
    ]
  },
  {
    "id": "sma_41",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "📸",
    "spiceLevel": 1,
    "text": "Who has 28,000 photos in their camera roll and 95% of them are blurry screenshots of recipes they will never cook?",
    "tags": [
      "camera_roll",
      "storage",
      "recipes"
    ]
  },
  {
    "id": "sma_42",
    "category": "social_media_addict",
    "categoryName": "Social Media Addict",
    "icon": "🏆",
    "spiceLevel": 1,
    "text": "Who will post a screenshot of winning this game on their story within 60 seconds of it ending?",
    "tags": [
      "flex",
      "story",
      "winner"
    ]
  },
  {
    "id": "fut_1",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "⭐",
    "spiceLevel": 1,
    "text": "Who would become unexpectedly famous for the most bizarre, random 15-second viral video?",
    "tags": [
      "famous",
      "viral",
      "future"
    ]
  },
  {
    "id": "fut_2",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "💼",
    "spiceLevel": 1,
    "text": "Who would start a startup company, raise funding, and forget what product they actually sell?",
    "tags": [
      "startup",
      "business",
      "clueless"
    ]
  },
  {
    "id": "fut_3",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "💰",
    "spiceLevel": 2,
    "text": "Who would secretly become a multi-millionaire but still ask their friends to pay for their taxi ride?",
    "tags": [
      "millionaire",
      "cheap",
      "moocher"
    ]
  },
  {
    "id": "fut_4",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏡",
    "spiceLevel": 1,
    "text": "Who will end up living in a giant mansion completely alone with 14 rescue golden retrievers?",
    "tags": [
      "dogs",
      "mansion",
      "recluse"
    ]
  },
  {
    "id": "fut_5",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🗳️",
    "spiceLevel": 2,
    "text": "Who would run for local mayor as an inside joke and accidentally end up winning the election?",
    "tags": [
      "politics",
      "mayor",
      "accident"
    ]
  },
  {
    "id": "fut_6",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "📺",
    "spiceLevel": 2,
    "text": "Who is most likely to be cast as the villain on a trashy reality TV dating show?",
    "tags": [
      "reality_tv",
      "dating",
      "villain"
    ]
  },
  {
    "id": "fut_7",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🚀",
    "spiceLevel": 1,
    "text": "Who would sign up for a one-way commercial ticket to Mars just to avoid everyday awkward conversations?",
    "tags": [
      "mars",
      "space",
      "introvert"
    ]
  },
  {
    "id": "fut_8",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏰",
    "spiceLevel": 1,
    "text": "Who will buy a dilapidated 18th-century French castle on a whim and attempt to renovate it with zero DIY skills?",
    "tags": [
      "castle",
      "renovation",
      "impulse"
    ]
  },
  {
    "id": "fut_9",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "📚",
    "spiceLevel": 2,
    "text": "Who will write a spicy tell-all memoir exposing all the secrets of this friend group in 20 years?",
    "tags": [
      "memoir",
      "expose",
      "secrets"
    ]
  },
  {
    "id": "fut_10",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who will open a food truck selling bizarre fusion food that literally nobody asked for?",
    "tags": [
      "food_truck",
      "fusion",
      "culinary"
    ]
  },
  {
    "id": "fut_11",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🕵️",
    "spiceLevel": 2,
    "text": "Who would accidentally stumble into working for an international intelligence spy agency?",
    "tags": [
      "spy",
      "intelligence",
      "accident"
    ]
  },
  {
    "id": "fut_12",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎤",
    "spiceLevel": 1,
    "text": "Who would start a podcast with zero listeners and record 300 episodes talking to themselves?",
    "tags": [
      "podcast",
      "stubborn",
      "audio"
    ]
  },
  {
    "id": "fut_13",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏖️",
    "spiceLevel": 1,
    "text": "Who will fake their own retirement at age 29 to live quietly on a tropical beach drinking coconut water?",
    "tags": [
      "retirement",
      "beach",
      "early"
    ]
  },
  {
    "id": "fut_14",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🤖",
    "spiceLevel": 1,
    "text": "Who will be the first person to marry an AI chatbot companion and introduce it to their parents?",
    "tags": [
      "ai",
      "chatbot",
      "future"
    ]
  },
  {
    "id": "fut_15",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "💸",
    "spiceLevel": 2,
    "text": "Who will lose a substantial portion of their life savings investing in a cryptocurrency named after a dog or fruit?",
    "tags": [
      "crypto",
      "investing",
      "loss"
    ]
  },
  {
    "id": "fut_16",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🧘",
    "spiceLevel": 1,
    "text": "Who will abandon all modern technology to become an enigmatic mountain meditation guru in the Himalayas?",
    "tags": [
      "guru",
      "mountains",
      "peace"
    ]
  },
  {
    "id": "fut_17",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏎️",
    "spiceLevel": 2,
    "text": "Who will buy a bright red sports car during an intense mid-life crisis at the tender age of 24?",
    "tags": [
      "crisis",
      "sports_car",
      "impulse"
    ]
  },
  {
    "id": "fut_18",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎭",
    "spiceLevel": 1,
    "text": "Who will end up on a billboard in Times Square for a product they don't even remember modeling for?",
    "tags": [
      "billboard",
      "model",
      "surprise"
    ]
  },
  {
    "id": "fut_19",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🔮",
    "spiceLevel": 1,
    "text": "Who will open an underground psychic palm-reading parlor and charge $80 to tell people obvious truths?",
    "tags": [
      "psychic",
      "palm_reading",
      "hustle"
    ]
  },
  {
    "id": "fut_20",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏆",
    "spiceLevel": 1,
    "text": "Who will break an official Guinness World Record for the most ridiculous, pointless human achievement?",
    "tags": [
      "world_record",
      "guinness",
      "random"
    ]
  },
  {
    "id": "fut_21",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "👩‍⚖️",
    "spiceLevel": 2,
    "text": "Who would sue a fast food company over a missing chicken nugget and take it all the way to the Supreme Court?",
    "tags": [
      "lawsuit",
      "lawyer",
      "petty"
    ]
  },
  {
    "id": "fut_22",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🌴",
    "spiceLevel": 1,
    "text": "Who would buy a private island and establish their own national anthem and currency?",
    "tags": [
      "island",
      "country",
      "leader"
    ]
  },
  {
    "id": "fut_23",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who will open a boutique cafe that only serves one specific beverage and closes at 1:15 PM every day?",
    "tags": [
      "cafe",
      "hipster",
      "hours"
    ]
  },
  {
    "id": "fut_24",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎩",
    "spiceLevel": 2,
    "text": "Who will show up to our 10-year college reunion pretending to speak with an aristocratic fake British accent?",
    "tags": [
      "reunion",
      "accent",
      "fake"
    ]
  },
  {
    "id": "fut_25",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🧼",
    "spiceLevel": 1,
    "text": "Who will launch an artisanal handmade soap business from their bathtub and sell bars for $35 each?",
    "tags": [
      "soap",
      "artisan",
      "business"
    ]
  },
  {
    "id": "fut_26",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎬",
    "spiceLevel": 1,
    "text": "Who will direct an indie film that nobody understands but wins high praise at an obscure European film festival?",
    "tags": [
      "indie_film",
      "artsy",
      "pretentious"
    ]
  },
  {
    "id": "fut_27",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎪",
    "spiceLevel": 2,
    "text": "Who would run away and join a circus as the enthusiastic ringmaster?",
    "tags": [
      "circus",
      "ringmaster",
      "adventure"
    ]
  },
  {
    "id": "fut_28",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🛸",
    "spiceLevel": 1,
    "text": "Who will build a bunker in their backyard because they are 100% convinced aliens will land on a Tuesday?",
    "tags": [
      "aliens",
      "bunker",
      "paranoia"
    ]
  },
  {
    "id": "fut_29",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🧁",
    "spiceLevel": 1,
    "text": "Who will win a televised cooking show by total accident after messing up the original recipe?",
    "tags": [
      "cooking",
      "tv",
      "lucky"
    ]
  },
  {
    "id": "fut_30",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "👔",
    "spiceLevel": 2,
    "text": "Who will accidentally become a Fortune 500 executive by nodding wisely in board meetings without knowing the topic?",
    "tags": [
      "executive",
      "corporate",
      "nodding"
    ]
  },
  {
    "id": "fut_31",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎸",
    "spiceLevel": 1,
    "text": "Who will start an acoustic rock band at age 40 and demand their friends attend every weekly gig?",
    "tags": [
      "rockband",
      "gig",
      "loyalty"
    ]
  },
  {
    "id": "fut_32",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🐈",
    "spiceLevel": 1,
    "text": "Who will leave their entire future estate and assets to their favorite pet cat?",
    "tags": [
      "will",
      "cat",
      "inheritance"
    ]
  },
  {
    "id": "fut_33",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who will patent an invention that solves a problem that no human being has ever experienced?",
    "tags": [
      "invention",
      "useless",
      "patent"
    ]
  },
  {
    "id": "fut_34",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🚢",
    "spiceLevel": 1,
    "text": "Who will spend their golden years permanently living aboard a luxury cruise ship buffets?",
    "tags": [
      "cruise",
      "buffet",
      "retirement"
    ]
  },
  {
    "id": "fut_35",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🗺️",
    "spiceLevel": 1,
    "text": "Who will go backpacking across South America and forget to ever come back home?",
    "tags": [
      "backpacking",
      "wanderlust",
      "vanish"
    ]
  },
  {
    "id": "fut_36",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🕵️",
    "spiceLevel": 2,
    "text": "Who will become a private investigator specializing solely in catching cheating boyfriends?",
    "tags": [
      "private_eye",
      "investigator",
      "scandal"
    ]
  },
  {
    "id": "fut_37",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🧳",
    "spiceLevel": 1,
    "text": "Who will accidentally pack someone else's identical suitcase at the airport baggage carousel and keep it?",
    "tags": [
      "airport",
      "suitcase",
      "mishap"
    ]
  },
  {
    "id": "fut_38",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏢",
    "spiceLevel": 2,
    "text": "Who will be the boss that sends company-wide emails in all-caps at 3:15 AM on a Saturday?",
    "tags": [
      "boss",
      "emails",
      "workaholic"
    ]
  },
  {
    "id": "fut_39",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🏆",
    "spiceLevel": 1,
    "text": "Who will win a lifetime supply of something completely useless like dental floss or canned beans?",
    "tags": [
      "sweepstakes",
      "supply",
      "beans"
    ]
  },
  {
    "id": "fut_40",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "🎉",
    "spiceLevel": 2,
    "text": "Who will crash a celebrity wedding in Europe and end up in the official family album photo?",
    "tags": [
      "wedding_crasher",
      "celebrity",
      "bold"
    ]
  },
  {
    "id": "fut_41",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "📜",
    "spiceLevel": 1,
    "text": "Who will be that person who enters a spelling bee competition as an adult just to win a plastic trophy?",
    "tags": [
      "trophy",
      "petty",
      "contest"
    ]
  },
  {
    "id": "fut_42",
    "category": "future_predictions",
    "categoryName": "Future Predictions",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who will be the first in the group to have their own dedicated Wikipedia controversies section?",
    "tags": [
      "wikipedia",
      "scandal",
      "infamous"
    ]
  },
  {
    "id": "rc_1",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🗺️",
    "spiceLevel": 1,
    "text": "Who would genuinely argue with the Google Maps automated GPS voice and miss four straight turns?",
    "tags": [
      "gps",
      "driving",
      "argument"
    ]
  },
  {
    "id": "rc_2",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🏝️",
    "spiceLevel": 1,
    "text": "Who would survive the longest on a deserted island purely by befriending a volleyball or coconut?",
    "tags": [
      "island",
      "survival",
      "castaway"
    ]
  },
  {
    "id": "rc_3",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who would accidentally become the supreme leader of a completely imaginary made-up country?",
    "tags": [
      "leader",
      "imaginary",
      "chaos"
    ]
  },
  {
    "id": "rc_4",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧟‍♂️",
    "spiceLevel": 2,
    "text": "Who would survive less than 90 seconds in a zombie apocalypse because they stopped to find their phone?",
    "tags": [
      "zombie",
      "apocalypse",
      "survival"
    ]
  },
  {
    "id": "rc_5",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🛗",
    "spiceLevel": 1,
    "text": "Who presses the elevator button 16 times as if the elevator will travel 16 times faster?",
    "tags": [
      "elevator",
      "impatience",
      "habit"
    ]
  },
  {
    "id": "rc_6",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "👻",
    "spiceLevel": 1,
    "text": "Who would be the first person to get spooked by their own coat hanging on a door in the dark?",
    "tags": [
      "scared",
      "shadow",
      "spooky"
    ]
  },
  {
    "id": "rc_7",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🛒",
    "spiceLevel": 1,
    "text": "Who rides on the back of the grocery shopping cart down the supermarket aisle when nobody is looking?",
    "tags": [
      "shopping_cart",
      "childish",
      "fun"
    ]
  },
  {
    "id": "rc_8",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🐕",
    "spiceLevel": 1,
    "text": "Who stops mid-sentence in an important conversation to enthusiastically wave at a stranger's dog?",
    "tags": [
      "dog",
      "distracted",
      "wholesome"
    ]
  },
  {
    "id": "rc_9",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧦",
    "spiceLevel": 1,
    "text": "Who has a drawer containing 30 single socks and refuses to throw any out because 'the partner might return'?",
    "tags": [
      "socks",
      "optimism",
      "clutter"
    ]
  },
  {
    "id": "rc_10",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "📦",
    "spiceLevel": 1,
    "text": "Who hoards empty cardboard delivery boxes in their room because 'this is an exceptionally sturdy box'?",
    "tags": [
      "boxes",
      "hoarder",
      "relatable"
    ]
  },
  {
    "id": "rc_11",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🚪",
    "spiceLevel": 1,
    "text": "Who consistently pushes doors that clearly say 'PULL' in bold red capital letters?",
    "tags": [
      "push_pull",
      "reading",
      "clumsy"
    ]
  },
  {
    "id": "rc_12",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎤",
    "spiceLevel": 1,
    "text": "Who sings along with 100% emotional conviction to songs when they clearly don't know the lyrics?",
    "tags": [
      "singing",
      "lyrics",
      "passion"
    ]
  },
  {
    "id": "rc_13",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🍳",
    "spiceLevel": 1,
    "text": "Who would manage to trigger a smoke alarm while heating up water in a kettle?",
    "tags": [
      "cooking",
      "disaster",
      "smoke_alarm"
    ]
  },
  {
    "id": "rc_14",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🐜",
    "spiceLevel": 1,
    "text": "Who gets physically invested in watching two ants carry a breadcrumb across the kitchen floor?",
    "tags": [
      "ants",
      "distracted",
      "nature"
    ]
  },
  {
    "id": "rc_15",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🔍",
    "spiceLevel": 1,
    "text": "Who searches everywhere for their phone while talking on their phone using that phone's flashlight?",
    "tags": [
      "phone",
      "oblivious",
      "peak_chaos"
    ]
  },
  {
    "id": "rc_16",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧼",
    "spiceLevel": 1,
    "text": "Who leaves 47 browser tabs open on their laptop and claims 'every single one is vital to my life'?",
    "tags": [
      "browser_tabs",
      "ram",
      "digital_hoarder"
    ]
  },
  {
    "id": "rc_17",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "✈️",
    "spiceLevel": 1,
    "text": "Who gets nervous at airport security even though they are carrying literally only a toothbrush and sweatpants?",
    "tags": [
      "airport",
      "security",
      "anxiety"
    ]
  },
  {
    "id": "rc_18",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who would eat leftover pizza straight out of the fridge at 6:45 AM before brushing their teeth?",
    "tags": [
      "pizza",
      "breakfast",
      "unhinged"
    ]
  },
  {
    "id": "rc_19",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "⚡",
    "spiceLevel": 2,
    "text": "Who would accidentally join an underground fight club thinking it was a friendly fitness bootcamp?",
    "tags": [
      "fight_club",
      "misunderstanding"
    ]
  },
  {
    "id": "rc_20",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧩",
    "spiceLevel": 1,
    "text": "Who buys a 1,000-piece jigsaw puzzle, does the outer border in 20 minutes, and leaves it on the table for 7 months?",
    "tags": [
      "puzzle",
      "unfinished",
      "abandoned"
    ]
  },
  {
    "id": "rc_21",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🚗",
    "spiceLevel": 1,
    "text": "Who forgets where their car is parked in a shopping mall parking lot and wanders clicking the key fob like a metal detector?",
    "tags": [
      "parking",
      "lost_car",
      "beeping"
    ]
  },
  {
    "id": "rc_22",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🕶️",
    "spiceLevel": 2,
    "text": "Who would negotiate intensely with a vending machine when their snack gets stuck on the spiral hook?",
    "tags": [
      "vending_machine",
      "snack",
      "rage"
    ]
  },
  {
    "id": "rc_23",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🌧️",
    "spiceLevel": 1,
    "text": "Who checks the weather forecast, sees 100% rain, and still leaves home without an umbrella?",
    "tags": [
      "rain",
      "umbrella",
      "defiance"
    ]
  },
  {
    "id": "rc_24",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "📱",
    "spiceLevel": 2,
    "text": "Who has 14,892 unread emails on their phone icon and feels absolutely zero psychological burden?",
    "tags": [
      "emails",
      "notifications",
      "psychopath"
    ]
  },
  {
    "id": "rc_25",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "💡",
    "spiceLevel": 1,
    "text": "Who would try to plug a USB cable in the wrong way three consecutive times before getting it right?",
    "tags": [
      "usb",
      "physics",
      "struggle"
    ]
  },
  {
    "id": "rc_26",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧯",
    "spiceLevel": 2,
    "text": "Who would accidentally set off the fire sprinkler in a hotel room while playing with a pillow?",
    "tags": [
      "hotel",
      "sprinkler",
      "disaster"
    ]
  },
  {
    "id": "rc_27",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🥪",
    "spiceLevel": 1,
    "text": "Who puts strange snack combinations together like potato chips inside a chocolate peanut butter sandwich?",
    "tags": [
      "snacks",
      "food_combos",
      "chaotic"
    ]
  },
  {
    "id": "rc_28",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎲",
    "spiceLevel": 1,
    "text": "Who makes life-altering decisions using 'Rock, Paper, Scissors' or flipping a coin?",
    "tags": [
      "decisions",
      "coin_toss",
      "gambler"
    ]
  },
  {
    "id": "rc_29",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧼",
    "spiceLevel": 1,
    "text": "Who has completely walked into a spotless, crystal-clear glass sliding door in broad daylight?",
    "tags": [
      "glass_door",
      "collision",
      "classic"
    ]
  },
  {
    "id": "rc_30",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🛑",
    "spiceLevel": 2,
    "text": "Who would accidentally agree to buy a vacuum cleaner from a door-to-door salesman because they felt bad saying no?",
    "tags": [
      "salesman",
      "pushover",
      "polite"
    ]
  },
  {
    "id": "rc_31",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎳",
    "spiceLevel": 1,
    "text": "Who lets go of the bowling ball and slips completely onto their back like a cartoon character?",
    "tags": [
      "bowling",
      "slip",
      "cartoon"
    ]
  },
  {
    "id": "rc_32",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who drops a piece of popcorn onto the floor and applies the '7-minute rule' to eat it anyway?",
    "tags": [
      "popcorn",
      "floor",
      "hygiene"
    ]
  },
  {
    "id": "rc_33",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎤",
    "spiceLevel": 2,
    "text": "Who would get lost in their own neighborhood if GPS service went down for 15 minutes?",
    "tags": [
      "direction",
      "lost",
      "gps"
    ]
  },
  {
    "id": "rc_34",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🧳",
    "spiceLevel": 1,
    "text": "Who packs their suitcase by aggressively rolling everything into a chaotic cylinder and sitting on it to zip it?",
    "tags": [
      "packing",
      "suitcase",
      "force"
    ]
  },
  {
    "id": "rc_35",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "⚡",
    "spiceLevel": 1,
    "text": "Who laughs so hard that no sound comes out, just silent clapping like a bewildered sea lion?",
    "tags": [
      "laughing",
      "seal",
      "silent"
    ]
  },
  {
    "id": "rc_36",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who burns their tongue on hot soup or coffee, and immediately takes another burning bite 3 seconds later?",
    "tags": [
      "soup",
      "burn",
      "stubborn"
    ]
  },
  {
    "id": "rc_37",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎧",
    "spiceLevel": 1,
    "text": "Who walks with headphones in and starts loudly answering imaginary questions out loud?",
    "tags": [
      "headphones",
      "talking",
      "street"
    ]
  },
  {
    "id": "rc_38",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who would order food on an app, fall asleep, and find the cold bag outside their door at 11 AM the next day?",
    "tags": [
      "delivery",
      "asleep",
      "breakfast"
    ]
  },
  {
    "id": "rc_39",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🐕",
    "spiceLevel": 1,
    "text": "Who has had a 10-minute full-blown conversation with their pet dog or cat and felt understood?",
    "tags": [
      "pets",
      "conversation",
      "bonding"
    ]
  },
  {
    "id": "rc_40",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who would build an entire spreadsheet to compare $4 items before purchasing?",
    "tags": [
      "spreadsheet",
      "overthinking",
      "shopping"
    ]
  },
  {
    "id": "rc_41",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "🎪",
    "spiceLevel": 1,
    "text": "Who accidentally wears two socks that are completely different colors and acts like it was intentional high fashion?",
    "tags": [
      "socks",
      "mismatch",
      "fashion"
    ]
  },
  {
    "id": "rc_42",
    "category": "random_chaos",
    "categoryName": "Random Chaos",
    "icon": "👑",
    "spiceLevel": 2,
    "text": "Who would somehow find a way to break an unbreakable Nokia 3310 phone?",
    "tags": [
      "nokia",
      "destruction",
      "impossible"
    ]
  },
  {
    "id": "lnv_1",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🌙",
    "spiceLevel": 1,
    "text": "Who starts cooking instant ramen or Maggi at 3:15 AM while having an existential crisis?",
    "tags": [
      "ramen",
      "3am",
      "crisis"
    ]
  },
  {
    "id": "lnv_2",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🛒",
    "spiceLevel": 2,
    "text": "Who makes chaotic online shopping purchases at 2 AM that they completely regret when the delivery arrives?",
    "tags": [
      "shopping",
      "impulse",
      "regret"
    ]
  },
  {
    "id": "lnv_3",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🧠",
    "spiceLevel": 1,
    "text": "Who lies in bed at night remembering a mildly embarrassing thing they did in 6th grade and cringing?",
    "tags": [
      "cringe",
      "memories",
      "insomnia"
    ]
  },
  {
    "id": "lnv_4",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📖",
    "spiceLevel": 1,
    "text": "Who falls into a 4-hour Wikipedia rabbit hole reading about the history of elevator doors until 4 AM?",
    "tags": [
      "wikipedia",
      "rabbit_hole",
      "nerd"
    ]
  },
  {
    "id": "lnv_5",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🎤",
    "spiceLevel": 2,
    "text": "Who sends emotional 7-minute voice notes at 2:30 AM expressing deep appreciation for their friends?",
    "tags": [
      "voice_note",
      "emotional",
      "wholesome"
    ]
  },
  {
    "id": "lnv_6",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📺",
    "spiceLevel": 1,
    "text": "Who watches 14 episodes of a new crime documentary series in one sitting because 'the next one solves it'?",
    "tags": [
      "binge",
      "documentary",
      "crime"
    ]
  },
  {
    "id": "lnv_7",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who suggests ordering midnight pizza at 1:45 AM when everyone else was actually about to fall asleep?",
    "tags": [
      "pizza",
      "midnight",
      "temptation"
    ]
  },
  {
    "id": "lnv_8",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🚗",
    "spiceLevel": 1,
    "text": "Who is always ready for a spontaneous 1 AM car drive with music blasted on the highway?",
    "tags": [
      "drive",
      "music",
      "night"
    ]
  },
  {
    "id": "lnv_9",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "💬",
    "spiceLevel": 2,
    "text": "Who texts 'Are you awake?' at 2:40 AM and then immediately calls you when you reply?",
    "tags": [
      "texts",
      "late_call",
      "clingy"
    ]
  },
  {
    "id": "lnv_10",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🧹",
    "spiceLevel": 1,
    "text": "Who gets a sudden uncontrollable surge of motivation to deep clean and reorganize their entire bedroom at midnight?",
    "tags": [
      "cleaning",
      "midnight",
      "burst"
    ]
  },
  {
    "id": "lnv_11",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍦",
    "spiceLevel": 1,
    "text": "Who eats ice cream straight out of the tub with a serving spoon while standing in front of the open freezer light?",
    "tags": [
      "ice_cream",
      "freezer",
      "snack"
    ]
  },
  {
    "id": "lnv_12",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🛸",
    "spiceLevel": 1,
    "text": "Who starts deep conspiracy theory conversations about alien pyramids at 3 AM?",
    "tags": [
      "aliens",
      "conspiracy",
      "deep"
    ]
  },
  {
    "id": "lnv_13",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who falls asleep with their phone playing YouTube tutorials and wakes up to a 6-hour video of whale sounds?",
    "tags": [
      "youtube",
      "whales",
      "sleep"
    ]
  },
  {
    "id": "lnv_14",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who will eat an entire bag of tortilla chips in bed and wake up surrounded by crumb debris?",
    "tags": [
      "crumbs",
      "bed",
      "chips"
    ]
  },
  {
    "id": "lnv_15",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🎶",
    "spiceLevel": 1,
    "text": "Who listens to sad songs at night specifically to feel heartbroken over a relationship that never happened?",
    "tags": [
      "sad_songs",
      "imaginary",
      "heartbreak"
    ]
  },
  {
    "id": "lnv_16",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "💡",
    "spiceLevel": 2,
    "text": "Who invents a groundbreaking million-dollar business idea at 2 AM and forgets it completely by morning?",
    "tags": [
      "idea",
      "business",
      "forgotten"
    ]
  },
  {
    "id": "lnv_17",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🛌",
    "spiceLevel": 1,
    "text": "Who says 'Goodnight' to the group chat and stays active liking memes for the next two and a half hours?",
    "tags": [
      "goodnight",
      "liar",
      "awake"
    ]
  },
  {
    "id": "lnv_18",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🤫",
    "spiceLevel": 1,
    "text": "Who tries to creep quietly into the kitchen at night and accidentally drops a heavy stainless steel saucepan?",
    "tags": [
      "kitchen",
      "loud",
      "stealth"
    ]
  },
  {
    "id": "lnv_19",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍫",
    "spiceLevel": 1,
    "text": "Who will scavenge the pantry at 1 AM and eat chocolate chips meant for baking because there is no other candy?",
    "tags": [
      "baking_chips",
      "desperate",
      "candy"
    ]
  },
  {
    "id": "lnv_20",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "👻",
    "spiceLevel": 1,
    "text": "Who refuses to dangle a foot off the edge of the bed at night because of imaginary floor monsters?",
    "tags": [
      "bed_monsters",
      "feet",
      "childish"
    ]
  },
  {
    "id": "lnv_21",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who checks their alarm clock 7 times before sleeping just to make sure AM and PM are correct?",
    "tags": [
      "alarm",
      "paranoia",
      "routine"
    ]
  },
  {
    "id": "lnv_22",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "☕",
    "spiceLevel": 2,
    "text": "Who drinks a cup of strong coffee at 10 PM and wonders aloud why their eyes are wide open at 3 AM?",
    "tags": [
      "coffee",
      "caffeine",
      "regret"
    ]
  },
  {
    "id": "lnv_23",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🎧",
    "spiceLevel": 1,
    "text": "Who has an entire separate playlist of songs that they would be deeply embarrassed to play in the daytime?",
    "tags": [
      "guilty_pleasures",
      "playlist",
      "night"
    ]
  },
  {
    "id": "lnv_24",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "💬",
    "spiceLevel": 2,
    "text": "Who spills their deepest, most confidential life lore only between the hours of 1 AM and 4 AM?",
    "tags": [
      "lore",
      "secrets",
      "vulnerable"
    ]
  },
  {
    "id": "lnv_25",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🎮",
    "spiceLevel": 1,
    "text": "Who says 'one last match and I sleep' at 11:30 PM and is still raging on voice chat at 4:15 AM?",
    "tags": [
      "gaming",
      "one_more",
      "rage"
    ]
  },
  {
    "id": "lnv_26",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🥪",
    "spiceLevel": 1,
    "text": "Who constructs a four-story gourmet sandwich with bizarre ingredients at 2:30 in the morning?",
    "tags": [
      "sandwich",
      "chef",
      "night"
    ]
  },
  {
    "id": "lnv_27",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📺",
    "spiceLevel": 1,
    "text": "Who watches primitive building or restoration videos at 3 AM with pure hypnotic fascination?",
    "tags": [
      "restoration",
      "satisfying",
      "trance"
    ]
  },
  {
    "id": "lnv_28",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🕯️",
    "spiceLevel": 1,
    "text": "Who will sit in the dark listening to ambient lo-fi beats feeling like the main character in an anime?",
    "tags": [
      "lofi",
      "aesthetic",
      "chilling"
    ]
  },
  {
    "id": "lnv_29",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "✈️",
    "spiceLevel": 2,
    "text": "Who plans an entire luxury dream trip to Japan or Iceland at 2 AM with zero actual funds in their bank?",
    "tags": [
      "travel_booking",
      "fantasy",
      "broke"
    ]
  },
  {
    "id": "lnv_30",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🥤",
    "spiceLevel": 1,
    "text": "Who wakes up at 3:45 AM craving water so cold that it feels like drinking straight from an Antarctic glacier?",
    "tags": [
      "water",
      "glacier",
      "night_thirst"
    ]
  },
  {
    "id": "lnv_31",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🧘",
    "spiceLevel": 1,
    "text": "Who tries a 10-minute guided sleep meditation and gets so annoyed by the speaker's voice that they can't sleep?",
    "tags": [
      "meditation",
      "annoyed",
      "insomnia"
    ]
  },
  {
    "id": "lnv_32",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📝",
    "spiceLevel": 1,
    "text": "Who writes an ambitious 12-item to-do list for tomorrow at 1 AM and accomplishes zero items?",
    "tags": [
      "todolist",
      "procrastination",
      "intentions"
    ]
  },
  {
    "id": "lnv_33",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍜",
    "spiceLevel": 1,
    "text": "Who burns the roof of their mouth on midnight instant noodles because they refused to wait 20 seconds?",
    "tags": [
      "noodles",
      "burn",
      "impatience"
    ]
  },
  {
    "id": "lnv_34",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🔦",
    "spiceLevel": 1,
    "text": "Who navigates their house in pitch-black darkness by muscle memory and brutally stubs their pinky toe?",
    "tags": [
      "stubbed_toe",
      "dark",
      "pain"
    ]
  },
  {
    "id": "lnv_35",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "😴",
    "spiceLevel": 2,
    "text": "Who can sleep through thunderstorm sirens and construction but wakes up if someone gently closes a door?",
    "tags": [
      "sleep",
      "light_sleeper",
      "selective"
    ]
  },
  {
    "id": "lnv_36",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "⚡",
    "spiceLevel": 1,
    "text": "Who sends hilarious unhinged memes into dead group chats at 3 AM with zero context?",
    "tags": [
      "memes",
      "late_drop",
      "chaos"
    ]
  },
  {
    "id": "lnv_37",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "📱",
    "spiceLevel": 1,
    "text": "Who wakes up in the middle of the night, checks the time, calculates 'I have 3 hours and 22 minutes left', and smiles?",
    "tags": [
      "math",
      "sleep_time",
      "satisfaction"
    ]
  },
  {
    "id": "lnv_38",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🥶",
    "spiceLevel": 1,
    "text": "Who sets the air conditioning to arctic freezing temperatures and then wraps themselves in four heavy duvets?",
    "tags": [
      "ac",
      "freezing",
      "blankets"
    ]
  },
  {
    "id": "lnv_39",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "🍞",
    "spiceLevel": 1,
    "text": "Who has stood in front of a toaster at 2 AM waiting with butter knife in hand ready to strike?",
    "tags": [
      "toast",
      "late_snack",
      "butter"
    ]
  },
  {
    "id": "lnv_40",
    "category": "late_night_vibes",
    "categoryName": "Late Night Vibes",
    "icon": "⭐",
    "spiceLevel": 1,
    "text": "Who would stay awake until 5 AM on a rooftop stargazing and debating the meaning of the universe?",
    "tags": [
      "stargazing",
      "universe",
      "vibe"
    ]
  },
  {
    "id": "fdc_1",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍕",
    "spiceLevel": 2,
    "text": "Who claims 'I'm not in the mood for pizza' and then eats three slices as soon as the box is opened?",
    "tags": [
      "pizza",
      "liar",
      "appetite"
    ]
  },
  {
    "id": "fdc_2",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍟",
    "spiceLevel": 2,
    "text": "Who takes the single largest crispy fry from someone else's plate without asking permission?",
    "tags": [
      "fry_thief",
      "audacity",
      "crimes"
    ]
  },
  {
    "id": "fdc_3",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥫",
    "spiceLevel": 1,
    "text": "Who drowns their entire plate of food in tomato ketchup or hot sauce before taking a single bite?",
    "tags": [
      "ketchup",
      "sauce",
      "criminal"
    ]
  },
  {
    "id": "fdc_4",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍫",
    "spiceLevel": 2,
    "text": "Who leaves exactly 1.5 chips or half an inch of juice in the container so they don't have to throw it away?",
    "tags": [
      "crumbs",
      "lazy",
      "guilt_free"
    ]
  },
  {
    "id": "fdc_5",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "☕",
    "spiceLevel": 1,
    "text": "Who orders a coffee with nine customized modifications and sends it back if it's slightly not lukewarm?",
    "tags": [
      "coffee",
      "picky",
      "barista"
    ]
  },
  {
    "id": "fdc_6",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍔",
    "spiceLevel": 1,
    "text": "Who disassembles a burger like an engineer, eats each ingredient separately, and leaves the bun behind?",
    "tags": [
      "burger",
      "weird",
      "habit"
    ]
  },
  {
    "id": "fdc_7",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍰",
    "spiceLevel": 2,
    "text": "Who says 'I'll just take a tiny sliver of cake' and ends up trimming off six 'slivers' that equal half the cake?",
    "tags": [
      "cake",
      "slivers",
      "denial"
    ]
  },
  {
    "id": "fdc_8",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🌶️",
    "spiceLevel": 2,
    "text": "Who boldly claims 'I love extremely spicy food' and ends up crying and sweating over mild salsa?",
    "tags": [
      "spicy",
      "bragging",
      "tears"
    ]
  },
  {
    "id": "fdc_9",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍣",
    "spiceLevel": 1,
    "text": "Who goes to a high-end sushi restaurant and orders chicken nuggets or plain french fries?",
    "tags": [
      "sushi",
      "toddler_palate",
      "unrefined"
    ]
  },
  {
    "id": "fdc_10",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who licks the flavor dust off potato chips and puts the plain soggy chip back in the bowl?",
    "tags": [
      "chips",
      "gross",
      "flavor_thief"
    ]
  },
  {
    "id": "fdc_11",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥤",
    "spiceLevel": 1,
    "text": "Who finishes their cold drink and then aggressively chews on the ice cubes loudly for 20 minutes?",
    "tags": [
      "ice",
      "chewing",
      "crunch"
    ]
  },
  {
    "id": "fdc_12",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍽️",
    "spiceLevel": 2,
    "text": "Who leaves one microscopic bite of food on their plate because 'it's impolite to clean the plate completely'?",
    "tags": [
      "etiquette",
      "waste",
      "pretentious"
    ]
  },
  {
    "id": "fdc_13",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍕",
    "spiceLevel": 1,
    "text": "Who eats only the cheese and toppings off a pizza slice and leaves the naked crust abandoned like bone?",
    "tags": [
      "pizza_crust",
      "waste",
      "crimes"
    ]
  },
  {
    "id": "fdc_14",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥑",
    "spiceLevel": 1,
    "text": "Who pays $22 for avocado toast at a hipster brunch spot and claims it 'changed their spiritual aura'?",
    "tags": [
      "brunch",
      "avocado",
      "pretentious"
    ]
  },
  {
    "id": "fdc_15",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍜",
    "spiceLevel": 1,
    "text": "Who breaks instant noodles into 50 microscopic crushed pieces before boiling them?",
    "tags": [
      "noodles",
      "crushed",
      "sacrilege"
    ]
  },
  {
    "id": "fdc_16",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥪",
    "spiceLevel": 1,
    "text": "Who cuts sandwiches vertically instead of diagonally and acts like geometry doesn't matter?",
    "tags": [
      "sandwich",
      "diagonal",
      "geometry"
    ]
  },
  {
    "id": "fdc_17",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥟",
    "spiceLevel": 2,
    "text": "Who snatches the last remaining dumpling or piece of garlic bread while pretending to offer it to others?",
    "tags": [
      "last_piece",
      "dumpling",
      "sneaky"
    ]
  },
  {
    "id": "fdc_18",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥗",
    "spiceLevel": 1,
    "text": "Who orders a healthy salad at a restaurant and asks for 4 cups of ranch dressing and bacon bits?",
    "tags": [
      "salad",
      "ranch",
      "health"
    ]
  },
  {
    "id": "fdc_19",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥖",
    "spiceLevel": 1,
    "text": "Who eats the entire complimentary restaurant bread basket before ordering their main meal?",
    "tags": [
      "bread_basket",
      "butter",
      "full"
    ]
  },
  {
    "id": "fdc_20",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍪",
    "spiceLevel": 1,
    "text": "Who dunks a cookie in milk for 0.4 seconds too long and loses the submerged soggy half to the milk abyss?",
    "tags": [
      "cookie",
      "milk",
      "tragedy"
    ]
  },
  {
    "id": "fdc_21",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🧀",
    "spiceLevel": 1,
    "text": "Who puts shredded cheese on literally everything they cook, including breakfast oatmeal?",
    "tags": [
      "cheese",
      "addiction",
      "culinary"
    ]
  },
  {
    "id": "fdc_22",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍦",
    "spiceLevel": 1,
    "text": "Who bites directly into an ice cream popsicle with their front teeth like a fearless monster?",
    "tags": [
      "ice_cream",
      "teeth",
      "psychopath"
    ]
  },
  {
    "id": "fdc_23",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🌮",
    "spiceLevel": 1,
    "text": "Who takes one bite of a taco and lets the entire back half explode across the table and their lap?",
    "tags": [
      "taco",
      "explosion",
      "messy"
    ]
  },
  {
    "id": "fdc_24",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍍",
    "spiceLevel": 1,
    "text": "Who will passionately defend pineapple on pizza like their family honor depends on it?",
    "tags": [
      "pineapple_pizza",
      "debate",
      "honor"
    ]
  },
  {
    "id": "fdc_25",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍝",
    "spiceLevel": 1,
    "text": "Who cuts spaghetti with a spoon and fork instead of twirling it like a civilized human?",
    "tags": [
      "spaghetti",
      "cutting",
      "italy_crying"
    ]
  },
  {
    "id": "fdc_26",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🧁",
    "spiceLevel": 1,
    "text": "Who licks the frosting completely off a cupcake and throws the sponge cake in the bin?",
    "tags": [
      "cupcake",
      "frosting",
      "waste"
    ]
  },
  {
    "id": "fdc_27",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥩",
    "spiceLevel": 2,
    "text": "Who orders an expensive steak well-done and asks for barbecue sauce to dip it in?",
    "tags": [
      "steak",
      "well_done",
      "blasphemy"
    ]
  },
  {
    "id": "fdc_28",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍩",
    "spiceLevel": 1,
    "text": "Who opens a box of a dozen donuts, takes a small bite of three different donuts, and walks away?",
    "tags": [
      "donuts",
      "bites",
      "outlaw"
    ]
  },
  {
    "id": "fdc_29",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🧃",
    "spiceLevel": 1,
    "text": "Who drinks milk or orange juice directly from the family carton when nobody is in the kitchen?",
    "tags": [
      "carton",
      "germs",
      "caught"
    ]
  },
  {
    "id": "fdc_30",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥘",
    "spiceLevel": 1,
    "text": "Who claims to have a secret family recipe when it's literally just a standard store-bought packet sauce?",
    "tags": [
      "secret_recipe",
      "fraud",
      "packet"
    ]
  },
  {
    "id": "fdc_31",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍟",
    "spiceLevel": 1,
    "text": "Who dips their hot french fries into chocolate milkshake or soft-serve ice cream?",
    "tags": [
      "fries_icecream",
      "weird",
      "sweet_salty"
    ]
  },
  {
    "id": "fdc_32",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥞",
    "spiceLevel": 1,
    "text": "Who drowns their pancakes in maple syrup until they are physically swimming in a sugar lake?",
    "tags": [
      "pancakes",
      "syrup",
      "sugar"
    ]
  },
  {
    "id": "fdc_33",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍉",
    "spiceLevel": 1,
    "text": "Who eats watermelon with a spoon directly from the sliced rind like a savage animal?",
    "tags": [
      "watermelon",
      "spoon",
      "messy"
    ]
  },
  {
    "id": "fdc_34",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍿",
    "spiceLevel": 1,
    "text": "Who mixes M&Ms or gummy bears directly into hot movie butter popcorn?",
    "tags": [
      "popcorn",
      "candy",
      "combo"
    ]
  },
  {
    "id": "fdc_35",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥣",
    "spiceLevel": 1,
    "text": "Who pours the milk into the cereal bowl BEFORE pouring the cereal?",
    "tags": [
      "milk_first",
      "cereal",
      "unforgivable"
    ]
  },
  {
    "id": "fdc_36",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🧀",
    "spiceLevel": 1,
    "text": "Who eats cheese slices straight from the plastic wrapper standing in the kitchen at 1 AM?",
    "tags": [
      "cheese_slice",
      "night",
      "goblin"
    ]
  },
  {
    "id": "fdc_37",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍯",
    "spiceLevel": 1,
    "text": "Who leaves the peanut butter jar with breadcrumbs contaminated inside the peanut butter?",
    "tags": [
      "peanut_butter",
      "contamination",
      "crimes"
    ]
  },
  {
    "id": "fdc_38",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍔",
    "spiceLevel": 2,
    "text": "Who offers you 'a bite' of their burger and leaves only a thumbnail of crust behind?",
    "tags": [
      "shark_bite",
      "burger",
      "betrayal"
    ]
  },
  {
    "id": "fdc_39",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🥤",
    "spiceLevel": 1,
    "text": "Who uses three paper straws in one drink because they keep chewing through them?",
    "tags": [
      "paper_straw",
      "chewing",
      "habit"
    ]
  },
  {
    "id": "fdc_40",
    "category": "foodie_crimes",
    "categoryName": "Foodie Crimes",
    "icon": "🍫",
    "spiceLevel": 1,
    "text": "Who bites into a Kit-Kat across all four bars at once instead of breaking off individual fingers?",
    "tags": [
      "kitkat",
      "anarchy",
      "blasphemy"
    ]
  }
];

/**
 * Question Service - Advanced filtering, spice levels, reporting, custom questions & random pickers
 */
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
