function contact() {
    const element = document.createElement('div')
    const heading = document.createElement('h1')
    const heading2 = document.createElement('h2')
    const heading3 = document.createElement('h2')

    heading.textContent = 'Call Us'
    heading2.textContent = 'Number: 021 221 213'
    heading3.textContent = 'Email: Email@gmai.com'

    element.appendChild(heading)
    element.appendChild(heading2)
    element.appendChild(heading3)

    return element
}

export default contact