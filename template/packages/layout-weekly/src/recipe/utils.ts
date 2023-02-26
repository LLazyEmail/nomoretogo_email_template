  // split array into two elements start
  function countImageInRows(arr:any, chunkSize:any) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
    return res;
  }

// or 


// usage
// var matrix = listToMatrix([1, 2, 3, 4, 4, 5, 6, 7, 8, 9], 3);

/**
 * Convert simple array into two-dimensional array (matrix)
 *
 * @param list The array
 * @param width The num of elements per sub-array
 * @return the new matrix
 */
// export const listToMatrix = <T>(list: T[], width: number): T[][] => {
//   const matrix = [];

//   for (let i = 0, k = -1; i < list.length; i++) {
//       if (i % width === 0) {
//           k++;
//           matrix[k] = [];
//       }
//       matrix[k].push(list[i]);
//   }

//   return matrix;
// };
