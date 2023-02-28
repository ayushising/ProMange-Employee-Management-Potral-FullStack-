import { useState } from "react";
import "./pdf.css";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Navbar from "../Navbar/Navbar";
import html2pdf from "html2pdf.js";
import { useLocation } from "react-router-dom";

function Pdf({ pdf }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const val = useLocation().state;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }
  const pdfGenerate = () => {
    const element = document.getElementById("newpdf");
    const opt = {
      margin: 1,
      filename: "Document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2.5 },
      jsPDF: { unit: "in", format: "a3", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div style={{ textAlign: "right", marginTop: "40px" }}>
        <button
          id="downloadjoiningletter"
          className="btn btn-primary"
          style={{
            backgroundColor: "#97144d",
            color: "white",
            borderColor: "#97144d",
          }}
          onClick={pdfGenerate}
        >
          Download as PDF
        </button>
      </div>

      <center>
        <div id="newpdf">
          <Document file={val} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <div>
                <Page
                  // height="500"
                  width="1000"
                  // key={`page_${index + 1}`}
                  pageNumber={index + 1}
                />
                <hr style={{ width: "600px", height: "2px" }}></hr>
              </div>
            ))}
          </Document>
        </div>
      </center>
    </div>
  );
}
export default Pdf;
