import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from "react-router"
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

describe('Shop', () => {
    it('matches correct headline', () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );

        const header = screen.getByText('Products');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });

    it('navigates to the home page', () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Home'));

        expect(screen.getByText('Grand Rapids Fly & Tackle Shop')).toBeInTheDocument();
    });

    it('navigates to the cart page', () => {
        render(
            <MemoryRouter initialEntries={["/shop"]}>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Cart'));

        expect(screen.getByText('Check Out')).toBeInTheDocument();
    });
});