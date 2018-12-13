const API_KEY = "2444fc236a80bf07ddb6cf024d6f8496";
// // https://api.themoviedb.org/3/search/movie/550?api_key="2444fc236a80bf07ddb6cf024d6f8496

// export const getFilms = (text) => {

//   const url = 'https://api.themoviedb.org/3/search/movie?api_key=' +
//     API_KEY + '&language=fr&query=' + text ;
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error))
// }

// https://api.themoviedb.org/3/search/movie?api_key=2444fc236a80bf07ddb6cf024d6f8496&query=stars

export async function getFilms(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_KEY +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
}

// export function getFilms(text) {
//   const url =
//     "https://api.themoviedb.org/3/search/movie?api_key=" +
//     API_KEY +
//     "&language=fr&query=" +
//     text;

//   return fetch(url)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }

export function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}
