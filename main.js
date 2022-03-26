document.addEventListener('DOMContentLoaded', evt => {
    getArticles('samedaycyborg')
})

function getArticles(username){
    // Gets the div
    let ul = document.getElementById('articles')

    let url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40${username}`

    fetch(url).then(r => r.json()).then(r => {
        if(r.status !== 'ok'){
            ul.innerText = 'Unable to Find Articles'
            return
        }

        r.items.forEach(item => {
          let li = document.createElement('li')

          // TODO: Make this into a nice card with just the small thumbnail, the other stuff, and more
          li.innerHTML = `<img href="${item.thumbnail} \>"<h3>${item.title}</h3>
                            <h6>${item.pubDate}</h6>
                            <p>${item.author}</p>
                            <ul>
                            ${item.categories.map(cat => `<li>${cat}</li>`)}
                            </ul>
                            `
          // TODO: Implement Tailwind CSS styling of the card (how do I make this show up though???
          li.className = '';

          ul.appendChild(li)
        })
    })
}