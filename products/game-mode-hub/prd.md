# 🕹️ Game Mode Hub – Product Requirements Document (PRD v1.0)

## 1. 🧾 Product Overview
**Product Name:** Game Mode Hub
**Type:** Learning Habit-Building Platform
**Core Concept:**
A central "Arcade" hub that attracts students to learn through play. It uses "Flow State" mechanics (inspired by Gimkit’s Fishtopia) to maximize engagement and question submissions.

## 2. 🎯 Product Objectives
*   **Habit Formation**: Convert study time into "Game Time" using arcade-style loops.
*   **Engagement**: Increase question volume (targeting 30–50% more submissions per session).
*   **Retention**: Minimize friction (no sudden ends, instant respawns).
*   **Progress Visualization**: Every answer contributes to a global XP/Leveling system.

## 3. 🧠 EdTech Principles (Gimkit-Inspired)
*   **Flow over Skill**: Reward effort (attempts) as much as accuracy.
*   **No Punishment Spiral**: Never block the user. If they run out of energy/lives, allow them to "Answer to Recharge."
*   **Continuous Feedback**: Every question answered provides a visible reward (XP/Currency).

## 4. 🎮 Gameplay Modes
### 🥇 Endless Mode (Default)
*   **Concept**: Questions never "run out."
*   **Flow**: Student plays until they decide to stop.
*   **Adaptivity**: Difficulty scales as the student progresses.
*   **Mastery Focused**: Ideal for revision and building confidence.

### 📦 Set-Based Mode (Homework/Test)
*   **Concept**: Fixed number of questions (10/20/30).
*   **Usage**: Homework assignments or mock exams.
*   **Separation**: Visually distinct from the "Arcade" section.

## 5. ⚡ Core Mechanics & UX Rules
### 5.1 The Leveling System (Standard)
*   **XP Formula**: Simple exponential curve.
    *   `Level 1 → 2`: 100 XP
    *   `Level 2 → 3`: 250 XP
    *   `Level N → N+1`: Previous XP requirement + 15% increase.
*   **XP Gain**: Correct answer (+10 XP), Wrong answer (+2 XP for effort).

### 5.2 Subtle "Soft Stops"
*   **Objective**: Encourage healthy breaks without forced exits.
*   **Subtle Notification**: At **10 questions** or **5 minutes**, a non-blocking toast/banner appears:
    *   *"You're on fire! 10 questions done. Keep going or take a quick breather? 🔥"*
*   **Achievement Badges**: Unlock a badge every 1 topic mastered.

### 5.3 Instant Respawn / Recovery
*   **UX Rule**: If a player loses (e.g., in Quiz Catcher), they respawn in <500ms.
*   **Recharge Loop**: "Low Energy? Answer 3 quick-fire questions to boost your shield!"

## 6. ⚙️ Functional Requirements
### Hub UI
*   Display Available Games (e.g., Quiz Catcher).
*   Sticky "Level/XP Bar" at the top.
*   "Arcade" vs. "Test Mode" tabs.

### Data Fetching
*   Pull question bank metadata (topics, descriptions).
*   Handover the `topic_id` to individual games.

## 7. 📁 Key Files
*   `index.html` (The Hub interface)
*   `styles/hub.css` (Polished arcade aesthetics)
*   `scripts/hub.js` (Navigation and Global State)
*   `scripts/xp-engine.js` (Leveling/XP logic)

## 8. 📊 Success Metrics
*   **Average Questions per Session**: Goal > 25.
*   **Replay Rate**: % of students returning to the Hub within 24 hours.
*   **Time to First Question**: < 10 seconds from page load.
