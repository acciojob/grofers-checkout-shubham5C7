const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const allPrice = document.querySelectorAll(".price");
const table = document.getElementById("table");
const getSum = () => {
let sum =0;
	for(let price of allPrice){
   sum += parseInt(price.innerText);
	}

	const newRow = document.createElement("tr");
	const newData = document.createElement("td");
	
newData.colSpan=2;
newData.innerText=`Total Amount: ${sum}`;
	newRow.appendChild(newData);
	 table.appendChild(newRow)
	
  
};

getSumBtn.addEventListener("click", getSum);

