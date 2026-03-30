# 📐 Question Delivery Schema v2.0

This document defines the standardized CSV structure for all educational games in the R&D Lab.

## 📋 CSV Header Structure
All question files must follow this header order for compatibility with the **Game Boilerplate**.

| Header | Description | Format |
| :--- | :--- | :--- |
| `subject` | Subject name (e.g., Matematik, Sains) | String |
| `grade_id` | Short code for grade/form | `F1`, `F2`, `F3`, `Y1..6` |
| `theme` | Broad curriculum theme | String |
| `chapter` | Specific chapter number or name | String |
| `topic_id` | Internal tracking ID | String |
| `question_en` | Question in English | Markdown String |
| `question_my` | Question in Bahasa Melayu | Markdown String |
| `question_cn` | Question in Chinese | Markdown String |
| `answer1` | Option 1 | String |
| `answer2` | Option 2 | String |
| `answer3` | Option 3 | String |
| `answer4` | Option 4 | String |
| `correct_answer` | The EXACT string of the correct answer | String |

## 🕹️ Mapping & Labels
The **Game Boilerplate** handles the translation of `grade_id` to student-facing labels:
- `F1` → **Form 1**
- `Y6` → **Year 6**

## 💡 Best Practices
*   **Unique Answers**: Ensure `answer1..4` are unique.
*   **Case Sensitivity**: `correct_answer` must match one of the options exactly (including case and spacing).
*   **Media**: Use [IMAGE_URL] placeholders for later integration.
