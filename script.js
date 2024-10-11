function calculateDays() {
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput = document.getElementById('endDate').value;
    const daysCountInput = document.getElementById('daysCount').value;
    const resultInput = document.getElementById('result');

    let startDate, endDate, daysCount;

    if (startDateInput && endDateInput) {
        startDate = new Date(startDateInput);
        endDate = new Date(endDateInput);
        daysCount = (endDate - startDate) / (1000 * 60 * 60 * 24);
        resultInput.value = `Số ngày: ${daysCount}`;
    } else if (startDateInput && daysCountInput) {
        startDate = new Date(startDateInput);
        daysCount = parseInt(daysCountInput);
        endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + daysCount);
        resultInput.value = `Ngày kết thúc: ${endDate.toLocaleDateString()}`;
    } else if (endDateInput && daysCountInput) {
        endDate = new Date(endDateInput);
        daysCount = parseInt(daysCountInput);
        startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - daysCount);
        resultInput.value = `Ngày bắt đầu: ${startDate.toLocaleDateString()}`;
    } else {
        resultInput.value = 'Vui lòng nhập đầy đủ thông tin.';
    }
}

function resetField(fieldId) {
    document.getElementById(fieldId).value = '';
}