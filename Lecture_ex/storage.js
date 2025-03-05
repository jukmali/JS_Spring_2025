if(localStorage.getItem('nameList') === null){
    var names=[];
    localStorage.setItem('nameList', JSON.stringify(names));
}

function saveData(){
    var names = JSON.parse(localStorage.getItem('nameList'));
    var fistName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Creat JSON object
    var fullName = {
        fname: fistName, 
        lname: lastName
    };
    // save object in the array
    names.push(fullName);
    // save array in the local storage
    localStorage.setItem('nameList', JSON.stringify(names));
    showData();
}

function showData(){
    var jsonNames = JSON.parse(localStorage.getItem('nameList'));

    var table = "<table border='1'>";
    table += "<tr><th>Nro</th><th>First Name</th><th>Last Name</th></tr>";

    for(var i=0; i<jsonNames.length; i++){
        table += "<tr><td>"+(i)+"</td><td>"+jsonNames[i].fname+"</td><td>"+jsonNames[i].lname+"</td></tr>";
    }

    table += "</table>";
    document.getElementById('storage_place').innerHTML = table;
}

function deleteData(){
    var jsonNames = JSON.parse(localStorage.getItem('nameList'));
    var delNum = document.getElementById('delNumber').value;

    jsonNames.splice(delNum, 1);
    localStorage.setItem('nameList', JSON.stringify(jsonNames));
    showData();
}
