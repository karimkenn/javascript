let booktitle = [
    "the 40 rules of power",
    "atomic habits",
    "javascript for beginners",
    "maths basics",
];
for (let i=0;i< booktitle.length; i++){
    console.log(booktitle[i]);
if (booktitle[i].includes("javascript")){
    console.log(` ${booktitle[i]} is about javascript`);
}
}
const summary = {
    totalbooks: booktitle.length,jsbookcount:0
};
for (let i=0;i< booktitle.length; i++){
    if (booktitle[i].includes ("javascript"))
        summary.jsbookcount++;
}
console.log(summary);
