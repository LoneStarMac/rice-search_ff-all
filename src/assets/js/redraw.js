(function () {
  console.log("Script initialized. Waiting for #header...");

  let attempts = 0;
  const maxAttempts = 50;

  const interval = setInterval(() => {
    const header = document.getElementById("header");

    if (header) {
      console.log("Header found:", header);

      // Create the new #main container
      const main = document.createElement("div");
      main.id = "main";

      // Add the logo
      const oldLogo = document.getElementById("logo");
      if (oldLogo) {
        const logoClone = oldLogo.cloneNode(true);
        main.appendChild(logoClone);
        oldLogo.remove(); // Remove the original logo
        console.log("Logo added.");
      }

      // Add the heading
      const heading = document.createElement("h1");
      heading.textContent = "Search Rice";
      main.appendChild(heading);

      // Add the search form
      const go = document.createElement("div");
      go.id = "go";

      const form = document.createElement("form");
      form.id = "searchForm";
      form.action = "https://search.rice.edu";
      form.method = "GET";

      const input = document.createElement("input");
      input.type = "text";
      input.id = "searchInput";
      input.name = "q";
      input.placeholder = "Search Rice";

      const button = document.createElement("button");
      button.type = "submit";
      button.id = "searchButton";
      button.textContent = "Search";

      form.appendChild(input);
      form.appendChild(button);
      go.appendChild(form);
      main.appendChild(go);

      // Add the actions
      const oldActions = document.getElementById("actions");
      if (oldActions) {
        const actionsClone = oldActions.cloneNode(true);
        main.appendChild(actionsClone);
        oldActions.remove(); // Remove the original actions
        console.log("Actions added.");
      }

      // Replace the header with the new structure
      header.replaceWith(main);
      console.log("Header replaced successfully.");
      clearInterval(interval);
    } else if (++attempts >= maxAttempts) {
      console.error("Failed to find #header after maximum attempts. Stopping script.");
      clearInterval(interval);
    } else {
      console.log("Header not found. Retrying...");
    }
  }, 100);
})();