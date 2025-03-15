import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 fw-bold mb-3">Your Brand</h3>
            <p className="text-secondary mb-3">
              Premium quality products for everyone. We believe in quality, affordability, and exceptional customer service.
            </p>
            <div className="d-flex gap-3">
              <a href="https://github.com/yourusername" className="text-secondary hover-text-white">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="https://instagram.com/yourusername" className="text-secondary hover-text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="text-secondary hover-text-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div className="col-md-3 mb-4">
            <h3 className="h6 fw-bold mb-3">Shop</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">All Products</p></li>
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">New Arrivals</p></li>
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">Best Sellers</p></li>
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">Discounts</p></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="col-md-3 mb-4">
            <h3 className="h6 fw-bold mb-3">Customer Service</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">Contact Us</p></li>
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">FAQ</p></li>
              <li className="mb-2"><p className="text-decoration-none text-secondary hover-text-white">Shipping & Returns</p></li>
              <li className="mb-2"><a href="/components/OrderPage" className="text-decoration-none text-secondary hover-text-white">Track Order</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h3 className="h6 fw-bold mb-3">Contact</h3>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-envelope text-secondary me-2"></i>
                <span className="text-secondary">navaskm228@gmail.com</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone text-secondary me-2"></i>
                <span className="text-secondary">+91 889 123 6670</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-top border-secondary-subtle mt-4 pt-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="text-secondary small mb-3 mb-md-0">
              © {new Date().getFullYear()} Your Brand. All rights reserved.
            </p>
            <div className="d-flex gap-3">
              <p className="text-secondary text-decoration-none small">Privacy Policy</p>
              <p className="text-secondary text-decoration-none small">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;