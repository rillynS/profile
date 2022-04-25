import { Button, Container } from "@mui/material";
import React, { FC } from "react";
import { Cards } from "./components/Cards/Cards";
import "./style/App.css";
const App: FC = () => {
  return (
    <div className="App">
      <Container maxWidth='lg' className='Container'>
      <Cards/>
      
      </Container>
    </div>
  );
};

export default App;
