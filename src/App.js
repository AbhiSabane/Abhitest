import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container, ThemeProvider, CssBaseline, Switch, } from '@mui/material';
import Demo from './Components/Demo';
import React from 'react'
import ReactDOM from 'react-dom'
import Aaaa from './Components/Aaaa';
function App() {
  return (
    <Container maxWidth={"xl"}>
      <br></br>


      <CssBaseline />
      <BrowserRouter>

        <Routes>


          <Route path="/" element={<Demo />} />
          <Route path="/Aaaa" element={< Aaaa />} />




          {/* <Route path="/" element={<UserLogin/>} > </Route>
    <Route path="/Catageory" element={<Catageory />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/ForgotPassword" element={<ForgotPassword />} />
    <Route path="/AddCatagory" element={<AddCatagory />} />
    <Route path="/AddProduct" element={<AddProduct />} />
    <Route path="/EditCategory/:id" element={<EditCategory />} />
    <Route path="/EditProduct/:id" element={<EditProduct />} /> */}
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
    </Switch> */}

        </Routes>

      </BrowserRouter>


    </Container>
  );
}

export default App;
