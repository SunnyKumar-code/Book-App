let url = "https://books-backend.p.goit.global/books/top-books";
let url2 = "https://books-backend.p.goit.global/books/category-list";

async function fetchData(url) {
    try {
        let response = await fetch(url);
       
        let data = await response.json();
        console.log("Top books:", data);
        showBooks(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetchCategories(url2) {
    try {
        let response = await fetch(url2);
        
        let data = await response.json();
        displayCategories(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

let categories = document.querySelector("#type");

function displayCategories(book) {
    categories.innerHTML = "";
    book.forEach(category => {
        let p = document.createElement("p");

        p.textContent = category.list_name;
        categories.appendChild(p);
    });
}

let showBookContainer = document.querySelector(".all-book");

function showBooks(bookArray) {
    showBookContainer.innerHTML = "";
    bookArray.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book-container");
        bookDiv.innerHTML = `
            <h2>${book.list_name}</h2>
            <div class="book-card"></div>
        `;
        
        showBookContainer.appendChild(bookDiv);

        let bookCard = bookDiv.querySelector(".book-card");
        book.books.forEach(bookItem => {
            let bookImage = `<div>
             <img src="${bookItem.book_image}" alt="${bookItem.title}" width="300" height="400" />
             <h3>${bookItem.title}</h3>
             <p>${bookItem.author}</p>
            </div>
                
            `;
            bookCard.innerHTML += bookImage; 
        });
    });
}
document.querySelector(".toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

fetchCategories(url2);
fetchData(url);
