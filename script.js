function add(){
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 + value2;
    alert(result);
}

function subract(){
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 - value2;
    alert(result);
}

function divide(){
    var value1 = parseFloat(document.getElementById('n1').value);
    var value2 = parseFloat(document.getElementById('n2').value);
    var result = value1 / value2;
    alert(result);
}

function multiply(){
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

function add(){
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 + value2 + value3;
    alert(result);
}

function subract(){
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 - value2 - value3;
    alert(result);
}

function divide(){
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 / value2 / value3;
    alert(result);
}

function multiply(){
    var value1 = parseFloat(document.getElementById('n4').value);
    var value2 = parseFloat(document.getElementById('n5').value);
    var value3 = parseFloat(document.getElementById('n6').value);
    var result = value1 * value2 *value3;
    alert(result);
}




function person(){
    var Name = parseFloat(document.getElementById('n7').value);
    var occupation = parseFloat(document.getElementById('n8').value);
    var Age = parseFloat(document.getElementById('n9').value);
    var results =  "Name added to the system:" +person.name + "Age" +person.age + "occupation:" +person.occupation ;
    alert(results);
}
