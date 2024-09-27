//your JS code here. If required.
document.getElementById('output')
let Mndata= new Promise(function(resolve,reject) {
	resolve([1,2,3,4]);
});
Mndata.then((array)=>{
	const store=[];
	for(let x of array){
		if(x%2!=0){
			store=store.push(x);
	
		}
		setTimeout(()=>{
		
	},1000);
		
	}
	
	return store;
});
.then((array)=>{
	const mul=[];
	for(let x of array){
		mul=mul.push(array[x]*2);
	}
	})
	setTimeout(()=>{
		return array
	},2000);
})
