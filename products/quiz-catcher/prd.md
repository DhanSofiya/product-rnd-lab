# 📝 Quiz Catcher – Internal Product Requirements Document (PRD v1.0)

## 1. 🧾 Product Overview
**Product Name:** Quiz Catcher
**Type:** Educational Arcade Quiz Game
**Core Concept:**
A browser-based game where players control a basket to catch the correct answer to a question, with content dynamically loaded from external sources (Google Sheets).

## 2. 🎯 Product Objectives
* Enable dynamic quiz content loading without code changes
* Create a fast, intuitive gameplay loop for learning
* Provide instant feedback (audio + visual)
* Minimize technical friction (no backend required)
* Allow non-technical users (teachers) to update content via Google Sheets

## 3. 👤 Target Users
### Primary Users
* Students (primary & secondary level)
### Secondary Users
* Teachers / content creators managing question banks

## 4. 🎮 Core Gameplay Mechanics
* Player controls a basket
* A question is displayed at the top
* Multiple answers fall from above
* **Player must:**
  * Catch the correct answer
  * Avoid incorrect ones
### Game Elements
* Score system
* Lives system
* Streak/combo system
* Round progression

## 5. ⚙️ Core Features
### 5.1 Dynamic Content Loading
**Source:** Google Sheet (published as CSV)
👉 *Refer to the common [data-connector](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/shared/data-connector.md) for fetching logic.*
**Game reads:**
* Questions
* Answers
* Correct answer
* Metadata (topic_id, language fields)

### 5.2 Question Schema Support
System must support:
* `question`
* `question_my`
* `question_cn`
* `correct_answer`
* `answer1` to `answer4`
* `topic_id`

### 5.3 Gameplay System
* Falling answer objects generated dynamically
* Collision detection between basket and answers
* Answer validation against `correct_answer`

### 5.4 Feedback System
#### Visual Feedback
* Basket glow:
  * Green → correct
  * Red → wrong
#### Audio Feedback
* Game start
* Correct answer
* Wrong answer
* Missed correct answer
* Pause
* Game over

### 5.5 Controls
* **S** → Start game
* **P** → Pause / Resume
* **← / →** → Move basket
* **Mouse** → Alternative control

### 5.6 UI/UX Design
* No scrolling (fixed viewport)
* Centered question display
* Minimal UI (no debug/system controls exposed)
* Clean arcade-style layout

### 5.7 Runtime Environment
* Must run via local server
* Example:
  * PowerShell server (`server.ps1`)
  * Access via `http://localhost`

### 5.8 Fallback System
If external data fails:
* Use internal fallback questions
* **Must ensure:**
  * Game remains playable even with incomplete data

## 6. 🧱 Functional Requirements
### Data Handling
* System must fetch CSV from Google Sheets
* System must parse rows into usable question objects
* **Must handle:**
  * Missing fields
  * Empty cells
  * Inconsistent formatting
### Game Logic
* Must validate answers in real-time
* **Must update:**
  * Score
  * Lives
  * Streak
* Must trigger feedback systems immediately
### Performance
* Game must load within acceptable browser limits
* Smooth animation for falling objects
* No blocking during data fetch

## 7. ⚠️ Constraints & Technical Considerations
* Browser blocks `fetch()` under `file:///`
* Requires local server (CORS limitation)
* No backend (pure frontend architecture)
* **Dependent on:**
  * Google Sheet availability
  * CSV formatting consistency

## 8. 🧪 Known Edge Cases
* Empty cells in Excel causing column misalignment
* Incomplete question sets
* Network failure when fetching CSV
* Invalid schema structure

## 9. 📊 Success Metrics (Internal)
* Game loads successfully with external data
* Questions rendered correctly
* Player interaction latency (low)
* Stability across sessions

## 10. 🔮 Future Enhancements
* Start screen & Game Over screen
* High score system (`localStorage`)
* Difficulty scaling
* Multi-language toggle (MY / CN / EN)
* Visual effects (confetti, animation polish)

## 11. 📁 Key Files
* `index.html`
* `server.ps1`
* `start-server.bat`

## 12. 🧠 Design Principles
* Content-driven (not hardcoded)
* Lightweight deployment
* Immediate feedback loop
* Low cognitive load for players
