function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

function handleEnter(event) {
    if (event.key === 'Enter') processCommand();
}

function processCommand() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const text = input.value.toLowerCase().trim();

    if (!text) return;

    // Show User Message
    body.innerHTML += `<div class="user-msg">${input.value}</div>`;
    input.value = "";

    // AI Logic (Keyword Matching)
    setTimeout(() => {
        let response = "I'm not sure about that. Try 'jobs' or 'Home'.";
        
        if (text.includes("job") || text.includes("work")) {
            response = "Sure! Redirecting you to our Job Board...";
            setTimeout(() => window.location.href = "homejobs.html", 1500); // Change to your actual file
        } 
        else if (text.includes("home")) {
            response = "Heading back to the homepage.";
            setTimeout(() => window.location.href = "home.html", 1500);
        }
        else if (text.includes("price") || text.includes("plan")) {
            response = "Let's look at the pricing.";
            setTimeout(() => window.location.href = "#pricing", 1500); // Scrolls to pricing section
        }

        body.innerHTML += `<div class="bot-msg">${response}</div>`;
        body.scrollTop = body.scrollHeight; // Scroll to bottom
    }, 600);
}