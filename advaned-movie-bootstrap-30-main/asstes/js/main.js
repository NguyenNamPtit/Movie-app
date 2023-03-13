/*--- Du lieu co san --------------------------------*/
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
/*--BUoc1--------------------------------*/
getMovie(API_URL);
async function getMovie(API_URL) {
  const res = await axios.get(API_URL);
  const data = await res.data.results;
  console.log(data);
  showMovie(data);
}

/*--buoc2- hien thi du lieu-*/
function showMovie(movie) {
  let htmlCode = ` `;
  movie.forEach((value, index) => {
    htmlCode += ` <div class="col-6 col-sm-3 col-md-3">
    <div class="item">
      <div class="box-image">
        <img src="${IMG_PATH + value.poster_path}" />
      </div>

      <div class="box-content">
        <h3 class="title-film">
          ${value.title}
        </h3>
        <p class="rating ${changecolor(value.vote_average)}">${
      value.vote_average
    }</p>
      </div>

      <div class="box-description">
        <h4>Overview</h4>
        <p>
          After a heroic job of successfully landing his storm-damaged
          aircraft in a war zone, a fearless pilot finds himself between
          the agendas of multiple militias planning to take the plane
          and its passengers hostage.
        </p>
      </div>
    </div>
  </div>
    `;
    //Truy cam phan tu
    const content = document.querySelector(".listing-product .row");
    console.log(content);
    //Ghi noi dung
    content.innerHTML = htmlCode;
    console.log(htmlCode);
  });
}

//thay doi mau ratting

function changecolor(vote) {
  if (vote > 8) {
    return "good";
  } else if (vote > 5) {
    return "normal";
  } else {
    return "bad";
  }
}
/* them bo tim kiem */
//truy cap phan tu

const formSearch = document.querySelector(".form-search");
console.log(formSearch);
// console.log(formSearch);
const inputSearch = document.querySelector(".input-search");
// add su kien submmit
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  //lay gia tri nhap vao o input
  const valueInput = inputSearch.value;
  if (valueInput && valueInput !== "") {
    getMovie(SEARCH_API + valueInput);
  } else {
    window.location.reload();
  }
});
