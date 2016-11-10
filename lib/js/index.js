function onSubClick(){
var word = document.getElementById("word").value;
word = word.split("");
var len1 = word.length;
var sentence = document.getElementById("sentence").value;
var div = document.getElementById("wrapper");
var helper = "abcdefghiklmnopqrstuvwxyz";
helper = helper.split("");
var len2 = helper.length;
var helper2 = "1234567890";
helper2 = helper2.split("");
var len3 = helper2.length;
var helper3 = [];

for(var x = 0; x<len3; x++)
	for(var y = 0; y<len1; y++){
		if(word[y] === helper2[x])
		{
			div.innerHTML = "Error! There is some number in the string! Please try again with refreshing the browser!";
		}
	}
for(var z = 0; z<len1; z++){
	if (helper3.indexOf(word[z]) != -1)
	{}
	else {
		helper3.push(word[z]);
		//div.innerHTML += helper3[z] + " ";
	}
}

for(var q = 0; q<len2; q++){
	if (helper3.indexOf(helper[q]) > -1)
	{}
	else {
		helper3.push(helper[q]);
		//div.innerHTML += helper3[q] + " ";
	}
}
var len4 = helper3.length;
for(var sec=0; sec<len4; sec++)
{
	var ind = helper3.indexOf(" ");
	if(ind != -1){
		helper3.splice(ind , 1);
	}
}

//console.log(helper3);
//console.log(helper);

var arr = [], k, i;
for ( i = 0, k = -1; i < len4; i++) {
        if (i % 5 === 0) {
            k++;
            arr[k] = [];
        }

        arr[k].push(helper3[i]);
    }
//return arr;

for(var m = 0; m<5; m++)
{
	div.innerHTML += "<p>";
	for (var p = 0; p<5; p++)
	{
		div.innerHTML += arr[m][p] + " ";
	}
	div.innerHTML += "</p>"
}

sentence = sentence.split("");
var len5 = sentence.length;

for(var mid=0; mid<len5; mid++)
{
	var it = sentence.indexOf(" ");
	if(it != -1){
		sentence.splice(it , 1);
	}
}
len5 = sentence.length;

var helper4 = [];
for(var d=0; d<len5; d++)
{
		if(sentence[d] === sentence[d-1] && d>0)
		{
			helper4.push("x");
			helper4.push(sentence[d]);
		}
		else{
			helper4.push(sentence[d]);
		}
}
//console.log(helper4);
var len6 = helper4.length;
//console.log(len6);
/*for(var q=1; q<len6; q+=2){
	//console.log(arr.indexOf(helper4[q]));
	for(var g=0; g<5; g++)
	{
		for(var h=0; h<5; h++)
		{
			if(helper4[q-1] === arr[g][h])
			{
				var col = h;
				var row = g;
				if(helper4[q] === arr[g][h])
				{
					var col1 = h;
					var row1 = g;
					if(col === col1)
					{
						console.log("v edna kolona sa");
					}
					if(row === row1){
						console.log("na edin red sa");
					}
					if(col !== col1 && row !== row1)
					{
						console.log("haotichno razpolojeni sa");
					}
				}
			}
			//console.log(arr[g][h].indexOf(helper4[q]));
		}
	}
}*/

for(var q=0; q<len6; q++){
	for(var g=0; g<5; g++)
	{
		for(var h=0; h<5; h++)
		{
			if(helper4[q] === arr[g][h])
			{
				console.log(g);
				console.log(h);
			}
		}
	}
}

//console.log(helper4);
//console.log(arr);

/*for(var x = 0; x<len3; x++)
{
	div.innerHTML += word[x] + " ";
}*/

//console.log(word);
//console.log(sentence);
}