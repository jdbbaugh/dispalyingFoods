
let barcodeForFetch = ''


let foodFactory = (name, type, ethnic, barcode, jsonResponse) => {
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

    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then(response => response.json())
    .then(productInfo => {
        productInfo.forEach(reponse => {

        })
    })

};








fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food.name, food.type, food.ethnicity, food.barcode)
        
        })
    })

    




    






    

