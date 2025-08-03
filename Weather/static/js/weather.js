// Weather App JavaScript
class WeatherApp {
    constructor() {
        this.form = document.querySelector('.weather-form');
        this.cityInput = document.querySelector('input[name="city"]');
        this.loadingDiv = null;
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
        
        // Add enter key support
        if (this.cityInput) {
            this.cityInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleFormSubmit(e);
                }
            });
        }

        // Add geolocation support
        this.addGeolocationButton();
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        
        const city = this.cityInput.value.trim();
        if (!city) {
            this.showAlert('Please enter a city name!', 'error');
            return;
        }

        this.showLoading();
        
        try {
            const response = await fetch('/api/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ city: city })
            });

            const data = await response.json();
            
            if (response.ok && data.success) {
                this.displayWeather(data.data);
            } else {
                this.showAlert(data.error || 'Failed to fetch weather data', 'error');
            }
        } catch (error) {
            this.showAlert('Network error. Please check your connection.', 'error');
        } finally {
            this.hideLoading();
        }
    }

    showLoading() {
        if (!this.loadingDiv) {
            this.loadingDiv = document.createElement('div');
            this.loadingDiv.className = 'loading-spinner';
            this.loadingDiv.innerHTML = `
                <div class="spinner"></div>
                <p>Fetching weather data...</p>
            `;
        }
        
        const container = document.querySelector('.weather-card');
        container.appendChild(this.loadingDiv);
        
        // Disable form
        const submitBtn = this.form.querySelector('button');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Loading...';
    }

    hideLoading() {
        if (this.loadingDiv && this.loadingDiv.parentNode) {
            this.loadingDiv.parentNode.removeChild(this.loadingDiv);
        }
        
        // Re-enable form
        const submitBtn = this.form.querySelector('button');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get Weather';
    }

    displayWeather(weather) {
        // Create weather display HTML
        const weatherHTML = `
            <div class="weather-result-inline">
                <div class="weather-header-inline">
                    <h2>${weather.city}, ${weather.country}</h2>
                    <button class="new-search-btn" onclick="location.reload()">New Search</button>
                </div>
                
                <div class="weather-main-inline">
                    <div class="temperature-inline">
                        <span class="temp-value">${weather.temperature}°C</span>
                        <span class="feels-like">Feels like ${weather.feels_like}°C</span>
                    </div>
                    <div class="weather-icon-inline">
                        <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png" 
                             alt="${weather.description}">
                        <p class="weather-description">${weather.description}</p>
                    </div>
                </div>
                
                <div class="weather-details-inline">
                    <div class="detail-item">
                        <span class="detail-icon">💨</span>
                        <span class="detail-label">Wind</span>
                        <span class="detail-value">${weather.wind_speed} m/s</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">💧</span>
                        <span class="detail-label">Humidity</span>
                        <span class="detail-value">${weather.humidity}%</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🌡️</span>
                        <span class="detail-label">Pressure</span>
                        <span class="detail-value">${weather.pressure} hPa</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🌤️</span>
                        <span class="detail-label">Condition</span>
                        <span class="detail-value">${weather.condition}</span>
                    </div>
                </div>
            </div>
        `;

        // Replace form with weather data
        const weatherCard = document.querySelector('.weather-card');
        const existingResult = weatherCard.querySelector('.weather-result-inline');
        if (existingResult) {
            existingResult.remove();
        }

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = weatherHTML;
        weatherCard.appendChild(tempDiv.firstElementChild);

        // Update background based on weather condition
        this.updateBackground(weather.condition.toLowerCase());
        
        // Hide the form
        this.form.style.display = 'none';
        document.querySelector('.instructions').style.display = 'none';
    }

    updateBackground(condition) {
        document.body.className = `weather-bg-${condition}`;
    }

    showAlert(message, type) {
        // Remove existing alerts
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;

        const weatherCard = document.querySelector('.weather-card');
        weatherCard.insertBefore(alertDiv, weatherCard.firstChild);

        // Auto-remove alert after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 5000);
    }

    addGeolocationButton() {
        if (!navigator.geolocation) return;

        const geolocationBtn = document.createElement('button');
        geolocationBtn.type = 'button';
        geolocationBtn.className = 'geolocation-btn';
        geolocationBtn.innerHTML = '📍 Use My Location';
        geolocationBtn.addEventListener('click', () => this.getCurrentLocationWeather());

        const inputGroup = document.querySelector('.input-group');
        inputGroup.appendChild(geolocationBtn);
    }

    getCurrentLocationWeather() {
        this.showLoading();
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                
                try {
                    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=91a973c4927d8c38d114241754d93d05&units=metric`);
                    const data = await response.json();
                    
                    if (response.ok) {
                        const weather = {
                            city: data.name,
                            country: data.sys.country,
                            temperature: Math.round(data.main.temp),
                            condition: data.weather[0].main,
                            description: data.weather[0].description,
                            wind_speed: data.wind.speed,
                            humidity: data.main.humidity,
                            icon: data.weather[0].icon,
                            feels_like: Math.round(data.main.feels_like),
                            pressure: data.main.pressure
                        };
                        this.displayWeather(weather);
                    } else {
                        this.showAlert('Could not get weather for your location', 'error');
                    }
                } catch (error) {
                    this.showAlert('Failed to fetch weather data', 'error');
                }
                
                this.hideLoading();
            },
            () => {
                this.hideLoading();
                this.showAlert('Location access denied. Please enter a city manually.', 'error');
            }
        );
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});

// Add some utility functions for better UX
function formatTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
}

function getWeatherEmoji(condition) {
    const emojiMap = {
        'clear': '☀️',
        'clouds': '☁️',
        'rain': '🌧️',
        'drizzle': '🌦️',
        'thunderstorm': '⛈️',
        'snow': '❄️',
        'mist': '🌫️',
        'fog': '🌫️',
        'haze': '🌫️'
    };
    return emojiMap[condition.toLowerCase()] || '🌤️';
}
