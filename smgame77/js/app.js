
// Sidebar toggle
document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector(".sidebar").classList.toggle("active");
};

// Bet selection
let selectedBets = [];
const betContent = document.querySelector(".bet-content");
const totalPayout = document.getElementById("totalPayout");
const betAmountInput = document.getElementById("betAmount");

document.querySelectorAll(".odds button").forEach(btn => {
    btn.addEventListener("click", function() {

        btn.classList.toggle("active");
        const odd = parseFloat(btn.dataset.odd);

        if(btn.classList.contains("active")){
            selectedBets.push(odd);
        } else {
            selectedBets = selectedBets.filter(o => o !== odd);
        }

        renderBetSlip();
    });
});

betAmountInput.addEventListener("input", renderBetSlip);

function renderBetSlip() {
    betContent.innerHTML = "";

    let totalOdd = 1;
    selectedBets.forEach(o => {
        totalOdd *= o;
        betContent.innerHTML += `<div class="bet-item">Odd: ${o}</div>`;
    });

    const amount = parseFloat(betAmountInput.value) || 0;
    totalPayout.textContent = (totalOdd * amount).toFixed(2);
}
