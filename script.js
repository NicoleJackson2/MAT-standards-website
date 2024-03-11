


/*JS for nav bar*/
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon"),
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
   

    searchIcon.addEventListener("click", () => {
       window.location = "./search.html";
        nav.classList.toggle("openSearch");
        nav.classList.remove("openNav");
        if (nav.classList.contains("openSearch")) {
           return searchIcon.classList.replace("uil-search", "uil-times");
        }
        searchIcon.classList.replace("uil-times", "uil-search");
      
    });
    
    navOpenBtn.addEventListener("click", () => {
        nav.classList.add("openNav");
        nav.classList.remove("openSearch");
        searchIcon.classList.replace("uil-times", "uil-search");
    });

    navCloseBtn.addEventListener("click", () => {
        nav.classList.remove("openNav");
    });


/*JS for collapsible sections on standards pages*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

}

/*code for search*/
const categoryIndex = {
  "./addiction.html": {
   title: "Addiction",
   keywords: ["addiction", "addict"] 
  },
  "./mentalHealth.html": {
    title: "Mental Health",
    keywords: ["mental health", "mental", "health"]
  },
  "./physicalHealth.html": {
    title: "Physical Health",
    keywords: ["physical health", "physical", "health"]
  },
  "./social.html": {
    title: "Social",
    keywords: ["social", "socialising"]
  }
};

  const standardsIndex = {
    "./standardOne.html": {
      title: "Standard 1",
      keywords: ["standard one", "standard 1", "one", "1", "same day access", "same day", "addiction"] 
     },
     "./standardTwo.html": {
      title: "Standard 2",
      keywords: ["standard two", "standard 2", "two", "2", "choice", "physical", "addiction", "physical health", "health"] 
     },
     "./standardThree.html": {
      title: "Standard 3",
      keywords: ["standard three", "standard 3", "three", "3", "assertive outreach", "anticipatory care", "addiction", "mental health", "mental", "physical health", "physical", "health"] 
     },
     "./standardFour.html": {
      title: "Standard 4",
      keywords: ["standard four", "standard 4", "four", "4", "harm reduction", "harm", "physical health", "physical", "health"] 
     },
     "./standardFive.html": {
      title: "Standard 5",
      keywords: ["standard five", "standard 5", "five", "5", "retention", "mental health", "mental", "physical health", "physical", "health"] 
     },
     "./standardSix.html": {
      title: "Standard 6",
      keywords: ["standard six", "standard 6", "six", "6", "psychological support", "psychological", "psychology", "mental health", "mental", "health"] 
     },
     "./standardSeven.html": {
      title: "Standard 7",
      keywords: ["standard seven", "standard 7", "seven", "7", "primary care", "primary", "addiction", "physical health", "physical", "health"] 
     },
     "./standardEight.html": {
      title: "Standard 8",
      keywords: ["standard eight", "standard 8", "eight", "8", "independent advocacy and social support", "independent advocacy", "social support", "advocacy", "social", "money", "housing"] 
     },
     "./standardNine.html": {
      title: "Standard 9",
      keywords: ["standard nine", "standard 9", "nine", "9", "mental health", "mental", "health"] 
     },
     "./standardTen.html": {
      title: "Standard 10",
      keywords: ["standard ten", "standard 10", "ten", "10", "trauma informed care", "trauma", "mental health", "mental", "health"] 
     },
  }

  const searchBar = document.getElementById("searchPageBar");
  const searchDisplay = document.querySelector(".searchDisplay");

  
  searchBar.addEventListener("keyup", function(e) {
   
    if (e.keyCode === 13){
    const search = e.target.value;
    console.log(search)
   searchDisplay.innerHTML = `Search results for: '${search}'`
   mySearch(search);
    } 
 });

 

function mySearch(search) {
var clear = document.getElementById('categoryList');
clear.innerHTML = "";

var clear = document.getElementById('standardsList');
clear.innerHTML = "";
  // normalise the search paramater
  search = search.toLowerCase(); // make all lower case 
  search = search.trim(); // remove begining and end spaces 

 
  const categoryResults = searchPageIndexes(search, categoryIndex);
  const standardsResults = searchPageIndexes(search, standardsIndex);
 
  for (const categoryResult of categoryResults) {
    const title = categoryResult.title;
    const link = categoryResult.page;

    console.log(title);
    console.log(link);

    
    
    var list_tag = document.getElementById('categoryList');
    var list_item = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = title;
    a.href = link;
    
    list_item.appendChild(a);
    list_tag.appendChild(list_item);
  }
  

  for (const standardsResult of standardsResults) {
    const title = standardsResult.title;
    const link = standardsResult.page;

    console.log(title);
    console.log(link);
  
    var list_tag = document.getElementById('standardsList');
    var list_item = document.createElement('li');
    var a = document.createElement('a');
    a.innerHTML = title;
    a.href = link;
    
    list_item.appendChild(a);
    list_tag.appendChild(list_item);
  
  };

 
};
  
  
  function searchPageIndexes(search, pageIndexes) {
    const results = [];
    // results is an array of objects
    // eg {title: "addiction", page: "./addiction.html"}
    for (const page in pageIndexes) {
      // the keys for the object
      const { link, title, keywords } = pageIndexes[page]; // access thing from object
      // check if search matches any of the keywords
      for (const keyword of keywords) {
        if (keyword === search) {
          // check if search matches the keyword exactly
          results.push({
            link: link,
            title: title,
            page: page,
          });
  
          break; // break from keyword loop
        }
      }
    }
    return results;
  }


  

