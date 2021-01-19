import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';
import CV from './components/CV';
import CVform from './components/CVform';

export default () => {
  return (
    <div className="App">
     <CVform />
    </div>
  );
}