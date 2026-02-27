function List2(props) {
    const items = props.items;

    // Create a list of <li> elements for each item
    const itemList = items.map(item => <li key={item.id}>{item.name}={item.calories}</li>);

    return (
        <>
            <h1 className="Heading">List 2</h1>
            <ul>{itemList}</ul>
        </>
    );
}

export default List2;