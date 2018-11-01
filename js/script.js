/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements
let $students = $('.student-item');
let pageCount = 1;
let div = document.createElement('div');
let ul = document.createElement('ul');
let $anchorTags = $('a');
let page = $(".page")[0];


// Create a function to hide all of the items in the list except for ten students
const showPage = ($students, pageCount) => {
  let higher = pageCount * 10-1;
  let lower = pageCount * 10-10;
  for (let i = 0; i < $students.length; i += 1){
    if(i >= lower && i <= higher){
      $($students[i]).show();
    } else $($students[i]).hide();


  }
}

// Create the pagination links
  createPageLinks = pageCount => {
  let li = document.createElement('li');

  li.innerHTML = '<a href="#">' + pageCount + "</a>";
  ul.appendChild(li);
  let links = ul.lastChild;
// add an event listener to each a tag.
// add the active class to the link that was just clicked
  links.addEventListener("click", () => {
    showPage($students, pageCount);

    for(let i = 0; i < $anchorTags.length; i += 1){
      $anchorTags[i].classList.remove("active");
      event.target.classList.add("active");

    }

  });

};

//append pagination links
// determine how many pages are needed for the list by dividing the total number
//of list items by the max number of items per page

  appendPageLinks = $students => {
  let pages = Math.ceil($students.length / 10);

  for (let i = 0; i < pages; i += 1) {
    createPageLinks(pageCount);
    pageCount += 1;

  }
};

div.className = "pagination";
div.appendChild(ul);
page.appendChild(div);
document.body.appendChild(div);

showPage($students,pageCount);
appendPageLinks($students);
