const http = require("http");
const https = require("https");

function fetchStories(callback) {
  https.get("https://time.com/feed/", (res) => {
    //console.log("Status Code:", res.statusCode);
    if (res.statusCode !== 200) {
      console.error("Non-200 status code:", res.statusCode);
      callback([]);
      return;
    }

    let chunks = [];

    res.on("data", (chunk) => {
      chunks.push(chunk);
    });

    res.on("end", () => {
      try {
        const xml = Buffer.concat(chunks).toString("utf-8");

        // Regex to match <item> elements with title and link
        const regex = /<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>(https:\/\/time\.com\/[^<]+)<\/link>/g;
        let match;
        let stories = [];

        while ((match = regex.exec(xml)) !== null && stories.length < 6) {
          let title = match[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim(); 
          let link = match[2].trim();
          if (title && link && link.includes("time.com")) {
            stories.push({ title, link });
          }
        }

        if (stories.length === 0) {
          console.log("No stories found in RSS feed. Check XML structure or try homepage.");
        } else {
          console.log(stories);
        }

        callback(stories);
      } catch (err) {
        console.error("Error parsing XML:", err.message);
        callback([]);
      }
    });
  }).on("error", (err) => {
    console.error("Error fetching stories:", err.message);
    callback([]);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/getTimeStories" && req.method === "GET") {
    fetchStories((stories) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",   // allow all origins for showing in the Frontend
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
        });

      res.end(JSON.stringify(stories));
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/getTimeStories`);
});







/*Run with:

node server.js


Call:

http://localhost:3000/getTimeStories
*/