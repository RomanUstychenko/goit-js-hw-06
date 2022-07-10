const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector(".gallery");
const creatLi = (count) => {
  for (let i = 0; i < count; i += 1 ) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    li.textContent = `${i}`;
    gallery.append(li);
  }
  
}
creatLi (images.length)

const markup = images
  .map((image) => `<li ><img class="image" style = "width: 500px" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");
  gallery.innerHTML = markup;
  gallery.setAttribute("style", "list-style-type:none; display: flex")

  
  
  
  
  
