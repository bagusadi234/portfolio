// Ambil slide aktif terakhir dari localStorage, atau mulai dari slide pertama
let currentSlide = localStorage.getItem("currentSlide") 
    ? parseInt(localStorage.getItem("currentSlide")) 
    : 0;

// Ambil semua elemen slide
const slides = document.querySelectorAll(".slides");

// Fungsi untuk menampilkan slide berdasarkan indeks
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index); // Tampilkan slide aktif
    });
    currentSlide = index; // Perbarui indeks slide saat ini
    localStorage.setItem("currentSlide", currentSlide); // Simpan ke localStorage
}

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length; // Hitung indeks slide berikutnya
    showSlide(nextIndex); // Tampilkan slide berikutnya
}

// Inisialisasi: tampilkan slide terakhir atau slide pertama
showSlide(currentSlide);

// Ganti slide otomatis setiap 3 detik
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    const familyItems = document.querySelectorAll('.family-item');
    const modalBody = document.querySelector('#familyModal .modal-body');

    familyItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const profesi = item.getAttribute('data-profesi');
            const hobi = item.getAttribute('data-hobi');

            modalBody.innerHTML = `
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Profesi:</strong> ${profesi}</p>
                <p><strong>Hobi:</strong> ${hobi}</p>
            `;

            const modal = new bootstrap.Modal(document.getElementById('familyModal'));
            modal.show();
        });
    });
});