console.log('Hello');

function calculate(){
    var miles = parseFloat(document.getElementById("miles").value);
    console.log(miles);
    var km=miles*1.609;
    km.toString();
    console.log(km);
    document.querySelector('#resultKm').innerHTML = km;
    var m=miles*1609.34;
    m.toString();
    console.log(m);
    document.querySelector('#resultm').innerHTML = m;
}

function reset(){
    document.getElementById("miles").value="";
    document.querySelector('#resultKm').innerHTML = "";
    document.querySelector('#resultm').innerHTML = "";
}

function tempCalculate(){
    var fahr = parseFloat(document.getElementById("fahr").value);
    var cel=(fahr - 32) * 5/9;
    cel.toString();
    document.querySelector('#deg').innerHTML = cel;
}

function tempReset(){
    document.getElementById("fahr").value = "";
    document.querySelector('#deg').innerHTML = "";
}

function getJoke(){
    var myArray = ['How many programmers does it take to change a light bulb?<br> None, that\'s a hardware problem.',
                     'Whats the object-oriented way to become wealthy?<br> Inheritance', 
                     'Why did the programmer quit his job?<br >Because he didn\'t get arrays.',
                     'What did the Java code say to the C code?<br> You\'ve got no class.',
                     'Why are Assembly programmers always soaking wet?<br> They work below C-level.',
                     'What do cats and programmers have in common?<br> When either one is unusually happy and excited, an appropriate question would be, "did you find a bug?"',
                     'Why did the database administrator leave his wife?<br> She had one-to-many relationships'
                    ];
    var rand = Math.floor(Math.random() * myArray.length);
    console.log(myArray[rand]);
    document.querySelector('#joke').innerHTML = myArray[rand];

}