// ------------------ SETUP AND INSTALL ----------------- //

require("dotenv").config(); // Load environment variables from .env
const express = require("express"); // Express web server
const app = express();
const cors = require("cors"); // CORS middleware
const PORT = process.env.SERVER_LISTEN_PORT; // Port from environment
const assert = require("node:assert/strict"); // Assertion utility for debugging
const { calculateRiskRating } = require("./api2/functions/calculateRiskRating.js")

// --------------------- MIDDLEWARES -------------------- //

const morgan = require("morgan"); // HTTP request logger
app.use(morgan("dev")); // Log requests to console
app.use(express.json({ limit: "10MB" })); // Parse JSON bodies up to 10MB. this is the limit for google API

// Configure CORS to allow only specific origins
const corsConfigs = {
  origin: (incomingOrigin, allowedAccess) => {
    // Allow localhost (any port) and production domain
    const allowedOrigins = [/^http:\/\/localhost:\d+$/];
    // Allow requests with no origin (e.g., curl, server-to-server)
    if (!incomingOrigin || allowedOrigins.some((testOrigin) => testOrigin.test(incomingOrigin))) {
      allowedAccess(null, true); // Allow
    } else {
      allowedAccess(null, false); // Deny
    }
  },
};
app.use(cors(corsConfigs)); // Apply CORS policy

// ---------------------- FUNCTIONS --------------------- //



// ----------------------- ROUTES ----------------------- //

// ------------------------ KENT ------------------------ //

// ----------------------- RACHEL ----------------------- //
//___ POST REQUEST HANDLER ___
//-- Handles the post request to the /risk-rating endpoint and expects a JSON body with claim history.
//-- It calculates the risk rating based on the claim history and returns it in the response.
//-- If the input is invalid, it returns an error message.

app.post("/risk-rating", (req, res) => {
    try {
        const claimHistory = req.body.claim_history;
        const riskRating = calculateRiskRating(claimHistory);
        res.json({ risk_rating: riskRating });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// ------------------------ SETH ------------------------ //

// ---------------------- VALENTINE --------------------- //



// Health check/test GET endpoint
app.get("/test", (req, resp) => {
  resp.status(200).json({ status: "success", data: "you've hit /test" });
});

// Start the Express server
app
  .listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log("server error !!!!", error);
  });
