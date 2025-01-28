 
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Popup script loaded");
  
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
  
    if (searchInput) {
        searchInput.focus();
      }

    const performSearch = () => {
      const query = searchInput.value.trim();
  
      if (query) {
        // Construct the search URL with the query
        const searchUrl = `https://search.rice.edu?q=${encodeURIComponent(query)}`;
        console.log("Opening URL:", searchUrl);
  
        window.open(searchUrl, "_blank"); // Open search results in a new tab
      } else {
        alert("Please enter a search query.");
      }
    };
  
    // Handle button click
    searchButton.addEventListener("click", performSearch);
  
    // Handle Enter key press in the input field
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent any default behavior
        performSearch();
      }
    });
  });
  