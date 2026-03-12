import { useState, useEffect } from "react";

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

const questions = [
  // ── BÁSICO I (1–30): productos de enteros positivos pequeños ──────────────
  { id:1,   q:"¿Cuánto es 3 × 4?",           opts:["10","12","14","8"],     ans:"12" },
  { id:2,   q:"¿Cuánto es 5 × 6?",           opts:["28","35","30","32"],    ans:"30" },
  { id:3,   q:"¿Cuánto es 7 × 8?",           opts:["54","56","58","52"],    ans:"56" },
  { id:4,   q:"¿Cuánto es 9 × 9?",           opts:["81","72","90","78"],    ans:"81" },
  { id:5,   q:"¿Cuánto es 6 × 7?",           opts:["40","44","42","46"],    ans:"42" },
  { id:6,   q:"¿Cuánto es 4 × 8?",           opts:["30","34","32","28"],    ans:"32" },
  { id:7,   q:"¿Cuánto es 2 × 9?",           opts:["16","20","18","22"],    ans:"18" },
  { id:8,   q:"¿Cuánto es 3 × 7?",           opts:["18","21","24","19"],    ans:"21" },
  { id:9,   q:"¿Cuánto es 5 × 5?",           opts:["20","30","25","35"],    ans:"25" },
  { id:10,  q:"¿Cuánto es 8 × 8?",           opts:["60","72","64","68"],    ans:"64" },
  { id:11,  q:"¿Cuánto es 4 × 6?",           opts:["20","22","24","26"],    ans:"24" },
  { id:12,  q:"¿Cuánto es 7 × 9?",           opts:["56","63","72","65"],    ans:"63" },
  { id:13,  q:"¿Cuánto es 2 × 6?",           opts:["10","8","14","12"],     ans:"12" },
  { id:14,  q:"¿Cuánto es 3 × 9?",           opts:["24","27","30","21"],    ans:"27" },
  { id:15,  q:"¿Cuánto es 5 × 8?",           opts:["35","40","45","42"],    ans:"40" },
  { id:16,  q:"¿Cuánto es 6 × 9?",           opts:["54","48","63","56"],    ans:"54" },
  { id:17,  q:"¿Cuánto es 4 × 7?",           opts:["24","30","28","26"],    ans:"28" },
  { id:18,  q:"¿Cuánto es 2 × 8?",           opts:["14","18","16","20"],    ans:"16" },
  { id:19,  q:"¿Cuánto es 3 × 6?",           opts:["15","18","21","24"],    ans:"18" },
  { id:20,  q:"¿Cuánto es 5 × 7?",           opts:["30","35","40","32"],    ans:"35" },
  { id:21,  q:"¿Cuánto es 8 × 9?",           opts:["63","72","81","70"],    ans:"72" },
  { id:22,  q:"¿Cuánto es 4 × 9?",           opts:["32","40","36","44"],    ans:"36" },
  { id:23,  q:"¿Cuánto es 6 × 8?",           opts:["42","50","48","54"],    ans:"48" },
  { id:24,  q:"¿Cuánto es 2 × 7?",           opts:["12","16","14","10"],    ans:"14" },
  { id:25,  q:"¿Cuánto es 3 × 8?",           opts:["18","24","30","22"],    ans:"24" },
  { id:26,  q:"¿Cuánto es 1 × 9?",           opts:["0","9","18","1"],       ans:"9" },
  { id:27,  q:"¿Cuánto es 2 × 5?",           opts:["8","12","10","7"],      ans:"10" },
  { id:28,  q:"¿Cuánto es 4 × 5?",           opts:["16","20","24","18"],    ans:"20" },
  { id:29,  q:"¿Cuánto es 6 × 6?",           opts:["30","42","36","48"],    ans:"36" },
  { id:30,  q:"¿Cuánto es 7 × 7?",           opts:["42","56","49","63"],    ans:"49" },

  // ── BÁSICO II (31–60): un factor negativo ────────────────────────────────
  { id:31,  q:"¿Cuánto es (−3) × 4?",        opts:["12","−12","7","−7"],    ans:"−12" },
  { id:32,  q:"¿Cuánto es (−5) × 6?",        opts:["30","−1","−30","11"],   ans:"−30" },
  { id:33,  q:"¿Cuánto es 7 × (−8)?",        opts:["−56","56","−1","15"],   ans:"−56" },
  { id:34,  q:"¿Cuánto es (−9) × 9?",        opts:["81","0","−81","−18"],   ans:"−81" },
  { id:35,  q:"¿Cuánto es 6 × (−7)?",        opts:["42","−42","−13","13"],  ans:"−42" },
  { id:36,  q:"¿Cuánto es (−4) × 8?",        opts:["32","−32","−12","12"],  ans:"−32" },
  { id:37,  q:"¿Cuánto es 2 × (−9)?",        opts:["18","−18","−7","7"],    ans:"−18" },
  { id:38,  q:"¿Cuánto es (−3) × 7?",        opts:["21","−21","−10","10"],  ans:"−21" },
  { id:39,  q:"¿Cuánto es 5 × (−5)?",        opts:["25","−25","0","10"],    ans:"−25" },
  { id:40,  q:"¿Cuánto es (−8) × 8?",        opts:["64","−64","0","16"],    ans:"−64" },
  { id:41,  q:"¿Cuánto es (−4) × 6?",        opts:["24","−24","−10","10"],  ans:"−24" },
  { id:42,  q:"¿Cuánto es 7 × (−9)?",        opts:["63","−63","−2","16"],   ans:"−63" },
  { id:43,  q:"¿Cuánto es (−2) × 6?",        opts:["12","−12","−8","8"],    ans:"−12" },
  { id:44,  q:"¿Cuánto es 3 × (−9)?",        opts:["27","−27","−6","6"],    ans:"−27" },
  { id:45,  q:"¿Cuánto es (−5) × 8?",        opts:["40","−40","−13","3"],   ans:"−40" },
  { id:46,  q:"¿Cuánto es 6 × (−9)?",        opts:["54","−54","−15","3"],   ans:"−54" },
  { id:47,  q:"¿Cuánto es (−4) × 7?",        opts:["28","−28","−3","11"],   ans:"−28" },
  { id:48,  q:"¿Cuánto es 2 × (−8)?",        opts:["16","−16","−6","10"],   ans:"−16" },
  { id:49,  q:"¿Cuánto es (−3) × 6?",        opts:["18","−18","−9","3"],    ans:"−18" },
  { id:50,  q:"¿Cuánto es 5 × (−7)?",        opts:["35","−35","−2","12"],   ans:"−35" },
  { id:51,  q:"¿Cuánto es (−8) × 9?",        opts:["72","−72","−1","17"],   ans:"−72" },
  { id:52,  q:"¿Cuánto es (−4) × 9?",        opts:["36","−36","−5","13"],   ans:"−36" },
  { id:53,  q:"¿Cuánto es 6 × (−8)?",        opts:["48","−48","−2","14"],   ans:"−48" },
  { id:54,  q:"¿Cuánto es (−2) × 7?",        opts:["14","−14","−5","9"],    ans:"−14" },
  { id:55,  q:"¿Cuánto es 3 × (−8)?",        opts:["24","−24","−5","11"],   ans:"−24" },
  { id:56,  q:"¿Cuánto es (−1) × 9?",        opts:["9","−9","0","−1"],      ans:"−9" },
  { id:57,  q:"¿Cuánto es 2 × (−5)?",        opts:["10","−10","−3","7"],    ans:"−10" },
  { id:58,  q:"¿Cuánto es (−4) × 5?",        opts:["20","−20","−1","9"],    ans:"−20" },
  { id:59,  q:"¿Cuánto es 6 × (−6)?",        opts:["36","−36","0","12"],    ans:"−36" },
  { id:60,  q:"¿Cuánto es (−7) × 7?",        opts:["49","−49","0","14"],    ans:"−49" },

  // ── INTERMEDIO I (61–90): dos factores negativos ──────────────────────────
  { id:61,  q:"¿Cuánto es (−3) × (−4)?",     opts:["−12","12","−7","7"],    ans:"12" },
  { id:62,  q:"¿Cuánto es (−5) × (−6)?",     opts:["−30","30","−11","11"],  ans:"30" },
  { id:63,  q:"¿Cuánto es (−7) × (−8)?",     opts:["−56","56","−15","15"],  ans:"56" },
  { id:64,  q:"¿Cuánto es (−9) × (−9)?",     opts:["−81","81","−18","18"],  ans:"81" },
  { id:65,  q:"¿Cuánto es (−6) × (−7)?",     opts:["−42","42","−13","13"],  ans:"42" },
  { id:66,  q:"¿Cuánto es (−4) × (−8)?",     opts:["−32","32","−12","12"],  ans:"32" },
  { id:67,  q:"¿Cuánto es (−2) × (−9)?",     opts:["−18","18","−11","11"],  ans:"18" },
  { id:68,  q:"¿Cuánto es (−3) × (−7)?",     opts:["−21","21","−10","10"],  ans:"21" },
  { id:69,  q:"¿Cuánto es (−5) × (−5)?",     opts:["−25","25","−10","10"],  ans:"25" },
  { id:70,  q:"¿Cuánto es (−8) × (−8)?",     opts:["−64","64","−16","16"],  ans:"64" },
  { id:71,  q:"¿Cuánto es (−4) × (−6)?",     opts:["−24","24","−10","10"],  ans:"24" },
  { id:72,  q:"¿Cuánto es (−7) × (−9)?",     opts:["−63","63","−16","16"],  ans:"63" },
  { id:73,  q:"¿Cuánto es (−2) × (−6)?",     opts:["−12","12","−8","8"],    ans:"12" },
  { id:74,  q:"¿Cuánto es (−3) × (−9)?",     opts:["−27","27","−12","12"],  ans:"27" },
  { id:75,  q:"¿Cuánto es (−5) × (−8)?",     opts:["−40","40","−13","13"],  ans:"40" },
  { id:76,  q:"¿Cuánto es (−6) × (−9)?",     opts:["−54","54","−15","15"],  ans:"54" },
  { id:77,  q:"¿Cuánto es (−4) × (−7)?",     opts:["−28","28","−11","11"],  ans:"28" },
  { id:78,  q:"¿Cuánto es (−2) × (−8)?",     opts:["−16","16","−10","10"],  ans:"16" },
  { id:79,  q:"¿Cuánto es (−3) × (−6)?",     opts:["−18","18","−9","9"],    ans:"18" },
  { id:80,  q:"¿Cuánto es (−5) × (−7)?",     opts:["−35","35","−12","12"],  ans:"35" },
  { id:81,  q:"¿Cuánto es (−8) × (−9)?",     opts:["−72","72","−17","17"],  ans:"72" },
  { id:82,  q:"¿Cuánto es (−4) × (−9)?",     opts:["−36","36","−13","13"],  ans:"36" },
  { id:83,  q:"¿Cuánto es (−6) × (−8)?",     opts:["−48","48","−14","14"],  ans:"48" },
  { id:84,  q:"¿Cuánto es (−2) × (−7)?",     opts:["−14","14","−9","9"],    ans:"14" },
  { id:85,  q:"¿Cuánto es (−3) × (−8)?",     opts:["−24","24","−11","11"],  ans:"24" },
  { id:86,  q:"¿Cuánto es (−1) × (−9)?",     opts:["−9","9","−10","10"],    ans:"9" },
  { id:87,  q:"¿Cuánto es (−2) × (−5)?",     opts:["−10","10","−7","7"],    ans:"10" },
  { id:88,  q:"¿Cuánto es (−4) × (−5)?",     opts:["−20","20","−9","9"],    ans:"20" },
  { id:89,  q:"¿Cuánto es (−6) × (−6)?",     opts:["−36","36","−12","12"],  ans:"36" },
  { id:90,  q:"¿Cuánto es (−7) × (−7)?",     opts:["−49","49","−14","14"],  ans:"49" },

  // ── INTERMEDIO II (91–120): tres factores ─────────────────────────────────
  { id:91,  q:"¿Cuánto es (−2) × (−3) × 4?",   opts:["−24","24","−10","10"],  ans:"24" },
  { id:92,  q:"¿Cuánto es 2 × (−3) × (−4)?",   opts:["−24","24","−5","5"],    ans:"24" },
  { id:93,  q:"¿Cuánto es (−2) × 3 × (−4)?",   opts:["−24","24","−3","3"],    ans:"24" },
  { id:94,  q:"¿Cuánto es (−1) × (−1) × (−1)?", opts:["1","−1","0","2"],      ans:"−1" },
  { id:95,  q:"¿Cuánto es (−2) × (−2) × (−2)?", opts:["8","−8","4","−4"],     ans:"−8" },
  { id:96,  q:"¿Cuánto es 3 × (−2) × 5?",       opts:["30","−30","10","−10"], ans:"−30" },
  { id:97,  q:"¿Cuánto es (−3) × (−2) × 5?",    opts:["30","−30","10","−10"], ans:"30" },
  { id:98,  q:"¿Cuánto es (−3) × 2 × (−5)?",    opts:["30","−30","10","−10"], ans:"30" },
  { id:99,  q:"¿Cuánto es (−3) × (−2) × (−5)?", opts:["30","−30","10","−10"], ans:"−30" },
  { id:100, q:"¿Cuánto es 4 × (−2) × 3?",       opts:["24","−24","10","−10"], ans:"−24" },
  { id:101, q:"¿Cuánto es (−4) × (−2) × 3?",    opts:["24","−24","10","−10"], ans:"24" },
  { id:102, q:"¿Cuánto es (−4) × 2 × (−3)?",    opts:["24","−24","10","−10"], ans:"24" },
  { id:103, q:"¿Cuánto es (−4) × (−2) × (−3)?", opts:["24","−24","10","−10"], ans:"−24" },
  { id:104, q:"¿Cuánto es 2 × 3 × (−5)?",        opts:["30","−30","1","−1"],   ans:"−30" },
  { id:105, q:"¿Cuánto es (−2) × 3 × 5?",        opts:["30","−30","1","−1"],   ans:"−30" },
  { id:106, q:"¿Cuánto es 2 × (−3) × 5?",        opts:["30","−30","4","−4"],   ans:"−30" },
  { id:107, q:"¿Cuánto es (−1) × 5 × (−6)?",     opts:["30","−30","2","−2"],   ans:"30" },
  { id:108, q:"¿Cuánto es (−1) × (−5) × 6?",     opts:["30","−30","2","−2"],   ans:"30" },
  { id:109, q:"¿Cuánto es (−1) × (−5) × (−6)?",  opts:["30","−30","2","−2"],   ans:"−30" },
  { id:110, q:"¿Cuánto es 2 × (−4) × (−3)?",     opts:["24","−24","5","−5"],   ans:"24" },
  { id:111, q:"¿Cuánto es (−2) × 4 × 3?",        opts:["24","−24","5","−5"],   ans:"−24" },
  { id:112, q:"¿Cuánto es (−2) × (−4) × (−3)?",  opts:["24","−24","5","−5"],   ans:"−24" },
  { id:113, q:"¿Cuánto es 5 × (−2) × (−2)?",     opts:["20","−20","9","−9"],   ans:"20" },
  { id:114, q:"¿Cuánto es (−5) × 2 × (−2)?",     opts:["20","−20","9","−9"],   ans:"20" },
  { id:115, q:"¿Cuánto es (−5) × (−2) × (−2)?",  opts:["20","−20","9","−9"],   ans:"−20" },
  { id:116, q:"¿Cuánto es 3 × (−3) × (−3)?",     opts:["27","−27","0","9"],    ans:"27" },
  { id:117, q:"¿Cuánto es (−3) × 3 × (−3)?",     opts:["27","−27","0","9"],    ans:"27" },
  { id:118, q:"¿Cuánto es (−3) × (−3) × 3?",     opts:["27","−27","0","9"],    ans:"27" },
  { id:119, q:"¿Cuánto es (−3) × (−3) × (−3)?",  opts:["27","−27","0","9"],    ans:"−27" },
  { id:120, q:"¿Cuánto es (−2) × (−2) × (−5)?",  opts:["20","−20","9","−9"],   ans:"−20" },

  // ── CERO (121–125): multiplicar por cero ─────────────────────────────────
  { id:121, q:"¿Cuánto es 0 × 8?",              opts:["8","0","−8","1"],       ans:"0" },
  { id:122, q:"¿Cuánto es (−7) × 0?",           opts:["−7","0","7","−1"],      ans:"0" },
  { id:123, q:"¿Cuánto es 0 × (−15)?",          opts:["15","−15","0","1"],     ans:"0" },
  { id:124, q:"¿Cuánto es (−4) × 0 × 9?",       opts:["−36","36","0","−4"],    ans:"0" },
  { id:125, q:"¿Cuánto es 123 × 0 × (−456)?",   opts:["123","−456","0","456"], ans:"0" },

  // ── OPUESTOS (126–130): producto con opuesto ──────────────────────────────
  { id:126, q:"¿Cuánto es 5 × (−1)?",            opts:["5","−5","−1","1"],      ans:"−5" },
  { id:127, q:"¿Cuánto es (−1) × (−8)?",         opts:["−8","8","−1","1"],      ans:"8" },
  { id:128, q:"Si a = −3, ¿cuánto es a × (−a)?", opts:["9","−9","3","−3"],      ans:"−9" },
  { id:129, q:"Si a = 6, ¿cuánto es (−a) × (−a)?", opts:["−36","36","−6","6"], ans:"36" },
  { id:130, q:"¿Cuánto es (−1)³?",               opts:["1","−1","3","−3"],      ans:"−1" },

  // ── AVANZADO I (131–160): números más grandes ─────────────────────────────
  { id:131, q:"¿Cuánto es 12 × (−5)?",           opts:["60","−60","−17","17"],  ans:"−60" },
  { id:132, q:"¿Cuánto es (−15) × 4?",           opts:["60","−60","−11","11"],  ans:"−60" },
  { id:133, q:"¿Cuánto es (−11) × (−11)?",       opts:["121","−121","22","−22"],ans:"121" },
  { id:134, q:"¿Cuánto es 13 × (−7)?",           opts:["91","−91","6","−6"],    ans:"−91" },
  { id:135, q:"¿Cuánto es (−20) × (−5)?",        opts:["100","−100","15","−15"],ans:"100" },
  { id:136, q:"¿Cuánto es 25 × (−4)?",           opts:["100","−100","21","−21"],ans:"−100" },
  { id:137, q:"¿Cuánto es (−14) × 7?",           opts:["98","−98","7","−7"],    ans:"−98" },
  { id:138, q:"¿Cuánto es (−16) × (−6)?",        opts:["96","−96","10","−10"],  ans:"96" },
  { id:139, q:"¿Cuánto es 18 × (−5)?",           opts:["90","−90","13","−13"],  ans:"−90" },
  { id:140, q:"¿Cuánto es (−22) × (−4)?",        opts:["88","−88","18","−18"],  ans:"88" },
  { id:141, q:"¿Cuánto es (−30) × 3?",           opts:["90","−90","27","−27"],  ans:"−90" },
  { id:142, q:"¿Cuánto es 11 × (−12)?",          opts:["132","−132","1","−1"],  ans:"−132" },
  { id:143, q:"¿Cuánto es (−17) × (−5)?",        opts:["85","−85","12","−12"],  ans:"85" },
  { id:144, q:"¿Cuánto es 19 × (−3)?",           opts:["57","−57","16","−16"],  ans:"−57" },
  { id:145, q:"¿Cuánto es (−24) × (−4)?",        opts:["96","−96","20","−20"],  ans:"96" },
  { id:146, q:"¿Cuánto es 21 × (−5)?",           opts:["105","−105","16","−16"],ans:"−105" },
  { id:147, q:"¿Cuánto es (−13) × (−8)?",        opts:["104","−104","5","−5"],  ans:"104" },
  { id:148, q:"¿Cuánto es 15 × (−9)?",           opts:["135","−135","6","−6"],  ans:"−135" },
  { id:149, q:"¿Cuánto es (−10) × (−14)?",       opts:["140","−140","4","−4"],  ans:"140" },
  { id:150, q:"¿Cuánto es (−23) × 4?",           opts:["92","−92","19","−19"],  ans:"−92" },
  { id:151, q:"¿Cuánto es 16 × (−7)?",           opts:["112","−112","9","−9"],  ans:"−112" },
  { id:152, q:"¿Cuánto es (−18) × (−6)?",        opts:["108","−108","12","−12"],ans:"108" },
  { id:153, q:"¿Cuánto es 26 × (−3)?",           opts:["78","−78","23","−23"],  ans:"−78" },
  { id:154, q:"¿Cuánto es (−12) × (−12)?",       opts:["144","−144","0","24"],  ans:"144" },
  { id:155, q:"¿Cuánto es 32 × (−4)?",           opts:["128","−128","28","−28"],ans:"−128" },
  { id:156, q:"¿Cuánto es (−27) × (−3)?",        opts:["81","−81","24","−24"],  ans:"81" },
  { id:157, q:"¿Cuánto es 40 × (−2)?",           opts:["80","−80","38","−38"],  ans:"−80" },
  { id:158, q:"¿Cuánto es (−35) × (−2)?",        opts:["70","−70","33","−33"],  ans:"70" },
  { id:159, q:"¿Cuánto es 50 × (−3)?",           opts:["150","−150","47","−47"],ans:"−150" },
  { id:160, q:"¿Cuánto es (−45) × (−2)?",        opts:["90","−90","43","−43"],  ans:"90" },

  // ── AVANZADO II (161–190): potencias y patrones ───────────────────────────
  { id:161, q:"¿Cuánto es (−2)²?",               opts:["−4","4","−2","2"],      ans:"4" },
  { id:162, q:"¿Cuánto es (−3)²?",               opts:["−9","9","−6","6"],      ans:"9" },
  { id:163, q:"¿Cuánto es (−2)³?",               opts:["−8","8","−6","6"],      ans:"−8" },
  { id:164, q:"¿Cuánto es (−3)³?",               opts:["−27","27","−9","9"],    ans:"−27" },
  { id:165, q:"¿Cuánto es (−4)²?",               opts:["−16","16","−8","8"],    ans:"16" },
  { id:166, q:"¿Cuánto es (−5)²?",               opts:["−25","25","−10","10"],  ans:"25" },
  { id:167, q:"¿Cuánto es (−2)⁴?",               opts:["−16","16","−8","8"],    ans:"16" },
  { id:168, q:"¿Cuánto es (−2)⁵?",               opts:["−32","32","−10","10"],  ans:"−32" },
  { id:169, q:"¿Cuánto es −(3²)?",               opts:["9","−9","6","−6"],      ans:"−9" },
  { id:170, q:"¿Cuánto es −(2³)?",               opts:["8","−8","6","−6"],      ans:"−8" },
  { id:171, q:"¿Cuánto es (−1)¹⁰⁰?",            opts:["100","−100","1","−1"],  ans:"1" },
  { id:172, q:"¿Cuánto es (−1)⁹⁹?",             opts:["99","−99","1","−1"],    ans:"−1" },
  { id:173, q:"(−2)² × (−3), ¿cuánto es?",       opts:["12","−12","24","−24"],  ans:"−12" },
  { id:174, q:"(−2)³ × (−1)², ¿cuánto es?",      opts:["8","−8","16","−16"],    ans:"−8" },
  { id:175, q:"(−3)² × (−2)², ¿cuánto es?",      opts:["36","−36","18","−18"],  ans:"36" },
  { id:176, q:"(−1)⁵ × (−4)², ¿cuánto es?",      opts:["16","−16","20","−20"],  ans:"−16" },
  { id:177, q:"¿Cuánto es (−6)² ÷ (−4) × 1? (solo la multiplicación de −9 × 1)", opts:["−9","9","36","−36"], ans:"−9" },
  { id:178, q:"¿Cuánto es (−5)² × (−2)?",        opts:["50","−50","20","−20"],  ans:"−50" },
  { id:179, q:"¿Cuánto es (−4)² × (−4)?",        opts:["64","−64","16","−16"],  ans:"−64" },
  { id:180, q:"¿Cuánto es (−10)²?",              opts:["100","−100","20","−20"],ans:"100" },
  { id:181, q:"¿Cuánto es (−10)³?",              opts:["1000","−1000","100","−100"],ans:"−1000" },
  { id:182, q:"¿Cuánto es 3 × (−4)²?",           opts:["48","−48","144","−144"],ans:"48" },
  { id:183, q:"¿Cuánto es −3 × (−4)²?",          opts:["48","−48","144","−144"],ans:"−48" },
  { id:184, q:"¿Cuánto es (−2)³ × (−3)²?",       opts:["72","−72","−6","6"],    ans:"−72" },
  { id:185, q:"¿Cuánto es (−2)⁴ × (−3)?",        opts:["48","−48","16","−16"],  ans:"−48" },
  { id:186, q:"¿Cuánto es (−1)²⁰²⁵?",           opts:["2025","1","−1","0"],    ans:"−1" },
  { id:187, q:"¿Cuánto es (−1)²⁰²⁴?",           opts:["2024","1","−1","0"],    ans:"1" },
  { id:188, q:"¿Cuánto es (−5)² × 2?",           opts:["50","−50","20","−20"],  ans:"50" },
  { id:189, q:"¿Cuánto es (−3)³ × (−1)?",        opts:["27","−27","9","−9"],    ans:"27" },
  { id:190, q:"¿Cuánto es (−2)⁶?",              opts:["64","−64","12","−12"],  ans:"64" },

  // ── CONTEXTO (191–220): problemas de aplicación ───────────────────────────
  { id:191, q:"La temperatura baja 3°C cada hora. ¿Cuánto cambia en 5 horas?",
    opts:["15°C","−15°C","−8°C","8°C"], ans:"−15°C" },
  { id:192, q:"Un buzo desciende 4 m por minuto. ¿A qué profundidad está después de 6 min?",
    opts:["24 m","−24 m","−10 m","10 m"], ans:"−24 m" },
  { id:193, q:"Una empresa pierde $500 por día. ¿Cuánto pierde en 7 días?",
    opts:["$3500","−$3500","−$500","$500"], ans:"−$3500" },
  { id:194, q:"Si cada paso hacia atrás vale −2, ¿cuánto valen 8 pasos atrás?",
    opts:["16","−16","−10","10"], ans:"−16" },
  { id:195, q:"Un cohete sube 120 m/s. ¿Cuánto sube en 5 s?",
    opts:["600 m","−600 m","115 m","−115 m"], ans:"600 m" },
  { id:196, q:"La deuda de Ana aumenta $200 cada mes. ¿En cuánto cambia en 4 meses?",
    opts:["800","−800","−200","200"], ans:"−800" },
  { id:197, q:"Un auto retrocede 15 km/h. ¿Cuánto se aleja del origen en 3 h?",
    opts:["45","−45","−12","12"], ans:"−45" },
  { id:198, q:"La temperatura sube 2°C por hora. ¿Cuánto sube en 9 horas?",
    opts:["18°C","−18°C","11°C","−11°C"], ans:"18°C" },
  { id:199, q:"Un submarino baja 8 m cada 2 min. ¿A qué profundidad está a los 6 min?",
    opts:["24 m","−24 m","−14 m","14 m"], ans:"−24 m" },
  { id:200, q:"Si ganas $50 al día, ¿cuánto ganas en 10 días?",
    opts:["500","−500","60","−60"], ans:"500" },
  { id:201, q:"Pierde 3 puntos por error. Cometió 7 errores. ¿Cuántos puntos perdió?",
    opts:["21","−21","−10","10"], ans:"−21" },
  { id:202, q:"La presión aumenta 4 atm por cada 10 m de profundidad. A −30 m, ¿cuánto aumentó?",
    opts:["12 atm","−12 atm","7 atm","−7 atm"], ans:"12 atm" },
  { id:203, q:"Un proyecto avanza −5 días por semana (retraso). ¿Cuánto retrasa en 4 semanas?",
    opts:["20","−20","−1","1"], ans:"−20" },
  { id:204, q:"Cada caja pesa −3 kg (está incompleta). ¿Cuánto pesa el total de 6 cajas incompletas?",
    opts:["18","−18","−9","9"], ans:"−18" },
  { id:205, q:"Temperatura de −4°C baja el doble cada noche durante 3 noches. ¿Cuánto bajó en total?",
    opts:["24°C","−24°C","12°C","−12°C"], ans:"−24°C" },
  { id:206, q:"Un elevador baja 2 pisos por segundo. ¿Cuántos pisos baja en 8 segundos?",
    opts:["16","−16","−10","10"], ans:"−16" },
  { id:207, q:"Una cuenta bancaria disminuye $150 por semana. ¿Cuánto cambia en 6 semanas?",
    opts:["900","−900","−150","150"], ans:"−900" },
  { id:208, q:"Si correr hacia el norte es positivo, correr 5 km/h al sur por 4 h da:",
    opts:["20 km","−20 km","−1 km","1 km"], ans:"−20 km" },
  { id:209, q:"Un pozo se profundiza 7 m por semana. ¿Cuánto más profundo está en 5 semanas?",
    opts:["35 m","−35 m","12 m","−12 m"], ans:"−35 m" },
  { id:210, q:"Gana 4 puntos por acierto, 20 aciertos. ¿Cuál es su puntaje?",
    opts:["80","−80","24","−24"], ans:"80" },
  { id:211, q:"Un corredor retrocede 6 m por tropiezo, tuvo 5 tropiezos. ¿Cuánto retrocedió?",
    opts:["30","−30","−11","11"], ans:"−30" },
  { id:212, q:"La deuda crece $300 mensual. ¿Cuánto crece en 5 meses?",
    opts:["1500","−1500","305","−305"], ans:"−1500" },
  { id:213, q:"Temperatura baja 2°C por hora durante 12 horas. ¿Cuánto bajó?",
    opts:["24°C","−24°C","−10°C","10°C"], ans:"−24°C" },
  { id:214, q:"Un avión desciende 300 m por minuto durante 4 min. ¿Cuánto descendió?",
    opts:["1200 m","−1200 m","−296 m","296 m"], ans:"−1200 m" },
  { id:215, q:"Produce 15 piezas por hora con ganancia de $8 cada una en 6 horas. ¿Total ganado?",
    opts:["720","−720","90","−90"], ans:"720" },
  { id:216, q:"Pierde 12 puntos por falta. En 5 faltas, ¿cuánto pierde?",
    opts:["60","−60","−17","17"], ans:"−60" },
  { id:217, q:"Un satélite órbita a −7200 km/h relativo a la Tierra. En 3 h, ¿cuánto se 'aleja'?",
    opts:["21600","−21600","−7197","7197"], ans:"−21600" },
  { id:218, q:"Precio baja $25 por día. ¿Cuánto baja en 8 días?",
    opts:["200","−200","−17","17"], ans:"−200" },
  { id:219, q:"Cada piso subterráneo mide −3 m. ¿Qué altura representa el piso −8 (8 pisos bajo)?",
    opts:["24 m","−24 m","−11 m","11 m"], ans:"−24 m" },
  { id:220, q:"Un glotón come el doble de calorías recomendadas (−500 kcal de déficit) por 4 días. ¿Cuánto 'extra' consume?",
    opts:["2000","−2000","−496","496"], ans:"2000" },

  // ── DESAFÍO (221–250): expresiones mixtas y razonamiento ──────────────────
  { id:221, q:"Si a = −2 y b = 3, ¿cuánto es a × b?",         opts:["6","−6","1","−1"],       ans:"−6" },
  { id:222, q:"Si a = −4 y b = −5, ¿cuánto es a × b?",        opts:["20","−20","9","−9"],     ans:"20" },
  { id:223, q:"Si x = −3, ¿cuánto es x²?",                    opts:["9","−9","6","−6"],       ans:"9" },
  { id:224, q:"Si x = −3, ¿cuánto es x³?",                    opts:["27","−27","9","−9"],     ans:"−27" },
  { id:225, q:"Si a = −1 y b = −1, ¿cuánto es a² × b³?",      opts:["1","−1","2","−2"],       ans:"−1" },
  { id:226, q:"¿Cuánto es (−2) × (−3) × (−4) × (−5)?",        opts:["120","−120","24","−24"], ans:"120" },
  { id:227, q:"¿Cuánto es (−1) × (−2) × (−3) × (−4) × (−5)?",opts:["120","−120","15","−15"], ans:"−120" },
  { id:228, q:"¿Cuántos factores negativos hacen que un producto sea positivo?",
    opts:["Impares","Pares","Siempre","Nunca"], ans:"Pares" },
  { id:229, q:"El producto de (−3)⁴ es:",                     opts:["81","−81","12","−12"],   ans:"81" },
  { id:230, q:"El producto de (−3)⁵ es:",                     opts:["243","−243","15","−15"], ans:"−243" },
  { id:231, q:"¿Cuánto es (−2)³ × (−3)² × (−1)?",            opts:["72","−72","−6","6"],     ans:"72" },
  { id:232, q:"Si a × b < 0, entonces:",
    opts:["Ambos negativos","Ambos positivos","Tienen signos distintos","a = 0"],
    ans:"Tienen signos distintos" },
  { id:233, q:"Si a × b > 0, entonces:",
    opts:["Tienen el mismo signo","Tienen signos distintos","b = 0","a = 0"],
    ans:"Tienen el mismo signo" },
  { id:234, q:"¿Cuánto es (−7) × (−8) × 0 × 100?",           opts:["5600","0","−5600","1"],  ans:"0" },
  { id:235, q:"¿Cuánto es (−12) × 11?",                       opts:["132","−132","1","−1"],   ans:"−132" },
  { id:236, q:"¿Cuánto es (−15) × (−15)?",                    opts:["225","−225","30","−30"], ans:"225" },
  { id:237, q:"¿Cuánto es (−25) × 8?",                        opts:["200","−200","17","−17"], ans:"−200" },
  { id:238, q:"¿Cuánto es (−50) × (−4)?",                     opts:["200","−200","46","−46"], ans:"200" },
  { id:239, q:"Si a = −5, ¿cuánto es (−a)²?",                 opts:["25","−25","10","−10"],   ans:"25" },
  { id:240, q:"Si a = −5, ¿cuánto es −a²?",                   opts:["25","−25","10","−10"],   ans:"−25" },
  { id:241, q:"¿Cuánto es (−3) × (−4) + (−2) × 5? (primero los productos)",
    opts:["2","−2","22","−22"], ans:"2" },
  { id:242, q:"¿Cuánto es 2 × (−6) + (−3) × (−4)?",          opts:["0","−24","24","−12"],    ans:"0" },
  { id:243, q:"¿Cuánto es (−5) × 3 − (−2) × (−7)?",          opts:["−1","1","−29","29"],     ans:"−29" },
  { id:244, q:"¿Cuánto es (−4)² − (−2)³?",                   opts:["24","−24","8","−8"],     ans:"24" },
  { id:245, q:"¿Cuánto es 3 × (−2)² − 2 × (−3)²?",           opts:["−6","6","−30","30"],     ans:"−6" },
  { id:246, q:"¿Cuánto es (−1)¹ + (−1)² + (−1)³ + (−1)⁴?",  opts:["0","4","−4","2"],        ans:"0" },
  { id:247, q:"¿Cuánto factores negativos tiene (−a)⁶ si a > 0?",
    opts:["6 — siempre positivo","0","3","1"], ans:"6 — siempre positivo" },
  { id:248, q:"¿Cuánto es (−100) × (−1)?",                   opts:["100","−100","−101","101"],ans:"100" },
  { id:249, q:"¿Cuánto es (−1)¹ × (−1)² × (−1)³?",          opts:["1","−1","3","−3"],       ans:"−1" },
  { id:250, q:"¿Cuánto es (−2) × (−3) × (−4) × (−5) × (−6)?",opts:["720","−720","360","−360"],ans:"−720" },
];

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
        lineHeight:1.55, fontFamily:"'DM Sans',sans-serif"
      }}>{q.q}</p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
        {q.opts.map(opt => {
          const isSel = selected===opt, isOk=opt===q.ans;
          let bg=C.bg, bd=`1px solid ${C.border}`, co=C.dim;
          if (showResult&&isSel&&isOk)   { bg=C.teal+"22";    bd=`1px solid ${C.teal}`;    co=C.teal; }
          else if (showResult&&isSel)    { bg=C.crimson+"22"; bd=`1px solid ${C.crimson}`; co=C.crimson; }
          else if (showResult&&isOk)     { bg=C.teal+"0e";    bd=`1px solid ${C.teal}55`;  co=C.teal+"99"; }
          else if (isSel)                { bg=lv.color+"18";  bd=`1px solid ${lv.color}`;  co=lv.color; }
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

export default function ProductoEnteros() {
  const [mode, setMode]           = useState("menu");
  const [examMode, setExamMode]   = useState(null);
  const [queue, setQueue]         = useState([]);
  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({});
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected]   = useState(null);
  const [timeLeft, setTimeLeft]   = useState(120 * 60);
  const [timerOn, setTimerOn]     = useState(false);
  const [filter, setFilter]       = useState("all");

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
    if (modeKey === "all")         qs = shuffle(questions);
    else if (modeKey === "random") qs = shuffle(questions);
    else {
      const idx = parseInt(modeKey.replace("block-", ""), 10);
      qs = shuffle(questions.filter(q => q.id >= LEVELS[idx].range[0] && q.id <= LEVELS[idx].range[1]));
    }
    const mins = (modeKey === "all" || modeKey === "random") ? 120 : qs.length;
    setQueue(qs);
    setAnswers({});
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
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
            display:"inline-block", background:C.gold+"22", color:C.gold,
            borderRadius:99, padding:"3px 14px", fontSize:11,
            fontWeight:700, letterSpacing:2, textTransform:"uppercase",
            marginBottom:14, fontFamily:"'DM Sans',sans-serif"
          }}>FactoRizando · Secundaria</span>
          <h1 style={{
            fontSize:"clamp(24px,4vw,42px)", fontWeight:700, color:C.text,
            letterSpacing:"-1px", lineHeight:1.1, marginBottom:10,
            fontFamily:"'DM Sans',sans-serif"
          }}>
            Producto de{" "}
            <span style={{ color:C.gold }}>Números Enteros</span>
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

      <div style={{ maxWidth:760, margin:"0 auto", padding:"32px 16px" }}>
        <p style={{ color:C.muted, fontSize:11, fontWeight:700, letterSpacing:2, textTransform:"uppercase", marginBottom:16, fontFamily:"'DM Sans',sans-serif" }}>
          Selecciona el modo
        </p>
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
          <div style={{
            background:C.surface, border:`2px solid ${col}`,
            borderRadius:18, padding:"30px 36px", textAlign:"center",
            maxWidth:380, margin:"0 auto 32px", fontFamily:"'DM Sans',sans-serif"
          }}>
            <div style={{ fontSize:58, fontWeight:900, color:col, letterSpacing:"-3px", lineHeight:1 }}>{pct}%</div>
            <div style={{ color:C.dim, fontSize:14, marginTop:8 }}>
              <span style={{ color:C.text, fontWeight:700 }}>{score}</span> de {queue.length} correctas
            </div>
            <div style={{ color:col, fontWeight:700, fontSize:15, marginTop:10 }}>{msg}</div>
          </div>
          <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
            {[["all","Todas"],["correct",`✓ Correctas (${score})`],["wrong",`✗ Incorrectas (${queue.length - score})`]].map(([f, label]) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                padding:"6px 14px", borderRadius:99, fontSize:12, fontWeight:700,
                cursor:"pointer", border:"none", outline:"none",
                background:filter === f ? C.blue : C.surface,
                color:filter === f ? "#fff" : C.muted,
                transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif"
              }}>{label}</button>
            ))}
          </div>
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

        <div style={{ background:C.border, borderRadius:99, height:4, overflow:"hidden", marginBottom:20 }}>
          <div style={{
            height:"100%", width:`${prog}%`,
            background:`linear-gradient(90deg,${C.blue},${C.purple})`,
            transition:"width 0.3s", borderRadius:99
          }}/>
        </div>

        <div style={{ marginBottom:12 }}>
          <span style={{
            background:lv.color+"1a", color:lv.color, borderRadius:6,
            padding:"2px 10px", fontSize:10, fontWeight:700,
            letterSpacing:1.5, textTransform:"uppercase", fontFamily:"'DM Sans',sans-serif"
          }}>{lv.label}</span>
          <span style={{ marginLeft:10, color:C.muted, fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>#{q.id} / 250</span>
        </div>

        <div style={{
          background:C.surface, border:`1px solid ${C.border}`,
          borderRadius:14, padding:"22px 26px", marginBottom:16
        }}>
          <p style={{
            color:C.text, fontSize:17, fontWeight:600, lineHeight:1.55,
            fontFamily:"'DM Sans',sans-serif", margin:0
          }}>{q.q}</p>
        </div>

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
              if (isCurr)              { bg = C.blue;          co = "#fff"; }
              else if (ans === fq.ans) { bg = C.teal+"33";     co = C.teal; }
              else if (ans)            { bg = C.crimson+"33";  co = C.crimson; }
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
