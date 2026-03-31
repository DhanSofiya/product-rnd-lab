# Product Requirement Document (PRD)
## Feature: AI Marking Scheme (Testing Mode – Toggle Off)

---

### 1. Overview
This feature introduces AI-powered grading for student answers based on predefined marking points. Specifically, this PRD covers the phase where the AI Grading feature is disabled by default (**Toggle OFF**) in the admin settings, to test the behavior of existing subjective questions. The UI and answering flow must follow the design specified in Figma to ensure clarity and ease of use for students.

### 2. Objectives
*   🎯 **Ensure the basic system flow works correctly when AI grading is disabled.**
*   🎯 **Ensure the answer submission flow is clear and intuitive.**
*   🎯 **Prevent answer modifications after submission for published questions.**
*   🎯 **Verify correct UI indicators appear depending on whether answers are published immediately or later.**

### 3. Scope
*   AI grading toggle in settings (focused on OFF state)
*   Student answer submission flow for subjective questions
*   UI indication of grading status (e.g., changing "Marked: 1/1 marks" to a clearer "Correct" status or handling pending states)
*   Submission rules based on question publish type (Immediately vs. Later)

### 4. Feature: AI Grading Toggle
#### Default State
Toggle is **OFF** during the testing phase.

#### Toggle State Behavior
| State | Behavior |
| :--- | :--- |
| **OFF** | AI grading disabled. Manual or standard behavior applies. |
| **ON** | AI grading enabled. |

---

### 5. Question Answering Flow
The answer submission UI must follow the [Figma design](https://www.figma.com/design/Gbp4zDeP88Nx1jJOyQQlVr/B2-25---OKR-2-Exam-Experience--Grading-for-Essay---Math?node-id=3801-4971&t=CusPPzDdTSHGcAEp-1).

#### Key Requirements
Users must clearly understand:
*   Which questions are already answered
*   Which questions are still pending grading/marking
*   In Toggle Off state, the UI should not erroneously show AI marks.

#### Status UI Indicators (Expected Output)
| Status | UI Indicator |
| :--- | :--- |
| **Not answered** | Empty state |
| **Answer submitted** | Marked as submitted |
| **Grading complete** | Clear status string rather than confusing points ratio (e.g., "Correct") |
| **Pending marking** | "Marking in progress" or "Submitted, awaiting review" label |

---

### 6. Answer Submission Rules

#### Case 1: Published Answers (Immediate Marking)
**Behavior:**
*   Answers are submitted immediately.
*   Answer cannot be edited after clicking "Save Answer".

**Flow:**
1. Student answers question
2. Student clicks **Save Answer**
3. Answer is locked
4. Validation of immediate publish UI

**Acceptance Criteria:**
*   "Save Answer" finalizes the answer.
*   Editing is disabled after submission.
*   System shows correct submission result.

#### Case 2: Non-Published Immediate Questions (End-of-Set Submission)
**Behavior:**
*   Answers are submitted only after completing the entire question set.

**Flow:**
1. Student answers multiple questions
2. Answers are saved locally
3. Student clicks **Submit Question Set**
4. All answers are submitted together

**Acceptance Criteria:**
*   Students can review answers before final submission
*   Submission happens once per set
