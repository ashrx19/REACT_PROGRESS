function List(){

const fruits=[{id:1, name:"Apple", calories:45},
            {id:2, name:"Orange" , calories:55},
            {id:3, name:"Mango" , calories:25},
            {id:4, name:"Carrot" , calories:95}];

//fruits.sort((a,b)=> a.name.localeCompare(b.name))
fruits.sort((a,b)=> b.calories-a.calories)
const listitem = fruits.map (fruit=> <li key={fruit.id}> {fruit.name}= {fruit.calories}</li>)

    return(<ul>{listitem}</ul>);
}

export default List