//your JS code here. If required.
let Mndata= new Promise(function(resolve,reject) {
	resolve([1,2,3,4]);
});
Mndata.then((array)=>{
	const store=[];
	for(let x of array){
		if(x%2!=0){
			store.push(x);
	
		}
	}
	setTimeout(()=>{
		
	},1000);
	
	return store;
})
.then((array)=>{
	const mul=[];
	for(let x of array){
		mul.push(x*2);
	
	}
	setTimeout(()=>{
	},2000);
return mul;
	})

})
.then((array)=>{
	document.getElementById('output').innerText= array.join(',');
})
