// import img from "../public";
export const movies = [
  {
    id: 1,
    poster: "/img/india/1.jpg",
    name: "Awards",
  },
  {
    id: 2,
    poster: "/img/india/5.jpg",
    name: "Awards",
  },

  {
    id: 3,
    poster: "/img/india/3.jpg",
    name: "Awards",
  },
  { id: 4, poster: "/img/india/4.jpg", name: "Awards" },
  {
    id: 5,
    poster: "/img/india/2.jpg",
    name: "Awards",
  },
];

const fullmovies = [
  {
    id: 1,
    poster: "/img/india/1.jpg",
    name: "Awards",
  },
  {
    id: 2,
    poster: "/img/india/5.jpg",
    name: "Awards",
  },

  {
    id: 3,
    poster: "/img/india/3.jpg",
    name: "Awards",
  },
  { id: 4, poster: "/img/india/4.jpg", name: "Awards" },
  {
    id: 5,
    poster: "/img/india/2.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/6.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/7.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/8.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/9.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/10.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/11.jpg",
    name: "Awards",
  },
  {
    poster: "/img/india/12.jpg",
    name: "Awards",
  },
];

export const randomMoviesSet1 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = fullmovies
  .sort(() => Math.random() - 0.5)
  .concat(fullmovies.sort(() => Math.random() - 0.5))
  .concat(fullmovies.sort(() => Math.random() - 0.5));
