function myFunction()
{ 

var temp;
if(temp<15)
{ca=1;
sand=2;
	}
else if(temp>35)
{ca=0;
sand=0;
}
else if(temp>15&& temp<35)
	ca=.67;
sand=1.25;



var fm ;
var fmin;
var k;
var s ; 
var slump;
var ca20; 
var ca10; 
var cahair; 
var wcon ; 
var cemcon ; 
var purpose;
var bvca; 
var wca ;
var fcd ; 
var wfe ;
var sm ; 
var waca ;
var x ; 
var tio;


 //we assume two cases for high rise commercial buildings and apartments and other case for commercial buildings 
var result = document.getElementById("build");
var strUser = result.options[result.selectedIndex].text;
if (strUser == "Highrise")
{
	slump=.120;
	fmin=.38;
	ca20=.55;
	ca10=.40;
	cahair=.05;
	var t = 2.67; 
	var waterc = 0.35 ;
	var cement = 1 ; 
	var weightcc = 3.043 ; 
	var weightccfa = 1.472;
}

if (strUser == "Commercial")
{
	slump=90;
	fmin=36;
	ca20=.50;
	ca10=.45;
	cahair=.05;
	var t = 3 ; 
	var waterc = 0.39 ;
	var cement = 1 ; 
	var weightcc = 1.35 ; 
	var weightccfa = 2.19;
}
if (strUser == "Highrise apartment")
{
	slump=.120;
	fmin=.38;
	ca20=.55;
	ca10=.40;
	cahair=.05;
	var t = 2.52; 
	var waterc = 0.41 ;
	var cement = 1 ; 
	var weightcc = 2.82 ; 
	var weightccfa = 1.652;
}
var ca ; 
var sand;
	if(fmin<30)
		k=1.64;
	else
		k=1.96;
	


   // var a[3][3]={{50,180,165},{100,200,180},{180,215,190}};

    //var b[2][2]={{20,.61},{10,.65}};

  //  var  c[2][3]={{10,.48,.46},{20,.64,.62}};

  

   

   
     //var hack p[2][2] ={{'A','.35'},{'B','.38'}};
	 

    



	
	fm=fmin+(k*s);	//s is for standard deviation and k is the Himsworth constant
	var wc;
	wc=wc*.8;
	cemcon=wc/wcon;
	var bvca;
	wca=1600*bvca;
	wfa=((1000-(wcon*1000))-((wca/2.7)*1000)-((cemcon/3.15)*2000)-((1.21*cemcon/100)*1000));
	sm= (sand/100)*wfa;
	wfa=wfa+sm;
	waca=(ca/100)*wca;
	wca=wca-waca;
	x=sm-waca;
	wc=wc-x;
	tio=0.04*cemcon;
	cemcon=cemcon-tio;
	
	
	document.getElementById("Titanium").innerHTML = t;
	document.getElementById("WaterC").innerHTML = waterc;
	document.getElementById("CementCon").innerHTML = cement;
	document.getElementById("weightca").innerHTML = weightcc;
	document.getElementById("weightfa").innerHTML = weightccfa;
	document.getElementById("hair").innerHTML = cahair;




}
	
	
