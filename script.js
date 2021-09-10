const player = document.querySelector('#player');

function movePlayer(direction) {
	let yPosition = parseInt(getComputedStyle(player).top.slice(0, -2));
	let xPosition = parseInt(getComputedStyle(player).left.slice(0, -2));

	switch (direction) {
		case 'up':
			player.style.top = `${yPosition - 10}px`;
			break;
		case 'down':
			player.style.top = `${yPosition + 10}px`;
			break;
		case 'left':
			player.style.left = `${xPosition - 10}px`;
			break;
		case 'right':
			player.style.left = `${xPosition + 10}px`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('keyup', e => {
		e.preventDefault();

		if (e.key === 'w' || e.key === 'ArrowUp') {
			movePlayer('up');
		}
		
		if (e.key === 'a' || e.key === 'ArrowLeft') {
			movePlayer('left');
		}
	
		if (e.key === 's' || e.key === 'ArrowDown') {
			movePlayer('down');
		}
	
		if (e.key === 'd' || e.key === 'ArrowRight') {
			movePlayer('right');
		}
	});
})