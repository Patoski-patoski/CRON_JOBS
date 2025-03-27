#!/bin/bash

# Write "Hello World" to cron.txt
echo "Hello World!! Keep running" >> ./cron.txt

# Add a new line to the file
echo "" >> ./cron.txt

# Execute the curl command and store its response in cron.txt
curl -H "Content-Type: application/json" https://copperx-payout-bot-jufl.onrender.com/ >> ./cron.txt

# Add another new line to the file
echo "" >> ./cron.txt
