// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const createCard = (data) => {
  //create elements
  const cardPackage = document.createElement('div');
  const headline = document.createElement('div');
  const authorContainer = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const spanAuthorName = document.createElement('span');
  //add classes
  cardPackage.classList.add('card');
  headline.classList.add('headline');
  authorContainer.classList.add('author');
  imgContainer.classList.add('img-container');
  spanAuthorName.classList.add('span-author-name')
  //set text content and src equal to recieved data
  headline.textContent = `${data.headline}`;
  img.src = `${data.authorPhoto}`;
  spanAuthorName.textContent = `${data.authorName}`;
  //properly nest items
  cardPackage.appendChild(headline);
  cardPackage.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(spanAuthorName);
  //return package
  return cardPackage;
}

//perform axios promise to get data from API
const articlesPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');
//check what data we're reciving
console.log('Failsafe: Here\'s your axios promise for articles captain!', articlesPromise)

//create entry point to card container
const cardsContainer = document.querySelector('.cards-container');

//take response from axios promise
articlesPromise.then(res => {
  //check our data
  console.log('Failsafe: Here\'s your console.log from cards line 57 Captain.', res);

  //create articleTopics variable from the articles inside our response data
  articleTopics = res.data.articles;

  //this solution is not DRY
  //take our response data and run a for each on every category
  articleTopics.bootstrap.forEach(article => {
    //append a card component onto cardsContainer and pass it our response data
    cardsContainer.appendChild(createCard(article));
  })

  //do that several more times.
  articleTopics.javascript.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  })
  articleTopics.jquery.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  })
  articleTopics.node.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  })
  articleTopics.technology.forEach(article => {
    cardsContainer.appendChild(createCard(article));
  })
})

// MVP 👌