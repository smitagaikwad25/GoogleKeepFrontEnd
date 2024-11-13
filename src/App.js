import logo from "./logo.svg";
import "./App.css";
import { SignUp } from "./pages/signUp";
import Use_Effect from "./pages/learing/useStateExaple";
import UseSateArray from "./pages/learing/useStateArray";
import Use_Effect_Check from "./pages/learing/use_Effect";
import ClassE from "./pages/learing/context/classE";
import React from "react";
import SignIn from "./pages/SignIn/signIn";
import MiniDrawer from "./pages/drawer/Drawer";
import NoteOne from "./components/NoteOne/NoteOne";
import NoteTwo from "./components/NoteTwo/NoteTwo";
import DashBord from "./pages/DashBord/DashBord";
import NoteThree from "./components/NoteThree/NoteThree";

export const user = React.createContext();
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <Use_Effect/> */}
      {/* <UseSateArray/> */}
      {/* <Use_Effect_Check/> */}
      {/* // we nee to wrapp chile  component to get the context */}
      {/* <user.Provider value={"smita"}>
        <ClassE />
      </user.Provider> */}

      {/* <SignIn/> */}
      {/* <MiniDrawer/> */}

      {/* <NoteOne/> */}
      {/* <NoteTwo/> */}
        {/* <DashBord/> */}
      {/* <NoteThree/> */}
        <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} ></Route>
          <Route path="/home" Component={DashBord}></Route>
        </Routes>
        </BrowserRouter>
        


    </div>
  );
}

export default App;
