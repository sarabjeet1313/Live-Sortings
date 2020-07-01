import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AboutModal extends Component {
  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Live-Sortings
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              A bar chart based Visualizer that can visualize the sorting
              algorithms for you. It has the capability to visualize the
              following famous sorting algorithms : 1. Bubble Sort 2. Merge Sort
              3. Quick Sort In addition to it, the application has the
              capability of increasing the visualizing speed by 1.5x and 2.0x.
              Please help yourself and understand the sorting algorithms in an
              entertaining way.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AboutModal;
