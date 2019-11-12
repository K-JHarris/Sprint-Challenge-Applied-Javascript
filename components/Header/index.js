// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//declare all component elements inside header function
function Header() {
  const headerPackage = document.createElement('div');
  const dateSpan = document.createElement('span');
  const headerTitle = document.createElement('h1');
  const tempSpan = document.createElement('span');
  //set text content for elements that need it
  dateSpan.textContent = 'SMARCH 28, 2019';
  headerTitle.textContent = 'Lambda Times'; 
  tempSpan.textContent = '98°'
  //use .appendChild to insert newly created elements into container div
  headerPackage.appendChild(dateSpan);
  headerPackage.appendChild(headerTitle);
  headerPackage.appendChild(tempSpan);
  //set classes for elements that need them
  headerPackage.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');
  //return container div, now full of our elements
  return headerPackage;
}

//create a reference to the .header-container class
const headerContainer = document.querySelector('.header-container');
//append our headerPackage into that reference
headerContainer.appendChild(Header());


// MVP 👌
