



let foodFactory = (name, type, ethnic, barcode) => {
    const section = document.querySelector('.foodList')
    const article1 = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    section.appendChild(article1);
    article1.appendChild(h2);
    h2.textContent = name
    article1.appendChild(p);
    p.textContent = type
    article1.appendChild(p2);
    p2.textContent = ethnic

    //begin listMaker function
let listMaker = (ingredient) => {
    
    const p3 = document.createElement('p');
    article1.appendChild(p3);
    p3.textContent = ingredient;
    
    
};
//end of listMaker

    //fetch from openFoods
fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
.then(foods => foods.json())
.then(parsedFoods => {
    for (var property1 in parsedFoods) {
        let ingredients = parsedFoods[property1].ingredients;
        console.log(ingredients)
        if (ingredients !== undefined) {
        ingredients.forEach(item => {
            const theStuff = listMaker(item.text);
        })
        }
      } 
});
//End of Fetch

   

    
};
//end of foodFactory


//fetch list from local json
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food.name, food.type, food.ethnicity, food.barcode)
        
        })
    });
    //end of fetch from local json
    











    


    



    

