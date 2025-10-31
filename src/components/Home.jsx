import Hero from '../components/Hero';
import Nav from '../layout/Nav';
import { Outlet } from 'react-router-dom';
import HouseTour from '../components/HouseTour';
import Review from '../components/Review';
import Information from '../components/Information';
import MailList from '../components/MailList';
import Footer from '../components/Footer';

const Home = () => {

  return (

    <>
      <section className='overflow-hidde bord'>
        <Nav/>
        <Hero/>
        {/* <Housing/> */}
        <Outlet/>
        <HouseTour/>
        <Review />
        <Information/>
        <MailList/>
        <Footer/>
      </section>
    </>
  )
}

export default Home