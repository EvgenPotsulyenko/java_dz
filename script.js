
var links = document.querySelectorAll('ul a[href^="http"]');
console.log(links);

links.forEach(function(el) {
    el.classList.add("a")
});