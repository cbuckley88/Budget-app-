// var income = document.getElementById('mainIncome').innerHTML;
// var expense = document.getElementById('mainExpense').innerHTML;

// console.log(income);
// console.log(expense);



// Get current date (MONTH/YEAR)
var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + yyyy;





//Display current Date at top of page

document.getElementById("date").innerHTML = today;
document.getElementById("date").style.font = "thin 18px Open Sans";






// var x = document.getElementById("plusOrMinus").options.length;
// console.log(x);



// Take user input and attatch it to the click button 

var inputInformation =
    document.getElementById('submitButton').addEventListener("click", function() {
        var userInput = document.getElementById('mainInput').value;
        var input = parseInt(userInput);

        // variables for the plus/minus selector
        var plus = document.getElementById('plus');
        var minus = document.getElementById('minus');




        //If input is "Income"
        if (plus.selected) {
            var incomeUl = document.getElementById("incomeList");
            var incomeLi = document.createElement("li");
            incomeLi.appendChild(document.createTextNode(input));
            incomeUl.appendChild(incomeLi);
            var income = document.getElementById('mainIncome').innerHTML += input;
            var totalMoney = document.getElementById('totalMoney');
            console.log(income);
            document.getElementById('mainIncome').innerHTML = income;
            totalMoney += input;

            //If input is "Expense"
        } else if (minus.selected) {
            var expenseUl = document.getElementById("expenselist");
            var expenseLi = document.createElement("li");
            expenseLi.appendChild(document.createTextNode(input));
            expenseUl.appendChild(expenseLi);
            var expense = document.getElementById('mainExpense').innerHTML -= input;
            console.log(expense);
            document.getElementById('mainExpense').innerHTML = expense;





        } else {
            console.log('test failed');
        }
    });
















//  ACTUAL CODE 

var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return x + a;
    }
    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();