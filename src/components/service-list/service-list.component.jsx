import './service-list.styles.scss'
import ServiceToggler from '../service-toggler/service-toggler.component'

const ServiceList =()=>{
    return(
        <div>
            <ServiceToggler 
            serviceName='ChatGPT'
            service='ChatGPT _SERVICE_'/>
        </div>
    )
}

export default ServiceList