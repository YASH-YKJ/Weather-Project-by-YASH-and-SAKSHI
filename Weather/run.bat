@echo off
echo Starting Weather App...
echo.

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo.
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install requirements
echo Installing requirements...
pip install -r requirements.txt
echo.

REM Check if .env file exists
if not exist ".env" (
    echo.
    echo Creating .env file with your API key...
    copy .env.example .env
    echo.
    echo ✅ API key has been configured!
    echo.
) else (
    echo ✅ Environment file found!
)

REM Run the application
echo Starting Flask application...
echo.
echo 🌤️  Weather App is starting...
echo 🌍 Open your browser and go to: http://localhost:5000
echo 📱 Mobile-responsive design included
echo 📍 Geolocation support enabled
echo 🎨 Dynamic weather backgrounds
echo.
echo Press Ctrl+C to stop the server
echo.
python app.py
