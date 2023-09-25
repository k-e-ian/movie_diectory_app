# React Movie Search App

![Movie Search App](https://example.com/movie-search-app-screenshot.png)

This is a simple React-based movie search application that allows users to search for movies and view popular movies. It leverages the TMDB API for movie data retrieval.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Credits](#credits)
- [License](#license)

## Features

- **Search Movies:** Users can enter movie titles in the search bar and press Enter or click the "Search" button to find movies matching their query.

- **View Popular Movies:** The app displays a list of popular movies by default when loaded.

- **Movie Details:** Clicking on a movie card displays more details about the selected movie, including its poster, title, and release date.

## Installation

To set up this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/k-e-ian/movie_diectory_app.git
   ```
2. Navigate to the project directory:

    ```bash
    cd tmdb_react
    ```
3. Install project dependencies:

    ```bash
    npm install
    ```
4. Obtain a TMDB API Key:

    *    Sign up for an account at The Movie Database (TMDb).
    *    Generate an API key in your TMDb account settings.
    *    Replace 'YOUR_TMDB_API_KEY' with your actual API key in src/config/config.js.

### Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your web browser and go to http://localhost:3000 to access the application.

### How It Works

    * The application uses React for its user interface.
    * It fetches movie data from the TMDB API for both popular movies and search results.
    * Users can search for movies by entering keywords in the search bar and pressing Enter or clicking the "Search" button.
    * Popular movies are displayed by default when the app is loaded.
    * Movie details are shown when a user clicks on a movie card.

### Credits

    * This project was created by Ian Kitembe.
    * Movie data is provided by The Movie Database (TMDb).
