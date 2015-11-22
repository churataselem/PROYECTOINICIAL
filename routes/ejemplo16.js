
function contador (cadena,letra)
{
for (var i=0,cont=0;i<cadena.length;i++)
{
if (cadena[i]==letra )
cont ++; 
}

return cont;
}
var letra = 'a';
var frace ="frace con letra";
console.log("cantidad:"+contador(frace,letra));
