import axios from 'axios';

// Main handler for Vercel Serverless
export default async function handler(req, res) {
    try {
        const message = "⏰ Hey! This is your scheduled cron job!";
        
       const response = await axios.get(
	       "https://copperx-payout-bot-jufl.onrender.com"
       );

        console.log("✅ Cron job executed successfully.");
        return res.status(200).json({
		success: true,
		message: "Cron job executed" 
	});
    } catch (error) {
        console.error("❌ Cron job failed:", error.message);
        return res.status(500).json({
		error: "Cron job failed",
		details: error.message 
	});
    }
}
