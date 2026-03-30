/**
 * 🎮 Game Mode Hub: Shared Game Engine
 * This script handles question fetching, XP syncing, and global state.
 */

const GameEngine = {
    config: {
        csvPath: '../../shared/sample-questions.csv',
        xpPerCorrect: 10,
        xpPerEffort: 2,
        softStopInterval: 10
    },

    state: {
        questions: [],
        currentQuestion: null,
        correctCount: 0,
        quizCount: 0
    },

    /**
     * Fetch and parse the central question CSV.
     */
    async fetchQuestions() {
        try {
            const response = await fetch(this.config.csvPath);
            const data = await response.text();
            const lines = data.split('\n').filter(l => l.trim() !== '');
            const headers = lines[0].split(',').map(h => h.trim());

            this.state.questions = lines.slice(1).map(line => {
                const values = line.split(',').map(v => v.trim());
                const obj = {};
                headers.forEach((h, i) => obj[h] = values[i]);
                return obj;
            });
            console.log('✅ GameEngine: Questions loaded successfully.');
            return this.state.questions;
        } catch (error) {
            console.error('❌ GameEngine Error: Could not fetch questions.', error);
            return [];
        }
    },

    /**
     * Map grade IDs (F1, Y6) to student-facing labels.
     */
    getGradeLabel(gradeId) {
        const mapping = {
            'F1': 'Form 1', 'F2': 'Form 2', 'F3': 'Form 3', 'F4': 'Form 4', 'F5': 'Form 5',
            'Y1': 'Year 1', 'Y2': 'Year 2', 'Y3': 'Year 3', 'Y4': 'Year 4', 'Y5': 'Year 5', 'Y6': 'Year 6'
        };
        return mapping[gradeId] || gradeId;
    },

    /**
     * Add XP to the Hub's global storage.
     */
    addXP(amount) {
        let currentXP = parseInt(localStorage.getItem('lab_xp')) || 0;
        localStorage.setItem('lab_xp', currentXP + amount);
        window.dispatchEvent(new Event('storage')); // Notify other tabs/Hub
    },

    /**
     * Log a completed question to the global quiz count.
     */
    logQuizCompleted() {
        let count = parseInt(localStorage.getItem('lab_quiz_count')) || 0;
        localStorage.setItem('lab_quiz_count', count + 1);
        this.state.correctCount++;
        
        // Trigger subtle soft stop notification if interval reached
        if (this.state.correctCount % this.config.softStopInterval === 0) {
            this.showSoftStop();
        }
    },

    /**
     * Show a subtle, non-blocking UI notification.
     */
    showSoftStop() {
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed; top: 100px; left: 50%; transform: translateX(-50%);
            background: #f43f5e; color: white; padding: 0.5rem 1.5rem;
            border-radius: 20px; font-weight: 700; opacity: 0;
            transition: 0.5s; z-index: 9999; pointer-events: none;
        `;
        notif.innerText = `🔥 Amazing! ${this.state.correctCount} questions done already!`;
        document.body.appendChild(notif);
        
        // Anim in/out
        setTimeout(() => notif.style.opacity = '1', 100);
        setTimeout(() => {
            notif.style.opacity = '0';
            setTimeout(() => notif.remove(), 500);
        }, 4000);
    }
};

window.GameEngine = GameEngine;
