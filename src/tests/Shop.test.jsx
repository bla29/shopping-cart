import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Shop from '../components/Shop';

describe('Shop', () => {
    it('matches correct headline', () => {
        render(<Shop />);

        const header = screen.getByText('Products');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });
});