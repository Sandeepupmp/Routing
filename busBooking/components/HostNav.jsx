import {Link,Outlet} from 'react-router-dom'

export default function HostNav() {
  return (
    <div>

        <Link to='/host/dashbord'>Dashbord</Link><br/>
        <Link to='/host/income'>Income</Link><br/>
        <Link to='/host/review'>Reviews</Link>
        <Outlet/>

    </div>
  )
}