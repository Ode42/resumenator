import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import CV from './CV';
import './pdf-renderer.css'

export default (props:any) => (
    <div className="pdf-renderer">
    <PDFDownloadLink document={<CV />} fileName="resume.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download resume here')}
    </PDFDownloadLink>
    <PDFViewer>
        <CV cvData={props.location.cvData} />
    </PDFViewer>  
    </div>  
)