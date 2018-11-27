const rom = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000},
      arr = {'1':'I','5':'V','10':'X','50':'L','100':'C','500':'D','1000':'M'};
var RomanNumerals = {
   toRoman : function(n) {
    var l = n.toString().split(''), f = '';
    for (var a=0; a<l.length; a++) {
      var n = 10**(l.length-a-1);
      if (l[a] * n>=1000) f+='M'.repeat(l[a])
      else if (l[a] < 4) f+=arr[n].repeat(l[a])
      else if (l[a] == 4) f+=arr[n]+arr[n*5]
      else if (l[a] < 9) f+=arr[n*5]+arr[n].repeat(l[a]-5)
      else f+=arr[n]+arr[10*n]
   }
   return f;
   },
   fromRoman : function(r) {
   var l = r.split(''), f = l.length==1? rom[l[0]]:0;
   for (var a=0; a<l.length-1;a++) {
     var fi = rom[l[a]], la = rom[l[a+1]]
     if (fi < la) f+= la-fi;
     else if (fi >= la && (a==0 || rom[l[a-1]] >= fi)) f += a==l.length-2?fi+la:fi;
   }
   return f;
   }
}