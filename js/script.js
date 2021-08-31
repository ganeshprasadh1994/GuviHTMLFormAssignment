function pasteItem(){
    // var data=document.getElementsByTagName('input');
    // var table1=document.getElementsByTagName('tbody');
    // for(var i=0;i<data.length;i++)
    // {
    //     var row=document.createElement('tr');
    //     for(var j=0;j<data.length;j++)
    //     {
    //         var input=data[i].innerHTML;
    //         var col=document.createElement('td');
    //         col.appendChild(input);
    //     }  
    //     row.appendChild(col);
    // }
    // table1.appendChild(row);

    var firstname=document.getElementById('fname');
    var lastname=document.getElementById('lname');
    var address=document.getElementById('addr');
    var pincode=document.getElementById('pin');
    var gender=document.getElementsByName('gender');
    var choicefood=document.getElementsByName('choice');
    var state=document.getElementById('state');
    var country=document.getElementsById('country');
    //console.log(firstname,lastname,address,pincode,gender,choicefood,state,country);
    var table1=document.getElementsByTagName('tbody');
    var row = document.createElement('tr');
    var col1=document.createElement('td');
    var col2=document.createElement('td');
    var col3=document.createElement('td');
    var col4=document.createElement('td');
    var col5=document.createElement('td');
    var col6=document.createElement('td');
    var col7=document.createElement('td');
    var col8=document.createElement('td');

    col1.appendChild(firstname);
    col2.appendChild(lastname);
    col3.appendChild(address);
    col4.appendChild(pincode);
    col5.appendChild(gender);
    col6.appendChild(choicefood);
    col7.appendChild(state);
    col8.appendChild(country);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    row.appendChild(col6);
    row.appendChild(col7);
    row.appendChild(col8);

    table1.appendChild(row);
    
    }