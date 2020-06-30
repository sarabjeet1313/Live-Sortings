import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer className="page-footer font-small unique-color-dark pt-4t">
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="/Live-Sortings"> Live-Sortings</a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
