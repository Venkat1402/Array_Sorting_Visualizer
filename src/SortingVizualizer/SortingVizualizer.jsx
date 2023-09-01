import React from "react";
import { useState, useEffect } from "react";
import MergeSortingAnimations from "../Algorithms/MergeSort";
import BubbleSortAnimations from "../Algorithms/BubbleSort";
import SelectionSortAnimations from "../Algorithms/SelectionSort";
import InsertionSortAnimations from "../Algorithms/InsertionSort";
import QuickSortAnimations from "../Algorithms/QuickSort";
import "./SortingVizualizer.css";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SortingVizualizer = () => {
  //Change this value for the speed of animations.
  const [ANIMATION_SPEED_MS, SET_ANIMATION_SPEED_MS] = useState(10);

  //CHange this value for no of bars in the array.
  const [NUMBER_OF_ARRAY_BARS, SET_NUMBER_OF_ARRAY_BARS] = useState(190);

  //This is the main color of array bars.
  const PRIMARY_COLOR = "lightskyblue";

  //This is the color of array bars that are being compared throughout the animations
  const SECONDARY_COLOR = "red";

  const [array, setArray] = useState([]);

  const [arrWidth, setArrWidth] = useState(3);

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // returns random number between the given interval
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const newArray = [];

    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(5, 375));
    }

    newArray.push(375); // add one maximum number so that the height of the array box will be constant

    setArray(newArray);
  }

  useEffect(() => {
    resetArray();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function MergeSort() {
    const animations = MergeSortingAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function BubbleSort() {
    const animations = BubbleSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function SelectionSort() {
    const animations = SelectionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function InsertionSort() {
    const animations = InsertionSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function QuickSort() {
    const animations = QuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIndex, barTwoIndex, newHeight1, newHeight2] =
            animations[i];
          const barOneStyle = arrayBars[barOneIndex].style;
          const barTwoStyle = arrayBars[barTwoIndex].style;
          barOneStyle.height = `${newHeight1}px`;
          barTwoStyle.height = `${newHeight2}px`;
        }, i * 0.5 * ANIMATION_SPEED_MS);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  function setRange(value) {
    setArrWidth(3 * Math.floor(230 / value));
    SET_NUMBER_OF_ARRAY_BARS(value);
    resetArray();
  }

  function setSpeed(value) {
    SET_ANIMATION_SPEED_MS(value);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="header">
        <div className="title">Sorting Vizualizer</div>
        {/* <div className="increment-bars-container"> */}
        <p className="navText">
          ( Please set size of array and sorting speed before sorting the array
          )
        </p>
        <div className="increment-bar-array">
          <label style={{ color: "white" }}>Size of Array</label>
          <br />
          <input
            type="range"
            name="size-of-array"
            min="50"
            max="190"
            className="range-display"
            value={NUMBER_OF_ARRAY_BARS}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
        <div className="increment-bar-speed">
          <label style={{ color: "white" }}>Sorting Speed</label>
          <br />
          <input
            type="range"
            name="sorting-speed"
            min="1"
            max="10"
            className="speed-display"
            value={ANIMATION_SPEED_MS}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>
        {/* </div> */}
      </div>
      <div className="array-container">
        <div className="array">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${arrWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <button className="generate-array-button" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="sort-button" onClick={BubbleSort}>
          Bubble Sort
        </button>
        <button className="sort-button" onClick={SelectionSort}>
          Selection Sort
        </button>
        <button className="sort-button" onClick={InsertionSort}>
          Insertion Sort
        </button>
        <button className="sort-button" onClick={MergeSort}>
          Merge Sort
        </button>
        <button className="sort-button" onClick={QuickSort}>
          Quick Sort Sort
        </button>
      </div>
    </>
  );
};

export default SortingVizualizer;
