import './assets/style.css'
import {Route, Routes} from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import LoginPage from './views/loginPage';
import ForgotPassword from './views/forgotPassword';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './views/contact';
import SignUpPage from './views/signUpPage';
import MovieDetails from './views/movieDetails';
import BookTickets from './views/bookTickets';
import SeatSelection from './views/seatSelection';
import PaymentDetails from './views/paymentDetails';
import AdminLogin from './views/adminLogin';
import AdminDashboard from './views/dashboard/admin/dashboardLayout';
import UserDashboard from './views/userDashboard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Event from './views/event';

function App() {
  return(
    <div>
      {/* <ToastContainer/> */}
      <Navbar/>
      < div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/signUpPage' element={<SignUpPage/>}/>
        <Route path='/movieDetails' element={<MovieDetails/>}/>
        <Route path='/bookTickets' element={<BookTickets/>}/>
        <Route path='/seatSelection' element={<SeatSelection/>}/>
        <Route path='/paymentDetails' element={<PaymentDetails/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/adminDashboard/*' element={<AdminDashboard/>}/>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
      </Routes>
      <ToastContainer position="top-center"/>
      </div>  
      <Footer/>
    </div>
  );
}

export default App;