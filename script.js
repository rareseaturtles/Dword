document.getElementById('stepOneForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text('Step One: Admission of Powerlessness', 20, 20);

    const responses = {
        relationship: document.getElementById('relationship').value,
        attempts: document.getElementById('attempts').value,
        consequences: document.getElementById('consequences').value,
        powerlessness: document.getElementById('powerlessness').value,
        unmanageability: document.getElementById('unmanageability').value,
    };

    let yPosition = 30;
    for (const [key, value] of Object.entries(responses)) {
        doc.setFontSize(12);
        doc.text(`${capitalizeFirstLetter(key.replace(/([A-Z])/g, ' $1'))}:`, 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(value, 20, yPosition);
        yPosition += 20;
    }

    // Include checklist responses
    const checklistResponses = [
        'Have I tried to control my substance use without success?',
        'Have I experienced negative consequences in my life due to my addiction?',
        'Am I willing to acknowledge my powerlessness over my addiction?',
        'Do I recognize the need for help and support in my recovery journey?'
    ];

    doc.setFontSize(12);
    doc.text('Checklist Responses:', 20, yPosition);
    yPosition += 10;

    checklistResponses.forEach((question, index) => {
        doc.setFontSize(10);
        doc.text(`${index + 1}. ${question}`, 20, yPosition);
        yPosition += 10;
        doc.text('Response: ____________________________', 20, yPosition);
        yPosition += 20;
    });

    doc.save('Step_One_Worksheet.pdf');
});

document.getElementById('nextStepButton').addEventListener('click', function() {
    // Navigate to Step Two (implement navigation logic as needed)
    window.location.href = 'step2.html'; // Replace with actual path to Step Two page
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
