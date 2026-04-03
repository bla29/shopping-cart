import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../components/Home';

describe('Home', () => {
    it('matches correct headline', () => {
        render(<Home />);

        const header = screen.getByText('Grand Rapids Fly & Tackle Shop');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });
});