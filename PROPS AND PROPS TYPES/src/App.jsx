import Student from './Student.jsx'
import './index.css'


function App(props){
    return(
        <div >
            
        <Student name="Ashwin" age={20} istrue={true} />
        <Student name="Gokul" age={50} istrue={true} />
        <Student name="Kishan" age={30} istrue={true} />
        <Student name="Guru" age={60} istrue={true} />
        <Student/>
        </div>
    )
}

export default App