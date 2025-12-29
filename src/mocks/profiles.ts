export const profiles = [
  {
    id: "1",
    name: "Sophia",
    age: 24,
    gender: "female",
    location: "New York",
    isOnline: true,

    hourlyRate: 300,
    rating: 5,
    isVip: true,
    isVerified: true,
    isNew: true,

    avatar: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    coverPhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",

    bio: "Elegant, discreet and charming. Perfect for exclusive moments and unforgettable experiences.",

    photos: {
      total: 6,
      items: [
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
      ],
    },

    videos: {
      total: 3,
      items: [
        {
          url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
          time: "00:32",
        },
        {
          url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          time: "09:17",
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
          time: "00:59",
        },
      ],
    },

    services: [
      "Dinner companion",
      "VIP escort",
      "Travel companion",
      "Overnight",
    ],

    availability: [
      { day: "Monday", from: "10:00", to: "22:00" },
      { day: "Wednesday", from: "14:00", to: "02:00" },
      { day: "Friday", from: "18:00", to: "04:00" },
    ],

    serviceTimes: [
      { label: "1 hour", price: 300 },
      { label: "2 hours", price: 550 },
      { label: "12 hours", price: 1800 },
      { label: "Overnight", price: 2500 },
    ],

    review: {
      total: 7,
      rating: 4.8,
      reviews: [
        {
          name: "Steiner",
          avatar:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
          date: "16/12/2025",
          rating: 5,
          description: "Amazing experience, classy and professional.",
        },
        {
          name: "Lucas",
          avatar:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9",
          date: "02/12/2025",
          rating: 4.5,
          description: "Very polite and fun company.",
        },
      ],
    },
  },

  {
    id: "2",
    name: "Isabella",
    age: 26,
    gender: "female",
    location: "Los Angeles",
    isOnline: false,

    hourlyRate: 280,
    rating: 4.8,
    isVip: true,
    isVerified: true,
    isNew: false,

    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    coverPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",

    bio: "Sophisticated, spontaneous and always smiling. Great for events and trips.",

    photos: {
      total: 4,
      items: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      ],
    },

    videos: {
      total: 2,
      items: [
        {
          url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
          time: "11:37",
        },
        {
          url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
          time: "00:45",
        },
      ],
    },

    services: ["Private meetings", "VIP escort", "Travel companion"],

    availability: [
      { day: "Tuesday", from: "12:00", to: "23:00" },
      { day: "Saturday", from: "16:00", to: "03:00" },
    ],

    serviceTimes: [
      { label: "1 hour", price: 280 },
      { label: "2 hours", price: 520 },
      { label: "Overnight", price: 2300 },
    ],

    review: {
      total: 5,
      rating: 4.6,
      reviews: [
        {
          name: "Carlos",
          avatar:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
          date: "05/12/2025",
          rating: 4.5,
          description: "Very pleasant and attentive.",
        },
      ],
    },
  },

  {
    id: "3",
    name: "Emily",
    age: 23,
    gender: "female",
    location: "Miami",
    isOnline: true,

    hourlyRate: 250,
    rating: 4.6,
    isVip: false,
    isVerified: true,
    isNew: false,

    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    coverPhoto: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",

    bio: "Sweet, friendly and full of energy. Perfect for relaxed moments.",

    photos: {
      total: 5,
      items: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
        "https://images.unsplash.com/photo-1517365830460-955ce3ccd263",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      ],
    },

    videos: {
      total: 1,
      items: [
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          thumbUrl:
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
          time: "5:28",
        },
      ],
    },

    services: ["Dinner companion", "Private meetings"],

    availability: [
      { day: "Thursday", from: "15:00", to: "01:00" },
      { day: "Sunday", from: "12:00", to: "20:00" },
    ],

    serviceTimes: [
      { label: "1 hour", price: 250 },
      { label: "2 hours", price: 480 },
    ],

    review: {
      total: 3,
      rating: 4.5,
      reviews: [
        {
          name: "André",
          avatar: "",
          date: "28/11/2025",
          rating: 4.5,
          description: "Nice conversation and very friendly.",
        },
      ],
    },
  },
];
