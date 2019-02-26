var promise1 = Promise.resolve(3);
var promise2 = Promise.resolve('bar');
var promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
	console.log(values);
});
