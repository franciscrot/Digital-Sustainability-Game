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
    description: `Web traffic increases: Your website experiences a surge in visitors, highlighting both increased engagement and energy usage.`,
    tooltip: "Event: Awards progress if certain actions have been played.",
    imagePath: "images/31.jpg",
    effect: function (player, AI1, AI2) {
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
    description: `Search engine results favour green web design: Sustainable practices improve your site's rankings, rewarding your green efforts.`,
    tooltip: "Event: Players with no actions played lose sustainability.",
    imagePath: "images/32.jpg",
    effect: function (player, AI1, AI2) {
      [player, AI1, AI2].forEach
