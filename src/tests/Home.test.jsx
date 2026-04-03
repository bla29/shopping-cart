import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route } from "react-router"
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';

describe('Home', () => {
    it('matches correct headline', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        const header = screen.getByText('Grand Rapids Fly & Tackle Shop');

        // check if App components show correct headline
        expect(header).toBeInTheDocument();
    });

    it('navigates to the shop page', () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Shop'));

        expect(screen.getByText('Products')).toBeInTheDocument();
    });

    it('navigates to the cart page', () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Cart'));

        expect(screen.getByText('Check Out')).toBeInTheDocument();
    });
});