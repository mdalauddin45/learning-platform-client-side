import React from "react";
import { Document } from "react-pdf";
import Courses from "./Courses";

const PdfFile = () => {
  return (
    <Document>
      <Courses></Courses>
    </Document>
  );
};

export default PdfFile;
