// Garden Advice App
// This app gives gardening tips based on the month and season

// List of gardening tips by month
const monthTips = {
  January: "Start pruning and preparing your garden beds",
  February: "Check soil moisture levels",
};

// Returns gardening advice for a given month
function getMonthTip(month) {
  if (!monthTips[month]) {
    return "Please enter a valid month";
  }

  return monthTips[month];
}

// List of gardening tips by season
const seasonTips = {
  Summer: "Water plants early in the morning",
  Winter: "Protect plants from frost",
};

// Returns gardening advice for a given season
function getSeasonTip(season) {
  if (!seasonTips[season]) {
    return "Please enter a valid season";
  }

  return seasonTips[season];
}

// Example usage
console.log(getMonthTip("January"));
console.log(getMonthTip("March")); // invalid month
console.log(getSeasonTip("Summer"));
console.log(getSeasonTip("Rainy")); // invalid season
