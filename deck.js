// deck.js
window.deck = [
  // ================================
  // 30 ACTION CARDS
  // ================================
  {
    id: 1,
    name: "1: Optimise visuals, video, and media",
    type: "action",
    description: `* Use fewer images where possible.
* Compress images using tools like ShortPixel, TinyPNG, or ImageOptim.
* Prefer efficient formats: SVG for icons, WEBP or AVIF over JPG or PNG.
* Enable lazy loading to defer offscreen media.
* Use responsive image markup or an image resizing API to serve the right resolution for each device.
* Experiment with shallow depth of field, constrained colour palettes, and dark mode styling.
* Write good alt text to enhance accessibility and SEO.
* Optimise video: limit autoplay, compress with Handbrake.fr, and avoid high-resolution defaults.
* Choose green video platforms—YouTube and Vimeo may not be optimal; explore Mave.io.
* Prefer WebM and MP4 over MOV and AVI, depending on compression and resolution needs.`,
    tooltip: "Optimise visuals, video, and media",
    links: `* Sustainable Website Tips in the DHCC Toolkit  
* Try Shortpixel, TinyPNG, ImageOptim, or ImageAlpha for image compression.  
* Use Handbrake.fr to compress video.  
* Explore greener video platforms like Mave.io.`,
    imagePath: "images/1.jpg",
    effect(player, AI1, AI2) { /* optional */ }
  },
  {
    id: 2,
    name: "2: Use green web development practices",
    type: "action",
    description: `* Minify HTML, CSS, and JavaScript to reduce page size and energy use.
* Use clean, efficient code—avoid unnecessary complexity or outdated libraries.
* Cache assets effectively with proper headers and a CDN.
* Benchmark page performance with tools like Lighthouse or EcoGrader.
* Prefer static site generators or server-side rendering where appropriate.
* Use lightweight fonts, limit custom animations, and avoid oversized frameworks.
* Electricity Maps offers a global carbon intensity API to make your front end carbon-aware.`,
    tooltip: "Action: Develop greenly!",
    imagePath: "images/2.jpg",
    effect(player, AI1, AI2) {}
  },
  {
    id: 3,
    name: "3: Streamline user journeys",
    type: "action",
    description: `* Simplify site structure—reduce the number of clicks to reach important content.
* Delete outdated or redundant content to reduce load and confusion.
* Use a clear visual hierarchy with consistent design elements and obvious calls to action.
* Add a search function to help users find content directly.
* Minimise energy-intensive interactions (e.g. unnecessary reloads or live updates).
* Test your website’s usability and fix inefficient navigation flows.`,
    tooltip: "Play this card to simplify user journeys on your website. If you like, describe how terrible it was before, and how amazing it is now.",
    imagePath: "images/6.jpg",
    effect() {}
  },
  {
    id: 4,
    name: "4: Audit your digital dependencies",
    type: "action",
    description: `* Review all third-party plugins, libraries, and trackers on your site.
* Ask: what functionality is truly needed? What’s redundant?
* Consider replacing heavyweight frameworks (like full Bootstrap) with lighter or modular alternatives.
* Use only the parts of libraries you need—avoid default imports that load unused code.
* Replace library functionality with plain CSS or JavaScript if possible.
* Audit cookies, analytics scripts, and embedded services that may load external resources.`,
    tooltip: "If you want, describe some of the weird unnecessary stuff you decided to remove.",
    imagePath: "images/3.jpg",
    effect() {}
  },
  {
    id: 5,
    name: "5: Build green CI/CD pipelines",
    type: "action",
    description: `* Optimise CI/CD pipelines: remove redundant builds, cache dependencies, and reduce test duplication.
* Use carbon-aware scheduling—trigger builds during periods of low grid carbon intensity (Electricity Maps can help).
* Explore GreenOps or Sustainable DevOps (SusDevOps) practices.
* Use infrastructure-as-code to modularise deployments, right-size instances, and enable auto-shutdown defaults.
* Prefer serverless or event-based architectures for reduced idle time.`,
    tooltip: "Build green CI/CD pipelines.",
    imagePath: "images/5.jpg",
    effect() {}
  },
  {
    id: 6,
    name: "6: Choose sustainable tools, languages, and architectures",
    type: "action",
    description: `* Write efficient code—avoid bloated logic, excessive loops, or unnecessary calls.
* Be very cautious of any AI-generated code.
* Consider low-energy languages like Rust and Go.
* Avoid overprovisioning infrastructure; right-size your deployments.
* Explore serverless, container-based, or autoscaling architectures to reduce waste.
* Explore sustainable software resources from Green Software Foundation, Green Web Foundation, and Green Coding Solutions.`,
    tooltip: "Choose sustainable tools, languages, and architectures",
    imagePath: "images/4.jpg",
    effect() {}
  },
  {
    id: 7,
    name: "7: Avoid wasteful or disproportionate methods in data science / ML",
    type: "action",
    description: `* Use CodeCarbon to estimate the carbon footprint of model training and inference.
* Track emissions with Intel RAPL or integrate with OpenTelemetry for service-level visualisation.
* Engage with the AI Energy Score project: https://huggingface.co/spaces/AIEnergyScore/Leaderboard.
* Don’t retrain unnecessarily: explore reusing or fine-tuning existing models when possible.
* BUT consider that a smaller, specialist model might be better in the long-term than a more general purpose one.
* Use model distillation to reduce size and energy cost.
* Optimise training cycles: reduce search space, limit tuning passes, and choose efficient architectures.
* Streamline data movement by cleaning ETL pipelines and avoiding dataset over-fetching.`,
    tooltip: "If you're training models, describe how you’re making them leaner and greener.",
    imagePath: "images/7.jpg",
    effect() {}
  },
  {
    id: 8,
    name: "8: Know which everyday activities are fine",
    type: "action",
    description: `* Try to foster a rough awareness of big, medium, small, and teeny-tiny impacts.
* Then we can pick our battles. People’s attention and energy is limited, and nobody likes being guilt-tripped—let’s focus on the behaviour changes that really matter.
* You may have heard the advice not to send ‘thank you’ emails, to save carbon. But a typical short text email has a completely miniscule impact compared to a single Google search or a ChatGPT query.
* This advice is really a way to individualise responsibility, and a distraction from working together to drive real change.
`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/8.jpg",
    effect() {}
  },
  {
    id: 9,
    name: "9: Use efficient internet connections",
    type: "action",
    description: `* Cellular data connections (like 4G and 5G) use more energy than WiFi
* WiFi uses more energy than ethernet connections (plugging your device in).
* Plug in when you can!`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/9.jpg",
    effect() {}
  },
  {
    id: 10,
    name: "10: Optimise our WiFi network",
    type: "action",
    description: `Optimise our WiFi network for better speed and energy efficiency.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/10.jpg",
    effect() {}
  },
  {
    id: 11,
    name: "11: Don't store data we don't need",
    type: "action",
    description: `Avoid storing redundant data to reduce energy and storage costs.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/11.jpg",
    effect() {}
  },
  {
    id: 12,
    name: "12: Use near-line and off-line storage",
    type: "action",
    description: `Utilise near-line and off-line storage solutions for data that doesn't need instant access.`,
    tooltip: "Action: Mark this card as played.",
    imagePath: "images/12.jpg",
    effect() {}
  },
  {
    id: 13,
    name: "13: Benchmark our digital activities",
    type: "action",
    description: `Benchmark our digital activities by measuring key performance metrics and identifying areas for improvement.`,
    tooltip: "Set a benchmark so we can improve in the future",
    imagePath: "images/13.jpg",
    effect() {}
  },
  {
    id: 14,
    name: "14: Extend our devices' life spans",
    type: "action",
    description: `Extend our devices' life spans through repair, maintenance, and upgrades to reduce waste and cost.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/14.jpg",
    effect() {}
  },
  {
    id: 15,
    name: "15: Use Life Cycle Analysis (LCA)",
    type: "action",
    description: `Apply Life Cycle Analysis (LCA) to understand the environmental impact of your digital operations from start to finish.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/15.jpg",
    effect() {}
  },
  {
    id: 16,
    name: "16: Advocate for right to repair",
    type: "action",
    description: `Advocate for the right to repair by supporting policies and practices that allow consumers to fix and extend the life of their devices.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/16.jpg",
    effect() {}
  },
  {
    id: 17,
    name: "17: Improve our e-waste recycling",
    type: "action",
    description: `Implement improved e-waste recycling processes to ensure responsible disposal and reuse of electronic components.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/17.jpg",
    effect() {}
  },
  {
    id: 18,
    name: "18: Design for humans, not angels",
    type: "action",
    description: `Design interfaces and experiences that are optimised for human use—efficient, intuitive, and user-friendly.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/18.jpg",
    effect() {}
  },
  {
    id: 19,
    name: "19: Check suppliers for greenwashing",
    type: "action",
    description: `Evaluate and verify suppliers to ensure they truly adhere to sustainable and environmentally friendly practices.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/19.jpg",
    effect() {}
  },
  {
    id: 20,
    name: "20: Pivot to policy",
    type: "action",
    description: `Shift your focus to policy advocacy, using this card to drive change in regulatory frameworks for sustainability.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/20.jpg",
    effect() {}
  },
  {
    id: 21,
    name: "21: Pivot to protest",
    type: "action",
    description: `Mobilise public and stakeholder support with protest actions that highlight unsustainable practices.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/21.jpg",
    effect() {}
  },
  {
    id: 22,
    name: "22: Understand green energy procurement",
    type: "action",
    description: `Learn how to procure green energy effectively and integrate renewable sources into your operations.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/22.jpg",
    effect() {}
  },
  {
    id: 23,
    name: "23: Measure our carbon for AI and the cloud",
    type: "action",
    description: `Measure the carbon footprint of your digital activities, especially those related to AI workloads and cloud services.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/23.jpg",
    effect() {}
  },
  {
    id: 24,
    name: "24: Use grid-aware demand management",
    type: "action",
    description: `Implement grid-aware demand management strategies to optimise energy usage in accordance with peak times and grid conditions.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/24.jpg",
    effect() {}
  },
  {
    id: 25,
    name: "25: Know when not to use AI",
    type: "action",
    description: `Identify scenarios where manual processes are more energy-efficient than relying on AI-based solutions.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/25.jpg",
    effect() {}
  },
  {
    id: 26,
    name: "26: Understand different kinds of AI",
    type: "action",
    description: `Examine the various types of AI technologies and evaluate their respective environmental impacts.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/26.jpg",
    effect() {}
  },
  {
    id: 27,
    name: "27: Align measurement to maturity",
    type: "action",
    description: `Tailor your sustainability metrics and measurements to the current maturity level of your organisation.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/27.jpg",
    effect() {}
  },
  {
    id: 28,
    name: "28: Get ready for more carbon tax",
    type: "action",
    description: `Prepare your organisation for rising carbon costs by adjusting strategies and operational priorities.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/28.jpg",
    effect() {}
  },
  {
    id: 29,
    name: "29: Understand our place in the energy transition",
    type: "action",
    description: `Strategically evaluate and position your organisation within the evolving energy transition landscape.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/29.jpg",
    effect() {}
  },
  {
    id: 30,
    name: "30: Update our procurement policies",
    type: "action",
    description: `Review and revise procurement policies to prioritise sustainability and responsible sourcing.`,
    tooltip: "Discuss this action. How does it apply to your organisation?",
    imagePath: "images/30.jpg",
    effect() {}
  },

  // ================================
  // 30 EVENT CARDS
  // ================================
// Event cards 31–60
 {
    id: 31,
    name: "31: Web traffic increases",
    type: "event",
    description: `Web traffic increases: ...`,
    tooltip: "Progress Points for Actions 1, 2, 3, 4, 5, 6.",
    imagePath: "images/31.jpg",
    effect: function (player, AI1, AI2) {
      [player, AI1, AI2].forEach(p => {
        let bonus = 0;
        [1,2,3,4,5,6].forEach(id => { if (p.actionsPlayed.has(id)) bonus += 1; });
        p.progress += bonus;
      });
    }
  },
{
  id: 32,
  name: "32: Search engine results favour green web design",
  type: "event",
  description: `Search engine results favour green web design: Sustainable practices improve your site's rankings, rewarding your green efforts. Gain a Progress Point for each of these actions: 1, 2, 3, 4, 5, 6.`,
  tooltip: "Progress Points for Actions 1, 2, 3, 4, 5, 6.",
  imagePath: "images/32.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [1, 2, 3, 4, 5, 6].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 33,
  name: "33: Subsidies support digital sustainability",
  type: "event",
  description: `Subsidies support digital sustainability: Benefit as funding and incentives promote environmentally friendly practices. Gain a Progress Point for each of these actions: 8, 9, 12, 13.`,
  tooltip: "Progress Points for Actions 8, 9, 12, 13.",
  imagePath: "images/33.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [8, 9, 12, 13].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 34,
  name: "34: Digital sustainability leadership is attracting and retaining the best talent",
  type: "event",
  description: `Digital sustainability leadership is attracting and retaining the best talent: Your green initiatives create a competitive advantage in recruitment. Gain a Progress Point for each of these actions: 8, 9, 11, 18.`,
  tooltip: "Progress Points for Actions 8, 9, 11, 18.",
  imagePath: "images/34.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [8, 9, 11, 18].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 35,
  name: "35: Attitudes shift",
  type: "event",
  description: `Attitudes are shifting. More people embrace solarpunk, wabi sabi digital design, permacomputing, slow media, digital minimalism, unplugging, convivial technology, and decomputing. Convert Progress Points into Sustainability Points.`,
  tooltip: "Progress Points converted into Sustainability Points!",
  imagePath: "images/35.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
  }
},
{
  id: 36,
  name: "36: Climate activism is making an impact",
  type: "event",
  description: `Climate activists are significantly disrupting polluters, leading to tangible environmental benefits. Gain a Progress Point for each of these actions: 19, 21, 24, 25.`,
  tooltip: "Progress Points for Actions 19, 21, 24, 25.",
  imagePath: "images/36.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [19, 21, 24, 25].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 37,
  name: "37: Listing rules change",
  type: "event",
  description: `Listing rules change: New regulatory criteria alter market dynamics for companies that fail to meet sustainability standards. Everyone loses all Progress Points unless they have played 17, 22, or 23.`,
  tooltip: "Lose Progress Points unless you've played 17, 22, 23!",
  imagePath: "images/37.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (!p.actionsPlayed.has(17) && !p.actionsPlayed.has(22) && !p.actionsPlayed.has(23)) {
        p.progress = 0;
      }
    });
  }
},
  
  {
    id: 38,
    name: "38: Boycott",
    type: "event",
    description: `An NGO leads a successful boycott campaign targeting digital sustainability practices that hinder progress. Convert all Progress Points to Sustainability Points.`,
    tooltip: "Convert Progress Points to Sustainability Points!",
    imagePath: "images/38.jpg",
    effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
    }
  },
  {
    id: 39,
    name: "39: Resource scarcity",
    type: "event",
    description: `Water scarcity: This card highlights challenges arising from limited water resources impacting digital infrastructure. All players lose all Progress Points unless they have played 11, 12, or 27.`,
    tooltip: "Lose Progress Points unless you've played 11, 12, or 27.",
    imagePath: "images/39.jpg",
    effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (!p.actionsPlayed.has(11) && !p.actionsPlayed.has(12) && !p.actionsPlayed.has(27)) {
        p.progress = 0;
      }
    });
    }
  },

{
  id: 40,
  name: "40: Price of carbon rises",
  type: "event",
  description: `Policymakers impose a price on carbon emissions, reflecting the true environmental cost of digital operations. Gain a Progress Point for each of these actions: 19, 23, 27, 28.`,
  tooltip: "Gain Progress Points for Actions 19, 23, 27, 28.",
  imagePath: "images/40.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [19, 28, 23, 27].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 41,
  name: "41: New data storage medium",
  type: "event",
  description: `New data storage medium: Leverage emerging technologies to store data more efficiently and sustainably. Gain a Progress Point for each of these actions: 11, 12, 27, 30.`,
  tooltip: "Event: Gain progress for actions 11, 12, 27, 30.",
  imagePath: "images/41.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [11, 12, 30, 27].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 42,
  name: "42: New e-waste laws",
  type: "event",
  description: `A new law allocates responsibility for e-waste among producers, retailers, and corporate customers, driving greener practices. Gain a progress point for each of these actions: 24, 15, 16, 17.`,
  tooltip: "Event: Gain progress for actions 14, 15, 16, 17.",
  imagePath: "images/42.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [14, 15, 16, 17].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 43,
  name: "43: Shareholder activism",
  type: "event",
  description: `Shareholders mobilise, using their financial influence to push companies toward more sustainable practices. Convert all Progress Points into Sustainability Points.`,
  tooltip: "Event: Convert all progress into sustainability.",
  imagePath: "images/43.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
  }
},
{
  id: 44,
  name: "44: ESG gets a make-over",
  type: "event",
  description: `ESG gets a make-over: Modernise your environmental, social, and governance practices for better sustainability results. Gain a Progress Point for each of these actions: 7, 17, 20, 22.`,
  tooltip: "Event: Gain progress for actions 7, 17, 20, 22.",
  imagePath: "images/44.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [7, 17, 20, 22].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 45,
  name: "45: Low carbon tech disruptions",
  type: "event",
  description: `Low carbon tech disruptions: Breakthroughs in low carbon technology create both opportunities and challenges. Lose all Progress Points unless you have played one of these actions: 10, 12, or 23.`,
  tooltip: "Event: Players without actions 10, 12, or 23 lose all progress.",
  imagePath: "images/45.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (![10, 12, 23].some(id => p.actionsPlayed.has(id))) {
        p.progress = 0;
      }
    });
  }
},
{
  id: 46,
  name: "46: Reporting requirements tighten",
  type: "event",
  description: `Your organisation is now legally mandated to provide real-time reports on climate-related risks and opportunities. Gain a Progress Point for each of these actions: 7, 13, 15, 19.`,
  tooltip: "Event: Gain progress for actions 7, 13, 15, 19.",
  imagePath: "images/46.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [7, 13, 15, 19].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 47,
  name: "47: Impairment law gets a reboot",
  type: "event",
  description: `Organisations must now disclose when an asset becomes stranded, triggering a swift revaluation of its worth. Gain a Progress Point for each of these actions: 14, 16, 18, 30.`,
  tooltip: "Event: Gain progress for actions 14, 16, 30, 18.",
  imagePath: "images/47.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [14, 16, 30, 18].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 48,
  name: "48: Climate impacts disrupt supply chains",
  type: "event",
  description: `Global events interfere with production and logistics, challenging sustainable practices. Gain a Progress Point for each of these actions: 10, 16, 19, 25.`,
  tooltip: "Event: Gain progress for actions.",
  imagePath: "images/48.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [19, 25, 16, 10].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 49,
  name: "49: Global carbon price",
  type: "event",
  description: `As governments adjust policies, the true cost of carbon emissions becomes a market reality. Gain a Progress Point for each of these actions: 13, 23, 24, 28.`,
  tooltip: "Event: Gain progress for actions.",
  imagePath: "images/49.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [28, 23, 24, 13].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 50,
  name: "50: Digital divide closes",
  type: "event",
  description: `Digital divide closes: Increased digital access narrows socioeconomic gaps while accelerating progress. Gain a progress point for each of these actions: 14, 18, 26, 29.`,
  tooltip: "Event: Gain progress for actions.",
  imagePath: "images/50.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [18, 26, 29, 14].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},

{
  id: 51,
  name: "51: Technological breakthrough",
  type: "event",
  description: `A technological breakthrough propels digital sustainability forward, opening up new pathways for progress. All players convert all Progress Points into Sustainability Points.`,
  tooltip: "Event: Convert all progress into sustainability.",
  imagePath: "images/51.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
  }
},
{
  id: 52,
  name: "52: Geopolitical disruption",
  type: "event",
  description: `Global political shifts and conflicts influence sustainability policies and practices. Players who have not played actions 10, 18, or 29 lose all Progress Points.`,
  tooltip: "Event: Players without actions 10, 18, or 29 lose all progress.",
  imagePath: "images/52.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (![10, 18, 29].some(id => p.actionsPlayed.has(id))) {
        p.progress = 0;
      }
    });
  }
},
{
  id: 53,
  name: "53: Vaporware",
  type: "event",
  description: `xSpice's data center on the Moon is a flop, exemplifying overhyped technology failures. Players who have not played actions 8, 20, or 26 lose all Progress Points.`,
  tooltip: "Event: Players without actions 8, 20, or 26 lose all progress.",
  imagePath: "images/53.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (![8, 20, 26].some(id => p.actionsPlayed.has(id))) {
        p.progress = 0;
      }
    });
  }
},
{
  id: 54,
  name: "54: Global South Green New Deal",
  type: "event",
  description: `Ambitious policy initiatives empower emerging markets to drive sustainable growth. All players convert all Progress Points into Sustainability Points.`,
  tooltip: "Event: Convert all progress into sustainability.",
  imagePath: "images/54.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
  }
},
{
  id: 55,
  name: "55: Tech giant fails to deliver",
  type: "event",
  description: `Tech giant Giggle fails to meet its decarbonisation pledges, undermining public trust in corporate sustainability promises. Gain a Progress Point for each of these actions you have played: 20, 21, 25, 30.`,
  tooltip: "Event: Gain progress for actions 20, 21, 25, 30.",
  imagePath: "images/55.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [20, 21, 25, 30].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 56,
  name: "56: Negative emissions technologies are not scaling up",
  type: "event",
  description: `Negative emissions technologies struggle to deliver, spotlighting the need for fundamental carbon reductions. Gain a Progress Point for each of these actions you have played: 20, 21, 24, 29`,
  tooltip: "Event: Gain progress for actions.",
  imagePath: "images/56.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [20, 21, 29, 24].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 57,
  name: "57: Geoengineering efforts are deferring carbon reduction",
  type: "event",
  description: `Geoengineering creates temporary fixes but delays meaningful carbon reductions. Lose all Progress Points unless you have played actions 21, 25, or 28.`,
  tooltip: "Event: Players without actions 21, 25, or 28 lose all progress.",
  imagePath: "images/57.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (![21, 25, 28].some(id => p.actionsPlayed.has(id))) {
        p.progress = 0;
      }
    });
  }
},
{
  id: 58,
  name: "58: Carbon leakage",
  type: "event",
  description: `Carbon leakage: Emissions shift across borders due to uneven regulatory environments. Gain a Progress Point for each of these actions you have played: 22, 26, 28, 29.`,
  tooltip: "Event: Gain progress for actions 22, 28, 26, 29.",
  imagePath: "images/58.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      let bonus = 0;
      [22, 28, 26, 29].forEach(id => {
        if (p.actionsPlayed.has(id)) bonus += 1;
      });
      p.progress += bonus;
    });
  }
},
{
  id: 59,
  name: "59: Major climate impact",
  type: "event",
  description: `Extreme weather events and systemic disruptions drive a sense of urgency in climate response. Lose all Progress Points unless you have played 10, 15, or 30.`,
  tooltip: "Event: Players without actions 10, 15, or 30 lose all progress.",
  imagePath: "images/59.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      if (![10, 15, 30].some(id => p.actionsPlayed.has(id))) {
        p.progress = 0;
      }
    });
  }
},
{
  id: 60,
  name: "60: Big policy shift",
  type: "event",
  description: `Landmark changes in policy reshape global approaches to sustainability. All players convert all Progress Points into Sustainability Points.`,
  tooltip: "Event: Convert all progress into sustainability.",
  imagePath: "images/60.jpg",
  effect: function (player, AI1, AI2) {
    [player, AI1, AI2].forEach(p => {
      p.sustainability += p.progress;
      p.progress = 0;
    });
  }
}
];


