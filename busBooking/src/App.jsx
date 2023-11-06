import {BrowserRouter, Routes,Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Header from '../components/Header'
import Buses from '../pages/Buses'
import Layout from '../components/Layout'
import Dashbord from '../pages/host/Dashbord'
import HostNav from '../components/HostNav'
import Income from '../pages/host/Income'
import Review from '../pages/host/Review'
function App() {
  

  return (
    <BrowserRouter>
    
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/buses/:id/:type/:color' element={<Buses/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/host'  element={<HostNav/>}>
        
        <Route path='/host/dashbord' element={<Dashbord/>}/>
        <Route path='/host/income' element={<Income/>}/>
        <Route pate='/host/review' element={<Review/>}/>
        
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
