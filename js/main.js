let ul
let scans = ['badleaf.glb', 'breadwithleaf.glb', 'flatbread.glb']

document.addEventListener('DOMContentLoaded', evt => {
    getArticles('samedaycyborg')
})

function getArticles(username) {
    // Gets the div
    ul = document.getElementById('articles_list')

    let url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40${username}`

    fetch(url).then(r => r.json()).then(r => {
        if (r.status !== 'ok') {
            ul.innerText = 'Unable to Find Articles'
            return
        }

        r.items.forEach(renderArticle);
    })
}

function renderArticle(article) {
    let li = document.createElement('li')

    li.className = 'flex flex-row justify-between border shadow-black shadow-lg my-5 mx-4 p-2';

    li.innerHTML = `<div class="flex flex-col">
                        <h3 class="text-lg">${article.title}</h3>
                        <p class="text-md">By: ${article.author}</p>
                        <ul class="flex flex-row">
                            ${article.categories.map((cat) => (`<li class="m-1 p-1 text-beige text-sm bg-black">${cat}</li>`)).join('')}
                        </ul>
                    </div>
                    
                    <a class="flex-none w-2/5 flex justify-end" href="${article.link}"><img class="h-auto w-2/5" src="${article.thumbnail}" alt="${article.title}"></a>`

    ul.appendChild(li)
}

function on3JSLoaded() {
    console.log("3JSLoaded")

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // TODO: Delete the test code

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Loads each model
    scans.forEach(load)

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

}


function load(path) { // Loads the GLB file at a particular path
    const loader = new GLTFLoader();

    loader.load(path, (gltf) => {

        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        }), (err) => {
        console.log(err)
    }
}
