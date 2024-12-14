// const reactProjects = {
//   wildOasis: {
//     imgSrc: "/wildOasis.png",
//     imgAlt: "project",
//     title: "Wild Oasis (Hotel management system)",
//     briefIntro:
//       "hotel management system (employees interface only) for cabins in the wild instead of buildings in the towns",
//     details: [
//       "Accounts system and real authentication with ability to create new users",
//       "full control of adding cabins, guests, bookings and edit all settings (CRUD)",
//       "Clean code, taking care about performance, powerful design patterns and efficient file structure",
//       "Big and complex global & remote state management",
//       "Efficient way of dealing with lack of resources such as (deleting the old images after uploading the new one. Supabase doesn't have like this function in storage)",
//       "Used the lazy loading components according to the the big amount of pages",
//       "Lazy loading images for more user-experience",
//       "A lot of reusable custom hooks and components",
//       "Powerful and multiple charts for dashboard with Rechart",
//       "Ability to search in realtime for guests (Race condition solved)",
//       "Dark mode with best practices",
//       "Pagination for guests and booking",
//       "Used both service side filter with sorting and client side for more user-experience",
//       "Used the most user-friendly effects like fading, collapsing and more. builded from scratch (DOM manipulation)",
//     ],
//     warnings: [
//       "This app use real accounts and only employees can add one so please use this one to give the app a shot",
//       "Email: magolon226@hisotyr.com,Password: lili123#",
//       "Dashboard statistics may show nothing so feel free to add guests and bookings (there is existing guests and you can just add bookings)",
//     ],
//     tools: [
//       "React.js",
//       "Tanstack-React query",
//       "Styled-componenet for CSS",
//       "React Router DOM ",
//       "Supabase service (backend & database)",
//     ],
//     projectUrl: "https://osama78assi.github.io/WildOasis/",
//     codeUrl: "https://github.com/osama78assi/WildOasis",
//   },
//   fastPizza: {
//     imgSrc: "/fastPizza.png",
//     imgAlt: "project",
//     title: "fast pizza",
//     briefIntro: "in this app you can order as many as you want from pizza",
//     details: [
//       "The new React Router feature of routing",
//       "Render as you fetch approach",
//       "Fetching data from another page without navigating to it",
//       "Cart feature using the power of Redux toolkit",
//       "Managing some pieces of remote state using middlewares and async thunk",
//       "Styling using one of the powerful CSS framework Tailwind CSS",
//     ],
//     warnings: [],
//     tools: [
//       "React.js",
//       "Redux Toolkit",
//       "Tailwind CSS",
//       "React Router DOM v6.22.0",
//     ],
//     projectUrl: "https://osama78assi.github.io/fastPizza/",
//     codeUrl: "https://github.com/osama78assi/fastPizza",
//   },
//   worldWise: {
//     imgSrc: "/worldWise.png",
//     imgAlt: "project",
//     title: "world wise",
//     briefIntro:
//       "In this app you can keep track of any journey you have traveld throw your life",
//     details: [
//       "Protecting some pages in the app if the user not logged in",
//       "Custom hook for managing the session storage to know if the user logged in or not",
//       "Lazy loading components feature in react with suspense component",
//       "Context API to manage global state with best practices",
//       "Handling complex routing using the classic way of React Router",
//       "Handeling events on the map with React Leaflet library ",
//       "Time limit for some api requests for more user friendly interface",
//       "Styling the components using CSS modules instead of global classes",
//     ],
//     warnings: [
//       "This app using fake authentication just use the prefilled input data",
//     ],
//     tools: ["React", "React Router DOM", "React Leaflet"],
//     projectUrl: "https://osama78assi.github.io/worldWise/",
//     codeUrl: "https://github.com/osama78assi/worldWise",
//   },
//   toDo: {
//     imgSrc: "/toDoApp.png",
//     imgAlt: "project",
//     title: "todo application",
//     briefIntro: "You can schedule your daily tasks using groups feature",
//     details: [
//       "The classic way of routing in React Router DOM",
//       "Many DOM manipulation operations using Ref like collapse effect, custom slider",
//       "Simple dashboard contain all CRUD operations each single task and group",
//       "Many colors theme available for user and dark mode feature",
//       "Handling very complex global state using the Redux toolkit",
//       "Almost every action is middleware because using custom hook for local storage",
//       "Very flexible app and reusable styling using SCSS",
//     ],
//     warnings: [],
//     tools: ["React", "React Router DOM", "Redux Toolkit", "SCSS"],
//     projectUrl: "https://osama78assi.github.io/todoApp/",
//     codeUrl: "https://github.com/osama78assi/todoApp",
//   },
//   genetic: {
//     imgSrc: "/genetic.png",
//     imgAlt: "project",
//     title: "Simulation small stockroom system",
//     briefIntro:
//       "You can add goods with wieghts and quantity then the system will load the goods in best way. Then delivery the goods over multiple counteries",
//     details: [
//       "This website is using an intelligent algorithm (Genetic algorithm)",
//       "Built with the Django python with small API",
//       "Handling complex data transmission between client and server",
//       "Used math to draw complex graph representation and self contained component",
//       "Used the most popular algorithm for finding the shortest path (A*)"
//     ],
//     warnings: [],
//     tools: ["React", "Redux", "React Router DOM", "CSS", "Tailwind CSS", "Django python"],
//     projectUrl: "https://osama78assi.pythonanywhere.com",
//     codeUrl: "https://github.com/osama78assi/BIA501Interface"
//   },
//   movies: {
//     imgSrc: "/movies.png",
//     imgAlt: "project",
//     title: "Movies App",
//     briefIntro: "You can search about almost any film using IMDB API",
//     details: [
//       "Search feature with API request",
//       "Handling some problems that may user face in his internet connection",
//       "Handling race condition problem by aborting the current request and send the new one",
//     ],
//     warnings: [],
//     tools: ["React", "CSS"],
//     projectUrl: "https://osama78assi.github.io/moviesApp/",
//     codeUrl: "https://github.com/osama78assi/moviesApp",
//   },
//   quiz: {
//     imgSrc: "/quiz.png",
//     imgAlt: "project",
//     title: "Quiz App",
//     briefIntro: "simple React quiz app",
//     details: ["Managing complex state using the power of useReducer hook"],
//     warnings: [],
//     tools: ["React", "CSS"],
//     projectUrl: "https://osama78assi.github.io/quiz/",
//     codeUrl: "https://github.com/osama78assi/quiz",
//   },
//   weather: {
//     imgSrc: "/weather.png",
//     imgAlt: "project",
//     title: "Weatehr App",
//     briefIntro:
//       "simple weather app where you can search about any country or using your country as default",
//     details: [
//       "classic weather app using the classic way of react, which is class component",
//     ],
//     warnings: [],
//     tools: ["React(Class component)", "CSS"],
//     projectUrl: "https://osama78assi.github.io/weatherApp/",
//     codeUrl: "https://github.com/osama78assi/weatherApp",
//   },
// };

// const javaScriptProjects = {
//   forkify: {
//     imgSrc: "/forkify.png",
//     imgAlt: "project",
//     title: "Forkify App",
//     briefIntro: "Here you can search over 10.000 recipes, save your recipes",
//     details: [
//       "Built this app in modern JavaScript with ES6 features",
//       "Built with MVC architecture",
//       "Clean code that fulfil most of SOLID principles",
//       "Time limit for each API request & errors handling",
//       "Advanced DOM manipulation and async operations. Real time application",
//       "Search feature with forkify API",
//       "Form validation with regular expressions",
//       "Mixed programming paradigms between OOP and FP",
//     ],
//     warnings: [],
//     tools: ["Pure JavaScript", "SCSS"],
//     projectUrl: "https://osama78assi.github.io/forkifyApp/",
//     codeUrl: "https://github.com/osama78assi/forkifyApp",
//   },
//   kasper: {
//     imgSrc: "/kasper.png",
//     imgAlt: "project",
//     title: "Kasper",
//     briefIntro: "one page templete",
//     details: ["DOM manipulation", "styled with pure CSS"],
//     warnings: [],
//     tools: ["Pure JavaScript", "CSS"],
//     projectUrl: "https://osama78assi.github.io/kasper/",
//     codeUrl: "https://github.com/osama78assi/kasper",
//   },
//   bankistDOM: {
//     imgSrc: "/bankistDOM.png",
//     imgAlt: "project",
//     title: "Bankist Application",
//     briefIntro: "normal one page template",
//     details: [
//       "DOM manipulation",
//       "Tab component",
//       "Slider component",
//       "Lazy loading images",
//     ],
//     warnings: [],
//     tools: ["Pure JavaScript", "CSS"],
//     projectUrl: "https://osama78assi.github.io/bankistAdvanceDOM/",
//     codeUrl: "https://github.com/osama78assi/bankistAdvanceDOM",
//   },
//   mapty: {
//     imgSrc: "/mapty.png",
//     imgAlt: "project",
//     title: "Mapty Application",
//     briefIntro: "Here you can plan to your next journey using the map",
//     details: [
//       "Geolocation API",
//       "Built with Leaflet",
//       "Used local storage to store",
//     ],
//     warnings: [],
//     tools: ["JavaScript", "Leaflet", "CSS"],
//     projectUrl: "https://osama78assi.github.io/mapty/",
//     codeUrl: "https://github.com/osama78assi/mapty",
//   },
//   bankistDashboard: {
//     imgSrc: "/bankistDashboard.png",
//     imgAlt: "project",
//     title: "Bankist Dashboard",
//     briefIntro: "Simple dashboard for fake bank interface",
//     details: ["all CRUD operations", "sort functionality"],
//     warnings: [
//       "Use This Data: {js, 1111} Or {jd, 2222} Or {st, 3333} Or {ss, 4444}",
//     ],
//     tools: ["Pure JavaScript", "CSS"],
//     projectUrl: "https://osama78assi.github.io/bankistDashboard/",
//     codeUrl: "https://github.com/osama78assi/bankistDashboard",
//   },
// };

// const cssProjects = {
//   coders: {
//     imgSrc: "/coders.png",
//     imgAlt: "project",
//     title: "Coders Arena",
//     briefIntro: "noraml web page",
//     details: ["Grid and flex property"],
//     warnings: [],
//     tools: ["CSS"],
//     projectUrl: "https://osama78assi.github.io/Coders-Arena/",
//     codeUrl: "https://github.com/osama78assi/Coders-Arena",
//   },
//   bondi: {
//     imgSrc: "/bondi.png",
//     imgAlt: "project",
//     title: "Bondi",
//     briefIntro: "Simple web page",
//     details: ["Built with bootstrap"],
//     warnings: [],
//     tools: ["CSS", "Bootstrap"],
//     projectUrl: "https://osama78assi.github.io/Bondi/",
//     codeUrl: "https://github.com/osama78assi/Bondi",
//   },
//   music: {
//     imgSrc: "/music.png",
//     imgAlt: "project",
//     title: "Music Dashboard",
//     briefIntro: "styling fake music dashboard",
//     details: ["Styling responsive complex dashboard with Bootstrap"],
//     warnings: [],
//     tools: ["CSS", "Bootstrap"],
//     projectUrl: "https://osama78assi.github.io/music/",
//     codeUrl: "https://github.com/osama78assi/music",
//   },
//   leon: {
//     imgSrc: "/leon.png",
//     imgAlt: "project",
//     title: "Leon",
//     briefIntro: "Simple web page",
//     details: ["styling with pure CSS"],
//     warnings: [],
//     tools: ["CSS"],
//     projectUrl: "https://osama78assi.github.io/leon/",
//     codeUrl: "https://github.com/osama78assi/leon",
//   },
// };

// export { cssProjects, javaScriptProjects, reactProjects };


//////////////////////
/// FOR PRODUCTION

const reactProjects = {
  wildOasis: {
    imgSrc: "./wildOasis.png",
    imgAlt: "project",
    title: "Wild Oasis (Hotel management system)",
    briefIntro:
      "hotel management system (employees interface only) for cabins in the wild instead of buildings in the towns",
    details: [
      "Accounts system and real authentication with ability to create new users",
      "full control of adding cabins, guests, bookings and edit all settings (CRUD)",
      "Clean code, taking care about performance, powerful design patterns and efficient file structure",
      "Big and complex global & remote state management",
      "Efficient way of dealing with lack of resources such as (deleting the old images after uploading the new one. Supabase doesn't have like this function in storage)",
      "Used the lazy loading components according to the the big amount of pages",
      "Lazy loading images for more user-experience",
      "A lot of reusable custom hooks and components",
      "Powerful and multiple charts for dashboard with Rechart",
      "Ability to search in realtime for guests (Race condition solved)",
      "Dark mode with best practices",
      "Pagination for guests and booking",
      "Used both service side filter with sorting and client side for more user-experience",
      "Used the most user-friendly effects like fading, collapsing and more. builded from scratch (DOM manipulation)",
    ],
    warnings: [
      "This app use real accounts and only employees can add one so please use this one to give the app a shot",
      "Email: magolon226@hisotyr.com,Password: lili123#",
      "Dashboard statistics may show nothing so feel free to add guests and bookings (there is existing guests and you can just add bookings)",
    ],
    tools: [
      "React.js",
      "Tanstack-React query",
      "Styled-componenet for CSS",
      "React Router DOM ",
      "Supabase service (backend & database)",
    ],
    projectUrl: "https://osama78assi.github.io/WildOasis/",
    codeUrl: "https://github.com/osama78assi/WildOasis",
  },
  fastPizza: {
    imgSrc: "./fastPizza.png",
    imgAlt: "project",
    title: "fast pizza",
    briefIntro: "in this app you can order as many as you want from pizza",
    details: [
      "The new React Router feature of routing",
      "Render as you fetch approach",
      "Fetching data from another page without navigating to it",
      "Cart feature using the power of Redux toolkit",
      "Managing some pieces of remote state using middlewares and async thunk",
      "Styling using one of the powerful CSS framework Tailwind CSS",
    ],
    warnings: [],
    tools: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Router DOM v6.22.0",
    ],
    projectUrl: "https://osama78assi.github.io/fastPizza/",
    codeUrl: "https://github.com/osama78assi/fastPizza",
  },
  worldWise: {
    imgSrc: "./worldWise.png",
    imgAlt: "project",
    title: "world wise",
    briefIntro:
      "In this app you can keep track of any journey you have traveld throw your life",
    details: [
      "Protecting some pages in the app if the user not logged in",
      "Custom hook for managing the session storage to know if the user logged in or not",
      "Lazy loading components feature in react with suspense component",
      "Context API to manage global state with best practices",
      "Handling complex routing using the classic way of React Router",
      "Handeling events on the map with React Leaflet library ",
      "Time limit for some api requests for more user friendly interface",
      "Styling the components using CSS modules instead of global classes",
    ],
    warnings: [
      "This app using fake authentication just use the prefilled input data",
    ],
    tools: ["React", "React Router DOM", "React Leaflet"],
    projectUrl: "https://osama78assi.github.io/worldWise/",
    codeUrl: "https://github.com/osama78assi/worldWise",
  },
  toDo: {
    imgSrc: "./toDoApp.png",
    imgAlt: "project",
    title: "todo application",
    briefIntro: "You can schedule your daily tasks using groups feature",
    details: [
      "The classic way of routing in React Router DOM",
      "Many DOM manipulation operations using Ref like collapse effect, custom slider",
      "Simple dashboard contain all CRUD operations each single task and group",
      "Many colors theme available for user and dark mode feature",
      "Handling very complex global state using the Redux toolkit",
      "Almost every action is middleware because using custom hook for local storage",
      "Very flexible app and reusable styling using SCSS",
    ],
    warnings: [],
    tools: ["React", "React Router DOM", "Redux Toolkit", "SCSS"],
    projectUrl: "https://osama78assi.github.io/todoApp/",
    codeUrl: "https://github.com/osama78assi/todoApp",
  },
  genetic: {
    imgSrc: "./genetic.png",
    imgAlt: "project",
    title: "Simulation small stockroom system",
    briefIntro:
      "You can add goods with wieghts and quantity then the system will load the goods in best way. Then delivery the goods over multiple counteries",
    details: [
      "This website is using an intelligent algorithm (Genetic algorithm)",
      "Built with the Django python with small API",
      "Handling complex data transmission between client and server",
      "Used math to draw complex graph representation and self contained component",
      "Used the most popular algorithm for finding the shortest path (A*)"
    ],
    warnings: [],
    tools: ["React", "Redux", "React Router DOM", "CSS", "Tailwind CSS", "Django python"],
    projectUrl: "https://osama78assi.pythonanywhere.com",
    codeUrl: "https://github.com/osama78assi/BIA501Interface"
  },
  movies: {
    imgSrc: "./movies.png",
    imgAlt: "project",
    title: "Movies App",
    briefIntro: "You can search about almost any film using IMDB API",
    details: [
      "Search feature with API request",
      "Handling some problems that may user face in his internet connection",
      "Handling race condition problem by aborting the current request and send the new one",
    ],
    warnings: [],
    tools: ["React", "CSS"],
    projectUrl: "https://osama78assi.github.io/moviesApp/",
    codeUrl: "https://github.com/osama78assi/moviesApp",
  },
  quiz: {
    imgSrc: "./quiz.png",
    imgAlt: "project",
    title: "Quiz App",
    briefIntro: "simple React quiz app",
    details: ["Managing complex state using the power of useReducer hook"],
    warnings: [],
    tools: ["React", "CSS"],
    projectUrl: "https://osama78assi.github.io/quiz/",
    codeUrl: "https://github.com/osama78assi/quiz",
  },
  weather: {
    imgSrc: "./weather.png",
    imgAlt: "project",
    title: "Weatehr App",
    briefIntro:
      "simple weather app where you can search about any country or using your country as default",
    details: [
      "classic weather app using the classic way of react, which is class component",
    ],
    warnings: [],
    tools: ["React(Class component)", "CSS"],
    projectUrl: "https://osama78assi.github.io/weatherApp/",
    codeUrl: "https://github.com/osama78assi/weatherApp",
  },
};

const javaScriptProjects = {
  forkify: {
    imgSrc: "./forkify.png",
    imgAlt: "project",
    title: "Forkify App",
    briefIntro: "Here you can search over 10.000 recipes, save your recipes",
    details: [
      "Built this app in modern JavaScript with ES6 features",
      "Built with MVC architecture",
      "Clean code that fulfil most of SOLID principles",
      "Time limit for each API request & errors handling",
      "Advanced DOM manipulation and async operations. Real time application",
      "Search feature with forkify API",
      "Form validation with regular expressions",
      "Mixed programming paradigms between OOP and FP",
    ],
    warnings: [],
    tools: ["Pure JavaScript", "SCSS"],
    projectUrl: "https://osama78assi.github.io/forkifyApp/",
    codeUrl: "https://github.com/osama78assi/forkifyApp",
  },
  kasper: {
    imgSrc: "./kasper.png",
    imgAlt: "project",
    title: "Kasper",
    briefIntro: "one page templete",
    details: ["DOM manipulation", "styled with pure CSS"],
    warnings: [],
    tools: ["Pure JavaScript", "CSS"],
    projectUrl: "https://osama78assi.github.io/kasper/",
    codeUrl: "https://github.com/osama78assi/kasper",
  },
  bankistDOM: {
    imgSrc: "./bankistDOM.png",
    imgAlt: "project",
    title: "Bankist Application",
    briefIntro: "normal one page template",
    details: [
      "DOM manipulation",
      "Tab component",
      "Slider component",
      "Lazy loading images",
    ],
    warnings: [],
    tools: ["Pure JavaScript", "CSS"],
    projectUrl: "https://osama78assi.github.io/bankistAdvanceDOM/",
    codeUrl: "https://github.com/osama78assi/bankistAdvanceDOM",
  },
  mapty: {
    imgSrc: "./mapty.png",
    imgAlt: "project",
    title: "Mapty Application",
    briefIntro: "Here you can plan to your next journey using the map",
    details: [
      "Geolocation API",
      "Built with Leaflet",
      "Used local storage to store",
    ],
    warnings: [],
    tools: ["JavaScript", "Leaflet", "CSS"],
    projectUrl: "https://osama78assi.github.io/mapty/",
    codeUrl: "https://github.com/osama78assi/mapty",
  },
  bankistDashboard: {
    imgSrc: "./bankistDashboard.png",
    imgAlt: "project",
    title: "Bankist Dashboard",
    briefIntro: "Simple dashboard for fake bank interface",
    details: ["all CRUD operations", "sort functionality"],
    warnings: [
      "Use This Data: {js, 1111} Or {jd, 2222} Or {st, 3333} Or {ss, 4444}",
    ],
    tools: ["Pure JavaScript", "CSS"],
    projectUrl: "https://osama78assi.github.io/bankistDashboard/",
    codeUrl: "https://github.com/osama78assi/bankistDashboard",
  },
};

const cssProjects = {
  coders: {
    imgSrc: "./coders.png",
    imgAlt: "project",
    title: "Coders Arena",
    briefIntro: "noraml web page",
    details: ["Grid and flex property"],
    warnings: [],
    tools: ["CSS"],
    projectUrl: "https://osama78assi.github.io/Coders-Arena/",
    codeUrl: "https://github.com/osama78assi/Coders-Arena",
  },
  bondi: {
    imgSrc: "./bondi.png",
    imgAlt: "project",
    title: "Bondi",
    briefIntro: "Simple web page",
    details: ["Built with bootstrap"],
    warnings: [],
    tools: ["CSS", "Bootstrap"],
    projectUrl: "https://osama78assi.github.io/Bondi/",
    codeUrl: "https://github.com/osama78assi/Bondi",
  },
  music: {
    imgSrc: "./music.png",
    imgAlt: "project",
    title: "Music Dashboard",
    briefIntro: "styling fake music dashboard",
    details: ["Styling responsive complex dashboard with Bootstrap"],
    warnings: [],
    tools: ["CSS", "Bootstrap"],
    projectUrl: "https://osama78assi.github.io/music/",
    codeUrl: "https://github.com/osama78assi/music",
  },
  leon: {
    imgSrc: "./leon.png",
    imgAlt: "project",
    title: "Leon",
    briefIntro: "Simple web page",
    details: ["styling with pure CSS"],
    warnings: [],
    tools: ["CSS"],
    projectUrl: "https://osama78assi.github.io/leon/",
    codeUrl: "https://github.com/osama78assi/leon",
  },
};

export { cssProjects, javaScriptProjects, reactProjects };