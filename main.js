// 1. Ambil elemen-elemen dari HTML
const input = document.getElementById('inputNama');
const tombol = document.getElementById('tombolProses');
const output = document.getElementById('outputHasil');

// 2. Buat fungsi saat tombol diklik
tombol.addEventListener('click', function() {
    // Ambil nilai (value) dari kotak input
    const namaUser = input.value;

    // Cek jika input kosonga
    if (namaUser === "") {
        output.textContent = "Eh, namanya belum diisi!";
        output.style.color = "red";
    } else {
        // Tampilkan hasil ke elemen output
        output.textContent = "Halo, " + namaUser + "! Selamat datang di website saya.";
        output.style.color = "green";
        
        // Opsional: Kosongkan kotak input setelah diklik
        input.value = "";
    }
});
