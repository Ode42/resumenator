import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';
import CV from './components/CV';
import CVform from './components/CVform';
import CVrenderer from './components/CVrender';

export default () => {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" component={CVform} />
          <Route exact path="/cv" component={CVrenderer} />
        </Switch>
     </Router>
      
     
    </div>
  );
}