document.addEventListener("DOMContentLoaded", function () {
    const innerElements = document.querySelectorAll("section, header > div:not(:has(h1)), header p");
    innerElements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    const hrElement = document.querySelector("hr");
    if (hrElement) {
        hrElement.style.opacity = "0";
        hrElement.style.transform = "translateY(20px)";
        hrElement.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    }
});

window.addEventListener("load", function () {
    setTimeout(() => {
        const nameElement = document.querySelector("h1");
        const fullName = nameElement.textContent.trim();
        const firstName = "Fábio";
        const lastName = "Vieira";

        nameElement.classList.add("typing");
        nameElement.innerHTML = '<span class="cursor blink-once">|</span>';

        let index = 0;

        setTimeout(() => {
            const elements = document.querySelectorAll("section, header > div:not(:has(h1)), header p");
            const hrElement = document.querySelector("hr");

            if (hrElement) {
                hrElement.style.opacity = "1";
                hrElement.style.transform = "translateY(0)";
            }

            elements.forEach((element, idx) => {
                setTimeout(() => {
                    element.style.opacity = "1";
                    element.style.transform = "translateY(0)";
                }, idx * 100);
            });
        }, 500);

        setTimeout(() => {
            function typeWriter() {
                let currentText = fullName.substring(0, index);

                // Adiciona o <br> entre Fábio e Vieira em telas pequenas
                if (index > firstName.length) {
                    currentText = firstName + '<br class="md:hidden" /> ' + lastName.substring(0, index - firstName.length - 1);
                }

                nameElement.innerHTML = currentText + '<span class="cursor">|</span>';

                if (index < fullName.length) {
                    index++;
                    setTimeout(typeWriter, 100);
                } else {
                    nameElement.querySelector(".cursor").classList.add("blink-twice");
                }
            }

            typeWriter();
        }, 1000);
    }, 300);
});
