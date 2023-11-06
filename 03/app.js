document.addEventListener('DOMContentLoaded', init)

function init() {
    const inputEl = document.querySelector('input')
    if (inputEl) {
        inputEl.addEventListener('change', handleChange)
    }

    function handleChange(e) {
        const prototypeEl = document.querySelector('.images-list__item--prototype')

        const filesList = Array.from(e.target.files)

        filesList.forEach(function (file) {
            const liElement = prototypeEl.cloneNode(true)
            const ulElement = document.querySelector('.images-list')

            const headerElement = liElement.querySelector('header')
            const footerElement = liElement.querySelector('footer')
            const imageElement = liElement.querySelector('img')

            headerElement.innerText = file.name
            footerElement.innerText = (file.size / (1024 * 1024)).toFixed(2) + 'MB'
            liElement.classList.remove('images-list__item--prototype')

            ulElement.appendChild(liElement)

            const reader = new FileReader()
            reader.addEventListener('load', function (e) {
                const image = e.target.result
                imageElement.src = image
            })

            reader.readAsDataURL(file)


        })
    }
}
