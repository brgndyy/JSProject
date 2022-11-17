const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

const getRandomPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  addToDOMDate(data);
};


const addToDOMDate = (data) => {
    
}

getRandomPost();
