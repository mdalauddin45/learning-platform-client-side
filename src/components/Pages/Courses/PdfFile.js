import { Document } from "@react-pdf/renderer";
import React from "react";
import Courses from "./Courses";

const PdfFile = () => {
  return (
    <Document>
      <Courses></Courses>
    </Document>
  );
};

export default PdfFile;
