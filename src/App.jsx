import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Housing from './components/Housing';
import Villa from './components/Villa';
import Apartment from './components/Apartment';
import { SwiperProvider } from './components/useSwiperController';


function App() {

  return (
    <>
      <SwiperProvider>
      <BrowserRouter>
       <Routes>
         <Route path='/' element = {<Home/>}>
         <Route path='/housing' element = {<Housing/>}>
          <Route path='/housing/villa' element = {<Villa/>}/>
          <Route path='/housing/apartment' element = {<Apartment/>}/>
         </Route>
         </Route>
       </Routes>
      </BrowserRouter>
      </SwiperProvider>
    </>
  )
}

export default App
