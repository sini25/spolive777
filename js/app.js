
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


// Next Page

function goLogin(){
    window.location.href = "login.html";
}


function nextStep(){

    // Example validation
    const email = document.querySelector("input[type='email']").value;

    if(email === ""){
        alert("Please enter email first");
        return;
    }

    // redirect to step 2 page
    window.location.href = "register-step2.html";

}

function goStep1(){
    window.location.href = "register-step1.html";
}

function goStep2(){
    window.location.href = "register-step2.html";
}

function goModal(){
    window.location.href = "register-step3.html";
}

// Create Account
// Get elements
const createAccountBtn = document.getElementById('createAccountBtn');
const successPopup = document.getElementById('successPopup');
const closeBtn = document.querySelector('.close-btn');

// Function to show success popup
function showSuccessPopup(message = "Account created successfully!") {
    successPopup.querySelector('p').textContent = message; // update message
    successPopup.style.display = 'flex'; // show popup

    // Auto-close after 3 seconds (optional)
    setTimeout(() => {
        successPopup.style.display = 'none';
    }, 3000);
}

// Close popup
closeBtn.addEventListener('click', () => {
    successPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === successPopup) {
        successPopup.style.display = 'none';
    }
});

// Trigger popup on button click
createAccountBtn.addEventListener('click', () => {
    // Simulate account creation success
    const isSuccess = true; // replace with real API call result

    if (isSuccess) {
        showSuccessPopup("Your account was created successfully! 🎉");
    }
});
