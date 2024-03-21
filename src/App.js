import { use } from "i18next";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import i18n from "./i18n";


function App() {


  if(window.localStorage.getItem("i18nextLng") === null){
    window.localStorage.setItem("i18nextLng" , "ar")
  }
 if(window.localStorage.getItem("i18nextLng")=== "ar") {
   window.localStorage.setItem("dir" ,  "rtl")
 }

  

  return (
    <div className="App">
      <Outlet />
    </div>
  );
  
}

export default App;
