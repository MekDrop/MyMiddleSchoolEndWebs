var windowNote;

function CreateWindow(UpHTML,CSSStyle,ClipURL){
  windowNote = window.open('','Note','toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=no,copyhistory=no,menubar=no,' + 'width=400' + ',height=300');
  text = '<' + 'HTML' + '><' + 'HEAD' + '><' + 'TITLE' + '>' + 'Peržiura/Perklausa' + '</' + 'TITLE' + '><link rel="stylesheet" href="'+CSSStyle+'" type="text/css"><' + '/HEAD' + '><' + 'BODY'+'>';
  text += UpHTML;
  text += '<embed autostart="true" alt="Multimedijos failo peržiuros/perklausos valdiklis" align="middle" border="0" controls="smallconsole" hidden="false" hspace="0" height="240" width="320" loop="true" id="Clip" name="Clip" palette="foreground" src="'+ClipURL+'">';
  text += '</' + 'BODY' + '><' + '/HTML' + '>';
  windowNote.document.write(text);
  windowNote.focus();
  windowNote.document.close();
}
