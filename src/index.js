import homey from './home.js'

function component() {
    const content = document.createElement('h1')

    content.textContent = 'Heading'

    return content
}

const main = document.getElementById('content')
main.appendChild(component());