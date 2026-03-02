# 
# 
# this file is used to start both the frontend and backend of the application
# 
# 

# Go to api folder
cd .\api

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Start backend in new window
Start-Process powershell -ArgumentList "cd '$PWD'; python api.py"

# Go back to root
cd ..

# Start frontend
Start-Process powershell -ArgumentList "npm start"