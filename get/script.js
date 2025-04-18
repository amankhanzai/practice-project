 function calcultaion(){
    event.preventDefault;
 let Computer = parseInt(document.getElementById('Computer').value);
 let English = parseInt(document.getElementById('English').value);
 let Science = parseInt(document.getElementById('Science').value);
 let Math = parseInt(document.getElementById('Math').value);
 let Physics = parseInt(document.getElementById('Physics').value);

if(Computer > 100 || English >100 || Science > 100 || Math > 100 || Physics > 100 ){
    alert("Marks are not valid")
}else{
    let obtain = Computer + English + Science + Math + Physics;
    let percentage = obtain / 500 * 100;

    document.getElementById('obtain').innerHTML = obtain;
    document.getElementById('percentage').innerHTML = percentage + "%";

    if(percentage >= 80){
        document.getElementById('grade').innerHTML = "A+";
    }else if(percentage >= 70){
        document.getElementById('grade').innerHTML = "A";
    }else if(percentage >= 60){
        document.getElementById('grade').innerHTML = "B";
    }else if(percentage >= 50){
        document.getElementById('grade').innerHTML = "C";
    }else if(percentage >= 40){
        document.getElementById('grade').innerHTML = "D";
    }else{
        document.getElementById('grade').innerHTML = "<Span style='color:red'>Fail</span>";
    }

    if(Computer < 33 || English < 33 || Science < 33 || Math < 33 || Physics < 33){
        document.getElementById('remarks').innerHTML = "<span style='color:red'>You are fail</span>";
    }else{
        document.getElementById('remarks').innerHTML = "<span style='color:green'>You are pass</span>";
    }
    return false;
}
}
 

