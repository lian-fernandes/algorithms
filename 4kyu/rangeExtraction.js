 solution = (list) =>
   list.reduce((acc, curr, i) => {
     if (i == 0) return curr.toString();
     if (list[i - 1] == curr - 1 && list[i + 1] == curr + 1) return acc;
     if (list[i - 2] == curr - 2 && list[i - 1] == curr - 1)
       return acc + "-" + curr;
     return acc + "," + curr;
   });

 console.log(
   solution([
     -6,
     -3,
     -2,
     -1,
     0,
     1,
     3,
     4,
     5,
     7,
     8,
     9,
     10,
     11,
     14,
     15,
     17,
     18,
     19,
     20,
   ])
 );
