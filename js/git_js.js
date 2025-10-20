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

const coin = document.getElementById("coin");
let isFlipping = false;

function coinflip() {
    if (isFlipping) return; // Prevent multiple flips at once
    isFlipping = true;
    coin.classList.add("flipping");

    const isHeads = Math.random() < 0.5;
    setTimeout(() => {
        if (isHeads) {
            coin.classList.remove("tails");
            coin.classList.add("heads");
        } else {
            coin.classList.remove("heads");
            coin.classList.add("tails");
        }
        coin.classList.remove("flipping");
        isFlipping = false;
    }, 2000); // Match the duration of the CSS animation
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
    Languages: 210, // Blue
    Frameworks: 240, // Purple
    Databases: 180, // Teal
    SoftwareEngineering: 220, // Indigo
    Networking: 200, // Cyan
    Tools: 260, // Violet
    Development: 280 // Magenta-like purple
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

        skillsContainer.appendChild(div);
    });
});

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    document.querySelectorAll(".skill").forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const skillX = rect.left + rect.width / 2;
        const skillY = rect.top + rect.height / 2;

        const dx = skillX - mouseX;
        const dy = skillY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxDistance = 100; // Distance threshold for avoidance
        if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const offsetX = Math.cos(angle) * (maxDistance - distance);
            const offsetY = Math.sin(angle) * (maxDistance - distance);

            skill.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
            skill.style.transform = ""; // Reset position if far enough
        }
    });
});