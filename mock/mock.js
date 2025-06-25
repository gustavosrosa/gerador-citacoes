const mock = [
  {
    "q": "Men do not attract which they want but that which they are.",
    "a": "James Allen",
    "c": "59",
    "h": "\u003Cblockquote\u003E&ldquo;Men do not attract which they want but that which they are.&rdquo; &mdash; \u003Cfooter\u003EJames Allen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Success is not to be pursued, it is to be attracted by the person you become.",
    "a": "Jim Rohn",
    "c": "77",
    "h": "\u003Cblockquote\u003E&ldquo;Success is not to be pursued, it is to be attracted by the person you become.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are what you believe in. You become that which you believe you can become.",
    "a": "Bhagavad Gita",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;You are what you believe in. You become that which you believe you can become.&rdquo; &mdash; \u003Cfooter\u003EBhagavad Gita\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every night before going to sleep, we must ask ourselves: what weakness did I overcome today? What virtue did I acquire?",
    "a": "Seneca",
    "c": "120",
    "h": "\u003Cblockquote\u003E&ldquo;Every night before going to sleep, we must ask ourselves: what weakness did I overcome today? What virtue did I acquire?&rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Make improvements, not excuses. Seek respect, not attention.",
    "a": "Roy T. Bennett",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;Make improvements, not excuses. Seek respect, not attention.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do good by stealth, and blush to find it fame.",
    "a": "Alexander Pope",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;Do good by stealth, and blush to find it fame.&rdquo; &mdash; \u003Cfooter\u003EAlexander Pope\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Stop wasting time defending your problems and work on addressing them instead.",
    "a": "Celestine Chua",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;Stop wasting time defending your problems and work on addressing them instead.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Create each day anew.",
    "a": "Morihei Ueshiba",
    "c": "21",
    "h": "\u003Cblockquote\u003E&ldquo;Create each day anew.&rdquo; &mdash; \u003Cfooter\u003EMorihei Ueshiba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The hardest arithmetic to master is that which enables us to count our blessings.",
    "a": "Eric Hoffer",
    "c": "81",
    "h": "\u003Cblockquote\u003E&ldquo;The hardest arithmetic to master is that which enables us to count our blessings.&rdquo; &mdash; \u003Cfooter\u003EEric Hoffer\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The most important single ingredient in the formula of success is knowing how to get along with people.",
    "a": "Theodore Roosevelt",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;The most important single ingredient in the formula of success is knowing how to get along with people.&rdquo; &mdash; \u003Cfooter\u003ETheodore Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To live outside the law, you must be honest. ",
    "a": "Bob Dylan",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;To live outside the law, you must be honest. &rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The measure of who we are is what we do with what we have.",
    "a": "Vince Lombardi",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;The measure of who we are is what we do with what we have.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be happy now, without reason - or you never will be at all.",
    "a": "Dan Millman",
    "c": "59",
    "h": "\u003Cblockquote\u003E&ldquo;Be happy now, without reason - or you never will be at all.&rdquo; &mdash; \u003Cfooter\u003EDan Millman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Each day your life grows a day shorter. Make every move count.",
    "a": "Ming-Dao Deng",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;Each day your life grows a day shorter. Make every move count.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you are going to achieve excellence in big things, you develop the habit in little matters.",
    "a": "Colin Powell",
    "c": "94",
    "h": "\u003Cblockquote\u003E&ldquo;If you are going to achieve excellence in big things, you develop the habit in little matters.&rdquo; &mdash; \u003Cfooter\u003EColin Powell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Whatever you believe with feeling becomes your reality. ",
    "a": "Brian Tracy",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Whatever you believe with feeling becomes your reality. &rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Your life does not get better by chance, it gets better by change.",
    "a": "Jim Rohn",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;Your life does not get better by chance, it gets better by change.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There is a wisdom of the head, and there is a wisdom of the heart.",
    "a": "Charles Dickens",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;There is a wisdom of the head, and there is a wisdom of the heart.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The dream is free, but the hustle is sold separately.",
    "a": "Steve Harvey",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;The dream is free, but the hustle is sold separately.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Let us always meet each other with smile, for the smile is the beginning of love.",
    "a": "Mother Teresa",
    "c": "81",
    "h": "\u003Cblockquote\u003E&ldquo;Let us always meet each other with smile, for the smile is the beginning of love.&rdquo; &mdash; \u003Cfooter\u003EMother Teresa\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only person you should try to be better than is the person you were yesterday.",
    "a": "Brian Tracy",
    "c": "82",
    "h": "\u003Cblockquote\u003E&ldquo;The only person you should try to be better than is the person you were yesterday.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A good system shortens the road to the goal. ",
    "a": "Orison Swett Marden",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;A good system shortens the road to the goal. &rdquo; &mdash; \u003Cfooter\u003EOrison Swett Marden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "While we may not be able to control all that happens to us, we can control what happens inside us.",
    "a": "Benjamin Franklin",
    "c": "98",
    "h": "\u003Cblockquote\u003E&ldquo;While we may not be able to control all that happens to us, we can control what happens inside us.&rdquo; &mdash; \u003Cfooter\u003EBenjamin Franklin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everything is possible. The impossible just takes longer.",
    "a": "Dan Brown",
    "c": "57",
    "h": "\u003Cblockquote\u003E&ldquo;Everything is possible. The impossible just takes longer.&rdquo; &mdash; \u003Cfooter\u003EDan Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you want more luck, take more chances.",
    "a": "Brian Tracy",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;If you want more luck, take more chances.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Success and failure come and go, but don't let them define you. It's who you are that matters.",
    "a": "Kamal Ravikant",
    "c": "94",
    "h": "\u003Cblockquote\u003E&ldquo;Success and failure come and go, but don't let them define you. It's who you are that matters.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more knowledge you have, the more you're free to rely on your instincts.",
    "a": "Arnold Schwarzenegger",
    "c": "76",
    "h": "\u003Cblockquote\u003E&ldquo;The more knowledge you have, the more you're free to rely on your instincts.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is impossible for a man to learn what he thinks he already knows.",
    "a": "Epictetus",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;It is impossible for a man to learn what he thinks he already knows.&rdquo; &mdash; \u003Cfooter\u003EEpictetus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The human mind defines things in relation to one another - without light the notion of darkness would be unintelligible.",
    "a": "Josh Waitzkin",
    "c": "120",
    "h": "\u003Cblockquote\u003E&ldquo;The human mind defines things in relation to one another - without light the notion of darkness would be unintelligible.&rdquo; &mdash; \u003Cfooter\u003EJosh Waitzkin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "I was wise enough to never grow up while fooling most people into believing I had. ",
    "a": "Margaret Mead",
    "c": "83",
    "h": "\u003Cblockquote\u003E&ldquo;I was wise enough to never grow up while fooling most people into believing I had. &rdquo; &mdash; \u003Cfooter\u003EMargaret Mead\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are today where your thoughts have brought you.",
    "a": "James Allen",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;You are today where your thoughts have brought you.&rdquo; &mdash; \u003Cfooter\u003EJames Allen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A hopeless man is a very desperate and dangerous man, almost a dead man.",
    "a": "Robert F. Kennedy",
    "c": "72",
    "h": "\u003Cblockquote\u003E&ldquo;A hopeless man is a very desperate and dangerous man, almost a dead man.&rdquo; &mdash; \u003Cfooter\u003ERobert F. Kennedy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is a traveling to the edge of knowledge, then a leap taken.",
    "a": "D. H. Lawrence",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;Life is a traveling to the edge of knowledge, then a leap taken.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never regret your past. Rather, embrace it as the teacher that it is.",
    "a": "Robin Sharma",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;Never regret your past. Rather, embrace it as the teacher that it is.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A rational person can find peace by cultivating indifference to things outside of their control.",
    "a": "Naval Ravikant",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;A rational person can find peace by cultivating indifference to things outside of their control.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The outer conditions of a person's life will always be found to reflect their inner beliefs.",
    "a": "James Allen",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;The outer conditions of a person's life will always be found to reflect their inner beliefs.&rdquo; &mdash; \u003Cfooter\u003EJames Allen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Your neighbor is the man who needs you.",
    "a": "Elbert Hubbard",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;Your neighbor is the man who needs you.&rdquo; &mdash; \u003Cfooter\u003EElbert Hubbard\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The difference between impossible and possible is a willing heart.",
    "a": "Lolly Daskal",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;The difference between impossible and possible is a willing heart.&rdquo; &mdash; \u003Cfooter\u003ELolly Daskal\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    "a": "Carl Jung",
    "c": "93",
    "h": "\u003Cblockquote\u003E&ldquo;Knowing your own darkness is the best method for dealing with the darknesses of other people.&rdquo; &mdash; \u003Cfooter\u003ECarl Jung\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Genius, in truth, means little more than the faculty of perceiving in an unhabitual way.",
    "a": "William James",
    "c": "88",
    "h": "\u003Cblockquote\u003E&ldquo;Genius, in truth, means little more than the faculty of perceiving in an unhabitual way.&rdquo; &mdash; \u003Cfooter\u003EWilliam James\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't seek, don't search, don't ask, don't knock, don't demand - relax.",
    "a": "Osho",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Don't seek, don't search, don't ask, don't knock, don't demand - relax.&rdquo; &mdash; \u003Cfooter\u003EOsho\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. ",
    "a": "Lao Tzu",
    "c": "97",
    "h": "\u003Cblockquote\u003E&ldquo;Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. &rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Because of your smile, you make life more beautiful.",
    "a": "Thich Nhat Hanh",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;Because of your smile, you make life more beautiful.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Argue for your limitations and sure enough, they're yours.",
    "a": "Richard Bach",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;Argue for your limitations and sure enough, they're yours.&rdquo; &mdash; \u003Cfooter\u003ERichard Bach\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
    "a": "Grace Coddington",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Always keep your eyes open. Keep watching. Because whatever you see can inspire you.&rdquo; &mdash; \u003Cfooter\u003EGrace Coddington\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
    "a": "Confucius",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.&rdquo; &mdash; \u003Cfooter\u003EConfucius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is like a wheel. Sooner or later, it always comes around to where you started again.",
    "a": "Stephen King",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;Life is like a wheel. Sooner or later, it always comes around to where you started again.&rdquo; &mdash; \u003Cfooter\u003EStephen King\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more people you help become successful the more successful you become.",
    "a": "Steve Harvey",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The more people you help become successful the more successful you become.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you do not conquer self, you will be conquered by self.",
    "a": "Napoleon Hill",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;If you do not conquer self, you will be conquered by self.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is useless to meet revenge with revenge; it will heal nothing.",
    "a": "J.R.R. Tolkien",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;It is useless to meet revenge with revenge; it will heal nothing.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "I am who I am today because of the choices I made yesterday.",
    "a": "Eleanor Roosevelt",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;I am who I am today because of the choices I made yesterday.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Turn the pain into power.",
    "a": "Unknown",
    "c": "25",
    "h": "\u003Cblockquote\u003E&ldquo;Turn the pain into power.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every time we liberate a woman, we liberate a man. ",
    "a": "Margaret Mead",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Every time we liberate a woman, we liberate a man. &rdquo; &mdash; \u003Cfooter\u003EMargaret Mead\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All human beings can alter their lives by altering their attitudes.",
    "a": "Andrew Carnegie",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;All human beings can alter their lives by altering their attitudes.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The quieter you become, the more you are able to hear.",
    "a": "Rumi",
    "c": "54",
    "h": "\u003Cblockquote\u003E&ldquo;The quieter you become, the more you are able to hear.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Wisdom is doing now what you are going to be happy with later on.",
    "a": "Joyce Meyer",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;Wisdom is doing now what you are going to be happy with later on.&rdquo; &mdash; \u003Cfooter\u003EJoyce Meyer\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
    "a": "Steve Maraboli",
    "c": "149",
    "h": "\u003Cblockquote\u003E&ldquo;Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "People do not decide their futures, they decide their habits and their habits decide their futures.",
    "a": "Gary Keller",
    "c": "99",
    "h": "\u003Cblockquote\u003E&ldquo;People do not decide their futures, they decide their habits and their habits decide their futures.&rdquo; &mdash; \u003Cfooter\u003EGary Keller\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nothing has any power over me other than that which I give it through my conscious thoughts.",
    "a": "Tony Robbins",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Nothing has any power over me other than that which I give it through my conscious thoughts.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only way round is through.",
    "a": "Robert Frost",
    "c": "30",
    "h": "\u003Cblockquote\u003E&ldquo;The only way round is through.&rdquo; &mdash; \u003Cfooter\u003ERobert Frost\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "In the midst of chaos, there is also opportunity.",
    "a": "Sun Tzu",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;In the midst of chaos, there is also opportunity.&rdquo; &mdash; \u003Cfooter\u003ESun Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Remain calm. Be kind.",
    "a": "Colin Powell",
    "c": "21",
    "h": "\u003Cblockquote\u003E&ldquo;Remain calm. Be kind.&rdquo; &mdash; \u003Cfooter\u003EColin Powell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You have to keep breaking your heart until it opens.",
    "a": "Rumi",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;You have to keep breaking your heart until it opens.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Before anything else, preparation is the key to success.",
    "a": "Alexander Graham Bell",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Before anything else, preparation is the key to success.&rdquo; &mdash; \u003Cfooter\u003EAlexander Graham Bell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The journey, not the destination matters.",
    "a": "T.S. Eliot",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The journey, not the destination matters.&rdquo; &mdash; \u003Cfooter\u003ET.S. Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Either you run the day or the day runs you.",
    "a": "Jim Rohn",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Either you run the day or the day runs you.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Once you learn to quit, it becomes a habit.",
    "a": "Vince Lombardi",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Once you learn to quit, it becomes a habit.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Actions are the seeds of fate. Deeds grow into destiny.",
    "a": "Harry S. Truman",
    "c": "55",
    "h": "\u003Cblockquote\u003E&ldquo;Actions are the seeds of fate. Deeds grow into destiny.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Hope and fear come from feeling that we lack something; they come from a sense of poverty.",
    "a": "Pema Chodron",
    "c": "90",
    "h": "\u003Cblockquote\u003E&ldquo;Hope and fear come from feeling that we lack something; they come from a sense of poverty.&rdquo; &mdash; \u003Cfooter\u003EPema Chodron\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is well known that those who do not trust themselves never trust others.",
    "a": "Alfred Adler",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;It is well known that those who do not trust themselves never trust others.&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
    "a": "Grace Coddington",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Always keep your eyes open. Keep watching. Because whatever you see can inspire you.&rdquo; &mdash; \u003Cfooter\u003EGrace Coddington\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you always do what you've always done, you'll always get what you've always got. ",
    "a": "Henry Ford",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;If you always do what you've always done, you'll always get what you've always got. &rdquo; &mdash; \u003Cfooter\u003EHenry Ford\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you've got nothing, you've got nothing to lose.",
    "a": "Bob Dylan",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;When you've got nothing, you've got nothing to lose.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You will not do incredible things without an incredible dream.",
    "a": "John Eliot",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;You will not do incredible things without an incredible dream.&rdquo; &mdash; \u003Cfooter\u003EJohn Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Paths are made by walking.",
    "a": "Franz Kafka",
    "c": "26",
    "h": "\u003Cblockquote\u003E&ldquo;Paths are made by walking.&rdquo; &mdash; \u003Cfooter\u003EFranz Kafka\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "This is the most simple and basic component of life: our struggles determine our successes.",
    "a": "Mark Manson",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;This is the most simple and basic component of life: our struggles determine our successes.&rdquo; &mdash; \u003Cfooter\u003EMark Manson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Change is hardest at the beginning, messiest in the middle and best at the end.",
    "a": "Robin Sharma",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;Change is hardest at the beginning, messiest in the middle and best at the end.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Who you are is always right.",
    "a": "Ming-Dao Deng",
    "c": "28",
    "h": "\u003Cblockquote\u003E&ldquo;Who you are is always right.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.",
    "a": "Robert Greene",
    "c": "133",
    "h": "\u003Cblockquote\u003E&ldquo;Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be not glad at the misfortune of another, though he may be your enemy. ",
    "a": "George Washington",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Be not glad at the misfortune of another, though he may be your enemy. &rdquo; &mdash; \u003Cfooter\u003EGeorge Washington\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "But better die than live mechanically a life that is a repetition of repetitions.",
    "a": "D. H. Lawrence",
    "c": "81",
    "h": "\u003Cblockquote\u003E&ldquo;But better die than live mechanically a life that is a repetition of repetitions.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If the only prayer you ever say in your entire life is thank you, it will be enough.",
    "a": "Meister Eckhart",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;If the only prayer you ever say in your entire life is thank you, it will be enough.&rdquo; &mdash; \u003Cfooter\u003EMeister Eckhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A vital part of the happiness formula is self-discipline. Whoever conquers himself knows deep happiness that fills the heart with joy.",
    "a": "Norman Vincent Peale",
    "c": "134",
    "h": "\u003Cblockquote\u003E&ldquo;A vital part of the happiness formula is self-discipline. Whoever conquers himself knows deep happiness that fills the heart with joy.&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Take the attitude of a student. Never be too big to ask questions. Never know too much to learn something new.",
    "a": "Og Mandino",
    "c": "110",
    "h": "\u003Cblockquote\u003E&ldquo;Take the attitude of a student. Never be too big to ask questions. Never know too much to learn something new.&rdquo; &mdash; \u003Cfooter\u003EOg Mandino\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do your duty and a little more and the future will take care of itself.",
    "a": "Andrew Carnegie",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Do your duty and a little more and the future will take care of itself.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind.",
    "a": "Ayn Rand",
    "c": "106",
    "h": "\u003Cblockquote\u003E&ldquo;An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The trouble with the rat race is that even if you win, you're still a rat.",
    "a": "Lily Tomlin",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The trouble with the rat race is that even if you win, you're still a rat.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You live by what you thrill to, and there's the end of it.",
    "a": "D. H. Lawrence",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;You live by what you thrill to, and there's the end of it.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "No man becomes rich unless he enriches others.",
    "a": "Andrew Carnegie",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;No man becomes rich unless he enriches others.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If I can pay the bills, I'm happy.",
    "a": "Morgan Wootten",
    "c": "34",
    "h": "\u003Cblockquote\u003E&ldquo;If I can pay the bills, I'm happy.&rdquo; &mdash; \u003Cfooter\u003EMorgan Wootten\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Anger begins with folly, and ends with repentance. ",
    "a": "Beverly Sills",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Anger begins with folly, and ends with repentance. &rdquo; &mdash; \u003Cfooter\u003EBeverly Sills\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.",
    "a": "Vaclav Havel",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.&rdquo; &mdash; \u003Cfooter\u003EVaclav Havel\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Cherish forever what makes you unique, cuz you're really a yawn if it goes.",
    "a": "Bette Midler",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Cherish forever what makes you unique, cuz you're really a yawn if it goes.&rdquo; &mdash; \u003Cfooter\u003EBette Midler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You must learn to let go. Release the stress. You were never in control anyway.",
    "a": "Steve Maraboli",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;You must learn to let go. Release the stress. You were never in control anyway.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The ego wants comfort and certainty. The soul wants to live fully.",
    "a": "Maxime Lagace",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;The ego wants comfort and certainty. The soul wants to live fully.&rdquo; &mdash; \u003Cfooter\u003EMaxime Lagace\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every failure brings with it the seed of an equivalent success.",
    "a": "Napoleon Hill",
    "c": "63",
    "h": "\u003Cblockquote\u003E&ldquo;Every failure brings with it the seed of an equivalent success.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We ordinary people must forge our own beauty.",
    "a": "Kenji Miyazawa",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;We ordinary people must forge our own beauty.&rdquo; &mdash; \u003Cfooter\u003EKenji Miyazawa\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is better to light a single candle than to curse the darkness.",
    "a": "Eleanor Roosevelt",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It's easy to wish for health when you're sick.  When you're doing well, you need just as much vigilance.",
    "a": "Kamal Ravikant",
    "c": "104",
    "h": "\u003Cblockquote\u003E&ldquo;It's easy to wish for health when you're sick.  When you're doing well, you need just as much vigilance.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You give but little when you give of your possessions. It is when you give of yourself that you truly give.",
    "a": "Kahlil Gibran",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;You give but little when you give of your possessions. It is when you give of yourself that you truly give.&rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },{
    "q": "I am who I am today because of the choices I made yesterday.",
    "a": "Eleanor Roosevelt",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;I am who I am today because of the choices I made yesterday.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Turn the pain into power.",
    "a": "Unknown",
    "c": "25",
    "h": "\u003Cblockquote\u003E&ldquo;Turn the pain into power.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every time we liberate a woman, we liberate a man. ",
    "a": "Margaret Mead",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Every time we liberate a woman, we liberate a man. &rdquo; &mdash; \u003Cfooter\u003EMargaret Mead\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All human beings can alter their lives by altering their attitudes.",
    "a": "Andrew Carnegie",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;All human beings can alter their lives by altering their attitudes.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The quieter you become, the more you are able to hear.",
    "a": "Rumi",
    "c": "54",
    "h": "\u003Cblockquote\u003E&ldquo;The quieter you become, the more you are able to hear.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Wisdom is doing now what you are going to be happy with later on.",
    "a": "Joyce Meyer",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;Wisdom is doing now what you are going to be happy with later on.&rdquo; &mdash; \u003Cfooter\u003EJoyce Meyer\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
    "a": "Steve Maraboli",
    "c": "149",
    "h": "\u003Cblockquote\u003E&ldquo;Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "People do not decide their futures, they decide their habits and their habits decide their futures.",
    "a": "Gary Keller",
    "c": "99",
    "h": "\u003Cblockquote\u003E&ldquo;People do not decide their futures, they decide their habits and their habits decide their futures.&rdquo; &mdash; \u003Cfooter\u003EGary Keller\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nothing has any power over me other than that which I give it through my conscious thoughts.",
    "a": "Tony Robbins",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Nothing has any power over me other than that which I give it through my conscious thoughts.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only way round is through.",
    "a": "Robert Frost",
    "c": "30",
    "h": "\u003Cblockquote\u003E&ldquo;The only way round is through.&rdquo; &mdash; \u003Cfooter\u003ERobert Frost\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "In the midst of chaos, there is also opportunity.",
    "a": "Sun Tzu",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;In the midst of chaos, there is also opportunity.&rdquo; &mdash; \u003Cfooter\u003ESun Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Remain calm. Be kind.",
    "a": "Colin Powell",
    "c": "21",
    "h": "\u003Cblockquote\u003E&ldquo;Remain calm. Be kind.&rdquo; &mdash; \u003Cfooter\u003EColin Powell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You have to keep breaking your heart until it opens.",
    "a": "Rumi",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;You have to keep breaking your heart until it opens.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Before anything else, preparation is the key to success.",
    "a": "Alexander Graham Bell",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Before anything else, preparation is the key to success.&rdquo; &mdash; \u003Cfooter\u003EAlexander Graham Bell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The journey, not the destination matters.",
    "a": "T.S. Eliot",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The journey, not the destination matters.&rdquo; &mdash; \u003Cfooter\u003ET.S. Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Either you run the day or the day runs you.",
    "a": "Jim Rohn",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Either you run the day or the day runs you.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Once you learn to quit, it becomes a habit.",
    "a": "Vince Lombardi",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Once you learn to quit, it becomes a habit.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Actions are the seeds of fate. Deeds grow into destiny.",
    "a": "Harry S. Truman",
    "c": "55",
    "h": "\u003Cblockquote\u003E&ldquo;Actions are the seeds of fate. Deeds grow into destiny.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Hope and fear come from feeling that we lack something; they come from a sense of poverty.",
    "a": "Pema Chodron",
    "c": "90",
    "h": "\u003Cblockquote\u003E&ldquo;Hope and fear come from feeling that we lack something; they come from a sense of poverty.&rdquo; &mdash; \u003Cfooter\u003EPema Chodron\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is well known that those who do not trust themselves never trust others.",
    "a": "Alfred Adler",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;It is well known that those who do not trust themselves never trust others.&rdquo; &mdash; \u003Cfooter\u003EAlfred Adler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Always keep your eyes open. Keep watching. Because whatever you see can inspire you.",
    "a": "Grace Coddington",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Always keep your eyes open. Keep watching. Because whatever you see can inspire you.&rdquo; &mdash; \u003Cfooter\u003EGrace Coddington\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you always do what you've always done, you'll always get what you've always got. ",
    "a": "Henry Ford",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;If you always do what you've always done, you'll always get what you've always got. &rdquo; &mdash; \u003Cfooter\u003EHenry Ford\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you've got nothing, you've got nothing to lose.",
    "a": "Bob Dylan",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;When you've got nothing, you've got nothing to lose.&rdquo; &mdash; \u003Cfooter\u003EBob Dylan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You will not do incredible things without an incredible dream.",
    "a": "John Eliot",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;You will not do incredible things without an incredible dream.&rdquo; &mdash; \u003Cfooter\u003EJohn Eliot\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Paths are made by walking.",
    "a": "Franz Kafka",
    "c": "26",
    "h": "\u003Cblockquote\u003E&ldquo;Paths are made by walking.&rdquo; &mdash; \u003Cfooter\u003EFranz Kafka\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "This is the most simple and basic component of life: our struggles determine our successes.",
    "a": "Mark Manson",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;This is the most simple and basic component of life: our struggles determine our successes.&rdquo; &mdash; \u003Cfooter\u003EMark Manson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Change is hardest at the beginning, messiest in the middle and best at the end.",
    "a": "Robin Sharma",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;Change is hardest at the beginning, messiest in the middle and best at the end.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Who you are is always right.",
    "a": "Ming-Dao Deng",
    "c": "28",
    "h": "\u003Cblockquote\u003E&ldquo;Who you are is always right.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.",
    "a": "Robert Greene",
    "c": "133",
    "h": "\u003Cblockquote\u003E&ldquo;Mastery is not a function of genius or talent, it is a function of time and intense focus applied to a particular field of knowledge.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be not glad at the misfortune of another, though he may be your enemy. ",
    "a": "George Washington",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Be not glad at the misfortune of another, though he may be your enemy. &rdquo; &mdash; \u003Cfooter\u003EGeorge Washington\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "But better die than live mechanically a life that is a repetition of repetitions.",
    "a": "D. H. Lawrence",
    "c": "81",
    "h": "\u003Cblockquote\u003E&ldquo;But better die than live mechanically a life that is a repetition of repetitions.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If the only prayer you ever say in your entire life is thank you, it will be enough.",
    "a": "Meister Eckhart",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;If the only prayer you ever say in your entire life is thank you, it will be enough.&rdquo; &mdash; \u003Cfooter\u003EMeister Eckhart\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A vital part of the happiness formula is self-discipline. Whoever conquers himself knows deep happiness that fills the heart with joy.",
    "a": "Norman Vincent Peale",
    "c": "134",
    "h": "\u003Cblockquote\u003E&ldquo;A vital part of the happiness formula is self-discipline. Whoever conquers himself knows deep happiness that fills the heart with joy.&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Take the attitude of a student. Never be too big to ask questions. Never know too much to learn something new.",
    "a": "Og Mandino",
    "c": "110",
    "h": "\u003Cblockquote\u003E&ldquo;Take the attitude of a student. Never be too big to ask questions. Never know too much to learn something new.&rdquo; &mdash; \u003Cfooter\u003EOg Mandino\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do your duty and a little more and the future will take care of itself.",
    "a": "Andrew Carnegie",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Do your duty and a little more and the future will take care of itself.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind.",
    "a": "Ayn Rand",
    "c": "106",
    "h": "\u003Cblockquote\u003E&ldquo;An inventor is a man who asks Why? of the universe and lets nothing stand between the answer and his mind.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The trouble with the rat race is that even if you win, you're still a rat.",
    "a": "Lily Tomlin",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;The trouble with the rat race is that even if you win, you're still a rat.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You live by what you thrill to, and there's the end of it.",
    "a": "D. H. Lawrence",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;You live by what you thrill to, and there's the end of it.&rdquo; &mdash; \u003Cfooter\u003ED. H. Lawrence\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "No man becomes rich unless he enriches others.",
    "a": "Andrew Carnegie",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;No man becomes rich unless he enriches others.&rdquo; &mdash; \u003Cfooter\u003EAndrew Carnegie\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If I can pay the bills, I'm happy.",
    "a": "Morgan Wootten",
    "c": "34",
    "h": "\u003Cblockquote\u003E&ldquo;If I can pay the bills, I'm happy.&rdquo; &mdash; \u003Cfooter\u003EMorgan Wootten\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Anger begins with folly, and ends with repentance. ",
    "a": "Beverly Sills",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Anger begins with folly, and ends with repentance. &rdquo; &mdash; \u003Cfooter\u003EBeverly Sills\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.",
    "a": "Vaclav Havel",
    "c": "115",
    "h": "\u003Cblockquote\u003E&ldquo;We must not be afraid of dreaming the seemingly impossible if we want the seemingly impossible to become a reality.&rdquo; &mdash; \u003Cfooter\u003EVaclav Havel\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Cherish forever what makes you unique, cuz you're really a yawn if it goes.",
    "a": "Bette Midler",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Cherish forever what makes you unique, cuz you're really a yawn if it goes.&rdquo; &mdash; \u003Cfooter\u003EBette Midler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You must learn to let go. Release the stress. You were never in control anyway.",
    "a": "Steve Maraboli",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;You must learn to let go. Release the stress. You were never in control anyway.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The ego wants comfort and certainty. The soul wants to live fully.",
    "a": "Maxime Lagace",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;The ego wants comfort and certainty. The soul wants to live fully.&rdquo; &mdash; \u003Cfooter\u003EMaxime Lagace\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every failure brings with it the seed of an equivalent success.",
    "a": "Napoleon Hill",
    "c": "63",
    "h": "\u003Cblockquote\u003E&ldquo;Every failure brings with it the seed of an equivalent success.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We ordinary people must forge our own beauty.",
    "a": "Kenji Miyazawa",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;We ordinary people must forge our own beauty.&rdquo; &mdash; \u003Cfooter\u003EKenji Miyazawa\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is better to light a single candle than to curse the darkness.",
    "a": "Eleanor Roosevelt",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It's easy to wish for health when you're sick.  When you're doing well, you need just as much vigilance.",
    "a": "Kamal Ravikant",
    "c": "104",
    "h": "\u003Cblockquote\u003E&ldquo;It's easy to wish for health when you're sick.  When you're doing well, you need just as much vigilance.&rdquo; &mdash; \u003Cfooter\u003EKamal Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You give but little when you give of your possessions. It is when you give of yourself that you truly give.",
    "a": "Kahlil Gibran",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;You give but little when you give of your possessions. It is when you give of yourself that you truly give.&rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never regret your past. Rather, embrace it as the teacher that it is.",
    "a": "Robin Sharma",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;Never regret your past. Rather, embrace it as the teacher that it is.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The busy man is never wise and the wise man is never busy.",
    "a": "Lin Yutang",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;The busy man is never wise and the wise man is never busy.&rdquo; &mdash; \u003Cfooter\u003ELin Yutang\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "He who possesses most must be most afraid of loss.",
    "a": "Leonardo da Vinci",
    "c": "50",
    "h": "\u003Cblockquote\u003E&ldquo;He who possesses most must be most afraid of loss.&rdquo; &mdash; \u003Cfooter\u003ELeonardo da Vinci\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Just try to be the best you can be; never cease trying to be the best you can be. That's in your power.",
    "a": "John Wooden",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;Just try to be the best you can be; never cease trying to be the best you can be. That's in your power.&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You cannot find peace by avoiding life.",
    "a": "Virginia Woolf",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;You cannot find peace by avoiding life.&rdquo; &mdash; \u003Cfooter\u003EVirginia Woolf\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Tradition is the illusion of permanence. ",
    "a": "Woody Allen",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;Tradition is the illusion of permanence. &rdquo; &mdash; \u003Cfooter\u003EWoody Allen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Genius is patience.",
    "a": "Isaac Newton",
    "c": "19",
    "h": "\u003Cblockquote\u003E&ldquo;Genius is patience.&rdquo; &mdash; \u003Cfooter\u003EIsaac Newton\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be Brave and Take Risks: You need to have faith in yourself. Be brave and take risks. You don't have to have it all figured out to move forward.",
    "a": "Roy T. Bennett",
    "c": "144",
    "h": "\u003Cblockquote\u003E&ldquo;Be Brave and Take Risks: You need to have faith in yourself. Be brave and take risks. You don't have to have it all figured out to move forward.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are the average of the five people you spend most time with.",
    "a": "Jim Rohn",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;You are the average of the five people you spend most time with.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Determine never to be idle. No person will have occasion to complain of the want of time who never loses any.",
    "a": "Thomas Jefferson",
    "c": "109",
    "h": "\u003Cblockquote\u003E&ldquo;Determine never to be idle. No person will have occasion to complain of the want of time who never loses any.&rdquo; &mdash; \u003Cfooter\u003EThomas Jefferson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Imagination is more important than knowledge.",
    "a": "Albert Einstein",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Imagination is more important than knowledge.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Human beings can alter their lives by altering their attitudes of mind.",
    "a": "William James",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;Human beings can alter their lives by altering their attitudes of mind.&rdquo; &mdash; \u003Cfooter\u003EWilliam James\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only place where success comes before work is in the dictionary.",
    "a": "Vidal Sassoon",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;The only place where success comes before work is in the dictionary.&rdquo; &mdash; \u003Cfooter\u003EVidal Sassoon\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    "a": "Rumi",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;Your heart is the size of an ocean. Go find yourself in its hidden depths.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The four P's to success are pressure, persistence, perseverance, and prayer.",
    "a": "Steve Harvey",
    "c": "76",
    "h": "\u003Cblockquote\u003E&ldquo;The four P's to success are pressure, persistence, perseverance, and prayer.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "By words the mind is winged.",
    "a": "Aristophanes",
    "c": "28",
    "h": "\u003Cblockquote\u003E&ldquo;By words the mind is winged.&rdquo; &mdash; \u003Cfooter\u003EAristophanes\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Muddy water is best cleared by leaving it alone.",
    "a": "Alan Watts",
    "c": "48",
    "h": "\u003Cblockquote\u003E&ldquo;Muddy water is best cleared by leaving it alone.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life's too mysterious to take too serious.",
    "a": "Mary Engelbreit",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Life's too mysterious to take too serious.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more you give, the more comes back to you.",
    "a": "Napoleon Hill",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;The more you give, the more comes back to you.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The number one cause of failure is the fear of failure.",
    "a": "Steve Harvey",
    "c": "55",
    "h": "\u003Cblockquote\u003E&ldquo;The number one cause of failure is the fear of failure.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Goals are the fuel in the furnace of achievement.",
    "a": "Brian Tracy",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;Goals are the fuel in the furnace of achievement.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Ideas do not reach perfection in a day, no matter how much study is put upon them.",
    "a": "Alexander Graham Bell",
    "c": "82",
    "h": "\u003Cblockquote\u003E&ldquo;Ideas do not reach perfection in a day, no matter how much study is put upon them.&rdquo; &mdash; \u003Cfooter\u003EAlexander Graham Bell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Faith is taking the first step even when you don't see the whole staircase.",
    "a": "Martin Luther King, Jr.",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Faith is taking the first step even when you don't see the whole staircase.&rdquo; &mdash; \u003Cfooter\u003EMartin Luther King, Jr.\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Power is not what we do but what we do not - hasty and unwise actions that we repeat every day and which ultimately bring us into trouble.",
    "a": "Robert Greene",
    "c": "138",
    "h": "\u003Cblockquote\u003E&ldquo;Power is not what we do but what we do not - hasty and unwise actions that we repeat every day and which ultimately bring us into trouble.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Choose a job you love, and you will never have to work a day in your life. ",
    "a": "Confucius",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Choose a job you love, and you will never have to work a day in your life. &rdquo; &mdash; \u003Cfooter\u003EConfucius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Perplexity is the beginning of knowledge.",
    "a": "Kahlil Gibran",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;Perplexity is the beginning of knowledge.&rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "a": "Aristotle",
    "c": "90",
    "h": "\u003Cblockquote\u003E&ldquo;It is the mark of an educated mind to be able to entertain a thought without accepting it.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What's the point in being smart enough to read, if everything you read makes you dumb?",
    "a": "C. Sean McGee",
    "c": "86",
    "h": "\u003Cblockquote\u003E&ldquo;What's the point in being smart enough to read, if everything you read makes you dumb?&rdquo; &mdash; \u003Cfooter\u003EC. Sean McGee\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.",
    "a": "Ronald Reagan",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.&rdquo; &mdash; \u003Cfooter\u003ERonald Reagan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.",
    "a": "Ming-Dao Deng",
    "c": "111",
    "h": "\u003Cblockquote\u003E&ldquo;Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
    "a": "Sun Tzu",
    "c": "111",
    "h": "\u003Cblockquote\u003E&ldquo;Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.&rdquo; &mdash; \u003Cfooter\u003ESun Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When your intuition is strong, follow it.",
    "a": "Lolly Daskal",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;When your intuition is strong, follow it.&rdquo; &mdash; \u003Cfooter\u003ELolly Daskal\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do not use life to give life to death. Do not use death to bring death to life.",
    "a": "Zhuangzi",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;Do not use life to give life to death. Do not use death to bring death to life.&rdquo; &mdash; \u003Cfooter\u003EZhuangzi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is not fair to ask of others what you are not willing to do yourself.",
    "a": "Eleanor Roosevelt",
    "c": "72",
    "h": "\u003Cblockquote\u003E&ldquo;It is not fair to ask of others what you are not willing to do yourself.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you don't like something change it. If you can't change it, change your attitude about it. Don't complain.",
    "a": "Maya Angelou",
    "c": "109",
    "h": "\u003Cblockquote\u003E&ldquo;If you don't like something change it. If you can't change it, change your attitude about it. Don't complain.&rdquo; &mdash; \u003Cfooter\u003EMaya Angelou\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "People do not decide their futures, they decide their habits and their habits decide their futures.",
    "a": "Gary Keller",
    "c": "99",
    "h": "\u003Cblockquote\u003E&ldquo;People do not decide their futures, they decide their habits and their habits decide their futures.&rdquo; &mdash; \u003Cfooter\u003EGary Keller\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The fear of death is more to be feared, than death itself.",
    "a": "Publilius Syrus",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;The fear of death is more to be feared, than death itself.&rdquo; &mdash; \u003Cfooter\u003EPublilius Syrus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Concentrated power has always been the enemy of liberty.",
    "a": "Ronald Reagan",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Concentrated power has always been the enemy of liberty.&rdquo; &mdash; \u003Cfooter\u003ERonald Reagan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Poverty and hardship are created by false thinking.",
    "a": "Bodhidharma",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Poverty and hardship are created by false thinking.&rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never fear quarrels, but seek hazardous adventures.",
    "a": "Alexandre Dumas",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Never fear quarrels, but seek hazardous adventures.&rdquo; &mdash; \u003Cfooter\u003EAlexandre Dumas\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.",
    "a": "Roy T. Bennett",
    "c": "100",
    "h": "\u003Cblockquote\u003E&ldquo;Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Tragedy is a tool for the living to gain wisdom, not a guide by which to live.",
    "a": "Robert F. Kennedy",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;Tragedy is a tool for the living to gain wisdom, not a guide by which to live.&rdquo; &mdash; \u003Cfooter\u003ERobert F. Kennedy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life comes at us in waves. We can't predict or control those waves, but we can learn to surf.",
    "a": "Dan Millman",
    "c": "93",
    "h": "\u003Cblockquote\u003E&ldquo;Life comes at us in waves. We can't predict or control those waves, but we can learn to surf.&rdquo; &mdash; \u003Cfooter\u003EDan Millman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Numbing the pain for a while will only make it worse when you finally feel it.",
    "a": "Albus Dumbledore",
    "c": "78",
    "h": "\u003Cblockquote\u003E&ldquo;Numbing the pain for a while will only make it worse when you finally feel it.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Give credit where credit is due: simply said, if you want loyalty and best effort, you must be thoughtful.  ",
    "a": "Estee Lauder",
    "c": "108",
    "h": "\u003Cblockquote\u003E&ldquo;Give credit where credit is due: simply said, if you want loyalty and best effort, you must be thoughtful.  &rdquo; &mdash; \u003Cfooter\u003EEstee Lauder\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Difficulties strengthen the mind, as labor does the body.  ",
    "a": "Seneca",
    "c": "59",
    "h": "\u003Cblockquote\u003E&ldquo;Difficulties strengthen the mind, as labor does the body.  &rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The guest will judge better of a feast than the cook.",
    "a": "Aristotle",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;The guest will judge better of a feast than the cook.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The first rule of handling conflict is don't hang around people who are constantly engaging in conflict.",
    "a": "Naval Ravikant",
    "c": "104",
    "h": "\u003Cblockquote\u003E&ldquo;The first rule of handling conflict is don't hang around people who are constantly engaging in conflict.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A change is brought about because ordinary people do extraordinary things.",
    "a": "Barack Obama",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;A change is brought about because ordinary people do extraordinary things.&rdquo; &mdash; \u003Cfooter\u003EBarack Obama\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Happiness must be grown in one's own garden.",
    "a": "Mary Engelbreit",
    "c": "44",
    "h": "\u003Cblockquote\u003E&ldquo;Happiness must be grown in one's own garden.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It's better to stand by someone's side than by yourself.",
    "a": "Jack London",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;It's better to stand by someone's side than by yourself.&rdquo; &mdash; \u003Cfooter\u003EJack London\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "May you live all the days of your life.",
    "a": "Jonathan Swift",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;May you live all the days of your life.&rdquo; &mdash; \u003Cfooter\u003EJonathan Swift\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you don't program yourself, life will program you.",
    "a": "Les Brown",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;If you don't program yourself, life will program you.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never stand begging for that which you have the power to earn.",
    "a": "Miguel de Cervantes",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;Never stand begging for that which you have the power to earn.&rdquo; &mdash; \u003Cfooter\u003EMiguel de Cervantes\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Success is good at any age, but the sooner you find it, the longer you will enjoy it.",
    "a": "Napoleon Hill",
    "c": "85",
    "h": "\u003Cblockquote\u003E&ldquo;Success is good at any age, but the sooner you find it, the longer you will enjoy it.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Freeing oneself from words is liberation. ",
    "a": "Bodhidharma",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Freeing oneself from words is liberation. &rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Fear, uncertainty, and discomfort are your compasses toward growth.",
    "a": "Celestine Chua",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;Fear, uncertainty, and discomfort are your compasses toward growth.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Live your life as an exclamation rather than an explanation.",
    "a": "Isaac Newton",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;Live your life as an exclamation rather than an explanation.&rdquo; &mdash; \u003Cfooter\u003EIsaac Newton\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Belief creates the actual fact.",
    "a": "William James",
    "c": "31",
    "h": "\u003Cblockquote\u003E&ldquo;Belief creates the actual fact.&rdquo; &mdash; \u003Cfooter\u003EWilliam James\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nothing is too high for a man to reach, but he must climb with care and confidence",
    "a": "Hans Christian Andersen",
    "c": "82",
    "h": "\u003Cblockquote\u003E&ldquo;Nothing is too high for a man to reach, but he must climb with care and confidence&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It matters not what someone is born, but what they grow to be.",
    "a": "Albus Dumbledore",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;It matters not what someone is born, but what they grow to be.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Those who are easily shocked should be shocked more often.",
    "a": "Mae West",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;Those who are easily shocked should be shocked more often.&rdquo; &mdash; \u003Cfooter\u003EMae West\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A good stance and posture reflect a proper state of mind.",
    "a": "Morihei Ueshiba",
    "c": "57",
    "h": "\u003Cblockquote\u003E&ldquo;A good stance and posture reflect a proper state of mind.&rdquo; &mdash; \u003Cfooter\u003EMorihei Ueshiba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The most important battle is one to conquer yourself.",
    "a": "Yanni",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;The most important battle is one to conquer yourself.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is useless to attempt to reason a man out of a thing he was never reasoned into.",
    "a": "Jonathan Swift",
    "c": "83",
    "h": "\u003Cblockquote\u003E&ldquo;It is useless to attempt to reason a man out of a thing he was never reasoned into.&rdquo; &mdash; \u003Cfooter\u003EJonathan Swift\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Most people fail in life not because they aim too high and miss, but because they aim too low and hit.",
    "a": "Les Brown",
    "c": "102",
    "h": "\u003Cblockquote\u003E&ldquo;Most people fail in life not because they aim too high and miss, but because they aim too low and hit.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.",
    "a": "Harry S. Truman",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "One is never afraid of the unknown; one is afraid of the known coming to an end.",
    "a": "Jiddu Krishnamurti",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;One is never afraid of the unknown; one is afraid of the known coming to an end.&rdquo; &mdash; \u003Cfooter\u003EJiddu Krishnamurti\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you believe you can, you can. If you believe you can't, then, well you can't.",
    "a": "Celestine Chua",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;If you believe you can, you can. If you believe you can't, then, well you can't.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A man who dares to waste one hour of time has not discovered the value of life.",
    "a": "Charles Darwin",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;A man who dares to waste one hour of time has not discovered the value of life.&rdquo; &mdash; \u003Cfooter\u003ECharles Darwin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Live in the sunshine, swim the sea, drink the wild air.",
    "a": "Ralph Waldo Emerson",
    "c": "55",
    "h": "\u003Cblockquote\u003E&ldquo;Live in the sunshine, swim the sea, drink the wild air.&rdquo; &mdash; \u003Cfooter\u003ERalph Waldo Emerson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Do not follow the ideas of others, but learn to listen to the voice within yourself.",
    "a": "Dogen",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Do not follow the ideas of others, but learn to listen to the voice within yourself.&rdquo; &mdash; \u003Cfooter\u003EDogen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you have only one smile in you give it to the people you love.",
    "a": "Maya Angelou",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;If you have only one smile in you give it to the people you love.&rdquo; &mdash; \u003Cfooter\u003EMaya Angelou\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.",
    "a": "James Cameron",
    "c": "102",
    "h": "\u003Cblockquote\u003E&ldquo;If you set your goals ridiculously high and its a failure, you will fail above everyone elses success.&rdquo; &mdash; \u003Cfooter\u003EJames Cameron\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you're waiting until you feel talented enough to make it, you'll never make it.",
    "a": "Criss Jami",
    "c": "82",
    "h": "\u003Cblockquote\u003E&ldquo;If you're waiting until you feel talented enough to make it, you'll never make it.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There is no medicine like hope, no incentive so great, and no tonic so powerful as expectation of something tomorrow. ",
    "a": "Orison Swett Marden",
    "c": "118",
    "h": "\u003Cblockquote\u003E&ldquo;There is no medicine like hope, no incentive so great, and no tonic so powerful as expectation of something tomorrow. &rdquo; &mdash; \u003Cfooter\u003EOrison Swett Marden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Raise your words, not voice. It is rain that grows flowers, not thunder.",
    "a": "Rumi",
    "c": "72",
    "h": "\u003Cblockquote\u003E&ldquo;Raise your words, not voice. It is rain that grows flowers, not thunder.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You have to give up some of the old so that you can make room for the new.",
    "a": "Yanni",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;You have to give up some of the old so that you can make room for the new.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
    "a": "Steve Maraboli",
    "c": "149",
    "h": "\u003Cblockquote\u003E&ldquo;Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everything is created twice, first in the mind and then in reality.",
    "a": "Robin Sharma",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;Everything is created twice, first in the mind and then in reality.&rdquo; &mdash; \u003Cfooter\u003ERobin Sharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you want to be successful, you have to jump, there's no way around it.",
    "a": "Steve Harvey",
    "c": "73",
    "h": "\u003Cblockquote\u003E&ldquo;If you want to be successful, you have to jump, there's no way around it.&rdquo; &mdash; \u003Cfooter\u003ESteve Harvey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Abundance of knowledge does not teach men to be wise.",
    "a": "Heraclitus",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;Abundance of knowledge does not teach men to be wise.&rdquo; &mdash; \u003Cfooter\u003EHeraclitus\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Society is composed of two great classes those who have more dinners than appetite, and those who have more appetite than dinners.",
    "a": "Nicolas Chamfort",
    "c": "130",
    "h": "\u003Cblockquote\u003E&ldquo;Society is composed of two great classes those who have more dinners than appetite, and those who have more appetite than dinners.&rdquo; &mdash; \u003Cfooter\u003ENicolas Chamfort\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "There is no limit to the amount of good you can do if you don't care who gets the credit.",
    "a": "Ronald Reagan",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;There is no limit to the amount of good you can do if you don't care who gets the credit.&rdquo; &mdash; \u003Cfooter\u003ERonald Reagan\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All we have to decide is what to do with the time that is given to us.",
    "a": "J.R.R. Tolkien",
    "c": "70",
    "h": "\u003Cblockquote\u003E&ldquo;All we have to decide is what to do with the time that is given to us.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A clear conscience is the sure sign of a bad memory.",
    "a": "Mark Twain",
    "c": "52",
    "h": "\u003Cblockquote\u003E&ldquo;A clear conscience is the sure sign of a bad memory.&rdquo; &mdash; \u003Cfooter\u003EMark Twain\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The greatest step towards a life of simplicity is to learn to let go.",
    "a": "Steve Maraboli",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;The greatest step towards a life of simplicity is to learn to let go.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is not just the passing of time. Life is the collection of experiences and their intensity.",
    "a": "Jim Rohn",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;Life is not just the passing of time. Life is the collection of experiences and their intensity.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The chief cause of failure and unhappiness is trading what you want most for what you want right now.",
    "a": "Zig Ziglar",
    "c": "101",
    "h": "\u003Cblockquote\u003E&ldquo;The chief cause of failure and unhappiness is trading what you want most for what you want right now.&rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Conscience is a man's compass. ",
    "a": "Vincent van Gogh",
    "c": "31",
    "h": "\u003Cblockquote\u003E&ldquo;Conscience is a man's compass. &rdquo; &mdash; \u003Cfooter\u003EVincent van Gogh\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Courage is fear that has said its prayers and decided to go forward anyway.",
    "a": "Joyce Meyer",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Courage is fear that has said its prayers and decided to go forward anyway.&rdquo; &mdash; \u003Cfooter\u003EJoyce Meyer\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Giving is living. If you stop wanting to give, there's nothing more to live for.",
    "a": "Audrey Hepburn",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;Giving is living. If you stop wanting to give, there's nothing more to live for.&rdquo; &mdash; \u003Cfooter\u003EAudrey Hepburn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You were put on this earth to achieve your greatest self, to live out your purpose, and to do it courageously.",
    "a": "Steve Maraboli",
    "c": "110",
    "h": "\u003Cblockquote\u003E&ldquo;You were put on this earth to achieve your greatest self, to live out your purpose, and to do it courageously.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Listen to the secret sound, the real sound, which is inside you.",
    "a": "Kabir",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;Listen to the secret sound, the real sound, which is inside you.&rdquo; &mdash; \u003Cfooter\u003EKabir\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't wish it were easier, wish you were better.",
    "a": "Jim Rohn",
    "c": "48",
    "h": "\u003Cblockquote\u003E&ldquo;Don't wish it were easier, wish you were better.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.  ",
    "a": "Seneca",
    "c": "117",
    "h": "\u003Cblockquote\u003E&ldquo;It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.  &rdquo; &mdash; \u003Cfooter\u003ESeneca\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Man must use what he has, not hope for what is not.",
    "a": "G.I. Gurdjieff",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Man must use what he has, not hope for what is not.&rdquo; &mdash; \u003Cfooter\u003EG.I. Gurdjieff\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Confidence is contagious. So is lack of confidence.",
    "a": "Vince Lombardi",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Confidence is contagious. So is lack of confidence.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Absorb what is useful, discard what is not, add what is uniquely your own.",
    "a": "Bruce Lee",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;Absorb what is useful, discard what is not, add what is uniquely your own.&rdquo; &mdash; \u003Cfooter\u003EBruce Lee\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Imagination is everything. It is the preview of life's coming attractions.",
    "a": "Albert Einstein",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;Imagination is everything. It is the preview of life's coming attractions.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't cry because it's over. Smile because it happened.",
    "a": "Dr. Seuss",
    "c": "55",
    "h": "\u003Cblockquote\u003E&ldquo;Don't cry because it's over. Smile because it happened.&rdquo; &mdash; \u003Cfooter\u003EDr. Seuss\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When you judge others, you do not define them, you define yourself.",
    "a": "Earl Nightingale",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;When you judge others, you do not define them, you define yourself.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Throw your heart over the fence and the rest will follow",
    "a": "Norman Vincent Peale",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;Throw your heart over the fence and the rest will follow&rdquo; &mdash; \u003Cfooter\u003ENorman Vincent Peale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Time goes from present to past.",
    "a": "Shunryu Suzuki",
    "c": "31",
    "h": "\u003Cblockquote\u003E&ldquo;Time goes from present to past.&rdquo; &mdash; \u003Cfooter\u003EShunryu Suzuki\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
    "a": "Roy T. Bennett",
    "c": "92",
    "h": "\u003Cblockquote\u003E&ldquo;Instead of worrying about what you cannot control, shift your energy to what you can create.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A lie can travel half way around the world while the truth is putting on its shoes.",
    "a": "Mark Twain",
    "c": "83",
    "h": "\u003Cblockquote\u003E&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; &mdash; \u003Cfooter\u003EMark Twain\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Remember that the best relationship is one in which your love for each other exceeds your need for each other.",
    "a": "Dalai Lama",
    "c": "110",
    "h": "\u003Cblockquote\u003E&ldquo;Remember that the best relationship is one in which your love for each other exceeds your need for each other.&rdquo; &mdash; \u003Cfooter\u003EDalai Lama\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Happiness depends on your mindset and attitude.",
    "a": "Roy T. Bennett",
    "c": "47",
    "h": "\u003Cblockquote\u003E&ldquo;Happiness depends on your mindset and attitude.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Only those who do nothing at all make no mistakes.",
    "a": "Unknown",
    "c": "50",
    "h": "\u003Cblockquote\u003E&ldquo;Only those who do nothing at all make no mistakes.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.",
    "a": "Tony Robbins",
    "c": "120",
    "h": "\u003Cblockquote\u003E&ldquo;A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Remain calm. Be kind.",
    "a": "Colin Powell",
    "c": "21",
    "h": "\u003Cblockquote\u003E&ldquo;Remain calm. Be kind.&rdquo; &mdash; \u003Cfooter\u003EColin Powell\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.",
    "a": "Robert Greene",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;If the happiness and prosperity of other people depend on you, you have nothing to fear anymore.&rdquo; &mdash; \u003Cfooter\u003ERobert Greene\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every experience is a lesson. Every loss is a gain.",
    "a": "Sathya Sai Baba",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Every experience is a lesson. Every loss is a gain.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everyone thinks of changing the world, but no one thinks of changing himself.",
    "a": "Leo Tolstoy",
    "c": "77",
    "h": "\u003Cblockquote\u003E&ldquo;Everyone thinks of changing the world, but no one thinks of changing himself.&rdquo; &mdash; \u003Cfooter\u003ELeo Tolstoy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Every one of us is the sum total of his own thoughts.",
    "a": "Earl Nightingale",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;Every one of us is the sum total of his own thoughts.&rdquo; &mdash; \u003Cfooter\u003EEarl Nightingale\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be where your enemy is not.",
    "a": "Sun Tzu",
    "c": "27",
    "h": "\u003Cblockquote\u003E&ldquo;Be where your enemy is not.&rdquo; &mdash; \u003Cfooter\u003ESun Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Spend eighty percent of your time focusing on the opportunities of tomorrow rather than the problems of yesterday.",
    "a": "Brian Tracy",
    "c": "114",
    "h": "\u003Cblockquote\u003E&ldquo;Spend eighty percent of your time focusing on the opportunities of tomorrow rather than the problems of yesterday.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't put off living to next week, next month, next year or next decade. The only time you're ever living is in this moment.",
    "a": "Celestine Chua",
    "c": "124",
    "h": "\u003Cblockquote\u003E&ldquo;Don't put off living to next week, next month, next year or next decade. The only time you're ever living is in this moment.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If it is not right, do not do it, if it is not true, do not say it.",
    "a": "Marcus Aurelius",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;If it is not right, do not do it, if it is not true, do not say it.&rdquo; &mdash; \u003Cfooter\u003EMarcus Aurelius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "At every moment where language can't go, that's your mind.",
    "a": "Bodhidharma",
    "c": "58",
    "h": "\u003Cblockquote\u003E&ldquo;At every moment where language can't go, that's your mind.&rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is the power of thought that gives man power over nature.",
    "a": "Hans Christian Andersen",
    "c": "60",
    "h": "\u003Cblockquote\u003E&ldquo;It is the power of thought that gives man power over nature.&rdquo; &mdash; \u003Cfooter\u003EHans Christian Andersen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't worry about being successful, but work toward being significant and the success will naturally follow.",
    "a": "Oprah Winfrey",
    "c": "108",
    "h": "\u003Cblockquote\u003E&ldquo;Don't worry about being successful, but work toward being significant and the success will naturally follow.&rdquo; &mdash; \u003Cfooter\u003EOprah Winfrey\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "As mortals, we're ruled by conditions, not by ourselves.",
    "a": "Bodhidharma",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;As mortals, we're ruled by conditions, not by ourselves.&rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be true to yourself, help others, make each day your masterpiece",
    "a": "John Wooden",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;Be true to yourself, help others, make each day your masterpiece&rdquo; &mdash; \u003Cfooter\u003EJohn Wooden\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A comfort zone is a beautiful place, but nothing ever grows there.",
    "a": "Unknown",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;A comfort zone is a beautiful place, but nothing ever grows there.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A moving door hinge never corrodes. Flowing water never grows stagnant.",
    "a": "Ming-Dao Deng",
    "c": "71",
    "h": "\u003Cblockquote\u003E&ldquo;A moving door hinge never corrodes. Flowing water never grows stagnant.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them.",
    "a": "W. Clement Stone",
    "c": "125",
    "h": "\u003Cblockquote\u003E&ldquo;Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them.&rdquo; &mdash; \u003Cfooter\u003EW. Clement Stone\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To the mind that is still, the whole universe surrenders.",
    "a": "Lao Tzu",
    "c": "57",
    "h": "\u003Cblockquote\u003E&ldquo;To the mind that is still, the whole universe surrenders.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Inspiration exists, but it has to find you working.",
    "a": "Pablo Picasso",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Inspiration exists, but it has to find you working.&rdquo; &mdash; \u003Cfooter\u003EPablo Picasso\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A man with outward courage dares to die: a man with inner courage dares to live.",
    "a": "Lao Tzu",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;A man with outward courage dares to die: a man with inner courage dares to live.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When asked, how do you write? I invariably answer, one word at a time.",
    "a": "Stephen King",
    "c": "70",
    "h": "\u003Cblockquote\u003E&ldquo;When asked, how do you write? I invariably answer, one word at a time.&rdquo; &mdash; \u003Cfooter\u003EStephen King\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You can have the mind or you can have the moment.",
    "a": "Naval Ravikant",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;You can have the mind or you can have the moment.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It's the job that's never started that takes the longest to finish.",
    "a": "J.R.R. Tolkien",
    "c": "67",
    "h": "\u003Cblockquote\u003E&ldquo;It's the job that's never started that takes the longest to finish.&rdquo; &mdash; \u003Cfooter\u003EJ.R.R. Tolkien\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Either you run the day or the day runs you.",
    "a": "Jim Rohn",
    "c": "43",
    "h": "\u003Cblockquote\u003E&ldquo;Either you run the day or the day runs you.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Only I can change my life. No one can do it for me.",
    "a": "Carol Burnett",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;Only I can change my life. No one can do it for me.&rdquo; &mdash; \u003Cfooter\u003ECarol Burnett\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A day without laughter is a day wasted.",
    "a": "Charlie Chaplin",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;A day without laughter is a day wasted.&rdquo; &mdash; \u003Cfooter\u003ECharlie Chaplin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is passion that makes man live; wisdom makes one only last.",
    "a": "Nicolas Chamfort",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;It is passion that makes man live; wisdom makes one only last.&rdquo; &mdash; \u003Cfooter\u003ENicolas Chamfort\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Art is the signature of civilizations. ",
    "a": "Beverly Sills",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;Art is the signature of civilizations. &rdquo; &mdash; \u003Cfooter\u003EBeverly Sills\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.",
    "a": "Ming-Dao Deng",
    "c": "111",
    "h": "\u003Cblockquote\u003E&ldquo;Adversity is the tempering of one's mettle. Without it, we cannot know any true meaning in our accomplishments.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Never give way to laziness.",
    "a": "Bhagavad Gita",
    "c": "27",
    "h": "\u003Cblockquote\u003E&ldquo;Never give way to laziness.&rdquo; &mdash; \u003Cfooter\u003EBhagavad Gita\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When something is important enough, you do it even if the odds are not in your favor.",
    "a": "Elon Musk",
    "c": "85",
    "h": "\u003Cblockquote\u003E&ldquo;When something is important enough, you do it even if the odds are not in your favor.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Give so much away people insist on paying you.",
    "a": "Jack Butcher",
    "c": "46",
    "h": "\u003Cblockquote\u003E&ldquo;Give so much away people insist on paying you.&rdquo; &mdash; \u003Cfooter\u003EJack Butcher\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The less you want, the richer you are. The more you need in order to be happy, the more miserable you'll be.",
    "a": "Yanni",
    "c": "108",
    "h": "\u003Cblockquote\u003E&ldquo;The less you want, the richer you are. The more you need in order to be happy, the more miserable you'll be.&rdquo; &mdash; \u003Cfooter\u003EYanni\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Numbing the pain for a while will make it worse when you finally feel it.",
    "a": "Albus Dumbledore",
    "c": "73",
    "h": "\u003Cblockquote\u003E&ldquo;Numbing the pain for a while will make it worse when you finally feel it.&rdquo; &mdash; \u003Cfooter\u003EAlbus Dumbledore\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The best mind-altering drug is the truth.",
    "a": "Lily Tomlin",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;The best mind-altering drug is the truth.&rdquo; &mdash; \u003Cfooter\u003ELily Tomlin\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Muddy water is best cleared by leaving it alone.",
    "a": "Alan Watts",
    "c": "48",
    "h": "\u003Cblockquote\u003E&ldquo;Muddy water is best cleared by leaving it alone.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is much like going to the gym. The most painful part is deciding to go. Once you get past that, it's easy.",
    "a": "Robert Kiyosaki",
    "c": "111",
    "h": "\u003Cblockquote\u003E&ldquo;Life is much like going to the gym. The most painful part is deciding to go. Once you get past that, it's easy.&rdquo; &mdash; \u003Cfooter\u003ERobert Kiyosaki\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Life is one long process of getting tired.",
    "a": "Samuel Butler",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Life is one long process of getting tired.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.",
    "a": "Harry S. Truman",
    "c": "84",
    "h": "\u003Cblockquote\u003E&ldquo;Nearly every crisis seems to be the worst one, but after it's over, it isn't so bad.&rdquo; &mdash; \u003Cfooter\u003EHarry S. Truman\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "To be prepared is half the victory. ",
    "a": "Miguel de Cervantes",
    "c": "36",
    "h": "\u003Cblockquote\u003E&ldquo;To be prepared is half the victory. &rdquo; &mdash; \u003Cfooter\u003EMiguel de Cervantes\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Those who can make you believe absurdities can make you commit atrocities. ",
    "a": "Voltaire",
    "c": "75",
    "h": "\u003Cblockquote\u003E&ldquo;Those who can make you believe absurdities can make you commit atrocities. &rdquo; &mdash; \u003Cfooter\u003EVoltaire\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "First comes the shy wish. Then you must have the heart to have the dream. Then, you work, and work.  ",
    "a": "Estee Lauder",
    "c": "101",
    "h": "\u003Cblockquote\u003E&ldquo;First comes the shy wish. Then you must have the heart to have the dream. Then, you work, and work.  &rdquo; &mdash; \u003Cfooter\u003EEstee Lauder\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Imagination is more important than knowledge.",
    "a": "Albert Einstein",
    "c": "45",
    "h": "\u003Cblockquote\u003E&ldquo;Imagination is more important than knowledge.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Because a thing seems difficult for you, do not think it impossible.",
    "a": "Marcus Aurelius",
    "c": "68",
    "h": "\u003Cblockquote\u003E&ldquo;Because a thing seems difficult for you, do not think it impossible.&rdquo; &mdash; \u003Cfooter\u003EMarcus Aurelius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't learn to do, but learn in doing.",
    "a": "Samuel Butler",
    "c": "38",
    "h": "\u003Cblockquote\u003E&ldquo;Don't learn to do, but learn in doing.&rdquo; &mdash; \u003Cfooter\u003ESamuel Butler\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.",
    "a": "Naval Ravikant",
    "c": "110",
    "h": "\u003Cblockquote\u003E&ldquo;Happiness is a choice and a skill and you can dedicate yourself to learning that skill and making that choice.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "In the midst of movement and chaos, keep stillness inside of you.",
    "a": "Deepak Chopra",
    "c": "65",
    "h": "\u003Cblockquote\u003E&ldquo;In the midst of movement and chaos, keep stillness inside of you.&rdquo; &mdash; \u003Cfooter\u003EDeepak Chopra\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Take away love and our earth is a tomb.",
    "a": "Robert Browning",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;Take away love and our earth is a tomb.&rdquo; &mdash; \u003Cfooter\u003ERobert Browning\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "What you are afraid of is never as bad as what you imagine. The fear you let build up in your mind is worse than the situation that actually exists.",
    "a": "Spencer Johnson",
    "c": "148",
    "h": "\u003Cblockquote\u003E&ldquo;What you are afraid of is never as bad as what you imagine. The fear you let build up in your mind is worse than the situation that actually exists.&rdquo; &mdash; \u003Cfooter\u003ESpencer Johnson\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Follow the man who seeks the truth; run from the man who has found it.",
    "a": "Vaclav Havel",
    "c": "70",
    "h": "\u003Cblockquote\u003E&ldquo;Follow the man who seeks the truth; run from the man who has found it.&rdquo; &mdash; \u003Cfooter\u003EVaclav Havel\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You get paid in direct proportion to the difficulty of problems you solve.",
    "a": "Elon Musk",
    "c": "74",
    "h": "\u003Cblockquote\u003E&ldquo;You get paid in direct proportion to the difficulty of problems you solve.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is not what we get. But who we become, what we contribute... that gives meaning to our lives.",
    "a": "Tony Robbins",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;It is not what we get. But who we become, what we contribute... that gives meaning to our lives.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everyone has the right to make his own decisions, but none has the right to force his decision on others.",
    "a": "Ayn Rand",
    "c": "105",
    "h": "\u003Cblockquote\u003E&ldquo;Everyone has the right to make his own decisions, but none has the right to force his decision on others.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Imagination is the beginning of creation.",
    "a": "George Bernard Shaw",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;Imagination is the beginning of creation.&rdquo; &mdash; \u003Cfooter\u003EGeorge Bernard Shaw\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We have a duty to maintain the light of consciousness to make sure it continues into the future.",
    "a": "Elon Musk",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;We have a duty to maintain the light of consciousness to make sure it continues into the future.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.",
    "a": "Robin Williams",
    "c": "103",
    "h": "\u003Cblockquote\u003E&ldquo;You will have bad times, but they will always wake you up to the stuff you weren't paying attention to.&rdquo; &mdash; \u003Cfooter\u003ERobin Williams\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Goodness is the only investment that never fails.",
    "a": "Henry David Thoreau",
    "c": "49",
    "h": "\u003Cblockquote\u003E&ldquo;Goodness is the only investment that never fails.&rdquo; &mdash; \u003Cfooter\u003EHenry David Thoreau\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It doesn't matter how slow you go, as long as you don't stop.",
    "a": "Confucius",
    "c": "61",
    "h": "\u003Cblockquote\u003E&ldquo;It doesn't matter how slow you go, as long as you don't stop.&rdquo; &mdash; \u003Cfooter\u003EConfucius\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You just can't beat the person who never gives up. ",
    "a": "Babe Ruth",
    "c": "51",
    "h": "\u003Cblockquote\u003E&ldquo;You just can't beat the person who never gives up. &rdquo; &mdash; \u003Cfooter\u003EBabe Ruth\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
    "a": "Lao Tzu",
    "c": "129",
    "h": "\u003Cblockquote\u003E&ldquo;A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Everything that is done in the world is done by hope.",
    "a": "Martin Luther",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;Everything that is done in the world is done by hope.&rdquo; &mdash; \u003Cfooter\u003EMartin Luther\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You may forget with whom you laughed, but you will never forget with whom you wept.  ",
    "a": "Kahlil Gibran",
    "c": "85",
    "h": "\u003Cblockquote\u003E&ldquo;You may forget with whom you laughed, but you will never forget with whom you wept.  &rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Cease striving. Then there will be transformation.",
    "a": "Zhuangzi",
    "c": "50",
    "h": "\u003Cblockquote\u003E&ldquo;Cease striving. Then there will be transformation.&rdquo; &mdash; \u003Cfooter\u003EZhuangzi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Remember that sometimes not getting what you want is a wonderful stroke of luck.",
    "a": "Dalai Lama",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;Remember that sometimes not getting what you want is a wonderful stroke of luck.&rdquo; &mdash; \u003Cfooter\u003EDalai Lama\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The only way it gets better for you is when you get better. Better is not something you wish, it's something you become.",
    "a": "Jim Rohn",
    "c": "120",
    "h": "\u003Cblockquote\u003E&ldquo;The only way it gets better for you is when you get better. Better is not something you wish, it's something you become.&rdquo; &mdash; \u003Cfooter\u003EJim Rohn\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The greatest mistake you can make in life is to be continually fearing you will make one.",
    "a": "Elbert Hubbard",
    "c": "89",
    "h": "\u003Cblockquote\u003E&ldquo;The greatest mistake you can make in life is to be continually fearing you will make one.&rdquo; &mdash; \u003Cfooter\u003EElbert Hubbard\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "By changing nothing, nothing changes.",
    "a": "Celestine Chua",
    "c": "37",
    "h": "\u003Cblockquote\u003E&ldquo;By changing nothing, nothing changes.&rdquo; &mdash; \u003Cfooter\u003ECelestine Chua\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "All human wisdom is contained in these two words - Wait and Hope",
    "a": "Alexandre Dumas",
    "c": "64",
    "h": "\u003Cblockquote\u003E&ldquo;All human wisdom is contained in these two words - Wait and Hope&rdquo; &mdash; \u003Cfooter\u003EAlexandre Dumas\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Far more crucial than what we know or do not know is what we do not want to know.",
    "a": "Eric Hoffer",
    "c": "81",
    "h": "\u003Cblockquote\u003E&ldquo;Far more crucial than what we know or do not know is what we do not want to know.&rdquo; &mdash; \u003Cfooter\u003EEric Hoffer\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Not why the addiction but why the pain.",
    "a": "Gabor Mate",
    "c": "39",
    "h": "\u003Cblockquote\u003E&ldquo;Not why the addiction but why the pain.&rdquo; &mdash; \u003Cfooter\u003EGabor Mate\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Winners don't Quit. That's why they Win.",
    "a": "Unknown",
    "c": "40",
    "h": "\u003Cblockquote\u003E&ldquo;Winners don't Quit. That's why they Win.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "You are your best thing.",
    "a": "Toni Morrison",
    "c": "24",
    "h": "\u003Cblockquote\u003E&ldquo;You are your best thing.&rdquo; &mdash; \u003Cfooter\u003EToni Morrison\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "We would accomplish many more things if we did not think of them as impossible.",
    "a": "Vince Lombardi",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;We would accomplish many more things if we did not think of them as impossible.&rdquo; &mdash; \u003Cfooter\u003EVince Lombardi\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Wrong does not cease to be wrong because the majority share in it.",
    "a": "Leo Tolstoy",
    "c": "66",
    "h": "\u003Cblockquote\u003E&ldquo;Wrong does not cease to be wrong because the majority share in it.&rdquo; &mdash; \u003Cfooter\u003ELeo Tolstoy\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "The more we value things, the less we value ourselves.  ",
    "a": "Bruce Lee",
    "c": "56",
    "h": "\u003Cblockquote\u003E&ldquo;The more we value things, the less we value ourselves.  &rdquo; &mdash; \u003Cfooter\u003EBruce Lee\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "They who have conquered doubt and fear have conquered failure.",
    "a": "James Allen",
    "c": "62",
    "h": "\u003Cblockquote\u003E&ldquo;They who have conquered doubt and fear have conquered failure.&rdquo; &mdash; \u003Cfooter\u003EJames Allen\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "I can live without money, but I cannot live without love.",
    "a": "Judy Garland",
    "c": "57",
    "h": "\u003Cblockquote\u003E&ldquo;I can live without money, but I cannot live without love.&rdquo; &mdash; \u003Cfooter\u003EJudy Garland\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Deliberately seek the company of people who influence you to think and act on building the life you desire.",
    "a": "Napoleon Hill",
    "c": "107",
    "h": "\u003Cblockquote\u003E&ldquo;Deliberately seek the company of people who influence you to think and act on building the life you desire.&rdquo; &mdash; \u003Cfooter\u003ENapoleon Hill\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Don't listen to the person who has the answers; listen to the person who has the questions.",
    "a": "Albert Einstein",
    "c": "91",
    "h": "\u003Cblockquote\u003E&ldquo;Don't listen to the person who has the answers; listen to the person who has the questions.&rdquo; &mdash; \u003Cfooter\u003EAlbert Einstein\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Quality is not an act, it is a habit.",
    "a": "Aristotle",
    "c": "37",
    "h": "\u003Cblockquote\u003E&ldquo;Quality is not an act, it is a habit.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "A dead thing can go with the stream, but only a living thing can go against it.",
    "a": "Gilbert Chesterton",
    "c": "79",
    "h": "\u003Cblockquote\u003E&ldquo;A dead thing can go with the stream, but only a living thing can go against it.&rdquo; &mdash; \u003Cfooter\u003EGilbert Chesterton\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "When a man is penalized for honesty he learns to lie.",
    "a": "Criss Jami",
    "c": "53",
    "h": "\u003Cblockquote\u003E&ldquo;When a man is penalized for honesty he learns to lie.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "It is easy to love your friend, but sometimes the hardest lesson to learn is to love your enemy.",
    "a": "Sun Tzu",
    "c": "96",
    "h": "\u003Cblockquote\u003E&ldquo;It is easy to love your friend, but sometimes the hardest lesson to learn is to love your enemy.&rdquo; &mdash; \u003Cfooter\u003ESun Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.",
    "a": "Deepak Chopra",
    "c": "106",
    "h": "\u003Cblockquote\u003E&ldquo;If you try to get rid of fear and anger without knowing their meaning, they will grow stronger and return.&rdquo; &mdash; \u003Cfooter\u003EDeepak Chopra\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Unless a man is master of his soul, all other kinds of mastery amount to little.",
    "a": "Theodore Roosevelt",
    "c": "80",
    "h": "\u003Cblockquote\u003E&ldquo;Unless a man is master of his soul, all other kinds of mastery amount to little.&rdquo; &mdash; \u003Cfooter\u003ETheodore Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Perplexity is the beginning of knowledge.",
    "a": "Kahlil Gibran",
    "c": "41",
    "h": "\u003Cblockquote\u003E&ldquo;Perplexity is the beginning of knowledge.&rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "As soon as you truly commit to making something happen, the 'how' will reveal itself.",
    "a": "Tony Robbins",
    "c": "85",
    "h": "\u003Cblockquote\u003E&ldquo;As soon as you truly commit to making something happen, the 'how' will reveal itself.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Sadness is but a wall between two gardens.",
    "a": "Kahlil Gibran",
    "c": "42",
    "h": "\u003Cblockquote\u003E&ldquo;Sadness is but a wall between two gardens.&rdquo; &mdash; \u003Cfooter\u003EKahlil Gibran\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "If you do not change direction, you may end up where you are heading.",
    "a": "Lao Tzu",
    "c": "69",
    "h": "\u003Cblockquote\u003E&ldquo;If you do not change direction, you may end up where you are heading.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E"
  },
  {
    "q": "Gratitude is the fairest blossom which springs from the soul.",
    "a": "Henry Ward Beecher",
    "c": "61",
    "h": "\u003Cblockquote\u003E&ldquo;Gratitude is the fairest blossom which springs from the soul.&rdquo; &mdash; \u003Cfooter\u003EHenry Ward Beecher\u003C/footer\u003E\u003C/blockquote\u003E"
  }
]