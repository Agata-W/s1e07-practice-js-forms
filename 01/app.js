const formEl = document.querySelector('form')
formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const userNameEl = e.target.elements.firstName
    const userLastNameEl = e.target.elements.lastName

    const userName = userNameEl.value
    const userLastName = userLastNameEl.value
    const inputValue = userName + userLastName

    if (userName && userLastName) {
        const ulEl = document.querySelector('.users-list')
        const person = document.querySelector('.users-list__person')
        let addPerson = person.cloneNode(true)
        addPerson.innerText = inputValue

        ulEl.appendChild(addPerson)

        userNameEl.value = ''
        userLastNameEl.value = ''

    } else {
        alert('brak danych!')
    }
}