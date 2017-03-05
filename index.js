(function(){
	// create a grid of n by n
	const n = 10

	// let GridBlock = function(n){
	// 	draw: function(){
	// 		$('div')
	// 	}
	// }


	// // create a Game object
	// let Game = function(){ }
	// Game.prototype.start = function(){
	// 	// create a gridBlock
	// 	let gridBlock = new GridBlock(n)

	// }

	// let game = new Game()
	// game.start()

	createGrid(n)




	// create an object that represents a cell
		// id based on row and column
		// click function to toggle the cell to be empty or full




	// rules for each cell



	// click function that runs the rules for each cell
	// find(using lodash) and array of cell ids that are full
	// loop through the array and store into an array ( surroundCellArr )all the grids that surrounds each full cell 
		// 	and get each state 
		//  and apply rules and loop through to determine cell shoud be full or not and store the next state


	// loop through surrundGridArr and apply rules for empty cell to determine whether each should be full or not
	// and store the next state



	// loop through array and  surrundGridArr and update the current state with next state, next state becomes null
	//  and display
})()


function createGrid(n) {
	for (var i = 0; i < n; i++) {
		var gridRow= $('<div>',{
			class: 'row',
			'data-id': i,

		})

		for (var j = 0; j < n; j++) {
			let cell = $('<div>', {
				class: 'cell'
			})
			gridRow.append(cell)
		};

		$('#grid').append(gridRow)
	};
}