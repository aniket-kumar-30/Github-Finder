import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Alert from './Components/Layout/Alert';
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import User from './Components/Layout/User';
import { GithubProvider } from './Context/Github/GithubContext'
import { AlertProvider } from './Context/alert/AlertContext'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<Notfound />} />
                <Route path='/*' element={<Notfound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
