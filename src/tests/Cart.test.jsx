import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cart from '../components/Cart';

describe('Cart', () => {
    it('matches correct headline', () => {
        render(<Cart />);

        const header = screen.getByText('Check Out');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });
});