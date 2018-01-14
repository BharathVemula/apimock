const fs = require('fs');
const csvtojson = require('csvtojson');


let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });

  return p;
}


export let loop = async (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;

	// Loop for caluclate the sum
	for (let  i = 0; i < numbers.length; i += 1) {
		const n = numbers[i];
		console.log(`Trying to add ${n}`);
		sum = await adder(sum, n); // wait for the sum to be executed..
		console.log(`Current sum is ${sum}`);
	}

  return sum;
};

// Handler Function that recevies a csv file and converts it a Json Array.
export let csv2JsonConverter =  async (request, h) => {
	var data = request.payload;
	if (data.file) {
			var name = data.file.hapi.filename;
			var path = __dirname + "/uploads/" + name;
			var file = fs.createWriteStream(path);

			file.on('error', function (err) {
					console.error(`Error Uploading the File to the server`);
			});

			data.file.pipe(file);
			const csv = await data.file.on('end', function (err) {
					var ret = {
							filename: data.file.hapi.filename,
							headers: data.file.hapi.headers
					}
			});

			let dataJson = [];
			const Converter = csvtojson.Converter;
			const cnvrtrObj = new Converter({});

			return cnvrtrObj.fromFile(csv._readableState.pipes.path, (err,result) => {
					 if(err){
							 console.error("Error converting the CSV to JSON: ");
							 console.error(err);
					 }
					 return result;
			 });
			//  console.error(json);
			//  return json;
	} else {
		return  'Try uploading a proper file';
	}
};
