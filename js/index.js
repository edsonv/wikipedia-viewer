const searchText = document.getElementById("search-text");
const results = document.querySelector("#results .card-columns");

// Add event listener to search button
$("#search-button").on("click", getData);
$(".addForm").on("submit", function(e) {
	e.preventDefault();
    getData();
});

// Create function to retrieve data
function getData() {
  // Clear results
  results.innerHTML = "";

  const url =
    "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
    searchText.value +
    "&format=json&origin=*";
  fetch(url)
  	.then(response => response.json())
  	.then(data => {
      for (var i = 0; i < data[1].length; i++) {
        results.innerHTML += `
            <div class="card">
              <div class="card-header">
                ${data[1][i]}
              </div>
              <div class="card-body">
                <p class="card-text">${data[2][i]}</p>
                <a href="${data[3][i]}" class="btn btn-primary">Full article</a>
              </div>
            </div>
        `;
      }
      searchText.value = "";
    })
    // .catch(err => console.log(err));
}
