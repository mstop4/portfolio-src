const projects = [
  {
    'id': 0,
    'title': 'Match 3 Garden',
    'previewStatic': 'img/match-3-garden.jpg',
    'previewAnim': 'vid/preview/match-3-garden.mp4',
    'fullAnim': 'vid/match-3-garden.mp4',
    'description': 'A free-to-play narrative match-3 puzzle game on Facebook I worked on while at Softgames.<br/><br/>Features a story about a young woman who is trying to save and restore her dilapidated childhood home. Players complete levels in order to restore and decorate a large garden and mansion. Other features include daily challenge and missions, and a weekly event where player compete on a leaderboard to earn rewards.',
    'stack': [ 'Phaser CE', 'Facebook Instant Games SDK', 'DeltaDNA', 'Sentry', 'Node.js', 'Gulp' ],
    'sourceUrls': [],
    'demoUrls': [
      { url: 'https://fb.gg/play/sg_mtgarden', text: 'Play' }
    ]
  },

  {
    'id': 1,
    'title': 'Cookie Land',
    'previewStatic': 'img/cookie-land.jpg',
    'previewAnim': 'vid/preview/cookie-land.mp4',
    'fullAnim': 'vid/cookie-land.mp4',
    'description': 'A free-to-play match-3 puzzle game on Facebook I worked on while at Softgames.<br/><br/>Players complete levels and compete with friends to see who can reach the highest level, with new levels updated every week. Other features include daily challenge, a weekly Treasure Hunt events, and seasonal events where player can earn rewards.',
    'stack': [ 'Phaser CE', 'Facebook Instant Games SDK', 'DeltaDNA', 'Sentry', 'Node.js', 'Gulp' ],
    'sourceUrls': [],
    'demoUrls': [
      { url: 'https://fb.gg/play/cookie_crush_two', text: 'Play' }
    ]
  },

  {
    'id': 7,
    'title': 'GML Script Wizard',
    'previewStatic': 'img/gml-script-wizard.jpg',
    'previewAnim': 'vid/preview/gml-script-wizard.mp4',
    'fullAnim': 'vid/gml-script-wizard.mp4',
    'description': 'A tool that will help users generate and modify GML script headers just be filling in a few fields.<br/><br/>Add, remove, and rearrange arguments and additional local variables with ease, then copy the script template with a simple click of a button. Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.',
    'stack': [ 'React', 'Redux', 'Node.js', 'Material-UI', 'Babel', 'Webpack', 'Electron' ],
    'sourceUrls': [
      { url: 'https://github.com/mstop4/gml-script-wizard', text: 'Source' }
    ],
    'demoUrls': [
      { url: 'https://mstop4.github.io/gml-script-wizard', text: 'Demo' }
    ]
  },

  // {
  //   'id': 3,
  //   'title': 'GIFcentration',
  //   'previewStatic': 'img/gifcentration.jpg',
  //   'previewAnim': 'vid/preview/gifcentration.mp4',
  //   'fullAnim': 'vid/gifcentration.mp4',
  //   'description': 'Concentration (pairs-matching) game powered by Giphy and the MERN stack.<br/><br/>The Client app allows users to search for GIFs that populate the cards in a game on Concentration. The Server app relays results and queries between the Client and the Giphy API and keeps track of the most popular searches.',
  //   'stack': [ 'MongoDB', 'Mongoose', 'Express', 'React', 'Node.js', 'Giphy JS SDK', 'Redis', 'Chance.js' ],
  //   'sourceUrls': [
  //     { url: 'https://github.com/mstop4/gifcentration-client', text: 'Client' },
  //     { url: 'https://github.com/mstop4/gifcentration-server', text: 'Server' },
  //   ],
  //   'demoUrls': [
  //     { url: 'https://mstop4.github.io/gifcentration-client', text: 'Play' }
  //   ]
  // },

  {
    'id': 2,
    'title': 'GIFcentration 2',
    'previewStatic': 'img/gifcentration2.jpg',
    'previewAnim': 'vid/preview/gifcentration2.mp4',
    'fullAnim': 'vid/gifcentration2.mp4',
    'description': 'A card pairs-matching game powered by Next.js, Giphy, and Vercel.<br/><br/>Enter a topic and GIFcentration will search for relevant GIFs and set up a game of Concentration for you to play. Can\'t think of a topic? Try one of the Popular Searches!<br/><br/>Serves as the successor and replacement to the original GIFcentration Client and Server apps.',
    'stack': [ 'Next.js', 'Typescript', 'MongoDB', 'Mongoose', 'Giphy JS SDK', 'Redis', 'Zustand', 'Vercel' ],
    'sourceUrls': [
      { url: 'https://github.com/mstop4/gifcentration-2', text: 'Source' },
    ],
    'demoUrls': [
      { url: 'https://gifcentration-2.vercel.app/', text: 'Play' }
    ]
  },

  // {
  //   'id': 4,
  //   'title': 'Fractured Flicks',
  //   'previewStatic': 'img/fractured-flicks.jpg',
  //   'previewAnim': 'vid/preview/fractured-flicks.mp4',
  //   'fullAnim': 'vid/fractured-flicks.mp4',
  //   'description': 'A jigsaw puzzle-like web game where you put pieces of a video back together. Contains multiple puzzles of vary difficulty levels and saves the best solve times locally in the user\'s browser.<br/><br/>It was very well received in <a href="https://itch.io/jam/finally-finish-something-2018/rate/181663" target=_blank>Finally Finish Something Jam 2018</a>, ranked 3rd place overall out of 109 entries.',
  //   'stack': ['Pixi.js', 'pixi-sound', 'Node.js', 'Babel', 'Webpack', 'Amazon S3'],
  //   'sourceUrls': [
  //     { url: 'https://github.com/mstop4/fractured-flicks', text: 'Source' },
  //   ],
  //   'demoUrls': [
  //     { url: 'https://mstop4.github.io/fractured-flicks', text: 'Play' }
  //   ]
  // },

  {
    'id': 3,
    'title': 'Sync Timer',
    'previewStatic': 'img/sync-timer.jpg',
    'previewAnim': 'vid/preview/sync-timer.mp4',
    'fullAnim': 'vid/sync-timer.mp4',
    'description': 'An online stopwatch microservice where multiple groups of users or parties can each create and observe a common timer hosted on an express server on multiple devices via web sockets.<br/><br/>During my time as a teaching assistant at the University of Toronto, I had students needing to time the length of their presentations. Since the presenters and the audience (myself included), were facing in opposite directions, a timer on a single screen did not suffice. That gave me the idea to build Sync Timer, which solves that problem by running timers on a central server, which is broadcasted to multiple devices for different viewers.<br/><br/>It caught the attention of lead instructor of my class and he loved the idea.',
    'stack': ['Node.js', 'Express', 'Socket.io', 'Pug', 'Sass', 'Mocha', 'Chai', 'Puppeteer', 'jsdom'],
    'sourceUrls': [
      { url: 'https://github.com/mstop4/sync-timer', text: 'Source' },
    ],
    'demoUrls': [
      { url: 'https://sync-timer.herokuapp.com', text: 'Demo' }
    ]
  },

  // {
  //   'id': 5,
  //   'title': 'FMODGMS',
  //   'previewStatic': 'img/fmodgms.jpg',
  //   'previewAnim': 'vid/preview/fmodgms.mp4',
  //   'fullAnim': 'vid/fmodgms.mp4',
  //   'description': 'A <em>GameMaker: Studio 1.4</em> and <em>GameMaker Studio 2</em> extension that provides GML bindings to the FMOD Studio low-level API. Can be used in Windows, macOS, and Linux games.<br/><br/>My longest running project, it was started about a decade ago as a means to extend the audio capabilities of <em>Game Maker 8.0</em> and has been maintained and updated as newer editions of <em>GameMaker</em> have been released.',
  //   'stack': ['FMOD Low Level API', 'GameMaker Studio 2', 'GameMaker: Studio 1.4'],
  //   'sourceUrls': [
  //     { url: 'https://github.com/mstop4/fmodgms', text: 'Source' },
  //   ],
  //   'demoUrls': [
  //     { url: 'https://quadolorgames.itch.io/fmodgms', text: 'Download' }
  //   ]
  // },

  // {
  //   'id': 8,
  //   'title': 'Arborescence',
  //   'previewStatic': 'img/arborescence.png',
  //   'previewAnim': 'vid/preview/arborescence.mp4',
  //   'fullAnim': 'vid/arborescence.mp4',
  //   'description': 'A relaxing point-and-click puzzle game where the player must strategically use the keys at their disposal in order to undo all the locks and get all the trees ready for the season.<br/><br/>Every tree sprite and level is procedurally-generated, modelled after binary search trees. As such, every level has at least one solution.',
  //   'stack': ['GameMaker Studio 2'],
  //   'sourceUrls': [],
  //   'demoUrls': [
  //     { url: 'https://quadolorgames.itch.io/arborescence', text: 'Download' }
  //   ]
  // },

  /*{
    'id': 7,
    'title': 'I am Rubba, You Are Gloo',
    'previewStatic': 'img/iamrubba.png',
    'previewAnim': 'vid/preview/iamrubba.mp4',
    'fullAnim': 'vid/iamrubba.mp4',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet dolor vitae sapien consectetur fringilla. Nulla gravida, ipsum viverra varius rutrum, arcu nisl consectetur ante, at congue turpis diam ut mauris. Vivamus vel viverra felis. Duis vel rhoncus tellus. Donec accumsan fermentum diam ut consequat. Duis commodo augue nec condimentum finibus. Aenean ut ullamcorper augue. Aenean scelerisque consequat quam et fringilla. Sed scelerisque nisl sed augue molestie gravida. Nam tempus ex ullamcorper, congue est vel, efficitur ex.',
    'stack': ['GameMaker: Studio 1.4'],
    'sourceUrls': [],
    'demoUrls': [
      { url: 'https://quadolorgames.itch.io/i-am-rubba-you-are-gloo', text: 'Download' }
    ]
  },*/

  {
    'id': 6,
    'title': 'Worker #11812',
    'previewStatic': 'img/worker-11812.jpg',
    'previewAnim': 'vid/preview/worker-11812.mp4',
    'fullAnim': 'vid/worker-11812.mp4',
    'description': 'A point-and-drag game inspired by the "paternoster machine" (better known as the "clock scene") from the 1927 film <em>Metropolis</em> by Fritz Lang.<br/><br/> The game was first created with Phaser 3 as an exercise in learning the framework, then it was ported to GameMaker Studio 2 for native builds (Windows, macOS, Linux) after deciding that packing the web app with Electron made it too large.',
    'stack': ['Phaser 3', 'Node.js', 'Babel', 'Webpack', 'GameMaker Studio 2'],
    'sourceUrls': [
      { url: 'https://github.com/mstop4/worker-11812-phaser', text: 'Web' },
      { url: 'https://github.com/mstop4/worker-11812-gms', text: 'Native' }
    ],
    'demoUrls': [
      { url: 'https://quadolorgames.itch.io/worker-11812', text: 'Play' }
    ]
  },

  /*{
    'id': 7,
    'title': 'dot.Market 2',
    'previewStatic': 'img/dotMarket2.png',
    'previewAnim': 'vid/preview/dotMarket2.mp4',
    'fullAnim': 'vid/dotMarket2.mp4',
    'description': 'A fantasy business simulator about the exciting world of pixel art restoration.<br/><br/>Players buy second-hand broken art and the pixels needed to fix them, then sell the restored art for a profit. The value of pixels and pixel art fluctuate depending on market forces, encouraging players to buy low, sell high.',
    'stack': ['GameMaker Studio 2'],
    'sourceUrls': [
      { url: 'https://github.com/mstop4/lowrezjam-2018', text: 'Source' },
    ],
    'demoUrls': [
      { url: 'https://quadolorgames.itch.io/dotmarket-2', text: 'Play' }
    ]
  },

  {
    'id': 8,
    'title': 'Toutatis',
    'previewStatic': 'img/toutatis.jpg',
    'previewAnim': 'vid/preview/toutatis.mp4',
    'fullAnim': 'vid/toutatis.mp4',
    'description': 'A collaborative project with Cirrus Studios for Global Game Jam 2017. A bunch of space rocks and UFOs have decided to team up to attack and hate on Earth, and it\'s up to the player to protect it by clicking or tapping the screen to create waves to fend them off.',
    'stack': ['GameMaker Studio 2'],
    'sourceUrls': [],
    'demoUrls': [
      { url: 'https://quadolorgames.itch.io/toutatis', text: 'Play' }
    ]
  },*/
];

const portfolios = [
  {
    'displayText': 'Github',
    'url': 'https://github.com/mstop4',
    'iconClass': ['icon-github']
  },

  {
    'displayText': 'itch.io',
    'url': 'https://quadolorgames.itch.io/',
    'iconClass': ['icon-itchio-textless-black']
  },
];

const contacts = [
  {
    'displayText': 'Email',
    'url': 'mailto:jonathan.hs.lam@gmail.com',
    'iconClass': ['icon-envelope-o']
  },

  {
    'displayText': 'LinkedIn',
    'url': 'https://www.linkedin.com/in/jonathanlam4/',
    'iconClass': ['icon-linkedin2']
  }

  // {
  //   'displayText': 'Twitter',
  //   'url': 'https://twitter.com/QuadolorGames',
  //   'iconClass': ['icon-twitter']
  // }
];

export { projects, portfolios, contacts };