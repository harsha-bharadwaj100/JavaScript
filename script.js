// function bun(n) {
//     for (let num = 0; num < n; num++) {
//         console.log("Running");
//         // console.log("Done!");
//     }
// }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
    var a = 0;
    console.log("Running foo");
    // for (let num = 0; num < 5000000000; num++) {
    //     a = a+1;
    // }
    await sleep(4000);
    console.log(a);
    document.getElementById('but').innerText = "foo executed!"
    console.log("foo executed!");
}
foo();

async function fun() {
    var a = 0;
    console.log("Running fun");
    // for (let num = 0; num < 5000000000; num++) {
    //     a = a+1;
    // }
    await sleep(3000);
    console.log(a);
    document.getElementById('but').innerText = "fun executed!"
    console.log("fun executed!");
}
fun();
console.log("Hi");