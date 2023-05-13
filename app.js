/*
Bu haftaki ödevimiz, foksiyonlarin parametre olarak gecirilmesi ve Array'lerin methodlari ile ilgili olacak.

Ali günlük islerini bir listeye yazmakta ve bu listeyi her saat basi kontrol etmektedir. 
Listede, bitirilen islerin en basina "(x)" karakterlerini koymaktadir. 
Ali, bizim yazdigimiz mobile applikasyonumuzdan 3 seyi gercek zamanli olarak ögrenmek istemektedir.

1) Bitmis islerin filtrelenmesi ve gösterimi
2) Bitmemis islerin filtrelenmesi ve gösterimi
3) Islerin hepsinin bitip bitmedigi bilgisinin EVET veya HAYIR seklinde gösterilmesi.

Örnek data yapisi:
let islerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap"
, "Alisverise git", "Cocugu okuldan al"];

*/


let homeTasks = [
"Yataklari düzelt",
"(x) Evi süpür", 
"Camasirlari yika", 
"(x) Yemegi yap",
"Alisverise git",
"Cocugu okuldan al"
];



function finishedTasks(task){
  let completed = task.filter(e => e.includes("(x)"));
  return completed;
}
console.log(finishedTasks(homeTasks));




function notFinishedTasks(task){
  let notCompleted = task.filter(e => !e.includes("(x)"));
  return notCompleted;
}
console.log(notFinishedTasks(homeTasks));




function areAllTasksFinished(task){
    let completed = task.filter(e => e.includes("(x)"));
    if(completed.length === task.length){
        return "Yes";
    }
    else{
        return "No";
    }
}
console.log(areAllTasksFinished(homeTasks));