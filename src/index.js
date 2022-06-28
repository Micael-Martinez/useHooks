import React from "react";
import ReactDOM from 'react-dom/client'
import FetchData from "./components/FetchData"
import FetchDataInServer from "./components/FetchDataInServer";
import LineSeparation from "./components/LineSeparation";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <FetchDataInServer />
        <LineSeparation />

        <FetchData />
    </>

);