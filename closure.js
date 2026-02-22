function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}

let fn1 = outer();
let fn2 = outer();

fn1();
fn2();
