import lorem from './lorem'

function nav() {
    const content = document.createElement('div')
    const tabs = document.createElement('ul')

    tabs.innerHTML = `
    <li id="Home"><a href="#">Home</a></li>
    <li id="Contact"><a href="#">Contact</a></li>
    <li id="Blog"><a href="#">Blog</a></li>
    `
    tabs.classList.add('nav')
    content.appendChild(tabs)

    return content
}

function hero() {
    const headContainer = document.createElement('div')
    const header = document.createElement('h1')
    const subheader = document.createElement('h2')
    const subsubheader = document.createElement('h3')

    header.textContent = 'Home'
    subheader.textContent = 'Restaurant Great'
    subsubheader.textContent = 'Stop By!'

    headContainer.appendChild(header)
    headContainer.appendChild(subheader)
    headContainer.appendChild(subsubheader)
    headContainer.append(lorem)

    return headContainer
}

export { nav, hero }