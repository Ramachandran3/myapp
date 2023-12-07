import React, {useState} from "react";
import "./App.css";
// import Home from "./components/Home";

import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Table from "./components/Table/Table";
import Header from "./components/Header/Header";
// import Input from "./components/input/Input";
// import Form from "./components/Form/Form";
// import Result from "./components/Result/Result";
// import Newform from "./components/NewForm/Newform";
// import Product from "./components/Productlist/Product";
// import EmployeeDetails from "./components/Employee/EmployeeDetails";
// import ViewEmpDetails from "./components/Employee/ViewEmpDetails";
import Formm from "./pages/Formm";
import ViewDetails from "./pages/ViewDetails";
import Api from "./components/API/Api";
import SideBar from "./components/Side/SideBar";
import Post from "./components/API/Post";
import NewForm from "./components/NewForm/NewForm";

function App() {
  // const [count, setCount] = useState(0);
  // const updateValue = () => {
  //   const i = count - 1;
  //   i % 5 === 0 ? setCount(i + 10) : setCount(i);
  //   // setCount(value)
  //   if (i % 5 === 0) {
  //     setCount(i + 10);
  //   } else {
  //     setCount(i);
  //   }
  // };
  // const [array, setArray] = useState([
  //   {
  //     name: "ram",
  //     id: 1,
  //     age: 15,
  //     city: "tup",
  //     degree: "B.com CA",
  //   },

  //   {
  //     name: "bala",
  //     id: 2,
  //     city: "cbe",
  //     age: 35,
  //     degree: "B.com CA",
  //   },
  //   {
  //     name: "siva",
  //     city: "chennai",
  //     id: 3,
  //     age: 45,
  //     degree: "B.com CA",
  //   },
  //   {
  //     name: "naveen",
  //     id: 4,
  //     city: "thanjavur",
  //     age: 85,
  //     degree: "B.com CA",
  //   },
  //   {
  //     name: "Dharani",
  //     id: 5,
  //     city: "kerala",
  //     age: 12,
  //     degree: "B.sc",
  //   },
  //   {
  //     name: "vijay",
  //     id: 6,
  //     city: "cbe",
  //     age: 85,
  //     degree: "B.optom",
  //   },
  //   {
  //     name: "thala",
  //     id: 7,
  //     city: "thanjavur",
  //     age: 15,
  //     degree: "B.com CA",
  //   },
  //   {
  //     name: "Arunkumar",
  //     id: 8,
  //     city: "cbe",
  //     age: 23,
  //     degree: "BCA",
  //   },
  //   {
  //     name: "Praveen",
  //     id: 9,
  //     city: "thanjavur",
  //     age: 95,
  //     degree: "m.com CA",
  //   },
  //   {
  //     name: "Praveen",
  //     id: 10,
  //     city: "thanjavur",
  //     age: 20,
  //     degree: "MBA",
  //   },
  // ]);
  // const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="hi">
        <SideBar />
        <Routes>
          <Route path="/formm" element={<Formm />} />
          <Route path="/details" element={<ViewDetails />} />
          <Route path="/api" element={<Api />} />
          <Route path="/comments" element={<Post />} />
          <Route path="/newform" element={<NewForm />} />

          {/* <Route path="/photos" element={<Photos />} /> */}
          {/* <Route path="/table" element={<Table />} />
        <Route path="/input" element={<Input />} /> 
        <Route path="/form" element={<Form />} />
        <Route path="/newform" element={<Newform />} />
        <Route path="/products" element={<Product />} />
        <Route path="/employee" element={<EmployeeDetails />} />
        <Route path="/viewdetails" element={<ViewEmpDetails />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
