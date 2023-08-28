const iconSidebar = document.querySelector("#icon-sidebar");
const sidebar = document.querySelector(".sidebar");

iconSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-open");
});

document.addEventListener("click", (event) => {
    const target = event.target;

    // Periksa apakah elemen yang diklik bukanlah bagian dari sidebar atau iconSidebar
    if (!sidebar.contains(target) && target !== iconSidebar) {
        // Tambahkan kode di sini untuk menangani klik di luar sidebar
        sidebar.classList.remove("sidebar-open");
    }
});