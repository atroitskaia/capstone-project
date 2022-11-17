export function normalizeDataForGraphs(timestamps, sentimentScores) {
    let aggregatedDataPoints = [];
  
    for (let i = 0; i < timestamps.length && i < sentimentScores.length; i++) {
      aggregatedDataPoints.push({ x: timestamps[i], y: sentimentScores[i] });
    }
  
    return aggregatedDataPoints;
  }