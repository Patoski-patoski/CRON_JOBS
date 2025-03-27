import axios from 'axios';

export default async function handler(req, res) {
    try {
        // Verify this is a GET request to the cron endpoint
        if (req.method !== 'GET') {
            return res.status(405).json({ error: 'Method Not Allowed' });
        }

        const response = await axios.get(
            "https://copperx-payout-bot-jufl.onrender.com",
            { timeout: 10000 } // Add timeout to prevent hanging
        );

        console.log("✅ Cron job executed successfully:", response.status);    
        return res.status(200).json({
            success: true,
            message: "Cron job executed",
            status: response.status
        });
    } catch (error) {
        console.error("❌ Cron job failed:", error.message);  
        return res.status(500).json({
            error: "Cron job failed",
            details: error.message
        });
    }
}
