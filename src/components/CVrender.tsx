import { PDFViewer } from '@react-pdf/renderer';
import CV from './CV';

export default (props:any) => (
    <PDFViewer>
        <CV cvData={props.location.cvData} />
    </PDFViewer>
)