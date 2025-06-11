import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <Link href="/">
            <img src="/nano-neurosciences-logo.png" alt="Nano Neurosciences Logo" />
          </Link>
        </div>
        <div className="footer-contact">
          <p><strong>Zois Syrgiannis, PhD</strong></p>
          <p>Co-Founder & Chief Executive Officer</p>
          <p><a href="mailto:zois@nanoneurosciences.com">zois@nanoneurosciences.com</a></p>
          <p><a href="tel:224-432-7377">224.432.7377</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nano Neurosciences. All rights reserved.</p>
      </div>
      <style jsx>{`
        .footer-container {
          background-color: #fff;
          color: #333;
          padding: 2rem 1.5rem;
          border-top: 1px solid #eaeaea;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .footer-logo img {
          height: 60px;
        }
        .footer-contact p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }
        .footer-contact a {
          color: #333;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact a:hover {
          color: #9d3b6e;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: 1px solid #eaeaea;
          font-size: 0.8rem;
          color: #666;
        }
        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
