function regenerate() {
	let angle = parseInt(document.getElementById("d_angle").value);
	let distance = parseInt(document.getElementById("d_distance").value);
	let steps = parseInt(document.getElementById("steps").value);
	let thickness = parseInt(document.getElementById("thickness").value);
	let wiggly = document.getElementById("wiggly").checked;
	document.getElementById("svg_container").innerHTML = drunkSVG(500, 500, angle, distance, steps, thickness, wiggly);
}