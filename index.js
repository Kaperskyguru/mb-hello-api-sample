const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// API endpoint (the demo's "Run a test" step grades this)
app.get("/api/hello", (req, res) => {
  res.json({ ok: true, message: "Hello from your API 🎉" });
});

app.get("/", (req, res) => {
  res.json({ ok: true, message: "sasAPI is running. Frontend at /__app/" });
});

app.listen(port, () => console.log("Server listening on port " + port));
