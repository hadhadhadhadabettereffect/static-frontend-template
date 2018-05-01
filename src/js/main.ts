function add (a: number, b: number) : number {
    return a + b;
}

document.querySelector("#main").textContent = `0.1 + 0.2 = ${add(0.1, 0.2)}`;