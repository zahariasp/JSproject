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

//little validation for numbers in a word-key
for(var x = 0; x<len3; x++){
for(var y = 0; y<len1; y++){
	if(word[y] === helper2[x])
		{
			div.innerHTML = "Error! There is some number in the string! Please try again with refreshing the browser!";
		}
}
}

//push word-key in help array without repeating characters
for(var z = 0; z<len1; z++){
	if (helper3.indexOf(word[z]) != -1)
	{}
	else {
		helper3.push(word[z]);
		//div.innerHTML += helper3[z] + " ";
	}
}

//make an array with all charakters ing alfabet without "j"
for(var q = 0; q<len2; q++){
	if (helper3.indexOf(helper[q]) > -1)
	{}
	else {
		helper3.push(helper[q]);
		//div.innerHTML += helper3[q] + " ";
	}
}

//removing spaces from the array
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

//make the array in two-dimensional array
var arr = [], k, i;
for ( i = 0, k = -1; i < len4; i++) {
        if (i % 5 === 0) {
            k++;
            arr[k] = [];
        }

        arr[k].push(helper3[i]);
    }
//return arr;

//showing the two-dimensional array into a div
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

// removing spaces from the sentance
for(var mid=0; mid<len5; mid++)
{
	var it = sentence.indexOf(" ");
	if(it != -1){
		sentence.splice(it , 1);
	}
}
len5 = sentence.length;

//if there are two same characters in a row pushing "x" between them
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

var last = [];

//making the chiper
for(var q=1; q<len6; q+=2){
	//console.log(arr.indexOf(helper4[q]));
	for(var g=0; g<5; g++)
	{
		for(var h=0; h<5; h++)
		{
			if(helper4[q] === arr[g][h])
			{
				var col = h;
				var row = g;
				/*console.log(col);
				console.log(row);
				console.log(helper4[q]);*/
			}
			if(helper4[q-1] === arr[g][h])
				{
					var col1 = h;
					var row1 = g;

					//console.log(col1);
					//console.log(row1);
					//console.log(helper4[q+1]);
					console.log(col1);
					console.log(row1);
					console.log(typeOf(col1));
					console.log(typeOf(row1));
				}
					if(col === col1)
					{
						/*console.log(helper4[q]);
						console.log(helper4[q-1]);
						console.log("v edna kolona sa");*/
						if(col1 === 4)
						{
							//last.push(arr[0][0]);
							//last.push(arr[0][0]);
							//console.log("best");
						}
						else if(col === 4)
						{
							//last.push(arr[0][0]);
							//last.push(arr[0][0]);
							//console.log("best2");
						}
						else
						{
							//last.push(arr[row][col+1]);
							//last.push(arr[row1][col1+1]);
							//console.log("best3");
						}
					}
					if(row === row1)
					{
						/*console.log(helper4[q]);
						console.log(helper4[q-1]);
						console.log("na edin red sa");*/
						if(row1 === 4)
						{
							//last.push(arr[row+1][col]);
							//last.push(arr[0][col1]);
							//console.log("wrost");
						}
						else if(row === 4)
						{
							//last.push(arr[0][col]);
							//last.push(arr[row1+1][col1]);
							//console.log("wrost2");
						}
						else
						{
							//last.push(arr[row+1][col]);
							//last.push(arr[row1+1][col1]);
							//console.log("wrost3");
						}
					}
					if(row !== row1 && col !== col1)
					{
						/*console.log(row1);
						console.log(row);
						console.log(col1);
						console.log(col);
						console.log(helper4[q]);
						console.log(helper4[q+1]);
						console.log("haotichno razpolojeni sa");*/
						//last.push(arr[row1][col]);
						//last.push(arr[row][col1]);
						//console.log("are be");
					}
			//console.log(arr[g][h].indexOf(helper4[q]));
		}
	}
}
var result = document.getElementById('result');
var len7 = last.length;
//console.log(last);
for(var res=0; res<len7; res++)
{
	result.innerHTML += last[res];
}
//console.log(last);
}