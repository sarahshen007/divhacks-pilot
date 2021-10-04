dayjs.extend(dayjs_plugin_duration);

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString);
    
    setInterval(() => {
        const now = dayjs();
        const duration = dayjs.duration(targetDate.diff(now));

        if(duration.asMilliseconds() <=0) return;

        element.querySelector(".seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
    }, 250);
    
}

activateCountdown(document.getElementById("myCountdown"), "2021-10-8");





