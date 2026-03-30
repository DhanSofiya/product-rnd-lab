# 🧪 Learning Product R&D Lab

This repository is the **central experimentation and development hub** for the Learning Team.

It is used to design, test, iterate, and validate learning products **before they are promoted to the main production repository**.

---

# 🎯 Purpose

This repo exists to:

* Develop and experiment with new learning products (e.g. games, tools, features)
* Maintain structured **Product Requirements Documents (PRDs)**
* Track **R&D progress, decisions, and iterations**
* Log and manage **bugs, testing, and improvements**
* Serve as a **single source of truth** for all in-progress product work
* Prepare validated features for **promotion to production**

---

# 🧠 What belongs here

This is **NOT** a production repo.

This repo is for:

### ✅ Product Development

* Experimental features
* Prototype implementations
* Game mechanics (e.g. Game Five, Quiz Systems)

### ✅ Documentation

* PRDs (experimental & refined)
* R&D logs (what changed, why)
* Decision logs
* Testing plans & results

### ✅ Tracking

* Bug logs (active & resolved)
* Feature status tracking
* Iteration history

### ✅ Supporting Code

* Frontend prototypes (HTML/CSS/JS)
* Parsing logic (e.g. Google Sheet → game)
* Reusable components (early-stage)

### ✅ Assets (lightweight)

* Mockups (exported)
* Flow diagrams
* UI references

---

# 🚫 What does NOT belong here

Keep these outside (but link them inside the repo):

* Figma (live design collaboration)
* Google Sheets (question banks, trackers)
* Google Docs (live editing)
* Large media files (videos, heavy assets)
* Analytics dashboards (e.g. Metabase)

👉 Always store links in `links.md` inside each product folder.

---

# 🧱 Repository Structure

```
learning-product-rnd-lab/
│
├─ README.md
│
├─ index/
│  └─ all-products.md
│
├─ products/
│  ├─ game-five/
│  │  ├─ prd.md
│  │  ├─ rnd-log.md
│  │  ├─ testing.md
│  │  ├─ bug-log.md
│  │  ├─ decision-log.md
│  │  ├─ links.md
│  │  ├─ status.md
│  │  └─ assets/
│  │
│  └─ [other-products]/
│
├─ shared/
│  ├─ question-schema.md
│  ├─ ui-guidelines.md
│  ├─ repo-rules.md
│  └─ release-process.md
│
├─ bugs/
│  ├─ active.md
│  └─ resolved.md
│
├─ promotion/
│  ├─ ready-for-prod/
│  └─ approved/
│
└─ archive/
```

---

# 🔄 Product Lifecycle (IMPORTANT)

All products must follow this pipeline:

```
Experiment → Iteration → Stable → Ready → Production
```

### Stages Explained

| Stage                | Description                 |
| -------------------- | --------------------------- |
| R&D                  | Early exploration, unstable |
| Experimental         | Working prototype           |
| Stable               | Core logic works            |
| Ready for Production | Approved + tested           |
| Production           | Moved to main repo          |

---

# 📁 Standard Product Folder

Each product MUST follow this structure:

```
product-name/
├─ prd.md
├─ rnd-log.md
├─ testing.md
├─ bug-log.md
├─ decision-log.md
├─ links.md
├─ status.md
└─ assets/
```

---

# 📌 File Definitions

### `prd.md`

Defines:

* goals
* features
* requirements
* scope

👉 This is the **source of truth for what we are building**

---

### `rnd-log.md`

Tracks:

* changes
* experiments
* failures
* improvements

👉 This explains **how the product evolved**

---

### `testing.md`

Contains:

* test cases
* results
* validation notes

---

### `bug-log.md`

Tracks:

* known issues
* fixes
* severity

---

### `decision-log.md`

Records:

* key decisions
* trade-offs
* reasoning

---

### `links.md`

Stores external references:

* Figma
* Google Sheet
* prototype links
* ClickUp tasks
* dashboards

---

### `status.md`

Defines current state:

```
Status: R&D / Experimental / Stable / Ready / Production
Owner: [Name]
Last Updated: [Date]
Notes:
- Current issues
- Next actions
```

---

# 🚀 Promotion to Production

A product can only be promoted when:

* PRD is finalized
* Core functionality is stable
* Testing is completed
* Major bugs are resolved
* Owner has approval

### Promotion Flow

```
R&D Repo → Promotion Folder → Main Repo
```

👉 Only **clean, stable, production-ready work** moves forward.

---

# 🧭 Team Guidelines

* Do NOT push incomplete work to main repo
* Always update `status.md`
* Log important decisions (avoid knowledge loss)
* Keep PRD updated as product evolves
* Link external tools — do not duplicate unnecessarily
* Keep files clean and structured

---

# 🧩 Long-Term Vision

This repository will evolve into:

* A **library of learning product patterns**
* A **standardized game framework**
* A **shared question delivery system**
* A **knowledge base for product decisions**

---

# 👥 Ownership

Maintained by: Learning Team
Scope: Product Development, Content Integration, QA, and Platform Operations

---

# ✅ Summary

This repo is where:

> Ideas are tested → refined → validated → and promoted into real products.

Treat it as your **Product Lab**, not a dumping ground.
