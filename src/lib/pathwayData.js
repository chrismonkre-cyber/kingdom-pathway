import { Cross, Heart, Shield, Compass, Flame, BookOpen, Users, Target, Zap, CloudRain } from "lucide-react";

const PATHWAYS = [
  {
    id: "new-to-faith",
    title: "I'm New to Faith",
    description: "Start your walk with Jesus with clarity, Scripture, and prayer.",
    icon: "Cross",
    scripture: "John 3:16 · Romans 10:9 · 2 Corinthians 5:17",
    scriptureText: "\"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.\" — John 3:16",
    teaching: [
      "You have made the most important decision of your life — to follow Jesus. This is not religion. This is relationship. God Himself has drawn you, called you, and welcomed you into His family.",
      "When you confess Jesus as Lord and believe in your heart that God raised Him from the dead, you are saved. You are made new. The old has gone, the new has come. You are not just \"trying to be better\" — you have been born again by the Spirit of God.",
      "Your next step is simple: begin to read the Word, talk to God daily in prayer, and find a Spirit-filled community. The Holy Spirit will guide you into all truth."
    ],
    prayer: "Father, I thank You for saving me. I believe in Jesus Christ — that He died for my sins and rose again. I receive Your forgiveness and new life. Fill me with Your Holy Spirit. Teach me Your Word. Guide my steps. I surrender my life to You. In Jesus' name, Amen.",
    declaration: "I am a new creation in Christ. The old is gone, and the new has come. I am saved, forgiven, and filled with the Spirit of God. My life belongs to Jesus, and I walk in His power and purpose.",
    fireStep: "Read the Gospel of John, chapter 1 today. Ask God to open your eyes to who Jesus really is.",
    journalPrompt: "What does it mean to you that God loves you and has called you by name?",
    resource: { name: "The Bible Companion", url: "https://thebiblecompanion.online" }
  },
  {
    id: "grow-closer",
    title: "I Want to Grow Closer to God",
    description: "Strengthen your walk, hunger, and daily surrender.",
    icon: "Flame",
    scripture: "James 4:8 · Psalm 63:1 · Matthew 6:33",
    scriptureText: "\"Draw near to God and He will draw near to you.\" — James 4:8",
    teaching: [
      "Growth in God is not about doing more — it is about surrendering more. The deeper you go with God, the more you realize that He is not impressed by performance. He is moved by hunger. He responds to a heart that says, \"I want more of You.\"",
      "Seek first His Kingdom. Not your comfort, not your plan — His Kingdom. When you make that your priority, everything else aligns. Your peace returns. Your purpose clarifies. Your strength is renewed.",
      "Set aside time every day to be still before God. Read His Word. Worship without distraction. Let the Holy Spirit speak. Growth comes not from striving, but from abiding."
    ],
    prayer: "Lord, I hunger for more of You. I don't want to stay where I am — I want to go deeper. Draw me closer. Help me to seek You first above all things. Let my life reflect Your presence. Fill me afresh with Your Spirit. In Jesus' name, Amen.",
    declaration: "I am growing in the knowledge and presence of God. I seek Him first. I draw near, and He draws near to me. The Holy Spirit is my teacher, and I walk daily in His presence and power.",
    fireStep: "Set a 15-minute daily appointment with God this week — no phone, no distraction. Just His Word and prayer.",
    journalPrompt: "What is one area of your life where you sense God calling you to surrender more deeply?",
    resource: { name: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" }
  },
  {
    id: "need-peace",
    title: "I Need Peace",
    description: "Let the peace of Christ guard your heart and mind.",
    icon: "CloudRain",
    scripture: "Philippians 4:6–7 · John 14:27 · Isaiah 26:3",
    scriptureText: "\"Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.\" — Philippians 4:6–7",
    teaching: [
      "Peace is not the absence of trouble — it is the presence of God in the middle of it. Jesus said, \"My peace I give to you. Not as the world gives do I give to you.\" His peace is supernatural. It doesn't make sense. It just holds you.",
      "Anxiety is a signal that something has taken the place of trust. When you bring your worries to God — all of them — and replace fear with thanksgiving, something shifts in the atmosphere of your soul. Peace comes.",
      "Keep your mind stayed on Him. What you focus on determines what you feel. Fix your thoughts on what is true, honorable, and praiseworthy, and the God of peace will be with you."
    ],
    prayer: "Father, I give You my anxiety, my worry, and every thought that has stolen my peace. I choose to trust You. Let Your peace — the peace that passes all understanding — guard my heart and mind right now. Still the storm inside me. I rest in You. In Jesus' name, Amen.",
    declaration: "The peace of God guards my heart and mind. I am not anxious. I am not afraid. My mind is stayed on the Lord, and He keeps me in perfect peace. I trust Him fully.",
    fireStep: "Write down 3 things you are grateful for right now and speak them out loud as an offering of thanksgiving.",
    journalPrompt: "What are you carrying right now that you need to release into God's hands?",
    resource: { name: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" }
  },
  {
    id: "need-healing",
    title: "I Need Healing",
    description: "Stand on the Word and pray with faith for healing and strength.",
    icon: "Heart",
    scripture: "Isaiah 53:5 · James 5:14–15 · Psalm 103:2–3",
    scriptureText: "\"By His stripes we are healed.\" — Isaiah 53:5",
    teaching: [
      "Healing is in the nature of God. He is Jehovah Rapha — the Lord who heals. Jesus went about healing all who were oppressed, and He has not changed. What He did then, He does now.",
      "Stand on His Word. Do not be moved by what you see or feel — be moved by what God has said. He said, \"By His stripes you are healed.\" He said, \"I am the Lord who heals you.\" He said, \"The prayer of faith will save the sick.\"",
      "Pray with boldness. Declare His promises over your body, your mind, or your situation. Invite others to pray with you. Healing flows through faith, agreement, and the power of the Holy Spirit."
    ],
    prayer: "Father, I come to You as my Healer. You are Jehovah Rapha. I stand on Your Word that says by the stripes of Jesus, I am healed. I speak healing over my body, my mind, and my emotions. I resist every attack of sickness and declare that life, health, and wholeness are mine through the blood of Jesus. In His mighty name, Amen.",
    declaration: "I am healed by the stripes of Jesus Christ. No weapon formed against my health shall prosper. The same Spirit that raised Christ from the dead dwells in me and gives life to my mortal body. I walk in divine health and strength.",
    fireStep: "Speak Isaiah 53:5 and Psalm 103:2–3 over yourself three times today. Ask someone to agree with you in prayer.",
    journalPrompt: "What healing are you believing God for, and what Scripture are you standing on?",
    resource: { name: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" }
  },
  {
    id: "need-direction",
    title: "I Need Direction",
    description: "Seek God's wisdom, clarity, and next step.",
    icon: "Compass",
    scripture: "Proverbs 3:5–6 · James 1:5 · Psalm 37:23",
    scriptureText: "\"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.\" — Proverbs 3:5–6",
    teaching: [
      "God is not hiding His will from you — He is waiting for you to trust Him enough to follow. Direction comes through surrender, not strategy. When you stop leaning on your own understanding and acknowledge Him in every area, He makes the path clear.",
      "If you lack wisdom, ask. God gives generously and without reproach. He does not shame you for not knowing — He invites you to ask. Pray with expectation, and pay attention to how He leads through His Word, His Spirit, and wise counsel.",
      "Your steps are ordered by the Lord. Even when you cannot see the full picture, take the next step of obedience. God does not reveal the whole road at once — He lights the next step. Walk in it."
    ],
    prayer: "Lord, I need Your direction. I don't have all the answers, and I don't need to. I trust You with my future. Give me wisdom. Show me the next step. Help me hear Your voice clearly. I choose to follow You, even when I cannot see the full picture. Direct my path. In Jesus' name, Amen.",
    declaration: "My steps are ordered by the Lord. I do not lean on my own understanding. I trust God with all my heart, and He directs my path. I have the wisdom of God, and I walk in divine clarity and purpose.",
    fireStep: "Write down the decision or question weighing on your heart. Pray over it, then open God's Word and ask the Holy Spirit to speak.",
    journalPrompt: "Where do you need God's direction most right now, and what are you willing to surrender to receive it?",
    resource: { name: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" }
  },
  {
    id: "spiritual-attack",
    title: "I'm Under Spiritual Attack",
    description: "Stand firm in Christ and walk in spiritual authority.",
    icon: "Shield",
    scripture: "Ephesians 6:10–18 · James 4:7 · Luke 10:19",
    scriptureText: "\"Submit to God. Resist the devil, and he will flee from you.\" — James 4:7",
    teaching: [
      "If you are under attack, it is because you are a threat. The enemy does not waste ammunition on people who are doing nothing for the Kingdom. Recognize the attack for what it is — and stand firm.",
      "You are not fighting for victory — you are fighting from victory. Jesus already defeated the enemy at the cross. Your authority is not based on how you feel. It is based on who Jesus is and what He accomplished. Put on the full armor of God and stand.",
      "Resist the devil and he will flee. Speak the Word. Worship through the battle. Pray in the Spirit. Call on the name of Jesus. You have been given authority to tread on serpents and scorpions and over all the power of the enemy."
    ],
    prayer: "In the name of Jesus, I take authority over every attack of the enemy against my mind, my body, my family, and my calling. I resist you, Satan, and I command you to flee. I put on the full armor of God. I stand on the Word. I plead the blood of Jesus over every area of my life. No weapon formed against me shall prosper. In Jesus' mighty name, Amen.",
    declaration: "I have authority in Christ. I resist the devil and he flees from me. I am covered by the blood of Jesus. No weapon formed against me shall prosper. I stand firm in the power of God, and I will not be moved.",
    fireStep: "Read Ephesians 6:10–18 out loud. Put on each piece of the armor of God in prayer and declaration.",
    journalPrompt: "What area of your life feels under attack, and what Scripture will you stand on today?",
    resource: { name: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" }
  },
  {
    id: "grieving",
    title: "I'm Grieving",
    description: "Receive comfort, strength, and hope in a painful season.",
    icon: "Heart",
    scripture: "Psalm 34:18 · Matthew 5:4 · 2 Corinthians 1:3–4",
    scriptureText: "\"The Lord is close to the brokenhearted and saves those who are crushed in spirit.\" — Psalm 34:18",
    teaching: [
      "Grief is not a sign of weakness — it is a sign of love. You grieve because you loved deeply. And God sees every tear. He is close to the brokenhearted. He does not stand at a distance — He draws near.",
      "You do not have to pretend to be strong. God already knows what you carry. Bring your pain to Him without filters. He is the Father of compassion and the God of all comfort. He comforts you so that you can one day comfort others.",
      "Healing from grief is not forgetting — it is being held. Let God hold you in this season. Let His Word anchor you. Let His presence be your refuge. Blessed are those who mourn, for they shall be comforted."
    ],
    prayer: "Father, my heart is broken. You see my tears and You know my pain. I need Your comfort. Hold me in this season of grief. Be my strength when I am weak. Be my peace when the waves come. I trust You even in the valley. Heal my heart and restore my hope. In Jesus' name, Amen.",
    declaration: "God is close to me in my brokenness. He collects every tear. I am comforted by the Father of all compassion. I will not be consumed by grief — I will be carried by grace. Joy will come in the morning.",
    fireStep: "Find one person you trust and share what you're going through. Let someone walk this road with you.",
    journalPrompt: "What do you need to say to God about your grief that you haven't said yet?",
    resource: { name: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" }
  },
  {
    id: "family-restoration",
    title: "I Need Family Restoration",
    description: "Pray for healing, unity, forgiveness, and restored hearts.",
    icon: "Users",
    scripture: "Joel 2:25 · Malachi 4:6 · Colossians 3:13",
    scriptureText: "\"I will restore to you the years that the swarming locust has eaten.\" — Joel 2:25",
    teaching: [
      "God is a God of restoration. What the enemy has stolen, broken, or divided — God can restore. He turns the hearts of fathers to children and children to fathers. He makes broken things whole.",
      "Restoration begins with prayer and forgiveness. You may not be able to control what others do, but you can release forgiveness and invite God into the broken places. Forgiveness is not weakness — it is warfare. It breaks chains that bitterness never could.",
      "Pray over your family. Declare unity, peace, and the love of God over every relationship. Stand on the promises of God and trust that He is working even when you cannot see it. God is faithful."
    ],
    prayer: "Father, I lift my family to You. Where there is division, bring unity. Where there is hurt, bring healing. Where there is anger, bring forgiveness. Turn hearts back to each other and back to You. Restore what has been broken. I stand on Your promise to restore the years the locust has eaten. In Jesus' name, Amen.",
    declaration: "My family is being restored by the hand of God. Hearts are being turned. Forgiveness is flowing. Unity is being built. God is doing a new thing in my family, and I stand in faith for His promises.",
    fireStep: "Pray specifically for one family member today. Speak a blessing over them by name.",
    journalPrompt: "What relationship in your family do you most want God to restore, and what will you release to Him?",
    resource: { name: "Kingdom Prayer Wall", url: "https://prayer.kingdommandateministry.com" }
  },
  {
    id: "need-purpose",
    title: "I Need Purpose",
    description: "Discover calling, obedience, and Kingdom assignment.",
    icon: "Target",
    scripture: "Jeremiah 29:11 · Ephesians 2:10 · Romans 8:28",
    scriptureText: "\"For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.\" — Ephesians 2:10",
    teaching: [
      "You were not created by accident. You were designed with purpose, gifted with intention, and called with a mission. God has a plan for your life — not a vague, distant plan, but a specific, present, Kingdom assignment.",
      "Purpose is not always dramatic. Sometimes your purpose is faithfulness in the small things. Sometimes it's obedience in the hidden place. Sometimes it's serving where no one sees. But every step of obedience builds the Kingdom.",
      "Don't wait for a burning bush. Start where you are. Use what you have. Serve who is in front of you. As you are faithful, God will open doors and expand your territory. Purpose is discovered in motion, not in waiting."
    ],
    prayer: "Lord, reveal my purpose. Show me what You've created me to do. Give me eyes to see the opportunities in front of me and the courage to walk in them. I don't want to waste my life — I want to live for Your Kingdom. Use me. Send me. I am Yours. In Jesus' name, Amen.",
    declaration: "I am created with purpose and called with a mission. God has prepared good works for me to walk in. I am not aimless — I am assigned. I walk in obedience, and God directs my steps into Kingdom purpose.",
    fireStep: "Identify one gift or skill you have and find one way to use it to serve someone this week.",
    journalPrompt: "If nothing held you back, what would you do for the Kingdom of God?",
    resource: { name: "Kingdom Mandate Ministry", url: "https://kingdommandateministry.com" }
  },
  {
    id: "breakthrough",
    title: "I'm Ready for Breakthrough",
    description: "Stir faith, stand on the Word, and take bold steps forward.",
    icon: "Zap",
    scripture: "Isaiah 43:19 · Micah 2:13 · Mark 11:23–24",
    scriptureText: "\"Behold, I am doing a new thing; now it springs forth, do you not perceive it? I am making a way in the wilderness and streams in the wasteland.\" — Isaiah 43:19",
    teaching: [
      "Breakthrough is God's specialty. He makes ways where there is no way. He opens doors no man can shut. He parts seas, moves mountains, and breaks every chain. If you are ready — He is more than able.",
      "Breakthrough requires bold faith. It requires speaking to the mountain, not just praying about it. It requires stepping forward when everything in the natural says stay back. It requires declaring what God has spoken, not what the enemy has whispered.",
      "God is doing a new thing. Can you perceive it? Something is shifting. Something is breaking open. Position yourself with faith, obedience, and expectation. The Breaker has gone up before you. Follow Him through."
    ],
    prayer: "Lord, I am ready for breakthrough. I stir up my faith and I stand on Your Word. Break every chain. Remove every obstacle. Open every closed door. I speak to the mountains in my life and I command them to move in the name of Jesus. I believe You are doing a new thing. I step forward in faith. In Jesus' mighty name, Amen.",
    declaration: "I am stepping into breakthrough. God is making a way where there was no way. Mountains are moving. Chains are breaking. Doors are opening. I speak with bold faith, and I walk in the power of the Holy Spirit. My breakthrough is here.",
    fireStep: "Identify the #1 thing you need breakthrough in. Write it down, speak Mark 11:23–24 over it, and take one bold step of faith today.",
    journalPrompt: "What breakthrough are you believing for, and what bold step of faith will you take this week?",
    resource: { name: "Kingdom Fire Companion", url: "https://fire.kingdommandateministry.com" }
  }
];

export default PATHWAYS;