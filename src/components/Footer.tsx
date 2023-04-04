import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex-box">
        <div>
          <p className="copyright">
            Copyright © 2023 | <span className="logo-footer">bazinger</span> |
            All Rights Reserved
          </p>
        </div>
        <div>
          <p className="policy">
            <a href="#" className="link-policy">
              Terms of Service
            </a>{" "}
            |
            <a href="#" className="link-policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
