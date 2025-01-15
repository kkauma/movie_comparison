# Movie Fight - Movie Comparison Application

A dynamic web application that allows users to compare two movies side by side, displaying various statistics and information from the OMDB API.

![Movie Fight Screenshot](screenshot.png) <!-- Consider adding a screenshot of your app -->

## 🎬 Features

- **Dual Search Interface**: Compare any two movies simultaneously
- **Real-time Search**: Dynamic search results as you type
- **Rich Movie Data**: View detailed information including:
  - Ratings
  - Box Office Performance
  - Awards
  - Plot Summaries
  - Year of Release
  - Movie Posters

## 🛠️ Technologies Used

- **Frontend**:

  - Vanilla JavaScript (ES6+)
  - Bulma CSS Framework
  - Axios for HTTP requests
  - Font Awesome for icons

- **Backend**:
  - Node.js
  - Express.js
  - OMDB API for movie data

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine
- OMDB API key (get one at: http://www.omdbapi.com/)

## 🌟 Key Features Explained

### Auto-Complete Search

- Debounced search functionality to prevent API overload
- Real-time results as you type
- Movie poster previews in dropdown

### Movie Comparison

- Side-by-side comparison of movie statistics
- Visual indicators for comparing metrics
- Detailed movie information display

## 📝 API Integration

The application uses the OMDB API for fetching movie data. Two main endpoints are used:

- Search endpoint: Fetches movie lists based on search terms
- Movie endpoint: Fetches detailed information for specific movies

## 🚀 Deployment

This application is configured for deployment on Vercel. The `vercel.json` file includes all necessary configuration for both static and API routes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](link-to-your-issues-page).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OMDB API for providing movie data
- Bulma CSS for the responsive design framework
- Original concept inspired by Colt Steel and Stephen Grider's JavaScript course
