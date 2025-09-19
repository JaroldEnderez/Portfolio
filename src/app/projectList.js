import movieImage from "./images/movie-app.png"
import wordle from "./images/wordle.png"

export const projectList = [
    {
        id: "movie-app",
        title: "TMDB API Movie Browsing App",
        description: "A MERN stack app that fetches movies from an API.",
        image: movieImage,
        link: "https://movie-app-clean.vercel.app/",
        tech: ["React", "Node.js", "MongoDB"],
        process: "I built a fully functional movie browsing web application using the MERN stack (MongoDB, Express, React, Node.js). The core challenge was integrating an external API (TMDB) to fetch up-to-date movie data while maintaining fast and responsive UI performance. I structured the app to allow users to browse, search, and filter movies by genre, rating, and popularity, which involved handling dynamic API queries and managing state efficiently with React hooks. I implemented a watchlist system, enabling users to save their favorite movies, which required designing a MongoDB schema for persistent storage and connecting it to the backend API routes. Handling asynchronous API calls, error states, and loading feedback for the user was an important part of the process. Additionally, I worked on the UI/UX to make the application mobile-first and visually appealing, using Tailwind CSS for rapid styling and responsive layouts. For interactivity, I added features like hover effects, dynamic rating colors, and a modal view for movie details. Through this project, I strengthened my understanding of RESTful API integration, state management in React, database design for user-specific data, and creating a seamless, interactive front-end experience.",
        subtopics: ["Database Management", "User Authentication", "API Integration", "Responsive UI"],
    },
    {
        id: "wordle",
        title: "Wordle Clone",
        description: "New York Times browser game I made from scratch. Enjoy!",
        image: wordle,
        link: "https://wordle-clone-achv.vercel.app/",
        tech: ["React", "Node.js", "MongoDB"],
        process: "I built a fully functional clone of the popular Wordle game from scratch using React. One of the biggest challenges was implementing the word-guessing logic and feedback system that makes the game engaging. I had to carefully manage state across the board and keyboard to ensure guesses updated in real-time. Manipulating the colors of the tiles and the on-screen keyboard was tricky, since it required conditional rendering based on multiple rules (correct letter, wrong position, or not in the word). I also added logic to prevent duplicate guesses, handle edge cases like invalid words, and reset the game smoothly after a win or loss. This project pushed me to think about state management, component reusability, and dynamic styling in React while delivering a polished, interactive game experience.",
        subtopics: ["Game Logic", "State Management", "Local Storage", "Responsive Design"],
    }
]