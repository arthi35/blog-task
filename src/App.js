import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EmployeeList from './Components/EmployeeList';
import CreateEmployee from './Components/CreatePost';
import UpdateEmployee from './Components/UpdateEmployee';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>

      <Routes>
        <Route exact path="/" element={<EmployeeList/>}></Route>
        <Route path="/posts/create" element={<CreateEmployee/>}></Route>
        <Route path="/posts/:postID/update" element={ <UpdateEmployee/>}></Route>
      </Routes>
      <Footer/>
      {/* <EmployeeList/> */}
      {/* <CreateEmployee/> */}
      {/* <UpdateEmployee/> */}
    </div>
    </BrowserRouter>
    // <div className="App">
    //   <Header/>
    //   <Footer/>
    //   <EmployeeList/>
    //   <CreateEmployee/>
    //   <UpdateEmployee/>
    // </div>
  );
}

export default App;
