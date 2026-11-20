
document.addEventListener("DOMContentLoaded", function () {

    // Menu navigasi
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("open");

            if (nav.classList.contains("open")) {
                toggle.setAttribute("aria-expanded", "true");
            } else {
                toggle.setAttribute("aria-expanded", "false");
            }
        });

        const links = nav.querySelectorAll("a");

        links.forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Motto sekolah bergantian
    const mottos = [
        "Iman, taqwa, akhlak mulia",
        "Unggul prestasi",
        "Peduli lingkungan",
        "Berdaya saing global"
    ];

    const motto = document.getElementById("motto");
    const dots = document.querySelectorAll(".dots i");

    let index = 0;

    if (motto) {
        setInterval(function () {
            index++;

            if (index >= mottos.length) {
                index = 0;
            }

            motto.textContent = mottos[index];

            dots.forEach(function (dot, i) {
                dot.classList.remove("on");

                if (i === index) {
                    dot.classList.add("on");
                }
            });

        }, 3000);
    }

    // Animasi angka statistik
    const angka = document.querySelectorAll("[data-count]");

    angka.forEach(function (item) {
        const target = Number(item.getAttribute("data-count"));
        let nilai = 0;
        const durasi = 1200;
        const kenaikan = Math.ceil(target / (durasi / 20));

        const timer = setInterval(function () {
            nilai += kenaikan;

            if (nilai >= target) {
                nilai = target;
                clearInterval(timer);
            }

            item.textContent = nilai.toLocaleString("id-ID");

        }, 20);
    });

});
