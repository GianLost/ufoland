const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });

    });

});


document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {

        const container = section.querySelector(".card-container");
        const button = section.querySelector(".show-more-btn");

        if (!container || !button) return;

        const cards = container.querySelectorAll(".project-card");
        const visibleCards = 2;

        // botão aparece somente se houver mais que 2 cards
        if (cards.length <= visibleCards) {
            button.style.display = "none";
            return;
        }

        let expanded = false;

        function updateCards() {

            cards.forEach((card, index) => {

                if (!expanded && index >= visibleCards) {
                    card.classList.add("hidden-card");
                } else {
                    card.classList.remove("hidden-card");
                }

            });

            button.textContent = expanded ? "Mostrar menos" : "Mostrar mais";

        }

        button.addEventListener("click", () => {

            expanded = !expanded;
            updateCards();

        });

        updateCards();

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

        });

    });

});