const filter = document.getElementById("filter");
const postContainer = document.getElementById("postContainer");
const loadingIcon = document.getElementById("loadingContainer");

let limit = 5;
let page = 1;

const getRandomPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();
  console.log(data);

  addToDOMData(data);
};

const addToDOMData = (data) => {
  data.forEach((item) => {
    const post = document.createElement("div");
    post.classList.add("posts");

    post.innerHTML = `<div class="number">${item.id}</div>
    <div class="post-info">
        <div class="post-title">${item.title}
        </div>
        <div class="post-body">${item.body}
        </div>
    </div>`;

    postContainer.appendChild(post);
  });
};


getRandomPost();

document.addEventListener("scroll", (e) => {
  const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;

  if (clientHeight + scrollTop >= scrollHeight) {
    setTimeout(() => {
      page++;
      getRandomPost();
    }, 500);
  }
});

const filterPost = (e) => {
    const words = e.target.value;
    const posts = document.querySelectorAll(".posts");

    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText;
        const body = post.querySelector('.post-body').innerText;

       if(title.indexOf(words) > -1 || body.indexOf(words) > -1){
        post.style.display = 'flex';
       } else{
        post.style.display = 'none';
       }
    })
    
}


filter.addEventListener('input', filterPost);

