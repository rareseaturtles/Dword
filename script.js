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

    doc.save('Step_One_Worksheet.pdf');
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
