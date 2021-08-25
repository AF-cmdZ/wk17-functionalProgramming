// Return a function that encloses a given increment.
const createScoreKeeper = (increment) => score => {
    score += increment;
    return score;
};

createScoreKeeper(6, 7);

// this sets the increment
const tdScorer = createScoreKeeper(6);
// This feeds in the score
console.log(tdScorer(17));

// safetyScorer(50);
// fgScorer(45);
