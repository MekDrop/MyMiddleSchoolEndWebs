function FindWordInDatabase(FindWhat){
  var i=0;rasta=0;
  var o=0;k=0;m=0;
  FindWhat= ConvertToStandart(FindWhat);
  str = new String();
    for (i=0; i < MaxValue ; i++){
    str=Koment[i]+Suliet[i] ;
	str=str.toLowerCase();
	FindWhat=FindWhat.toLowerCase();
	o=str.search(FindWhat);
//	document.write(Failai[i],' ',Suliet[i],' ',Dydis[i],' ',Koment[i],' ');
//    document.write(Suliet[i],' ',o);
    if (o==0){
	  k=str.charAt(0);
	  m=FindWhat.charAt(0);
	  if (k==m) o=1;
	}
    if (FindWhat=="all:") o=15;
    if (o>0) rasta=rasta+1;
	}
	document.write('&nbsp; <font color="#003366">Paieðkos Rezultatai</font> ');
	if (rasta==0) document.write('</b></font></p><p>&nbsp; Jokiø áraðø duomenø bazëje nebuvo rasta.<font face="Georgia, Times New Roman, Times, serif"><b>'); else     document.write('</b></font></p><p>&nbsp; Buvo rasta ', rasta,' áraðø duomenø bazëje.<br>&nbsp; Jeigu norite kà nors atsiøsti, tiesiog paspauskite ant to sulietuvinimo pavadinimo, kurá jûs norite atsisiøsti.<font face="Georgia, Times New Roman, Times, serif"><b>');
  for (i=0; i < MaxValue ; i++){
    str=Koment[i]+Suliet[i];
	str=str.toLowerCase();
	FindWhat=FindWhat.toLowerCase();
	o=str.search(FindWhat);
//	document.write(Failai[i],' ',Suliet[i],' ',Dydis[i],' ',Koment[i],' ');
//    document.write(Suliet[i],' ',o);
    if (o==0){
	  k=str.charAt(0);
	  m=FindWhat.charAt(0);
	  if (k==m) o=1;
	}
    if (FindWhat=="all:") o=15;
    if (o>0){
			document.write('<p><table width="98%" border="0" cellspacing="0" cellpadding="0" height="3" background="9854.png" align="left">');
			document.write('<tr> ');
			document.write('<td><img src="9642.png" width="183" height="3"></td>');
			document.write('</tr>');
			document.write('</table>');
            document.write('<br>');
            document.write('<table width="100%" border="0" cellspacing="0" cellpadding="0">');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif"><b> &nbsp; <a href="',Failai[i],'">',Suliet[i],'</a></b></font></td>');
            document.write('</tr>');
            document.write('<tr>');
            document.write('<td>&nbsp;</td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td> <font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Kaina:</font><font color="#006699" size="-1">');
			if (Money[i]=='-') document.write('Nemokama'); else document.write(Money[i]);
			document.write('</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Dydis:</font> <font color="#006699" size="-1">',Dydis[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Ávertinimas:</font> ');
            document.write('<font color="#006699" size="-1">',Taskai[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td><font face="Georgia, Times New Roman, Times, serif" size="-1"><b>&nbsp; ');
            document.write('</b></font><font color="#0099FF" size="-1">Svetainë:</font> ');
            document.write('<font color="#006699" size="-1">',Page[i],'</font></td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td>&nbsp;</td>');
            document.write('</tr>');
            document.write('<tr> ');
            document.write('<td> <font face="Times New Roman, Times, serif">', Koment[i],'</font></td>');
            document.write('</tr>');
            document.write('</table>');
		}
	}	   
  }

