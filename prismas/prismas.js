// var create_cube = function(scene, size, x, y, z)
// create_cylinder = function(scene, height, diameter, tessellation, num_border, x, y, z)

var primes_size_x = 20;
var primes_size_z = 20;

var createScene = function(canvas, engine){
	// create a basic BJS Scene object
	var scene = new BABYLON.Scene(engine);
	var camera = camera2(scene, canvas);
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);


	var primes = [];
	var space = -0.28;
	for (i=0; i< primes_size_x; i++)
	{
		primes[i] = [];
		console.log("create primes[" + i + "]")
		for (j=0; j<primes_size_z; j++)
		{
			// console.log("create primes[" + i + "][" + j + "]")
			primes[i][j] = create_cylinder(scene, 1, 1, 4, x, y ,z);
			primes[i][j].rotate(BABYLON.Axis.Y, Math.PI / 4, BABYLON.Space.LOCAL);

			// generate position
			var x = i + i*space - primes_size_x/2;
			var y = 0;
			var z = j + j*space - primes_size_z/2;

			// scale random and reposition
			var scale = 1 + Math.random()*2*(i+1)*0.05;
			// console.log("scale: " + scale);
			primes[i][j].scaling.y = scale;
			primes[i][j].position = new BABYLON.Vector3(x, scale/2, z);

			// console.log(primes[i][j]);
		}
	}
	return scene;
}






