function FindInDatabase(FindWhat){
  var i=0;rasta=0;
  var o=0;
  str = new String();
  document.write('<table width="100%" border="0" cellspacing="2" cellpadding="2">');
  FindWhat=FindWhat.toLowerCase();
  rasta=0;
  for (i=0; i < MaxValue ; i++){
    str=Suliet[i];
	str=str.toLowerCase();
	o=str.charAt(0);
//	document.write(Failai[i],' ',Suliet[i],' ',Dydis[i],' ',Koment[i],' ');
    if (o==FindWhat){
		rasta=rasta+1;
		if (rasta==1){
		  document.write('<tr>'); 
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle">'); 
		  document.write('<b><font color="#FFFFFF" size="2">Programos Pavadinimas</font></b>'); 
		  document.write('</td>');
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle"><b><font color="#FFFFFF" size="2">Dydis</font></b></td>');
		  document.write('<td bgcolor="#CC3333" align="center" valign="middle"><b><font color="#FFFFFF" size="2">Komentarai</font></b></td>');
		  document.write('</tr>');
		}
	    document.write('<tr valign="top">'); 
    	document.write('<td width="30%" align="left"><a href="',Failai[i],'" class="black" onMouseOut="MX_Text(nsTXT)" onMouseOver="MX_Text(\'Paspausk èia, kad atsisiøstum ',Suliet[i],' sulietuvinimà.\')">',Suliet[i],'</td>');
	    document.write('<td width="15%" align="center">',Dydis[i],'</td>');
    	document.write('<td width="55%" align="left">',Koment[i],'</td>');
	    document.write('</tr>');
	}	   
  }
  if (rasta==0){
  	    document.write('<tr>'); 
    	document.write('<td width="41%" colspan="3">Ðiuo metu sulietuvimø, skirtø programos prasidedanèioms <b>',FindWhat,'</b> raide nëra.</td>');
	    document.write('</tr>');
  } 
  document.write('</table>');
}
