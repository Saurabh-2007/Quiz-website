function submitQuiz() {
    let userName = document.getElementById("userName").value.trim();
    
    if (userName === "") {
        alert("Please enter your name before starting the quiz.");
        return;
    }

    let score = 0;
    let totalQuestions = 4;
    let correctAnswers = { q1: "Paris", q2: "8",q3: "trilok",q4: "maharishi kannad"};

    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
    };

    for (let key in userAnswers) {
        if (userAnswers[key] === correctAnswers[key]) {
            score++;
        }
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `${userName}, you scored ${score} out of ${totalQuestions}`;

    if (score > 0) {
        document.getElementById("generateBtn").style.display = "block"; // Show the generate button
    }
}

function generateCertificate() {
    let userName = document.getElementById("userName").value.trim();
    
    let canvas = document.getElementById("certificateCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 300;
    canvas.style.display = "block";

    // Background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Border
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 30;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Title
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Achievement", canvas.width / 2, 80);

    // Name
    ctx.font = "20px Arial";
    ctx.fillText("This is awarded to:", canvas.width / 2, 140);
    ctx.font = "25px Arial bold";
    ctx.fillText(userName, canvas.width / 2, 180);

    // Score
    ctx.font = "18px Arial";
    ctx.fillText(`For successfully completing the quiz`, canvas.width / 2, 230);


    // Show download button
    document.getElementById("downloadBtn").style.display = "block";
}

function downloadCertificate() {
    let canvas = document.getElementById("certificateCanvas");
    let link = document.createElement("a");
    link.download = "certificate.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
