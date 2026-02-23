import PropsType from "prop-types";

function Student(props){
    return(

        <div className="styleq">
        <p>Name :{props.name} </p>
        <p>Age :{props.age} </p>
        <p>Student : {props.istrue ? "Yes" : "NO"} </p>
        </div>
    )
}

Student.propsType={
    name : PropsType.string,
    age: PropsType.number,
    istrue: PropsType.bool,

}

Student.defaultvalue={
    name : "Guest",
    age : 0,
    

}
export default Student