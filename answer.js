// 1
function describeValue(value) {
  const type = typeof value;
  const truth = value ? "truthy" : "falsy";
  return `${type} | ${truth}`;
}

// 2
function getDayType(day) {
  const d = String(day).trim().toLowerCase();

  if (d === "friday" || d === "saturday") return "Weekend";
  if (["sunday", "monday", "tuesday", "wednesday", "thursday"].includes(d)) {
    return "Working Day";
  }
  return "Invalid Day";
}

// 3
function validateUsername(username) {
  if (username.length < 4) return "Too Short";
  if (username.includes(" ")) return "No Space Allowed";
  if (username.toLowerCase().includes("admin")) return "Reserved Word";

  return "Available";
}

// 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) fare += (distance - 2) * 15;
  fare += waitingMinutes * 2;

  if (isNight) fare *= 1.2;

  return fare;
}

// 5
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) return "Won";
  if (ballsLeft <= 0) return "Lost";

  const rrr = (runsNeeded / ballsLeft) * 6;

  let verdict;
  if (rrr <= 6) verdict = "Comfortable";
  else if (rrr <= 12) verdict = "Tough";
  else verdict = "Almost Impossible";

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
