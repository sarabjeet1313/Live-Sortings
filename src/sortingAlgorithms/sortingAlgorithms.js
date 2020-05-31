// MERGE SORT begins ------------------------------------------------------------------------------
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// MERGE SORT ends ------------------------------------------------------------------------------

// BUBBLE SORT begins ---------------------------------------------------------------------------
export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  // const auxiliaryArray = array.slice();
  bubbleSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function bubbleSortHelper(arr, startIdx, endIdx, animations) {
  for (let i = 0; i <= endIdx; i++) {
    for (let j = 0; j <= endIdx - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        animations.push([j, j + 1]);
      } else {
        animations.push([-1, -1]); // to handle "do not swap" conditions
      }
    }
  }
}

// BUBBLE SORT ends -----------------------------------------------------------------------------

// QUICK SORT begins ----------------------------------------------------------------------------

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function quickSort(arr, low, high, animations) {
  if (low < high) {
    let partitionIndex = quickSortPartition(arr, low, high, animations);

    quickSort(arr, low, partitionIndex - 1, animations); // sorting the array left of partitionIndex
    quickSort(arr, partitionIndex + 1, high, animations); // sorting the array right of partitionIndex
  }
}

function quickSortPartition(arr, low, high, animations) {
  let pivot = arr[high];

  let j = low - 1;

  for (let i = low; i <= high - 1; i++) {
    animations.push([i, high]);
    animations.push([i, high]);
    if (arr[i] < pivot) {
      j++;
      animations.push([i, j]);
      let dummy = arr[j];
      arr[j] = arr[i];
      arr[i] = dummy;
    } else {
      animations.push([-1, -1]);
    }
  }

  animations.push([j + 1, high]);
  animations.push([j + 1, high]);
  let dummy = arr[j + 1];
  arr[j + 1] = arr[high];
  arr[high] = dummy;
  animations.push([j + 1, high]);

  return j + 1;
}

// QUICK SORT ends ------------------------------------------------------------------------------
