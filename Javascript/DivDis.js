var width = $( window ).width();
console.log(width);
if(width < 1100)
{
   document.getElementById('disDiv').setAttribute('style', 'width:50%; display:none');
   document.getElementById('disDivI').setAttribute('style', 'width:50%; display:none');;
   document.getElementById('chngDiv').setAttribute('style', 'width:100%; text-align:center');
   document.getElementById('chngDivI').setAttribute('style', 'width:100%; text-align:center');
}
