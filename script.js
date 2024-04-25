function simulateTyping(text, element) {
    // Create a temporary element to parse the HTML string
    const tempElement = document.createElement('div');
    tempElement.innerHTML = text;

    // Extract the child nodes from the temporary element
    const nodes = Array.from(tempElement.childNodes);

    let index = 0;
    const interval = setInterval(() => {
        if (index < nodes.length) {
            // Append each node to the output element
            element.appendChild(nodes[index].cloneNode(true));
            index++;
        } else {
            clearInterval(interval);
        }
    }, 30); // Adjust the delay as needed
}

function handleCommand(command) {
    const outputElement = document.getElementById('terminalOutput');
    outputElement.innerHTML = ''; // Clear previous output

    const lowerCaseCommand = command.toLowerCase();

    switch (lowerCaseCommand) {
        case 'help':
            const helpText = 'Available commands:<br>help - Show available commands.<br>social - Display social networks.<br>projects - Show projects.<br>experience - Show experience.<br>education - Show education.<br>hobbies - Show hobbies.<br>';
            simulateTyping(helpText, outputElement);
            break;
        case 'social':
            const socials = [
                { platform: "LinkedIn", username: "Emeka Adimora" },
                { platform: "Twitter", username: "@EmekaAdimora" },
                { platform: "Instagram", username: "@EmekaAdimora" }
            ];
            let socialText = 'Social:<br>';
            socials.forEach(social => {
                socialText += `<span class="platform">${social.platform}:</span> <span class="username">${social.username}</span><br>`;
            });
            simulateTyping(socialText, outputElement);
            break;
        // Add more cases for other commands here
        default:
            const errorText = 'Error: Command not found. For a list of commands, type \'help\'.<br>';
            simulateTyping(errorText, outputElement);
    }
}

document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var command = this.value.trim();
        this.value = ''; // Clear the input field
        handleCommand(command);
    }
});

