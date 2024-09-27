//your JS code here. If required.
let Mndata= new Promise(function(resolve,reject) {
	resolve([1,2,3,4]);
});
Mndata.then((array)=>{
	return new Promise((resolve,reject)=>{
		const store=[];
	for(let x of array){
		if(x%2==0){
			store.push(x);
	
		}
	}
	setTimeout(()=>{
		resolve(store);
	},1000);
	});
})
.then((array)=>{
	return new Promise((resolve,reject)=>{
		const mul=[];
	for(let x of array){
		mul.push(x*2);
	
	}
	setTimeout(()=>{
		resolve(mul);
	},1000);
	});
	
	})

.then((array)=>{
	document.getElementById('output').innerText= array.join(',');
});
