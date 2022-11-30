import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTwo from "../Components/sectionTwo/SectionTwo";
import { AppProvider } from "../context/context";

describe("Text rendered correctly", () => {
	test("heading", () => {
		render(
			<AppProvider>
				<SectionTwo />
			</AppProvider>
		);
		const heading = screen.getByText(
			"Upload your CV/Resume to make a Cover Letter"
		);
		expect(heading).toBeInTheDocument();

		const paragraph = screen.getByText("Maximum file size is 5MB, and you can only upload a maximum of 1 file per upload session")
		expect(paragraph).toBeInTheDocument();

	});

	test.skip("File Uploaded", () =>{
		
	})
});
