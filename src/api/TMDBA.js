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

export function getFilms(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_KEY +
    "&language=fr&query=" +
    text;

  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}
