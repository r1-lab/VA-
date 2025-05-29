const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot2",
  version: "0.0.4",
  permission: 0,
  prefix: false,
  credits: "Rakib",
  description: "talk with bot",
  category: "user",
  usages: "",
  cooldowns: 5,
}; 
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);


  var tl = ["-   -","           - -","           -","   -","     -","  '    -","        -","     -","               ","          -","  -","           -","      -","          -         -","-              -    :- https://www.facebook.com/SYSTEM.ERROR.KING","        -","  -","--- --     -","oii--   -","-           -","-   --       -","- -     -","---      -","- --   -","    -","      -","-    -","       -","   -","-         -","-      --    -","-      --       -","-       -","  --  --           -","   -       -","-   -     -","  -     -    -","    -    '-","-       -","    -","-  --    --     --    -","-   --","-     --   -","-- ----- --   -","-  ----  --  -- -","-   --    -","-            --    --     --        -","-    --        -","-  --          -","'     -","-    --       -","-  --    --  - ","-       -!-      -!"," Bot Bot  leave   " , "          " , "      ,ok" , "   ,     " , "Bolo Babu,    ?  " , "      ", " ,  ?" , "  ?  ? ","        ??. " ,  " Bolo   , ? " , "Bot   ," , "Hop bedi,Boss  boss" , "  ,      " , "Bot  ,     " , "  Disturb  ,        " , "      " , "  ,     " , "    mood  " , "  ,      " , " ,    ,  bot bot   " , "       ,    ? " , "  ,  " , "  ,   " , "  ,    ?" , "     " , " ,   " , "    , " , "    Ummmmha  " , "     " , "      " , "Bot  , " , "  " , "            " , "      ..!!  .!! -       --","-     '..!","-' -     -","- - ..!","-   -  ..!","~  ..! ~       ..!","---   - -    - -    ..!","~   ...! ~   ...! ~   ...!","-   ' -  -      -","-        -  -         ..!","-    .! -        .!","-     - -       ..!","-        ...!","-      -  -    ..!","-   -  -     - -     -  -   ..!","-   - -     - -      ..!","-       - -       -","-  - -     -","-- -    - - - -  -","-    prem ..     -","-      .!-       .!"];
  var rand = tl[Math.floor(Math.random() * tl.length)];


   if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "bot kiss me")) {
     return api.sendMessage("   ", threadID);
   };

if ((event.body.toLowerCase() == "/sex") || (event.body.toLowerCase() == "/fuck")) {
return api.sendMessage("           ~ now sex time fuck", threadID);
};

   if ((event.body.toLowerCase() == "bot ar bacca") || (event.body.toLowerCase() == "  ") ||
      (event.body.toLowerCase() == "Bot er bacca")) {
     return api.sendMessage("----        -", threadID);
   };

   if ((event.body.toLowerCase() == "leave") || (event.body.toLowerCase() == "Bot left ne") ||
(event.body.toLowerCase() == "chole ja") ||
(event.body.toLowerCase() == " ") ||
      (event.body.toLowerCase() == " ") ||
      (event.body.toLowerCase() == "Left ne")||
(event.body.toLowerCase() == "Tui left ne")) {
     return api.sendMessage("-          - -  ..!", threadID);
   };

   

   if ((event.body.toLowerCase() == "biye") || (event.body.toLowerCase() == "  ") ||
(event.body.toLowerCase() == " ") ||
(event.body.toLowerCase() == "") ||
      (event.body.toLowerCase() == "Biye") ||
      (event.body.toLowerCase() == "Biye mane ki")||
(event.body.toLowerCase() == "Biye ki")) {
     return api.sendMessage("-              -", threadID);
   };


   if ((event.body.toLowerCase() == " ") || (event.body.toLowerCase() == "") ||
(event.body.toLowerCase() == "bow") ||
(event.body.toLowerCase() == "Bou") ||
      (event.body.toLowerCase() == "Bow") ||
      (event.body.toLowerCase() == "BOW")||
(event.body.toLowerCase() == "Bow ki")) {
     return api.sendMessage("-                        ..!", threadID);
   };

   if ((event.body.toLowerCase() == "Tore banayse ke") || (event.body.toLowerCase() == "ata kar bot")) {
     return api.sendMessage("           __", threadID);
   };

  if ((event.body.toLowerCase() == " ") || (event.body.toLowerCase() == "Miss you")) {
     return api.sendMessage("<    /-    :))", threadID);
   };

    if ((event.body.toLowerCase() == "Mim dim") || (event.body.toLowerCase() == "mim dim")) {
     return api.sendMessage("          ", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "Hlw") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "Hi")) {
     return api.sendMessage(" -        ..!", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("SAME TO YOU ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai ", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING     ", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal")) {
     return api.sendMessage("          ", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "Stop") || (event.body.toLowerCase() == " ") || (event.body.toLowerCase() == "Chup kor")) {
     return api.sendMessage("     ", threadID);
   };

  if ((event.body.toLowerCase() == " ") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "Salam ")) {
     return api.sendMessage("- --!!", threadID);
   };

  if ((event.body.toLowerCase() == "Jannat") || (event.body.toLowerCase() == "jannat")) {
     return api.sendMessage("          '   Ex  ..!", threadID);
   };

  if ((event.body.toLowerCase() == "Miya khalifa") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("             Ex  .", threadID);
   };

  if ((event.body.toLowerCase() == "anisha") || (event.body.toLowerCase() == "Anisha")) {
     return api.sendMessage("             Ex  ..!", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "@")) {
     return api.sendMessage(" -          '  ", threadID);
   };

   if ((event.body.toLowerCase() == "KISS ME") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("       ", threadID);
   };

   if ((event.body.toLowerCase() == "tnx") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("             ..!", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "Hmmm") || (event.body.toLowerCase() == "Hum")) {
     return api.sendMessage("      ", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("      ", threadID);
   };

   if ((event.body.toLowerCase() == "Name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "Tor nam ki")) {
     return api.sendMessage("MY NAME IS ø_>-.   ", threadID);
   };

   if ((event.body.toLowerCase() == "BOT ER BACCHA") || (event.body.toLowerCase() == "bot er baccha bot")) {
     return api.sendMessage("     ..!! ", threadID);
   };

   if ((event.body.toLowerCase() == "Pic de") || (event.body.toLowerCase() == "ss dau")) {
     return api.sendMessage("     ", threadID);
   };

   if ((event.body.toLowerCase() == "Ruma") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya. Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "/off") || (event.body.toLowerCase() == "/left") || (event.body.toLowerCase() == "/out") || (event.body.toLowerCase() == "/off bot")) {
     return api.sendMessage("        ", threadID);
   };

     if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("        ..!", threadID);
   };

   if ((event.body.toLowerCase() == "Tumi ki amake bhalobaso") || (event.body.toLowerCase() == "tmi ki amake vlobasho")) {
     return api.sendMessage("      <", threadID);
   };

   if ((event.body.toLowerCase() == "ami tor sir") || (event.body.toLowerCase() == "Ami tor sir")) {
     return api.sendMessage("     ..?", threadID);
   };

   if ((event.body.toLowerCase() == "Bye") || (event.body.toLowerCase() == "bye")) {
     return api.sendMessage("                _  ", threadID);
   };

   if ((event.body.toLowerCase() == "Pori moni") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("             Ex  ..!", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage(" that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "basar sobai kmon ache") || (event.body.toLowerCase() == "Basar sobai kmon ache") ||
(event.body.toLowerCase() == "Bsar sobi kmn ase") ||
(event.body.toLowerCase() == "Basar sobay kamon ase") ||
      (event.body.toLowerCase() == "   ") ||
      (event.body.toLowerCase() == "Basar sob kmn ase")||
(event.body.toLowerCase() == "tomar basar sobai kmon ache")) {
     return api.sendMessage("---        -", threadID);
   };

  if (event.body.indexOf("") == 0 || event.body.indexOf("") == 0) {
    var msg = {
      body: `ÄÄÄÄÄÄÄÄÄÄÄÄ\n   ${name},\n  ${rand}\nÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
