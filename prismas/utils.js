var create_cube = function(scene, size, x, y, z)
{
	var cube = BABYLON.Mesh.CreateBox("box", size, scene);
	cube.position = new BABYLON.Vector3(x, y, z);
	return cube;
}

var create_cylinder = function(height, diameter, num_border, scene, updatable)
{
	//Creation of a cylinder
	//(name, height, diameter, tessellation, scene, updatable)
	var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", height, diameter, diameter, num_border, 1, scene);
	return cylinder;
}

var create_ribon = function(scene)
{
	// Creation of a ribbon
	// let's first create many paths along a maths exponential function as an example 
	var exponentialPath = function (p) {
		var path = [];
		for (var i = -10; i < 10; i++) {
			path.push(new BABYLON.Vector3(p, i, Math.sin(p / 3) * 5 * Math.exp(-(i - p) * (i - p) / 60) + i / 3));
		}
		return path;
	};
	// let's populate arrayOfPaths with all these different paths
	var arrayOfPaths = [];
	for (var p = 0; p < 20; p++) {
		arrayOfPaths[p] = exponentialPath(p);
	}

	// (name, array of paths, closeArray, closePath, offset, scene)
	var ribbon = BABYLON.Mesh.CreateRibbon("ribbon", arrayOfPaths, false, false, 0, scene);
}

var camera1 = function(scene, canvas)
{
	var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);
	camera.setTarget(BABYLON.Vector3.Zero());
	camera.attachControl(canvas, false);
	return camera;
}

var camera2 = function(scene, canvas)
{
	var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, BABYLON.Vector3.Zero(), scene);
	camera.attachControl(canvas, true);
	return camera;
}

var randomFloat = function(min, max) {
    var highlightedNumber = Math.random() * (max - min) + min;
    return highlightedNumber;
}

