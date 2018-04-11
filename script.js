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
    var person = maker("fahim",21,"doctor");
    alert(person.name + "      " + person.age + "          " + person.occupation + "           ");
}

function addperson() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var occupation = document.getElementById("occupation");
    var output = document.getElementById("outputTxt");
    output.value = "Hi there," + name + "!" }



