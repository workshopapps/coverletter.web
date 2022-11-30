import { Packer } from "docx";
import { saveAs } from "file-saver";
import myTemplate1 from "../../Components/docx-templates/Template1"

const downloadDOCX = async (data, userData) => {
    const docxTemplate1 = myTemplate1({ data, userData });
    const blob = await Packer.toBlob(docxTemplate1);
    saveAs(blob, "My cover letter.docx");
};

export default downloadDOCX;