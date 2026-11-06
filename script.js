// Team Members - Diwali Wishes 2026

const teamMembers = [
  {
    name: "JAYA",
    wish: "🪔 Happy Diwali to Jaya and family! May your home be filled with happiness, health, and prosperity."
  },
  {
    name: "SUBHA",
    wish: "✨ Wishing Subha and family a bright, joyful, and prosperous Diwali."
  },
  {
    name: "Suganthi",
    wish: "✨ Wishing you Suganthi and your family a bright, joyful, and prosperous Diwali my friend."
  },
  {
    name: "MOHANA SUNDARAM",
    wish: "🎆 Happy Diwali to Mohana Sundaram and family! May this festival bring great success and happiness."
  },
  {
    name: "MOHAMED ASLAM KHAN",
    wish: "🌟 Warm festive wishes to Mohamed Aslam Khan and family. May peace and prosperity always be with you."
  },
  {
    name: "KAVYA",
    wish: "🪔 Wishing Kavya and family a Diwali filled with love, laughter, and wonderful memories."
  },
  {
    name: "MARIYAMMAL",
    wish: "✨ Happy Diwali to Mariyammal and family! May your lives shine with happiness and success."
  },
  {
    name: "RINSHAD",
    wish: "🎇 Wishing Rinshad and family a sparkling Diwali filled with joy and prosperity."
  },
  {
    name: "SUMATHI",
    wish: "🪔 Happy Diwali to Sumathi and family! May every diya light your path toward success."
  },
  {
    name: "HARIHARAN",
    wish: "🎆 Wishing Hariharan and family a wonderful Diwali filled with blessings and happiness."
  },
  {
    name: "RAMAR",
    wish: "🌟 Happy Diwali to Ramar and family! May this festive season bring peace and prosperity."
  },
  {
    name: "ARUN",
    wish: "✨ Wishing Arun and family a joyous Diwali filled with happiness and cherished moments."
  },
  {
    name: "SANGEETHA",
    wish: "🪔 Happy Diwali to Sangeetha and family! May your life shine brighter than the festive lights."
  },
  {
    name: "NAGARAJ",
    wish: "🎇 Wishing Nagaraj and family a prosperous Diwali and a successful year ahead."
  },
  {
    name: "PRIYADHARSHINI",
    wish: "🌟 Happy Diwali to Priyadharshini and family! May every day bring happiness and success."
  },
  {
    name: "NIVETHA",
    wish: "✨ Wishing Nivetha and family a sparkling Diwali filled with love and joy."
  },
  {
    name: "FAISEL",
    wish: "🪔 Happy Diwali to Faisel and family! May this festive season bring peace and prosperity."
  },
  {
    name: "BHAVANI",
    wish: "🎆 Wishing Bhavani and family a bright and beautiful Diwali filled with happiness."
  },
  {
    name: "NOOTHANA",
    wish: "🌟 Happy Diwali to Noothana and family! May your home be blessed with love and prosperity."
  },
  {
    name: "NITHISH KUMAR",
    wish: "✨ Wishing Nithish Kumar and family a joyful, safe, and prosperous Diwali."
  },
  {
    name: "NANTHAKUMAR",
    wish: "🪔 Happy Diwali to Nanthakumar and family! May this festival bring endless joy and success."
  },
  {
    name: "VIGNESH",
    wish: "🎇 Wishing Vignesh and family a wonderful Diwali filled with happiness and celebration."
  },
  {
    name: "AJEETHKUMAR",
    wish: "🌟 Happy Diwali to Ajeethkumar and family! May all your dreams and aspirations come true."
  },
  {
    name: "NIVETHITHA",
    wish: "✨ Wishing Nivethitha and family a sparkling Diwali filled with warmth and joy."
  },
  {
    name: "AJITHKUMAR",
    wish: "🪔 Happy Diwali to Ajithkumar and family! May this festival light up your life with success and happiness."
  }
];

// Display random team member wish
function celebrate() {
  const member = teamMembers[Math.floor(Math.random() * teamMembers.length)];

  document.getElementById("msg").innerHTML = `
    <div class="wish-card">
      <h2>🎆 ${member.name} 🎆</h2>
      <p>${member.wish}</p>
    </div>
  `;

  createFireworks();
}

// Optional Firework Animation
function createFireworks() {
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement("span");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.backgroundColor =
      ["#FFD700", "#FF4500", "#00FFFF", "#FF69B4", "#ADFF2F"][
        Math.floor(Math.random() * 5)
      ];

    document.body.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 1500);
  }
}
