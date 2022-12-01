import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppProvider } from "../context/context";
import InputData from "../Components/input/InputData";
import { BrowserRouter } from "react-router-dom";


describe("Input Data", () => {
	test("Rendered Correctly", () => {
		render(
			<AppProvider>
				<BrowserRouter>
					<InputData />
				</BrowserRouter>
			</AppProvider>
		);

		const fullName = screen.getByRole("textbox", {
			name: "Full Name",
		});
		expect(fullName).toBeInTheDocument();

		const companyName = screen.getByRole("textbox", {
			name: "Company's Name",
		});
		expect(companyName).toBeInTheDocument();

		const companyAddress = screen.getByRole("textbox", {
			name: "Company's Address",
		});
		expect(companyAddress).toBeInTheDocument();

		const city = screen.getByRole("textbox", {
			name: "City",
		});
		expect(city).toBeInTheDocument();

		const country = screen.getByRole("combobox");
		expect(country).toBeInTheDocument();

		const date = screen.getByRole("textbox", {
			name: "Date of Application",
		});
		expect(date).toBeInTheDocument();

		const email = screen.getByRole("textbox", {
			name: "Email Address",
		});
		expect(email).toBeInTheDocument();

		const location = screen.getByRole("textbox", {
			name: "Your Address(Preferred Location)",
		});
		expect(location).toBeInTheDocument();

		const role = screen.getByRole("textbox", {
			name: "What Role Are You Applying For?",
		});
		expect(role).toBeInTheDocument();

		const years = screen.getByRole("textbox", {
			name: "Years of Experience",
		});
		expect(years).toBeInTheDocument();

		const rec_name = screen.getByRole("textbox", {
			name: "Recipient's Name",
		});
		expect(rec_name).toBeInTheDocument();

		const rec_dept = screen.getByRole("textbox", {
			name: "Recipient's Department(Optional)",
		});
		expect(rec_dept).toBeInTheDocument();
	});
});
