import './homepage.styles.scss'
import ServiceList from '../service-list/service-list.component'


const Homepage =()=>{
    return(
        <div>
            <h1>Welcome to My AIs</h1>
            <ServiceList/>
        </div>
    )
}

export default Homepage