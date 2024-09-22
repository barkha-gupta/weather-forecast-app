# Weather Forecast App

A React-based weather forecast application that provides current weather conditions and a 5-day forecast for cities worldwide.

## Live Demo

[Weather Forecast App](https://know-thy-weather.netlify.app/)

## Features

- Search for weather information by city name
- Display current weather conditions including temperature and weather description
- Show a 5-day forecast
- Toggle between Celsius and Fahrenheit
- Responsive design for various screen sizes

## Technologies Used

- React
- TypeScript
- Vite
- country-state-city library for city data
- WeatherAPI for weather data

## Setup Instructions

1. Unzip the project folder

After downloading the project ZIP file, unzip it to your desired location.

2. Navigate to the project directory:

   ```bash
   cd weather-forecast-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your WeatherAPI key:

   ```bash
   VITE_API_KEY=your_weatherapi_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:5173` to view the app.

## How It Works

1. The app uses the `WeatherContext` to manage global state, including the selected city, weather details, and forecast data.

2. When a user searches for a city, the `SearchInputBox` component updates the city in the context.

3. The `WeatherProvider` listens for changes to the city and fetches new weather data from the WeatherAPI.

4. Current weather conditions are displayed in the `WeatherDisplay` component.

5. The 5-day forecast is shown in the `ForecastLayout` component.

6. Users can toggle between Celsius and Fahrenheit using a button in the UI.
