const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    /[A-Za-z]/.test(sampleActivity) ||
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }
  const rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  const yearsCount = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / rate;
  return Math.ceil(yearsCount);
};
