var scoreReducer = (scores, currentFrame) => {
  var sum = 0;
  let slicedScores = Object.values(scores).slice(0, currentFrame + 1);
  for (let frame of slicedScores) {
    sum += frame[0]
    sum += frame[1]
  }
  return sum;
}

export default scoreReducer;