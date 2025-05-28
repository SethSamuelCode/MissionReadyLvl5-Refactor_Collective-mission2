// ------------------ SETUP AND INSTALL ----------------- //

require("dotenv").config(); // Load environment variables from .env
const express = require("express"); // Express web server
const app = express();
const cors = require("cors"); // CORS middleware
const PORT = process.env.SERVER_LISTEN_PORT; // Port from environment
const assert = require("node:assert/strict"); // Assertion utility for debugging


// --------------------- MIDDLEWARES -------------------- //

const morgan = require("morgan"); // HTTP request logger
app.use(morgan("dev")); // Log requests to console
app.use(express.json()); // Parse JSON bodies 

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

// api3 function
const { calculatePremium } = require('./api3/calculatePremium');

// ----------------------- ROUTES ----------------------- //

// ------------------------ KENT ------------------------ //
app.post('/api/quote', (req, res) => {
  const { car_value, risk_rating } = req.body;

  try {
      const result = calculatePremium(car_value, risk_rating);
      res.json(result);
  } catch (error) {
      res.status(400).json({ error: "there is an error" });
  }
});
// ----------------------- RACHEL ----------------------- //

// ------------------------ SETH ------------------------ //
const {api4}=require("./api4/api4")

app.post("/api/api4",(req,resp)=>{
  resp.send(api4(req.body))
})

// ---------------------- VALENTINE --------------------- //



// Health check/test GET endpoint
app.get("/test", (req, resp) => {
  resp.status(200).json({ status: "success", data: "youve hit /test" });
});

// Start the Express server
app
  .listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    console.log("server error !!!!", error);
  });
