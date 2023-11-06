import { useState } from "react";
import { useParams } from "react-router-dom";
function Buses(){
   const param = useParams()
   const [bus, setbus] = useState(param)
   
    return(
        <div>
            <h1>
                We have 100 buses avilbale
            </h1>
            <div>
                Bus No: {bus.id} <br/>
                Bus Type: {bus.type} <br/>
                bus color: {bus.color}
            </div>
        </div>
    )
}

export default Buses;