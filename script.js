const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.getElementById("table");

getSumBtn.addEventListener("click", () => {
    // Get all prices dynamically each click
    const allPrice = document.querySelectorAll(".prices"); 
    let sum = 0;

    for (let price of allPrice) {
        sum += parseInt(price.innerText);
    }

    // Check if a total row already exists
    let totalRow = document.querySelector(".totalRow");
    if (!totalRow) {
        // Create total row if it does not exist
        totalRow = document.createElement("tr");
        totalRow.classList.add("totalRow");
        const newData = document.createElement("td");
        newData.colSpan = 2;
        totalRow.appendChild(newData);
        table.appendChild(totalRow);
    }

    // Update the total amount
    totalRow.firstChild.innerText = `Total Amount: ${sum}`;
});


