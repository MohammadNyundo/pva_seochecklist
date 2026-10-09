/* Prolific VA — GEO & SEO checklist (revised 8 Oct 2026)
   Item = [title, description, source (optional), tag (optional: "num" = needs the new number)] */

const PROMPTS = [
  ["Digital marketing", [
    "Who does SEO for hotels and tour operators in Diani?",
    "How do I get my hotel to show up on ChatGPT and Google?",
    "How much does digital marketing for a hotel in Kenya cost?",
    "Best digital marketing company for tour operators in Kenya",
    "Is SEO worth it for a small guest house in Diani?"]],
  ["Websites", [
    "Who builds websites for hotels and tour operators in Diani?",
    "How much does a business website cost in Kenya?",
    "Website with online booking and M-Pesa payment for a Kenyan hotel",
    "Best web developer on the Kenyan coast for tourism businesses"]],
  ["Safina MIS", [
    "Hotel booking software in Kenya for a small guest house",
    "Alternative to Booking.com for direct bookings in Kenya",
    "ResRequest alternative for small Kenyan hotels",
    "How do I stop double bookings at my guest house?"]],
  ["Jahazi POS", [
    "POS system in Kenya with KRA eTIMS and M-Pesa",
    "POS software for a shop with walk-in, online and field sales",
    "POS for a furniture, jewellery or interior design shop in Kenya",
    "POS with an e-menu for a restaurant in Kenya"]],
  ["Brand check", [
    "What is Prolific VA?",
    "Is Prolific VA legit? Any reviews?"]]
];

const DATA = [
  { prompts: true },

  {
    icon: "0", title: "Register the new number, then baseline", time: "Do first. Nothing site-wide starts before this",
    intro: "The Airtel line drops calls, and a number is one of the facts AI repeats and checks. Settle it once, then publish it everywhere in one pass.",
    items: [
      ["Register the new business line", "Pick a line with reliable voice calls. Decide roles up front: new line = the number people ring, Airtel = WhatsApp only (or the reverse). Set up WhatsApp Business on the WhatsApp line with a greeting and an away message.", "Your call, given the Airtel problem"],
      ["Write one master business record", "One block you copy from every time: name exactly as 'Prolific VA', Diani address, phone numbers in +254 format, email, hours, a one-line description, service areas (Diani, Ukunda, Mombasa, Kwale County, Coastal Kenya) and categories. Name, address and phone must read identically on every surface AI reads.", "BrightLocal local-AI study; Propellic finding 2"],
      ["Find every place the old numbers live", "Run <code>grep -rnE '752 ?012 ?827|704 ?879 ?998' .</code> in the site folder. It catches tel: links, wa.me links, JSON-LD, footers, the call and demo strips and llms.txt. An older footer used 0704 879 998, so check for a stray second number.", "", ""],
      ["Run the Day-0 baseline before changing anything", "Use the prompt bank above. Run each prompt 3 times in ChatGPT, Gemini and Google AI Mode (add Perplexity, Copilot and Claude if you can). Log: were we named, cited, in what position, who else was named, and which outside domains were cited. Also check Google Maps and normal results for 'web design Diani' and 'hotel software Kenya'.", "BrightLocal: a business that showed up once came back only about half the time"]
    ]
  },
  {
    pause: true, gate: true,
    title: "Gate: the number must be live and proven",
    body: "Test calls from different networks across a few days, and test WhatsApp. Publishing a number that also drops calls would put the same problem on every page and profile. Move on only when it behaves."
  },

  {
    icon: "1", title: "Roll out the number and one set of facts", time: "Week 1, right after the gate",
    intro: "AI repeats whatever your pages say. If two pages disagree, it may quote the wrong one.",
    items: [
      ["Swap the number everywhere you found it", "tel: links, WhatsApp links, call strip, demo strip, footers, enquiry pages. Use the master record, not memory.", "", "num"],
      ["Update the business JSON-LD", "Set <code>telephone</code> to the new line and add the second as a <code>contactPoint</code>. Check <code>sameAs</code>, <code>areaServed</code> and the founder entry. Validate in Google's Rich Results Test.", "", "num"],
      ["Reconcile prices and timelines into one source of truth", "Conflicts today: digital marketing is KSh 35,000 to 105,000 on the visibility FAQ but about 30,000 to 55,000 a month on the work FAQ; the websites meta description says 10 to 14 days while the FAQ says 10 to 14 weeks; Safina and Jahazi say 14 to 30 days. Write one table, then make every page, schema block and llms.txt match it.", "SEO Stuff: state pricing in numbers, put policies in writing"],
      ["Remove every placeholder before it gets crawled", "Run <code>grep -rnE '[[]XX|[[]Add|[[]One-line|[[]Two sentences' *.html *.js</code>. The Safina (Kakamega Guest House) results slides and the Jahazi takeaway still need real figures and approved quotes.", ""],
      ["Remove 'Launching soon' wording", "The Jahazi card on the homepage and any schema still say it. Jahazi now has a live case study.", ""],
      ["Make the enquiry promise consistent", "The modal and the form success message say 'within one business day'; the Reach Out sections say 'when we can'. Pick one and use it everywhere.", ""]
    ]
  },

  {
    icon: "2", title: "Open the doors and fix the files", time: "Weeks 1 to 2",
    intro: "Settings decide whether AI can see you. Content and authority decide whether it picks you.",
    items: [
      ["Confirm robots.txt still allows every search and AI crawler", "GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot should all be allowed. Re-check after every future edit.", "SEO Stuff, 21 Sep"],
      ["If DNS ever goes through Cloudflare, never pick 'Block'", "Since 15 September, 'Block' also blocks Googlebot, Applebot and Bingbot, removing you from Google. To stop AI training and stay in Search choose 'Disallow AI Training'. The CNAME file suggests plain static hosting, so this may not apply. Confirm the DNS provider.", "SEO Stuff, 21 Sep"],
      ["Decide the training question on purpose", "Three separate controls: training (Google-Extended in robots.txt), AI Overviews and AI Mode (a Search Console setting), and citations in ChatGPT, Claude and Perplexity (earned, no toggle). Recommendation: leave training open, because newer models answer from memory more often and a business missing from training only reaches them by retrieval. Don't add NOARCHIVE: it keeps content out of Copilot links.", "SEO Stuff, 21 and 14 Sep"],
      ["Sitemap, Search Console and Bing cover all 8 pages", "index, visibility, websites, safina-mis, jahazi-pos, work, the AI visibility report and any new page. Request indexing in Search Console and submit URLs in Bing Webmaster Tools, since ChatGPT leans on Bing.", "BrightLocal"],
      ["Trim the over-length titles and descriptions", "Titles (aim for 60 or fewer): work is 71, report 77, Safina 67. Try 'Our Work: Marketing, Websites & Systems | Prolific VA', 'AI Visibility for Diani Travel in 2026 | Prolific VA' and 'Safina MIS: Hotel Booking & Room Management | Prolific VA'. Descriptions (aim for 155 or fewer): visibility is 178, work 188 and report 176, so cut each to one plain sentence.", ""],
      ["Rewrite llms.txt for the current business", "It still describes the old software-only positioning and lists 2 pages. Describe Prolific VA as a local digital marketing and software provider for travel, tourism and hospitality in Diani, list all 8 pages with one plain line each, and add the master record and founder.", "SEO Stuff checklist, 21 Sep"],
      ["Check canonical tags and schema on every page", "One canonical per page, including the new report. Make each FAQPage block match the visible FAQ word for word. Don't spend a week on schema: the Semrush study measured visible structure, not markup.", "Semrush study via SEO Stuff, 10 Sep"]
    ]
  },
  {
    pause: true,
    title: "Let the re-crawl and the spam update settle: 1 to 2 weeks",
    body: "Google's September 2026 spam update started 24 September and was due to take up to two weeks (about 8 October). Don't read ranking changes until it has finished, then judge on Search Console clicks and enquiries. Rank trackers lost much of their data from about 13 September, and Search Console began counting Lens and Circle to Search on 24 September with no backfill, so a jump in impressions may not be a ranking gain. Don't rebuild pages because a chart turned red."
  },

  {
    icon: "3", title: "Build the pages owners' questions land on", time: "Weeks 2 to 5",
    intro: "AI scores a piece of a page, roughly 375 words, under the heading above it. Be findable first, then liftable.",
    items: [
      ["Turn the prompt bank into a question map", "For each service line list the questions a buyer asks right before choosing: price, alternatives, how long, what's included, what goes wrong. Add the long conversational queries you already appear for in Search Console: Performance, 12 months, query filter, custom regex <code>^(?:\\S+\\s+){9,}\\S+$</code>. If a line answers fewer than a dozen, that is your coverage gap.", "BrightLocal; Similarweb via SEO Stuff, 16 Sep"],
      ["Run the ten-minute test on all four service pages", "Pick the one question a buyer asks before booking a call. Is the answer under 375 words, does it make sense read cold, and does the heading above it name the question?", "SEO Stuff, 23 Sep"],
      ["Put the answer first", "One or two plain sentences at the top of each page and each Q&A block, like the 'Short answer' boxes on the report.", "Semrush study: clarity +32.8%, Q&A format +25.5%"],
      ["Turn visibility.html's pillar headings into questions", "Pillars like 'Content with real depth and structure.' are statements. Add a question line above each, for example 'How does Prolific VA make content AI can quote?'.", "SEO Stuff, 23 Sep"],
      ["Add a few genuinely different service and area pages", "One generic Services page can't match a specific question. Candidates: digital marketing for hotels in Diani, for tour operators, hotel booking software for guest houses in Kenya, POS with eTIMS and M-Pesa. Each needs first-party content: real prices, screenshots, a named case study. Cap it at 3 to 5 this cycle. Don't clone pages by swapping town names, which is what the September spam update targets.", "BrightLocal; SEO Stuff, 28 Sep"],
      ["Make every claim checkable", "Replace adjectives with figures: Palm & Tide +19.5% ChatGPT sessions, Kakamega Guest House 2x reservations, KweliAI's 355 Copilot citations, plus integrations (eTIMS, M-Pesa Push), timelines and policies in writing. Anything only said on a sales call can't be used.", "SEO Stuff, 22 Sep"],
      ["Finish the case studies and get quotes approved", "Fill the remaining Safina and Jahazi figures. Julius and Baba Mwaniki should approve their quotes in writing before they stay live.", ""],
      ["Put a named person on every page", "A visible 'By Mohammad Nyundo, Founder' with a LinkedIn link and a 'last updated' date on visibility, websites, Safina, Jahazi and the report. Name the real people behind the work.", "Semrush: E-E-A-T signals +30.6%; Propellic finding 2"],
      ["Lean into local, with real photos", "Say 'Diani-born', 'local', 'one call away'. Use your own photos of real clients and places, not stock. Travelers and AI both read reviews and photos over self-written copy.", "Propellic findings 2 and 5"]
    ]
  },

  {
    icon: "4", title: "Make acting easy, for people and AI agents", time: "Weeks 3 to 4",
    intro: "Agents that browse can now fill in forms. You can be recommended and still lose the enquiry if the path breaks.",
    items: [
      ["Run the 5-minute agent test", "Pick your highest-value action (request a demo). Could someone finish it using only what's public: what you do, where, what it costs, how to ask? Do it on a phone.", "SEO Stuff, 8 Sep"],
      ["Test every enquiry path with the new number", "tel: opens the dialer, WhatsApp opens with the pre-filled message, the Formspree form delivers, and the success message is right.", "", "num"],
      ["Add 'How did you hear about us?' to the enquiry form", "Options: ChatGPT, Google, Gemini, referral, social, other. AI visits are often invisible in analytics, so asking is the cheapest attribution.", "SEO Stuff, 24 Sep and 18 Sep"],
      ["Publish terms as text, not PDFs", "Price ranges, what's included, timelines and support terms as plain page text. Missing pricing was the most-named gap in the Propellic study.", "Propellic findings 5 and 8"],
      ["Set up WhatsApp Business properly", "Greeting, away message with hours, and quick replies with price ranges. It is the fallback while the call line proves itself.", ""]
    ]
  },
  {
    pause: true,
    title: "Give new pages 2 to 4 weeks before testing",
    body: "Retrieval can pick up a new page after it is crawled and indexed, so wait 2 to 4 weeks before judging. Appearing in what a model already knows is slower: it follows model release cycles, so allow months. Pages published after a model's training cutoff reach it only by retrieval, which is why you stay present early and consistently."
  },

  {
    icon: "5", title: "Build evidence outside your own site", time: "Weeks 4 to 10",
    intro: "A claim on your homepage is a claim. The same claim confirmed by someone with no stake in your success is a fact.",
    items: [
      ["Follow the citations", "From the Day-0 baseline, list which outside domains each AI cites for each prompt. Those, not guesses, are your directory and mention targets. Google's AI leans on Google Business Profile, ChatGPT on Bing and Yelp, so they differ.", "BrightLocal"],
      ["Finish and verify the Google Business Profile", "If verification is still pending, wait: up to 5 business days after video review, no resubmitting, no second listing. Once verified, set category, service areas, services, photos and description, then make the new number primary and Airtel an additional line. Google Business Profile was about 29% of AI citations.", "BrightLocal", "num"],
      ["Claim Bing Places", "Same master record. ChatGPT and Copilot lean on Bing.", "BrightLocal"],
      ["Collect named reviews", "Ask Julius (Kakamega Guest House), Liz (Palm & Tide), Baba Mwaniki (New Glory) and Ndurya (Mohaa Computers) for a Google review with a direct link. Reply to each one.", "Propellic finding 5"],
      ["Add 'Built by Prolific VA' links on client sites", "A small footer credit with descriptive, varied anchor text on Mohaa, EuroBuild, GoldenStar, Palm & Tide, Zanzitan and the others you control.", "SEO Stuff checklist, 21 Sep"],
      ["List where buyers look", "Clutch or GoodFirms for the software side, tourism-marketing directories, local tourism and hospitality associations, and Kenyan business directories. Start with the ones from 'Follow the citations'.", ""],
      ["Publish the report beyond your site", "Short LinkedIn and Medium versions of the Diani report that link back and credit Propellic. KweliAI earned 355 Copilot citations in three months this way.", "Your KweliAI case study"],
      ["Be in the conversations where owners ask", "Hospitality owners' Facebook and WhatsApp groups and LinkedIn. Answer plainly and don't pitch.", "Propellic: travelers verify on forums"],
      ["Describe yourself the same way everywhere", "'Local digital marketing and software provider for travel, tourism and hospitality in Diani.' Models learn stable associations. Don't re-word the positioning every few months.", "SEO Stuff, 14 Sep"]
    ]
  },
  {
    pause: true,
    title: "Authority is slow: allow 4 to 8 weeks",
    body: "Our rule of thumb, not from a study: new reviews, links and mentions take roughly 4 to 8 weeks to show in answers. Presence in what a model remembers is longer. Don't re-test weekly; one week is too small a change to move any answer."
  },

  {
    icon: "6", title: "Measure what matters, then repeat", time: "Monthly, never weekly",
    intro: "The question is no longer 'how much AI traffic', it's 'were we recommended'.",
    items: [
      ["Run the monthly prompt test", "Use the starred prompts (first two in each group) across ChatGPT, Gemini, Google AI Mode and Perplexity, 3 runs each. Log named, cited, position, rivals and domains. Your number is the named rate: the share of runs where Prolific VA appears.", "SEO Stuff, 24 and 18 Sep; BrightLocal"],
      ["Check Google two ways", "Maps and AI answers differ. Maps named a business in 66% of searches against about 33% in ChatGPT. Track both for 'web design Diani' and 'hotel software Kenya'.", "BrightLocal"],
      ["Search Console and Bing, page by page", "Track the newest pages separately so a slow start isn't read as a site-wide problem. Use clicks and enquiries, not impressions or third-party rank trackers.", "SEO Stuff, 28 Sep"],
      ["Count enquiries by source", "Use the new form field and ask on calls. Compare month to month against the Day-0 baseline.", ""],
      ["Re-test after each major AI model release", "A release can reset what a model knows about your category. Re-run the prompt bank within 2 to 4 weeks of a big one.", "SEO Stuff, 14 Sep"]
    ]
  }
];

const phasesEl = document.getElementById("phases");
const KEY = "pva-geo-checklist-v2";
let idx = 0;
const state = JSON.parse(localStorage.getItem(KEY) || "{}");
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

function updateProgress() {
  const boxes = document.querySelectorAll(".item input[type=checkbox]");
  const done = [...boxes].filter(b => b.checked).length;
  document.getElementById("total").textContent = boxes.length;
  document.getElementById("stepCount").textContent = boxes.length;
  document.getElementById("done").textContent = done;
  document.getElementById("fill").style.width = boxes.length ? (done / boxes.length * 100) + "%" : "0%";
}

function toggleOnHead(phase) {
  phase.querySelector(".phase-head").addEventListener("click", () => phase.classList.toggle("open"));
}

DATA.forEach(block => {
  if (block.pause) {
    const p = document.createElement("div");
    p.className = "pause" + (block.gate ? " gate" : "");
    p.innerHTML = `<div class="pause-icon">${block.gate ? "\u26d4" : "\u23f8"}</div><div class="pause-body"><b>${block.title}</b><p>${block.body}</p></div>`;
    phasesEl.appendChild(p);
    return;
  }

  if (block.prompts) {
    const total = PROMPTS.reduce((n, g) => n + g[1].length, 0);
    const phase = document.createElement("div");
    phase.className = "phase";
    const groups = PROMPTS.map(g => `<div class="prompt-group"><h3>${g[0]}</h3><ol>${
      g[1].map((q, i) => `<li${i < 2 && g[0] !== "Brand check" ? ' class="core"' : ""}>${q}</li>`).join("")}</ol></div>`).join("");
    phase.innerHTML = `
      <div class="phase-head">
        <div class="phase-num">?</div>
        <div class="phase-titles"><h2>The prompt bank</h2><p>What owners type. Used for the baseline and every monthly test</p></div>
        <div class="phase-count">${total} prompts</div><div class="chevron">\u25bc</div>
      </div>
      <div class="phase-body">
        <div class="phase-intro">Phrased the way owners ask, mixing Google-style and AI-style questions. Gold markers are the monthly core set. Add real questions from your enquiries and Search Console over time.</div>
        ${groups}
        <div class="prompt-tools"><button class="copy-btn" type="button">Copy all prompts</button><span class="copy-msg"></span></div>
      </div>`;
    phasesEl.appendChild(phase);
    toggleOnHead(phase);
    phase.querySelector(".copy-btn").addEventListener("click", () => {
      const text = PROMPTS.map(g => g[0] + "\n" + g[1].map(q => "- " + q).join("\n")).join("\n\n");
      navigator.clipboard.writeText(text).then(() => { phase.querySelector(".copy-msg").textContent = "Copied"; });
    });
    return;
  }

  idx++;
  const phase = document.createElement("div");
  phase.className = "phase has-steps";
  const introHtml = block.intro ? `<div class="phase-intro">${block.intro}</div>` : "";
  const itemsHtml = block.items.map((it, i) => {
    const key = "p" + idx + "-i" + i;
    const checked = state[key] ? "checked" : "";
    const tag = it[3] === "num" ? '<span class="tag">Needs new number</span>' : "";
    const src = it[2] ? `<p class="item-src">Source: ${it[2]}</p>` : "";
    return `<label class="item ${state[key] ? "done" : ""}" data-key="${key}">
      <input type="checkbox" ${checked}>
      <div class="item-body"><p class="item-title">${it[0]}${tag}</p><p class="item-desc">${it[1]}</p>${src}</div>
    </label>`;
  }).join("");
  phase.innerHTML = `
    <div class="phase-head">
      <div class="phase-num">${block.icon}</div>
      <div class="phase-titles"><h2>${block.title}</h2><p>${block.time}</p></div>
      <div class="phase-count">${block.items.length} steps</div>
      <div class="chevron">\u25bc</div>
    </div>
    <div class="phase-body">${introHtml}${itemsHtml}</div>`;
  phasesEl.appendChild(phase);
  toggleOnHead(phase);
  phase.querySelectorAll(".item").forEach(row => {
    const cb = row.querySelector("input");
    cb.addEventListener("change", () => {
      state[row.getAttribute("data-key")] = cb.checked;
      row.classList.toggle("done", cb.checked);
      save();
      updateProgress();
    });
  });
});

document.getElementById("phaseCount").textContent = idx;
const first = phasesEl.querySelector(".phase.has-steps");
if (first) first.classList.add("open");
updateProgress();