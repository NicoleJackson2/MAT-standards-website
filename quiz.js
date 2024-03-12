
/*nav bar*/
const nav = document.querySelector(".nav"),
    searchIcon = document.querySelector("#searchIcon");
    navOpenBtn = document.querySelector(".navOpenBtn"),
    navCloseBtn = document.querySelector(".navCloseBtn");
   
/*if search icon is clicked, take to search page*/ 
    searchIcon.addEventListener("click", () => {
       window.location = "./search.html";
      
    });
  
    /*open and close buttons for side nav bar on mobile view*/
    navOpenBtn.addEventListener("click", () => {
      nav.classList.add("openNav");
      nav.classList.remove("openSearch");
      searchIcon.classList.replace("uil-times", "uil-search");
  });

  navCloseBtn.addEventListener("click", () => {
      nav.classList.remove("openNav");
  });


/*index list for category, containing page, title and key words*/
const categoriesIndex = {
  "./addiction.html": {
   title: "Addiction",
   keywords: ["addiction"]
  },
  "./mentalHealth.html": {
    title: "Mental Health",
    keywords: ["mentalHealth"]
  },
  "./physicalHealth.html": {
    title: "Physical Health",
    keywords: ["physicalHealth"]
  },
  "./social.html": {
    title: "Social",
    keywords: ["social"]
  }
};

/*index list for standards, containing page, title and key words*/
  const standardsIndex = {
    "./standardOne.html": {
      title: "Standard 1",
      keywords: ["medication"] 
     },
     "./standardTwo.html": {
      title: "Standard 2",
      keywords: ["medication"] 
     },
     "./standardThree.html": {
      title: "Standard 3",
      keywords: ["highRisk"] 
     },
     "./standardFour.html": {
      title: "Standard 4",
      keywords: ["treatment"] 
     },
     "./standardFive.html": {
      title: "Standard 5",
      keywords: ["treatment"] 
     },
     "./standardSix.html": {
      title: "Standard 6",
      keywords: ["MHSupport"] 
     },
     "./standardSeven.html": {
      title: "Standard 7",
      keywords: ["medication"] 
     },
     "./standardEight.html": {
      title: "Standard 8",
      keywords: ["socialSupport"] 
     },
     "./standardNine.html": {
      title: "Standard 9",
      keywords: ["MHSupport"] 
     },
     "./standardTen.html": {
      title: "Standard 10",
      keywords: ["MHSupport"] 
     },
  }


  /*When submit button is pressed, carry out function to display correct information */
  const submitBtn = document.getElementById("submitBtn");
  document.getElementById("submitBtn").addEventListener("click", quizResults);

/*function to display correct categories and standards based on quiz choices */
  function quizResults(){

    /*clear lists in between quizes */
    var clear = document.getElementById('resultsCategories');
    clear.innerHTML = ""; 

    var clear = document.getElementById('resultsStandards');
    clear.innerHTML = ""; 

    /*for each if statement below, if the two choices are ticked, search for these in indexes and display corressponding categories and standards in a list*/
   
    /*addiction and medication*/
    if(document.getElementById('addiction').checked & document.getElementById('medication').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'addiction';
      const typeSearch = 'medication';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }
      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*addiction and treatment*/
    } else if(document.getElementById('addiction').checked & document.getElementById('treatment').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'addiction';
      const typeSearch = 'treatment';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

     /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }
      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*addiction and mental health*/
    } else if(document.getElementById('addiction').checked & document.getElementById('MHSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'addiction';
      const typeSearch = 'MHSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*addiction and high risk*/
    } else if(document.getElementById('addiction').checked & document.getElementById('highRisk').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'addiction';
      const typeSearch = 'highRisk';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*addiction and social */
    } else if(document.getElementById('addiction').checked & document.getElementById('socialSupport').checked) {

      
    /*set searches to be the 2 chosen options*/
      const categorySearch = 'addiction';
      const typeSearch = 'socialSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*mental health and medication*/
    } else  if(document.getElementById('mentalHealth').checked & document.getElementById('medication').checked) {

    /*set searches to be the 2 chosen options*/
      const categorySearch = 'mentalHealth';
      const typeSearch = 'medication';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*mental health and treatment*/
    } else if(document.getElementById('mentalHealth').checked & document.getElementById('treatment').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'mentalHealth';
      const typeSearch = 'treatment';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*mental health and mental health*/
    } else if(document.getElementById('mentalHealth').checked & document.getElementById('MHSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'mentalHealth';
      const typeSearch = 'MHSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);
      
    /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*mental health and high risk*/
    } else if(document.getElementById('mentalHealth').checked & document.getElementById('highRisk').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'mentalHealth';
      const typeSearch = 'highRisk';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

      
      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*mental health and social*/
    }else if(document.getElementById('mentalHealth').checked & document.getElementById('socialSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'mentalHealth';
      const typeSearch = 'socialSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*social and medication*/
    } else if(document.getElementById('social').checked & document.getElementById('medication').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'social';
      const typeSearch = 'medication';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*social and treatment*/
    }else if(document.getElementById('social').checked & document.getElementById('treatment').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'social';
      const typeSearch = 'treatment';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);
      
      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }
      
      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*social and mental health*/
    } else if(document.getElementById('social').checked & document.getElementById('MHSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'social';
      const typeSearch = 'MHSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*social and high risk*/
    } else if(document.getElementById('social').checked & document.getElementById('highRisk').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'social';
      const typeSearch = 'highRisk';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*social and social support*/
    } else if(document.getElementById('social').checked & document.getElementById('socialSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'social';
      const typeSearch = 'socialSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*physical health and medication*/
    } else if(document.getElementById('physicalHealth').checked & document.getElementById('medication').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'physicalHealth';
      const typeSearch = 'medication';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*physical health and treatment*/
    } else if(document.getElementById('physicalHealth').checked & document.getElementById('treatment').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'physicalHealth';
      const typeSearch = 'treatment';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*physical health and mental health*/
    } else if(document.getElementById('physicalHealth').checked & document.getElementById('MHSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'physicalHealth';
      const typeSearch = 'MHSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

      /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
    
      }

      /*physical health and high risk*/
    } else if(document.getElementById('physicalHealth').checked & document.getElementById('highRisk').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'physicalHealth';
      const typeSearch = 'highRisk';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }

      /*physical health and social support*/
    }else if(document.getElementById('physicalHealth').checked & document.getElementById('socialSupport').checked) {

      /*set searches to be the 2 chosen options*/
      const categorySearch = 'physicalHealth';
      const typeSearch = 'socialSupport';

      console.log(categorySearch);
      console.log(typeSearch);

      /*take these searches into function to look through index*/
      const categoryResults = searchPageIndexesCategory(categorySearch, categoriesIndex);
      const standardsResults = searchPageIndexesStandards(typeSearch, standardsIndex);

       /*display categories in list*/
      for (const categoryResult of categoryResults) {
        const title = categoryResult.title;
        const link = categoryResult.page;
    
        console.log(title);
        console.log(link);
    
        var list_tag = document.getElementById('resultsCategories');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
        list_item.appendChild(a);
        list_tag.appendChild(list_item);
      }

      /*display standards in list*/
      for (
       const standardsResult of standardsResults) {
        const title = standardsResult.title;
        const link = standardsResult.page;
    
       console.log(title);
       console.log(link);
      
       var list_tag = document.getElementById('resultsStandards');
        var list_item = document.createElement('li');
        var a = document.createElement('a');
        a.innerHTML = title;
        a.href = link;
        
       list_item.appendChild(a);
        list_tag.appendChild(list_item);
      
      }
    }
  };
      
  /*function to search through indexes and get matches to category search */
  function searchPageIndexesCategory(categorySearch, pageIndexes) {

    console.log(categorySearch);
    /* results is an array of objects eg {title: "addiction", page: "./addiction.html"}*/
       const categoryResults = [];
     
       for (const page in pageIndexes) {
   
         /* the keys for the object*/
         const { link, title, keywords } = pageIndexes[page]; 
   
         /*check if search matches any of the keywords*/
         for (const keyword of keywords) {
   
         /*check if search matches the keyword exactly*/
           if (keyword === categorySearch) {
             categoryResults.push({
               link: link,
               title: title,
               page: page,
             })} 
           /*break from keyword loop */
             break; 
           }
         }
       return categoryResults;
      }

  /*function to search through indexes and get matches to category search */
  function searchPageIndexesStandards(typeSearch, pageIndexes) {

      console.log(typeSearch);
     /* results is an array of objects eg {title: "addiction", page: "./addiction.html"}*/
        const typeResults = [];
         
        for (const page in pageIndexes) {
       
          /* the keys for the object*/
          const { link, title, keywords } = pageIndexes[page]; 
       
          /*check if search matches any of the keywords*/
          for (const keyword of keywords) {
       
            /*check if search matches the keyword exactly*/
              if (keyword === typeSearch) {
                typeResults.push({
                  link: link,
                  title: title,
                  page: page,
                })} 
              /*break from keyword loop */
                break; 
              }
            }
          return typeResults;
      };
    
    