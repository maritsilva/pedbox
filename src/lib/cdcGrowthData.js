// Official CDC 2000 LMS; previous tables preserved in docs/clinical/legacy-growth.
import { bmiBoysLMS, bmiGirlsLMS, heightBoysLMS, heightGirlsLMS, weightBoysLMS, weightGirlsLMS } from './cdcOfficialLMS.js';
export { bmiBoysLMS, bmiGirlsLMS, heightBoysLMS, heightGirlsLMS, weightBoysLMS, weightGirlsLMS };

/**
 * Interpolate LMS parameters for a given age in months
 */
function interpolateLMS(table, ageMonths) {
  if (ageMonths <= table[0].age) return table[0];
  if (ageMonths >= table[table.length - 1].age) return table[table.length - 1];
  for (let i = 0; i < table.length - 1; i++) {
    if (ageMonths >= table[i].age && ageMonths <= table[i + 1].age) {
      const frac = (ageMonths - table[i].age) / (table[i + 1].age - table[i].age);
      return {
        L: table[i].L + frac * (table[i + 1].L - table[i].L),
        M: table[i].M + frac * (table[i + 1].M - table[i].M),
        S: table[i].S + frac * (table[i + 1].S - table[i].S),
      };
    }
  }
  return table[table.length - 1];
}

/**
 * Compute Z-score using LMS method
 * Z = [(X/M)^L - 1] / (L*S)
 * When L ≈ 0: Z = ln(X/M) / S
 */
export function calcZScore(value, L, M, S) {
  if (Math.abs(L) < 0.0001) {
    return Math.log(value / M) / S;
  }
  return (Math.pow(value / M, L) - 1) / (L * S);
}

/**
 * Standard Normal CDF approximation (Hart 1968)
 */
export function normCDF(z) {
  const clampedZ = Math.max(-6, Math.min(6, z));
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
  const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const sign = clampedZ >= 0 ? 1 : -1;
  const x = Math.abs(clampedZ) / Math.sqrt(2);
  const t = 1.0 / (1.0 + p * x);
  const erf = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return 0.5 * (1.0 + sign * erf);
}

/**
 * Calculate percentile and z-score for BMI, Height, or Weight
 * @param {string} type - 'bmi' | 'height' | 'weight'
 * @param {string} sex - 'M' | 'F'
 * @param {number} ageMonths - age in months
 * @param {number} value - measured value
 * @returns {{ z: number, percentile: number, lms: object }}
 */
export function calcPercentile(type, sex, ageMonths, value) {
  if (!['bmi', 'height', 'weight'].includes(type) || !['M', 'F'].includes(sex) ||
      !Number.isFinite(ageMonths) || ageMonths < 24 || ageMonths > 240 ||
      !Number.isFinite(value) || value <= 0) {
    return {z: null, percentile: null, lms: null};
  }
  let table;
  if (type === 'bmi') table = sex === 'M' ? bmiBoysLMS : bmiGirlsLMS;
  else if (type === 'height') table = sex === 'M' ? heightBoysLMS : heightGirlsLMS;
  else table = sex === 'M' ? weightBoysLMS : weightGirlsLMS;

  const lms = interpolateLMS(table, ageMonths);
  const z = calcZScore(value, lms.L, lms.M, lms.S);
  const percentile = normCDF(z) * 100;
  return { z: Math.round(z * 100) / 100, percentile: Math.round(percentile * 10) / 10, lms };
}

/**
 * Generate percentile curve data for a chart
 * @param {string} type - 'bmi' | 'height' | 'weight'
 * @param {string} sex - 'M' | 'F'
 * @param {number[]} percentiles - e.g. [5, 25, 50, 75, 85, 95]
 * @returns {object[]} array of { age (years), p5, p25, p50, ... }
 */
export function generateCurveData(type, sex, percentiles) {
  let table;
  if (type === 'bmi') table = sex === 'M' ? bmiBoysLMS : bmiGirlsLMS;
  else if (type === 'height') table = sex === 'M' ? heightBoysLMS : heightGirlsLMS;
  else table = sex === 'M' ? weightBoysLMS : weightGirlsLMS;

  // Z-scores for common percentiles
  const zScores = {
    3: -1.881, 5: -1.645, 10: -1.282, 25: -0.674,
    50: 0, 75: 0.674, 85: 1.036, 90: 1.282, 95: 1.645, 97: 1.881,
  };

  return table.map(row => {
    const point = { age: row.age / 12 };
    percentiles.forEach(p => {
      const z = zScores[p];
      // Inverse LMS: X = M * (1 + L*S*z)^(1/L)
      if (Math.abs(row.L) < 0.0001) {
        point[`p${p}`] = row.M * Math.exp(row.S * z);
      } else {
        point[`p${p}`] = row.M * Math.pow(1 + row.L * row.S * z, 1 / row.L);
      }
      point[`p${p}`] = Math.round(point[`p${p}`] * 10) / 10;
    });
    return point;
  });
}

export function getBMICategory(percentile) {
  if (percentile < 5) return { label: 'Baixo Peso', color: '#3b82f6', bg: 'bg-blue-100 text-blue-800' };
  if (percentile < 85) return { label: 'Peso Saudável', color: '#22c55e', bg: 'bg-green-100 text-green-800' };
  if (percentile < 95) return { label: 'Sobrepeso', color: '#f59e0b', bg: 'bg-yellow-100 text-yellow-800' };
  return { label: 'Obesidade', color: '#ef4444', bg: 'bg-red-100 text-red-800' };
}
