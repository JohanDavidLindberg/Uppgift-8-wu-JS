//skapar variablar
let ordstav = new Array(); //Rätt ord stavning
let ordsvar = new Array(); //Skriver ut _ och dina bokstäver
let gissningar = new Array();//Den med dina fel gissningar
let ordLista = new Array("hej", "snart", "bajs", "ojsan", "dator", "kapilär", "sund", "förnuft", "kaka", "mus", "hus", "blus", "knasigt", "hejdå", "sedan", "torn", "skola", "matte", "bord", "fönster", "kung", "arena", "satan", "gatan", "prata", "pirat", "skata", "kråka", "bofink", "älg", "afrika"); 
let giltigaKraktärer = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Å","Ä","Ö");


var giltigtOrd = new Boolean(true);
var ord;
var längd; 
let gisskvar = 7;


//sätter random ord genom kalla på randomordoch visar det som behövs
function startvalRand() {
    document.getElementById("gissadebokstäver").style.display = "block";
    document.getElementById("gisskvarspan").style.display = "block";
    document.getElementById("Div").style.display = "grid";
    document.getElementById("startSkärm").style.display = "none";
    document.getElementById("lekordet").style.display = "none";
    document.getElementById("knappord").style.display = "none";
    document.getElementById("svarinput").style.display = "block";
    document.getElementById("svarvis").style.display = "block";
    document.getElementById("svarknapp").style.display = "block";
    randomord();
}
//låter dig välja ord
function startvalVälj() {
    document.getElementById("gissadebokstäver").style.display = "block";
    document.getElementById("gisskvarspan").style.display = "block";
    document.getElementById("Div").style.display = "grid";
    document.getElementById("startSkärm").style.display = "none";
}



//Vinst screen
function vinst() {
    document.body.style.backgroundColor = "lime";
    document.getElementById("svarinput").style.display = "none";
    document.getElementById("svarknapp").style.display = "none";
    document.getElementById("vinstp").style.display = "block";
    document.getElementById("igen").style.display = "block";
}
//Förlust screen
function förlust() {
    document.body.style.backgroundColor = "red";
    document.getElementById("svarinput").style.display = "none";
    document.getElementById("svarknapp").style.display = "none";
    document.getElementById("förlustp").style.display = "block";
    document.getElementById("igen").style.display = "block";
}

//Funktionen som skriver ut de bokstäver som visas i mitten _ eller rättgissade bokstäver
function skrivUtGissadeBokstäver(a) {
    //Sätter svarvis tagge till blank och skriver ut bokstäver du har gissat och _
    document.getElementById("svarvis").innerHTML = " ";
    for (let i = 0; i <= längd - 1; i++) {
        document.getElementById("svarvis").textContent += a[i] + " ";
    }
}


function ordval() {
    ord = document.getElementById("lekordet").value.toUpperCase();
//kollar om ordet är av giltiga karaktärers
    for(let i = 0; i < ord.length; i++){
        //Om giss är bara giltiga karaktärer
        if(!giltigaKraktärer.includes(ord.charAt(i))) {
            giltigtOrd = false;
            break;
        }
    }
    if (giltigtOrd) {
//visar eller gömmer element
        document.getElementById("lekordet").style.display = "none";
        document.getElementById("knappord").style.display = "none";
        document.getElementById("svarinput").style.display = "block";
        document.getElementById("svarvis").style.display = "block";
        document.getElementById("svarknapp").style.display = "block";

//skapar en variabel för längen av ordet för att en del skulkle fungera
        längd = ord.length;
    
//Lägger till bokstävena i arrayen med rätt svar i  
        for (let i = 0; i <= längd - 1; i++) {
            ordstav.push(ord.charAt(i).toUpperCase());
            console.log(ordstav[i]);
        }
//gör den array som visar om du har rätt m.m och hur många bokstäver det är
        for (let i = 0; i <= längd - 1; i++) {
            ordsvar.push("_");
            document.getElementById("svarvis").textContent += ordsvar[i] + " ";
            console.log(ordsvar[i]);
        }
    }
    else {
        alert("Annvänd giltiga karaktärer!");
        document.getElementById("lekordet").value = "";

    }
}
//slumpar framett ord ifrån arraen ovan
function randomord() {
    //gör random ord från arrayen av ord
    let random = Math.floor(Math.random()*(ordLista.length));
    ord = ordLista[random].toUpperCase();
    console.log(ord);

    längd = ord.length;
    //fixar med arrayer så det är i rättstavade arrayen
    for (let i = 0; i <= längd - 1; i++) {
        ordstav.push(ord.charAt(i).toUpperCase());
        console.log(ordstav[i]);
    }
    //Sätter arrayen som visas på skärmen till _
    for (let i = 0; i <= längd - 1; i++) {
        ordsvar.push("_");
        document.getElementById("svarvis").textContent += ordsvar[i] + " ";
        console.log(ordsvar[i]);
    }
}





//gissningen
function gissning() {
    kör = true;
    var giltigtGiss = new Boolean(true);
yId("svarinput").value.toUpperCase();
    console.log(giltigaKraktärer.includes(giss))
//Kollar om gissningen är av giltiga karaktärer
    for(let i = 0; i < giss.length; i++) {
        if(!giltigaKraktärer.includes(giss.charAt(i))) {   
            giltigtGiss = false;
            Kör = false;
            document.getElementById("svarinput").value = null;
            console.log("ashudha")
            break;  
            
        }
        else {//Om det inte är glitg karaktär så breakar den och sätter booleans till flase så att rästen av programet inte körs
            
        }
    }
    //kollar om det är en oggisad bokstav 
    if(gissningar.includes(giss) || ordsvar.includes(giss)) {
        console.log("1")  
        alert("Gissa en ogissad bokstav");
        document.getElementById("svarinput").value = null;
        Kör = false;
          
    }
    //Alertar dig om vad du gjort för fel
    else if (!giltigtGiss) {
        console.log("2")
        Kör = false;
        alert("Gissa giltiga karaktärer");
        
    }
    else if (giss === "") {
        console.log("3")
        alert("Gissa en bokstav");
        Kör = false;
        
    }
    //Om alla felsteg inte detekterar så körs resten av programet
    else if (Kör) {
        document.getElementById("svarinput").value = null;
        if(giss.length > 1) {
            if(giss === ord) {
                vinst();
                ordsvar = ordstav;
                //Skriver ut det sista ordet
                skrivUtGissadeBokstäver(ordsvar);

            } else {
                //skriver ut de bokstäver du redan har gissat
                gisskvar--;
                gissningar.push(giss.toUpperCase());
                
                document.getElementById("gissadebokstäver").innerHTML = "";
                for (let i = 0; i <= gissningar.length - 1; i++) {
                    document.getElementById("gissadebokstäver").textContent += gissningar[i] + " ";
                }

                document.getElementById("gisskvarspan").innerHTML = gisskvar + "/7 Kvar";
            }
        } else {
        //kollar ifall din gissning är rätt eller fel
            for (let i = 0; i <= längd - 1; i++) {
                if (giss.toUpperCase() === ordstav[i].toUpperCase()) {
                    ordsvar[i] = giss.toUpperCase();
                }
            } 
        //Ändrar svar delen om du gissar rätt men uptaderar varje gång
            skrivUtGissadeBokstäver(ordsvar);

        //räknar gissningar kvar
            if (ordstav.includes(giss.toUpperCase())) {
                gisskvar = gisskvar;
                

            } else {
        //Visar hur många gissningar du har kvar och visar använda bokstäver
                gissningar.push(giss.toUpperCase());
                gisskvar--;
                //Sätter den till tom och skriver ut gissade och gisskvar/7
                document.getElementById("gissadebokstäver").innerHTML = "";
                for (let i = 0; i <= gissningar.length - 1; i++) {
                    document.getElementById("gissadebokstäver").textContent += gissningar[i] + " ";
                }
                document.getElementById("gisskvarspan").innerHTML = gisskvar + "/7 Kvar";
            }        
        }

        //Kollar om amn har 0 gissningar kvar viket gör så man förlorar och skrier ut ordet
        if (gisskvar == 0) {
            förlust();
            skrivUtGissadeBokstäver(ordstav);
        }

        //kollar hur många bokstäver som är rätt i gissade bokstäver
        let rättsvar = 0;    
        for(let i = 0; i <= längd - 1; i++) {
            //Varje gång den ser att en bokstv är rätt i arrayen gämfört med rättsvar så går rättsvar upp 1 
            if (ordstav[i] === ordsvar[i]) {
                rättsvar++;
            }
        }

        //kollar om antal rättsvar är samma som längden av ordet ilket gör att man vinner eftersom den ska ha samma saker i sig
        if (rättsvar == längd || giss === ord) {
            vinst();
        }
        giltigtGiss = true;
        kör = true;

        console.log(gissningar)
    console.log(ordsvar)
    
        var canvas = document.getElementById("tavla");
        var ctx = canvas.getContext("2d");

        if(gisskvar == 6) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);

            ctx.stroke();

        }
        if(gisskvar == 5) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);

            ctx.stroke();

        }
        if(gisskvar == 4) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);
            //trä2
            ctx.moveTo(80, 20);
            ctx.lineTo(200, 20); 

            ctx.stroke();

            }
            if(gisskvar == 3) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);
            //trä2
            ctx.moveTo(80, 20);
            ctx.lineTo(200, 20);


            //huvud
            ctx.moveTo(200, 20);
            ctx.lineTo(200, 75);

            ctx.moveTo(200, 60);
            ctx.arc(200, 60, 15, 0, 2 * Math.PI);

            ctx.moveTo(200, 60);
            ctx.lineTo(185, 60);

            ctx.stroke();

        }
        if(gisskvar == 2) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);
            //trä2
            ctx.moveTo(80, 20);
            ctx.lineTo(200, 20);


            //huvud
            ctx.moveTo(200, 20);
            ctx.lineTo(200, 75);

            ctx.moveTo(200, 60);
            ctx.arc(200, 60, 15, 0, 2 * Math.PI);

            ctx.moveTo(200, 60);
            ctx.lineTo(185, 60);

            //kropp
            ctx.moveTo(200, 75);
            ctx.lineTo(200, 100);
            
            ctx.stroke();

        }
        if(gisskvar == 1) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);
            //trä2
            ctx.moveTo(80, 20);
            ctx.lineTo(200, 20);


            //huvud
            ctx.moveTo(200, 20);
            ctx.lineTo(200, 75);

            ctx.moveTo(200, 60);
            ctx.arc(200, 60, 15, 0, 2 * Math.PI);

            ctx.moveTo(200, 60);
            ctx.lineTo(185, 60);

            //kropp
            ctx.moveTo(200, 75);
            ctx.lineTo(200, 100);


            //ben
            ctx.moveTo(200, 100);
            ctx.lineTo(180, 120);

            ctx.moveTo(200, 100);
            ctx.lineTo(220, 120);

            ctx.stroke();

        }
        if(gisskvar == 0) {
            //kulle
            ctx.beginPath();
            ctx.arc(80, 160, 50, 0, 2 * Math.PI);
            //trä1
            ctx.moveTo(80, 110);
            ctx.lineTo(80, 20);
            //trä2
            ctx.moveTo(80, 20);
            ctx.lineTo(200, 20);


            //huvud
            ctx.moveTo(200, 20);
            ctx.lineTo(200, 75);

            ctx.moveTo(200, 60);
            ctx.arc(200, 60, 15, 0, 2 * Math.PI);

            ctx.moveTo(200, 60);
            ctx.lineTo(185, 60);

            //kropp
            ctx.moveTo(200, 75);
            ctx.lineTo(200, 100);


            //ben
            ctx.moveTo(200, 100);
            ctx.lineTo(180, 120);

            ctx.moveTo(200, 100);
            ctx.lineTo(220, 120);

            //armar

            ctx.moveTo(200, 80);
            ctx.lineTo(220, 100);

            ctx.moveTo(200, 80);
            ctx.lineTo(180, 100 );

            ctx.stroke();

        }
    }
}
