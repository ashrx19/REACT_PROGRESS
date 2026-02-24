function List(){

const fruits=[{id:1, name:"Apple", calories:45},
            {id:2, name:"Orange" , calories:55},
            {id:3, name:"Mango" , calories:25},
            {id:4, name:"Carrot" , calories:95}];

//fruits.sort((a,b)=> a.name.localeCompare(b.name))
fruits.sort((a,b)=> b.calories-a.calories)

//filtering based on callories

const lowcalfruits = fruits.filter(fruit => fruit.calories <50)

const highcalfruits = fruits.filter(fruit => fruit.calories>=50)



const listitem1 = lowcalfruits.map (lowcalfruit=> <li key={lowcalfruit.id}> {lowcalfruit.name}= {lowcalfruit.calories}</li>)
const listitem2 = highcalfruits.map (highcalfruit=> <li key={highcalfruit.id}> {highcalfruit.name}= {highcalfruit.calories}</li>)

    return(<><h1 className="Heading">Low Calorie :</h1>
                <ul>{listitem1}</ul>
                <h1 className="Heading">High Calorie :</h1>
                <ul> {listitem2}</ul>
            </>);
   
}

export default List