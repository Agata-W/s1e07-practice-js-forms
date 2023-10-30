document.addEventListener('DOMContentLoaded', init)

function init() {

    const formEl = document.querySelector('form')
    const labelsList = document.querySelectorAll('label')
    if (formEl) {
        formEl.addEventListener('submit', checkData)
    }

    function checkData(e) {
        e.preventDefault()

        const email = e.target.elements.login
        const password1 = e.target.elements.pass1
        const password2 = e.target.elements.pass2
        const acceptEl = e.target.elements.accept
        const errors = []


        if (!isCorrectEmail(email.value)) {
            errors.push(email.previousElementSibling)
        }
        if (!isCorrectPassword(password1, password2)) {
            errors.push(password1.previousElementSibling)
            errors.push(password2.previousElementSibling)

        }
        if (!acceptEl.checked) {
            errors.push(acceptEl.previousElementSibling)
        }


        resetErrors()


        if (errors.length === 0) {
            console.log('done')
        } else {
            showErrors(errors)
        }
    }

    function isCorrectEmail(login) {
        return login.includes('@')
    }

    function isCorrectPassword(password1, password2) {
        return (password1.value === password2.value && password1.value.length > 6)
    }

    function resetErrors() {
        labelsList.forEach(function (err) {
            err.style.color = ''
        })
    }

    function showErrors(errors) {
        errors.forEach(function (err) {
            err.style.color = 'red'
        })
    }

}