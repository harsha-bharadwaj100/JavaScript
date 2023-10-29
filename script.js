function bun(n) {
    for (let num = 0; num < n; num++) {
        console.log("Running");
        console.log("Done!");
    }
}

async function foo() {
    let a = bun(25000);
    console.log("foo executed!");
}

foo();