# Weather App

A modern, responsive weather application built with Flask and OpenWeatherMap API that displays real-time weather conditions for any city worldwide.

## ✨ Features

- 🌍 **Global Weather Data**: Get weather information for any city worldwide
- 🌡️ **Comprehensive Weather Info**: Temperature, feels-like, humidity, wind speed, pressure, and weather conditions
- 🎨 **Dynamic Styling**: Background changes based on weather conditions (sunny, rainy, cloudy, etc.)
- 📱 **Fully Responsive**: Perfect experience on desktop, tablet, and mobile devices
- 📍 **Geolocation Support**: Use your current location to get weather instantly
- ⚡ **Real-time Updates**: Fetches live weather data with loading states
- 🛡️ **Robust Error Handling**: Graceful handling of invalid cities, network issues, and API errors
- 🔒 **Production Ready**: Secure environment variable management and deployment configuration
- 🎯 **RESTful API**: JSON endpoints for integration with other applications

## 🚀 Quick Start

### Option 1: Easy Setup (Windows)
1. **Double-click `run.bat`** - This will automatically:
   - Set up virtual environment
   - Install all dependencies
   - Configure environment variables
   - Start the application

### Option 2: Manual Setup
1. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application**
   ```bash
   python app.py
   ```

3. **Open your browser** to `http://localhost:5000`

## 🌐 Live Demo

The app is deployment-ready for platforms like:
- **Heroku** (with Procfile included)
- **Vercel** 
- **Railway**
- **Render**
- **PythonAnywhere**

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📸 Screenshots

The app features:
- **Homepage**: Clean search interface with geolocation support
- **Weather Display**: Beautiful cards with dynamic backgrounds
- **Mobile Responsive**: Optimized for all screen sizes
- **Error Handling**: User-friendly error messages

## 🔧 API Endpoints

### Web Interface
- `GET /` - Homepage with search form
- `POST /` - Process form submission

### JSON API
- `POST /api/weather` - Get weather data as JSON
  ```json
  {
    "city": "London"
  }
  ```

## 🎨 Weather Backgrounds

The app dynamically changes background based on conditions:
- ☀️ **Clear/Sunny**: Golden gradient
- ☁️ **Cloudy**: Purple gradient  
- 🌧️ **Rainy**: Blue gradient
- ⛈️ **Thunderstorm**: Dark gradient
- ❄️ **Snow**: Light blue/gray gradient
- 🌫️ **Fog/Mist**: Purple-blue gradient

## 📱 Interactive Features

- **Search Form**: Type city name and press Enter or click search
- **Geolocation**: Click "📍 Use My Location" for instant weather
- **Loading States**: Visual feedback during API calls
- **Error Messages**: Clear feedback for any issues
- **Responsive Design**: Works perfectly on all devices

## 🔒 Security & Configuration

- ✅ **Environment Variables**: Secure API key management
- ✅ **Input Validation**: Prevents malicious input
- ✅ **Error Handling**: Graceful degradation
- ✅ **Production Ready**: Optimized for deployment

## 📁 Project Structure

```
weather-app/
├── app.py                 # Main Flask application with API routes
├── requirements.txt       # Python dependencies
├── Procfile              # Heroku deployment configuration
├── runtime.txt           # Python version for deployment
├── package.json          # Project metadata
├── .env                  # Environment variables (configured)
├── .env.example          # Environment template
├── .gitignore           # Git ignore rules
├── DEPLOYMENT.md        # Detailed deployment guide
├── run.bat              # Windows startup script
├── static/
│   ├── css/
│   │   └── style.css    # Responsive styling with weather themes
│   └── js/
│       └── weather.js   # Interactive frontend functionality
└── templates/
    ├── index.html       # Homepage with enhanced UX
    ├── weather.html     # Weather results display
    └── 404.html         # Error page
```

## 🌟 Technical Features

### Frontend
- **Vanilla JavaScript**: No heavy frameworks, fast loading
- **CSS Grid & Flexbox**: Modern responsive layout
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: Proper ARIA labels and semantic HTML

### Backend
- **Flask Framework**: Lightweight and efficient
- **RESTful API**: JSON endpoints for integration
- **Error Handling**: Comprehensive exception management
- **Environment Configuration**: Production/development modes

### Deployment
- **Docker Ready**: Easy containerization
- **Platform Agnostic**: Works on any Python hosting
- **Environment Variables**: Secure configuration
- **Production Optimizations**: Gunicorn, error handling, logging

## 🔧 Development

### Local Development
```bash
# Clone repository
git clone <repository-url>
cd weather-app

# Setup virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Run in development mode
python app.py
```

### Environment Variables
```bash
WEATHER_API_KEY=91a973c4927d8c38d114241754d93d05  # Your OpenWeatherMap API key
SECRET_KEY=your-secret-key-here                   # Flask session key
FLASK_ENV=development                             # development/production
FLASK_DEBUG=True                                  # Enable debug mode
PORT=5000                                         # Port number (optional)
```

## 🚀 Deployment

The app is pre-configured for easy deployment. See `DEPLOYMENT.md` for platform-specific instructions:

- **Heroku**: `git push heroku main`
- **Vercel**: `vercel`
- **Railway**: Connect GitHub repository
- **Render**: Connect repository and deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter issues:
1. ✅ Check API key is set correctly
2. ✅ Verify internet connection
3. ✅ Confirm city name spelling
4. ✅ Check API rate limits (1000 calls/day on free plan)

## 🎯 Future Enhancements

- 📅 7-day weather forecast
- � Weather charts and trends
- � Weather alerts and notifications
- �️ Interactive weather maps
- � Historical weather data
- 🌐 Multi-language support

