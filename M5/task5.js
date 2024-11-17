'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      ' A lake is a body of water that is surrounded by land. There are millions of lakes in the world. They are found on every continent and in every kind of environment—in mountains and deserts, on plains, and near seashores. Lakes vary greatly in size.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Its double summit resembles the tail of a fish, hence the name meaning in Nepalese. It is also nicknamed the . It is a sacred peak for the Gurungs and the people of Chomrong. The mountain is said to be sacred as a home to the god Shiva.',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2 - Copy.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Alpenglow is an atmospheric optical phenomenon which makes mountains appear to glow in vibrant, warm tones of pinks and reds. This occurs as the sun sets and just before it rises, but only if in the right conditions (Phenomena). ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area. A mountain range is a series or chain of mountains that are close together. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'The Annapurna mountain range of Gandaki Province, north-central Nepal. It is the 10th highest mountain in the world at 8,091 metres (26,545 ft) above sea level and is well known for the difficulty and danger involved in its ascent. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Geography is the study of places and the relationships between people and their environments. Geographers explore both the physical properties of Earth.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Mount Everest is a peak in the Himalaya mountain range. It is located between Nepal and Tibet, an autonomous region of China. At 8,849 meters (29,032 feet), it is considered the tallest point on Earth. In the nineteenth century, the mountain was named after George Everest, a former Surveyor General of India.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Thorong La or Thorung La is a mountain pass with an elevation of 5,416 metres (17,769 ft) above sea level in the Damodar Himal, north of the Annapurna Himal, in central Nepal. Thorong Ri is on the slope of Khatung Kang and Yakawa Kang are the mountains forming Thorong La.',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'The mountains are a place of great natural beauty, with their rugged peaks, dense forests, and sparkling streams. When I was in the mountains, I felt a sense of awe and wonder at the majesty of the landscape around me. The air was fresh and crisp, and the sun shone brightly in the clear blue sky.',
    image: {
      large: 'img/pic9.jpg ',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here
'use strict';

const targetSection = document.getElementById("pictures");

for (let i = 0; i < picArray.length; i++) {


    const article = document.createElement("article");
    article.classList.add("card");

    const heading = document.createElement("h2");
    heading.textContent = picArray[i].title;


    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = picArray[i].image.medium;
    img.alt = picArray[i].title;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = picArray[i].caption;

    figure.appendChild(img);
    figure.appendChild(figcaption);


    const paragraph = document.createElement("p");
    paragraph.textContent = picArray[i].description;

    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(paragraph);


    targetSection.appendChild(article);
}