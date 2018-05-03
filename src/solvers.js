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

var findSolution = function(size,targetRow,board) {
  if(targetRow === size) {
    return board;
  }
  for(var i = 0; i < size; i++) {
    board.togglePiece(targetRow,i);
    if(!board.hasAnyRooksConflicts()) {
      return findSolution(size,targetRow + 1,board);
    }
    board.togglePiece(targetRow,i);
  }
}

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});
  findSolution(n,0,solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({n:n});
  var solutionCount = 0;
  
  if(findSolution(n,0,solution)){
    solutionCount++;
  }
  
  

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
/*
  var rowI = 0;
  var colI = 0;
  var size = n;
  var rookCounter = 0; 
  var findSolution = function(rowI,colI) {
    var solution = new Board({n:n});
    
    solution.togglePiece(rowI, colI);
    rowI++;
    colI = 0;

    var checkConflict = function(rowI,colI) {
      if(colI === size) {
       colI = 0;
      }
      if(solution.hasColConflictAt(colI)) {
        solution.togglePiece(rowI, colI);
        colI++;                                                  
        checkConflict(rowI,colI);
     }
    }

    while(rowI < size) {
      solution.togglePiece(rowI, colI);
      checkConflict(rowI,colI);
      rowI++;
   }


   for(var i = 0; i < size; i++) {
    if(solution.get(i).includes(1)) {
      rookCounter++;
    }
   }

   if(rookCounter < size) {
    rowI = 0;
    findSolution(rowI,colI);
   }
   if(!(solution.hasAnyRowConflicts() && solution.hasAnyColConflicts()) && rookCounter === n) {
    solutionCount++;
   }
  };

  while(rowI < size) {
    while(colI < size) {
      findSolution(rowI,colI);
      colI++;
    }
    colI = 0;
    rowI++;
  }
*/
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
