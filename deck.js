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
* Use image optimisation to reduce file sizes without compromising quality.
* Limit video use where possible, and compress any video files.
* YouTube or Vimeo embeds might not be optimal. Search for greener platforms.
* WebM and MP4 formats sometimes have the edge on MOV and AVI. But it really all depends on resolution and compression.
`,
    tooltip: "Action: Optimise!",
    links: `* Sustainable Website Tips in the DHCC Toolkit
* To minimise image file sizes on your website, try tools like Shortpixel, TinyPNG, ImageOptim, and ImageAlpha.
* Use video sparingly on your website (if at all). Compress video with tools like Handbrake.fr.
* YouTube or Vimeo embeds might not be optimal. Try platforms like Mave.io.`,
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
    tooltip: "Action: Minify!",
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
    name: "9: Use efficient internet connections",
    type: "action",
    description: ``,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/9.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 10,
    name: "10: Optimise our WiFi network",
    type: "action",
    description: `Optimise our WiFi network.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/10.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 11,
    name: "11: Don't store data we don't need",
    type: "action",
    description: `Don't store data we don't need.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/11.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 12,
    name: "12: Use near-line and off-line storage",
    type: "action",
    description: `Use near-line and off-line storage.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/12.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
  {
    id: 13,
    name: "13: Benchmark our digital activities",
    type: "action",
    description: `Description.`,
    tooltip: "Set a benchmark so we can improve in the future",
    imagePath: "images/13.jpg",
    effect: function (player, AI1, AI2) {
      player.actionsPlayed.add(this.id);
    }
  },
{
    id: 14,
    name: "14: Extend our devices' life spans",
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
    name: "15: Use Life Cycle Analysis (LCA)",
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
    name: "16: Advocate for right to repair",
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
    name: "17: Improve our e-waste recycling",
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
    name: "18: Design for humans, not angels",
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
    name: "19: Check suppliers for greenwashing",
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
    name: "20: Pivot to policy",
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
    name: "21: Pivot to protest",
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
    name: "22: Understand green energy procurement",
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
    name: "23: Measure our carbon for AI and the cloud",
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
    name: "24: Use grid-aware demand management",
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
    name: "25: Know when not to use AI",
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
    name: "26: Understand different kinds of AI",
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
    name: "27: Align measurement to maturity",
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
    name: "28: Get ready for more carbon tax",
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
    name: "29: Understand our place in the energy transition",
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
    name: "30: Update our procurement policies",
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
    name: "31: Web traffic increases",
    type: "event",
    description: `Description`,
    tooltip: "Event: Awards progress if certain actions have been played.",
    imagePath: "images/31.jpg",
    effect: function (player, AI1, AI2) {
      // Award +1 progress for each of these played: #1, #2, #3
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        if (p.actionsPlayed.has(1)) bonus += 1;
        if (p.actionsPlayed.has(2)) bonus += 1;
        if (p.actionsPlayed.has(3)) bonus += 1;
        p.progress += bonus;
      });
    }
  },
  {
    id: 32,
    name: "32: Search engine results favour green web design",
    type: "event",
    description: `Description`,
    tooltip: "Event: Players with no actions played lose sustainability.",
    imagePath: "images/32.jpg",
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
    name: "33: Subsidies support digital sustainability",
    type: "event",
    description: `Description`,
    tooltip: "Event: Rewards those with multiple specific actions completed.",
    imagePath: "images/33.jpg",
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
    name: "34: Digital sustainability leadership is attracting and retaining the best talent",
    type: "event",
    description: `Description`,
    tooltip: "Event: Boosts sustainability if players did relevant actions.",
    imagePath: "images/34.jpg",
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
    name: "35: Attitudes shift",
    type: "event",
    description: `Attitudes are shifting. More people are getting into solarpunk, wabi sabi digital design, permacomputing, slow media, digital minimalism, decomputing, and unplugging.`,
    tooltip: "Event: Awards or deducts sustainability based on certain actions.",
    imagePath: "images/35.jpg",
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
    name: "36: Climate activism is making an impact",
    type: "event",
    description: `Climate activists are getting really good at disrupting polluters`,
    tooltip: "Event: Rewards alternative energy actions or penalizes unprepared.",
    imagePath: "images/36.jpg",
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
    name: "37: Listing rules change",
    type: "event",
    description: `Description`,
    tooltip: "Event: Stock markets stop listing unsustainable companies.",
    imagePath: "images/37.jpg",
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
    name: "38: Boycott",
    type: "event",
    description: `An NGO leads a successful boycotting campaign targetting digital sustainability`,
    tooltip: "Event: Penalizes those who disrupt corporate interests.",
    imagePath: "images/38.jpg",
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
    name: "39: Water scarcity",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/39.jpg",
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
    name: "40: Price of carbon rises",
    type: "event",
    description: `Policymakers can put a 'price' on carbon emissions in various ways, including carbon taxes.`,
    tooltip: "Play this event card now?",
    imagePath: "images/40.jpg",
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
    name: "41: New data storage medium",
    type: "event",
    description: `Description`,
    tooltip: "Play this event card now?",
    imagePath: "images/41.jpg",
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
    name: "42: New e-waste laws",
    type: "event",
    description: `A new law shares the responsibility for e-waste between producers, retailers, and corporate customers`,
    tooltip: "Play this event card now?",
    imagePath: "images/42.jpg",
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
    name: "43: Shareholder activism",
    type: "event",
    description: `Shareholders are using their voices, their votes, their power to disinvest, and even launching lawsuits`,
    tooltip: "Play this event card now?",
    imagePath: "images/43.jpg",
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
    name: "44: ESG gets a make-over",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/44.jpg",
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
    name: "45: Low carbon tech disruptions",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/45.jpg",
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
    name: "46: Reporting requirements tighten",
    type: "event",
    description: `Event: Your kind of organisation is now legally mandated to provide real-time reports on climate-related risks and opportunities`,
    tooltip: "Play this event card now?",
    imagePath: "images/46.jpg",
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
    name: "47: Impairment law gets a reboot",
    type: "event",
    description: `Event: Organisations must now reveal when an asset becomes stranded (loses value) in a much more timely and accurate way`,
    tooltip: "Play this event card now?",
    imagePath: "images/47.jpg",
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
    name: "48: Climate impacts disrupt supply chains",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/48.jpg",
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
    name: "49: Global carbon price",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/49.jpg",
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
    name: "50: Digital divide closes",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/50.jpg",
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
    name: "51: Technological breakthrough",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/51.jpg",
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
    name: "52: Geopolitical disruption",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/52.jpg",
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
    name: "53: Vaporware",
    type: "event",
    description: `Event: xSpice's data center on the Moon is a flop`,
    tooltip: "Play this event card now?",
    imagePath: "images/53.jpg",
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
    name: "54: Global South Green New Deal",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/54.jpg",
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
    name: "55: Tech giant fails to deliver",
    type: "event",
    description: `Event: Tech giant Giggle fails to meet its decarbonisation pledges`,
    tooltip: "Play this event card now?",
    imagePath: "images/55.jpg",
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
    name: "56: Negative emissions technologies are not scaling up",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/56.jpg",
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
    name: "57: Geoengineering efforts are deferring carbon reduction",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/57.jpg",
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
    name: "58: Carbon leakage",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/58.jpg",
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
    name: "59: Major climate impact",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/59.jpg",
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
    name: "60: Big policy shift",
    type: "event",
    description: `Event .`,
    tooltip: "Play this event card now?",
    imagePath: "images/60.jpg",
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
