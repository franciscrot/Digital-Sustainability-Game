const deck = [
  // ================================
  // 30 ACTION CARDS
  // ================================
  {
    id: 1,
    name: "1: Optimise our visuals and video",
    type: "action",
    description: `* Use fewer images.
* Compress images (try ShortPixel).
* Use SVG or GIF for logos and icons.
* Use WEBP or AVIF, not JPG or PNG.
* Enable lazy loading.
* Use responsive image markup and/or an image resizing API to serve images at the correct resolution.
* Experiment with shallow depth of field, constrained palettes, and dark colours.
* Perfect your image alt text.
* Try tools like Shortpixel, TinyPNG, ImageOptim, and ImageAlpha to minimise image file sizes.
* Use video sparingly if at all. Compress video with tools like Handbrake.fr.
* YouTube or Vimeo embeds might not be optimal. Try platforms like Mave.io.
* WebM and MP4 formats sometimes have the edge on MOV and AVI. But it really all depends on resolution and compression.
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 2,
    name: "2: Minify our code",
    type: "action",
    description: `‘Minifying’ is a process of removing unnecessary whitespace and line breaks in HTML, CSS and JavaScript to reduce the file size.
Many text editors have plug-ins or packages to minify code.
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/2.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 3,
    name: "3: Audit third-party plug-ins and dependencies",
    type: "action",
    description: `Evaluate how your website uses third-party plugins and tools.
How much “weight” do they add to your website? What features do you really need?
Code libraries (like jQuery) and frameworks (like Bootstrap) are collections of pre-written code that developers use to save time.
Use modular libraries that let you import only the parts you need. 
Some functionalities that once needed external libraries can now be done with plain vanilla CSS and JavaScript.
Play this card to review your website, and only load what you really need!
`,
    tooltip: "If you want, describe some of the weird unnecessary stuff you decided to remove.",
    imagePath: "images/3.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 4,
    name: "4: Benchmark web presence",
    type: "action",
    description: `* Estimate the carbon impact of your web presence.
* 'Page weight' is the transfer size of a page in kilobytes, typically on a first visit.
* Check out www.websitecarbon.com from Wholegrain Digital.
* And EcoGrader.com from Mightybytes.
* CO2.js from the Green Web Foundation is a JavaScript library to help web developers estimate their emissions.
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/4.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 5,
    name: "5: Use caching",
    type: "action",
    description: `* Moving data over a network uses energy -- probably. Caching is here to help!
* When a user visits your website, some data such as images, CSS, and JavaScript files can be stored (“cached”) on the user’s device, or on a Content Delivery Network (CDN). 
* If they return, the browser can load these resources from the user’s device or a nearby CDN datacentre, instead of fetching them from the server again.  
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/5.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 6,
    name: "6: Simplify user journeys",
    type: "action",
    description: `* Use consistent visual conventions and a clear visual hierarchy. Employ prominent call-to-action buttons.
* Think about including a search function.
* Delete old content.
* Test your website.
`,
    tooltip: "Play this card to simplify user journeys on your website. If you like, describe how terrible it was before, and how amazing it is now.",
    imagePath: "images/6.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 7,
    name: "7: Optimise videoconferencing",
    type: "action",
    description: `* Check for recent comparison of the sustainability of different videoconferencing softwares, and choose one that work for you.
* Functions like “turn off incoming video” can save bandwidth.
* It’s important to see one another’s faces sometimes. But at other times, it’s OK just to hear each other’s voices.
.`,
    tooltip: "If you like, describe how your attitudes and habits to videoconferencing shift.",
    imagePath: "images/7.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 8,
    name: "8: Know which everyday activities are fine",
    type: "action",
    description: `Know which everyday activities are fine
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/8.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 9,
    name: "9: Protect Wetlands",
    type: "action",
    description: `Raise funds and awareness to safeguard local wetlands.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/9.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 10,
    name: "10: Community Solar Program",
    type: "action",
    description: `Invest in shared solar panels for the neighborhood.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/10.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 11,
    name: "11: Urban Garden Initiative",
    type: "action",
    description: `Turn unused urban spaces into communal vegetable gardens.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/11.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 12,
    name: "12: Rainwater Harvesting",
    type: "action",
    description: `Set up rain barrels and systems to collect runoff.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/12.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 13,
    name: "13: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/13.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 14,
    name: "14: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/14.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 15,
    name: "15: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/15.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 16,
    name: "16: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/16.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 17,
    name: "17: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/17.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 18,
    name: "18: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/18.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 19,
    name: "19: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/19.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 20,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/20.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 21,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/21.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 22,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/22.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 23,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/23.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 24,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/24.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 25,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/25.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 26,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/26.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 27,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/27.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 28,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/28.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 29,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/29.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 30,
    name: "xx: ",
    type: "action",
    description: `Description.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/30.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },


  // ================================
  // 30 EVENT CARDS
  // ================================
  {
    id: 31,
    name: "31: Green Audit",
    type: "event",
    description: `Description`,
    tooltip: "Event: Awards progress if certain actions have been played.",
    imagePath: "images/31.jpg",
    effect: function (player, AI1, AI2) {
      // Award +2 progress for each of these played: #1, #2, #3
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        if (p.actionsPlayed.has(1)) bonus += 2;
        if (p.actionsPlayed.has(2)) bonus += 2;
        if (p.actionsPlayed.has(3)) bonus += 2;
        p.progress += bonus;
      });
    }
  },
  {
    id: 32,
    name: "32: Pollution Scandal",
    type: "event",
    description: `Description`,
    tooltip: "Event: Players with no actions played lose sustainability.",
    imagePath: "images/14.jpg",
    effect: function (player, AI1, AI2) {
      // If a player hasn't played any actions, -3 sustainability
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.size === 0) {
          p.sustainability -= 3;
        }
      });
    }
  },
  {
    id: 33,
    name: "33: Community Vote",
    type: "event",
    description: `Description`,
    tooltip: "Event: Rewards those with multiple specific actions completed.",
    imagePath: "images/15.jpg",
    effect: function (player, AI1, AI2) {
      // If a player has at least 2 of these (#1, #4, #6, #7), they gain +3 progress
      [player, AI1, AI2].forEach(p => {
        let count = 0;
        [1, 4, 6, 7].forEach(id => {
          if (p.actionsPlayed.has(id)) count++;
        });
        if (count >= 2) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 34,
    name: "34: Sustainability Expo",
    type: "event",
    description: `Description`,
    tooltip: "Event: Boosts sustainability if players did relevant actions.",
    imagePath: "images/16.jpg",
    effect: function (player, AI1, AI2) {
      // +2 sustainability for each of #5, #6, #7 if played
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        if (p.actionsPlayed.has(5)) bonus += 2;
        if (p.actionsPlayed.has(6)) bonus += 2;
        if (p.actionsPlayed.has(7)) bonus += 2;
        p.sustainability += bonus;
      });
    }
  },
  {
    id: 35,
    name: "35: Emissions Report",
    type: "event",
    description: `Description`,
    tooltip: "Event: Awards or deducts sustainability based on certain actions.",
    imagePath: "images/17.jpg",
    effect: function (player, AI1, AI2) {
      // For each player: +2 sustainability if #2 or #4 is played, else -1
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(2) || p.actionsPlayed.has(4)) {
          p.sustainability += 2;
        } else {
          p.sustainability -= 1;
        }
      });
    }
  },
  {
    id: 36,
    name: "36: Energy Crisis",
    type: "event",
    description: `Description`,
    tooltip: "Event: Rewards alternative energy actions or penalizes unprepared.",
    imagePath: "images/18.jpg",
    effect: function (player, AI1, AI2) {
      // If #4 (EV push) or #10 (solar program) is played, +2 progress. Otherwise, -1.
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(4) || p.actionsPlayed.has(10)) {
          p.progress += 2;
        } else {
          p.progress -= 1;
        }
      });
    }
  },
  {
    id: 37,
    name: "19: Climate Summit",
    type: "event",
    description: `Description`,
    tooltip: "Event: Grants extra progress for certain high-impact actions.",
    imagePath: "images/19.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 38,
    name: "20: Corporate Backlash",
    type: "event",
    description: `Description`,
    tooltip: "Event: Penalizes those who disrupt corporate interests.",
    imagePath: "images/20.jpg",
    effect: function (player, AI1, AI2) {
      // If #8 (Eco Blog) or #12 (Rainwater Harvesting) is played, lose 2 sustainability
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(8) || p.actionsPlayed.has(12)) {
          p.sustainability -= 2;
        }
      });
    }
  },
  {
    id: 39,
    name: "39: ",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 40,
    name: "40: ",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 41,
    name: "41: ",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 42,
    name: "42: ",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 43,
    name: "43: ",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 44,
    name: "44: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 45,
    name: "45: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 46,
    name: "46: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 47,
    name: "47: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 48,
    name: "48: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 49,
    name: "49: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 50,
    name: "50: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 51,
    name: "51: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 52,
    name: "52: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 53,
    name: "53: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 54,
    name: "54: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 55,
    name: "55: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 56,
    name: "56: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 57,
    name: "57: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 58,
    name: "58: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 59,
    name: "59: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
  {
    id: 60,
    name: "60: ",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/1.jpg",
    effect: function (player, AI1, AI2) {
      // If #9 (Protect Wetlands) or #11 (Urban Garden) is played, +3 progress
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
];
