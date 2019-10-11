function getDenominations() {
	var amount = document.getElementById("amount").value;
	if (amount !== null && amount !== undefined && amount !== '' && Number(amount)) {
		var denomination = "";
		var fiftyCount = 0, tenCount = 0, fiveCount = 0, twoCount = 0, oneCount = 0;

		var value = Number(amount);
		while (value > 0) {
			if (value >= 50) {
				value = value-50;
				fiftyCount++;
			} else if (value >= 10) {
				value = value-10;
				tenCount++;
			} else if (value >= 5) {
				value = value-5;
				fiveCount++;
			} else if (value >= 2) {
				value = value-2;
				twoCount++;
			} else if (value >= 1) {
				value = value-1;
				oneCount++;
			}
		}

		if (fiftyCount > 0) {
			denomination += "50X" + fiftyCount;
		}
		if (tenCount > 0) {
			denomination += "; 10X" + tenCount;
		}
		if (fiveCount > 0) {
			denomination += "; 5X" + fiveCount;
		}
		if (twoCount > 0) {
			denomination += "; 2X" + twoCount;
		}
		if (oneCount > 0) {
			denomination += "; 1X" + oneCount;
		}
		document.getElementById("result").innerHTML = denomination;
		document.getElementById("results-tab").style.display = "block";
	} else {
		alert('Please enter the correct amount');
	}
}