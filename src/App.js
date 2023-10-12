import './App.css';
import Home from './components/home';
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import MyComponent from './components/print';
import html2canvas from "html2canvas";


function App() {
  const reportTemplateRef = useRef(null);
  const [showdata, setShowData] = useState(false)

  const handleGeneratePdf = async () => {
    setShowData(true);

    const doc = new jsPDF({
      orientation: "portrait",
      format: "a2",
      unit: "pt",
    });

    // Wait for the Home component and its child components to render
    await new Promise((resolve) => {
      setTimeout(resolve, 3000); // make a 2 second delay because graph api takes time 
    });

    // Capture the Home component
    const homeElement = reportTemplateRef.current;
    const canvas = await html2canvas(homeElement);

    // Add the captured image to the PDF
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Save or display the PDF
    doc.save("document.pdf");
  };
  return (
    <>
      <div>
        {!showdata ? <MyComponent handleGeneratePdf={handleGeneratePdf} /> : null}
        <div ref={reportTemplateRef}>
          {showdata ? <Home /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
