/* author: Raimondas */
/* creation date: 2002.04.12 */
/* title: duomenu baze*/

//Duomenu baze
var MaxValue=27;
var LastPosition=26;
Suliet = new Array(MaxValue); 
Failai = new Array(MaxValue);
Dydis = new Array(MaxValue);
Koment = new Array(MaxValue);
Taskai = new Array(MaxValue);
Page = new Array(MaxValue);
Money = new Array(MaxValue);

//Reikalingos dalys
function AddToDatabase(Vieta, Pavadinimas, URL, FailoDydis, Ivertinimas, OfPsl, Kaina, Komentaras){
 Suliet[Vieta] = Pavadinimas;
 Failai[Vieta] = URL;
 Dydis[Vieta] = FailoDydis;
 Taskai[Vieta] = Ivertinimas;
 Page[Vieta] = OfPsl;
 Money[Vieta] = Kaina;
 Koment[Vieta] = Komentaras;
 }

//Pridedami elementai i duomenu baze
 AddToDatabase(0,"Grand Prix 3","./Downloads/gp3liet1.exe","95,2Kb","3","-","-","Sulietuvina Grand Prix 3 Quick Race skyriø.");
 AddToDatabase(1,"Windows LT Games","./Downloads/ltgames.exe","81,5Kb","5","-","-","Sulietuvina Solitaire ir Mimesweeper þaidimø vartotojo sàsajas.");
 AddToDatabase(2,"Mirc","./Downloads/mirc.Lit.zip","0,646Kb","2","-","-","Sulietuvina Mirc Join ir Quit komandas.");
 AddToDatabase(3,"Outlook Express 5.5","./Downloads/outlook.zip","246Kb","4","-","-","Sulietuvina Microsoft Outlook 5.5 programos vartotojo sàsajà. Tinka ir kai kurioms kitoms Outlook versijoms.<br>Deja, daþnai ði sulietuvinimà ádiegus dingsta Outlook programoje kai kurios piktogramos.");
 AddToDatabase(4,"Paquet Builder","./Downloads/PaquetBuilderSulietuvinimas.exe","75Kb","5","-","-","Lietuviø kalbos paketas ádiegimo programø kûrimui.");
 AddToDatabase(5,"Sonique","./Downloads/soniqueltpack.exe","82Kb","3","-","-","Sulietuvina Sonique grotuvo vartotojo sàsajà. Atrodo, kad ðis sulietuvinimas tinka visoms 1.x grotuvo versijoms. Taèiau kadangi ðis sulietuvinimas darytas ne profesionalø o megëjø, vartojama „ðvepla“ kalba.");
 AddToDatabase(6,"WinACE 1.x","./Downloads/WinAceLT.exe","262Kb","5","-","-","Sulietuvina visiðkai WinAce vartotojo sàsajà ir pagalbos failus.");
 AddToDatabase(7,"WinAmp 2.72","./Downloads/winamplt.exe","64,5Kb","5","-","-","Sulietuvina WinAmp. Su kitomis versijomis gali neveikti.");
 AddToDatabase(8,"Windows Administrator 3.b+","./Downloads/LtWinA3b.zip","5,81Kb","n","-","-","Deja, ðio sulietuvinimo mes negalëjome iðbandyti, nes mes neturëjome tokios programos, taèiau tikëna, kad jis gerai sulietuvina Windows Adminstrator 3.b+.");
 AddToDatabase(9,"LitWin 2000/ME","./Downloads/wmillt50.exe","239Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti árankiai Windows 2000 ir Windows Me operacinëms sistemoms.");
 AddToDatabase(10,"LitWin NT 4.0 (4.11.2)","./Downloads/wntlt411.exe","249Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti árankiai Windows NT 4.0 operacinei sistemai.");
 AddToDatabase(11,"LitWin NT 4.0 (4.13.05)","./Downloads/wntlt413.exe","261Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti árankiai Windows NT 4.0 operacinei sistemai.");
 AddToDatabase(12,"LitWin XP","./Downloads/wXPlt501.exe","149Kb","5","http://www.kada.lt/litwin","-","Papildomi lietuvinimui skirti árankiai Windows XP operacinei sistemai.");
 AddToDatabase(13,"WinRAR 2.90 beta 2","./Downloads/winrar2.0beta4.exe","314Kb","4","-","-","Sulietuvina WinRar. Jeigu jûs naudojote pilna WinRAR versija, po ðio sulietuvinimo ádiegimo ji pasidarys <i>Shareware</i>. Taigi teks jà vël uþregistruoti...");
 AddToDatabase(14,"LitWin 98","./Downloads/w98lt4161.exe","359Kb","5","http://www.kada.lt/litwin","-","Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus. Tinka Windows 98, Windows 98 SE, Windows 95, Windows 95 OSR 2, Windows 95 PE, Windows 95 OSR 2 PE operacinëms sistemoms.");
 AddToDatabase(15,"Dark Basic","./Downloads/DarkBasicLT.exe","46,7Kb","3","-","-","Dark Basic sulietuvinimas. Sulietuvina tik programos meniu ir kai kuriuos dialogus");
 AddToDatabase(16,"LT Pack Beta 2","./Downloads/LTPackBeta2Install.exe","605Kb","4","-","-","Ðis paketas yra skirtas þaidimø, kurie naudoja Unreal grafiná variklá sulietuvinimui. Tai Adventure Pinball: Forgotten Island, Clive Barker's Undying, Nerf: Arena Blast, Deus Ex, Unreal, Unreal Tournament, Unreal: Return To Napali, Unrealty, Wheel of Time..."); 
 AddToDatabase(17,"WinLiet 1.05 Beta","./Downloads/Winliet_1.05_full.exe","3,39Mb","2","-","-","Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau já rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs narðote su Internet Explorer narðykle, mes nerekomenduojame ádiegti ðio paketo visai. Paketas tinka Windows 98, Windows 98 SE ir Windows Me operacinëms sistemoms.");
 AddToDatabase(18,"Advanced Grapher","./Downloads/AdvancedGrapher.zip","8Kb","n","-","-","Sulietuvina Advanced Grapher.");
 AddToDatabase(19,"KDE 2.x","./Downloads/kde-i18n-lt-2.2.2.tar.bz2","840Kb","n","-","-","Deja, ðio paketo mes neiðbandëme, nes neturëjome kaip tai padaryti. Taèiau ið apraðymø pasidaro aiðku, kad jis yra skirtas pridëti bent kaþkiek lietuvybës á KDE. Jeigu netingite, iðbandykite ir savo áspûdþius paraðykite mums.");
 AddToDatabase(20,"FAR 1.63","./Downloads/far_lng_lithuanian.rar","18Kb","5","http://www.rarsoft.com","-","FAR sulietuvinimas.");
 AddToDatabase(21,"PGP 2.6.3(i)","./Downloads/pgp263i-lithuanian.zip","42Kb","n","-","-","PGP sulietuvinimas.");
 AddToDatabase(22,"WinRAR 2.90 Beta 3","./Downloads/Rar_lith.rar","63Kb","5","http://www.rarsoft.com","-","Sulietuvina WinRAR programà. Tai yra oficialus sulietuvinimas.");
 AddToDatabase(23,"Setup Generator","./Downloads/SetupGenerator.zip","8Kb","5","-","-","Sulietuvina Setup Generator programà.");
 AddToDatabase(24,"Popper","./Downloads/Popper.zip","4Kb","n","-","-","Atleiskit, bet mes neiðbandëme ðio sulietuvinimo. Nes neturëjome reikiamos programos. Jeigu turite galite pabandyti ðá sulietuvinimà.");
 AddToDatabase(25,"Netscape Communicator","./Downloads/x-lt-2.05.tar.gz","205Kb","n","-","-","Kaþkiek sulietuvina Netscape Communicator. Tinka tik Unix pagrindu veikiancioms OS: Linux, FreeBSD, Unix, BSD.");
 AddToDatabase(26,"MP3 CD Maker 1.50","./Downloads/MP3CDMaker1.50_LT.exe","75Kb","5","-","-","Sulietuvina CD Maker vartotojo sàsajà. Tinka 1.5 ir naujesnëms versijoms.");
 AddToDatabase(27,"Worms World Party/Armagedon","./Downloads/Worms_Sulietuvinimas.exe","6,81Mb","5","-","-","Kirmëliukai moka kalbëti lietuviðkai. Netikite? Tada, patys iðbandykite ir tuo ásitikinsite. Tinke Worms World Party ir Worms Armagedon þaidimams.");