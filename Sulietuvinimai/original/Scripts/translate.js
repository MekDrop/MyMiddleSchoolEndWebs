function FindWordInDatabase(FindWhat){
  var i=0;rasta=0;
  var o=0;k=0;m=0;
  FindWhat= ConvertToStandart(FindWhat);
  str = new String();
  rasta=0;
  for (i=0; i < MaxValue ; i++){
    str=Angl[i];
	str=str.toLowerCase();
	FindWhat=FindWhat.toLowerCase();
	o=str.search(FindWhat);
    if (o==0){
	  k=str.charAt(0);
	  m=FindWhat.charAt(0);
	  if (k==m) o=1;
	}
	if (o > 0) {
	    if (rasta==0) document.write('&nbsp; Rastos ðios reikðmës:<ol>');
	    if (rasta!=0) document.write('<br>');
	   	document.write('<li><b>',Angl[i],'</b> ',Liet[i],'</li>');	   
		o=o+1;
		rasta++;
	}
  }
  if (rasta!=0) document.write('</ol>'); 
  if (rasta==0)	document.write('Deja, paieðka buvo nesëkminga.');
}
