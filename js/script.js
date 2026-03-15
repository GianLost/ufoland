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

document.addEventListener("DOMContentLoaded", () => {

    const el = document.getElementById("typing-code");

    const programs = [
        {
            code: `
using System;

class Program
{
    static void Main()
    {
        string message = "Hello World!";

        Console.WriteLine(message);
    }
}`.trim(),
            output: "Hello World!"
        },
        {
            code: `
using System;

class Program
{
    static void Main()
    {
        string name = "UFO TECH";
        string greeting = $"Welcome {name}!";
        
        Console.WriteLine(greeting);
    }
}`.trim(),
            output: "Welcome to UFO TECH!"
        },
        {
            code: `
using System;

class Program
{
    static void Main()
    {
      string idea = "Ideas";
      string status = "Compiling";
      string process = status + " " + idea + "...";

      Console.WriteLine(process);
    }
}`.trim(),
            output: "Compiling Ideas... Done ✔"
        },
        {
            code: `
using System;

class Program
{
    static void Main()
    {
        string project = "Future";
        string action = "Building";
        string result = action + " " + project;

        Console.WriteLine(result);
    }
}`.trim(),
            output: "Building Future... Success ✔"
        }
    ];

    let programIndex = 0;
    let charIndex = 0;
    let currentCode = programs[programIndex].code;

    const codeEl = document.getElementById("typing-code");
    const outputEl = document.getElementById("console-output");

    function typeCode() {

        if (charIndex < currentCode.length) {

            el.textContent += currentCode[charIndex++];
            setTimeout(typeCode, 20);

        } else {

            showOutput();

        }

    }

    function showOutput() {

        outputEl.textContent = programs[programIndex].output;

        setTimeout(nextProgram, 2500);

    }

    function nextProgram() {

        el.textContent = "";

        programIndex = (programIndex + 1) % programs.length;
        currentCode = programs[programIndex].code;

        charIndex = 0;

        setTimeout(typeCode, 400);

    }

    typeCode();

});