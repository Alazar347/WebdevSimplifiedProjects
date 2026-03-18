const form = document.querySelector('#new-item-form')
const input = document.querySelector('#item-input')
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')
    console.log(item)

    list.append(item)

    input.value = ''
    
    item.addEventListener('click', () => {
        list.removeChild(item)
    })

})