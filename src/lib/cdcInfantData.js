// Official CDC 2000 LMS; previous tables preserved in docs/clinical/legacy-growth.
import { lengthBoysLMS, lengthGirlsLMS, weightInfBoysLMS, weightInfGirlsLMS, hcBoysLMS, hcGirlsLMS, wflBoysLMS, wflGirlsLMS } from './cdcOfficialLMS.js';
export { lengthBoysLMS, lengthGirlsLMS, weightInfBoysLMS, weightInfGirlsLMS, hcBoysLMS, hcGirlsLMS, wflBoysLMS, wflGirlsLMS };

// ─── Shared LMS utilities ─────────────────────────────────────────────────────
function interpolate(table, key, val) {
  if (val <= table[0][key]) return table[0];
  if (val >= table[table.length - 1][key]) return table[table.length - 1];
  for (let i = 0; i < table.length - 1; i++) {
    if (val >= table[i][key] && val <= table[i + 1][key]) {
      const frac = (val - table[i][key]) / (table[i + 1][key] - table[i][key]);
      return {
        L: table[i].L + frac * (table[i + 1].L - table[i].L),
        M: table[i].M + frac * (table[i + 1].M - table[i].M),
        S: table[i].S + frac * (table[i + 1].S - table[i].S),
      };
    }
  }
  return table[table.length - 1];
}

export function calcZScore(value, L, M, S) {
  if (Math.abs(L) < 0.0001) return Math.log(value / M) / S;
  return (Math.pow(value / M, L) - 1) / (L * S);
}

export function normCDF(z) {
  const cz = Math.max(-6, Math.min(6, z));
  const a1=0.254829592, a2=-0.284496736, a3=1.421413741, a4=-1.453152027, a5=1.061405429, p=0.3275911;
  const sign = cz >= 0 ? 1 : -1;
  const x = Math.abs(cz) / Math.sqrt(2);
  const t = 1 / (1 + p * x);
  const erf = 1 - (((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x);
  return 0.5 * (1 + sign * erf);
}

/**
 * Calculate percentile for infant growth
 * @param {'length'|'weight'|'hc'|'wfl'} type
 * @param {'M'|'F'} sex
 * @param {number} ageMOnLen (0–36) or length cm (for wfl)
 * @param {number} value
 */
export function calcInfantPercentile(type, sex, ageMOnLen, value) {
  if (!['length', 'weight', 'hc', 'wfl'].includes(type) || !['M', 'F'].includes(sex) ||
      !Number.isFinite(ageMOnLen) || !Number.isFinite(value) || value <= 0) {
    return {z: null, percentile: null};
  }
  let table;
  let key = 'age';
  if (type === 'length') table = sex === 'M' ? lengthBoysLMS : lengthGirlsLMS;
  else if (type === 'weight') table = sex === 'M' ? weightInfBoysLMS : weightInfGirlsLMS;
  else if (type === 'hc') table = sex === 'M' ? hcBoysLMS : hcGirlsLMS;
  else { table = sex === 'M' ? wflBoysLMS : wflGirlsLMS; key = 'len'; }

  if (ageMOnLen < table[0][key] || ageMOnLen > (key === 'age' ? 36 : table[table.length - 1][key])) {
    return {z: null, percentile: null};
  }
  const lms = interpolate(table, key, ageMOnLen);
  const z = calcZScore(value, lms.L, lms.M, lms.S);
  const percentile = normCDF(z) * 100;
  return { z: Math.round(z * 100) / 100, percentile: Math.round(percentile * 10) / 10 };
}

/**
 * Generate curve data for infant charts
 * @param {'length'|'weight'|'hc'} type
 * @param {'M'|'F'} sex
 * @param {number[]} percentiles
 */
export function generateInfantCurveData(type, sex, percentiles) {
  let table;
  const key = 'age';
  if (type === 'length') table = sex === 'M' ? lengthBoysLMS : lengthGirlsLMS;
  else if (type === 'weight') table = sex === 'M' ? weightInfBoysLMS : weightInfGirlsLMS;
  else table = sex === 'M' ? hcBoysLMS : hcGirlsLMS;

  const zScores = { 3:-1.881, 5:-1.645, 10:-1.282, 25:-0.674, 50:0, 75:0.674, 90:1.282, 95:1.645, 97:1.881 };

  return table.map(row => {
    const point = { age: row.age };
    percentiles.forEach(p => {
      const z = zScores[p];
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
