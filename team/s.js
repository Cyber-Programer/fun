document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".raper");
    const scrollLeftButton = document.getElementById("left");
    const scrollRightButton = document.querySelector(".fa-arrow-right-long");

    scrollLeftButton.addEventListener("click", function () {
        container.scrollLeft -= 150; // Adjust the scroll distance as needed
    });

    scrollRightButton.addEventListener("click", function () {
        container.scrollLeft += 150; // Adjust the scroll distance as needed
    });
});
