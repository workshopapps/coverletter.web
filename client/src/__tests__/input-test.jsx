import {render, screen} from '@testing-library/react';
import InputData from '../Components/input/InputData';


describe("Input form", () =>{
    test('renders correctly', () =>{
        <InputData/>
        const header = screen.getByRole('textbox')
        expect(header).toBeInTheDocument()
    })
})

