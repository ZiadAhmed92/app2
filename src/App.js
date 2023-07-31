import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './Component/Home'
import First from './Component/First'
import Draw from './Component/Draw'
import Work from './Component/Work'
import It from './Component/It'
import Math from './Component/Math'
import Physics from './Component/Physics'
import English from './Component/English'
import Math2 from './Component/Second/Math2'
import Electric from './Component/Second/Electric'
import Engines from './Component/Second/Engines'
import English2 from './Component/Second/English2'
import Safety from './Component/Second/Safety'
import Hydraulics from './Component/Second/Hydraulics'
import Second from './Component/Second/Second'
import { Route , Routes } from "react-router-dom"
import './App.css'


function App() {
  return (
    <div>
    
      
                  <Routes>  
                    
                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/first" element={<First/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/it" element={<It/>}/>
                    <Route path="/math" element={<Math/>}/>
                    <Route path="/physics" element={<Physics/>}/>
                    <Route path="/draw" element={<Draw/>}/>
                    <Route path="/englis" element={<English/>}/>
                    <Route path="/Second" element={<Second/>}/>
                    <Route path="/Math2" element={<Math2/>}/>
                    <Route path="/Electric" element={<Electric/>}/>
                    <Route path="/Engines" element={<Engines/>}/>
                    <Route path="/English2" element={<English2/>}/>
                    <Route path="/Safety" element={<Safety/>}/>
                    <Route path="/Hydraulics" element={<Hydraulics/>}/>
                    
                  
                  </Routes>
                  
               
   
    </div>
  );
}

export default App;
