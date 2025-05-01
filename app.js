document.addEventListener("DOMContentLoaded", () => {
    console.log("SmartStudyAI App Initialized");
  
    // --- General Elements ---
    const feedbackButton = document.querySelector(
      ".feedback-button button",
    );
    const premiumButton = document.querySelector(".btn-premium");
  
    if (feedbackButton) {
      feedbackButton.addEventListener("click", () => {
        console.log("Feedback button clicked");
        alert("Feedback feature not implemented yet.");
      });
    }
  
    if (premiumButton) {
      premiumButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Get Premium button clicked");
        alert("Premium feature not implemented yet.");
      });
    }
  
    // --- Form Handling (Login/Register) ---
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
  
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.querySelector("#username").value;
        console.log(`Login attempt for username: ${username}`);
        alert("Login functionality not implemented.");
      });
    }
  
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = registerForm.querySelector("#name").value;
        const email = registerForm.querySelector("#email").value;
        console.log(`Registration attempt for: ${name} (${email})`);
        alert("Registration functionality not implemented.");
      });
    }
  
    // --- Chat/Language Interface ---
  
    // Function to display a message in the chat area
    function displayMessage(text, sender, displayAreaElement) {
      if (!displayAreaElement) return; // Exit if the display area doesn't exist
  
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message");
      messageDiv.classList.add(
        sender === "user" ? "user-message" : "bot-message",
      );
      messageDiv.textContent = text;
      displayAreaElement.appendChild(messageDiv);
  
      // Scroll to the bottom of the chat display
      displayAreaElement.scrollTop = displayAreaElement.scrollHeight;
    }
  
    // Function to handle sending a message and simulating a bot reply
    function handleSendMessage(
      inputElement,
      displayAreaElement,
      interfaceName,
    ) {
      if (
        !inputElement ||
        !displayAreaElement ||
        inputElement.value.trim() === ""
      ) {
        return; // Exit if elements don't exist or input is empty
      }
  
      const userMessage = inputElement.value.trim();
      console.log(`${interfaceName} message sent: ${userMessage}`);
  
      // 1. Display user's message
      displayMessage(userMessage, "user", displayAreaElement);
  
      // Clear the input field
      inputElement.value = "";
  
      // 2. Simulate bot thinking and response
      setTimeout(() => {
        // Basic simulated response
        let botResponse = `Thanks for your message in ${interfaceName}! You said: "${userMessage}". I'm still learning!`;
        if (interfaceName === "Language Learn") {
          botResponse = `Practicing languages? You wrote: "${userMessage}". Keep it up! (Simulated response)`;
        }
        displayMessage(botResponse, "bot", displayAreaElement);
      }, 1000); // Simulate a 1-second delay
    }
  
    // --- Setup for Chat Interface (chat.html) ---
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      const chatInput = chatContainer.querySelector(
        '.message-input-area input[type="text"]',
      );
      const chatSendButton = chatContainer.querySelector(".send-button");
      const chatDisplayArea = chatContainer.querySelector(
        ".message-display-area",
      );
  
      if (chatSendButton && chatInput && chatDisplayArea) {
        chatSendButton.addEventListener("click", () =>
          handleSendMessage(chatInput, chatDisplayArea, "Chat"),
        );
        chatInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            handleSendMessage(chatInput, chatDisplayArea, "Chat");
          }
        });
      }
    }
  
    // --- Setup for Language Learn Interface (language.html) ---
    const languageContainer = document.querySelector(
      ".language-container",
    );
    if (languageContainer) {
      const languageInput = languageContainer.querySelector(
        '.message-input-area input[type="text"]',
      );
      const languageSendButton =
        languageContainer.querySelector(".send-button");
      const languageDisplayArea = languageContainer.querySelector(
        ".message-display-area",
      );
  
      if (
        languageSendButton &&
        languageInput &&
        languageDisplayArea
      ) {
        languageSendButton.addEventListener("click", () =>
          handleSendMessage(
            languageInput,
            languageDisplayArea,
            "Language Learn",
          ),
        );
        languageInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            handleSendMessage(
              languageInput,
              languageDisplayArea,
              "Language Learn",
            );
          }
        });
      }
    }
  
    // --- Tutor/Solver/Explainer Upload Buttons ---
    const uploadButtons = document.querySelectorAll(".upload-button");
    uploadButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Upload button clicked");
        alert("Upload functionality not implemented.");
      });
    });
  
    // --- Grammar Interface ---
    const grammarTextArea = document.querySelector(".grammar-input-area");
    const suggestionCategories = document.querySelectorAll(
      ".suggestion-category",
    );
  
    if (grammarTextArea) {
      grammarTextArea.addEventListener("input", () => {
        console.log("Grammar text changed:", grammarTextArea.value);
      });
    }
  
    suggestionCategories.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.textContent;
        console.log(`Suggestion category selected: ${category}`);
        alert(`Filtering by ${category} not implemented.`);
      });
    });
  });
  