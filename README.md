### Weather App: A Real-time Weather Service

This is a modern, responsive web application that provides real-time weather information for any city around the world. Built with Flask and the OpenWeatherMap API, the project is designed for both ease of use and production readiness.

### Key Features

  * **Comprehensive Weather Data:** Get detailed information including temperature, humidity, wind speed, pressure, and weather conditions.
  * **Dynamic User Interface:** The application's background changes automatically to match the current weather conditions (e.g., clear, rainy, cloudy).
  * **Geolocation Support:** Users can instantly retrieve weather data for their current location.
  * **Production Ready:** The project includes secure environment variable management, robust error handling, and deployment configurations for multiple platforms.
  * **RESTful API:** A dedicated JSON endpoint is available for fetching weather data, allowing for easy integration with other services.

### Getting Started

There are two primary ways to set up and run this project locally.

#### Option 1: Quick Setup (Windows)

1.  Simply double-click the `run.bat` file in the project's root directory.
2.  This script will automatically set up a virtual environment, install all dependencies, and start the application.

#### Option 2: Manual Setup

1.  Clone the repository and navigate into the project directory.
2.  Set up and activate a virtual environment.
3.  Install the required Python packages using `pip install -r requirements.txt`.
4.  Create a `.env` file from the `.env.example` template and add your OpenWeatherMap API key.
5.  Run the application with `python app.py`.
6.  Open your web browser and go to `http://localhost:5000`.

### API Endpoints

  * **Web Interface**:
      * `GET /`: Displays the main search form.
      * `POST /`: Processes city search requests.
  * **JSON API**:
      * `POST /api/weather`: Accepts a JSON object with a `city` key and returns weather data.

### Project Structure

```
weather-app/
├── app.py                 # Main Flask application with API routes
├── requirements.txt       # Python dependencies
├── Procfile               # Heroku deployment configuration
├── run.bat                # Windows startup script
├── static/
│   ├── css/
│   │   └── style.css      # Styling with dynamic themes
│   └── js/
│       └── weather.js     # Interactive frontend functionality
└── templates/
    ├── index.html         # Homepage with search form
    ├── weather.html       # Weather results display
    └── 404.html           # Custom 404 error page
```

### Deployment

This application is configured for easy deployment on platforms such as Heroku, Vercel, Railway, and Render. For detailed instructions, please refer to the `DEPLOYMENT.md` file.

### License

This project is open source and licensed under the MIT License.

### Support & Troubleshooting

If you encounter any issues, please ensure that:

  * Your API key is set up correctly.
  * You have a stable internet connection.
  * The city name is spelled correctly.
