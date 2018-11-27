var c = (ar) => ar.sort().join('') != '123456789';
function validSolution(b){
  for (var a=0; a<b.length;a++) {
    var col = (a*3)%9, lin = ~~(a/3)*3, list = [];
    for (var d=0; d<9; d++) list.push(b[lin + ~~(d/3)][col + d%3])
    if (c(b[a].slice()) || c(list.slice())) return false;
  }
  return true;
}