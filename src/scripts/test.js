function test() {
    // helper - add dot to class name

    const correctClass = document.getElementById("correctClass");
    const resultClassName = document.getElementById("resultClassName");
    const resultToLowerCase = document.getElementById("resultToLowerCase");
    const copyModal = document.querySelector(".modal");

    function change(e) {
        const correctClassValue = e.target.value;
        resultClassName.value = correctClassValue.charAt(0) === '.' ? `${correctClassValue.replace(/ /g, '.')} ` : `.${correctClassValue.replace(/ /g, '.')} `;
        resultToLowerCase.value = correctClassValue.toLowerCase();
    };

    function copyText(selector) {
        const copyText = document.getElementById(selector);
        if (copyText.value.length === 0) return;
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        correctClass.value = '';
        copyModal.classList.remove('modal__hide')
        copyModal.classList.add('modal__copy');
        setTimeout(() => {
            copyModal.classList.remove('modal__copy');
            copyModal.classList.add('modal__hide');
        }, 2000);
    };

    correctClass.addEventListener('input', change);

    resultClassName.addEventListener('click', () => copyText("resultClassName"));
    resultToLowerCase.addEventListener('click', () => copyText("resultToLowerCase"));




    // check is string equal??

    const checkString1 = document.querySelector('.check-string-1');
    const checkString2 = document.querySelector('.check-string-2');
    const btnCheckString = document.querySelector('.btn-check-string');
    const textareaCheckString = document.querySelectorAll('.equal');

    const isStrEqual = (firstStr, secondStr, el) => {
        el.textContent = 'Are strings is equal?'
        const str1 = firstStr.value;
        const str2 = secondStr.value;
        let btnText =  btnCheckString.textContent;
        if (str1 === str2) {
            el.textContent = `${btnText} yes`
        } else if (str1 !== str2) {
            el.textContent = `${btnText} no`
        } else {
            el.textContent = `${btnText} error`
        }
    }
    // btnCheckString.addEventListener('click', () => isStrEqual(checkString1, checkString2, btnCheckString));

    textareaCheckString.forEach(input => {
        input.addEventListener('input', () => {
            isStrEqual(checkString1, checkString2, btnCheckString);
        })
    })
}


export { test }

