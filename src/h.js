let a=[6,2,4,5,6]
function abc(){
for (i=0;i<a.length;i++)
{
    if(a%5 !==0){
        return a
    }
}
}
console.log(abc())