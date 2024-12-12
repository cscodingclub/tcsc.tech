document.addEventListener("DOMContentLoaded", function () {
  // Get all the spans and lists
  const frontend = document.getElementById("frontend");
  const backend = document.getElementById("backend");
  const datascience = document.getElementById("datascience");
  const linux = document.getElementById("linux");
  const uiux = document.getElementById("uiux");

  const frontendList = document.querySelector(".frontend-list");
  const backendList = document.querySelector(".backend-list");
  const datascienceList = document.querySelector(".datascience-list");
  const linuxList = document.querySelector(".linux-list");
  const uiuxList = document.querySelector(".ui-ux");

  const allSpans = [frontend, backend, datascience, linux, uiux];

  // Function to hide all lists
  function hideAllLists() {
    frontendList.style.display = "none";
    backendList.style.display = "none";
    datascienceList.style.display = "none";
    linuxList.style.display = "none";
    uiuxList.style.display = "none";
  }

  // Function to reset span colors
  function resetSpanColors() {
    allSpans.forEach((span) => {
      span.style.color = ""; // Reset color
    });
  }

  // Add event listeners for the spans
  frontend.addEventListener("click", () => {
    hideAllLists();
    resetSpanColors();
    frontendList.style.display = "flex";
    frontend.style.color = "red"; // Highlight selected span
  });

  backend.addEventListener("click", () => {
    hideAllLists();
    resetSpanColors();
    backendList.style.display = "flex";
    backend.style.color = "red"; // Highlight selected span
  });

  datascience.addEventListener("click", () => {
    hideAllLists();
    resetSpanColors();
    datascienceList.style.display = "flex";
    datascience.style.color = "red"; // Highlight selected span
  });

  linux.addEventListener("click", () => {
    hideAllLists();
    resetSpanColors();
    linuxList.style.display = "flex";
    linux.style.color = "red"; // Highlight selected span
  });

  uiux.addEventListener("click", () => {
    hideAllLists();
    resetSpanColors();
    uiuxList.style.display = "flex";
    uiux.style.color = "red"; // Highlight selected span
  });

  // Activate frontend by default
  hideAllLists();
  resetSpanColors();
  frontendList.style.display = "flex"; // Make frontend visible
  frontend.style.color = "red"; // Highlight default span
});
