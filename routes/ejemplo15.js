
function contador (cadena, letra)
{
var cont =0;
var i=0;
while (i<=cadena.length)
{
if (cadena[i]==letra )
{
cont ++; break;
}
i++;
}
return cont;
}
var frace="hola mundo";