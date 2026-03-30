# 🛠️ Game Developer Guide: R&D Lab

Welcome to the Learning Product R&D Lab! This guide explains how to build and integrate new arcade games into the **Game Mode Hub**.

---

## 📂 Project Structure
All new games must live in their own folder under `products/`:
```text
products/
└── your-game-name/
    ├── index.html        <-- Main Entry Point
    ├── prd.md            <-- Requirements
    ├── status.md         <-- Development Status
    └── assets/           <-- Images, Audio, etc.
```

---

## 🚀 Quick Start (Using the Boilerplate)
The fastest way to build a game is to use the [**Game Boilerplate**](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/shared/game-boilerplate/).
1. Copy the contents of `shared/game-boilerplate/` into your new product folder.
2. Update the `prd.md` with your game design.
3. Start coding!

---

## 📐 Data Integration
All games should pull questions from the central [**`shared/sample-questions.csv`**](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/shared/sample-questions.csv) to ensure they work with our production-ready schema.

### Data v2.0 Schema
Your game should handle these primary fields:
*   `question_en / question_my / question_cn`: Handle multi-language display.
*   `answer1..4`: Answer options.
*   `correct_answer`: Validation string.
*   `subject / grade_id / chapter`: Use these for filtering logic.

---

## ⚡ Technical Standards

### 🥇 1. Hub Navigation
Every game MUST have a **"Back to Hub"** button in the top left corner. 
`HTML: <a href="../../index.html">← Back to Hub</a>`

### 🥈 2. The XP System
Games must update the Hub's global XP state using `localStorage`. 
- **Correct Answer**: +10 XP
- **Effort (Attempt)**: +2 XP
- **Logic**: 
  ```javascript
  function addXP(amount) {
      let current = parseInt(localStorage.getItem('lab_xp')) || 0;
      localStorage.setItem('lab_xp', current + amount);
  }
  ```

### 🥉 3. Performance & UX
- **No Blocking**: Do not stop the game for long animations.
- **Endless Mode**: By default, games should loop indefinitely unless it's a "Test Mode" set.
- **Subtle Soft Stops**: At 10 questions or 5 mins, show a subtle UI notification (don't force a popup).

---

## 🧪 Testing Locally
1. Run `start-server.bat` in the root folder.
2. Open `http://localhost:8080` in your browser.
3. Verify your game loads the CSV questions correctly.
