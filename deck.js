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
    description: `* Check for recent comparisons of the sustainability of different videoconferencing softwares, and choose one that works for you.
* Features like “turn off incoming video” can save bandwidth.
* While it's important to see each other sometimes, sometimes it's best to just rely on audio.
`,
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
    description: `Identify which everyday activities on your site or in your processes are low impact.`,
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
    description: `Use efficient internet connections that consume less energy and improve performance.`,
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
    description: `Optimise our WiFi network for better speed and energy efficiency.`,
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
    description: `Avoid storing redundant data to reduce energy and storage costs.`,
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
    description: `Utilise near-line and off-line storage solutions for data that doesn't need instant access.`,
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
    description: `Benchmark our digital activities by measuring key performance metrics and identifying areas for improvement.`,
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
    description: `Extend our devices' life spans through repair, maintenance, and upgrades to reduce waste and cost.`,
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
    description: `Apply Life Cycle Analysis (LCA) to understand the environmental impact of your digital operations from start to finish.`,
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
    description: `Advocate for the right to repair by supporting policies and practices that allow consumers to fix and extend the life of their devices.`,
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
    description: `Implement improved e-waste recycling processes to ensure responsible disposal and reuse of electronic components.`,
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
    description: `Design interfaces and experiences that are optimised for human use—efficient, intuitive, and user-friendly.`,
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
    description: `Evaluate and verify suppliers to ensure they truly adhere to sustainable and environmentally friendly practices.`,
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
    description: `Shift your focus to policy advocacy, using this card to drive change in regulatory frameworks for sustainability.`,
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
    description: `Mobilise public and stakeholder support with protest actions that highlight unsustainable practices.`,
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
    description: `Learn how to procure green energy effectively and integrate renewable sources into your operations.`,
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
    description: `Measure the carbon footprint of your digital activities, especially those related to AI workloads and cloud services.`,
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
    description: `Implement grid-aware demand management strategies to optimise energy usage in accordance with peak times and grid conditions.`,
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
    description: `Identify scenarios where manual processes are more energy-efficient than relying on AI-based solutions.`,
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
    description: `Examine the various types of AI technologies and evaluate their respective environmental impacts.`,
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
    description: `Tailor your sustainability metrics and measurements to the current maturity level of your organisation.`,
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
    description: `Prepare your organisation for rising carbon costs by adjusting strategies and operational priorities.`,
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
    description: `Strategically evaluate and position your organisation within the evolving energy transition landscape.`,
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
    description: `Review and revise procurement policies to prioritise sustainability and responsible sourcing.`,
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
    description: `Web traffic increases: Your website experiences a surge in visitors, highlighting both increased engagement and energy usage. Gain a Progress Point for each of these actions: 1, 2, 3, 4, 5, 6.`,
    tooltip: "Event: Awards progress if certain actions have been played.",
    imagePath: "images/31.jpg",
    effect: function (player, AI1, AI2) {
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        if (p.actionsPlayed.has(1)) bonus += 1;
        if (p.actionsPlayed.has(2)) bonus += 1;
        if (p.actionsPlayed.has(3)) bonus += 1;
        if (p.actionsPlayed.has(4)) bonus += 1;
        if (p.actionsPlayed.has(5)) bonus += 1;
        if (p.actionsPlayed.has(6)) bonus += 1;
        p.progress += bonus;
      });
    }
  },
  {
    id: 32,
    name: "32: Search engine results favour green web design",
    type: "event",
    description: `Search engine results favour green web design: Sustainable practices improve your site's rankings, rewarding your green efforts.`,
    tooltip: "Event: Players with no actions played lose sustainability.",
    imagePath: "images/32.jpg",
effect: function (player, AI1, AI2) {
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        if (p.actionsPlayed.has(1)) bonus += 1;
        if (p.actionsPlayed.has(2)) bonus += 1;
        if (p.actionsPlayed.has(3)) bonus += 1;
        if (p.actionsPlayed.has(4)) bonus += 1;
        if (p.actionsPlayed.has(5)) bonus += 1;
        if (p.actionsPlayed.has(6)) bonus += 1;
        p.progress += bonus;
      });
    }
  },
  {
    id: 33,
    name: "33: Subsidies support digital sustainability",
    type: "event",
    description: `Subsidies support digital sustainability: Benefit as funding and incentives promote environmentally friendly practices.`,
    tooltip: "Event: Rewards those with multiple specific actions completed.",
    imagePath: "images/33.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Digital sustainability leadership is attracting and retaining the best talent: Your green initiatives create a competitive advantage in recruitment.`,
    tooltip: "Event: Boosts sustainability if players did relevant actions.",
    imagePath: "images/34.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Attitudes are shifting. More people embrace solarpunk, wabi sabi digital design, permacomputing, slow media, digital minimalism, decomputing, and unplugging.`,
    tooltip: "Event: Awards or deducts sustainability based on certain actions.",
    imagePath: "images/35.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Climate activists are significantly disrupting polluters, leading to tangible environmental benefits.`,
    tooltip: "Event: Rewards alternative energy actions or penalizes unprepared.",
    imagePath: "images/36.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Listing rules change: New regulatory criteria alter market dynamics for companies that fail to meet sustainability standards.`,
    tooltip: "Event: Stock markets stop listing unsustainable companies.",
    imagePath: "images/37.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `An NGO leads a successful boycott campaign targeting digital sustainability practices that hinder progress.`,
    tooltip: "Event: Penalizes those who disrupt corporate interests.",
    imagePath: "images/38.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Water scarcity: This card highlights challenges arising from limited water resources impacting digital infrastructure.`,
    tooltip: "Play this event card now?",
    imagePath: "images/39.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Policymakers impose a price on carbon emissions, reflecting the true environmental cost of digital operations.`,
    tooltip: "Play this event card now?",
    imagePath: "images/40.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `New data storage medium: Leverage emerging technologies to store data more efficiently and sustainably.`,
    tooltip: "Play this event card now?",
    imagePath: "images/41.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `A new law allocates responsibility for e-waste among producers, retailers, and corporate customers, driving greener practices.`,
    tooltip: "Play this event card now?",
    imagePath: "images/42.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Shareholders mobilise, using their financial influence to push companies toward more sustainable practices.`,
    tooltip: "Play this event card now?",
    imagePath: "images/43.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `ESG gets a make-over: Modernise your environmental, social, and governance practices for better sustainability results.`,
    tooltip: "Play this event card now?",
    imagePath: "images/44.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Low carbon tech disruptions: Breakthroughs in low carbon technology create both opportunities and challenges.`,
    tooltip: "Play this event card now?",
    imagePath: "images/45.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Your organisation is now legally mandated to provide real-time reports on climate-related risks and opportunities.`,
    tooltip: "Play this event card now?",
    imagePath: "images/46.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Organisations must now disclose when an asset becomes stranded, triggering a swift revaluation of its worth.`,
    tooltip: "Play this event card now?",
    imagePath: "images/47.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Climate impacts disrupt supply chains: Global events interfere with production and logistics, challenging sustainable practices.`,
    tooltip: "Play this event card now?",
    imagePath: "images/48.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Global carbon price: As governments adjust policies, the true cost of carbon emissions becomes a market reality.`,
    tooltip: "Play this event card now?",
    imagePath: "images/49.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Digital divide closes: Increased digital access narrows socioeconomic gaps while accelerating progress.`,
    tooltip: "Play this event card now?",
    imagePath: "images/50.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `A technological breakthrough propels digital sustainability forward, opening up new pathways for progress.`,
    tooltip: "Play this event card now?",
    imagePath: "images/51.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Geopolitical disruption: Global political shifts and conflicts influence sustainability policies and practices.`,
    tooltip: "Play this event card now?",
    imagePath: "images/52.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Event: xSpice's data center on the Moon is a flop, exemplifying overhyped technology failures.`,
    tooltip: "Play this event card now?",
    imagePath: "images/53.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Global South Green New Deal: Ambitious policy initiatives empower emerging markets to drive sustainable growth.`,
    tooltip: "Play this event card now?",
    imagePath: "images/54.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Tech giant Giggle fails to meet its decarbonisation pledges, undermining public trust in corporate sustainability promises.`,
    tooltip: "Play this event card now?",
    imagePath: "images/55.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Negative emissions technologies are not scaling up as expected, highlighting challenges in removing carbon effectively.`,
    tooltip: "Play this event card now?",
    imagePath: "images/56.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Geoengineering efforts are deferring carbon reduction by creating temporary fixes rather than addressing root causes.`,
    tooltip: "Play this event card now?",
    imagePath: "images/57.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Carbon leakage: Unintended shifts in emissions occur when production moves to regions with lax regulations.`,
    tooltip: "Play this event card now?",
    imagePath: "images/58.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Major climate impact: Extreme weather events and systemic changes drive rapid and noticeable shifts in the environment.`,
    tooltip: "Play this event card now?",
    imagePath: "images/59.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Big policy shift: Landmark changes in regulations reshape sustainability standards across industries.`,
    tooltip: "Play this event card now?",
    imagePath: "images/60.jpg",
    effect: function (player, AI1, AI2) {
      [player, AI1, AI2].forEach(p => {
        if (p.actionsPlayed.has(9) || p.actionsPlayed.has(11)) {
          p.progress += 3;
        }
      });
    }
  },
];
