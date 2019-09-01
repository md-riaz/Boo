/* Shortcode */
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
/* 
 * Variables
 */
let btn_tabs = queryAll(".btn__tab");
/* 
 * Events
 */
btn_tabs.forEach(el => {
    el.addEventListener("click", () => {
        btn_tabs.forEach(tab => tab.classList.remove("active"));
        el.classList.add("active");
    });
});