# 📜 Project History: Game Five / Quiz Catcher

Dokumen ini merekod perkembangan projek Game Five (kini Quiz Catcher) dari permintaan awal sehingga versi terkini.

---

### Ringkasan
Fokus utama projek ini ialah membina game pendidikan yang boleh memuatkan kandungan soalan secara fleksibel, sambil menambah baik pengalaman pengguna dari segi visual, kawalan, dan interaktiviti.

### Fasa 1: Sambungan Google Sheet
*   **Tarikh**: 16 Mac 2026
*   Permintaan awal: tarik data dari Google Sheet ke dalam `index.html`.
*   Versi pertama dibina untuk membaca data Google Sheet publish CSV.
*   Tujuan fasa ini ialah membuktikan dahulu bahawa data luar boleh dibaca ke dalam projek tanpa perlu backend yang kompleks.

### Fasa 2: Auto-load dan isu local file
*   Game diubah supaya auto-load data bila halaman dibuka.
*   Masalah dikenal pasti: browser blok `fetch()` apabila fail dibuka dengan `file:///`.
*   Penyelesaian: projek dipindahkan kepada aliran localhost.

### Fasa 3: Local server
*   **Tarikh**: 17 Mac 2026
*   Ditambah `start-server.bat` untuk buka game melalui local server.
*   Oleh sebab python tidak tersedia pada mesin, server diubah kepada versi PowerShell (`server.ps1`).

### Fasa 4: Ubah konsep daripada data point kepada game
*   Keperluan berubah: bukan masukkan point terus ke game, tetapi bina game berdasarkan kandungan sheet.
*   Halaman diubah kepada prototaip game ringkas berasaskan kandungan yang ditampal.

### Fasa 5: Bina game berdasarkan prompt sebenar dalam sheet
*   Prompt sebenar dari sheet dibaca dan ditafsirkan sebagai prototaip **Quiz Blast Adventure**.
*   Elemen: Educational quiz, bola bergerak, MCQ, Combo, score, lives, progression level.

### Fasa 6: Ubah kepada versi dynamic
*   Game ditukar supaya boleh memuatkan konfigurasi dan soalan secara dynamic.
*   Sokongan ditambah untuk sheet spesifikasi dan bank soalan.

### Fasa 7: Integrasi schema question bank
*   **Tarikh**: 30 Mac 2026
*   Parser game dikemaskini supaya menyokong schema: `question`, `question_my`, `question_cn`, `correct_answer`, `answer1-4`, `topic_id`.

### Fasa 8: Integrasi Google Sheet soalan
*   Link Google Sheet baharu disambungkan. Soalan kini boleh dikemas kini melalui Google Sheet publish CSV secara terus.

### Fasa 9: Tukar gameplay kepada Catch It Right
*   Konsep game ditukar daripada lane shooter kepada **Catch It Right**.
*   Pemain gerakkan bakul untuk menangkap jawapan betul yang jatuh dari atas.

### Fasa 10: Pembersihan UI
*   UI dirombak supaya lebih fokus kepada permainan sahaja. Elemen teknikal seperti "Reload Sheet Data" dibuang.

### Fasa 11: Visual polish
*   Tema visual ceria: langit, awan, dan warna cerah. Jawapan dijadikan kapsul lembut dan bakul lebih menonjol.

### Fasa 12: Kawalan dan ergonomik
*   Kawalan papan kekunci ditambah: **S** (start), **P** (pause/resume). Soalan dipusatkan.

### Fasa 13: Audio dan feedback
*   Ditambah bunyi (Web Audio API) untuk jawapan betul/salah, game over, dan pause. Bakul diberi efek glow hijau/merah.

### Fasa 14: Sumber data lokal
*   Support untuk membaca `questions.xlsx` lokal melalui local server menggunakan parser Excel di PowerShell.

### Fasa 15: Kembali kepada Google Sheet (Status Terkini)
*   Sumber data ditukar semula kepada Google Sheet CSV untuk kemudahan pengemaskinian oleh pihak lain.
