import {Route, Routes ,BrowserRouter,} from "react-router-dom"
// import Home from "./views/home/home"
import Detail from "./views/detail/detail"
import Create from "./views/create/create"

import About from "./views/about/about"
import Contact from "./views/contact/contact"
import Gallery from "./views/gallery/gallery"
import LandingPage from "./views/landingPage/landingPage"
import NotFound from "./views/notFound/notFound"
import NavBar from "../src/components/NavBar/NavBar"
// import MainHeader from "./components/NavBar/MainHeader"



function App() {
  return (
    <BrowserRouter>
    
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="home" element={<LandingPage/>}/>
        <Route path="Gallery" element={<Gallery/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="home/:id" element={<Detail />}/>
        <Route path="*" element={<NotFound/>}/>
      {/* <About/>
      <Contact/>
      <Gallery/>
      <LandingPage/>
      <NotFound/> */}
      </Routes>



      


      {/* <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/home/:id" component={Detail}/>
        <Route path="/create" component={Create}/>
      </Switch> */}
      

    
    </BrowserRouter>

  );
}

export default App;
