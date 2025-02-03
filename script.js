document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const header = document.querySelector('header');
    const buttonContainer = document.querySelector('.button-container');

    // Dodanie formularza do wpisania hasła
    const passwordPrompt = document.createElement('div');
    passwordPrompt.classList.add('password-prompt');
    passwordPrompt.innerHTML = `
        <h2>Enter the password to continue:</h2>
        <input type="password" id="passwordInput" placeholder="Enter password">
        <button id="submitPassword">Submit</button>
    `;
    document.body.appendChild(passwordPrompt);

    const submitPasswordButton = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');

    // Obsługa logowania
    submitPasswordButton.addEventListener('click', function() {
        if (passwordInput.value === 'cutie pookie') {
            passwordPrompt.style.display = 'none';
            header.style.display = 'block';
            buttonContainer.style.display = 'flex';
        } else {
            alert('Incorrect password!');
        }
    });

    let clickCount = 0;

    // Obsługa przycisku "No"
    noButton.addEventListener('click', function() {
        clickCount++;

        if (clickCount === 1) {
            yesButton.style.transform = 'scale(1.5)';
            noButton.textContent = 'Are you sure?';
        } else if (clickCount === 2) {
            yesButton.style.transform = 'scale(2)';
            noButton.textContent = '100% sure?';
        } else if (clickCount === 3) {
            yesButton.style.transform = 'scale(2.5)';
            noButton.textContent = "Wasn't it a mistake?";
        } else if (clickCount === 4) {
            yesButton.style.transform = 'scale(3)';
            noButton.textContent = "So are you absolutely sure???";
        } else if (clickCount === 5) {
            document.body.style.display = 'block';
            document.body.style.margin = '0';
            document.body.style.padding = '0';
            document.body.style.overflow = 'hidden';

            noButton.style.display = 'none';
            header.style.display = 'none';

            yesButton.classList.add('fullscreen');
        }
    });

    // Obsługa przycisku "Yes"
    yesButton.addEventListener('click', function() {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        header.style.display = 'block';
        header.textContent = 'I knew you would pick yes <3';

        const sanrioGif = document.createElement('img');
        sanrioGif.src = 'sanrio.gif';
        sanrioGif.alt = 'Sanrio Animation';
        sanrioGif.classList.add('sanrio-gif');
        document.body.appendChild(sanrioGif);

        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Wanna see a presentation i made for you? <3';
        downloadButton.classList.add('download-button');

        downloadButton.addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = 'presentation.pdf';
            link.download = 'presentation.pdf';
            link.click();
        });

        document.body.appendChild(downloadButton);
    });
});
