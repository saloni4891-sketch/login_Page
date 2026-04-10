// INIT EMAILJS
(function(){
    emailjs.init("ossXsLjUHcLS9D7WJ");
})();

let generatedOTP = "";

// GENERATE OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

// SEND OTP
function sendOTP() {
    let email = document.getElementById("email").value.trim();

    if (!email) {
        alert("Please enter email");
        return;
    }

    generatedOTP = generateOTP();

    let params = {
        to_email: email,
        otp: generatedOTP
    };

    emailjs.send("service_toqopco", "template_g22nh97", params)
    .then(function(response) {
        console.log("SUCCESS:", response);
        document.getElementById("msg").innerText = "✅ OTP Sent to " + email;
    })
    .catch(function(error) {
        console.error("ERROR:", error);
        document.getElementById("msg").innerText = "❌ Failed to send OTP";
        alert("Check console (F12)");
    });
}

// VERIFY OTP
function verifyOTP() {
    let userOTP = document.getElementById("otp").value.trim();

    if (!userOTP) {
        alert("Enter OTP");
        return;
    }

    if (userOTP == generatedOTP) {
        document.getElementById("msg").innerText = "✅ Verified Successfully!";
    } else {
        document.getElementById("msg").innerText = "❌ Wrong OTP";
    }
}