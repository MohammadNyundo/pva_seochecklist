/* Prolific VA — GEO & SEO checklist (rebuilt 23 Nov 2026 from the SEO Stuff emails, 4 Sep–20 Nov 2026)
   Goal: Prolific VA is the name Google and AI give when travel, tourism and hospitality businesses in Diani
   look for digital marketing, a website or software. What we sell: found, trusted, booked.
   Item = [title, description, source (optional), tag (optional: "quick"), done ("done" = ticked by default)] */

/* "*" marks the monthly core prompts. How-to prompts (M2, W2) are judged on being cited, not named. */
const PROMPTS = [
  ["Get found: digital marketing", [
    "*Who does SEO for hotels and tour operators in Diani?",
    "*How do I get my hotel to show up on ChatGPT and Google?",
    "*Who offers digital marketing for travel, tourism and hospitality businesses in Diani?",
    "How much does digital marketing for a hotel in Kenya cost?",
    "Best digital marketing company for tour operators in Kenya",
    "Is SEO worth it for a small guest house in Diani?"]],
  ["Get trusted: websites", [
    "*Who builds websites for hotels, villas and tour operators in Diani?",
    "*How much does a hotel website cost in Kenya?",
    "Website with online booking and M-Pesa payment for a Kenyan hotel",
    "Do I need my own website if I'm on Booking.com and Airbnb?",
    "Best web developer on the Kenyan coast for tourism businesses"]],
  ["Get booked: Safina MIS", [
    "*Hotel booking software in Kenya for a small guest house",
    "*Alternative to Booking.com for direct bookings in Kenya",
    "ResRequest alternative for small Kenyan hotels",
    "How do I stop double bookings at my guest house?"]],
  ["Get booked: Jahazi POS", [
    "*POS system in Kenya with KRA eTIMS and M-Pesa",
    "*POS for a restaurant or beach bar in Diani",
    "POS software for a shop with walk-in, online and field sales",
    "POS with an e-menu for a restaurant in Kenya"]],
  ["Brand check", [
    "What is Prolific VA?",
    "Is Prolific VA legit? Any reviews?",
    "Who are the best software developers in Diani?"]]
];

const RESULTS_HTML = `
<div class="phase-intro">Where Prolific VA stands today. The October AI test was one run per tool, so treat it as a first reading, not a rate. Search numbers are from the Search Console and Bing exports to 21 Nov 2026.</div>
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
<div class="res-wrap"><table class="res-table">
<tr><th>Search (3 months to 21 Nov 2026)</th><th>Number</th></tr>
<tr><td>Google clicks / impressions</td><td>19 / 314 (Sep 65 · Oct 125 · Nov 1–21 118)</td></tr>
<tr><td>Searches for our name ('prolific va')</td><td>7 clicks / 47 impressions, position 1.45</td></tr>
<tr><td>Searches for Prolific.com landing on us</td><td class="n">about 86 impressions (27%)</td></tr>
<tr><td>Non-branded buyer searches (e.g. 'web design Diani')</td><td class="n">none yet</td></tr>
<tr><td>Bing clicks / impressions</td><td class="n">0 / 3</td></tr>
<tr><td>Bing pages indexed (23 Nov)</td><td class="n">3 of 7: visibility, websites, Safina, Jahazi skipped after a redirect in October</td></tr>
<tr><td>Google impressions by page</td><td>home 257 · work 47 · Diani report 24 · websites 21 · visibility 17 · Jahazi 11 · Safina 4</td></tr>
</table></div>
<div class="res-cols">
  <div><h3>Who AI names instead</h3><p>Marketing and websites: Goldfish Marketing, Zuchi Technologies, Kenya SEO Experts, SuperTech Nomads, SEO Kenya Limited, Donvic Marketing, Black Shepherd, Talk Digital. Safina: TENari, Microstation, Diafa PMS, NightsBridge, ReservePort (Pesapal), Kiotapay, Frontdesko, Little Hotelier. Jahazi: Veira, Cute Profit POS, Retaela, WIK POS, NodePoint.</p></div>
  <div><h3>Domains it cites</h3><p>Rivals' own sites, plus pesapal.com, kiotapay.com, theafricanhotelier.com, kenyageographic.com, clutch.co and linkedin.com. prolificva.co.ke was linked only on brand checks (Google AI Mode).</p></div>
</div>
<ol class="res-list">
  <li><b>Digital marketing is the strongest line.</b> Named first by Gemini, by ChatGPT on 12 Oct, and by AI Mode.</li>
  <li><b>Websites, Safina and Jahazi are barely named.</b> Jahazi was 0 of 6, and AI Mode called it 'launching soon'.</li>
  <li><b>Nobody finds us yet without our name.</b> Every Google click came from a search for Prolific VA or Prolific.com. That's the gap this checklist closes.</li>
  <li><b>ChatGPT and Copilot read Bing, and Bing barely sees us.</b> 3 impressions, 4 sales pages not indexed.</li>
  <li><b>ChatGPT misreads who we are.</b> It confused us with Prolific.com and cited a Clutch page with Ukunda and no reviews.</li>
  <li><b>Answers vary run to run.</b> ChatGPT left us out of M1 on 10 Oct and put us first on 12 Oct, so every prompt needs 3 runs.</li>
</ol>`;

const DATA = [
  { prompts: true },
  { results: true },

  {
    icon: "0", title: "Only say what's real", time: "Reopened 27 Nov · fix before building anything else",
    intro: "An owner can check any claim on your phone in front of them, and so can AI. A small true number beats a big invented one.",
    items: [
      ["Remove every stat we can't back up", "Done 23 Nov 2026. The Palm &amp; Tide and Zanzitan marketing results had no data behind them, so their marketing cards, slides, Diani report boxes and llms.txt lines are gone. Both stay as websites we built. KweliAI's '355 Copilot citations' was replaced with the real Bing figures.", "", "", "done"],
      ["Put the proof next to every number on the site", "The website is where proof is shown, not a folder on a phone. Each number on a page gets its source beside it: a dated screenshot, a link to the report, or the client's confirmation. If a number has no proof we can show, it comes off the page.", "", "quick"],
      ["Confirm the Safina and Jahazi numbers with the clients", "Kakamega Guest House (2x reservations, 100% live time) and New Glory (50% faster service, 2x customers a minute). Ask Julius and Baba Mwaniki to confirm in a WhatsApp message, or say what really changed. Keep what they confirm, reword what they don't.", "SEO Stuff, 22 Sep: checkable claims only"],
      ["Get written approval for every client quote and name", "Liz (Palm &amp; Tide), Julius (Kakamega Guest House), Baba Mwaniki (New Glory), Ndurya (Mohaa Computers). A WhatsApp 'yes, you can publish this' with the exact text is enough.", "", "quick"],
      ["Use the Diani award line only in its true form", "'Diani, voted Africa's Leading Beach Destination at the World Travel Awards 2024.' Zanzibar won in 2025 and 2026, so never write 'the best beach in Africa' as if it holds today.", "worldtravelawards.com, checked 23 Nov 2026", "", "done"],
      ["Swap adjectives for facts", "'Proven', 'trusted' and 'industry-leading' can't be checked, so AI can't repeat them. Use named clients, what was built, dates, prices, timelines and integrations (eTIMS, M-Pesa Push).", "SEO Stuff, 22 Sep"],
      ["Say plainly: our digital marketing is proven on one brand, KweliAI", "KweliAI is our own product and our lab: where we research and test what gets a brand found on Google and AI, and where the method was proven (Bing AI citations 67 in July to 313 in October 2026, #1 on Google and Bing for its name, KSh 0 on ads). We have not yet proven it on a travel, tourism or hospitality brand. Say exactly that, and that we are now bringing the method to them. Applies to visibility.html, work.html (digital marketing section), the home page, llms.txt and the Diani report.", "", "quick"],
      ["Tell the truth about each hospitality brand we've worked with", "M&amp;H, Palm &amp; Tide and Zanzitan are the face of our 'worked with' section because they are our industry, and each card says exactly what we did. M&amp;H: website built, live at mandhboutiquehotel.com; marketing not started, waiting for their go-ahead. Palm &amp; Tide: website built; the owner chose to run his own SEO. Zanzitan: website built; marketing paused at the Google Business Profile setup, waiting on the client. None of them appears as a digital marketing result.", ""],
      ["Show KweliAI's data where anyone can check it", "GA4 reports can't be opened by the public, so link to them another way: a view-only Looker Studio report built from KweliAI's GA4 and Search Console (live, free, one link), plus dated screenshots of the Bing Webmaster Tools AI citations report on the case study. Link both from the digital marketing section of work.html and visibility.html.", ""]
    ]
  },

  {
    icon: "1", title: "Get our pages seen by Google and Bing", time: "This week",
    intro: "ChatGPT and Copilot lean on Bing; Gemini and AI Mode read Google's index. Four of our seven sales pages aren't in Bing at all.",
    items: [
      ["Request indexing for the four pages Bing skipped", "Bing URL Inspection, 23 Nov: visibility.html, safina-mis.html, websites.html and jahazi-pos.html were crawled 17–29 Oct, saw a redirect and were never indexed. They load directly now. Click 'Request indexing' on each in Bing Webmaster Tools, and do the same in Google Search Console.", "Bing Webmaster Tools, 23 Nov", "quick", "done"],
      ["Add IndexNow so Bing hears about every change", "A key file at the site root, the sitemap URLs submitted once, then changed pages after each push. Copy the KweliAI setup (scripts/indexnow.sh and the GitHub workflow). Google doesn't use it, so keep requesting indexing there by hand. Live since 24 Nov (key file at the site root, first 7 URLs accepted with HTTP 202). Check each run under GitHub → pva_website → Actions → IndexNow.", "SEO Stuff: Bing feeds ChatGPT and Copilot", "quick", "done"],
      ["Confirm robots.txt allows every search and AI crawler", "GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot. Don't add NOARCHIVE: it keeps content out of Copilot links. If DNS ever goes through Cloudflare, choose 'Disallow AI Training', never 'Block'. Confirmed 24 Nov: every crawler gets every page (200), no noindex, nosnippet or NOARCHIVE, DNS is host-ww.net.", "SEO Stuff, 14 and 21 Sep", "", "done"],
      ["Add Google Analytics 4 to every page", "Code live on all 7 pages since 24 Nov (analytics.js, property prolificva.co.ke, G-Y1QQ7R4JY2). It records tel_click, whatsapp_click, demo_request and form_submit (with the service chosen). The four settings below finish this step.", "", "quick", "done"],
      ["Ask 'How did you hear about us?' on the enquiry form", "Options: Google, ChatGPT, another AI tool, Instagram or Facebook, a client's website, a field visit, referral. For every visit credited to ChatGPT, more than 6 arrive later as a Google search, so analytics alone undercounts AI.", "Similarweb via SEO Stuff", "quick"],
      ["Starting numbers recorded", "Search Console and Bing exports to 21 Nov 2026, in the card above. Fill a monthly column from January.", "", "", "done"],
      ["GA4: confirm the Realtime test", "On your phone on mobile data, open the site, tap WhatsApp, then tap 'Request a demo' on the work page. GA4 → Reports → Realtime should show page_view, whatsapp_click and demo_request within 2 minutes. Don't test the form: it sends a real enquiry.", "", "quick"],
      ["GA4: mark the four events as key events", "Admin → Data display → Events: star tel_click, whatsapp_click, demo_request and form_submit. An event only appears in the list after it has fired once, so do this after the Realtime test.", "", "quick"],
      ["GA4: create the 'AI channels' group", "Admin → Data display → Channel groups → Create new: copy the default group and add a channel 'AI assistants' above Referral, matching source chatgpt.com, gemini.google.com, copilot.microsoft.com, perplexity.ai, claude.ai. AI visits then show as their own line instead of hiding in Referral.", "Similarweb via SEO Stuff", "quick"],
      ["GA4: link Search Console", "Admin → Product links → Search Console links → Link, choose the prolificva.co.ke property. Search queries and landing pages then sit next to visits and enquiries.", "", "quick"]
    ]
  },
  {
    icon: "2", title: "Field-sales kit, ready before the pause", time: "This week · so you can go out now",
    intro: "The site is what you show an owner across the desk. It should feel like it was made for their business, and it has to work on your phone today.",
    items: [
      ["Make the site fast and readable on a phone on mobile data", "Open home, visibility, websites, Safina, Jahazi, work and the Diani report on your own phone on Safaricom data. Anything slow, cut off or hard to tap gets fixed first.", "", "quick"],
      ["Tell the story in one breath", "'We get travel, tourism and hospitality businesses in Diani, voted Africa's Leading Beach Destination in 2024, found, trusted and booked: digital marketing to get you found, a website and real reviews to get you trusted, and software to get you booked.' Every part has proof behind it.", ""],
      ["Know which page to open for which owner", "Hotel or guest house: the Booking.com cost guide, then Safina. Restaurant or beach bar: the eTIMS guide, then Jahazi. Anyone who says 'nobody finds us': their own AI answer, then the ChatGPT guide and the KweliAI numbers. Tour operator or villa: websites and the ChatGPT guide.", "", "quick"],
      ["Show them their own AI answer", "Before the visit, ask ChatGPT and Gemini 'best [their type of business] in Diani' and screenshot it. Showing an owner whether they appear, and who appears instead, makes it about their business.", "", "quick"],
      ["Ask every owner what they last searched about their business", "Write it down word for word, with the date and type of business. These become the next pages and prompts. It's the data we don't have yet: Search Console shows no buyer searches so far.", "BrightLocal: build from real questions"],
      ["Run the 5-minute test: can they hire us from their phone?", "After you leave, can the owner get a quote or book a demo using only what's public? Tel, WhatsApp and the form must work, and the reply-time promise must match everywhere ('one business day' vs 'when we can').", "SEO Stuff, 8 Sep", "quick"],
      ["Set up WhatsApp Business properly", "Greeting, away message with hours, quick replies with price ranges and links to the service pages and the three guides.", "", "quick"]
    ]
  },

  {
    icon: "3", title: "Pages wave 1: three guides owners already search for", time: "Build now, before the pause · new pages don't disturb the baseline",
    intro: "Guides about the owner's problem, not ads for us. Each answers what they keep checking and ends with a link to the service that fixes it. Put them under /guides/ on prolificva.co.ke. Rules for every guide: question H1, the answer in the first two lines, sections under 375 words, real KSh figures, a 'checked on' date on every fee or rule, a byline, and a link to the official source.",
    items: [
      ["Guide 1: How much do Booking.com and Airbnb really cost a Diani hotel?", "Outline: the commission each platform takes (from their own partner pages, dated); a worked example in KSh for a 6-room guest house at Diani rates; what you lose besides money (the guest's contact, repeat bookings); how to move guests to direct booking without breaking platform rules; what AI tells travellers (71% told to book direct when an option existed). Ends with: a website that takes M-Pesa bookings, and Safina to manage them. Field use: every hotel and villa owner.", "Propellic via SEO Stuff; Safina comparison table"],
      ["Guide 2: KRA eTIMS for hotels, restaurants and bars in Diani", "Outline: who must issue eTIMS invoices; what happens if you don't; the ways to comply (KRA's own tools vs an integrated POS); what an eTIMS receipt must show; common mistakes. Every rule from kra.go.ke, linked and dated, re-checked quarterly. Ends with: Jahazi POS, live at New Glory with eTIMS and M-Pesa Push. Field use: restaurants, bars, shops.", "kra.go.ke; Day-0 data: Jahazi 0 of 6"],
      ["Guide 3: How to get your hotel recommended by ChatGPT and Google", "Outline: what AI reads (Google Business Profile, Bing, reviews, other sites, your own pages); the steps in order; how long each takes; how to check if you're named (the prompt test). KweliAI as the worked example with its real numbers: 67 to 313 Bing AI citations a month, #1 on Google and Bing for its name. Ends with: our digital marketing. Field use: anyone who says 'nobody finds us'.", "SEO Stuff, Sep–Nov; KweliAI data"],
      ["Link each guide from its service page and the home page", "One plain line and link on visibility, websites, Safina and Jahazi. Adding a link isn't a rewrite, so it's fine before the pause.", "", "quick"],
      ["Add the guides to the sitemap, llms.txt and IndexNow, then request indexing", "Google Search Console and Bing Webmaster Tools for each new URL, the same day it goes live.", "", "quick"],
      ["Log each guide's launch date and starting numbers", "Date, URL, 0 impressions, 0 clicks, not cited. Add the guide's main question to the prompt bank so the monthly test checks if AI cites it.", ""]
    ]
  },
  {
    pause: true,
    title: "Leave the existing pages alone until Google's core update settles",
    body: "The November core update started 10 Nov and may run to 24 Nov. Fix indexing and tracking, go out with the field-sales kit and publish the wave 1 guides, but hold rewrites of existing pages until the first clean week (ends about 1 Dec). Then the guides have 2 to 4 weeks of their own data before wave 2."
  },

  {
    icon: "4", title: "One name: Prolific VA, found, trusted, booked", time: "Weeks 1 to 3 · so Google and AI recognise us",
    intro: "Models favour names they already connect with a category. Being described the same way everywhere matters more than rewording a page.",
    items: [
      ["Choose one sentence for who we are, and never reword it", "Proposed: 'Prolific VA is a digital marketing and software company in Diani, Kenya that gets travel, tourism and hospitality businesses found, trusted and booked.' Put it in schema, llms.txt, the About text, every bio, directory and pitch.", "'Popular Get More Popular' study via SEO Stuff; SEO Stuff, 14 Sep", "quick"],
      ["Stop showing up for Prolific.com's searches", "About 86 of 314 Google impressions (27%) were people looking for Prolific, the research platform. Always write 'Prolific VA' in full in titles, H1s and profile names, never 'Prolific' alone, and add 'Is Prolific VA related to Prolific.com?' to the About FAQ.", "Search Console, 23 Nov", "quick"],
      ["Make the site's structure say the offer in three words", "Found (digital marketing: visibility.html), trusted (websites: websites.html), booked (software: safina-mis.html, jahazi-pos.html). The home page, nav, llms.txt and schema should all use the same three words and link to the same pages.", ""],
      ["Build an About page that tells the real story", "Who we are, why Diani, what we build and for whom. Founder Mohammad Nyundo with LinkedIn, the address exactly as on Google Business Profile, and the KweliAI result as our first discovery proof. Organization and Person schema, linked from every footer.", "Semrush: E-E-A-T +30.6%"],
      ["Put a named author and date on every service page", "'By Mohammad Nyundo, Founder · updated [date]' under each H1 and a short author note at the end. Named authors went with 30% more AI citations.", "Semrush study via SEO Stuff", "quick"],
      ["Make name, address and phone match everywhere", "Google Business Profile, Bing Places, Clutch, LinkedIn, Facebook, Instagram, TikTok, X and the site schema: same name, address, +254 182 927 998, email and the one sentence.", "BrightLocal local-AI study", "quick"],
      ["Check what people find when they search our name", "After AI mentions a brand, most people search for it on Google. Check 'Prolific VA', 'Prolific VA reviews', 'Prolific VA Diani', 'Safina MIS' and 'Jahazi POS' on Google and Bing, and fix what's wrong, starting with Clutch (Ukunda, no reviews).", "Similarweb via SEO Stuff"],
      ["Watch for ChatGPT's Business Hub opening to Kenya", "OpenAI's Business Hub (launched 10 Nov) lets only US local listings be claimed for now. If it opens to us, get every detail right first: published profiles can't be deleted.", "SEO Stuff, Nov"]
    ]
  },

  {
    icon: "5", title: "Get found: make digital marketing the line AI names first", time: "Weeks 2 to 5",
    intro: "This is already our strongest line. KweliAI is the proof that we know how to get a brand discovered, so this is where it belongs.",
    items: [
      ["Put the KweliAI result on the digital marketing page, in plain numbers", "Our own product, with no ad budget and no domain authority, went from 67 to 313 Bing AI citations a month (July to October 2026) and ranks #1 on Google and Bing for its own name. Screenshot next to each number, and say what it means for a Diani hotel or tour operator.", "Proof folder (phase 0)"],
      ["Answer 'How much does digital marketing for a hotel cost?' on the page", "Real ranges in KSh, what each package includes, how long before results show. Settle the conflicting prices first (visibility FAQ says 35,000 to 105,000; work FAQ about 30,000 to 55,000 a month).", "SEO Stuff: state pricing in numbers"],
      ["Answer 'How long before AI starts naming my business?'", "Honest timeline: indexing in days, page changes in 2 to 4 weeks, reviews and mentions in 4 to 8 weeks, what a model already knows in months. Use KweliAI's dated numbers as the example.", ""],
      ["Answer 'Is SEO worth it for a small guest house in Diani?'", "Who it's worth it for and who it isn't. Saying when not to hire us is the kind of plain answer AI repeats.", "SEO Stuff, 22 Sep"],
      ["Keep the Diani report current", "ai-visibility-diani-2026.html is our second-best page (24 impressions, 3 clicks). Add a 'last updated' date, the November core update, Business Hub and the Bing note. Short LinkedIn and Medium versions that link back.", "Search Console, 23 Nov"],
      ["When a hospitality brand says yes to marketing: start with day 0", "Before any work: their written OK to publish the results, good or bad; GA4, Search Console and Bing Webmaster Tools on their site; a first prompt test with what guests ask. Publish the day-0 numbers on our site and update them monthly. That is how the first hospitality proof gets made. M&amp;H is the first to ask: their site is live but had no analytics on 27 Nov.", ""]
    ]
  },

  {
    icon: "6", title: "Get trusted: websites owners can check", time: "Weeks 3 to 6",
    intro: "AI named us 4th of 8 once for websites, and never on ChatGPT or Gemini. The page needs the facts AI lifts: price, time, what's included, real builds.",
    items: [
      ["Answer 'Who builds websites for hotels, villas and tour operators in Diani?' in the first lines", "A bold one-sentence answer under a question heading at the top of websites.html: what we build, for whom, in Diani, how long, from what price.", "Semrush: clarity +32.8%"],
      ["Publish real prices and timelines for websites", "One table: site type, what's included, KSh range, weeks to launch. The meta description says 10 to 14 days while the FAQ says weeks; make them match.", "SEO Stuff: state pricing in numbers"],
      ["Show the sites we built, as facts", "Palm &amp; Tide, Zanzitan, Mohaa Computers, GoldenStar, EuroBuild: what each site does (booking, M-Pesa, WhatsApp, menus), with a link and a screenshot. No traffic or booking numbers we can't prove.", ""],
      ["Add a 'Website by Prolific VA' credit on client sites", "A small footer link with plain wording on M&amp;H (mandhboutiquehotel.com), Palm &amp; Tide, Zanzitan, Mohaa Computers, GoldenStar and EuroBuild. Each one is a site with no stake in our success naming us.", "SEO Stuff checklist, 21 Sep", "quick"],
      ["Make photos findable by Google Lens", "Real img tags, descriptive file names (hotel-website-diani-booking.webp), specific alt text and text near each image. Search Console now counts Lens and Circle to Search.", "SEO Stuff, 28 Sep", "quick"]
    ]
  },

  {
    icon: "7", title: "Get booked: Safina MIS and Jahazi POS", time: "Weeks 4 to 8",
    intro: "AI groups rivals by category. Pages that sit in those categories, with fair comparisons, give it something to lift.",
    items: [
      ["Remove 'launching soon' and say plainly that Jahazi is live", "Live at New Glory Enterprises, with eTIMS and M-Pesa Push, screenshots and what it does as plain text near the top. AI Mode listed live rivals instead because our pages said 'launching soon'.", "Day-0 data, AI Mode J1", "quick"],
      ["Build the Jahazi POS comparison page", "Compare fairly with Veira, Cute Profit POS, Retaela, WIK POS and NodePoint: eTIMS, M-Pesa, field sales, online store, offline use, price, support. Vendor facts dated and linked; say where a rival fits better.", "Day-0 data, J1 and J2"],
      ["Add a restaurant and beach bar section to Jahazi", "Diani's restaurants and bars are hospitality buyers too. E-menu, M-Pesa at the table, eTIMS receipts, end-of-day report.", ""],
      ["Keep the Safina comparison honest and dated", "Compare with the names AI listed: TENari, Microstation, Diafa PMS, NightsBridge, ReservePort, Kiotapay, Frontdesko, Little Hotelier. A 'checked on' date per vendor, re-checked quarterly, and a line saying Prolific VA built Safina MIS.", "Day-0 data, S1 and S2"],
      ["Get 'Safina MIS' named directly", "Gemini named it only indirectly. Use the exact name with a one-line definition at the top of the page, in schema and in llms.txt: 'Safina MIS is hotel booking and room management software for small hotels and guest houses in Kenya, built by Prolific VA.'", "Day-0 data, Gemini S1"],
      ["Get Safina listed where AI looks for booking software", "AI cited pesapal.com and kiotapay.com for booking-software questions. Ask Pesapal about an integration or partner listing.", "Day-0 data"]
    ]
  },
  {
    pause: true,
    title: "Give page changes 2 to 4 weeks, then re-run the prompts",
    body: "Retrieval can pick up a changed page after it's crawled, so wait 2 to 4 weeks, then re-run the core prompts 3 times each. Don't rewrite again in between: one week is too small a change to move any answer."
  },

  {
    icon: "8", title: "Write every sales page the way AI reads it", time: "Ongoing, one page at a time",
    intro: "AI scores a piece of a page, roughly 375 words, under the heading above it. Improve the pages that sell before writing new ones.",
    items: [
      ["Turn the prompt bank into a question map", "For each line (found, trusted, booked), list what an owner asks before hiring: cost, time, what's included, how it compares, what goes wrong. Add questions from enquiries, field visits, WhatsApp and long Search Console queries (Performance, 12 months, regex <code>^(?:\\S+\\s+){9,}\\S+$</code>).", "BrightLocal; Similarweb via SEO Stuff"],
      ["Question headings, bold answer first, under 375 words", "On home, visibility, websites, Safina, Jahazi and work: each H2 names a question, the first sentence answers it, the section makes sense read on its own.", "SEO Stuff, 23 Sep; Semrush: clarity +32.8%"],
      ["Add a 'What we don't do' section to each service page", "Who we're not right for. It makes the rest more believable, to owners and to AI.", "SEO Stuff, 22 Sep"],
      ["Make each FAQPage schema match the visible FAQ word for word", "One canonical per page. Don't spend a week on schema: the Semrush study measured visible structure, not markup.", "Semrush via SEO Stuff, 10 Sep"],
      ["Trim over-length titles and descriptions", "Titles 60 characters or fewer, descriptions 155 or fewer, with 'Prolific VA' and 'Diani' in each.", "", "quick"],
      ["Rewrite llms.txt around found, trusted, booked", "The one sentence, the three lines with one plain sentence and link each, the founder, the address, and the proof: KweliAI's numbers and the sites and systems we built.", "SEO Stuff checklist, 21 Sep", "quick"],
      ["No templated area pages", "Ukunda, Kwale, Watamu or Malindi pages only when we have real work there. Cloned pages with the town swapped are what the September spam update targeted.", "SEO Stuff, 28 Sep"],
      ["Log every change with its baseline and check date", "Date, page, change, which rule it follows, the numbers that day, a check date 4 weeks later. Same method as KweliAI.", ""]
    ]
  },

  {
    icon: "9", title: "Pages wave 2: what owners check every week", time: "After the pause, from about 1 Dec · one guide a week",
    intro: "Same rules as wave 1. Before writing, check what owners told you in field visits and what wave 1's data shows: if one guide gets impressions, write the next one closest to it first.",
    items: [
      ["Guide: How to take direct bookings with M-Pesa and card, without the platforms", "The booking path step by step: a website, M-Pesa (Paybill or Till), card via Pesapal, WhatsApp, Google's free booking links. What it costs to set up. Ends with: websites and Safina.", "Propellic via SEO Stuff"],
      ["Guide: How to stop double bookings across Booking.com, Airbnb and walk-ins", "Why they happen, the manual fix (one calendar, who updates it, when), and when software is worth it. Ends with: Safina.", "Day-0 prompt S1"],
      ["Guide: Google Business Profile for Diani hotels, set up properly", "Category, photos, services, booking link, reviews, Q&amp;A, the mistakes that hide a listing. Google's AI leans on the Business Profile (29% of local AI citations). Ends with: our digital marketing.", "BrightLocal"],
      ["Guide: How to get more Google and TripAdvisor reviews without breaking the rules", "When and how to ask, the QR code at check-out, replying to bad reviews, what's banned (buying, gating, scripting). Ends with: our digital marketing.", "Propellic"],
      ["Guide: How much does a hotel or tour website cost in Kenya?", "Our real price table plus what drives the price (booking, M-Pesa, languages, photos), what to ask any developer. Ends with: websites. Needs the settled prices from phase 6.", "Day-0 prompt W2"],
      ["Guide: Why doesn't my hotel show up when tourists search 'Diani'?", "The usual reasons (no Business Profile, not on Bing, no reviews, name mismatch, no page for what guests ask) and how to check each one yourself. Ends with: our digital marketing.", ""],
      ["Give 'book a demo' and 'get a quote' clear pages", "Say what happens, how long it takes and what to prepare. Google is testing a top spot in AI answers for the one official page that finishes a task.", "SEO Stuff, Nov"]
    ]
  },

  {
    icon: "10", title: "Get named outside our own site", time: "Weeks 2 to 12 · slow, start early",
    intro: "A claim on our homepage is a claim. The same claim from someone with no stake in our success is a fact.",
    items: [
      ["Finish our Google Business Profile and claim Bing Places", "Category, services, service area (Diani, Ukunda, Kwale), photos of real work, the one sentence. Google's AI leans on the Business Profile (29% of local AI citations), and ChatGPT leans on Bing.", "BrightLocal", "quick"],
      ["Collect Google and Clutch reviews from every client", "Liz (Palm &amp; Tide), Julius (Kakamega Guest House), Baba Mwaniki (New Glory), Ndurya (Mohaa Computers). Review count tracked closely with being named by AI, and AI already quotes Liz and Julius. Never buy or script them.", "Propellic; Day-0 data"],
      ["List the pages AI cites for our prompts, then ask their authors", "From the baseline runs, list pages that name rivals but not us (theafricanhotelier.com, kenyageographic.com, 'best of' lists). Ask the author how they choose before asking to be added. Brands on more cited pages sit higher in ChatGPT's list. Never pay for placement.", "SEO Stuff, Nov; Day-0 data"],
      ["List Prolific VA where agencies are compared", "Clutch (fix first), GoodFirms, DesignRush, Kenyan business directories, and coast hotel and tourism associations' supplier lists if they publish them.", ""],
      ["Pitch the story to Kenyan tech and tourism media", "'A Diani company building marketing, websites and booking software for coast hospitality, with its own product cited by Bing's AI.' Techweez, TechCabal, Kenyan hospitality and tourism outlets.", ""],
      ["Post real work on Instagram, Facebook and LinkedIn", "Meta AI searches posts from 2025 on and prefers first-person posts. Post what we build in owners' words, and ask clients to post about their new site or system.", "SEO Stuff, Nov"],
      ["Answer in the places owners ask each other", "Hospitality owners' Facebook and WhatsApp groups and LinkedIn. Answer plainly, don't pitch.", "Propellic"]
    ]
  },
  {
    pause: true,
    title: "Authority is slow: allow 4 to 8 weeks",
    body: "Our rule of thumb, not from a study: new reviews, links and mentions take roughly 4 to 8 weeks to show in answers. Don't re-test weekly."
  },

  {
    icon: "11", title: "Pages wave 3: rules, seasons and choosing a supplier", time: "From about February 2027 · after wave 2 has data",
    intro: "The rules pages need the most care: a wrong fee or rule damages trust more than no page. Take every figure from the official source, link it, date it, and re-check it every quarter.",
    items: [
      ["Guide: Tourism and catering levies and licensing in Kenya, in plain words", "Who pays what, to whom, how often, and the licences a hotel, restaurant or tour operator needs. Sources: Tourism Regulatory Authority, Tourism Fund, KRA, Kwale County. Ends with: Jahazi (eTIMS) and Safina (records).", "Official sources only"],
      ["Guide: Kenya's eTA for visitors: what hotels and tour operators should tell guests", "Who needs it, how long it takes, what it costs, the official site (and the fake ones). Guests ask their hosts. Ends with: a booking page that answers it before they ask.", "Official source only"],
      ["Guide: How to fill rooms in Diani's low season", "Which months are quiet, who travels then (residents, conferences, long stays), offers that work, and how to be found for them. Ends with: our digital marketing.", ""],
      ["Guide: Spreadsheet or hotel software: when does a small guest house need a system?", "Honest signs you're ready and signs you're not. Ends with: Safina.", "SEO Stuff, 22 Sep: say who it's not for"],
      ["Guide: Choosing a POS for a restaurant or beach bar in Kenya", "eTIMS, M-Pesa, e-menu, offline use, stock, staff accounts, price: what to ask any vendor. Ends with: Jahazi and its comparison page.", "Day-0 prompts J1, J2"],
      ["Guide: How to choose a digital marketing agency for a hospitality business in Kenya", "The questions to ask any agency, what proof to ask for, red flags, what it should cost. Our own answers to each. Safer than naming rivals.", "Day-0 prompt M1"],
      ["Write the next pages from what owners asked in the field", "Look at the questions logged on field visits (phase 2). Any question asked by three or more owners gets a guide.", ""]
    ]
  },

  {
    icon: "12", title: "Measure what matters, then repeat", time: "Monthly, from January 2027",
    intro: "The question isn't 'how much AI traffic', it's 'were we recommended, and did owners get in touch'.",
    items: [
      ["Run the monthly prompt test", "The gold core prompts on ChatGPT, Gemini, Google AI Mode, Copilot and Perplexity, 3 runs each, a fresh chat every time. Log named, cited, position, rivals and domains. 7 in 10 businesses AI names show up on only one assistant, so never judge from one tool.", "BrightLocal; SEO Stuff"],
      ["Score the two prompt types differently", "Recommendation prompts: track the named rate per line. How-to prompts (M2, W2): no businesses are named, so track whether prolificva.co.ke is cited.", "Day-0 data"],
      ["Watch for our first non-branded searches", "The real sign we're being found: impressions for 'web design Diani', 'hotel software Kenya', 'digital marketing Diani' and similar. Today there are none.", "Search Console, 23 Nov"],
      ["Watch branded searches next to AI referrals", "If 'prolific va' searches rise while AI referrals stay flat, AI is probably sending people through Google.", "Similarweb via SEO Stuff"],
      ["Check Search Console's Generative AI report", "AI Overview and AI Mode impressions by page. Ignore 9–11 Nov 2026 (logging error).", "SEO Stuff, Nov", "quick"],
      ["Count enquiries and signed clients by source", "Form field, call notes and field visits. The number that matters is travel, tourism and hospitality clients signed in Diani.", ""],
      ["Re-test after each major AI model release", "A release can change what a model knows. Re-run the prompt bank within 2 to 4 weeks of a big one.", "SEO Stuff, 14 Sep"]
    ]
  }
];

const phasesEl = document.getElementById("phases");
const KEY = "pva-geo-checklist-v5";
const TAGS = { quick: "Quick win" };
let state = {};
let filter = "all";
try { state = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }
const steps = []; /* {key, title, phaseEl, rowEl} in order */

function isDone(key, it) { return key in state ? state[key] : it[4] === "done"; }

function card(num, title, sub, right) {
  const phase = document.createElement("div");
  phase.className = "phase";
  phase.innerHTML = `
    <div class="phase-head">
      <div class="phase-num">${num}</div>
      <div class="phase-titles"><h2>${title}</h2><p>${sub}</p></div>
      <div class="phase-count">${right}</div><div class="chevron">▼</div>
    </div>
    <div class="phase-body"></div>`;
  phase.querySelector(".phase-head").addEventListener("click", () => {
    const wasOpen = phase.classList.contains("open");
    phasesEl.querySelectorAll(".phase.open").forEach(p => p.classList.remove("open"));
    if (!wasOpen) {
      phase.classList.add("open");
      setTimeout(() => phase.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
    }
  });
  phasesEl.appendChild(phase);
  return phase;
}

let idx = 0;
DATA.forEach(block => {
  if (block.pause) {
    const p = document.createElement("div");
    p.className = "pause" + (block.gate ? " gate" : "");
    p.innerHTML = `<div class="pause-icon">${block.gate ? "⛔" : "⏸"}</div><div class="pause-body"><b>${block.title}</b><p>${block.body}</p></div>`;
    phasesEl.appendChild(p);
    return;
  }

  if (block.prompts) {
    const total = PROMPTS.reduce((n, g) => n + g[1].length, 0);
    const phase = card("?", "The prompt bank", "What owners type when they look for help", total + " prompts");
    const groups = PROMPTS.map(g => `<div class="prompt-group"><h3>${g[0]}</h3><ol>${
      g[1].map(q => `<li${q.startsWith("*") ? ' class="core"' : ""}>${q.replace(/^\*/, "")}</li>`).join("")}</ol></div>`).join("");
    phase.querySelector(".phase-body").innerHTML =
      `<div class="phase-intro">Phrased the way hotel, villa, tour and restaurant owners in Diani ask. <span class="gold">Gold numbers</span> are the monthly core set. How-to prompts (M2 and W2) never name businesses, so judge them on whether we are cited.</div>
       ${groups}
       <div class="prompt-tools"><button class="copy-btn" type="button">Copy all prompts</button><span class="copy-msg"></span></div>`;
    phase.querySelector(".copy-btn").addEventListener("click", () => {
      const text = PROMPTS.map(g => g[0] + "\n" + g[1].map(q => "- " + q.replace(/^\*/, "")).join("\n")).join("\n\n");
      navigator.clipboard.writeText(text).then(() => { phase.querySelector(".copy-msg").textContent = "Copied"; });
    });
    return;
  }

  if (block.results) {
    const phase = card("✓", "Where we stand today", "AI test Oct 2026 · search data to 21 Nov 2026", "read first");
    phase.querySelector(".phase-body").innerHTML = RESULTS_HTML;
    return;
  }

  const n = idx++;
  const phase = card(block.icon, block.title, block.time, "");
  phase.classList.add("has-steps");
  const body = phase.querySelector(".phase-body");
  if (block.intro) body.insertAdjacentHTML("beforeend", `<div class="phase-intro">${block.intro}</div>`);
  const list = document.createElement("div");
  list.className = "items";
  body.appendChild(list);

  block.items.forEach((it, i) => {
    const key = "p" + n + "-i" + i;
    const row = document.createElement("div");
    row.className = "item" + (isDone(key, it) ? " done" : "") + (it[3] === "quick" ? " is-quick" : "");
    row.dataset.key = key;
    const tag = TAGS[it[3]] ? `<span class="tag">${TAGS[it[3]]}</span>` : "";
    const src = it[2] ? `<p class="item-src">Source: ${it[2]}</p>` : "";
    row.innerHTML = `
      <button class="cb" type="button" aria-label="Mark done"></button>
      <div class="item-body">
        <p class="item-title">${it[0]}${tag}</p>
        <button class="more" type="button">Show details ▾</button>
        <div class="item-detail" hidden><p class="item-desc">${it[1]}</p>${src}</div>
      </div>`;
    const setCb = () => { row.querySelector(".cb").innerHTML = row.classList.contains("done") ? "✓" : ""; };
    setCb();
    row.querySelector(".cb").addEventListener("click", () => {
      const on = !row.classList.contains("done");
      state[key] = on;
      row.classList.toggle("done", on);
      setCb();
      save();
      refresh();
    });
    const more = row.querySelector(".more");
    const det = row.querySelector(".item-detail");
    const showDetail = open => { det.hidden = !open; more.textContent = open ? "Hide details ▴" : "Show details ▾"; };
    more.addEventListener("click", () => showDetail(det.hidden));
    row.querySelector(".item-title").addEventListener("click", () => showDetail(det.hidden));
    row._open = showDetail;
    list.appendChild(row);
    steps.push({ key, title: it[0], phase, row });
  });
  phase._list = list;
});

function refresh() {
  let done = 0;
  phasesEl.querySelectorAll(".phase.has-steps").forEach(phase => {
    const rows = [...phase._list.children];
    const d = rows.filter(r => r.classList.contains("done")).length;
    done += d;
    const c = phase.querySelector(".phase-count");
    c.textContent = d + "/" + rows.length;
    c.classList.toggle("all-done", d === rows.length);
    let shown = 0;
    rows.forEach(r => {
      const show = filter === "all" || (filter === "todo" && !r.classList.contains("done")) ||
        (filter === "quick" && r.classList.contains("is-quick") && !r.classList.contains("done"));
      r.hidden = !show;
      if (show) shown++;
    });
    phase.classList.toggle("filtered-empty", filter !== "all" && shown === 0);
  });
  const total = steps.length;
  document.getElementById("total").textContent = total;
  document.getElementById("stepCount").textContent = total;
  document.getElementById("done").textContent = done;
  document.getElementById("fill").style.width = total ? (done / total * 100) + "%" : "0%";

  const next = steps.find(s => !s.row.classList.contains("done"));
  const nx = document.getElementById("next");
  if (next) {
    nx.hidden = false;
    nx.querySelector(".next-phase").textContent = "Phase " + next.phase.querySelector(".phase-num").textContent + " · " + next.phase.querySelector("h2").textContent;
    nx.querySelector(".next-title").innerHTML = next.title;
    nx._target = next;
  } else nx.hidden = true;
}

document.getElementById("next").addEventListener("click", () => {
  const t = document.getElementById("next")._target;
  if (!t) return;
  phasesEl.querySelectorAll(".phase.open").forEach(p => p.classList.remove("open"));
  t.phase.classList.add("open");
  t.row._open(true);
  setTimeout(() => t.row.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
  t.row.classList.add("flash");
  setTimeout(() => t.row.classList.remove("flash"), 1600);
});

document.querySelectorAll(".fb").forEach(b => b.addEventListener("click", () => {
  filter = b.dataset.f;
  document.querySelectorAll(".fb").forEach(x => x.classList.toggle("on", x === b));
  refresh();
}));

document.getElementById("phaseCount").textContent = idx;
refresh();
