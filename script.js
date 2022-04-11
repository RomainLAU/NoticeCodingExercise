window.addEventListener('DOMContentLoaded', () => {

    let title = document.querySelector('h1')
    let changeTitleButton = document.querySelector('button')

    let isTitleAmazing = false

    changeTitleButton.addEventListener('click', () => {

        if (isTitleAmazing === false) {
            title.textContent = 'An Amazing Test !'
            isTitleAmazing = true
        } else {
            title.textContent = 'Notice Coding Exercise'
            isTitleAmazing = false
        }
    })
})