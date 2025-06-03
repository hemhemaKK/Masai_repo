Rick and Morty Wiki Application
A web-based character encyclopedia powered by the Rick and Morty API. Users can browse characters, view detailed information, and enjoy a live clock—all in a responsive, JavaScript-powered interface.

Project Highlights
Character Gallery: Displays 6 characters per page in a 3×2 responsive grid.

Pagination: Easily navigate through all available characters with “Next” and “Previous” buttons.

Character Cards:

Image, Name, Species, and Status (Alive, Dead, Unknown)

Clickable card opens a detailed view in a new tab.

Character Details Page:

Full-size image

Detailed info: Name, Status, Species, Type, Gender

Origin & Current Location

Number of Episode Appearances

Live Footer Clock:

Format: HH:MM:SS Day Month Date, Year 

Optional Enhancements
Dark/Light Mode Toggle

Random Character Button

Table of Contents
Demo

Tech Stack

Setup & Installation

Screenshots

![Alt Text](.\screenshots\Screenshot1.png)
![Alt Text](.\screenshots\Screenshot2.png)
![Alt Text](.\screenshots\Screenshot3.png)

Challenges Faced

Demo
A live version of the app is deployed and available at:

Rick and Morty Wiki App – Live Demo
(Replace # with your Netlify/Vercel/GitHub Pages link)

Tech Stack
Frontend:

HTML5, CSS3 (Flexbox & Grid)

JavaScript (Vanilla)

API:

Rick and Morty API

Styling:

Responsive design using media queries

Deployment:

Netlify (or other hosting platform)

Setup & Installation
Prerequisites
A modern web browser (Chrome, Firefox, Edge, Safari)

Running the App
Clone or download the repository.

Open index.html in your browser.

That’s it! The app runs fully client-side.

Screenshots
(Add image files or hosted links to visuals of: the gallery, character detail page, and footer clock)

Home Page Grid

Character Detail View

Live Clock Footer

Mobile Responsive View

Challenges Faced
1. Asynchronous API Calls
Manually managing fetch() promises, error handling, and dynamic DOM updates without using React or a framework.

2. Pagination Logic
Implemented "Next" and "Previous" navigation by tracking the current page state and updating the API request. Ensured it doesn't exceed valid page limits.

3. Responsive Grid
Designed a 3×2 layout using CSS Grid, then adapted it for tablets (2×3) and mobile (1×6) using media queries.

4. Manual Routing
Used URLSearchParams to pass character IDs and retrieve them on the detail page—simulating routing behavior without a framework.

5. Live Footer Clock
Built a reusable clock function using setInterval() and Date() methods, ensuring it works seamlessly across multiple pages.