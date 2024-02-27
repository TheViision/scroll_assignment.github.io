document.addEventListener('DOMContentLoaded', () => {
    const clockDiv = document.getElementById('clock-div'); // The clock or element to move
    const clockText = document.getElementById('clock-text'); // Text element to update
    const stories = [
 
    ];

    document.addEventListener('scroll', function() {
        let pos = window.scrollY;
        let height = window.innerHeight;
        let width = window.innerWidth;
        let sectionNum = Math.floor(pos / height); // Determine the current section based on scroll position

        // Update the text for the current section
        if (sectionNum < stories.length) {
            clockText.innerHTML = stories[sectionNum];
        }

        // Move the clock element horizontally based on the scroll position
        // The formula: pos / (height * 12) * width + 'px';
        clockDiv.style.left = (pos / (height * 12) * width) + 'px';
    });
});
