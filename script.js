// Get modal and button elements
const modal = document.getElementById('checklistModal');
const nextStepBtn = document.getElementById('nextStepBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const checklistForm = document.getElementById('checklistForm');
const step2 = document.getElementById('step2');
const step1 = document.getElementById('step1');

// Show modal when "Next Step" is clicked
nextStepBtn.onclick = function() {
    modal.style.display = 'block';
    step1.style.display = 'none';
}

// Close modal when "x" is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle form submission
checklistForm.onsubmit = function(event) {
    event.preventDefault();
    // Process form data here
    modal.style.display = 'none';
    step2.style.display = 'block';
}
