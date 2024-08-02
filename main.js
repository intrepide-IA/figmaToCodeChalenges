document.addEventListener('DOMContentLoaded', function() {
    window.showSidebar = function() {
        const sidebar = document.querySelector(".sideBar");
        const bkSidebar = document.querySelector(".sidbarBk");
        bkSidebar.style.display = "block";
        sidebar.style.display = "block";
    }
    
    window.hideSidebar = function() {
        const hidesidebar = document.querySelector(".sideBar");
        const bkSidebar = document.querySelector(".sidbarBk");
        hidesidebar.style.display = "none";
        bkSidebar.style.display = "none";
    }
});
