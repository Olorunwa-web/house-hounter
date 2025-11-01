import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Housing from './components/Housing';
import Villa from './components/Villa';
import Apartment from './components/Apartment';
import { SwiperProvider } from './components/useSwiperController';
import House from './pages/House'

function App() {

  return (
    <>
      <SwiperProvider>
      <BrowserRouter>
       <Routes>
         <Route path='/' element = {<Home/>}>
         <Route index element={<Navigate to="/housing" replace />} />
         <Route path='housing' element = {<Housing/>}>
          <Route index element = {<House/>}/>
          <Route path='villa' element = {<Villa/>}/>
          <Route path='apartment' element = {<Apartment/>}/>
         </Route>
         </Route>
       </Routes>
      </BrowserRouter>
      </SwiperProvider>
    </>
  )
}

export default App
