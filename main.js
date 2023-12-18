const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    search();
  }
});

function search() {
  const input = searchInput.value;
  window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
  const apiKey = "AIzaSyDFDly_fnMOQO_I1nqkYDql-oyEz6rOlYo"; // Replace with your actual API key
  const cx = "70e95883225fb4049"; // Replace with your actual Custom Search Engine ID
  const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${input}&key=${apiKey}&cx=${cx}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle the API response data
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}


