document.addEventListener("DOMContentLoaded", () => {

const teamMembers = [
{name:"JAYA",wish:"Happy Diwali to Jaya and family!"},
{name:"SUBHA",wish:"Happy Diwali to Subha and family!"},
{name:"MOHANA SUNDARAM",wish:"Happy Diwali to Mohana Sundaram and family!"},
{name:"MOHAMED ASLAM KHAN",wish:"Happy Diwali to Mohamed Aslam Khan and family!"},
{name:"KAVYA",wish:"Happy Diwali to Kavya and family!"},
{name:"MARIYAMMAL",wish:"Happy Diwali to Mariyammal and family!"},
{name:"RINSHAD",wish:"Happy Diwali to Rinshad and family!"},
{name:"SUMATHI",wish:"Happy Diwali to Sumathi and family!"},
{name:"HARIHARAN",wish:"Happy Diwali to Hariharan and family!"},
{name:"RAMAR",wish:"Happy Diwali to Ramar and family!"},
{name:"ARUN",wish:"Happy Diwali to Arun and family!"},
{name:"SANGEETHA",wish:"Happy Diwali to Sangeetha and family!"},
{name:"NAGARAJ",wish:"Happy Diwali to Nagaraj and family!"},
{name:"PRIYADHARSHINI",wish:"Happy Diwali to Priyadharshini and family!"},
{name:"NIVETHA",wish:"Happy Diwali to Nivetha and family!"},
{name:"FAISEL",wish:"Happy Diwali to Faisel and family!"},
{name:"BHAVANI",wish:"Happy Diwali to Bhavani and family!"},
{name:"NOOTHANA",wish:"Happy Diwali to Noothana and family!"},
{name:"NITHISH KUMAR",wish:"Happy Diwali to Nithish Kumar and family!"},
{name:"NANTHAKUMAR",wish:"Happy Diwali to Nanthakumar and family!"},
{name:"VIGNESH",wish:"Happy Diwali to Vignesh and family!"},
{name:"AJEETHKUMAR",wish:"Happy Diwali to Ajeethkumar and family!"},
{name:"NIVETHITHA",wish:"Happy Diwali to Nivethitha and family!"},
{name:"AJITHKUMAR",wish:"Happy Diwali to Ajithkumar and family!"},
{name:"SUGANTHI",wish:"Happy Diwali to Suganthi and family!"}
];

const memberList = document.getElementById("memberList");

if (!memberList) {
    console.error("memberList div not found!");
    return;
}

teamMembers.forEach(member => {

    const btn = document.createElement("button");

    btn.className = "member-btn";

    btn.textContent = member.name;

    btn.addEventListener("click", () => {
        showWish(member);
    });

    memberList.appendChild(btn);
});

function showWish(member){

    document.getElementById("wishContainer").innerHTML = `
        <div class="wish-card">
            <h2>🎆 ${member.name} 🎆</h2>
            <p>${member.wish}</p>
        </div>
    `;

    createFireworks();
}

function createFireworks(){

    for(let i=0;i<30;i++){

        const particle = document.createElement("div");

        particle.className = "firework";

        particle.style.left = Math.random()*100 + "vw";
        particle.style.top = Math.random()*100 + "vh";

        particle.style.background =
        ["gold","orange","red","cyan","lime","pink"]
        [Math.floor(Math.random()*6)];

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },1500);
    }
}

});
