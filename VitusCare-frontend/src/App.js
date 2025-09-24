import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Doctors from './components/Pages/Doctors';
import Blog from './components/Pages/Blog';
import Appointments from './components/Pages/Appointments';
import Departments from './components/Pages/Departments';
import DepartmentDetails from './components/Pages/DepartmentDetails';
import BlogDetails from './components/Pages/BlogDetails';
import DoctorDetails from './components/Pages/DoctorDetails';
import PricingPlan from './components/Pages/PricingPlan';
import Gallery from './components/Pages/Gallery';
import Timetable from './components/Pages/Timetable';
import Contact from './components/Pages/Contact';
import ForHospitals from './components/Pages/ForHospitals';
import CenterDetails from './components/Pages/CenterDetails';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';

import { useEffect } from 'react';
import ErrorPage from './components/Pages/ErrorPage';
// import Test from './Test';
import { Toaster } from 'react-hot-toast';
import Centers from './components/Pages/Centers';
import GfrCalculator from './components/Pages/GfrCalculator';
import SetupDialysis from './components/forHospitalItems/dialysisUnit/SetupDialysis';
import OutsourceUnit from './components/forHospitalItems/dialysisUnit/OutsourceUnit';
import ForDoctor from './components/Pages/ForDoctor';
import Feedback from './components/Pages/Feedback';
import Career from './components/Pages/Career';
import ThankYou from './components/Pages/ThankYou';
import Success from './components/Pages/Successmodal';
import TeamConnect from './components/Pages/TeamConnect';


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="centers" element={<Centers />} />
          <Route path="doctors/:doctorId" element={<DoctorDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="departments" element={<Departments />} />
          <Route
            path="departments/:departmentId"
            element={<DepartmentDetails />}
          />
          <Route path='/find-our-centers' element={<Centers />} />
          <Route path="/centers/:id" element={<CenterDetails />} />
          <Route path='/partner-with-us/doctors' element={<ForDoctor />} />
          <Route path='/gfr-calculator' element={<GfrCalculator />} />
          <Route path="pricing-plan" element={<PricingPlan />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/partner-with-us/hospitals' element={<ForHospitals />} />
          <Route path='/partner-with-us/hospitals/new-dialysis-unit' element={<SetupDialysis />} />
          <Route path='/partner-with-us/hospitals/outsource-vituscare' element={<OutsourceUnit />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/career' element={<Career />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/thank-you' element={<ThankYou />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/TeamConnect' element={<TeamConnect />} />
         
        </Route>

        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 3000, 
          style: {
            background: '#2C2F76',
            color: '#fff',
          },

          loading: {
            duration: Infinity,
          },

          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: '#2C2F76',
            },
          },
        }}
      />

    </>
  );
}

export default App;
