Hello there! Welcome to the Weather App.

Ever wondered what the weather is like in your city or somewhere on the other side of the world? This little app is here to tell you. It is a simple yet powerful tool that fetches real-time weather data for any city you can think of.

I built this using Python's Flask framework for the backend and good old vanilla JavaScript for the frontend. I also made sure it looks great and works perfectly on any device, from your phone to your desktop.

What's Inside?
Worldwide Weather: Just type in a city name, and you'll get the current weather. Easy.

All the Details: It's not just the temperature. You'll see humidity, wind speed, pressure, and a quick description of the weather.

Dynamic Backgrounds: My favorite part. The background of the app changes to match the weather. If it is sunny, the background is bright and sunny. If it is raining, you will see a cool, rainy gradient.

Use My Location: Do not want to type? The app can use your device's location to show you the weather right where you are.

Super Fast: I kept the frontend light with vanilla JavaScript, so there are no heavy frameworks to slow things down.

Built to Last: This project is configured to be deployed on platforms like Heroku and Vercel, so it is ready for the big leagues.

How to Get Started
It is super simple to get this running on your own machine.

The Easy Way (for Windows users)
Just double-click the run.bat file.

This script will do everything for you: set up the project, install all the necessary libraries, and get the app up and running.

The Manual Way
First, clone the repository.

Bash

git clone [your-repo-url]
cd weather-app
Next, set up a virtual environment to keep things tidy.

Bash

python -m venv venv
source venv/bin/activate  # on macOS/Linux
venv\Scripts\activate     # on Windows
Then, install all the dependencies.

Bash

pip install -r requirements.txt
You will need an API key from OpenWeatherMap. Just copy the .env.example file to a new file named .env and paste your key in there. Do not worry, Git is configured to ignore this file so your key stays safe.

Finally, fire it up.

Bash

python app.py
Open your browser and head to http://localhost:5000. Enjoy the weather.

The Technical Stuff
If you are curious about what makes this tick, here is a quick rundown.

Backend: Flask (a lightweight Python framework).

Frontend: Plain HTML, CSS (with Flexbox and Grid for responsive design), and vanilla JavaScript.

API: The OpenWeatherMap API for all the weather data.


Deployment: Configured for Heroku, Vercel, and other services with a Procfile  and 

DEPLOYMENT.md guide.

A Big Thank You!
Thanks for checking out my project. If you have any questions or just want to say hi, feel free to reach out. Happy coding.
