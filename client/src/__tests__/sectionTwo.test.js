import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionTwo from '../Components/sectionTwo/SectionTwo';
import { useGlobalContext } from '../context/context';



describe('Text rendered correctly', () => {
    test('heading', () => {
        
        render(
                <SectionTwo />
        )
        const heading = screen.getByText("Upload your CV/Resume to make a Cover Letter");
        expect(heading).toBeInTheDocument();

        
    });
});