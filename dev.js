function displayData(){

    // console.log('This is abdus_shobhan');

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMore(data.meals))
}
function displayMore(data){
const container= document.getElementById('mainContainer');
console.log(data);
for( const user of data){
    console.log(user.strMeal);
    const div= document.createElement('div');
    div.innerHTML=`
    <h1>strMeal: ${data[0].strMeal}</h1>
    <h2>strIngredient5: ${data[0].strIngredient5}</h2>
    <h3>strIngredient6: ${data[0].strIngredient6}</h3>
    <h4>strIngredient1: ${data[0].strIngredient1}</h4>
    <h5>strTags: ${data[0].strTags}</h5>
    <h6>strArea: ${data[0].strArea}</h6>

    <img style="width: 400px; height: 400px;" src="${data[0].strMealThumb}" alt="">
    <p>${data[0].strInstructions.slice(1, 500)} <span>...<code>Show_more</code></span></p>
    
    
    
    `;
    container.appendChild(div);
}



}