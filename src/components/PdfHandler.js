import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import './Projects.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfHandler = ({ fileName }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const clickedRight = () => {
        if (pageNumber !== numPages) {
            setPageNumber(pageNumber + 1);
        } else {
            setPageNumber(1);
        }
    }

    const clickedLeft = () => {
        if (pageNumber !== 1) {
            setPageNumber(pageNumber - 1);
        } else {
            setPageNumber(numPages);
        }
    }

    return (
        <div>
            <center>
                <div>
                    <Document
                        file={fileName}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >

                        <Page pageNumber={pageNumber} />


                    </Document>
                    <button
                        style={{ backgroundColor: '#fff', cursor: 'pointer' }}
                        onClick={() => clickedLeft()}
                    >
                        <i className="angle left icon" />
                    </button>

                    <button
                        style={{ backgroundColor: '#fff', cursor: 'pointer' }}
                        onClick={() => clickedRight()}
                    >
                        <i className="angle right icon" />
                    </button>
                    <p>Page {pageNumber} of {numPages}, <i className="arrow right icon" /><a download={fileName} href={fileName} title="file name">
                        Download Slides Here
                    </a></p>
                </div>
            </center>
        </div >
    )
}

export default PdfHandler;