document.addEventListener("DOMContentLoaded", () => {
    // Yükleme ekranını 3 saniye sonra gizle
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        loader.classList.add("hidden");
        content.classList.remove("hidden");
    }, 5000);

    // Tarih hesaplama fonksiyonu
    function calculateTimeSince(date) {
        const now = new Date();
        const target = new Date(date);
        const diff = now - target;

        if (diff < 0) {
            const days = Math.ceil(Math.abs(diff) / (1000 * 60 * 60 * 24));
            return `${days} gün kaldı`;
        }

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        return `${years} yıl, ${months} ay, ${days} gün geçti`;
    }

    function calculateNextBirthday(birthdayMonth, birthdayDay) {
        const now = new Date();
        const currentYear = now.getFullYear();
        let nextBirthday = new Date(currentYear, birthdayMonth - 1, birthdayDay);

        if (now > nextBirthday) {
            nextBirthday = new Date(currentYear + 1, birthdayMonth - 1, birthdayDay);
        }

        const diff = nextBirthday - now;
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return `${days} gün kaldı`;
    }

    // Gerçek zamanlı sayaç fonksiyonu
    function updateTimer(startDate, elementId) {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById(elementId).textContent = `${years} yıl, ${months} ay, ${weeks} hafta, ${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
    }

    // Sayaçları her saniye güncelle
    setInterval(() => {
        updateTimer(new Date("2024-12-16"), "together-timer");
        updateTimer(new Date("2025-01-06"), "couple-timer");
        updateTimer(new Date("2025-02-08"), "gift-timer");
    }, 1000);
    updateTimer(new Date("2024-12-16"), "together-timer"); // İlk çalıştırma
    updateTimer(new Date("2025-01-06"), "couple-timer"); // İlk çalıştırma
    updateTimer(new Date("2025-02-08"), "gift-timer"); // İlk çalıştırma

    // Tarihleri güncelle
    document.getElementById("meet-countdown").textContent = calculateTimeSince("2024-12-16");
    document.getElementById("couple-countdown").textContent = calculateTimeSince("2025-01-06");
    document.getElementById("her-birthday-countdown").textContent = calculateNextBirthday(7, 20); // Temmuz 20
    document.getElementById("my-birthday-countdown").textContent = calculateNextBirthday(8, 22); // Ağustos 22
});