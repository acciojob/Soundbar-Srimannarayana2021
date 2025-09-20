//your JS code here. If required.
// A list of your sound file names (without the .mp3 extension)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the main container for the buttons
const buttonsContainer = document.getElementById('buttons');

// Function to stop all currently playing sounds
const stopSongs = () => {
    // Find all audio elements on the page
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reset to the start
    });
};

// Create a button for each sound
sounds.forEach(soundName => {
    // Create the button element
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = soundName;

    // Create the audio element
    const audio = document.createElement('audio');
    audio.src = `sounds/${soundName}.mp3`;
    // Add the audio element to the button itself for easy access
    btn.appendChild(audio);

    // Add a click event listener to the button
    btn.addEventListener('click', () => {
        stopSongs(); // Stop other sounds before playing a new one
        btn.querySelector('audio').play(); // Play the sound
    });

    // Add the completed button to the container
    buttonsContainer.appendChild(btn);
});

// Create the dedicated 'Stop' button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop'); // Add both classes
stopBtn.innerText = 'Stop';

// Add click listener to stop all sounds
stopBtn.addEventListener('click', stopSongs);

// Add the stop button to the container
buttonsContainer.appendChild(stopBtn);