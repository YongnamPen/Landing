function correctDate(date) {
    return date < 10 ? "0" + date : date;
}

function saleDate() {
    const timerSections = document.querySelectorAll(".thirdPage");

    timerSections.forEach(section => {
        const day = section.getElementsByClassName("time")[0];
        const hour = section.getElementsByClassName("time")[1];
        const minutes = section.getElementsByClassName("time")[2];
        const seconds = section.getElementsByClassName("time")[3];

        const finishDate = new Date(2024, 11, 31);
        const currentDate = new Date();
        const date = finishDate - currentDate;

        day.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
        hour.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minutes.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
        seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
    });
}
saleDate();
setInterval(function () {
    saleDate();
}, 1000);
