const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const body = document.querySelector('body');

// Butonların olup olmadığını kontrol et
if (!sunIcon || !moonIcon) {
    console.error("HATA: 'sun' veya 'moon' elementi bulunamadı.");
} else {
    sunIcon.addEventListener('click', () => {
        console.log("Dark Mode Kapatıldı");
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        body.classList.remove('dark');
    });

    moonIcon.addEventListener('click', () => {
        console.log("Dark Mode Açıldı");
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        body.classList.add('dark');
    });
}
