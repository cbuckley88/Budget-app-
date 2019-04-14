// Get current date (MONTH/YEAR) and display at top of page 
var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + yyyy;
document.getElementById("date").innerHTML = today;
document.getElementById("date").style.font = "thin 18px Open Sans";

// Take user input and attatch it to the click button 



var inputInformation =
    document.getElementById('submitButton').addEventListener("click", function() {
        const ammount = document.getElementById('ammount').value;
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
            document.getElementById('mainIncome').innerHTML = income;



            //If input is "Expense"
        } else if (minus.selected) {
            var expenseUl = document.getElementById("expenselist");
            var expenseLi = document.createElement("li");
            expenseLi.appendChild(document.createTextNode(input));
            expenseUl.appendChild(expenseLi);

            var expense = document.getElementById('mainExpense').innerHTML -= input;
            document.getElementById('mainExpense').innerHTML = expense;





        } else {
            console.log('test failed');
        }


        console.log(typeof input);
        console.log(typeof mainIncome);
        console.log(typeof mainExpense);

    });














//  ACTUAL CODE 

// var budgetController = (function() {
//     var x = 23;

//     var add = function(a) {
//         return x + a;
//     }
//     return {
//         publicTest: function(b) {
//             console.log(add(b));
//         }
//     }
// })();