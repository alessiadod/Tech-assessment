# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?

    2.5 hours

2. What would you add to your solution if you had more time?

    - Implement navigation to allow users to browse all the books in the JSON file, with controls to navigate
      between pages. 
    - Add an option for the user to select how many books to dislay per page and display full JSON file. 
    -  Add a search feature to filter books by author or title.
    - Make the "READ MORE" button functional by displaying additional details from the JSON file, such as language, country, and year of publication.

3. Share a code snippet that you are proud of and explain what it does

  ```js
// Load initial state from localStorage or set to an empty array
const [favourites, setFavourites] = useState(() => {
  const stored = localStorage.getItem("favourites");
  return stored ? JSON.parse(stored) : [];
});

// Sync favourites with localStorage whenever it changes
useEffect(() => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}, [favourites]);
```
  After implementing the core functionality, I noticed that the favourites list was reset on page reload. To address this, I used localStorage to persist the favourites state and ensure data remains available across sessions.


4. How would you track down a performance issue in production? Have you ever had to do this?

    I have not but I'm eager to learn more about it! 
---

# Comments

---

# Submission

After completing the challenge, commit it to Github.
