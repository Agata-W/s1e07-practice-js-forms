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


        if (!email.value.includes('@')) {
            errors.push(email.previousElementSibling)
        }
        if (password1.value !== password2.value || password1.value.length <= 6) {
            errors.push(password1.previousElementSibling)
            errors.push(password2.previousElementSibling)

        }
        if (!acceptEl.checked) {
            errors.push(acceptEl.previousElementSibling)
        }


        labelsList.forEach(function (err) {
            err.style.color = ''
        })


        if (errors.length === 0) {
            console.log('done')
        } else {
            errors.forEach(function (err) {
                err.style.color = 'red'
            })
        }

    }
}