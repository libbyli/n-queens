/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// Time complexity of all solver functions is O(n), linear.
window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  var findSolution = function(targetRow, board) {
    if (targetRow === n) {
      return board;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(targetRow, i);
      if(!board.hasAnyRooksConflicts()) {
        return findSolution(targetRow + 1, board);
      }
      board.togglePiece(targetRow, i);
    }
  };
  findSolution(0, solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n:n});
  var solutionCount = 0;
  
  var findSolution = function(targetRow, board) {
    if (targetRow === n) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(targetRow, i);
        if(!board.hasAnyRooksConflicts()) {
          findSolution(targetRow + 1, board);
        }
        board.togglePiece(targetRow, i);
      }
    }
  };

  findSolution(0, solution);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});
  var foundSolution = false;
  var findSolution = function(targetRow, board) {
    if (targetRow === n) {
      foundSolution = true;
      solution = board;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(targetRow, i);
      if (!board.hasAnyQueensConflicts()) {
        findSolution(targetRow + 1, board);
        if (foundSolution) {
          return board;
        }
      }
      board.togglePiece(targetRow, i);
    }
  };
  findSolution(0, solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n:n});
  var findSolution = function(targetRow, board) {
    if (targetRow === n) {
      solutionCount++;
    } else {
      for (var i = 0; i < n; i++) {
        board.togglePiece(targetRow, i);
        if (!board.hasAnyQueensConflicts()) {
          findSolution(targetRow + 1, board);
        }
        board.togglePiece(targetRow, i);
      }
    }
  };

  findSolution(0, solution);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
