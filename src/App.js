import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Blog1 from './Comps/Blog1';
import Blog2 from './Comps/Blog2';
import Blog3 from './Comps/Blog3';
import Landing from './Comps/Landing';



function App() {
  return (
    <>
   <NextUIProvider>
    <Router>
      <Routes>
     

          <Route path='/' element={<Landing />} />
          <Route path='/whtisweb3' element={ <Blog1 />} />
          <Route path='/keyboardreview' element={ <Blog2 />} />
          <Route path='/pros&cons' element={ <Blog3 />} />
         
         
         
       
      </Routes>
    </Router>
    </NextUIProvider>
</>

  );
}

export default App;
