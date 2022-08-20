function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementstring = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalElementstring);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);

    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    //calculate total//
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax//

    const taxAmmountString = (currentSubTotal * 0.1).toFixed(2) ;
    const taxAmmount = parseFloat(taxAmmountString);
    setTextElementValueById('tax-total', taxAmmount);

    const finalAmmount = currentSubTotal + taxAmmount;
    setTextElementValueById('final-total', finalAmmount)


}