const filter = document.getElementById("filter");
const postContainer = document.getElementById("postContainer");
const loadingIcon = document.getElementById("loadingIcon");

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
  postContainer.innerHTML = `${data
    .map(
      (item) => `<div class="posts">
    <div class="number">${item.id}</div>
    <div class="post-info">
        <div class="post-title">${item.title}
        </div>
        <div class="post-body">${item.body}
        </div>
    </div>
</div>`
    )
    .join("")}`;
};

getRandomPost();


window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight-5) {
    
    getRandomPost();
    page++;
  }
});
