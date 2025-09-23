function openNewTab(url) {
    window.open(url, "_newtab");
    dailyAlert()
}

function dailyAlert() {
    const today = new Date().toLocaleDateString();
    const lastAlertDate = localStorage.getItem('lastDailyAlert');

    if (lastAlertDate !== today) {
        alert("Daily Alert: If some project sites return 404 errors, please contact the user of this page (me) for the project information (it's probably privated right now).");
        localStorage.setItem('lastDailyAlert', today);
    } else {
        return;
    }
}

function coinflip() {
    alert("This will be interactable soon.");
}

const skills = [
    "test", "test", "test", "test", "test", "test", "test", "test", "test"
]

const skillsContainer = document.getElementById("skills");
skills.forEach(skill => {
    const div = document.createElement("div");
    div.classList.add("skill");
    div.textContent = skill;

    const hue = 220;
    const saturation = Math.floor(Math.random() * 30 + 70); //70% - 100%
    const lightness = Math.floor(Math.random() * 20 + 40); //40% - 60%
    div.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`;
    });
    div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
    div.addEventListener("click", () => {
        alert("These will be interactable soon.");
    });

    skillsContainer.appendChild(div);
});

