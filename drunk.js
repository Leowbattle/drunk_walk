function randomBool() {
	return Math.random() > 0.5;
}

function randomColour() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Generate an SVG for the drunk walk algorithm.
// width = SVG width.
// height = SVG height.
// d_angle = The change in angle with each step.
// d_distance = The distance travelled with each step.
// steps = The number of points in the path.
// thicc = How thick the path is.
// wiggly = If true, use Beziér curves (t path command) instead of lines (l)
function drunkSVG(width, height, d_angle, d_distance, steps, thicc, wiggly = false) {
	console.log(arguments);
	
	// Start in the middle
	let path = `M ${width / 2} ${height / 2} `;

	let currentAngle = 0;

	for (let i = 0; i < steps; i++) {
		currentAngle += randomBool() ? d_angle : -d_angle;
		let dx = Math.cos(currentAngle * Math.PI / 180) * d_distance;
		let dy = Math.sin(currentAngle * Math.PI / 180) * d_distance;
		path += `${wiggly ? "t" : "l"} ${dx} ${dy} `;
	}

	let svg = `<svg width=${width} height=${height} fill=green>
		<path d="${path}" fill="none" stroke=${randomColour()} stroke-width="${thicc}"/>
		<rect width=${width} height=${height} fill="none" stroke="black" stroke-width="5" />
	</svg>`;

	console.log(svg);
	
	return svg;
}