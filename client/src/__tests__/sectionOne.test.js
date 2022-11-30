import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionOne from '../Components/sectionOne/SectionOne';


describe('Hero Section', () => {
    test('heading', () => {
        render(<SectionOne />);
        const header = screen.getByText('Create a Job-Landing Cover Letter in seconds');
        expect(header).toBeInTheDocument();

        const paragraph = screen.getByText('100% Automated and Free');
        expect(paragraph).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', 'pic.svg')

        
    });

  
});