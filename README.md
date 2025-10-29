# Netflix 🎥 Random Show Suggester

A front-end project where I built a feature prototype inspired by Netflix: a **Random Show Suggestion** tool. This feature lets users pick a genre or select “Random” to instantly get a show suggestion from that category. The project focuses on JavaScript logic, DOM manipulation, and creating an interactive user experience.

---

## 🧠 What I Built

I implemented the logic behind two core functions in `script.js`:

1. **chooseRandomGenre()** — randomly selects one of the available genres (`drama`, `fantasy`, or `comedy`).
2. **displayRandomShow(genre)** — displays a random show from the chosen genre or, if “Random” is selected, from any genre.

These functions interact with helper methods provided in `provided.js` to generate random numbers and render show titles dynamically on the page.

---

## ⚙️ How It Works

* The app contains predefined arrays of shows for each genre.
* When a user chooses a genre from the dropdown, the script picks a random index from that genre’s array using `getRandomNumber()`.
* The chosen show is displayed on the webpage through the `displayShow()` function.
* Selecting “Random” triggers `chooseRandomGenre()` first, then follows the same logic.

---

## 💻 Tech Stack

* **HTML/CSS:** Structure and layout of the interface
* **JavaScript:** Core functionality, DOM updates, randomization logic

---

## ▶️ Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/<yourusername>/Netflix-Random-Show-Suggester.git
   cd Netflix-Random-Show-Suggester
   ```
2. Open `index.html` in your browser.
3. Choose a genre or “Random” from the dropdown to test the feature.

---

## 🎯 What I Learned

* Using helper functions to keep code modular and reusable
* Implementing randomness and dynamic updates with the DOM
* Testing browser interactivity and debugging UI behavior in real time

---

## 🙌 Acknowledgment

This project was originally developed as part of my experience in the **Global Career Accelerator**, which helped me strengthen my practical front-end development skills and build projects inspired by real-world features.

---

## 👩🏾‍💻 Author

**Otioh Marie-Lynn Konan**
AI Major & Cyberdefense Minor | Illinois Tech
[LinkedIn](https://linkedin.com/in/otiohkonan) | [GitHub](https://github.com/<yourusername>)
