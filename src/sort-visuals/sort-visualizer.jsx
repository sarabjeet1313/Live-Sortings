import React, { Component } from "react";
import "./sort-visualizer.css";
import {
  getMergeSortAnimations,
  getBubbleSortAnimations,
  getQuickSortAnimations,
} from "../sortingAlgorithms/sortingAlgorithms.js";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NUMBER_BARS = 56;
const PRIMARY_COLOR = "black";
const SECONDARY_COLOR = "red";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.updateSpeed_1_5 = this.updateSpeed_1_5.bind(this);
    this.updateSpeed_2 = this.updateSpeed_2.bind(this);
    this.state = {
      array: [],
      ANIMATION_SPEED_IN_MS: 75,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  updateSpeed_1_5 = () => {
    this.setState({
      ANIMATION_SPEED_IN_MS: this.state.ANIMATION_SPEED_IN_MS / 1.5,
    });
  };

  updateSpeed_2 = () => {
    this.setState({
      ANIMATION_SPEED_IN_MS: this.state.ANIMATION_SPEED_IN_MS / 2,
    });
  };

  resetArray() {
    // const array = [15, 1, 6, 10, 29, 52];
    const array = [];
    for (let i = 0; i < NUMBER_BARS; i++) {
      array.push(generateRandomValue(7, 670));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        // console.log(barOneIdx, barTwoIdx);
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          if (barTwoIdx !== -1 && barOneIdx !== -1) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneHeight = `${barOneStyle.height}`;
            const barTwoHeight = `${barTwoStyle.height}`;
            barTwoStyle.height = barOneHeight;
            barOneStyle.height = barTwoHeight;
          }
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        // console.log(barOneIdx, barTwoIdx);
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, barTwoIdx] = animations[i];
          if (barTwoIdx !== -1 && barOneIdx !== -1) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const barOneHeight = `${barOneStyle.height}`;
            const barTwoHeight = `${barTwoStyle.height}`;
            barTwoStyle.height = barOneHeight;
            barOneStyle.height = barTwoHeight;
          }
        }, i * this.state.ANIMATION_SPEED_IN_MS);
      }
    }
  }

  about() {}

  render() {
    const { array } = this.state;

    return (
      <div>
        <Navbar variant="dark" bg="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">Sorting-Visualizer</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link active href="/">
              Generate a new Array
            </Nav.Link>
            <NavDropdown title="Sorting Menu" id="nav-dropdown">
              <NavDropdown.Item onClick={() => this.bubbleSort()}>
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.quickSort()}>
                Quick Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.mergeSort()}>
                Merge Sort
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Speed Up" id="nav-dropdown">
              <NavDropdown.Item onClick={this.updateSpeed_1_5}>
                1.5x
              </NavDropdown.Item>
              <NavDropdown.Item onClick={this.updateSpeed_2}>
                2x
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link active onClick={() => this.about()}>
              About
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="array-container">
          <div className="array-container-bars">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
