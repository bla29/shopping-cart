import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from "react-router"
import Cart from '../components/Cart';
import Home from '../components/Home';
import Shop from '../components/Shop';

describe('Cart', () => {
    it('matches correct headline', () => {
        render(
            <MemoryRouter>
                <Cart />
            </MemoryRouter>
        );

        const header = screen.getByText('Check Out');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });

    it('navigates to the home page', () => {
        render(
            <MemoryRouter initialEntries={["/cart"]}>
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Home'));

        expect(screen.getByText('Grand Rapids Fly & Tackle Shop')).toBeInTheDocument();
    });

    it('navigates to the shop page', () => {
        render(
            <MemoryRouter initialEntries={["/cart"]}>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Shop'));

        expect(screen.getByText('Products')).toBeInTheDocument();
    });
});