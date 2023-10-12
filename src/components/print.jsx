import React from "react";
import '../styleguide.css';
import '../style.css';


const MyComponent = (props) => {
    const handleDownloadPdf = () => {
        props.handleGeneratePdf()
    };
    return (
        <div className="a">
            <div className="group-wrapper1">
                <div className="group1">
                    <div className="div-wrapper1">
                        <div className="div1">
                            <div className="text-wrapper1" onClick={handleDownloadPdf}>Print</div>
                            <img className="vuesax-linear" src="https://c.animaapp.com/e81kwCLu/img/vuesax-linear-printer-1.svg" alt="Print" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;

