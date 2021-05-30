var start = performance.now();
const N=1000000;
const arrPrime = [];
const arrBlum = [];
const checkBlum =[];
var check = [];
var count=0;
var i,j;
var n2=N/2;
for ( i=2; i<=(n2); i++) {check[i]=true};
for ( i=2; i<=(n2); i++){
    if (check[i]==true){
        for ( j=2*i; j<=N; j+=i){
            check[j]=false;
        }
    }
}

for ( i=2; i<=n2; i++){
    if (check[i]==true){
        arrPrime.push(i);
    }
}
console.log("arrayPrime : ");
console.log(arrPrime);
console.log("lengthPrime : ");
console.log(arrPrime.length);
for (i=0; i<N; i++) { checkBlum[i]=0; }
for (i=0; i< arrPrime.length-1; i++){
    for (j=i+1; j<arrPrime.length; j++){
        if (arrPrime[i]*arrPrime[j] > N) break;
        arrBlum.push(arrPrime[i]*arrPrime[j]);
        checkBlum[arrPrime[i]*arrPrime[j]] = 1;
    }
}
function quickSort( Data, l , r)
{
	if (l <= r)
	{
		var key = Data[Math.round ((l+r)/2)];
		var i = l;
		var j = r;
		while (i <= j)
		{
			while (Data[i] < key)
				i++;
			while (Data[j] > key)
				j--;

			if (i <= j)
			{
				//swap(Data[i], Data[j]);
                var tg=Data[i];
                Data[i]=Data[j];
                Data[j]=tg;
				i++;
				j--;
			}
		}
		if (l < j)
			quickSort(Data, l, j);
		if (r > i)
			quickSort(Data, i, r);
	}
}


quickSort(arrBlum,0,arrBlum.length-1);
console.log("arrBlum : ");
console.log(arrBlum);
console.log("length Blum : ");
console.log(arrBlum.length);
var result=[];
var count=0;
for (i=0; i<(arrBlum.length-1); i++){
	if (arrBlum[i] *2 > N) break;
    for (j=i+1; j<(arrBlum.length); j++){
        let sumIndex = arrBlum[i] + arrBlum[j];
        if (sumIndex > N) continue;
        if (checkBlum[sumIndex]==1){
            //result.push([arrBlum[i], arrBlum[j]]);
            count++;
        }
    }
}
//console.log("result : ");
//console.log(result);
// console.log("count : ");
// console.log(result.length);
console.log("count : ");
console.log(count);
var end = performance.now();
console.log("Thoi gian chay(ms) : ");
console.log(end-start);