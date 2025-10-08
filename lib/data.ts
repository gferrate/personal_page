export const bio = {
  title: "Hi there! Welcome to my site,",
  paragraphs: [
    "I am Gabriel Ferraté, a Barcelona-born, globally-based engineer and music nerd.",
    "I love to create things, either hardware or software, robots or websites, useless or useful. You name it.",
    "Most of my experience is on distributed systems and databases, but I also like to tinker with artificial intelligence, electronics, frontend development, and other cool stuff.",
    "Scroll down to discover me. See you soon!",
  ],
} as const;

export const projects = [
  {
    title: "Royalties Calculator",
    subtitle:
      "This tool enables you to search for any musician and approximates how much money they generate in royalties across all major streaming platforms. It has hundreds of thousands of page visits.",
    link: "https://royalties-calculator.com/",
    color: "bg-indigo-500",
    starred: true,
  },
  {
    title: "Analog Synthesizer and 8-Step Sequencer",
    subtitle:
      "Designed a full-size analog synthesizer and an 8-step sequencer as my final thesis at Purdue University.",
    link: "https://www.youtube.com/watch?v=xIo1AV4bAkE",
    color: "bg-gray-500",
    starred: true,
  },
  {
    title: "Track Trivia",
    subtitle: "A multiplayer music trivia game where players can guess songs.",
    link: "https://www.track-trivia.com/",
    color: "bg-red-500",
    isNew: true,
  },
  {
    title: "Tweenvest",
    subtitle: "A tool for analyzing the stock market.",
    link: "https://www.tweenvest.com/",
    color: "bg-purple-500",
    starred: true,
  },
  {
    title: "QR Blend",
    subtitle: "The first AI-powered QR code generator in the world.",
    link: "https://www.qrblend.com/",
    color: "bg-green-500",
    starred: true,
  },
  {
    title: "Whalfred",
    subtitle: "Create and receive reminders directly on WhatsApp.",
    link: "https://whalfred.com/",
    color: "bg-pink-500",
    starred: true,
  },
  {
    title: "Meet me",
    subtitle: "Create unique links for your meetings.",
    link: "https://meet-me.co/",
    color: "bg-green-500",
    isNew: true,
  },
  {
    title: "dupla.ai",
    subtitle: "A copywriting tool powered by artificial intelligence.",
    link: "https://www.dupla.ai/",
    color: "bg-red-500",
  },
  {
    title: "Infinite Canvas",
    subtitle:
      "The infinite canvas is an AI-generated image that extends endlessly in all directions. All changes you make are visible to everyone else in real time.",
    link: "https://infinite-canvas.gabrielferrate.com/",
    color: "bg-yellow-500",
    isNew: true,
  },
  {
    title: "Federated Learning Framework",
    subtitle:
      "Designed, implemented, and tested an algorithm for training a Convolutional Neural Network in a distributed manner (Federated Learning).",
    link: "https://github.com/gferrate/pytorch_federated_learning",
    color: "bg-yellow-500",
  },
  {
    title: "Bestwatch",
    subtitle:
      "Ranks the entire Netflix catalog from nearly all countries by IMDb rating. It attracts thousands of page visits.",
    link: "https://bestwatch.app/",
    color: "bg-pink-500",
  },
  {
    title: "Daily Records",
    subtitle: "A design-focused website for mapping pictures to a timeline.",
    link: "https://daily-records.netlify.app/",
    color: "bg-red-500",
  },
  {
    title: "Drunk Translator",
    subtitle:
      "A prank webpage simulating drunk behavior. It has accumulated tens of thousands of visits.",
    link: "https://www.drunk-translator.com/?lang=eng",
    color: "bg-blue-500",
  },
  {
    title: "Hodor",
    subtitle:
      "Engineered a system to open and close BMAT's headquarters' office with Auth0 authentication and access control, integrating geolocation.",
    link: "https://www.youtube.com/watch?v=_1j-8boMRDQ",
    color: "bg-purple-500",
  },
  {
    title: "Customize Windows Blue Error Screen",
    subtitle: "A prank website for customizing the Windows blue error screen.",
    link: "https://windows-blue-screen.netlify.app/",
    color: "bg-blue-500",
  },
] as const;

export const works = [
  {
    name: "Caixabank Consumer Finance",
    degree: "Business Intelligence Intern",
    country: "Barcelona",
    year: 2017,
    color: "bg-blue-500",
    href: "https://www.caixabank.es/",
    image: "/images/caixabank_logo.png",
  },
  {
    name: "BMAT Music Innovators",
    degree: "Software Engineer",
    country: "Barcelona",
    year: 2017,
    color: "bg-green-500",
    href: "https://www.bmat.com/",
    image: "/images/bmat_logo.jpeg",
  },
  {
    name: "Aldara (YC S22)",
    degree: "Senior Software Engineer",
    country: "Barcelona",
    year: 2022,
    color: "bg-red-500",
    href: "https://www.ycombinator.com/companies/aldara",
    image: "/images/aldara.png",
  },
  {
    name: "Tweenvest",
    degree: "Co-founder and CTO",
    country: "Barcelona",
    year: 2022,
    color: "bg-gray-500",
    href: "https://www.tweenvest.com/",
    image: "/images/tweenvest_logo.png",
  },
  {
    name: "Datadog",
    degree: "Software Engineer II",
    country: "Madrid",
    year: 2025,
    color: "bg-purple-500",
    href: "https://www.datadoghq.com/",
    image: "/images/datadog_logo.png",
  },
] as const;

export const education = [
  {
    name: "Polytechnic University of Catalonia",
    degree: "Telecommunications Engineering",
    country: "Barcelona",
    year: 2014,
    color: "bg-blue-500",
    href: "https://telecos.upc.edu/en?set_language=en",
    image: "/images/upc_logo.png",
  },
  {
    name: "Purdue University",
    degree: "Final degree project",
    country: "United States",
    year: 2018,
    color: "bg-yellow-500",
    href: "https://engineering.purdue.edu/ECE",
    image: "/images/purdue_logo.png",
  },
  {
    name: "Polytechnic University of Catalonia",
    degree: "MSE Artificial Intelligence",
    country: "Barcelona",
    year: 2019,
    color: "bg-blue-500",
    href: "https://matt.masters.upc.edu/",
    image: "/images/upc_logo.png",
  },
  {
    name: "King's College London",
    degree: "Exchange Research Student",
    country: "London",
    year: 2020,
    color: "bg-red-500",
    href: "https://www.kcl.ac.uk/research/ctr",
    image: "/images/kings_logo.jpeg",
  },
] as const;
