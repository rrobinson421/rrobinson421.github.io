function openNewTab(url) {
  dailyAlert();
  window.open(url, "_blank");
}

function dailyAlert() {
  const today = new Date().toLocaleDateString();
  if (localStorage.getItem("lastDailyAlert") !== today) {
    alert(
      "Heads up: some project links may return 404 if currently set to private. " +
      "Feel free to reach out via the Contact page for details."
    );
    localStorage.setItem("lastDailyAlert", today);
  }
}

const categorizedSkills = {
  Languages:           ["Java", "C++", "Python", "C#", "C", "SQL", "HTML", "JavaScript"],
  Frameworks:          ["React.js", "Angular", "Node.js", "Django", "Flask", "CSS / Tailwind"],
  Databases:           ["MySQL", "SQLite", "MongoDB", "Data Warehousing"],
  "Software Engineering": ["OOP", "Design Patterns", "Agile", "Full-stack", "Parallel Programming", "Git", "Docker", "Testing"],
  Networking:          ["UDP/TCP/IP", "DNS Management", "Routing", "UNIX Shell"],
  Tools:               ["VS Code", "Android Studio", "Postman", "Slack", "Microsoft Office", "Cisco Packet Tracer", "Godot", "Google Services"],
  Development:         ["API Development", "Web Design", "Maven", "DevOps"],
};

const coinEl = document.getElementById("coin");
let isFlipping = false;

function coinflip() {
  if (!coinEl || isFlipping) return;
  isFlipping = true;
  coinEl.classList.add("flipping");
  coinEl.classList.toggle("flipped");
  setTimeout(() => {
    coinEl.classList.remove("flipping");
    isFlipping = false;
  }, 2000);
}

function buildSkills() {
  const tabsEl  = document.getElementById("skills-tabs");
  const panelEl = document.getElementById("skills-panel");
  if (!tabsEl || !panelEl) return;

  const categories = Object.keys(categorizedSkills);
  let activeCategory = categories[0];

  function renderTabs() {
    tabsEl.innerHTML = "";
    // "All" button
    const allBtn = document.createElement("button");
    allBtn.className = "tab-btn" + (activeCategory === "ALL" ? " active" : "");
    allBtn.textContent = "All";
    allBtn.addEventListener("click", () => { activeCategory = "ALL"; renderTabs(); renderPanel(); });
    tabsEl.appendChild(allBtn);

    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (activeCategory === cat ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => { activeCategory = cat; renderTabs(); renderPanel(); });
      tabsEl.appendChild(btn);
    });
  }

  function renderPanel() {
    panelEl.innerHTML = "";
    const skills =
      activeCategory === "ALL"
        ? Object.values(categorizedSkills).flat()
        : categorizedSkills[activeCategory];

    skills.forEach((skill, i) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      tag.style.animationDelay = `${i * 35}ms`;
      panelEl.appendChild(tag);
    });
  }

  renderTabs();
  renderPanel();
}

document.addEventListener("DOMContentLoaded", () => {
  buildSkills();
});
