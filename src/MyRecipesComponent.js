import picter from './done.png';
function MyRecipeComponent({label, image, calories, ingredients, cuisineType, full}) {
    
    return(<div className="box">
        
        <h1>{label}</h1>
        <h4> ({calories.toFixed()} calories)</h4>
        <img src={image} alt="foto"/>
        <h3>Cuisine type: {cuisineType}</h3>

        <ul>
            <h3>Ingredients:</h3>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    
                    <img src={picter} width="20px" alt="foto"/>
                    {ingredient}
                </li>
            ))}
        </ul>

            <a href={full} target="_blank" rel="noreferrer" className='reference'>Click to see the full recipe</a>

               
    </div>)
}
export default MyRecipeComponent;
