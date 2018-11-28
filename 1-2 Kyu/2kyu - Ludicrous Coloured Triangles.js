const map = {"RR": "R", "BB": "B", "GG": "G", "RB": "G", "BR": "G", "BG": "R", "GB": "R", "RG": "B", "GR": "B"};
function triangle(row) {
  function step(r, i, l) {
    if (r==1) return row[i];
    var d = 3**l
    while (r <= d) d = 3**--l;
    return map[step(r-d,i, l)+step(r-d,i+d, l)];
  }
  return step(row.length, 0, ~~(Math.log(row.length-1) / Math.log(3)));
}