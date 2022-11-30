import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTwo from "../Components/sectionTwo/SectionTwo";
import { AppProvider } from "../context/context";
import user from "@testing-library/user-event";
import Uploading from "../Components/uploading/Uploading";

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

		const paragraph = screen.getByText(
			"Maximum file size is 5MB, and you can only upload a maximum of 1 file per upload session"
		);
		expect(paragraph).toBeInTheDocument();
	});
});

describe("Uploading a PDF file", () => {
	test("Website should upload a file", () => {
		const file = new File(["type"], "type.pdf", { type: "file/pdf" });
		render(
			<AppProvider>
				<SectionTwo />
			</AppProvider>
		);

		const input = screen.getByTestId("element");
		user.upload(input, file);

		expect(input.files[0]).toStrictEqual(file);
		expect(input.files).toHaveLength(1);
	});

	test("Making a POST request", () => {
		
			render(
				
				
			)

			
		
	});
});
