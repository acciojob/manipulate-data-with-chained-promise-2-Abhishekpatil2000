//your JS code here. If required.
let Mndata= new Promise(function(resolve,reject) {
	resolve([1,2,3,4]);
});
Mndata.then((array)=>{
	const store=[];
	for(let x of array){
		if(x%2!=0){
			array=store.push(x);
		}
	}

	setTimeout(()=>{
		return array;
	},3000);
});
.then((array)=>{
	array.reduce((accumulator,currentvalue)=>{
		array=currentvalue*2;
	})
	setTimeout(()=>{
		return array
	},3000);
})
