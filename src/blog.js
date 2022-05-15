import lorem from './lorem.js'

function blog() {
    const mainPosts = document.createElement('div')
    const headings = document.createElement('h1')
    const posts = document.createElement('p')

    headings.textContent = 'Post'
    posts.innerHTML = lorem

    mainPosts.appendChild(headings)
    mainPosts.appendChild(posts)

    return mainPosts
}

export default blog