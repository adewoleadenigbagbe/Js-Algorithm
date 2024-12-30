// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let aliceScoreBoard = [];
    for (let i = 0; i < alice.length; i++) {
        const element = alice[i];
        scores.push(alice[i]);

        //sort the scoreboard
        scores.sort((a, b) => { return b - a });

        let aliceIndex = scores.indexOf(alice[i]);
        let denseRankMap = createDenseRank(scores);

        //console.log(denseRankMap);
        //get the index of alice current score and push
        let currentIndex = denseRankMap.get(element);
        aliceScoreBoard.push(currentIndex);

        //remove alice current score
        scores = scores.filter((value, index) => index !== aliceIndex);

    }
    return aliceScoreBoard;
}

function createDenseRank(leaderBoard) {
    let denseRankMap = new Map();
    for (let j = 0; j < leaderBoard.length; j++) {
        let key = denseRankMap.get(leaderBoard[j]);
        if (typeof key === 'undefined') {
            denseRankMap.set(leaderBoard[j], denseRankMap.size + 1);
        }
    }
    return denseRankMap;
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10, 5], [5, 25, 50, 120])); //?

