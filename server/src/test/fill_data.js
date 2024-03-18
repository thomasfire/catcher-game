function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomUsername() {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";
    for (let i = 0; i < 8; i++) {
        username += chars[randomInt(0, chars.length - 1)];
    }
    return username;
}

let testData = [];

for (let i = 0; i < 200; i++) {
    let score = randomInt(-500, 1000);
    let username = randomUsername();
    let entry = [score, username];
    testData.push(entry);
}

for (const [score, username] of testData) {
    fetch("http://localhost:3000/leaderboard/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({score: score, username: username})
    }).then((res) => {
        console.info(res);
    }).catch((err) => {
        console.error(err)
    })
}