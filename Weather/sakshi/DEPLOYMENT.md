# Deployment Guide for Weather App

## Platform Deployment Options

### 1. Heroku Deployment

1. **Install Heroku CLI**
   - Download from: https://devcenter.heroku.com/articles/heroku-cli

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   heroku create your-weather-app-name
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set WEATHER_API_KEY=91a973c4927d8c38d114241754d93d05
   heroku config:set SECRET_KEY=your-secret-key-here
   heroku config:set FLASK_ENV=production
   ```

5. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### 2. Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - WEATHER_API_KEY=91a973c4927d8c38d114241754d93d05
   - SECRET_KEY=your-secret-key-here
   - FLASK_ENV=production

### 3. Railway Deployment

1. **Connect GitHub Repository**
   - Go to railway.app
   - Connect your GitHub account
   - Import repository

2. **Set Environment Variables**
   - WEATHER_API_KEY=91a973c4927d8c38d114241754d93d05
   - SECRET_KEY=your-secret-key-here
   - FLASK_ENV=production

### 4. Render Deployment

1. **Create account at render.com**
2. **Connect GitHub repository**
3. **Set Build Command**: `pip install -r requirements.txt`
4. **Set Start Command**: `gunicorn app:app`
5. **Add Environment Variables**:
   - WEATHER_API_KEY=91a973c4927d8c38d114241754d93d05
   - SECRET_KEY=your-secret-key-here
   - FLASK_ENV=production

## Local Development

1. **Setup Virtual Environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # Windows
   source venv/bin/activate  # macOS/Linux
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run Application**
   ```bash
   python app.py
   ```

## Environment Variables Required

- `WEATHER_API_KEY`: Your OpenWeatherMap API key
- `SECRET_KEY`: Flask secret key for sessions
- `FLASK_ENV`: production/development
- `PORT`: Port number (optional, defaults to 5000)

## Features for Deployment

✅ **Production Ready**
- Environment variable configuration
- Error handling and logging
- Security best practices
- Responsive design

✅ **API Endpoints**
- `/` - Main web interface
- `/api/weather` - JSON API endpoint

✅ **Frontend Features**
- Real-time weather updates
- Geolocation support
- Loading states
- Error handling
- Mobile responsive

✅ **Performance**
- Optimized images
- Minimal JavaScript
- Efficient API calls
- Caching headers

## Monitoring and Logs

Most platforms provide built-in logging. Check your deployment platform's documentation for:
- Application logs
- Error monitoring
- Performance metrics
- Uptime monitoring

## Security Notes

- API key is stored as environment variable
- Input validation on all forms
- HTTPS enforced in production
- No sensitive data in client-side code
