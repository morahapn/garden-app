// This app gives gardening tips based on month and season

// Object storing gardening tips by month
const tips = {
  January: "Start pruning and preparing your garden beds",
  February: "Check soil moisture levels",
};

// Function to return tip for a given month
function getTip(month) {
  // Check if the month exists in the tips object
  return tips[month] || "No tips available";
}

// Print January tip to console
console.log(getTip("January"));
