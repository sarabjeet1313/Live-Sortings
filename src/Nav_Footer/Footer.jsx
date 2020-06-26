import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <footer class="page-footer font-small unique-color-dark pt-4">
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="/"> Sorting-Visualizer</a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
