const questions = document.querySelectorAll(".question");

questions.forEach((value) => {
    const button = value.querySelector(".toggle-btn");
    button.addEventListener("click", () => {
        questions.forEach((i) => {
            if (i == value) {
                i.classList.toggle("active");
            }
            else {
                i.classList.remove("active");
            }
        });
    });
});