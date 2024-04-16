export default function disableButton() {
    const form = document.getElementById('contactForm');
    const firstnameInput = document.getElementById('firstnameInput');
    const emailInput = document.getElementById('emailInput');
    const checkBox1 = document.querySelector('.label-box1 input');
    const submitButton = document.getElementById('submitButton');

    function updateSubmitButtonState() {
        const firstNameFilled = firstnameInput.value.trim() != '';
        const emailFilled = emailInput.value.trim() !== '';
        const checkBoxChecked = checkBox1.checked;

        if (firstNameFilled && emailFilled && checkBoxChecked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }
    form.addEventListener('input', updateSubmitButtonState);
    window.onload = function() {
        updateSubmitButtonState();
    };
}