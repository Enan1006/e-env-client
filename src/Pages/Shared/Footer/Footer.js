import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-violet-600 text-base-content">
            <div className='text-white'>

                <p><span className='text-3xl font-bold'>E-ENV Industries Ltd</span>.<br />Providing reliable cars since 1992</p>
            </div>
            <div className='text-white'>
                <span class="footer-title">Company</span>
                <a class="link link-hover">About Us</a>
                <a class="link link-hover">Careers</a>
                <a class="link link-hover">FAQ</a>
                <a class="link link-hover">Contact</a>
            </div>
            <div className='text-white'>
                <span class="footer-title">Services</span>
                <a class="link link-hover">New Cars For Sale</a>
                <a class="link link-hover">Pre-owend Cars</a>
                <a class="link link-hover">Sell My Car</a>
                <a class="link link-hover">Car Valuations</a>
            </div>
            <div className='text-white'>
                <span class="footer-title">Popular Cars By Make</span>
                <a class="link link-hover">Audi</a>
                <a class="link link-hover">BMW</a>
                <a class="link link-hover">Lamborgini</a>
            </div>
        </footer>
    );
};

export default Footer;