import React, { Component } from "react";
import resumePdf from "../assets/files/Justin Harr Resume.pdf";
import resumeDoc from "../assets/files/Justin Harr Resume.docx";

import Measure from 'react-measure'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: 1000
      }
    };
  }
  render() {
    const { pageNumber, numPages } = this.state;
    const { width } = this.state

    return (
      <div className="container ">
        <div className="resume-card-wrapper">
          <div className="resume-card-top">
            <a download href={resumePdf} class="btn">Download PDF</a>
            <a download href={resumeDoc}  class="btn">Download DOCX</a>

          </div>

          <Measure
            bounds
            onResize={contentRect => {
             
              const newWidth = contentRect.bounds.width > 1000 ? 1000 :contentRect.bounds.width ;
              this.setState({ width: newWidth });
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef} className="resume-card-bottom">
                <Document file={resumePdf}>
                  <Page width={width} pageNumber={1} />
                </Document>
              </div>
            )}
          </Measure>
        </div>
      </div>
    );
  }
}
export default Resume;
