/* author: Raimondas */
/* creation date: 2002.04.12 */
/* title: duomenu baze ir paieshka joje */

//Duomenu baze
var MaxValue=45;
var LastPosition=44;
Suliet = new Array(MaxValue); 
Failai = new Array(MaxValue);
Dydis = new Array(MaxValue);
Koment = new Array(MaxValue);

//Reikalingos dalys
function AddToDatabase(Vieta,Pavadinimas, URL, FailoDydis, Komentaras){
 Suliet[Vieta] = Pavadinimas;
 Failai[Vieta] = URL;
 Dydis[Vieta] = FailoDydis;
 if (Komentaras=="") Komentaras="-";
 if (Komentaras==undefined) Komentaras="-";
 Koment[Vieta] = Komentaras;
 }

//Pridedami elementai i duomenu baze
 AddToDatabase(0,"Grand Prix 3","./Downloads/gp3liet1.exe","95,2Kb","Dar tik alpha versija");
 AddToDatabase(1,"Mimesweeper","./Downloads/ltgames.exe","81,5Kb","Kartu su lietuviðku Solitaire.");
 AddToDatabase(2,"Mirc","./Downloads/mirc.Lit.zip","0,646Kb","Sulietuvina tik Join ir Quit komandas.");
 AddToDatabase(3,"Outlook Express 5.5","./Downloads/outlook.zip","246Kb","Tinka ir kai kurioms kitoms Outlook versijoms.<br>Deja, daþnai ði sulietuvinimà ádiegus dingsta Outlook programoje kai kurios piktogramos.");
 AddToDatabase(4,"Paquet Builder","./Downloads/PaquetBuilderSulietuvinimas.exe","75Kb");
 AddToDatabase(5,"Solitaire","./Downloads/ltgames.exe","81,5Kb","Kartu su lietuviðku Mimesweeper."); 
 AddToDatabase(6,"Sonique","./Downloads/soniqueltpack.exe","82Kb");
 AddToDatabase(7,"WinACE 1.x","./Downloads/WinAceLT.exe","262Kb");
 AddToDatabase(8,"WinAmp v2.72","./Downloads/winamplt.exe","64,5Kb","Su kitom WinAmp versijomis gali neveikti.");
 AddToDatabase(9,"Windows Administrator 3.b+","./Downloads/LtWinA3b.zip","5,81Kb");
 AddToDatabase(10,"Windows 2000","./Downloads/wmillt50.exe","239Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.");
 AddToDatabase(11,"Windows ME","./Downloads/wmillt50.exe","239Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.");
 AddToDatabase(12,"Windows NT 4.0","./Downloads/wntlt411.exe","249Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.<br>Versija 4.11.2.");
 AddToDatabase(13,"Windows NT 4.0","./Downloads/wntlt413.exe","261Kb","LitWin Paketas.<br>Sulietuvina tik klaviatûrà.<br>Versija 4.13.05.");
 AddToDatabase(14,"Windows XP","./Downloads/wXPlt501.exe","149Kb","LitWin Paketas.<br>Papildomi árankiai klaviatûros sulietuvinimui.");
 AddToDatabase(15,"WinRAR 2.90 beta 2","./Downloads/winrar2.0beta4.exe","314Kb","Jeigu jûs naudojote pilna WinRAR versija, po ðio sulietuvinimo ádiegimo ji pasidarys <i>Shareware</i>. Taigi teks jà vël uþregistruoti...");
 AddToDatabase(16,"Windows 98","./Downloads/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(17,"Windows 98 Second Edition","./Downloads/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(18,"Windows 95","./Downloads/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(19,"Windows 95 PE","./Downloads/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(20,"Windows 95 OSR2","./Downloads/w98lt416.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(21,"Windows 95 OSR2 PE","./Downloads/w98lt4161.exe","359Kb","LitWin'98 Paketas.<br>Lietuviðki priedai. Sulietuvina klaviatûrà ir kai kuriuos ðriftus.<br>Versija 4.16.02");
 AddToDatabase(22,"Dark Basic","./Downloads/DarkBasicLT.exe","46,7Kb","Sulietuvina tik programos meniu ir kai kuriuos dialogus");
 AddToDatabase(23,"Adventure Pinball: Forgotten Island","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2"); 
 AddToDatabase(24,"Clive Barker's Undying","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(25,"Deus Ex","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(26,"Nerf: Arena Blast","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(27,"Unreal","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(28,"Unreal: Return To Napaly","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(29,"Unrealty","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(30,"Unreal Tournament","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(31,"Wheel of Time","./Downloads/LTPackBeta2Install.exe","605Kb","LT Pack Beta 2");
 AddToDatabase(32,"Windows 98","./Downloads/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(33,"Windows 98 Second Edition","./Downloads/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(34,"Windows Me","./Downloads/Winliet_1.05_full.exe","3,39Mb","WinLiet 1.05 Beta<br>Ðis paketas sulietuvina beveik visà vartotojo sàsajà, taèiau ðá sulietuvinimà rekomenduojame ádiegti jau paþengusiems vartotojams. Jeigu jûs neraðote su Internet Explorer narðykle po internetà, mes nerekomenduojame ádiegti ðio paketo visai.");
 AddToDatabase(35,"Advanced Grapher","./Downloads/AdvancedGrapher.zip","8Kb");
 AddToDatabase(36,"KDE 2.x","./Downloads/kde-i18n-lt-2.2.2.tar.bz2","840Kb");
 AddToDatabase(37,"FAR 1.63","./Downloads/far_lng_lithuanian.rar","18Kb");
 AddToDatabase(38,"PGP 2.6.3(i)","./Downloads/pgp263i-lithuanian.zip","42Kb");
 AddToDatabase(39,"WinRAR 2.80 Beta 3","./Downloads/Rar_lith.rar","63Kb");
 AddToDatabase(40,"Setup Generator","./Downloads/SetupGenerator.zip","8Kb");
 AddToDatabase(41,"Popper","./Downloads/Popper.zip","4Kb");
 AddToDatabase(42,"Netscape Communicator","./Downloads/x-lt-2.05.tar.gz","205Kb","Tinka tik Unix pagrindu veikiancioms OS: Linux, FreeBSD, Unix, BSD.");
 AddToDatabase(43,"MP3 CD Maker 1.50","./Downloads/MP3CDMaker1.50_LT.exe","75Kb");
 AddToDatabase(44,"Worms World Party","./Downloads/Worms_Sulietuvinimas.exe","6,81Mb");
 AddToDatabase(45,"Worms Armagedon","./Downloads/Worms_Sulietuvinimas.exe","6,81Mb");