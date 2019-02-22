module.exports = {  
  'projects': [
    {
      'id': 5,
      'title': 'GML Script Wizard',
      'previewStatic': 'img/gml-script-wizard.jpg',
      'previewAnim': 'vid/preview/gml-script-wizard.mp4',
      'fullAnim': 'vid/gml-script-wizard.mp4',
      'description': 'A tool that will help you generate and modify GML script headers just be filling in a few fields.<br/><br/>Add, remove, and rearrange arguments and additional local variables with ease, then copy the script template with a simple click of a button. Conforms to both GM:S 1.4 and GMS 2 (JSDoc) documentation styles for documenting scripts.',
      'stack': [ 'React', 'Redux', 'Node.js', 'Material-UI', 'Babel', 'Webpack' ],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/gml-script-wizard', text: 'Source' }
      ],
      'demoUrls': [
        { url: 'https://mstop4.github.io/gml-script-wizard', text: 'Demo' }
      ]
    },

    {
      'id': 1,
      'title': 'GIFcentration',
      'previewStatic': 'img/gifcentration.jpg',
      'previewAnim': 'vid/preview/gifcentration.mp4',
      'fullAnim': 'vid/gifcentration.mp4',
      'description': 'Concentration (pairs-matching) game powered by Giphy.<br/><br/>The Client app allows users to search for GIFs that populate the cards in a game on Concentration. The Server app relays results and queries between the Client and the Giphy API and keeps track of the most popular searches.',
      'stack': [ 'MongoDB', 'Mongoose', 'Express', 'React', 'Node.js', 'Giphy JS SDK', 'Redis', 'Chance.js' ],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/gifcentration-client', text: 'Client' },
        { url: 'https://github.com/mstop4/gifcentration-server', text: 'Server' },
      ],
      'demoUrls': [
        { url: 'https://mstop4.github.io/gifcentration-client', text: 'Play' }
      ]
    },

    {
      'id': 2,
      'title': 'Fractured Flicks',
      'previewStatic': 'img/fractured-flicks.jpg',
      'previewAnim': 'vid/preview/fractured-flicks.mp4',
      'fullAnim': 'vid/fractured-flicks.mp4',
      'description': 'A jigsaw puzzle-like web game where you put pieces of a video back together. Contains multiple puzzles of vary difficulty levels and saves the best solve times locally.',
      'stack': ['Pixi.js', 'pixi-sound', 'Node.js', 'Babel', 'Webpack', 'Amazon S3'],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/fractured-flicks', text: 'Source' },
      ],
      'demoUrls': [
        { url: 'https://mstop4.github.io/fractured-flicks', text: 'Play' }
      ]
    },

    {
      'id': 0,
      'title': 'Sync Timer',
      'previewStatic': 'img/sync-timer.jpg',
      'previewAnim': 'vid/preview/sync-timer.mp4',
      'fullAnim': 'vid/sync-timer.mp4',
      'description': 'An online stopwatch service.<br/><br/>During my time as a teaching assistant at the University of Toronto, I had students needing to time their presentations. Since the presenters and I, as part of the audience, were facing in opposite directions, a timer on a single screen did not suffice. <em>Sync Timer</em> solves that problem by running timers on a central server, which is broadcasted to multiple devices for different viewers.',
      'stack': ['Node.js', 'Express', 'Socket.io', 'Pug', 'Sass', 'Mocha', 'Chai', 'Puppeteer', 'jsdom'],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/sync-timer', text: 'Source' },
      ],
      'demoUrls': [
        { url: 'https://sync-timer.herokuapp.com', text: 'Demo' }
      ]
    },

    {
      'id': 3,
      'title': 'FMODGMS',
      'previewStatic': 'img/fmodgms.jpg',
      'previewAnim': 'vid/preview/fmodgms.mp4',
      'fullAnim': 'vid/fmodgms.mp4',
      'description': 'A <em>GameMaker: Studio</em> and <em>GameMaker Studio 2</em> extension that provides GML bindings to the FMOD Studio low-level API. Can be used in Windows, macOS, and Linux games.<br/><br/>My longest running project, it was started about a decade ago as a means to extend the audio capabilities of <em>Game Maker 8.0</em> and has been maintained and updated as newer editions of <em>GameMaker</em> have been released.',
      'stack': ['FMOD Low Level API', 'GameMaker Studio 2', 'GameMaker: Studio 1.4'],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/fmodgms', text: 'Source' },
      ],
      'demoUrls': [
        { url: 'https://quadolorgames.itch.io/fmodgms', text: 'Download' }
      ]
    },

    {
      'id': 6,
      'title': 'Arborescence',
      'previewStatic': 'img/arborescence.png',
      'previewAnim': 'vid/preview/arborescence.mp4',
      'fullAnim': 'vid/arborescence.mp4',
      'description': 'A relaxing point-and-click puzzle game where the player must strategically use the keys at their disposal in order to undo all the locks and get all the trees ready for the season.<br/><br/>Every tree sprite and level is procedurally-generated, modelled after binary search trees. As such, every level has at least one solution.',
      'stack': ['GameMaker Studio 2'],
      'sourceUrls': [],
      'demoUrls': [
        { url: 'https://quadolorgames.itch.io/arborescence', text: 'Download' }
      ]
    },

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
      'id': 4,
      'title': 'Worker #11812',
      'previewStatic': 'img/worker-11812.jpg',
      'previewAnim': 'vid/preview/worker-11812.mp4',
      'fullAnim': 'vid/worker-11812.mp4',
      'description': 'A point-and-drag game inspired by the "paternoster machine" (better known as the "clock scene") from the 1927 film <em>Metropolis</em> by Fritz Lang.<br/><br/>As lights around a giant clock-like dial light up, players must move and point the hands towards them to turn them off, and prevent the pressure meter from topping out. The game was first created with Phaser 3 so it could be played in-browser, then it was ported to GameMaker Studio 2 for native builds (Windows, macOS, Linux) after deciding that packing the web app with Electron made it too large.',
      'stack': ['Phaser 3', 'Node.js', 'Babel', 'Webpack', 'GameMaker Studio 2'],
      'sourceUrls': [
        { url: 'https://github.com/mstop4/worker-11812-phaser', text: 'Web' },
        { url: 'https://github.com/mstop4/worker-11812-gms', text: 'Native' }
      ],
      'demoUrls': [
        { url: 'https://quadolorgames.itch.io/worker-11812', text: 'Play' }
      ]
    },

    {
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
    },
  ],

  'portfolios': [
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
  ],

  'contacts': [
    {
      'displayText': 'Email',
      'url': 'mailto:jonathan.hs.lam@gmail.com',
      'iconClass': ['icon-envelope-o']
    },

    {
      'displayText': 'LinkedIn',
      'url': 'https://www.linkedin.com/in/jonathanlam4/',
      'iconClass': ['icon-linkedin2']
    },

    {
      'displayText': 'Twitter',
      'url': 'https://twitter.com/QuadolorGames',
      'iconClass': ['icon-twitter']
    }
  ]
}