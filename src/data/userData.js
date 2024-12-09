export const users = [
  {
    id: 1,
    image: require('./images/ProfileIcon.png'),
    name: "Alice Johnson",
    bio: "A graphic designer who loves teaching creative skills and learning about technology.",
    rating: 5,
    skillsOffered: ["Graphic Design", "Digital Art", "Photography"],
    skillsWanted: ["Coding", "Web Development"],
    location: "New York, USA",
    availability: ["Weekends", "Evenings"],
    teachingFormat: ["Online", "In-Person"]
  },
  {
    id: 2,
    image: require('./images/ProfileIcon.png'),
    name: "Michael Tanaka",
    bio: "Software engineer passionate about teaching programming and learning how to play instruments.",
    rating: 3.5,
    skillsOffered: ["Coding", "Web Development", "Python"],
    skillsWanted: ["Guitar", "Piano"],
    location: "San Francisco, USA",
    availability: ["Evenings"],
    teachingFormat: ["Online"]
  },
  {
    id: 3,
    image: require('./images/ProfileIcon.png'),
    name: "Sophia Li",
    bio: "A yoga enthusiast who loves wellness and wants to expand her knowledge in business.",
    rating: 2,
    skillsOffered: ["Yoga", "Meditation", "Pilates"],
    skillsWanted: ["Entrepreneurship", "Marketing Strategies"],
    location: "London, UK",
    availability: ["Mornings", "Weekends"],
    teachingFormat: ["Online", "In-Person"]
  },
  {
    id: 4,
    image: require('./images/ProfileIcon.png'),
    name: "Carlos Rivera",
    bio: "An amateur chef who is eager to learn languages and share culinary secrets.",
    rating: 4.5,
    skillsOffered: ["Cooking/Baking", "Gardening"],
    skillsWanted: ["French", "Italian"],
    location: "Barcelona, Spain",
    availability: ["Afternoons"],
    teachingFormat: ["Online", "In-Person"]
  },
  {
    id: 5,
    image: require('./images/ProfileIcon.png'),
    name: "Emily Carter",
    bio: "A high school math teacher looking to expand her creative skills.",
    rating: 2,
    skillsOffered: ["Math Tutoring", "Study Skills and Techniques"],
    skillsWanted: ["Painting", "Creative Writing"],
    location: "Toronto, Canada",
    availability: ["Weekends"],
    teachingFormat: ["Online"]
  },
  {
    id: 6,
    image: require('./images/ProfileIcon.png'),
    name: "Raj Patel",
    bio: "A tech enthusiast who enjoys teaching coding and learning physical skills.",
    rating: 4,
    skillsOffered: ["Coding", "Machine Learning", "Data Analysis"],
    skillsWanted: ["Boxing", "Strength Training"],
    location: "Mumbai, India",
    availability: ["Evenings", "Weekends"],
    teachingFormat: ["Online"]
  },
  {
    id: 7,
    image: require('./images/ProfileIcon.png'),
    name: "Hannah Kim",
    bio: "An aspiring musician seeking to connect with other creatives.",
    rating: 5,
    skillsOffered: ["Singing/Vocal Training", "Music Theory"],
    skillsWanted: ["Guitar", "Music Production"],
    location: "Seoul, South Korea",
    availability: ["Mornings"],
    teachingFormat: ["Online", "In-Person"]
  },
  {
    id: 8,
    image: require('./images/ProfileIcon.png'),
    name: "Liam O'Brien",
    bio: "A carpenter who loves hands-on projects and is learning how to market his business.",
    rating: 3.5,
    skillsOffered: ["Carpentry", "House Maintenance/DIY"],
    skillsWanted: ["Digital Marketing", "SEO Optimization"],
    location: "Dublin, Ireland",
    availability: ["Afternoons"],
    teachingFormat: ["Online", "In-Person"]
  },
  {
    id: 9,
    image: require('./images/ProfileIcon.png'),
    name: "Aisha Mohammed",
    bio: "A linguist passionate about languages and eager to learn photography.",
    rating: 2.5,
    skillsOffered: ["Arabic", "English", "French"],
    skillsWanted: ["Photography", "Video Editing"],
    location: "Dubai, UAE",
    availability: ["Flexible"],
    teachingFormat: ["Online"]
  },
  {
    id: 10,
    image: require('./images/ProfileIcon.png'),
    name: "Noah Brown",
    bio: "A game developer keen on exploring new hobbies like pottery and dance.",
    rating: 5,
    skillsOffered: ["Game Development", "3D Printing"],
    skillsWanted: ["Pottery/Ceramics", "Dance"],
    location: "Sydney, Australia",
    availability: ["Evenings"],
    teachingFormat: ["Online"],
  }
];

export const userMessages = [
  {
    id: 1, userId: 2, messages: [{
      text: `Hi Michael! I saw that you're offering guitar lessons and are looking to learn coding. 
        I'm a software engineer, and I'd be happy to teach you Python basics in exchange for some beginner guitar lessons.`, sent: true
    },
    {
      text: `Hi Alice, that sounds great! I've been wanting to dive into Python, and I'd love to teach you some guitar chords 
        and strumming techniques.`, sent: false
    }, {
      text: `Perfect! How about a 2-hour session this Saturday? We could spend 
        the first hour on Python and the second on guitar.`, sent: true
    }, {
      text: `That works for me. Let's meet on Zoom. 
        I'll send you my meeting link!`, sent: false
    }]
  },
  {
    id: 2, userId: 4, messages: [{
      text: `Hi Carlos, I noticed you're offering French lessons. I've always wanted to learn 
        conversational French! I teach yoga and could help you with mindfulness or flexibility training.`, sent: true
    },
    {
      text: `Hi Sophia! That's wonderful—I've been meaning to work on my flexibility. 
      I'd be happy to teach you some common French phrases and basic grammar in return.`, sent: false
    },
    {
      text: `Fantastic! How about we do a 90-minute session next week—45 minutes of yoga and 45 minutes of French?`,
      sent: true
    },
    {
      text: `Sounds perfect! Let's meet at the community park if the weather's nice. 
          Bring your yoga mat!`, sent: false
    }]
  },
  {
    id: 3, userId: 5, messages: [{
      text: `Hi Hannah! I saw that you're offering music production lessons. 
    I've been wanting to learn how to use music software for a while. 
    I can offer digital art lessons if you're interested.`, sent: false
    },
    {
      text: `Hi Emily! I'd love to learn digital art—I'm trying to create some cover art for my music. 
      How about we trade skills?`, sent: true
    },
    {
      text: `Sure thing! How about next Thursday evening? I can teach you about vector drawing in Illustrator, 
        and you could show me the basics of mixing tracks.`, sent: false
    },
    { text: `That's perfect! Let's meet online and share screens—I'll prepare some tracks for us to work on.`, sent: true }]
  },
];

export const userMeetings = [{
  id: 1,
  date: "2024-12-10",
  name: "Guitar and Coding Exchange",
  person: "Michael Tanaka",
  subjects: ["Guitar Basics", "Introduction to Python"],
  startTime: "10:00 AM",
  endTime: "12:00 PM",
  location: "Online (Zoom)"
},
{
  id: 2,
  date: "2024-12-12",
  name: "Yoga and Marketing Strategies",
  person: "Sophia Li",
  subjects: ["Yoga for Beginners", "Social Media Marketing"],
  startTime: "3:00 PM",
  endTime: "4:30 PM",
  location: "Community Center, Room 5"
},
{
  id: 3,
  date: "2024-12-15",
  name: "Photography and French Language",
  person: "Aisha Mohammed",
  subjects: ["Photography Tips", "Basic French Phrases"],
  startTime: "1:00 PM",
  endTime: "2:30 PM",
  location: "Central Library, Meeting Room A"
},
{
  id: 4,
  date: "2024-12-18",
  name: "Creative Writing and Web Development",
  person: "Emily Carter",
  subjects: ["Writing Short Stories", "HTML and CSS Basics"],
  startTime: "6:00 PM",
  endTime: "8:00 PM",
  location: "Online (Google Meet)"
},
{
  id: 5,
  date: "2024-12-20",
  name: "Music Production and Nutrition Advice",
  person: "Hannah Kim",
  subjects: ["Intro to Music Software", "Healthy Meal Planning"],
  startTime: "11:00 AM",
  endTime: "12:30 PM",
  location: "Downtown Co-Working Space, Room 2"
}];

export const skills = [
  // Creative Arts
  { id: 1, name: "Drawing/Sketching", category: "Creative Arts" },
  { id: 2, name: "Painting", category: "Creative Arts" },
  { id: 3, name: "Graphic Design", category: "Creative Arts" },
  { id: 4, name: "Photography", category: "Creative Arts" },
  { id: 5, name: "Video Editing", category: "Creative Arts" },
  { id: 6, name: "Animation", category: "Creative Arts" },
  { id: 7, name: "Creative Writing", category: "Creative Arts" },
  { id: 8, name: "Calligraphy", category: "Creative Arts" },
  { id: 9, name: "Music Composition", category: "Creative Arts" },
  { id: 10, name: "Acting/Drama", category: "Creative Arts" },
  { id: 11, name: "Sewing and Embroidery", category: "Creative Arts" },
  { id: 12, name: "Knitting and Crochet", category: "Creative Arts" },
  { id: 13, name: "Pottery/Ceramics", category: "Creative Arts" },
  { id: 14, name: "Digital Art", category: "Creative Arts" },
  { id: 15, name: "Interior Design", category: "Creative Arts" },

  // Music
  { id: 16, name: "Guitar", category: "Music" },
  { id: 17, name: "Piano/Keyboard", category: "Music" },
  { id: 18, name: "Violin", category: "Music" },
  { id: 19, name: "Drums", category: "Music" },
  { id: 20, name: "Singing/Vocal Training", category: "Music" },
  { id: 21, name: "Music Theory", category: "Music" },
  { id: 22, name: "DJing", category: "Music" },
  { id: 23, name: "Audio Mixing and Mastering", category: "Music" },
  { id: 24, name: "Ukulele", category: "Music" },
  { id: 25, name: "Music Production", category: "Music" },

  // Technology
  { id: 26, name: "Coding", category: "Technology" },
  { id: 27, name: "Web Development", category: "Technology" },
  { id: 28, name: "Mobile App Development", category: "Technology" },
  { id: 29, name: "Data Analysis", category: "Technology" },
  { id: 30, name: "Machine Learning", category: "Technology" },
  { id: 31, name: "Cybersecurity", category: "Technology" },
  { id: 32, name: "Game Development", category: "Technology" },
  { id: 33, name: "IT Support", category: "Technology" },
  { id: 34, name: "Video Game Modding", category: "Technology" },
  { id: 35, name: "Cloud Computing", category: "Technology" },
  { id: 36, name: "Arduino/Raspberry Pi", category: "Technology" },
  { id: 37, name: "Digital Marketing", category: "Technology" },
  { id: 38, name: "UI/UX Design", category: "Technology" },
  { id: 39, name: "SEO Optimization", category: "Technology" },

  // Languages
  { id: 40, name: "English", category: "Languages" },
  { id: 41, name: "Spanish", category: "Languages" },
  { id: 42, name: "Mandarin", category: "Languages" },
  { id: 43, name: "French", category: "Languages" },
  { id: 44, name: "German", category: "Languages" },
  { id: 45, name: "Japanese", category: "Languages" },
  { id: 46, name: "Korean", category: "Languages" },
  { id: 47, name: "Italian", category: "Languages" },
  { id: 48, name: "Sign Language", category: "Languages" },
  { id: 49, name: "Arabic", category: "Languages" },
  { id: 50, name: "Russian", category: "Languages" },
  { id: 51, name: "Hindi", category: "Languages" },

  // Fitness and Wellness
  { id: 52, name: "Yoga", category: "Fitness and Wellness" },
  { id: 53, name: "Meditation", category: "Fitness and Wellness" },
  { id: 54, name: "Strength Training", category: "Fitness and Wellness" },
  { id: 55, name: "Pilates", category: "Fitness and Wellness" },
  { id: 56, name: "Martial Arts", category: "Fitness and Wellness" },
  { id: 57, name: "Dance", category: "Fitness and Wellness" },
  { id: 58, name: "Nutrition Advice", category: "Fitness and Wellness" },
  { id: 59, name: "Personal Training", category: "Fitness and Wellness" },
  { id: 60, name: "Aerobics", category: "Fitness and Wellness" },
  { id: 61, name: "Boxing", category: "Fitness and Wellness" },
  { id: 62, name: "Breathing Techniques", category: "Fitness and Wellness" },

  // Life Skills
  { id: 63, name: "Cooking", category: "Life Skills" },
  { id: 64, name: "Baking", category: "Life Skills" },
  { id: 65, name: "Gardening", category: "Life Skills" },
  { id: 66, name: "Fincancial Literacy", category: "Life Skills" },
  { id: 67, name: "Public Speaking", category: "Life Skills" },
  { id: 68, name: "Resume Writing", category: "Life Skills" },
  { id: 69, name: "Interview Coaching", category: "Life Skills" },
  { id: 70, name: "Leadership Skills", category: "Life Skills" },
  { id: 71, name: "First Aid", category: "Life Skills" },
  { id: 72, name: "House Maintenance", category: "Life Skills" },
  { id: 73, name: "Event Planning", category: "Life Skills" },
  { id: 74, name: "Time Management", category: "Life Skills" },

  // Acadmeics
  { id: 75, name: "Math Tutoring", category: "Academics" },
  { id: 76, name: "Science Tutoring", category: "Academics" },
  { id: 77, name: "History Lessons", category: "Academics" },
  { id: 78, name: "Essay Writing", category: "Academics" },
  { id: 79, name: "SAT/ACT Prep", category: "Academics" },
  { id: 80, name: "Study SKills and Techniques", category: "Academics" },
  { id: 81, name: "Research Skills", category: "Academics" },
  { id: 82, name: "Statistics", category: "Academics" },
  { id: 83, name: "Foreign Language Tutoring", category: "Academics" },
  { id: 84, name: "Programming Logic", category: "Academics" },

  // Business and Career
  { id: 85, name: "Entrepreneurship", category: "Business and Career" },
  { id: 86, name: "Freelancing Tips", category: "Business and Career" },
  { id: 87, name: "Marketing Strategies", category: "Business and Career" },
  { id: 88, name: "Project Management", category: "Business and Career" },
  { id: 89, name: "Negotiation Skills", category: "Business and Career" },
  { id: 90, name: "Social Media Management", category: "Business and Career" },
  { id: 91, name: "Personal Branding", category: "Business and Career" },
  { id: 92, name: "Business Writing", category: "Business and Career" },
  { id: 93, name: "Sales Techniques", category: "Business and Career" },
  { id: 94, name: "Presentation Skills", category: "Business and Career" },

  // Hobbies and Interests
  { id: 95, name: "Chess", category: "Hobbies and Interests" },
  { id: 96, name: "Wildlife Photography", category: "Hobbies and Interests" },
  { id: 97, name: "Fishing", category: "Hobbies and Interests" },
  { id: 98, name: "Bird Watching", category: "Hobbies and Interests" },
  { id: 99, name: "Hiking Tips", category: "Hobbies and Interests" },
  { id: 100, name: "DIY Craft Projects", category: "Hobbies and Interests" },
  { id: 101, name: "Origami", category: "Hobbies and Interests" },
  { id: 102, name: "Board Games Strategy", category: "Hobbies and Interests" },
  { id: 103, name: "Magic Tricks", category: "Hobbies and Interests" },
  { id: 104, name: "Astronomy", category: "Hobbies and Interests" },

  // Specialized Skills
  { id: 105, name: "Carpentry", category: "Specialized Skills" },
  { id: 106, name: "Welding", category: "Specialized Skills" },
  { id: 107, name: "Auto Repair", category: "Specialized Skills" },
  { id: 108, name: "3D Printing", category: "Specialized Skills" },
  { id: 109, name: "Tailoring", category: "Specialized Skills" },
  { id: 110, name: "Farming Techniques", category: "Specialized Skills" },
  { id: 111, name: "Scuba Diving", category: "Specialized Skills" },
  { id: 112, name: "Sailing", category: "Specialized Skills" },
  { id: 113, name: "Dog Training", category: "Specialized Skills" },
  { id: 114, name: "Survival Skills", category: "Specialized Skills" },
];
