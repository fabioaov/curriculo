document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("section, header > div:not(:has(h1)), .ls-wider");
    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
});

window.addEventListener("load", function () {
    setTimeout(() => {
        const nameElement = document.querySelector("h1");
        const fullName = nameElement.textContent.trim();

        nameElement.classList.add("typing");
        nameElement.innerHTML = '<span class="cursor blink-once">|</span>';

        let index = 0;

        setTimeout(() => {
            function typeWriter() {
                const currentText = fullName.substring(0, index);
                nameElement.innerHTML = currentText + '<span class="cursor">|</span>';

                if (index < fullName.length) {
                    index++;
                    setTimeout(typeWriter, 100);
                } else {
                    nameElement.querySelector(".cursor").classList.add("blink-twice");

                    setTimeout(() => {
                        nameElement.innerHTML = fullName;
                        nameElement.classList.remove("typing");
                        nameElement.style.opacity = "1";

                        const elements = document.querySelectorAll("section, header > div:not(:has(h1)), .ls-wider");
                        elements.forEach((element, idx) => {
                            setTimeout(() => {
                                element.style.opacity = "1";
                                element.style.transform = "translateY(0)";
                            }, idx * 100);
                        });
                    }, 2000);
                }
            }

            typeWriter();
        }, 1000);
    }, 300);
});
