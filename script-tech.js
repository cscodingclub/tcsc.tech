document.addEventListener("DOMContentLoaded", function() {
    // Get all the spans and lists
    const frontend = document.getElementById('frontend');
    const backend = document.getElementById('backend');
    const datascience = document.getElementById('datascience');
    const linux = document.getElementById('linux');
    const uiux = document.getElementById('uiux');
  
    const frontendList = document.querySelector('.frontend-list');
    const backendList = document.querySelector('.backend-list');
    const datascienceList = document.querySelector('.datascience-list');
    const linuxList = document.querySelector('.linux-list');
    const uiuxList = document.querySelector('.ui-ux');
  
    // Function to hide all lists
    function hideAllLists() {
      frontendList.style.display = 'none';
      backendList.style.display = 'none';
      datascienceList.style.display = 'none';
      linuxList.style.display = 'none';
      uiuxList.style.display = 'none';
    }
  
    // Add event listeners for the spans
    frontend.addEventListener('click', () => {
      hideAllLists();
      frontendList.style.display = 'flex';
    });
  
    backend.addEventListener('click', () => {
      hideAllLists();
      backendList.style.display = 'flex';
    });
  
    datascience.addEventListener('click', () => {
      hideAllLists();
      datascienceList.style.display = 'flex';
    });
  
    linux.addEventListener('click', () => {
      hideAllLists();
      linuxList.style.display = 'flex';
    });
  
    uiux.addEventListener('click', () => {
      hideAllLists();
      uiuxList.style.display = 'flex';
    });
  
    // Activate frontend by default
    hideAllLists();
    frontendList.style.display = 'flex'; // Make frontend visible
  });
  