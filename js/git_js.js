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

const categorizedSkills = {
    Languages: ["Java", "C++", "Python", "C#", "C", "SQL", "HTML", "JS"],
    Frameworks: ["React.js", "Angular", "Node.js", "Django", "Flask", "CSS"],
    Databases: ["MySQL", "SQLite", "MongoDB", "Data Warehousing"],
    SoftwareEngineering: ["OOP", "Design Patterns", "Agile", "Full-stack", "Parallel Programming", "Git", "Docker", "Testing"],
    Networking: ["UDP/TCP/IP", "DNS management", "Routing", "UNIX shell"],
    Tools: ["VSC", "Android Studio", "Postman", "Slack", "Microsoft", "Cisco Packet Tracer", "Godot", "Google Services"],
    Development: ["API Development", "Web Design", "Maven", "DevOps"]
};

const categoryHues = {
    Languages: 200,
    Frameworks: 120,
    Databases: 40,
    SoftwareEngineering: 240,
    Networking: 0,
    Tools: 80,
    Development: 160
};

const skillsContainer = document.getElementById("skills");
Object.entries(categorizedSkills).forEach(([category, skills]) => {
    skills.forEach(skill => {
        const div = document.createElement("div");
        div.classList.add("skill");
        div.textContent = skill;

        const hue = categoryHues[category];
        const saturation = Math.floor(Math.random() * 30 + 70); // 70% - 100%
        const lightness = Math.floor(Math.random() * 20 + 30); // 40% - 60%

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
});


