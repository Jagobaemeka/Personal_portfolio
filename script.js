function typeWriter(text, index, element) {
    if (index < text.length) {
        // Check if the current character is a line break
        if (text.charAt(index) === '<' && text.substring(index, index + 4) === '<br>') {
            // Insert a line break element
            element.appendChild(document.createElement('br'));
            // Skip the next 3 characters ('<br>')
            setTimeout(() => typeWriter(text, index + 4, element), 25);
        } else {
            // Append the current character
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeWriter(text, index + 1, element), 25);
        }
    }
}

function handleCommand(command) {
    const outputElement = document.getElementById('terminalOutput');
    outputElement.innerHTML = ''; // Clear previous output

    // Convert command to lowercase to ensure case insensitivity
    const lowerCaseCommand = command.toLowerCase();

    switch (lowerCaseCommand) {
        case 'help':
            typeWriter('Available commands:<br>help - Show available commands.<br>social - Display social networks.<br>projects - Show projects.<br>experience - Show experience.<br>education - Show education.<br>hobbies - Show hobbies.<br>', 0, outputElement);
            break;
        case 'social':
            typeWriter('Social:<br>LinkedIn: Emeka Adimora<br>Twitter: @EmekaAdimora<br>Instagram: @EmekaAdimora<br>', 0, outputElement);
            break;
        case 'projects':
            typeWriter('Projects:<br>Project 1: Personal Portfolio<br>Project 2: Online Store<br>Project 3: Blogging Platform<br>', 0, outputElement);
            break;
        case 'experience':
            typeWriter('Experience:<br>2018 - 2020: Junior Developer at XYZ Corp.<br>2021 - Present: Senior Developer at ABC Inc.<br>', 0, outputElement);
            break;
        case 'education':
            typeWriter('Education:<br>Bachelor of Science in Computer Science, University of XYZ, 2018<br>Master of Science in Software Engineering, University of ABC, 2020<br>', 0, outputElement);
            break;
        case 'hobbies':
            typeWriter('Hobbies:<br>Coding<br>Reading<br>Gaming<br>', 0, outputElement);
            break;
        // Add more cases for other commands here
        default:
            typeWriter('Error: Command not found. For a list of commands, type \'help\'.<br>', 0, outputElement);
    }
}

document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var command = this.value.trim();
        this.value = ''; // Clear the input field
        handleCommand(command);
    }
});

