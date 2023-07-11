(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function sendEmail(event) {
    event.preventDefault();

    const name = document.getElementById('name-input').value;
    const subject = document.getElementById('subject-input').value;
    const message = document.getElementById('message-input').value;

    const mailtoLink = `mailto:faiqotulftryh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)}`;
    window.location.href = mailtoLink;
}