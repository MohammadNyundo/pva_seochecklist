/* Prolific VA — GEO & SEO checklist (revised 12 Oct 2026 with Day-0 run-1 data)
   Item = [title, description, source (optional), tag (optional: "num"), done ("done" = ticked by default)] */

/* "*" marks the monthly core prompts. How-to prompts (M2, W2) are judged on being cited, not named. */
const PROMPTS = [
  ["Digital marketing", [
    "*Who does SEO for hotels and tour operators in Diani?",
    "*How do I get my hotel to show up on ChatGPT and Google?",
    "*Who offers digital marketing for travel, tourism and hospitality businesses in Diani?",
    "How much does digital marketing for a hotel in Kenya cost?",
    "Best digital marketing company for tour operators in Kenya",
    "Is SEO worth it for a small guest house in Diani?"]],
  ["Websites", [
    "*Who builds websites for hotels and tour operators in Diani?",
    "*How much does a business website cost in Kenya?",
    "Website with online booking and M-Pesa payment for a Kenyan hotel",
    "Best web developer on the Kenyan coast for tourism businesses"]],
  ["Safina MIS", [
    "*Hotel booking software in Kenya for a small guest house",
    "*Alternative to Booking.com for direct bookings in Kenya",
    "ResRequest alternative for small Kenyan hotels",
    "How do I stop double bookings at my guest house?"]],
  ["Jahazi POS", [
    "*POS system in Kenya with KRA eTIMS and M-Pesa",
    "*POS software for a shop with walk-in, online and field sales",
    "POS for a furniture, jewellery or interior design shop in Kenya",
    "POS with an e-menu for a restaurant in Kenya"]],
  ["Brand check", [
    "What is Prolific VA?",
    "Is Prolific VA legit? Any reviews?"]]
];

const RESULTS_HTML = `
<div class="phase-intro">Run 1 on ChatGPT (10 and 12 Oct), Gemini and Google AI Mode (12 Oct). One run each, so treat it as a first reading, not a rate.</div>
<div class="res-wrap"><table class="res-table">
<tr><th>Prompt</th><th>ChatGPT</th><th>Gemini</th><th>Google AI Mode</th></tr>
<tr><td>M1 SEO for hotels and tour operators</td><td class="n">N on 10 Oct · <span class="y">Y, 1st of 8 on 12 Oct</span></td><td class="y">Y, 1st of 8</td><td class="y">Y, 1st of 6 (M3 wording), linked</td></tr>
<tr><td>W1 Websites for hotels and tours</td><td class="n">N</td><td class="n">N</td><td class="y">Y, 4th of 8</td></tr>
<tr><td>S1 Booking software, small guest house</td><td class="n">N</td><td class="y">Y, indirect, no link</td><td class="n">N</td></tr>
<tr><td>S2 Alternative to Booking.com</td><td class="n">N</td><td class="y">Y, 3rd of 9</td><td class="n">N</td></tr>
<tr><td>J1 POS with eTIMS and M-Pesa</td><td class="n">N</td><td class="n">N</td><td class="n">N ('launching soon')</td></tr>
<tr><td>J2 POS, walk-in, online and field</td><td class="n">N</td><td class="n">N</td><td class="n">N</td></tr>
<tr><td>B1 What is Prolific VA?</td><td class="n">Y but mixed up with Prolific.com</td><td class="y">Y, correct</td><td class="y">Y, correct, linked</td></tr>
<tr><td>B2 Is it legit? Reviews?</td><td class="n">Y, leans on Clutch (Ukunda, no reviews)</td><td class="y">Y, correct</td><td class="y">Y, quotes Liz and Julius</td></tr>
<tr class="res-score"><td>Named on recommendation prompts</td><td>1 of 7</td><td>3 of 6</td><td>2 of 6</td></tr>
</table></div>
<div class="res-cols">
  <div><h3>Who AI names instead</h3><p>Marketing and websites: Goldfish Marketing, Zuchi Technologies, Kenya SEO Experts, SuperTech Nomads, SEO Kenya Limited, Donvic Marketing, Black Shepherd, Talk Digital. Safina: TENari, Microstation, Diafa PMS, NightsBridge, ReservePort (Pesapal), Kiotapay, Frontdesko, Little Hotelier. Jahazi: Veira, Cute Profit POS, Retaela, WIK POS, NodePoint.</p></div>
  <div><h3>Domains it cites</h3><p>Rivals' own sites, plus pesapal.com, kiotapay.com, theafricanhotelier.com, kenyageographic.com, clutch.co and linkedin.com. prolificva.co.ke was linked only on brand checks (Google AI Mode).</p></div>
</div>
<ol class="res-list">
  <li><b>Digital marketing is the strongest line.</b> Named first by Gemini, by ChatGPT on 12 Oct, and by AI Mode.</li>
  <li><b>Jahazi is invisible: 0 of 6.</b> AI Mode said it is in a 'launching soon' status, so it listed live products. That is the wording on your own pages.</li>
  <li><b>Answers vary.</b> ChatGPT left you out of M1 on 10 Oct and put you first on 12 Oct. That is why each prompt needs 3 runs.</li>
  <li><b>ChatGPT misreads who you are.</b> It confused you with Prolific.com and cited a Clutch page showing Ukunda and no reviews.</li>
  <li><b>You are named but rarely linked.</b> Several 'cited Y' rows list no prolificva.co.ke domain, so re-check them.</li>
  <li><b>AI groups rivals by category.</b> Gemini put Safina under 'Regional and Local Direct Booking Engines'. Comparison pages against the names above give it something to lift.</li>
</ol>`;

const DATA = [
  { prompts: true },
  { results: true },

  {
    icon: "0", title: "Number and baseline", time: "Number done. Baseline run 1 done, runs 2 and 3 to go",
    intro: "The new line is registered. Keep proving it, finish the record and finish the baseline.",
    items: [
      ["Register the new business line", "Registered (0182927998). Still confirm the roles: new line for calls, and which line has WhatsApp. If the wa.me links now point at the new number, WhatsApp must be registered on it.", "Your call, given the Airtel problem", "", "done"],
      ["Finish the master business record", "Known: name 'Prolific VA', +254 182 927 998, prolificva.services@gmail.com, prolificva.co.ke, service areas, founder Mohammad Nyundo. Still needed: address exactly as in the Google Business Profile, hours, and the WhatsApp number. Add a plain description line: a digital marketing and software company in Diani, Kenya.", "BrightLocal local-AI study; Propellic finding 2"],
      ["Verify no old number is left", "Run <code>grep -rnE '752 ?012 ?827|752012827|704 ?879 ?998' .</code> and <code>grep -rn '2540182\\|+254 0182' .</code>. The first should show only deliberate leftovers, the second nothing.", ""],
      ["Day-0 baseline, run 1", "Done on ChatGPT, Gemini and Google AI Mode, 10 to 12 Oct 2026. Results are in the card above.", "BrightLocal", "", "done"],
      ["Finish the baseline: runs 2 and 3, plus Bing and Copilot", "Fresh chat for every run, on a different day from run 1. Add Bing/Copilot, and Google Maps and organic checks for 'web design Diani' and 'hotel software Kenya'. The ChatGPT log was compiled inside one conversation, so re-check a few rows by hand. Do this in the next 2 to 3 days. Sitemap resubmission can go ahead now; hold content changes until runs 2 and 3 are logged.", "BrightLocal: a business that showed up once came back only about half the time"]
    ]
  },
  {
    pause: true,
    title: "Keep proving the new line",
    body: "Keep making test calls from different networks while you work. A number that drops calls would repeat the Airtel problem on every page and profile."
  },

  {
    icon: "1", title: "Quick wins from the Day-0 data", time: "Week 1. Biggest gaps first",
    intro: "These come straight from run 1. They are small, and each one is aimed at a specific miss.",
    items: [
      ["Resubmit the sitemap and page URLs", "You changed the site structure but never resubmitted. Update sitemap.xml first (all 8 pages, today's date in lastmod). In Search Console: submit the sitemap, then Request indexing for Jahazi, Safina, websites, visibility, the report, work and the homepage. Do the same in Bing Webmaster Tools. Gemini and AI Mode read Google's index; ChatGPT and Copilot lean on Bing. Log the date.", "Day-0 data; BrightLocal"],
      ["Remove 'Launching soon' everywhere", "Homepage Jahazi card, work.html, any schema. Google AI Mode said Jahazi is 'launching soon' and listed live rivals instead. Jahazi was named in 0 of 6 runs across all tools.", "Day-0 data, AI Mode J1"],
      ["Say plainly that Jahazi is live", "Put 'live at New Glory Enterprises' near the top, with the eTIMS and M-Pesa Push integration details, screenshots and what it does as plain text. Rivals win J1 and J2 because their pages state this.", "Day-0 data"],
      ["Fix the Clutch listing and the LinkedIn page", "ChatGPT's B2 answer leaned on Clutch (shows Ukunda, no reviews) and LinkedIn. Make the address, phone, email and description match the master record, and ask a client for a Clutch review.", "Day-0 data, ChatGPT B2"],
      ["Add one disambiguation line", "'Prolific VA is a digital marketing and software company in Diani, Kenya.' Put it in the About text, the schema description, llms.txt, Google Business Profile and every bio. ChatGPT mixed you up with the Prolific research platform; Gemini and AI Mode did not.", "Day-0 data, ChatGPT B1"],
      ["Swap the number everywhere", "tel: links, WhatsApp links, call and demo strips, footers, enquiry pages, social bios.", "", "num", "done"],
      ["Update the business JSON-LD", "Set telephone to +254182927998, add email, and add the second line as a contactPoint. Check sameAs, areaServed and the founder entry. Validate in Google's Rich Results Test.", "", "num"],
      ["Reconcile prices and timelines into one source of truth", "Digital marketing is KSh 35,000 to 105,000 on the visibility FAQ but about 30,000 to 55,000 a month on the work FAQ; the websites meta description says 10 to 14 days while the FAQ says weeks; Safina and Jahazi say 14 to 30 days. Write one table and make every page, schema block and llms.txt match.", "SEO Stuff: state pricing in numbers"],
      ["Remove every placeholder before it gets crawled", "Run <code>grep -rnE '[[]XX|[[]Add|[[]One-line|[[]Two sentences' *.html *.js</code>. The Safina results slides and the Jahazi takeaway still need real figures and approved quotes.", ""],
      ["Make the enquiry promise consistent", "The modal and success message say 'within one business day'; the Reach Out sections say 'when we can'. Pick one.", ""]
    ]
  },

  {
    icon: "2", title: "Open the doors and fix the files", time: "Weeks 1 to 2",
    intro: "Settings decide whether AI can see you. Content and authority decide whether it picks you.",
    items: [
      ["Confirm robots.txt still allows every search and AI crawler", "GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot should all be allowed. Re-check after every edit.", "SEO Stuff, 21 Sep"],
      ["If DNS ever goes through Cloudflare, never pick 'Block'", "Since 15 September 'Block' also blocks Googlebot, Applebot and Bingbot. To stop AI training and stay in Search choose 'Disallow AI Training'. The CNAME file suggests plain static hosting, so this may not apply. Confirm the DNS provider.", "SEO Stuff, 21 Sep"],
      ["Decide the training question on purpose", "Three controls: training (Google-Extended), AI Overviews and AI Mode (a Search Console setting), and citations in ChatGPT, Claude and Perplexity (earned, no toggle). Recommendation: leave training open. Don't add NOARCHIVE: it keeps content out of Copilot links.", "SEO Stuff, 21 and 14 Sep"],
      ["Trim the over-length titles and descriptions", "Titles (60 or fewer): work is 71, report 77, Safina 67. Try 'Our Work: Marketing, Websites & Systems | Prolific VA', 'AI Visibility for Diani Travel in 2026 | Prolific VA' and 'Safina MIS: Hotel Booking & Room Management | Prolific VA'. Descriptions (155 or fewer): visibility is 178, work 188, report 176.", ""],
      ["Rewrite llms.txt for the current business", "Describe Prolific VA as a local digital marketing and software provider for travel, tourism and hospitality in Diani, list all 8 pages with one plain line each, and add the master record, founder and disambiguation line.", "SEO Stuff checklist, 21 Sep"],
      ["Check canonical tags and schema on every page", "One canonical per page, including the report. Each FAQPage block must match the visible FAQ word for word. Don't spend a week on schema: the Semrush study measured visible structure, not markup.", "Semrush study via SEO Stuff, 10 Sep"]
    ]
  },
  {
    pause: true,
    title: "Let the re-crawl settle: 1 to 2 weeks",
    body: "Resubmitting does not index anything overnight. Google's September spam update was due to finish about 8 October, so ranking moves from here are easier to read, but judge on Search Console clicks and enquiries, not rank-tracker charts or impressions (Search Console began counting Lens and Circle to Search on 24 September with no backfill)."
  },

  {
    icon: "3", title: "Build the pages AI picks from", time: "Weeks 2 to 5",
    intro: "AI scores a piece of a page, roughly 375 words, under the heading above it. In run 1 it grouped rivals by category, so build pages that sit in those categories.",
    items: [
      ["Hotel booking software in Kenya: build the Safina comparison page", "Compare Safina MIS with the names AI actually listed: TENari, Microstation, Diafa PMS, NightsBridge, ReservePort (Pesapal), Kiotapay, Frontdesko, Little Hotelier. Add a direct-booking channels table: Pesapal links, WhatsApp payment links, Google free booking links, Airbnb, Booking.com. Replace the current ResRequest and Booking.com-only table. Rules: facts only from each vendor's own page, with a link and a 'checked' date; show where a rival is stronger; verify commission figures before publishing; refresh quarterly.", "Day-0 data, S1 and S2"],
      ["POS in Kenya: build the Jahazi comparison page", "Compare Jahazi POS with Veira, Cute Profit POS, Retaela, WIK POS and NodePoint, plus Shopify or Odoo for the online side. Criteria: eTIMS, M-Pesa, field sales app, online store, offline use, price, support. Same rules as above. Link it from the Jahazi page.", "Day-0 data, J1 and J2"],
      ["'How to choose' page for marketing and websites", "AI names agencies by local presence (Goldfish, Zuchi, Kenya SEO Experts, Donvic, Black Shepherd). A criteria table is safer than naming rivals: what to ask, what to expect on price and time, what proof to ask for, with Prolific VA's own answers.", "Day-0 data, M1 and W1"],
      ["Get Safina named directly", "Gemini named Safina only indirectly on S1. Use the exact name 'Safina MIS' with a one-line definition at the top of the page and in schema.", "Day-0 data, Gemini S1"],
      ["Turn the prompt bank into a question map", "For each service line, list what a buyer asks before choosing: price, alternatives, how long, what's included, what goes wrong. Add long queries from Search Console: Performance, 12 months, regex <code>^(?:\\S+\\s+){9,}\\S+$</code>. Under a dozen answered per line is a coverage gap.", "BrightLocal; Similarweb via SEO Stuff"],
      ["Ten-minute test and answer-first on all service pages", "Pick the one question a buyer asks before booking a call. The answer should be under 375 words, make sense read cold, and sit under a heading that names the question. Put a one or two sentence direct answer at the top of each page and Q&A block.", "SEO Stuff, 23 Sep; Semrush: clarity +32.8%"],
      ["Turn visibility.html's pillar headings into questions", "Pillars like 'Content with real depth and structure.' are statements. Add a question line above each.", "SEO Stuff, 23 Sep"],
      ["Add a few genuinely different service and area pages", "The comparison pages above count towards a cap of 3 to 5 this cycle. Each needs first-party content: real prices, screenshots, a named case study. Don't clone pages by swapping town names.", "BrightLocal; SEO Stuff, 28 Sep"],
      ["Make every claim checkable", "Figures, not adjectives: Palm & Tide +19.5% ChatGPT sessions, Kakamega Guest House 2x reservations, KweliAI's 355 Copilot citations, plus eTIMS and M-Pesa Push, timelines and policies in writing.", "SEO Stuff, 22 Sep"],
      ["Finish the case studies and get quotes approved", "Fill the remaining Safina and Jahazi figures. Julius and Baba Mwaniki should approve their quotes in writing.", ""],
      ["Put a named person on every page, and lean into local", "A visible 'By Mohammad Nyundo, Founder' with a LinkedIn link and a 'last updated' date. Use real photos of real clients and places, not stock.", "Semrush: E-E-A-T +30.6%; Propellic findings 2 and 5"]
    ]
  },

  {
    icon: "4", title: "Make acting easy, for people and AI agents", time: "Weeks 3 to 4",
    intro: "You can be recommended and still lose the enquiry if the path breaks.",
    items: [
      ["Run the 5-minute agent test", "Pick your highest-value action (request a demo). Could someone finish it using only what's public: what you do, where, what it costs, how to ask? Do it on a phone.", "SEO Stuff, 8 Sep"],
      ["Test every enquiry path with the new number", "tel: opens the dialer, WhatsApp opens with the pre-filled message, the Formspree form delivers, the success message is right.", "", "num"],
      ["Add 'How did you hear about us?' to the enquiry form", "Options: ChatGPT, Google, Gemini, referral, social, other. AI visits are often invisible in analytics, so asking is the cheapest attribution.", "SEO Stuff, 24 and 18 Sep"],
      ["Publish terms as text, not PDFs", "Price ranges, what's included, timelines, support terms as plain page text.", "Propellic findings 5 and 8"],
      ["Set up WhatsApp Business properly", "Greeting, away message with hours, quick replies with price ranges.", ""]
    ]
  },
  {
    pause: true,
    title: "Give changes 2 to 4 weeks, then re-run",
    body: "Retrieval can pick up a changed page after it is crawled, so wait 2 to 4 weeks, then re-run the six recommendation prompts. First check whether AI Mode still says Jahazi is 'launching soon'. Being in what a model already knows is slower and follows model releases, so allow months."
  },

  {
    icon: "5", title: "Build evidence outside your own site", time: "Weeks 4 to 10",
    intro: "A claim on your homepage is a claim. The same claim confirmed by someone with no stake in your success is a fact.",
    items: [
      ["Work the citation list from your own logs", "Targets from run 1: theafricanhotelier.com (cited for M3), kenyageographic.com (S2), pesapal.com (S1 and S2), clutch.co and linkedin.com (B2). Pitch a guest piece or a mention, and ask to be included where lists are published. Add the domains from runs 2 and 3 and from Bing.", "Day-0 data; BrightLocal"],
      ["Get into the 'best of' lists AI reads", "Many answers came from list-style articles and vendor blogs. Find the lists for 'hotel booking software Kenya' and 'POS Kenya', and ask to be included on merit. Don't pay for placement.", "Day-0 data"],
      ["Finish and verify the Google Business Profile", "If verification is pending, wait: up to 5 business days after video review, no resubmitting, no second listing. Once verified, set category, service areas, services, photos and description, then make the new number primary and Airtel an additional line.", "BrightLocal", "num"],
      ["Claim Bing Places", "Same master record. ChatGPT and Copilot lean on Bing.", "BrightLocal"],
      ["Collect named reviews", "Ask Julius (Kakamega Guest House), Liz (Palm & Tide), Baba Mwaniki (New Glory) and Ndurya (Mohaa Computers) for a Google review and a Clutch review. Gemini and AI Mode already quote Liz and Julius, so reviews do get used.", "Propellic finding 5; Day-0 data"],
      ["Add 'Built by Prolific VA' links on client sites", "A small footer credit with descriptive, varied anchor text on Mohaa, EuroBuild, GoldenStar, Palm & Tide, Zanzitan and the others you control.", "SEO Stuff checklist, 21 Sep"],
      ["Publish the report beyond your site", "Short LinkedIn and Medium versions of the Diani report that link back and credit Propellic.", "Your KweliAI case study"],
      ["Be in the conversations where owners ask", "Hospitality owners' Facebook and WhatsApp groups and LinkedIn. Answer plainly and don't pitch.", "Propellic: travelers verify on forums"],
      ["Describe yourself the same way everywhere", "'Local digital marketing and software provider for travel, tourism and hospitality in Diani.' Don't re-word the positioning every few months.", "SEO Stuff, 14 Sep"]
    ]
  },
  {
    pause: true,
    title: "Authority is slow: allow 4 to 8 weeks",
    body: "Our rule of thumb, not from a study: new reviews, links and mentions take roughly 4 to 8 weeks to show in answers. Don't re-test weekly; one week is too small a change to move any answer."
  },

  {
    icon: "6", title: "Measure what matters, then repeat", time: "Monthly, never weekly",
    intro: "The question is no longer 'how much AI traffic', it's 'were we recommended'.",
    items: [
      ["Run the monthly prompt test", "Use the gold core prompts across ChatGPT, Gemini, Google AI Mode, Bing/Copilot and Perplexity, 3 runs each, a fresh chat every time. Log named, cited, position, rivals and domains. Your number is the named rate, shown per tool and per service line.", "SEO Stuff, 24 and 18 Sep; BrightLocal"],
      ["Score the two prompt types differently", "Recommendation prompts (M1, M3, W1, S1, S2, J1, J2): track the named rate. How-to prompts (M2, W2): no businesses are named, so track whether prolificva.co.ke is cited.", "Day-0 data"],
      ["Keep the log trustworthy", "Fresh chat per run, the prompt pasted exactly, no follow-ups. A 'cited Y' needs the domain written in the log. Spot-check a few rows by hand each month.", "Day-0 data"],
      ["Check Google two ways", "Maps and AI answers differ. Maps named a business in 66% of searches against about 33% in ChatGPT. Track both for 'web design Diani' and 'hotel software Kenya'.", "BrightLocal"],
      ["Search Console and Bing, page by page", "Track the newest pages separately. Use clicks and enquiries, not impressions or third-party rank trackers.", "SEO Stuff, 28 Sep"],
      ["Count enquiries by source", "Use the new form field and ask on calls. Compare month to month against Day-0.", ""],
      ["Re-test after each major AI model release", "A release can reset what a model knows. Re-run the prompt bank within 2 to 4 weeks of a big one.", "SEO Stuff, 14 Sep"]
    ]
  }
];

const phasesEl = document.getElementById("phases");
const KEY = "pva-geo-checklist-v3";
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

function infoCard(num, title, sub, count, bodyHtml) {
  const phase = document.createElement("div");
  phase.className = "phase";
  phase.innerHTML = `
    <div class="phase-head">
      <div class="phase-num">${num}</div>
      <div class="phase-titles"><h2>${title}</h2><p>${sub}</p></div>
      <div class="phase-count">${count}</div><div class="chevron">\u25bc</div>
    </div>
    <div class="phase-body">${bodyHtml}</div>`;
  phasesEl.appendChild(phase);
  toggleOnHead(phase);
  return phase;
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
    const groups = PROMPTS.map(g => `<div class="prompt-group"><h3>${g[0]}</h3><ol>${
      g[1].map(q => `<li${q.startsWith("*") ? ' class="core"' : ""}>${q.replace(/^\*/, "")}</li>`).join("")}</ol></div>`).join("");
    const phase = infoCard("?", "The prompt bank", "What owners type. Gold markers are the monthly core set", total + " prompts",
      `<div class="phase-intro">Phrased the way owners ask. How-to prompts (M2 and W2) never name businesses, so judge them on whether you are cited. Add real questions from enquiries and Search Console over time.</div>
       ${groups}
       <div class="prompt-tools"><button class="copy-btn" type="button">Copy all prompts</button><span class="copy-msg"></span></div>`);
    phase.querySelector(".copy-btn").addEventListener("click", () => {
      const text = PROMPTS.map(g => g[0] + "\n" + g[1].map(q => "- " + q.replace(/^\*/, "")).join("\n")).join("\n\n");
      navigator.clipboard.writeText(text).then(() => { phase.querySelector(".copy-msg").textContent = "Copied"; });
    });
    return;
  }

  if (block.results) {
    infoCard("\u2713", "Day-0 results, run 1", "10 to 12 Oct 2026 · ChatGPT, Gemini, Google AI Mode", "read this first", RESULTS_HTML);
    return;
  }

  idx++;
  const phase = document.createElement("div");
  phase.className = "phase has-steps";
  const introHtml = block.intro ? `<div class="phase-intro">${block.intro}</div>` : "";
  const itemsHtml = block.items.map((it, i) => {
    const key = "p" + idx + "-i" + i;
    const isOn = key in state ? state[key] : it[4] === "done";
    const tag = it[3] === "num" ? '<span class="tag">Needs new number</span>' : "";
    const src = it[2] ? `<p class="item-src">Source: ${it[2]}</p>` : "";
    return `<label class="item ${isOn ? "done" : ""}" data-key="${key}">
      <input type="checkbox" ${isOn ? "checked" : ""}>
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
const open = phasesEl.querySelectorAll(".phase.has-steps");
if (open[1]) open[1].classList.add("open"); else if (open[0]) open[0].classList.add("open");
updateProgress();