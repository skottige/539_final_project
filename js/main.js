// Driver Stats Flipping Logic
var cards;

// Initialize flipping logic once window loads
window.addEventListener("load", function () {
    console.log("Window loaded – ready to flip cards!");

    cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        var frontButton = card.querySelector(".card__button--front");
        var backButton = card.querySelector(".card__button--back");

        // Add click event for 'More' button
        frontButton.addEventListener("click", function () {
            card.classList.add("is-flipped");
            console.log("Card flipped to back");
        });

        // Add click event for 'Close' button
        backButton.addEventListener("click", function () {
            card.classList.remove("is-flipped");
            console.log("Card flipped to front");
        });
    });
});

// Driver Voting Logic
const driverVotes = {
  oscar: 12,
  lando: 18,
  george: 7,
  kimi: 5,
  charles: 14,
  lewis: 20,
  max: 22,
  yuki: 3,
  alex: 6,
  carlos: 9,
  esteban: 4,
  oliver: 2,
  fernando: 11,
  lance: 8,
  isack: 1,
  liam: 3,
  pierre: 10,
  jack: 2,
  nico: 5,
  gabriel: 4
};

const driverNames = {
  oscar: "Oscar Piastri",
  lando: "Lando Norris",
  george: "George Russell",
  kimi: "Kimi Antonelli",
  charles: "Charles Leclerc",
  lewis: "Lewis Hamilton",
  max: "Max Verstappen",
  yuki: "Yuki Tsunoda",
  alex: "Alex Albon",
  carlos: "Carlos Sainz",
  esteban: "Esteban Ocon",
  oliver: "Oliver Bearman",
  fernando: "Fernando Alonso",
  lance: "Lance Stroll",
  isack: "Isack Hadjar",
  liam: "Liam Lawson",
  pierre: "Pierre Gasly",
  jack: "Jack Doohan",
  nico: "Nico Hulkenberg",
  gabriel: "Gabriel Bortoleto"
};

let totalVotes = 166;

window.addEventListener("load", function () {
  const voteForm = document.getElementById("vote-form");
  const pollSection = document.getElementById("poll-section");
  const resultsSection = document.getElementById("results");

  voteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedDriver = document.querySelector('input[name="driver"]:checked');
    if (selectedDriver) {
      const driverKey = selectedDriver.value;
      driverVotes[driverKey]++;
      totalVotes++;

      // // Hide the poll section
      // pollSection.style.display = "none";

      // Show the results section
      resultsSection.style.display = "block";

      updateVoteResults();
    } else {
      alert("Please select a driver before submitting your vote.");
    }
  });

  function updateVoteResults() {
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = ''; // Clear previous results

    for (const driver in driverVotes) {
      if (driverVotes.hasOwnProperty(driver)) {
        const name = driverNames[driver] || driver;
        const count = driverVotes[driver];
        const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;

        const resultCard = document.createElement("div");
        resultCard.className = "result-card";

        resultCard.innerHTML = `
          <div class="result-header">
            <span class="driver-name">${name}</span>
            <span class="vote-count">${percentage.toFixed(1)}%</span>
          </div>
          <div class="result-bar">
            <div class="result-bar-fill" style="width: ${percentage}%"></div>
          </div>
        `;

        resultsContainer.appendChild(resultCard);
      }
    }
  }
});