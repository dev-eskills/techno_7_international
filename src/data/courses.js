export const courses = [
  {
    id: 1,
    title: "All-In-One Course",
    instructor: "Master Class",
    rating: 5.0,
    price: "23,000",
    originalPrice: "50,000",
    duration: "7 Months",
    enrolled: 310,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    description: "The ultimate professional track. This career-defining program combines Graphic Design, Video Editing, and Digital Marketing into one exhaustive curriculum designed to turn you into a full-stack digital creator.",
    isCombo: true,
    features: [
      { title: "Graphic Design Mastery", desc: "Master the full Adobe Creative Suite including Photoshop and Illustrator for high-end visual storytelling." },
      { title: "Advanced Video Production", desc: "Learn professional post-production workflows, color grading, and motion graphics using Premiere Pro." },
      { title: "Digital Marketing", desc: "Execute data-driven campaigns using SEO, SEM, and social media analytics to drive real business growth." },
      { title: "Portfolio Development", desc: "Build a multi-disciplinary portfolio that showcases your versatility to top-tier global employers." }
    ],
  },
  {
    id: 2,
    title: "Video Editing Course",
    instructor: "Expert Faculty",
    rating: 4.8,
    price: "12,000",
    originalPrice: "32,000",
    duration: "3 Months",
    enrolled: 980,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
    description: "Go beyond simple cuts. This course teaches you the art of cinematic storytelling, industry-standard editing workflows, and technical mastery of Adobe Premiere Pro.",
    features: [
      { title: "Adobe Premiere Pro", desc: "Deep dive into the world's leading video editing software, from timeline management to advanced effects." },
      { title: "Editing Workflow & Storytelling", desc: "Learn the 'why' behind the 'what'—mastering pacing, narrative structure, and emotional resonance in film." },
      { title: "Motion Graphics (Basic)", desc: "Add professional flair to your videos with animated titles, lower thirds, and basic transition effects." },
      { title: "Real-World Projects", desc: "Apply your skills to practical tasks like commercial ads, YouTube content, and short-form social media videos." },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Course",
    instructor: "Expert Faculty",
    rating: 4.7,
    price: "12,000",
    originalPrice: "25,000",
    duration: "3 Months",
    enrolled: 890,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJO9IR4hUL1SjIv4Ee1oBgooTw_UOhrARPkQ&s",
    description: "Master the digital landscape. Learn to navigate the complex world of search engines, paid advertising, and data analytics to build a powerful online presence for any brand.",
    features: [
      { title: "SEO Fundamentals", desc: "Master Search Engine Optimization to rank websites on the first page of Google organically." },
      { title: "Search Engine Marketing (SEM)", desc: "Learn to build and manage high-converting paid search campaigns using Google Ads." },
      { title: "Google Analytics Overview", desc: "Understand user behavior by tracking data, setting up goals, and interpreting performance metrics." },
      { title: "Performance Tracking Tools", desc: "Utilize industry tools to monitor ROI and optimize marketing spend for maximum efficiency." },
    ],
  },
  {
    id: 4,
    title: "Graphic Design + Video Editing",
    instructor: "Combo Offer",
    rating: 5.0,
    price: "17,000",
    originalPrice: "35,000",
    duration: "5 Months",
    enrolled: 450,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    description: "The complete visual toolkit. This combo course empowers content creators to design stunning static visuals and edit professional-grade video content seamlessly.",
    isCombo: true,
    features: [
      { title: "Adobe Creative Suite", desc: "Master the bridge between static design in Photoshop and moving images in Premiere Pro." },
      { title: "Social Media Ecosystems", desc: "Create cohesive brand identities across Instagram, YouTube, and TikTok using both graphics and video." },
      { title: "Visual & Narrative Flow", desc: "Learn how to maintain design consistency while transitioning from static layouts to video sequences." },
      { title: "Content Strategy", desc: "Develop the skills to plan, design, and produce high-impact content for digital platforms." }
    ],
  },
  {
    id: 5,
    title: "Graphic Design Course",
    instructor: "Expert Faculty",
    rating: 4.0,
    price: "10,000",
    originalPrice: "20,000",
    duration: "3 Months",
    enrolled: 1250,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    description: "Transform your creativity into a professional skill set. From Adobe Photoshop to UI/UX principles, learn to create visuals that communicate, influence, and inspire.",
    features: [
      { title: "Adobe InDesign", desc: "Master professional layout design for digital magazines, brochures, and multi-page documents." },
      { title: "UI/UX & Branding", desc: "Understand user-centric design principles to create intuitive digital interfaces and powerful brand identities." },
      { title: "Visual Hierarchy", desc: "Learn the science of design—how to use color, typography, and spacing to lead the viewer's eye." },
      { title: "Logo & Brand Guidelines", desc: "Go beyond a simple logo to create comprehensive brand books and style guides for businesses." },
    ],
  },
];

// export const courses = [
//   {
//     id: 1,
//     title: "All-In-One Course",
//     instructor: "Master Class",
//     rating: 5.0,
//     price: "23,000",
//     originalPrice: "50,000",
//     duration: "7 Months",
//     enrolled: 310,
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
//     description:
//       "The ultimate professional track covering Graphic Design, Video Editing, and Digital Marketing in one exhaustive program.",
//     isCombo: true,
//   },
//   {
//     id: 2,
//     title: "Video Editing Course",
//     instructor: "Expert Faculty",
//     rating: 4.8,
//     price: "12,000",
//     originalPrice: "32,000",
//     duration: "3 Months",
//     enrolled: 980,
//     image:
//       "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
//     description:
//       "Learn industry-standard tools, storytelling, motion graphics (basic), and advanced Premiere Pro with real-world projects.",
//     features: [
//       "Premiere Pro",
//       "Storytelling",
//       "Motion Graphics",
//       "Practical Projects",
//     ],
//   },
//   {
//     id: 3,
//     title: "Digital Marketing Course",
//     instructor: "Expert Faculty",
//     rating: 4.7,
//     price: "12,000",
//     originalPrice: "25,000",
//     duration: "3 Months",
//     enrolled: 890,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bjI_pwDq77ty94b5ZZO96237p-fhxvzm1A&s",
//     description:
//       "Comprehensive coverage of SEO, SEM, Paid Ads, Google Analytics, and Performance Tracking tools.",
//     features: [
//       "SEO Fundamentals",
//       "Search Engine Marketing",
//       "Google Analytics",
//       "Live Projects",
//     ],
//   },
//   {
//     id: 4,
//     title: "Graphic Design + Video Editing",
//     instructor: "Combo Offer",
//     rating: 5.0,
//     price: "17,000",
//     originalPrice: "35,000",
//     duration: "5 Months",
//     enrolled: 450,
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
//     description:
//       "The perfect combination for content creators. Master both visual design and professional video post-production.",
//     isCombo: true,
//   },
//   {
//     id: 5,
//     title: "Graphic Design Course",
//     instructor: "Expert Faculty",
//     rating: 4.0,
//     price: "10,000",
//     originalPrice: "20,000",
//     duration: "3 Months",
//     enrolled: 1250,
//     image:
//       "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
//     description:
//       "Master Adobe Photoshop, Illustrator, InDesign, and UI/UX. Focus on branding, logo guidelines, and social media creatives.",
//     features: [
//       "Adobe InDesign",
//       "UI/UX & Branding",
//       "Visual Hierarchy",
//       "Logo Guidelines",
//     ],
//   },
// ];

export const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Freelance Graphic Designer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The Graphic Design course at Techno 7 changed everything for me. I went from knowing nothing about Photoshop and Illustrator to handling high-paying freelance clients in Indore.",
  },
  {
    id: 2,
    name: "Sanya Iyer",
    role: "Digital Marketing Specialist",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I needed to upskill for my family business. Their Digital Marketing program covered everything from SEO to Social Media strategy. The practical approach is what sets them apart.",
  },
  {
    id: 3,
    name: "Vikram Rathore",
    role: "Content Creator & Video Editor",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhFekLvrjVyb34wJ2EADKCjX39BdrLOCnWrPHm5b6vg&s",
    rating: 5,
    text: "Mastering Premiere Pro and After Effects here was the best career move I've made. The mentors at Techno 7 show you industry secrets that you just can't find on YouTube.",
  },
  {
    id: 4,
    name: "Anjali Deshmukh",
    role: "Social Media Manager",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvN4j6B8hXwGTepztMC9_KQLdkYnID352wvQ&s",
    rating: 5,
    text: "As an adult looking to switch careers into tech/creative fields, I found the environment very supportive. Their focus on building a real-world portfolio helped me get hired quickly.",
  },
  {
    id: 5,
    name: "Rohan Kapoor",
    role: "YouTube Channel Manager",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I specifically joined for the Video Editing and Digital Marketing combo. It’s perfect for anyone looking to enter the creator economy. Highly recommend Techno 7!",
  },
  {
    id: 6,
    name: "Saba Khan",
    role: "UI/UX & Visual Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQobWesg_I6tYP9G3umMtskrEKdBuKl7Pq5r4Z69VVvjA&s",
    rating: 5,
    text: "The Graphic Design training is top-notch. They don't just teach tools like Figma and Photoshop; they teach you the logic behind good design. Proud to be an alum!",
  },
];
