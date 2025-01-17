var sum_to_n_a = function(n) {
  return n * (n + 1) / 2;
};

var sum_to_n_b = function(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
};

var sum_to_n_c = function(n) {
  return Array.from(Array(5), (_, index) => index + 1).reduce((x, y) => x + y, 0);
};

function test() {
  console.log("sum_to_n_a(5) = ", sum_to_n_a(5));
  console.log("sum_to_n_b(5) = ", sum_to_n_b(5));
  console.log("sum_to_n_c(5) = ", sum_to_n_c(5));
}

test();
