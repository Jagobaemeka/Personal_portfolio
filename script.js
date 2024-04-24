function handleCommand(command) {
    const outputElement = document.getElementById('terminalOutput');
    outputElement.innerHTML = ''; // Clear previous output

    switch (command) {
        case 'help':
            const helpText = 'Available commands: help - Show available commands. social - Display social networks. projects - Show projects. experience - Show experience. education - Show education. hobbies - Show hobbies.';
            // Split the help text into individual characters
            const characters = helpText.split('');
            // Map each character to a span with a dynamically set animation delay
            const animatedText = characters.map((char, index) => `<span style="animation-delay: ${index * 0.1}s;">${char}</span>`).join('');
            outputElement.innerHTML = animatedText;
            break;
        // Add more cases for other commands here
        default:
            outputElement.innerHTML = 'Command not found. For a list of commands, type \'help\'.<br/>';
    }
}

document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var command = this.value.trim();
        this.value = ''; // Clear the input field
        handleCommand(command);
    }
});

