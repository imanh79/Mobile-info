import React, { useEffect } from "react";

import Home from "./component/Home/Home";
import Index from "./component/layout";
import { Route, Routes } from "react-router-dom";
import Phonepage from "./component/phones/phonepage";
import Brandpage from "./component/Brand/Brandpage";
import Scrollbar from "./component/scroll/scrollbar";
function App() {
 
  return (
    <>
      <Index>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Phones/:slug' element={<Phonepage />} />
          <Route path='/Brands/:slug' element={<Brandpage />} />
        </Routes>
      </Index>
      <Scrollbar />
    </>
  );
}

export default App;
