# Book Application - Sign Up & Login Functionality

This project is a Book Application that allows users to sign up, log in, and browse books by categories. It uses JavaScript for handling user authentication, dynamic book fetching, and category filtering.

## Live Demo

You can access the live demo of the project [here](https://book-application-project.netlify.app/).

## Features

- **Sign Up & Log In:** Users can sign up by creating a username and password, which are stored locally using `localStorage`. They can log in using the same credentials.
- **Book Categories:** Books are categorized, and users can browse books by categories.
- **Dark Mode Toggle:** Users can toggle between light and dark modes for better user experience.
- **Quick View:** Users can hover over book images for a quick view, showing more details about the book, and click for more information.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **LocalStorage** (for persisting user login and sign-up information)

## Functionality & JavaScript Methods Used

### 1. **Sign Up and Login Forms**
   - Used `localStorage.setItem()` to store the user information on successful sign-up.
   - On login, used `localStorage.getItem()` to retrieve the stored user information.
   - Form validation ensures the username is at least 4 characters long and the password is at least 6 characters long.
   
### 2. **Dynamic Fetching of Book Data**
   - Used `fetch()` to fetch data from APIs and dynamically display book categories and books.
   - Books and categories are fetched when the page loads, and when a user selects a category, the books for that category are fetched.
   
### 3. **Category Filtering**
   - Used event listeners to allow users to filter books by categories.
   - Books are displayed dynamically in different sections, and the user can click to view more books within a selected category.

### 4. **Dark Mode Toggle**
   - Added a dark mode toggle feature by adding/removing the `dark-mode` class from the body element using `classList.toggle()`.

### 5. **Quick View on Hover**
   - On hovering over a book image, the `mouseenter` event listener is used to display a quick view button.
   - When the quick view is clicked, a modal-like window shows detailed information about the book, including a link to purchase it from Amazon, Apple, or Barnes & Noble.

### 6. **Session Management**
   - The logged-in user's name is stored in `localStorage` so that it can be displayed on the profile section of the page.
   - On logout, the user is removed from `localStorage`, and the page is redirected to the sign-up/login page.

## How to Use

1. Open `index.html` to sign up or log in.
2. Once logged in, you will be redirected to the Book App page where you can browse books by category.
3. Click on a book's "Quick View" for more information.
4. You can toggle dark mode by clicking the dark mode button in the top corner.

## Future Improvements

- Integrate a backend for real user authentication (currently uses `localStorage`).
- Add pagination for categories and books for better scalability.
- Implement more advanced error handling and input sanitization.
- Add a feature to allow users to save favorite books.


