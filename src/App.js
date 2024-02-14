import { Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./component/News";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/"  key="general" element={ <News country="in" category="general"/> } />
          <Route path="/general" key="general" element={ <News country="in" category="general"/> } />
          <Route path="/business" key="business" element={ <News country="in" category="business"/> } />
          <Route path="/entertainment" key="entertainment" element={ <News country="in" category="entertainment"/> } />
          <Route path="/health" key="health" element={ <News country="in" category="health"/> } />
          <Route path="/science"  key="science" element={ <News country="in" category="science"/> } />
          <Route path="/sports" key="sports" element={ <News country="in" category="sports"/> } />
          <Route path="/technology" key="technology" element={ <News country="in" category="technology"/> } />
        </Routes>
      </>
    )
  }
}
