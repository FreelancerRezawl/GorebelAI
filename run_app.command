#!/bin/bash
# Move to the directory where the script is located
cd "$(dirname "$0")"

# Go into the project directory
cd demo_clean

# Start the development server
echo "Starting Gorebel AI Development Server..."
npm run dev
