  const q = [
    { p:"How many zeros in 1001010", a:"4"},
    { p:"Who is prime minister of india", a:"narender modi"},
    { p:"What's 5*11", a:"55"},
    { p:"Who is the first person to walk on the moon?", a:"Neil Armstrong"},
    { p:"Best coding language for beginer's", a:"python"}
];

function r() {
    let s = 0;
    for (let i = 0; i < q.length; i++) {
        let u = prompt(q[i].p);
        if (u === null) {
            alert("Quiz cancelled. Goodbye!");
            return;
        }
        const nU = u.toLowerCase().trim();
        const nA = q[i].a.toLowerCase().trim();

        if (nU === nA) {
            alert("Correct! ");
            s++;
        } else {
            alert(`Wrong! The correct answer is: ${q[i].a}`);
        }
    }
    alert(`Quiz Over! Your final score is ${s} out of ${q.length}.`);
}

r();
