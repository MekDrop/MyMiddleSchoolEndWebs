function ConvertToStandart(str){
  str=str.replace("%2F","/");
  str=str.replace("%2C",",");
  str=str.replace("%3F","?");
  str=str.replace("%60","`");
  str=str.replace("%7E","~");
  str=str.replace("%21","!");
  str=str.replace("%23","#");
  str=str.replace("%24","$");
  str=str.replace("%25","%");
  str=str.replace("%5E","^");
  str=str.replace("%26","&"); 
  str=str.replace("%28","(");
  str=str.replace("%29",")");
  str=str.replace("%3D","=");
  str=str.replace("+"," ");
  str=str.replace("%2B","+"); 
  str=str.replace("%7C","|");
  str=str.replace("%5B","[");
  str=str.replace("%5D","]");
  str=str.replace("%7B","{");
  str=str.replace("%7D","}");
  str=str.replace("%3A",":");
  str=str.replace("%3B",";");
  str=str.replace("%22",'"'); 
  str=str.replace("%27","'");
  str=str.replace("%3C","<");
  str=str.replace("%3E",">");
  str=str.replace("%5D","]");
  str=str.replace("%7B","{");
  str=str.replace("%7D","}");
  str=str.replace("%3A",":");
  str=str.replace("%3B",";");
  str=str.replace("%22",'"'); 
  str=str.replace("%E0","�");
  str=str.replace("%E8","�");
  str=str.replace("%E6","�");
  str=str.replace("%EB","�");
  str=str.replace("%E1","�");
  str=str.replace("%F0","�");
  str=str.replace("%F8","�");
  str=str.replace("%FB","�");
  str=str.replace("%FE","�");
  str=str.replace("%C0","�");
  str=str.replace("%C8","�");
  str=str.replace("%C6","�");
  str=str.replace("%CB","�");
  str=str.replace("%C1","�");
  str=str.replace("%D0","�");
  str=str.replace("%D8","�");
  str=str.replace("%DB","�");
  str=str.replace("%DE","�");
  return str;
}