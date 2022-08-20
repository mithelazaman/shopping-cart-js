function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}




document.getElementById('case-btn-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

})
document.getElementById('case-btn-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();


})