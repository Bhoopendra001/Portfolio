const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

// Contact form POST route: Save form entries in contact_entries.json
app.post("/contact", (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const entry = { name, email, phone, message, timestamp: new Date().toISOString() };

    // Read old entries
    let entries = [];
    const filePath = path.join(__dirname, "contact_entries.json");
    if (fs.existsSync(filePath)) {
        entries = JSON.parse(fs.readFileSync(filePath));
    }
    entries.push(entry);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
    res.json({ success: true, msg: "Form submitted successfully!" });
});

// GET API to view saved entries in browser
app.get("/api/contact-entries", (req, res) => {
    const filePath = path.join(__dirname, "contact_entries.json");
    if (!fs.existsSync(filePath)) return res.json([]);
    const entries = JSON.parse(fs.readFileSync(filePath));
    res.json(entries);
});

app.listen(PORT, () => {
    console.log(`🚀 Portfolio running at http://localhost:${PORT}`);
});
