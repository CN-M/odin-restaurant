import './style/style.css'
import blog from './blog'
import contact from './contact'
import { nav, hero } from './hero'

const main = document.getElementById('content');

main.appendChild(nav())
main.appendChild(hero())

const Home = document.getElementById('Home')
const Contact = document.getElementById('Contact')
const Blog = document.getElementById('Blog')

function initiate(func) {
    main.removeChild(main.children[1])
    main.appendChild(func)
}

Home.addEventListener('click', () => initiate(hero()))
Contact.addEventListener('click', () => initiate(contact()))
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








