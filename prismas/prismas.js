// var create_cube = function(scene, size, x, y, z)

var primes_size_x = 10;
var primes_size_y = 10;

var createScene = function(canvas, engine){
	// create a basic BJS Scene object
	var scene = new BABYLON.Scene(engine);
	var camera = camera1(scene, canvas);
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

	// create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation 

	// move the sphere upward 1/2 of its height

	// create a built-in "ground" shape;

	var primes = [];
	var space = 0;
	for (i=0; i< primes_size_x; i++)
	{
		primes[i] = [];
		console.log("create primes[" + i + "]")
		for (j=0; j<primes_size_y; j++)
		{
			console.log("create primes[" + i + "][" + j + "]")
			primes[i][j] = create_cube(scene, 1, i + i*space, randomFloat(0.0, 1.0), j + j*space);
		}
	}


	// return the created scene
	return scene;
}






