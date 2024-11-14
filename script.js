document.getElementById('calculateButton').addEventListener('click', function () {

    var reactionScore = parseFloat(document.getElementById('reactionScore').value) || 0;
    var memoryScore = parseFloat(document.getElementById('memoryScore').value) || 0;
    var verbalScore = parseFloat(document.getElementById('verbalScore').value) || 0;
    var visualScore = parseFloat(document.getElementById('visualScore').value) || 0;

    var totalScore = reactionScore + memoryScore + verbalScore + visualScore;
    var percentage = (totalScore / 400) * 100;

    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('percentage').textContent = percentage.toFixed(2) + '%';

    var resultText = '';
    if (percentage >= 80) {
        resultText = 'Excellent';
    } else if (percentage >= 60) {
        resultText = 'Good';
    } else if (percentage >= 40) {
        resultText = 'Fair';
    } else {
        resultText = 'Poor';
    }
    document.getElementById('resultText').textContent = resultText;
});