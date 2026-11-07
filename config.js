/* ==================================================================
   ✎  BIRTHDAY WEBSITE — EVERYTHING PERSONAL LIVES IN THIS FILE
   Edit, save, then refresh the page. Keep the quotes and commas.
   Use \n inside text for a line break.
   ================================================================== */
window.BIRTHDAY = {

  pageTitle: "Happy Birthday, Bebe 💙",

  // ---------------------------------------------------------------
  // PHOTOS — put files in the photos/ folder and write their names.
  // Leave src "" to keep the empty "your photo here" frame.
  // Any shape works; the photo is cropped to the square Polaroid
  // and shown whole when tapped.
  // ---------------------------------------------------------------
  photos: [
    { src: "", caption: "Where our little story began." },
    { src: "", caption: "One of my favorite days with you." },
    { src: "", caption: "The little moments mean everything." },
    { src: "", caption: "A memory I wish I could replay." },
    { src: "", caption: "My favorite place is beside you." },
    { src: "", caption: "Here’s to making more memories together." },
  ],

  // ---------------------------------------------------------------
  // MUSIC — never starts by itself; only when "Play music" is pressed.
  //   youtube: a YouTube link (works once the site is online)
  //   src:     or your own file, e.g. "music/our-song.mp3"
  //   Leave both "" for the built-in music-box "Happy Birthday".
  // ---------------------------------------------------------------
  music: { youtube: "", src: "", volume: 0.8 },

  // 1 — the envelope
  envelope: {
    line1: "For my favorite person.",
    line2: "A little something made with all my love.",
    button: "Open your birthday surprise 💙",
  },

  // 2 — the greeting
  greeting: {
    title: "Happy Birthday, Bebe!",
    text: "Let’s take a moment to go through our memories together earlier this year. From our little conversations to the moments that made us smile, every memory with you has become something I treasure. Today is all about celebrating you—and reminding you how much you mean to me.",
    button: "Let’s revisit our memories →",
  },

  // 3 — memory lane
  memories: {
    title: "Our little memory lane",
    hint: "Tap a photo to see it bigger",
    button: "There’s a letter for you →",
  },

  // 4 — the letter
  letter: {
    label: "A letter for you.",
    hint: "Tap the envelope to open it",
    paragraphs: [
      "Happy birthday, bebe!",
      "I’m so grateful that I get to know you, love you, and share little pieces of life with you. You make ordinary days feel special, and even the simplest moments become memories I want to keep.",
      "On your birthday, I wish you happiness that stays, peace on the difficult days, and the courage to keep chasing the things you love. I hope you always remember how loved and appreciated you are.",
      "There are still so many places to go, pictures to take, and memories waiting for us. For now, I just want you to enjoy your day and know that someone is very happy you were born.",
      "I love you, bebe. Always cheering for you, always grateful for you.",
    ],
    button: "Time to make a wish →",
  },

  // 5 — make a wish
  wish: {
    title: "Make a wish",
    button: "Make a wish & blow out the candle",
    after: "Whatever you wished for, I’m cheering for it too. 💙",
    next: "One last surprise →",
  },

  // 6 — the gift
  gift: {
    title: "One last surprise",
    hint: "Tap the gift 💙",
    message: "My favorite gift is getting to share life with you. Happy birthday, my love. Here’s to your new chapter—and more memories together.",
    footer: "Made with love, just for you.",
    // the little knight kitten that appears with the gift (set src "" to hide it)
    knight: { src: "media/knight-kitten.mp4", poster: "media/knight-kitten.jpg", caption: "Your little knight, always on your side ⚔️💙" },
    replay: "Start again ↺",
  },
};
