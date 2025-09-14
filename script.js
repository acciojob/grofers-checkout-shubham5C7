const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const table = document.getElementById("table");

const getSum = () => {
	const allPrice = document.querySelectorAll(".price");
    let sum = 0;
    for(let price of allPrice){
        sum += parseInt(price.innerText); 
    }
let totalRow = document.querySelector(".totalRow");
 if (!totalRow) {
        const newRow = document.createElement("tr");
        newRow.classList.add("totalRow");

        const newData = document.createElement("td");
        newData.colSpan = 2;
        newRow.appendChild(newData);

        table.appendChild(newRow);
        totalRow = newRow; 
    }

   
    totalRow.firstChild.innerText = `Total Amount: ${sum}`;
};

getSumBtn.addEventListener("click", getSum);

