function stringChop(str, size) {
	if (typeof str !== "string" || !Number.isInteger(size) || size <= 0) {
    return [];
  }
  let chunks =[];

	for(let i=0;i<str.length;i+=size){
		chunks.push(str.slice(i,i+size));
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."),10);
alert(stringChop(str, size));
