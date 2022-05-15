import './style/style.css'
import blog from './blog'
import contact from './contact'
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

const main = document.getElementById('content');

main.appendChild(nav())
main.appendChild(hero())

const Home = document.getElementById('Home')
const Contact = document.getElementById('Contact')
const Blog = document.getElementById('Blog')

Home.addEventListener('click', () => {
    // main.appendChild(nav())
    main.removeChild(main.children[1])
    main.appendChild(hero())
    // console.log('Yep!')
})

Contact.addEventListener('click', () => {
    main.removeChild(main.children[1])
    main.appendChild(contact());
})

Blog.addEventListener('click', () => {
    main.removeChild(main.children[1])

    const posts = [blog(), blog(), blog(), blog(), blog()];
    const blogPosts = document.createDocumentFragment();
    const content = document.createElement('div');

    for (let i = 0; i < posts.length; i++) {
        blogPosts.appendChild(posts[i])
    }

    content.appendChild(blogPosts);
    main.appendChild(content);
})








