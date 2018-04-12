function add() {
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 + value2;
    alert(result);
}

function subract() {
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 - value2;
    alert(result);
}

function divide() {
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 / value2;
    alert(result);
}

function multiply() {
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 * value2;
    alert(result);
}


function sqaure() {
    var value1 = parseFloat(document.getElementById('n3').value);
    var results = value1 * value1;
    alert(results)
}

function add() {
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 + value2 + value3;
    alert(result);
}

function subract() {
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 - value2 - value3;
    alert(result);
}

function divide() {
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 / value2 / value3;
    alert(result);
}

function multiply() {
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 * value2 * value3;
    alert(result);
}


function maker(name, age, occupation) {
    var it = {};
    it.name = name;
    it.age = age;
    it.occupation = occupation;
    return it;
}

function myfunction() {
    var person = maker("fahim", 21, "doctor");
    alert(person.name + "      " + person.age + "          " + person.occupation + "           ");
}

// function addperson() {
//     var name = document.getElementById("name");
//     var age = document.getElementById("age");
//     var occupation = document.getElementById("occupation");
//     var output = document.getElementById("outputTxt");
//     outputTxt.value = "Hi there," + name + "!" }

var personOb = {
    name: "Fahim",
    age: "21",
    occcupation: "Doctor"
};

function showPerson() {
    window.alert(personOb.name + "    " + personOb.age + "    " + personOb.occcupation);
}

function updatedPerson() {
    var updatedName = document.getElementById("name").value;
    var updatedage = document.getElementById("age").value;
    var updatedoccupation = document.getElementById("occupation");

    if (updatedname != " " && updatedname != "Null") {
        personOb.name = updatedName;
    }
    if (updatedage != "" && updatedage != "Null") {
        personOb.age = updatedage;
    }
    if (updatedoccupation != " " && updatedoccupation != "Null") {
        personOb.occupation = updatedoccupation;
    }
    window.alert(personOb.name + personOb.age + personOb.occupation);
}


function incrementage() {
    personOb.age = parseInt(personOb.age) + 1;
    alert("Age has been changed to:" + personOb.age);
}

var fahim = "He said \"My name is fahim\"";
window.alert(fahim);

var fahimCaps = "He said \"MY NAME IS FAHIM\"";
window.alert(fahimCaps);

var mylistarray = ['football', 'cricket', 'basketball'];
window.alert(mylistarray);

mylistarray.splice(mylistarray.length - 1, 1);
window.alert(mylistarray);

function con() {
    var str1 = "football";
    var str2 = "star";
    var int1 = 21;
    var result = str1 + " " + str2 + " " + int1;

    window.alert(result);
}

function checkage() {
    if (personOb.age >= 20 && personOb.age <= 40) {
        alert("the person age is between 20 and 40")
    } else {
        alert("the person age is not between 20 and 40")
    }

}

for (var i = 1; i < 100; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz");
    } else if ((i % 3) == 0) {
        console.log("fizz");
    } else if ((i % 5) == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

function bigDivide() {
    {
        var number = 53452;
        var mod = 0;
        while (number > 1) {
            mod = number % 3;
            switch (mod) {
                case 0:
                    number = (number / 3);
                    break;
                case 1:
                    number = (number - 1) / 3;
                    break;
                case 2:
                    number = (number + 1) / 3;
                    break;
            }

            window.alert(number);
            console.log(number);
        }


    }
}








