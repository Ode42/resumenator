import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import CV from './components/CV';
import GeneratorForms from './components/GeneratorForm';

export default () => {
  return (
    <div className="App">
     <GeneratorForms />
    </div>
  );
}