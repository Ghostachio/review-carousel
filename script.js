// data

const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images.pexels.com/photos/3779663/pexels-photo-3779663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// setting default index 
let defaultItem = 0;

// caching different elements

let image = document.getElementById('image');
let nam = document.getElementById('names');
let role = document.getElementById('role');
let description = document.getElementById('description');

let next = document.querySelector('#next')
let prev = document.querySelector('#prev')


// setting item on loaded page

const loadItem = () => {
  let item = reviews[defaultItem];
  image.src = item.img;
  nam.textContent = item.name;
  role.textContent = item.job;
  description.textContent = item.text;

  console.log(nam.src);
}

// next and prev button 

const nextItem = () => {
    defaultItem ++;
    if (defaultItem > reviews.length -1) {
      defaultItem = 0;
    }
    loadItem();
}
const prevItem = () => {
    defaultItem --;
    if (defaultItem < 0) {
      defaultItem = reviews.length - 1;
    }
    loadItem();
}



window.addEventListener('DOMContentLoaded', loadItem);
next.addEventListener('click', nextItem);
prev.addEventListener('click', prevItem);