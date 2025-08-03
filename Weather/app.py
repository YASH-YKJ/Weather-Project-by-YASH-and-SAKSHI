import os
import requests
from flask import Flask, render_template, request, flash, jsonify
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'weather-app-secret-key-2025')

# OpenWeatherMap API configuration
API_KEY = os.getenv('WEATHER_API_KEY')
BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

@app.route('/api/weather', methods=['POST'])
def api_weather():
    """API endpoint for getting weather data"""
    data = request.get_json()
    
    if not data or 'city' not in data:
        return jsonify({'error': 'City name is required'}), 400
    
    city = data['city']
    
    if not API_KEY:
        return jsonify({'error': 'Weather API key not configured'}), 500
    
    try:
        params = {
            'q': city,
            'appid': API_KEY,
            'units': 'metric'
        }
        
        response = requests.get(BASE_URL, params=params, timeout=10)
        
        if response.status_code == 200:
            weather_data = response.json()
            
            result = {
                'success': True,
                'data': {
                    'city': weather_data['name'],
                    'country': weather_data['sys']['country'],
                    'temperature': round(weather_data['main']['temp']),
                    'condition': weather_data['weather'][0]['main'],
                    'description': weather_data['weather'][0]['description'].title(),
                    'wind_speed': weather_data['wind']['speed'],
                    'humidity': weather_data['main']['humidity'],
                    'icon': weather_data['weather'][0]['icon'],
                    'feels_like': round(weather_data['main']['feels_like']),
                    'pressure': weather_data['main']['pressure']
                }
            }
            return jsonify(result)
        
        elif response.status_code == 404:
            return jsonify({'error': f'City "{city}" not found'}), 404
        else:
            return jsonify({'error': 'Unable to fetch weather data'}), 500
            
    except requests.exceptions.Timeout:
        return jsonify({'error': 'Request timed out'}), 408
    except requests.exceptions.ConnectionError:
        return jsonify({'error': 'Connection error'}), 503
    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred'}), 500

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        city = request.form.get('city')
        if not city:
            flash('Please enter a city name!', 'error')
            return render_template('index.html')
        
        if not API_KEY:
            flash('Weather API key not configured. Please set WEATHER_API_KEY environment variable.', 'error')
            return render_template('index.html')
        
        # Make API request
        try:
            params = {
                'q': city,
                'appid': API_KEY,
                'units': 'metric'  # For Celsius temperature
            }
            
            response = requests.get(BASE_URL, params=params, timeout=10)
            
            if response.status_code == 200:
                weather_data = response.json()
                
                # Extract weather information
                weather_info = {
                    'city': weather_data['name'],
                    'country': weather_data['sys']['country'],
                    'temperature': round(weather_data['main']['temp']),
                    'condition': weather_data['weather'][0]['main'],
                    'description': weather_data['weather'][0]['description'].title(),
                    'wind_speed': weather_data['wind']['speed'],
                    'humidity': weather_data['main']['humidity'],
                    'icon': weather_data['weather'][0]['icon']
                }
                
                return render_template('weather.html', weather=weather_info)
            
            elif response.status_code == 404:
                flash(f'City "{city}" not found. Please check the spelling and try again.', 'error')
            else:
                flash('Unable to fetch weather data. Please try again later.', 'error')
                
        except requests.exceptions.Timeout:
            flash('Request timed out. Please try again.', 'error')
        except requests.exceptions.ConnectionError:
            flash('Connection error. Please check your internet connection.', 'error')
        except Exception as e:
            flash('An unexpected error occurred. Please try again.', 'error')
    
    return render_template('index.html')

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    debug = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    app.run(host='0.0.0.0', port=port, debug=debug)
