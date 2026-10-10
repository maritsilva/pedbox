// CDC 2000 Growth Chart LMS parameters (simplified key ages)
// Source: CDC/NCHS National Health and Nutrition Examination Survey
// L = Box-Cox power, M = median, S = coefficient of variation
// Age in months

// BMI-for-age: Boys
export const bmiBoysLMS = [
  {age:24,L:-1.7838,M:16.2928,S:0.0855},{age:25,L:-1.8001,M:16.2338,S:0.0859},{age:26,L:-1.8139,M:16.1791,S:0.0862},
  {age:27,L:-1.825,M:16.1285,S:0.0866},{age:28,L:-1.8342,M:16.082,S:0.087},{age:29,L:-1.8411,M:16.0395,S:0.0873},
  {age:30,L:-1.8461,M:16.0007,S:0.0877},{age:31,L:-1.8496,M:15.9656,S:0.088},{age:32,L:-1.8515,M:15.9341,S:0.0883},
  {age:33,L:-1.8522,M:15.9059,S:0.0887},{age:34,L:-1.8518,M:15.8809,S:0.089},{age:35,L:-1.8504,M:15.859,S:0.0893},
  {age:36,L:-1.8482,M:15.8399,S:0.0896},{age:42,L:-1.827,M:15.7739,S:0.091},{age:48,L:-1.7956,M:15.7571,S:0.0924},
  {age:54,L:-1.7615,M:15.7803,S:0.0935},{age:60,L:-1.7247,M:15.8385,S:0.0945},{age:66,L:-1.6874,M:15.9281,S:0.0955},
  {age:72,L:-1.6507,M:16.0453,S:0.0964},{age:78,L:-1.6149,M:16.186,S:0.0973},{age:84,L:-1.5795,M:16.3457,S:0.0981},
  {age:90,L:-1.5447,M:16.5206,S:0.0989},{age:96,L:-1.5105,M:16.7073,S:0.0997},{age:102,L:-1.4771,M:16.902,S:0.1005},
  {age:108,L:-1.4446,M:17.1016,S:0.1012},{age:114,L:-1.413,M:17.3033,S:0.1018},{age:120,L:-1.3825,M:17.5042,S:0.1024},
  {age:126,L:-1.353,M:17.7021,S:0.103},{age:132,L:-1.3243,M:17.8949,S:0.1036},{age:138,L:-1.2962,M:18.0812,S:0.1043},
  {age:144,L:-1.2685,M:18.2597,S:0.1049},{age:150,L:-1.2408,M:18.4294,S:0.1055},{age:156,L:-1.2128,M:18.5898,S:0.1062},
  {age:162,L:-1.1838,M:18.7403,S:0.1069},{age:168,L:-1.1534,M:18.8807,S:0.1077},{age:174,L:-1.1209,M:19.0108,S:0.1085},
  {age:180,L:-1.0858,M:19.1305,S:0.1094},{age:186,L:-1.0472,M:19.2401,S:0.1104},{age:192,L:-1.0044,M:19.3398,S:0.1115},
  {age:198,L:-0.9565,M:19.4303,S:0.1127},{age:204,L:-0.9025,M:19.5124,S:0.1141},{age:210,L:-0.8413,M:19.5868,S:0.1156},
  {age:216,L:-0.7716,M:19.6545,S:0.1174},{age:222,L:-0.6923,M:19.7163,S:0.1194},{age:228,L:-0.6017,M:19.773,S:0.1218},
  {age:234,L:-0.4982,M:19.8253,S:0.1245},{age:240,L:-0.38,M:19.874,S:0.1277},
];

// BMI-for-age: Girls
export const bmiGirlsLMS = [
  {age:24,L:-1.4853,M:16.0434,S:0.0873},{age:25,L:-1.5107,M:16.0024,S:0.0877},{age:26,L:-1.5364,M:15.9619,S:0.088},
  {age:27,L:-1.5624,M:15.9225,S:0.0884},{age:28,L:-1.5888,M:15.8843,S:0.0888},{age:29,L:-1.6155,M:15.8477,S:0.0891},
  {age:30,L:-1.6423,M:15.8129,S:0.0895},{age:31,L:-1.6692,M:15.7801,S:0.0898},{age:32,L:-1.696,M:15.7493,S:0.0902},
  {age:33,L:-1.7228,M:15.7207,S:0.0905},{age:34,L:-1.7494,M:15.6942,S:0.0909},{age:35,L:-1.7758,M:15.6699,S:0.0912},
  {age:36,L:-1.8018,M:15.6477,S:0.0916},{age:42,L:-1.9276,M:15.5492,S:0.093},{age:48,L:-2.0405,M:15.498,S:0.0942},
  {age:54,L:-2.1374,M:15.4937,S:0.0953},{age:60,L:-2.2134,M:15.5338,S:0.0963},{age:66,L:-2.2639,M:15.6154,S:0.0973},
  {age:72,L:-2.2845,M:15.7368,S:0.0982},{age:78,L:-2.2707,M:15.897,S:0.0991},{age:84,L:-2.2188,M:16.0966,S:0.1},
  {age:90,L:-2.1268,M:16.3385,S:0.1009},{age:96,L:-1.9935,M:16.6267,S:0.1018},{age:102,L:-1.8189,M:16.9672,S:0.1027},
  {age:108,L:-1.6044,M:17.3661,S:0.1037},{age:114,L:-1.3528,M:17.824,S:0.1047},{age:120,L:-1.0678,M:18.3364,S:0.1058},
  {age:126,L:-0.7547,M:18.8966,S:0.1069},{age:132,L:-0.4195,M:19.4961,S:0.1081},{age:138,L:-0.0693,M:20.1258,S:0.1092},
  {age:144,L:0.2906,M:20.7756,S:0.1103},{age:150,L:0.6535,M:21.4357,S:0.1113},{age:156,L:1.0127,M:22.0963,S:0.1122},
  {age:162,L:1.3603,M:22.7487,S:0.113},{age:168,L:1.6894,M:23.3848,S:0.1136},{age:174,L:1.9927,M:23.9971,S:0.1141},
  {age:180,L:2.2663,M:24.5793,S:0.1143},{age:186,L:2.5057,M:25.1268,S:0.1144},{age:192,L:2.7092,M:25.6366,S:0.1142},
  {age:198,L:2.8757,M:26.1064,S:0.1139},{age:204,L:3.0053,M:26.5352,S:0.1134},{age:210,L:3.099,M:26.9226,S:0.1128},
  {age:216,L:3.1588,M:27.2685,S:0.1121},{age:222,L:3.1868,M:27.5734,S:0.1113},{age:228,L:3.1858,M:27.8384,S:0.1105},
  {age:234,L:3.1578,M:28.0646,S:0.1097},{age:240,L:3.1054,M:28.2533,S:0.109},
];

// Height-for-age: Boys (cm)
export const heightBoysLMS = [
  {age:24,L:1,M:87.8,S:0.0379},{age:30,L:1,M:92.9,S:0.0373},{age:36,L:1,M:97.4,S:0.0368},
  {age:42,L:1,M:101.4,S:0.0366},{age:48,L:1,M:105.3,S:0.0362},{age:54,L:1,M:109.1,S:0.0357},
  {age:60,L:1,M:110.0,S:0.0406},{age:66,L:1,M:114.0,S:0.0403},{age:72,L:1,M:118.0,S:0.04},
  {age:78,L:1,M:121.7,S:0.0399},{age:84,L:1,M:125.4,S:0.0398},{age:90,L:1,M:128.9,S:0.0397},
  {age:96,L:1,M:132.2,S:0.0397},{age:102,L:1,M:135.3,S:0.0398},{age:108,L:1,M:138.4,S:0.0399},
  {age:114,L:1,M:141.5,S:0.0401},{age:120,L:1,M:144.7,S:0.0403},{age:126,L:1,M:147.9,S:0.0406},
  {age:132,L:1,M:151.1,S:0.0409},{age:138,L:1,M:154.2,S:0.0413},{age:144,L:1,M:157.1,S:0.0418},
  {age:150,L:1,M:159.8,S:0.0424},{age:156,L:1,M:162.3,S:0.0432},{age:162,L:1,M:164.6,S:0.0441},
  {age:168,L:1,M:166.6,S:0.0451},{age:174,L:1,M:168.4,S:0.0461},{age:180,L:1,M:170.0,S:0.047},
  {age:186,L:1,M:171.2,S:0.0479},{age:192,L:1,M:172.2,S:0.0486},{age:198,L:1,M:173.0,S:0.0492},
  {age:204,L:1,M:173.6,S:0.0497},{age:210,L:1,M:174.1,S:0.0501},{age:216,L:1,M:174.5,S:0.0504},
  {age:222,L:1,M:174.8,S:0.0506},{age:228,L:1,M:175.1,S:0.0508},{age:234,L:1,M:175.3,S:0.051},
  {age:240,L:1,M:175.4,S:0.0511},
];

// Height-for-age: Girls (cm)
export const heightGirlsLMS = [
  {age:24,L:1,M:86.4,S:0.0385},{age:30,L:1,M:91.4,S:0.038},{age:36,L:1,M:96.1,S:0.0374},
  {age:42,L:1,M:100.3,S:0.0371},{age:48,L:1,M:104.1,S:0.0367},{age:54,L:1,M:107.9,S:0.0364},
  {age:60,L:1,M:109.4,S:0.0406},{age:66,L:1,M:113.5,S:0.0401},{age:72,L:1,M:117.4,S:0.0398},
  {age:78,L:1,M:121.1,S:0.0396},{age:84,L:1,M:124.7,S:0.0396},{age:90,L:1,M:128.2,S:0.0396},
  {age:96,L:1,M:131.6,S:0.0397},{age:102,L:1,M:134.9,S:0.0399},{age:108,L:1,M:138.2,S:0.0402},
  {age:114,L:1,M:141.5,S:0.0405},{age:120,L:1,M:144.8,S:0.0409},{age:126,L:1,M:148.0,S:0.0413},
  {age:132,L:1,M:151.0,S:0.0418},{age:138,L:1,M:153.7,S:0.0425},{age:144,L:1,M:156.1,S:0.0432},
  {age:150,L:1,M:158.0,S:0.044},{age:156,L:1,M:159.5,S:0.0448},{age:162,L:1,M:160.7,S:0.0455},
  {age:168,L:1,M:161.6,S:0.0461},{age:174,L:1,M:162.3,S:0.0466},{age:180,L:1,M:162.7,S:0.047},
  {age:186,L:1,M:163.0,S:0.0473},{age:192,L:1,M:163.2,S:0.0476},{age:198,L:1,M:163.4,S:0.0478},
  {age:204,L:1,M:163.5,S:0.048},{age:210,L:1,M:163.6,S:0.0481},{age:216,L:1,M:163.7,S:0.0482},
  {age:222,L:1,M:163.8,S:0.0483},{age:228,L:1,M:163.8,S:0.0483},{age:234,L:1,M:163.9,S:0.0484},
  {age:240,L:1,M:163.9,S:0.0484},
];

// Weight-for-age: Boys (kg)
export const weightBoysLMS = [
  {age:24,L:-0.3521,M:12.67,S:0.1112},{age:30,L:-0.4116,M:14.01,S:0.1121},{age:36,L:-0.4564,M:15.26,S:0.1131},
  {age:42,L:-0.4975,M:16.43,S:0.1143},{age:48,L:-0.4775,M:17.58,S:0.1156},{age:54,L:-0.4564,M:18.71,S:0.117},
  {age:60,L:-0.3521,M:19.84,S:0.1186},{age:66,L:-0.3521,M:21.1,S:0.1215},{age:72,L:-0.3521,M:22.4,S:0.1245},
  {age:78,L:-0.3521,M:23.8,S:0.1279},{age:84,L:-0.3521,M:25.2,S:0.1315},{age:90,L:-0.3521,M:26.7,S:0.1353},
  {age:96,L:-0.3521,M:28.2,S:0.1392},{age:102,L:-0.3521,M:29.9,S:0.1434},{age:108,L:-0.3521,M:31.5,S:0.1478},
  {age:114,L:-0.3521,M:33.3,S:0.1523},{age:120,L:-0.3521,M:35.2,S:0.1567},{age:126,L:-0.3521,M:37.1,S:0.1609},
  {age:132,L:-0.3521,M:39.2,S:0.1649},{age:138,L:-0.3521,M:41.4,S:0.1685},{age:144,L:-0.3521,M:43.7,S:0.1717},
  {age:150,L:-0.3521,M:46.1,S:0.1745},{age:156,L:-0.3521,M:48.8,S:0.1769},{age:162,L:-0.3521,M:51.6,S:0.179},
  {age:168,L:-0.3521,M:54.4,S:0.1808},{age:174,L:-0.3521,M:57.2,S:0.1823},{age:180,L:-0.3521,M:59.9,S:0.1836},
  {age:186,L:-0.3521,M:62.3,S:0.1846},{age:192,L:-0.3521,M:64.4,S:0.1854},{age:198,L:-0.3521,M:66.4,S:0.1859},
  {age:204,L:-0.3521,M:68.0,S:0.1862},{age:210,L:-0.3521,M:69.4,S:0.1863},{age:216,L:-0.3521,M:70.6,S:0.1863},
  {age:222,L:-0.3521,M:71.6,S:0.1861},{age:228,L:-0.3521,M:72.5,S:0.1858},{age:234,L:-0.3521,M:73.3,S:0.1854},
  {age:240,L:-0.3521,M:74.0,S:0.1849},
];

// Weight-for-age: Girls (kg)
export const weightGirlsLMS = [
  {age:24,L:0.3809,M:12.13,S:0.1121},{age:30,L:0.3809,M:13.36,S:0.1127},{age:36,L:0.3809,M:14.54,S:0.1137},
  {age:42,L:0.3809,M:15.7,S:0.1149},{age:48,L:0.3809,M:16.84,S:0.1162},{age:54,L:0.3809,M:17.98,S:0.1176},
  {age:60,L:0.3809,M:19.13,S:0.1193},{age:66,L:0.3809,M:20.3,S:0.1223},{age:72,L:0.3809,M:21.5,S:0.1254},
  {age:78,L:0.3809,M:22.7,S:0.1288},{age:84,L:0.3809,M:24.0,S:0.1322},{age:90,L:0.3809,M:25.3,S:0.136},
  {age:96,L:0.3809,M:26.7,S:0.1402},{age:102,L:0.3809,M:28.2,S:0.1445},{age:108,L:0.3809,M:29.8,S:0.149},
  {age:114,L:0.3809,M:31.6,S:0.1536},{age:120,L:0.3809,M:33.5,S:0.158},{age:126,L:0.3809,M:35.5,S:0.1623},
  {age:132,L:0.3809,M:37.6,S:0.1663},{age:138,L:0.3809,M:39.7,S:0.1701},{age:144,L:0.3809,M:41.9,S:0.1736},
  {age:150,L:0.3809,M:44.2,S:0.1769},{age:156,L:0.3809,M:46.6,S:0.18},{age:162,L:0.3809,M:48.9,S:0.1827},
  {age:168,L:0.3809,M:51.1,S:0.1852},{age:174,L:0.3809,M:53.1,S:0.1874},{age:180,L:0.3809,M:54.8,S:0.1893},
  {age:186,L:0.3809,M:56.3,S:0.1908},{age:192,L:0.3809,M:57.5,S:0.1919},{age:198,L:0.3809,M:58.5,S:0.1928},
  {age:204,L:0.3809,M:59.3,S:0.1935},{age:210,L:0.3809,M:60.0,S:0.194},{age:216,L:0.3809,M:60.6,S:0.1943},
  {age:222,L:0.3809,M:61.1,S:0.1946},{age:228,L:0.3809,M:61.6,S:0.1947},{age:234,L:0.3809,M:62.0,S:0.1948},
  {age:240,L:0.3809,M:62.4,S:0.1948},
];

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