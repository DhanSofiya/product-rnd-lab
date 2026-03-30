# Implementation Plan - Game Mode Hub & Shared Data Logic [APPROVED]

This plan outlines the creation of the **Game Mode Hub**, the central orchestration system for all educational games in the R&D Lab, and the extraction of shared data-fetching logic into a reusable component.

## User Review Required

> [!IMPORTANT]
> The PRD for the **Game Mode Hub** will prioritize **Endless Mode** and **Fishtopia-style progression** to maximize question submission and retention, as per your benchmarks.

## Proposed Changes

---

### Core System (Shared)

#### [NEW] [data-connector.md](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/shared/data-connector.md)
*   Document the "Source-to-Game" pipeline (Google Sheets CSV → JSON).
*   Define the standard fetching logic that both the Hub and individual games (like Quiz Catcher) will use.

---

### Game Mode Hub Component

#### [NEW] [prd.md](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/products/game-mode-hub/prd.md)
*   **Vision**: Build learning habits through "Flow State" gaming.
*   **Mechanics**: Reward effort, instant respawn, and "Answer to Recharge" loops.
*   **Modes**: Differentiate between **Game Mode (Endless)** and **Test Mode (Set-based)**.
*   **Progression**: Define how scores translate to levels and visible rewards.

#### [NEW] [status.md](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/products/game-mode-hub/status.md)
*   Set initial status to **R&D**.

---

### Prototype Development

#### [NEW] [index.html](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/index.html) (Hub Prototype)
*   A "Game Selection" UI.
*   Shows a list of available games (Quiz Catcher).

#### [NEW] [quiz-catcher/index.html](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/products/quiz-catcher/index.html) (Game Prototype)
*   The playable Quiz Catcher game logic.

#### [NEW] [sample-questions.csv](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/shared/sample-questions.csv)
*   Placeholder data for testing the `data-connector`.

#### [NEW] [server.ps1](file:///h:/My%20Drive/00%20Pandai%20Education%20Sdn%20Bhd/2026%20GitHub%20Learning%20RnD%20Lab/server.ps1)
*   Local PowerShell server to handle CORS for local development.

## Open Questions
~~1.  **Leveling System**: Do you have a specific "XP to Level" formula in mind, or should I suggest a standard logarithmic scale?~~ -> **Standard first.**
~~2.  **Soft Stops**: For the 10-question/5-minute soft stops, do you want these to be "Intervention Screens" (popups) or just subtle UI changes?~~ -> **Subtle UI changes.**

## Verification Plan

### Manual Verification
*   Verify all internal links between the Hub PRD and the individual Game PRDs are functional.
*   Confirm the `data-connector` document accurately describes the CSV parsing requirements discovered in the Quiz Catcher phase.
