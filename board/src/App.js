
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Topic from './components/Topic';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/topic" element={<Topic/>}/>
    
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
