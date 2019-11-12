// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//create tab component and pass in data recieved from axios promise
const createTab = (data) => {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  //set text content of tab equal to variable data recieved
  tab.textContent = `${data}`
  return tab;
};

//create reference to topics div
const topicElement = document.querySelector('.topics');

//perform axios get request on api url
const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
//to check the data we're recieving 
console.log('Failsafe: Here\'s your axios promise, I hope it\'s exciting', axiosPromise); 

axiosPromise.then(res => {
  //take result of axios promise and assign topics variable to topics data
  const topics = res.data.topics;

  //for each topic invoke our createTab function and append onto our topicElement reference
  topics.forEach(topic => {
    topicElement.appendChild(createTab(topic));
  })
})