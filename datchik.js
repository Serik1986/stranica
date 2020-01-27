let deg;
		function temp(deg) {
		if (deg > 60) {console.log ('Nujno vkluchit vtoroi nasos.Temp:'+deg);
		     }	else if (deg > 30){ console.log ('Nujno vkluchit pervi nasos.Temp:'+deg);
			 }	else{ console.log ( 'temperatura eshe ne podnyalas.Temp:'+deg);
				};
				return deg;

}
temp(30);