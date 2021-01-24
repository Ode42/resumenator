import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { isPropertySignature } from 'typescript';
import CV from './CV';
import './pdf-renderer.css'

export default (props:any) => {

    if (typeof(props.location.cvData) === undefined ) {
        return (
            <div>
                <h1>Not defined yet</h1>
            </div>
        )
    } else {
        return (
            <div className="pdf-renderer">
            <PDFViewer>
                <CV cvData={props.location.cvData} />
            </PDFViewer>  
        </div> 
        );
         
    }
    
}