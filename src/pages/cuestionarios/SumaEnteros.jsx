import { useState, useEffect } from "react";

// ─── PALETA FACTORIZANDO ───────────────────────────────────────────────────
const C = {
  bg:      "#0e0f11",
  surface: "#13151a",
  border:  "#252830",
  blue:    "#3b9eff",
  gold:    "#f59e0b",
  purple:  "#a78bfa",
  teal:    "#34d399",
  orange:  "#f97316",
  crimson: "#f43f5e",
  text:    "#e8eaf0",
  muted:   "#5a6070",
  dim:     "#8a9ab8",
};

// ─── 250 REACTIVOS ────────────────────────────────────────────────────────
const questions = [
  // BÁSICO I: Sumas de positivos (1–30)
  { id:1,  q:"¿Cuánto es 5 + 3?",         opts:["6","8","9","2"],          ans:"8" },
  { id:2,  q:"¿Cuánto es 7 + 4?",         opts:["10","12","11","3"],       ans:"11" },
  { id:3,  q:"¿Cuánto es 12 + 8?",        opts:["18","20","22","16"],      ans:"20" },
  { id:4,  q:"¿Cuánto es 15 + 6?",        opts:["20","21","19","23"],      ans:"21" },
  { id:5,  q:"¿Cuánto es 9 + 9?",         opts:["16","17","18","19"],      ans:"18" },
  { id:6,  q:"¿Cuánto es 2 + 7?",         opts:["8","9","10","5"],         ans:"9" },
  { id:7,  q:"¿Cuánto es 4 + 6?",         opts:["9","10","11","8"],        ans:"10" },
  { id:8,  q:"¿Cuánto es 11 + 5?",        opts:["14","16","15","17"],      ans:"16" },
  { id:9,  q:"¿Cuánto es 3 + 8?",         opts:["10","12","11","9"],       ans:"11" },
  { id:10, q:"¿Cuánto es 13 + 7?",        opts:["19","18","21","20"],      ans:"20" },
  { id:11, q:"¿Cuánto es 6 + 9?",         opts:["14","16","15","13"],      ans:"15" },
  { id:12, q:"¿Cuánto es 8 + 8?",         opts:["14","15","16","17"],      ans:"16" },
  { id:13, q:"¿Cuánto es 17 + 3?",        opts:["18","19","21","20"],      ans:"20" },
  { id:14, q:"¿Cuánto es 25 + 5?",        opts:["28","29","31","30"],      ans:"30" },
  { id:15, q:"¿Cuánto es 14 + 16?",       opts:["28","29","31","30"],      ans:"30" },
  { id:16, q:"¿Cuánto es 22 + 8?",        opts:["28","29","31","30"],      ans:"30" },
  { id:17, q:"¿Cuánto es 7 + 13?",        opts:["18","19","21","20"],      ans:"20" },
  { id:18, q:"¿Cuánto es 18 + 12?",       opts:["28","29","31","30"],      ans:"30" },
  { id:19, q:"¿Cuánto es 30 + 10?",       opts:["38","39","41","40"],      ans:"40" },
  { id:20, q:"¿Cuánto es 45 + 15?",       opts:["58","59","61","60"],      ans:"60" },
  { id:21, q:"¿Cuánto es 23 + 17?",       opts:["38","39","41","40"],      ans:"40" },
  { id:22, q:"¿Cuánto es 11 + 19?",       opts:["28","29","31","30"],      ans:"30" },
  { id:23, q:"¿Cuánto es 35 + 25?",       opts:["58","59","61","60"],      ans:"60" },
  { id:24, q:"¿Cuánto es 40 + 20?",       opts:["58","59","61","60"],      ans:"60" },
  { id:25, q:"¿Cuánto es 50 + 30?",       opts:["78","79","81","80"],      ans:"80" },
  { id:26, q:"¿Cuánto es 16 + 24?",       opts:["38","39","41","40"],      ans:"40" },
  { id:27, q:"¿Cuánto es 28 + 12?",       opts:["38","39","41","40"],      ans:"40" },
  { id:28, q:"¿Cuánto es 33 + 7?",        opts:["38","39","41","40"],      ans:"40" },
  { id:29, q:"¿Cuánto es 42 + 18?",       opts:["58","59","61","60"],      ans:"60" },
  { id:30, q:"¿Cuánto es 55 + 45?",       opts:["98","99","101","100"],    ans:"100" },
  // BÁSICO II: Sumas de negativos (31–60)
  { id:31, q:"¿Cuánto es (−3) + (−5)?",    opts:["−6","−8","8","−2"],       ans:"−8" },
  { id:32, q:"¿Cuánto es (−7) + (−4)?",    opts:["−3","11","−11","−10"],    ans:"−11" },
  { id:33, q:"¿Cuánto es (−10) + (−6)?",   opts:["−14","−16","16","−4"],    ans:"−16" },
  { id:34, q:"¿Cuánto es (−12) + (−9)?",   opts:["−20","−22","−21","21"],   ans:"−21" },
  { id:35, q:"¿Cuánto es (−25) + (−15)?",  opts:["−35","−40","40","−45"],   ans:"−40" },
  { id:36, q:"¿Cuánto es (−2) + (−8)?",    opts:["−8","−10","10","−6"],     ans:"−10" },
  { id:37, q:"¿Cuánto es (−6) + (−4)?",    opts:["−8","−10","10","−2"],     ans:"−10" },
  { id:38, q:"¿Cuánto es (−11) + (−9)?",   opts:["−18","−20","20","−2"],    ans:"−20" },
  { id:39, q:"¿Cuánto es (−15) + (−5)?",   opts:["−18","−20","20","−10"],   ans:"−20" },
  { id:40, q:"¿Cuánto es (−13) + (−7)?",   opts:["−18","−20","20","−6"],    ans:"−20" },
  { id:41, q:"¿Cuánto es (−20) + (−10)?",  opts:["−28","−30","30","−10"],   ans:"−30" },
  { id:42, q:"¿Cuánto es (−14) + (−16)?",  opts:["−28","−30","30","−2"],    ans:"−30" },
  { id:43, q:"¿Cuánto es (−18) + (−12)?",  opts:["−28","−30","30","−6"],    ans:"−30" },
  { id:44, q:"¿Cuánto es (−22) + (−8)?",   opts:["−28","−30","30","−14"],   ans:"−30" },
  { id:45, q:"¿Cuánto es (−17) + (−13)?",  opts:["−28","−30","30","−4"],    ans:"−30" },
  { id:46, q:"¿Cuánto es (−30) + (−20)?",  opts:["−48","−50","50","−10"],   ans:"−50" },
  { id:47, q:"¿Cuánto es (−25) + (−25)?",  opts:["−48","−50","50","0"],     ans:"−50" },
  { id:48, q:"¿Cuánto es (−40) + (−10)?",  opts:["−48","−50","50","−30"],   ans:"−50" },
  { id:49, q:"¿Cuánto es (−35) + (−15)?",  opts:["−48","−50","50","−20"],   ans:"−50" },
  { id:50, q:"¿Cuánto es (−45) + (−5)?",   opts:["−48","−50","50","−40"],   ans:"−50" },
  { id:51, q:"¿Cuánto es (−60) + (−40)?",  opts:["−98","−100","100","−20"], ans:"−100" },
  { id:52, q:"¿Cuánto es (−55) + (−45)?",  opts:["−98","−100","100","−10"], ans:"−100" },
  { id:53, q:"¿Cuánto es (−70) + (−30)?",  opts:["−98","−100","100","−40"], ans:"−100" },
  { id:54, q:"¿Cuánto es (−80) + (−20)?",  opts:["−98","−100","100","−60"], ans:"−100" },
  { id:55, q:"¿Cuánto es (−75) + (−25)?",  opts:["−98","−100","100","−50"], ans:"−100" },
  { id:56, q:"¿Cuánto es (−100) + (−50)?", opts:["−148","−150","150","−50"],ans:"−150" },
  { id:57, q:"¿Cuánto es (−90) + (−60)?",  opts:["−148","−150","150","−30"],ans:"−150" },
  { id:58, q:"¿Cuánto es (−85) + (−65)?",  opts:["−148","−150","150","−20"],ans:"−150" },
  { id:59, q:"¿Cuánto es (−110) + (−40)?", opts:["−148","−150","150","−70"],ans:"−150" },
  { id:60, q:"¿Cuánto es (−120) + (−30)?", opts:["−148","−150","150","−90"],ans:"−150" },
  // INTERMEDIO I: Positivo + Negativo → positivo (61–90)
  { id:61, q:"¿Cuánto es 8 + (−3)?",      opts:["4","5","6","11"],         ans:"5" },
  { id:62, q:"¿Cuánto es 10 + (−4)?",     opts:["8","6","14","5"],         ans:"6" },
  { id:63, q:"¿Cuánto es 15 + (−7)?",     opts:["6","9","8","22"],         ans:"8" },
  { id:64, q:"¿Cuánto es 20 + (−9)?",     opts:["10","12","11","29"],      ans:"11" },
  { id:65, q:"¿Cuánto es 30 + (−12)?",    opts:["16","18","20","42"],      ans:"18" },
  { id:66, q:"¿Cuánto es 12 + (−5)?",     opts:["6","7","8","17"],         ans:"7" },
  { id:67, q:"¿Cuánto es 18 + (−6)?",     opts:["10","12","14","24"],      ans:"12" },
  { id:68, q:"¿Cuánto es 25 + (−10)?",    opts:["13","15","17","35"],      ans:"15" },
  { id:69, q:"¿Cuánto es 14 + (−8)?",     opts:["4","6","8","22"],         ans:"6" },
  { id:70, q:"¿Cuánto es 22 + (−15)?",    opts:["5","7","9","37"],         ans:"7" },
  { id:71, q:"¿Cuánto es 40 + (−18)?",    opts:["20","22","24","58"],      ans:"22" },
  { id:72, q:"¿Cuánto es 35 + (−20)?",    opts:["13","15","17","55"],      ans:"15" },
  { id:73, q:"¿Cuánto es 50 + (−25)?",    opts:["23","25","27","75"],      ans:"25" },
  { id:74, q:"¿Cuánto es 60 + (−33)?",    opts:["25","27","29","93"],      ans:"27" },
  { id:75, q:"¿Cuánto es 45 + (−22)?",    opts:["21","23","25","67"],      ans:"23" },
  { id:76, q:"¿Cuánto es 100 + (−45)?",   opts:["53","55","57","145"],     ans:"55" },
  { id:77, q:"¿Cuánto es 75 + (−38)?",    opts:["35","37","39","113"],     ans:"37" },
  { id:78, q:"¿Cuánto es 80 + (−55)?",    opts:["23","25","27","135"],     ans:"25" },
  { id:79, q:"¿Cuánto es 90 + (−47)?",    opts:["41","43","45","137"],     ans:"43" },
  { id:80, q:"¿Cuánto es 70 + (−34)?",    opts:["34","36","38","104"],     ans:"36" },
  { id:81, q:"¿Cuánto es 55 + (−30)?",    opts:["23","25","27","85"],      ans:"25" },
  { id:82, q:"¿Cuánto es 48 + (−26)?",    opts:["20","22","24","74"],      ans:"22" },
  { id:83, q:"¿Cuánto es 66 + (−40)?",    opts:["24","26","28","106"],     ans:"26" },
  { id:84, q:"¿Cuánto es 72 + (−50)?",    opts:["20","22","24","122"],     ans:"22" },
  { id:85, q:"¿Cuánto es 85 + (−60)?",    opts:["23","25","27","145"],     ans:"25" },
  { id:86, q:"¿Cuánto es 120 + (−75)?",   opts:["43","45","47","195"],     ans:"45" },
  { id:87, q:"¿Cuánto es 200 + (−150)?",  opts:["48","50","52","350"],     ans:"50" },
  { id:88, q:"¿Cuánto es 180 + (−95)?",   opts:["83","85","87","275"],     ans:"85" },
  { id:89, q:"¿Cuánto es 150 + (−88)?",   opts:["60","62","64","238"],     ans:"62" },
  { id:90, q:"¿Cuánto es 250 + (−200)?",  opts:["48","50","52","450"],     ans:"50" },
  // INTERMEDIO II: Positivo + Negativo → negativo (91–120)
  { id:91,  q:"¿Cuánto es 3 + (−7)?",     opts:["4","−4","−10","10"],      ans:"−4" },
  { id:92,  q:"¿Cuánto es 5 + (−9)?",     opts:["−3","−4","14","−14"],     ans:"−4" },
  { id:93,  q:"¿Cuánto es 6 + (−13)?",    opts:["−7","7","−19","19"],      ans:"−7" },
  { id:94,  q:"¿Cuánto es 11 + (−18)?",   opts:["7","−8","−7","−29"],      ans:"−7" },
  { id:95,  q:"¿Cuánto es 14 + (−25)?",   opts:["−10","−11","−39","11"],   ans:"−11" },
  { id:96,  q:"¿Cuánto es 4 + (−10)?",    opts:["−4","−6","14","6"],       ans:"−6" },
  { id:97,  q:"¿Cuánto es 8 + (−15)?",    opts:["−5","−7","23","7"],       ans:"−7" },
  { id:98,  q:"¿Cuánto es 12 + (−20)?",   opts:["−6","−8","32","8"],       ans:"−8" },
  { id:99,  q:"¿Cuánto es 7 + (−16)?",    opts:["−7","−9","23","9"],       ans:"−9" },
  { id:100, q:"¿Cuánto es 10 + (−22)?",   opts:["−10","−12","32","12"],    ans:"−12" },
  { id:101, q:"¿Cuánto es 15 + (−30)?",   opts:["−13","−15","45","15"],    ans:"−15" },
  { id:102, q:"¿Cuánto es 20 + (−35)?",   opts:["−13","−15","55","15"],    ans:"−15" },
  { id:103, q:"¿Cuánto es 25 + (−40)?",   opts:["−13","−15","65","15"],    ans:"−15" },
  { id:104, q:"¿Cuánto es 18 + (−30)?",   opts:["−10","−12","48","12"],    ans:"−12" },
  { id:105, q:"¿Cuánto es 22 + (−40)?",   opts:["−16","−18","62","18"],    ans:"−18" },
  { id:106, q:"¿Cuánto es 30 + (−55)?",   opts:["−23","−25","85","25"],    ans:"−25" },
  { id:107, q:"¿Cuánto es 40 + (−65)?",   opts:["−23","−25","105","25"],   ans:"−25" },
  { id:108, q:"¿Cuánto es 45 + (−70)?",   opts:["−23","−25","115","25"],   ans:"−25" },
  { id:109, q:"¿Cuánto es 50 + (−80)?",   opts:["−28","−30","130","30"],   ans:"−30" },
  { id:110, q:"¿Cuánto es 35 + (−60)?",   opts:["−23","−25","95","25"],    ans:"−25" },
  { id:111, q:"¿Cuánto es 60 + (−90)?",   opts:["−28","−30","150","30"],   ans:"−30" },
  { id:112, q:"¿Cuánto es 70 + (−100)?",  opts:["−28","−30","170","30"],   ans:"−30" },
  { id:113, q:"¿Cuánto es 80 + (−120)?",  opts:["−38","−40","200","40"],   ans:"−40" },
  { id:114, q:"¿Cuánto es 75 + (−100)?",  opts:["−23","−25","175","25"],   ans:"−25" },
  { id:115, q:"¿Cuánto es 90 + (−130)?",  opts:["−38","−40","220","40"],   ans:"−40" },
  { id:116, q:"¿Cuánto es 100 + (−160)?", opts:["−58","−60","260","60"],   ans:"−60" },
  { id:117, q:"¿Cuánto es 120 + (−200)?", opts:["−78","−80","320","80"],   ans:"−80" },
  { id:118, q:"¿Cuánto es 150 + (−250)?", opts:["−98","−100","400","100"], ans:"−100" },
  { id:119, q:"¿Cuánto es 200 + (−350)?", opts:["−148","−150","550","150"],ans:"−150" },
  { id:120, q:"¿Cuánto es 180 + (−300)?", opts:["−118","−120","480","120"],ans:"−120" },
  // CERO: Elemento neutro (121–125)
  { id:121, q:"¿Cuánto es (−8) + 0?",  opts:["8","0","−8","−16"],        ans:"−8" },
  { id:122, q:"¿Cuánto es 0 + 13?",    opts:["0","−13","13","26"],        ans:"13" },
  { id:123, q:"¿Cuánto es 0 + 0?",     opts:["1","−1","indefinido","0"],  ans:"0" },
  { id:124, q:"¿Cuánto es 22 + 0?",    opts:["0","44","22","11"],         ans:"22" },
  { id:125, q:"¿Cuánto es (−17) + 0?", opts:["0","17","−34","−17"],       ans:"−17" },
  // OPUESTOS: Suma = 0 (126–130)
  { id:126, q:"¿Cuánto es 9 + (−9)?",     opts:["18","−18","1","0"],       ans:"0" },
  { id:127, q:"¿Cuánto es (−15) + 15?",   opts:["−30","30","0","1"],       ans:"0" },
  { id:128, q:"¿Cuánto es 100 + (−100)?", opts:["200","−100","100","0"],   ans:"0" },
  { id:129, q:"¿Cuánto es (−50) + 50?",   opts:["100","−100","0","50"],    ans:"0" },
  { id:130, q:"¿Cuánto es 33 + (−33)?",   opts:["66","−66","0","33"],      ans:"0" },
  // AVANZADO I: Números grandes (131–160)
  { id:131, q:"¿Cuánto es 48 + 37?",          opts:["83","85","87","80"],        ans:"85" },
  { id:132, q:"¿Cuánto es (−56) + (−44)?",    opts:["−98","−100","−102","100"],  ans:"−100" },
  { id:133, q:"¿Cuánto es 75 + (−30)?",       opts:["40","45","50","105"],       ans:"45" },
  { id:134, q:"¿Cuánto es (−80) + 55?",       opts:["−20","−25","25","−135"],    ans:"−25" },
  { id:135, q:"¿Cuánto es 63 + (−90)?",       opts:["−27","27","−153","153"],    ans:"−27" },
  { id:136, q:"¿Cuánto es 125 + 75?",         opts:["198","200","202","50"],      ans:"200" },
  { id:137, q:"¿Cuánto es (−130) + (−70)?",   opts:["−198","−200","200","−60"],  ans:"−200" },
  { id:138, q:"¿Cuánto es 200 + (−85)?",      opts:["113","115","117","285"],     ans:"115" },
  { id:139, q:"¿Cuánto es (−150) + 90?",      opts:["−58","−60","240","60"],      ans:"−60" },
  { id:140, q:"¿Cuánto es 175 + (−95)?",      opts:["78","80","82","270"],        ans:"80" },
  { id:141, q:"¿Cuánto es 240 + 160?",        opts:["398","400","402","80"],      ans:"400" },
  { id:142, q:"¿Cuánto es (−300) + (−100)?",  opts:["−398","−400","400","−200"], ans:"−400" },
  { id:143, q:"¿Cuánto es 350 + (−150)?",     opts:["198","200","202","500"],     ans:"200" },
  { id:144, q:"¿Cuánto es (−250) + 180?",     opts:["−68","−70","430","70"],      ans:"−70" },
  { id:145, q:"¿Cuánto es 420 + (−300)?",     opts:["118","120","122","720"],     ans:"120" },
  { id:146, q:"¿Cuánto es 500 + 300?",        opts:["798","800","802","200"],     ans:"800" },
  { id:147, q:"¿Cuánto es (−450) + (−250)?",  opts:["−698","−700","700","−200"], ans:"−700" },
  { id:148, q:"¿Cuánto es 600 + (−380)?",     opts:["218","220","222","980"],     ans:"220" },
  { id:149, q:"¿Cuánto es (−700) + 450?",     opts:["−248","−250","1150","250"],  ans:"−250" },
  { id:150, q:"¿Cuánto es 800 + (−520)?",     opts:["278","280","282","1320"],    ans:"280" },
  { id:151, q:"¿Cuánto es 1000 + 500?",       opts:["1498","1500","1502","500"],  ans:"1500" },
  { id:152, q:"¿Cuánto es (−1000) + (−500)?", opts:["−1498","−1500","1500","−500"],ans:"−1500" },
  { id:153, q:"¿Cuánto es 1200 + (−800)?",    opts:["398","400","402","2000"],    ans:"400" },
  { id:154, q:"¿Cuánto es (−900) + 600?",     opts:["−298","−300","1500","300"],  ans:"−300" },
  { id:155, q:"¿Cuánto es 750 + (−250)?",     opts:["498","500","502","1000"],    ans:"500" },
  { id:156, q:"¿Cuánto es 330 + 270?",        opts:["598","600","602","60"],      ans:"600" },
  { id:157, q:"¿Cuánto es (−440) + (−360)?",  opts:["−798","−800","800","−80"],   ans:"−800" },
  { id:158, q:"¿Cuánto es 520 + (−180)?",     opts:["338","340","342","700"],     ans:"340" },
  { id:159, q:"¿Cuánto es (−650) + 400?",     opts:["−248","−250","1050","250"],  ans:"−250" },
  { id:160, q:"¿Cuánto es 880 + (−630)?",     opts:["248","250","252","1510"],    ans:"250" },
  // AVANZADO II: Tres o más sumandos (161–190)
  { id:161, q:"¿Cuánto es 3 + (−5) + 2?",              opts:["0","1","−1","10"],       ans:"0" },
  { id:162, q:"¿Cuánto es (−4) + (−6) + 8?",           opts:["−2","2","−18","18"],     ans:"−2" },
  { id:163, q:"¿Cuánto es 7 + (−3) + (−7)?",           opts:["−3","3","−17","17"],     ans:"−3" },
  { id:164, q:"¿Cuánto es (−10) + 4 + 9?",             opts:["2","3","−3","23"],       ans:"3" },
  { id:165, q:"¿Cuánto es 5 + (−8) + 6?",              opts:["2","3","−3","19"],       ans:"3" },
  { id:166, q:"¿Cuánto es (−2) + (−3) + (−5)?",        opts:["−8","−10","10","−6"],    ans:"−10" },
  { id:167, q:"¿Cuánto es 10 + (−4) + (−3)?",          opts:["2","3","4","17"],        ans:"3" },
  { id:168, q:"¿Cuánto es (−8) + 5 + (−2)?",           opts:["−3","−5","15","5"],      ans:"−5" },
  { id:169, q:"¿Cuánto es 12 + (−7) + (−8)?",          opts:["−1","−3","27","3"],      ans:"−3" },
  { id:170, q:"¿Cuánto es (−15) + 8 + 10?",            opts:["2","3","4","33"],        ans:"3" },
  { id:171, q:"¿Cuánto es 20 + (−12) + (−5)?",         opts:["2","3","4","37"],        ans:"3" },
  { id:172, q:"¿Cuánto es (−18) + (−7) + 15?",         opts:["−8","−10","40","10"],    ans:"−10" },
  { id:173, q:"¿Cuánto es 25 + (−10) + (−8)?",         opts:["5","7","9","43"],        ans:"7" },
  { id:174, q:"¿Cuánto es (−30) + 12 + 22?",           opts:["2","4","6","64"],        ans:"4" },
  { id:175, q:"¿Cuánto es 15 + (−20) + 8?",            opts:["2","3","4","43"],        ans:"3" },
  { id:176, q:"¿Cuánto es (−5) + (−5) + (−5)?",        opts:["−10","−15","15","−20"],  ans:"−15" },
  { id:177, q:"¿Cuánto es 10 + (−10) + 10?",           opts:["0","10","−10","20"],     ans:"10" },
  { id:178, q:"¿Cuánto es (−20) + 15 + (−10)?",        opts:["−13","−15","45","15"],   ans:"−15" },
  { id:179, q:"¿Cuánto es 30 + (−18) + (−7)?",         opts:["4","5","6","55"],        ans:"5" },
  { id:180, q:"¿Cuánto es (−25) + 10 + 20?",           opts:["4","5","6","55"],        ans:"5" },
  { id:181, q:"¿Cuánto es 40 + (−25) + (−10)?",        opts:["4","5","6","75"],        ans:"5" },
  { id:182, q:"¿Cuánto es (−50) + 30 + 25?",           opts:["4","5","6","105"],       ans:"5" },
  { id:183, q:"¿Cuánto es 60 + (−40) + (−15)?",        opts:["4","5","6","115"],       ans:"5" },
  { id:184, q:"¿Cuánto es 2 + (−3) + 4 + (−5)?",       opts:["−3","−2","2","3"],       ans:"−2" },
  { id:185, q:"¿Cuánto es (−6) + 7 + (−8) + 9?",       opts:["0","2","−2","4"],        ans:"2" },
  { id:186, q:"¿Cuánto es 10 + (−5) + (−3) + (−2)?",   opts:["−1","0","1","2"],        ans:"0" },
  { id:187, q:"¿Cuánto es (−12) + 8 + (−6) + 14?",     opts:["2","4","6","8"],         ans:"4" },
  { id:188, q:"¿Cuánto es 1 + (−2) + 3 + (−4) + 5?",   opts:["1","3","5","−5"],        ans:"3" },
  { id:189, q:"¿Cuánto es (−1)+(−1)+(−1)+(−1)+(−1)?",  opts:["−3","−5","−4","5"],      ans:"−5" },
  { id:190, q:"¿Cuánto es 6 + (−4) + 2 + (−6) + 4?",   opts:["0","2","−2","4"],        ans:"2" },
  // CONTEXTO: Problemas aplicados (191–220)
  { id:191, q:"Un buzo está a −15 m. Sube 6 m. ¿A qué profundidad queda?",                                         opts:["−9 m","9 m","−21 m","21 m"],        ans:"−9 m" },
  { id:192, q:"La temperatura es −8 °C. Sube 12 °C. ¿Cuál es la nueva temperatura?",                              opts:["−4 °C","4 °C","20 °C","−20 °C"],    ans:"4 °C" },
  { id:193, q:"Pedro tiene $20 y gasta $35. ¿Cuánto le queda?",                                                    opts:["15","−15","55","−55"],              ans:"−15" },
  { id:194, q:"Un elevador está en el piso −3. Sube 7 pisos. ¿En qué piso queda?",                                opts:["Piso 4","Piso −4","Piso 10","Piso −10"],ans:"Piso 4" },
  { id:195, q:"La deuda de Ana es −$50. Recibe $30. ¿Cuál es su saldo?",                                           opts:["−$20","$20","−$80","$80"],          ans:"−$20" },
  { id:196, q:"Un submarino está a −200 m. Sube 80 m. ¿A qué profundidad queda?",                                 opts:["−120 m","120 m","−280 m","280 m"],   ans:"−120 m" },
  { id:197, q:"La temperatura es −15 °C. Baja 8 °C más. ¿Cuál es la nueva temperatura?",                          opts:["−7 °C","7 °C","−23 °C","23 °C"],    ans:"−23 °C" },
  { id:198, q:"Carlos debe $120 y paga $75. ¿Cuánto sigue debiendo?",                                              opts:["−$45","$45","$195","−$195"],        ans:"−$45" },
  { id:199, q:"Un globo está a 300 m. Baja 450 m. ¿A qué altura queda?",                                          opts:["−150 m","150 m","750 m","−750 m"],   ans:"−150 m" },
  { id:200, q:"El marcador es −5 puntos. El equipo anota 12. ¿Cuál es el nuevo marcador?",                         opts:["−17","7","17","−7"],                ans:"7" },
  { id:201, q:"Una empresa tiene ganancias de $500 y pérdidas de $750. ¿Cuál es el balance?",                      opts:["$250","−$250","$1250","−$1250"],    ans:"−$250" },
  { id:202, q:"El nivel del agua en un pozo es −8 m. Sube 3 m por la lluvia. ¿Cuál es el nivel?",                 opts:["−11 m","11 m","−5 m","5 m"],        ans:"−5 m" },
  { id:203, q:"Rodrigo está en el piso −2. Sube 5 pisos. ¿En qué piso queda?",                                    opts:["Piso −7","Piso 7","Piso 3","Piso −3"],ans:"Piso 3" },
  { id:204, q:"La puntuación de un jugador es −30. Gana 45 puntos. ¿Cuál es su puntuación?",                      opts:["−75","75","−15","15"],              ans:"15" },
  { id:205, q:"El saldo de una cuenta es −$200. Se depositan $350. ¿Cuál es el nuevo saldo?",                     opts:["$150","−$150","$550","−$550"],      ans:"$150" },
  { id:206, q:"Un buzo está a −50 m. Sube 30 m. ¿A qué profundidad queda?",                                       opts:["−80 m","80 m","−20 m","20 m"],      ans:"−20 m" },
  { id:207, q:"La temperatura es 5 °C. Baja 18 °C. ¿Cuál es la nueva temperatura?",                               opts:["13 °C","−13 °C","23 °C","−23 °C"], ans:"−13 °C" },
  { id:208, q:"Sofía tiene $80 y gasta $110. ¿Cuánto le queda?",                                                   opts:["$30","−$30","$190","−$190"],        ans:"−$30" },
  { id:209, q:"Un avión vuela a 1000 m. Desciende 1200 m. ¿A qué altitud queda?",                                opts:["−200 m","200 m","2200 m","−2200 m"],ans:"−200 m" },
  { id:210, q:"El saldo de Luis es $150. Hace un gasto de $220. ¿Cuál es su saldo?",                               opts:["$70","−$70","$370","−$370"],        ans:"−$70" },
  { id:211, q:"La temperatura mínima fue −12 °C. Subió 20 °C al mediodía. ¿Cuál fue la temperatura?",             opts:["−32 °C","32 °C","−8 °C","8 °C"],   ans:"8 °C" },
  { id:212, q:"El equipo A tiene −15 puntos. Gana 25 en la siguiente ronda. ¿Cuál es su puntuación?",              opts:["−40","40","−10","10"],              ans:"10" },
  { id:213, q:"Una empresa tiene deuda de $1000 y recibe un pago de $600. ¿Cuál es el balance?",                  opts:["$400","−$400","$1600","−$1600"],    ans:"−$400" },
  { id:214, q:"Javier debe $45 a Pedro y $30 a María. ¿Cuánto debe en total?",                                     opts:["$75","−$75","$15","−$15"],          ans:"−$75" },
  { id:215, q:"Lucía tiene $200 y paga dos deudas de $120 y $90. ¿Cuál es su saldo?",                             opts:["$10","−$10","$410","−$410"],        ans:"−$10" },
  { id:216, q:"El nivel del mar en una costa es −3 m. Sube 5 m por marea. ¿Cuál es el nivel?",                    opts:["−8 m","8 m","−2 m","2 m"],          ans:"2 m" },
  { id:217, q:"La puntuación en un juego era −40. Se sumaron 40 puntos. ¿Cuál es la puntuación final?",           opts:["−80","80","−40","0"],               ans:"0" },
  { id:218, q:"Un alpinista está a 3200 m. Baja 3500 m. ¿A qué altitud queda?",                                   opts:["−300 m","300 m","6700 m","−6700 m"],ans:"−300 m" },
  { id:219, q:"La temperatura era −20 °C. Después de un cambio climático es −5 °C. ¿Cuánto aumentó?",             opts:["−25 °C","25 °C","−15 °C","15 °C"], ans:"15 °C" },
  { id:220, q:"El saldo era −$180. Se retiran $40 más. ¿Cuál es el nuevo saldo?",                                  opts:["−$140","$140","−$220","$220"],      ans:"−$220" },
  // DESAFÍO A: Contexto que oculta una ecuación (221–235)
  { id:221, q:"Un buzo estaba a cierta profundidad. Subió 15 m y quedó a −3 m. ¿A qué profundidad estaba?",       opts:["−18 m","18 m","−12 m","12 m"],      ans:"−18 m" },
  { id:222, q:"La temperatura era desconocida. Subió 8 °C y llegó a −2 °C. ¿Cuál era la temperatura?",            opts:["−10 °C","10 °C","6 °C","−6 °C"],   ans:"−10 °C" },
  { id:223, q:"El saldo de Tomás más un depósito de $30 da $5. ¿Cuál era su saldo?",                              opts:["−$25","$35","$25","−$35"],          ans:"−$25" },
  { id:224, q:"Un globo estaba a cierta altura. Subió 200 m y quedó a 50 m. ¿A qué altura estaba?",               opts:["−150 m","250 m","150 m","−250 m"],  ans:"−150 m" },
  { id:225, q:"La puntuación de Alicia más 18 puntos da −4. ¿Cuál era su puntuación?",                             opts:["14","−14","−22","22"],              ans:"−22" },
  { id:226, q:"Rosa tenía cierta cantidad. Recibió $45 y ahora tiene $12. ¿Cuánto tenía antes?",                  opts:["$57","−$57","$33","−$33"],          ans:"−$33" },
  { id:227, q:"El nivel del agua era desconocido. Subió 10 m y quedó en −5 m. ¿Cuál era el nivel?",               opts:["−5 m","5 m","−15 m","15 m"],        ans:"−15 m" },
  { id:228, q:"Una empresa tuvo ganancias de $100 y su nuevo balance es $40. ¿Cuál era el balance anterior?",     opts:["−$60","$60","$140","−$140"],        ans:"−$60" },
  { id:229, q:"La temperatura era desconocida. Bajó 12 °C y quedó en −20 °C. ¿Cuál era la temperatura?",          opts:["−8 °C","8 °C","−32 °C","32 °C"],   ans:"−8 °C" },
  { id:230, q:"Un submarino estaba a cierta profundidad. Subió 75 m y quedó a −25 m. ¿A qué profundidad estaba?", opts:["50 m","−50 m","−100 m","100 m"],    ans:"−100 m" },
  { id:231, q:"Héctor tenía cierta deuda. Le perdonaron $20 y ahora debe $15. ¿Cuánto debía?",                     opts:["−$35","$5","−$5","$35"],            ans:"−$35" },
  { id:232, q:"Un avión de altitud desconocida ascendió 400 m y llegó a 150 m. ¿A qué altitud volaba?",           opts:["550 m","−550 m","−250 m","250 m"],  ans:"−250 m" },
  { id:233, q:"La puntuación de un equipo más 30 puntos da −10. ¿Cuál era la puntuación?",                         opts:["20","−20","−40","40"],              ans:"−40" },
  { id:234, q:"Un elevador en cierto piso subió 6 y quedó en el piso 2. ¿En qué piso estaba?",                    opts:["Piso 8","Piso −8","Piso −4","Piso 4"],ans:"Piso −4" },
  { id:235, q:"El saldo de María sufrió un cargo de $55 y quedó en −$30. ¿Cuál era su saldo antes?",              opts:["$25","−$25","$85","−$85"],          ans:"$25" },
  // DESAFÍO B: Ecuaciones explícitas (236–250)
  { id:236, q:"¿Qué número debe ser x para que x + (−1) = 0?",     opts:["−1","0","1","2"],         ans:"1" },
  { id:237, q:"¿Qué número debe ser x para que x + 5 = 0?",        opts:["5","0","−5","−10"],       ans:"−5" },
  { id:238, q:"¿Qué número debe ser x para que x + (−3) = 4?",     opts:["1","7","−7","−1"],        ans:"7" },
  { id:239, q:"¿Qué número debe ser x para que x + 8 = 3?",        opts:["5","11","−5","−11"],      ans:"−5" },
  { id:240, q:"¿Qué número debe ser x para que x + (−6) = −10?",   opts:["4","−4","16","−16"],      ans:"−4" },
  { id:241, q:"¿Qué número debe ser x para que x + 12 = 5?",       opts:["7","17","−7","−17"],      ans:"−7" },
  { id:242, q:"¿Qué número debe ser x para que x + (−9) = −4?",    opts:["−13","13","5","−5"],      ans:"5" },
  { id:243, q:"¿Qué número debe ser x para que x + 15 = −8?",      opts:["7","−7","−23","23"],      ans:"−23" },
  { id:244, q:"¿Qué número debe ser x para que x + (−7) = 10?",    opts:["3","17","−3","−17"],      ans:"17" },
  { id:245, q:"¿Qué número debe ser x para que x + 20 = −5?",      opts:["15","−15","25","−25"],    ans:"−25" },
  { id:246, q:"¿Qué número debe ser x para que x + (−14) = −6?",   opts:["−20","20","8","−8"],      ans:"8" },
  { id:247, q:"¿Qué número debe ser x para que x + 25 = 10?",      opts:["35","−35","15","−15"],    ans:"−15" },
  { id:248, q:"¿Qué número debe ser x para que x + (−30) = −12?",  opts:["−42","42","18","−18"],    ans:"18" },
  { id:249, q:"¿Qué número debe ser x para que x + 40 = 15?",      opts:["55","−55","25","−25"],    ans:"−25" },
  { id:250, q:"¿Qué número debe ser x para que x + (−50) = 50?",   opts:["0","100","−100","50"],    ans:"100" },
];

// ─── NIVELES ──────────────────────────────────────────────────────────────
const LEVELS = [
  { label:"Básico I",      range:[1,30],    color:C.blue    },
  { label:"Básico II",     range:[31,60],   color:C.blue    },
  { label:"Intermedio I",  range:[61,90],   color:C.teal    },
  { label:"Intermedio II", range:[91,120],  color:C.teal    },
  { label:"Cero",          range:[121,125], color:C.purple  },
  { label:"Opuestos",      range:[126,130], color:C.purple  },
  { label:"Avanzado I",    range:[131,160], color:C.gold    },
  { label:"Avanzado II",   range:[161,190], color:C.gold    },
  { label:"Contexto",      range:[191,220], color:C.orange  },
  { label:"Desafío",       range:[221,250], color:C.crimson },
];

function getLvl(id){ return LEVELS.find(l=>id>=l.range[0]&&id<=l.range[1])||LEVELS[0]; }

// ─── COMPONENTES ──────────────────────────────────────────────────────────
function ProgressBar({ answered, total }) {
  const pct = Math.round((answered/total)*100);
  return (
    <div style={{ background:C.border, borderRadius:99, height:5, overflow:"hidden", margin:"10px 0" }}>
      <div style={{
        height:"100%", width:`${pct}%`,
        background:`linear-gradient(90deg,${C.blue},${C.purple})`,
        transition:"width 0.4s ease", borderRadius:99
      }}/>
    </div>
  );
}

function QuestionCard({ q, selected, onSelect, showResult }) {
  const lv = getLvl(q.id);
  return (
    <div style={{
      background:C.surface,
      border:`1px solid ${selected ? lv.color+"55" : C.border}`,
      borderRadius:14, padding:"22px 26px", marginBottom:14,
      transition:"border-color 0.2s"
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
        <span style={{
          background:lv.color+"1a", color:lv.color, borderRadius:6,
          padding:"2px 10px", fontSize:10, fontWeight:700,
          letterSpacing:1.5, textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif"
        }}>{lv.label}</span>
        <span style={{ marginLeft:"auto", color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>#{q.id} / 250</span>
      </div>
      <p style={{
        color:C.text, fontSize:17, fontWeight:600, marginBottom:16,
        lineHeight:1.55, fontFamily:"'DM Sans',sans-serif", letterSpacing:"-0.01em"
      }}>{q.q}</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        {q.opts.map(opt => {
          const isSel = selected===opt, isOk=opt===q.ans;
          let bg=C.bg, bd=`1px solid ${C.border}`, co=C.dim;
          if (showResult&&isSel&&isOk)   { bg=C.teal+"22"; bd=`1px solid ${C.teal}`; co=C.teal; }
          else if (showResult&&isSel)    { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
          else if (showResult&&isOk)     { bg=C.teal+"0e"; bd=`1px solid ${C.teal}55`; co=C.teal+"99"; }
          else if (isSel)                { bg=lv.color+"18"; bd=`1px solid ${lv.color}`; co=lv.color; }
          return (
            <button key={opt} onClick={()=>!showResult&&onSelect(q.id,opt)} style={{
              background:bg, border:bd, color:co,
              borderRadius:9, padding:"10px 13px", fontSize:14, fontWeight:600,
              cursor:showResult?"default":"pointer", textAlign:"left",
              transition:"all 0.15s", outline:"none", fontFamily:"'DM Sans',sans-serif"
            }}>
              {showResult&&isOk?"✓ ":""}{showResult&&isSel&&!isOk?"✗ ":""}{opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ScoreBadge({ score, total }) {
  const pct = Math.round((score/total)*100);
  const col = pct>=80?C.teal:pct>=60?C.gold:C.crimson;
  const msg = pct>=90?"¡Dominio sobresaliente!":pct>=70?"¡Buen trabajo!":pct>=50?"Sigue practicando":"Necesitas repasar el tema";
  return (
    <div style={{
      background:C.surface, border:`2px solid ${col}`,
      borderRadius:18, padding:"30px 36px", textAlign:"center",
      maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif"
    }}>
      <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
      <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
        <span style={{ color:C.text, fontWeight:700 }}>{score}</span> de {total} correctas
      </div>
      <div style={{ color:col, fontWeight:700, fontSize:15, marginTop:10 }}>{msg}</div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────
// shuffle helper
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
    : `${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
}

export default function SumaEnteros() {
  // mode: "menu" | "exam" | "results"
  const [mode, setMode]         = useState("menu");
  const [examMode, setExamMode] = useState(null);   // "block-N" | "all" | "random"
  const [queue, setQueue]       = useState([]);      // ordered list of questions for exam
  const [current, setCurrent]   = useState(0);
  const [answers, setAnswers]   = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(120 * 60);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all"); // results filter

  // Timer
  useEffect(() => {
    if (!timerOn || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timerOn, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0 && timerOn) { setTimerOn(false); setMode("results"); }
  }, [timeLeft, timerOn]);

  const startExam = (modeKey) => {
    let qs;
    if (modeKey === "all")    qs = shuffle(questions);
    else if (modeKey === "random") qs = shuffle(questions);
    else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.id >= LEVELS[idx].range[0] && q.id <= LEVELS[idx].range[1]));
    }
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    const mins = (modeKey === "all" || modeKey === "random") ? 120 : qs.length;
    setTimeLeft(mins * 60);
    setTimerOn(true);
    setExamMode(modeKey);
    setMode("exam");
  };

  const confirmAnswer = () => {
    if (!selected) return;
    setAnswers(p => ({ ...p, [queue[current].id]: selected }));
    setConfirmed(true);
  };

  const goNext = () => {
    if (current < queue.length - 1) {
      const nextId = queue[current + 1].id;
      setCurrent(c => c + 1);
      setSelected(answers[nextId] || null);
      setConfirmed(!!answers[nextId]);
    } else {
      setTimerOn(false);
      setMode("results");
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prevId = queue[current - 1].id;
      setCurrent(c => c - 1);
      setSelected(answers[prevId] || null);
      setConfirmed(!!answers[prevId]);
    }
  };

  const score = Object.entries(answers).reduce((acc, [id, ans]) => {
    const q = questions.find(q => q.id === Number(id));
    return acc + (q?.ans === ans ? 1 : 0);
  }, 0);

  const timerWarning = timeLeft < 600;
  const answered = Object.keys(answers).length;

  // ── MENU ────────────────────────────────────────────────────────────────
  if (mode === "menu") return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:5px;background:${C.bg}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
      `}</style>

      {/* Header */}
      <div style={{
        background:C.surface, borderBottom:`1px solid ${C.border}`,
        padding:"44px 24px 32px", textAlign:"center",
        position:"relative", overflow:"hidden"
      }}>
        <div style={{
          position:"absolute", inset:0, opacity:0.04,
          backgroundImage:`linear-gradient(${C.blue} 1px,transparent 1px),linear-gradient(90deg,${C.blue} 1px,transparent 1px)`,
          backgroundSize:"44px 44px"
        }}/>
        <div style={{ position:"relative" }}>
          <span style={{
            display:"inline-block", background:C.purple+"22", color:C.purple,
            borderRadius:99, padding:"3px 14px", fontSize:11,
            fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            marginBottom:14, fontFamily:"'DM Sans',sans-serif"
          }}>FactoRizando · Preparatoria</span>
          <h1 style={{
            fontSize:"clamp(24px,4vw,42px)", fontWeight:700, color:C.text,
            letterSpacing:"-1px", lineHeight:1.1, marginBottom:10,
            fontFamily:"'DM Sans',sans-serif"
          }}>
            Suma de <span style={{ color:C.gold }}>Números Enteros</span>
          </h1>
          <p style={{ color:C.muted, fontSize:14, maxWidth:460, margin:"0 auto 22px", fontFamily:"'DM Sans',sans-serif" }}>
            250 reactivos · 10 bloques · 120 minutos
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:36, flexWrap:"wrap", fontFamily:"'DM Sans',sans-serif" }}>
            {[{ label:"Reactivos", val:250 },{ label:"Bloques", val:"10" },{ label:"Tiempo", val:"2 h" }].map(s => (
              <div key={s.label} style={{ textAlign:"center" }}>
                <div style={{ fontSize:22, fontWeight:900, color:C.text, letterSpacing:"-1px" }}>{s.val}</div>
                <div style={{ fontSize:10, color:C.muted, fontWeight:700, textTransform:"uppercase", letterSpacing:1.2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opciones de modo */}
      <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 16px" }}>
        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:16, fontFamily:"'DM Sans',sans-serif" }}>
          Selecciona el modo
        </p>

        {/* Todas / Aleatorio */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:24 }}>
          {[
            { key:"all",    icon:"📋", label:"Todas",    sub:"250 preguntas en orden" },
            { key:"random", icon:"🔀", label:"Aleatorio", sub:"250 preguntas mezcladas" },
          ].map(({ key, icon, label, sub }) => (
            <button key={key} onClick={() => startExam(key)} style={{
              background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:14, padding:"22px 16px", cursor:"pointer",
              textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.blue; e.currentTarget.style.background = C.blue+"11"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
            >
              <div style={{ fontSize:28, marginBottom:8 }}>{icon}</div>
              <div style={{ color:C.text, fontWeight:700, fontSize:15 }}>{label}</div>
              <div style={{ color:C.muted, fontSize:12, marginTop:4 }}>{sub}</div>
            </button>
          ))}
        </div>

        {/* Bloques */}
        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:12, fontFamily:"'DM Sans',sans-serif" }}>
          O elige un bloque
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px,1fr))", gap:10 }}>
          {LEVELS.map((lv, i) => (
            <button key={i} onClick={() => startExam(`block-${i}`)} style={{
              background:C.surface, border:`1px solid ${lv.color}44`,
              borderRadius:12, padding:"14px 12px", cursor:"pointer",
              textAlign:"center", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = lv.color+"18"; e.currentTarget.style.borderColor = lv.color; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.surface; e.currentTarget.style.borderColor = lv.color+"44"; }}
            >
              <div style={{ color:lv.color, fontWeight:700, fontSize:13 }}>{lv.label}</div>
              <div style={{ color:C.muted, fontSize:11, marginTop:3 }}>
                {lv.range[1] - lv.range[0] + 1} preguntas
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if (mode === "results") {
    const total = queue.length;
    const pct   = total > 0 ? Math.round((score / total) * 100) : 0;
    const col   = pct >= 80 ? C.teal : pct >= 60 ? C.gold : C.crimson;
    const msg   = pct >= 90 ? "¡Dominio sobresaliente!" : pct >= 70 ? "¡Buen trabajo!" : pct >= 50 ? "Sigue practicando" : "Necesitas repasar el tema";

    const displayQs = filter === "correct" ? queue.filter(q => answers[q.id] === q.ans)
                    : filter === "wrong"   ? queue.filter(q => answers[q.id] && answers[q.id] !== q.ans)
                    : queue;

    return (
      <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}`}</style>

        <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 16px" }}>
          <div style={{ display:"flex", gap:12, marginBottom:24, flexWrap:"wrap" }}>
            <button onClick={() => setMode("menu")} style={{
              background:C.surface, color:C.dim, border:`1px solid ${C.border}`,
              borderRadius:12, padding:"12px 28px", fontSize:14, fontWeight:600,
              fontFamily:"'DM Sans',sans-serif", cursor:"pointer"
            }}>← Menú</button>
            <button onClick={() => startExam(examMode)} style={{
              background:`linear-gradient(135deg,${C.blue},${C.purple})`,
              color:"#fff", border:"none", borderRadius:12, padding:"12px 28px",
              fontSize:14, fontWeight:700, fontFamily:"'DM Sans',sans-serif", cursor:"pointer"
            }}>↺ Repetir</button>
          </div>
          {/* Score badge */}
          <div style={{
            background:C.surface, border:`2px solid ${col}`,
            borderRadius:18, padding:"30px 36px", textAlign:"center",
            maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif"
          }}>
            <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
            <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
              <span style={{ color:C.text, fontWeight:700 }}>{score}</span> de {total} correctas
            </div>
            <div style={{ color:col, fontWeight:700, fontSize:15, marginTop:10 }}>{msg}</div>
          </div>

          {/* Filtros */}
          <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${total - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding:"6px 14px", borderRadius:99, fontSize:12, fontWeight:700,
                cursor:"pointer", border:"none", outline:"none",
                background:filter === f ? C.blue : C.surface,
                color:filter === f ? "#fff" : C.muted,
                transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif"
              }}>{label}</button>
            ))}
          </div>

          {/* Preguntas revisión */}
          {displayQs.map(q => (
            <QuestionCard key={q.id} q={q} selected={answers[q.id]} onSelect={()=>{}} showResult={true} />
          ))}


        </div>
      </div>
    );
  }

  // ── EXAM ─────────────────────────────────────────────────────────────────
  const q    = queue[current];
  const lv   = getLvl(q.id);
  const prog = ((current + 1) / queue.length) * 100;

  return (
    <div style={{ minHeight:"100vh", background:C.bg, paddingBottom:64 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0}::-webkit-scrollbar{width:5px;background:${C.bg}}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}`}</style>

      <div style={{ maxWidth:760, margin:"0 auto", padding:"24px 16px" }}>

        {/* Header del examen */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:8 }}>
          <div style={{ fontFamily:"'DM Sans',sans-serif" }}>
            <span style={{ color:C.muted, fontSize:13 }}>Pregunta </span>
            <span style={{ color:C.text, fontWeight:700 }}>{current + 1}</span>
            <span style={{ color:C.muted }}> / {queue.length}</span>
            <span style={{ color:C.muted, fontSize:12, marginLeft:10 }}>({answered} respondidas)</span>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={{
              fontSize:13, fontWeight:700,
              color:timerWarning ? C.crimson : C.blue,
              background:timerWarning ? C.crimson+"18" : C.blue+"18",
              padding:"5px 12px", borderRadius:20,
              border:`1px solid ${timerWarning ? C.crimson : C.blue}55`,
              fontFamily:"'DM Sans',sans-serif"
            }}>⏱ {fmt(timeLeft)}</span>
            <button onClick={() => { setTimerOn(false); setMode("results"); }} style={{
              padding:"5px 12px", background:C.crimson+"18", color:C.crimson,
              border:`1px solid ${C.crimson}44`, borderRadius:20,
              cursor:"pointer", fontSize:12, fontFamily:"'DM Sans',sans-serif"
            }}>Terminar</button>
          </div>
        </div>

        {/* Barra de progreso */}
        <div style={{ background:C.border, borderRadius:99, height:4, overflow:"hidden", marginBottom:20 }}>
          <div style={{
            height:"100%", width:`${prog}%`,
            background:`linear-gradient(90deg,${C.blue},${C.purple})`,
            transition:"width 0.3s", borderRadius:99
          }}/>
        </div>

        {/* Badge de nivel */}
        <div style={{ marginBottom:12 }}>
          <span style={{
            background:lv.color+"1a", color:lv.color, borderRadius:6,
            padding:"2px 10px", fontSize:10, fontWeight:700,
            letterSpacing:1.5, textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif"
          }}>{lv.label}</span>
          <span style={{ marginLeft:10, color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>#{q.id} / 250</span>
        </div>

        {/* Pregunta */}
        <div style={{
          background:C.surface, border:`1px solid ${C.border}`,
          borderRadius:14, padding:"22px 26px", marginBottom:16
        }}>
          <p style={{
            color:C.text, fontSize:17, fontWeight:600, lineHeight:1.55,
            fontFamily:"'DM Sans',sans-serif", letterSpacing:"-0.01em", margin:0
          }}>{q.q}</p>
        </div>

        {/* Opciones */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:20 }}>
          {q.opts.map(opt => {
            const isSel = selected === opt;
            const isOk  = opt === q.ans;
            let bg = C.bg, bd = `1px solid ${C.border}`, co = C.dim;
            if (confirmed && isSel && isOk)  { bg = C.teal+"22";    bd = `1px solid ${C.teal}`;    co = C.teal; }
            else if (confirmed && isSel)     { bg = C.crimson+"22"; bd = `1px solid ${C.crimson}`; co = C.crimson; }
            else if (confirmed && isOk)      { bg = C.teal+"0e";    bd = `1px solid ${C.teal}55`;  co = C.teal+"99"; }
            else if (isSel)                  { bg = lv.color+"18";  bd = `1px solid ${lv.color}`;  co = lv.color; }
            return (
              <button key={opt} onClick={() => !confirmed && setSelected(opt)} style={{
                background:bg, border:bd, color:co,
                borderRadius:9, padding:"10px 13px", fontSize:14, fontWeight:600,
                cursor:confirmed ? "default" : "pointer", textAlign:"left",
                transition:"all 0.15s", outline:"none", fontFamily:"'DM Sans',sans-serif"
              }}>
                {confirmed && isOk ? "✓ " : ""}{confirmed && isSel && !isOk ? "✗ " : ""}{opt}
              </button>
            );
          })}
        </div>

        {/* Acciones */}
        <div style={{ display:"flex", gap:10, justifyContent:"space-between", alignItems:"center" }}>
          <button onClick={goPrev} disabled={current === 0} style={{
            padding:"10px 20px", background:C.surface, color:C.muted,
            border:`1px solid ${C.border}`, borderRadius:10,
            cursor:current === 0 ? "not-allowed" : "pointer",
            opacity:current === 0 ? 0.4 : 1, fontSize:14, fontFamily:"'DM Sans',sans-serif"
          }}>← Anterior</button>

          {!confirmed ? (
            <button onClick={confirmAnswer} disabled={!selected} style={{
              padding:"10px 28px", fontSize:14, fontWeight:700,
              background:selected ? `linear-gradient(135deg,${C.blue},${C.purple})` : C.surface,
              color:selected ? "#fff" : C.muted, border:"none", borderRadius:10,
              cursor:selected ? "pointer" : "not-allowed",
              boxShadow:selected ? `0 4px 20px ${C.blue}33` : "none",
              fontFamily:"'DM Sans',sans-serif", transition:"all 0.2s"
            }}>Confirmar respuesta</button>
          ) : (
            <button onClick={goNext} style={{
              padding:"10px 28px", fontSize:14, fontWeight:700,
              background:`linear-gradient(135deg,${C.teal},${C.blue})`,
              color:"#fff", border:"none", borderRadius:10,
              cursor:"pointer", boxShadow:`0 4px 20px ${C.teal}33`,
              fontFamily:"'DM Sans',sans-serif"
            }}>
              {current === queue.length - 1 ? "Ver resultados →" : "Siguiente →"}
            </button>
          )}
        </div>

        {/* Navegador */}
        <div style={{
          marginTop:24, background:C.surface, borderRadius:12,
          padding:16, border:`1px solid ${C.border}`
        }}>
          <p style={{ color:C.muted, fontSize:11, marginBottom:10, textTransform:"uppercase", letterSpacing:1, fontFamily:"'DM Sans',sans-serif" }}>
            Navegador de reactivos
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
            {queue.map((fq, i) => {
              const ans = answers[fq.id];
              const isCurr = i === current;
              let bg = C.surface, co = C.muted;
              if (isCurr)          { bg = C.blue;           co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal+"33";  co = C.teal; }
              else if (ans)        { bg = C.crimson+"33";   co = C.crimson; }
              return (
                <button key={fq.id} onClick={() => {
                  setCurrent(i);
                  setSelected(answers[fq.id] || null);
                  setConfirmed(!!answers[fq.id]);
                }} style={{
                  width:28, height:28, borderRadius:6, background:bg, color:co,
                  border:isCurr ? `2px solid ${C.blue}` : `1px solid ${C.border}`,
                  cursor:"pointer", fontSize:11, fontWeight:isCurr ? 700 : 400,
                  fontFamily:"'DM Sans',sans-serif"
                }}>{i + 1}</button>
              );
            })}
          </div>
          <div style={{ display:"flex", gap:16, marginTop:10 }}>
            {[[C.teal+"33", C.teal, "Correcta"],[C.crimson+"33", C.crimson, "Incorrecta"],[C.surface, C.muted, "Sin contestar"]].map(([bg, co, label]) => (
              <div key={label} style={{ display:"flex", alignItems:"center", gap:5 }}>
                <div style={{ width:12, height:12, borderRadius:3, background:bg, border:`1px solid ${co}` }}/>
                <span style={{ color:C.muted, fontSize:11, fontFamily:"'DM Sans',sans-serif" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
