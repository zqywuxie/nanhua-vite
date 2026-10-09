// Transcribed from the existing chem/10006.png ordering table.
// Keep catalog codes, particle sizes, solids content and packaging aligned with the source.
const carboxyl = [
  ['CMP0600CA', '0.6'], ['CMP0600CB', '0.6'], ['CMP1001CA', '1'],
  ['CMP1001CB', '1'], ['CMP1001CC', '1'], ['CMP2015CA', '1.5'],
  ['CMP1003CA', '3'], ['CMP1003CC', '3'], ['CMP1003CD', '3'], ['CMP1005CA', '5'],
];
const streptavidin = [
  ['CMP0600SA', '0.6'], ['CMP0600SB', '0.6'], ['CMP1001SA', '1'],
  ['CMP1001SB', '1'], ['CMP1001SE', '1'], ['CMP2015SA', '1.5'],
  ['CMP1003SA', '3'], ['CMP1003SC', '3'], ['CMP1005SA', '5'],
  ['CMP1001TSA', '1'], ['CMP1001TSB', '1'], ['CMP1003TSC', '3'],
];
const tosyl = [['CMP1001TA', '1'], ['CMP1003TA', '3'], ['CMP1003TC', '3']];
function rows(entries, type, solids) {
  return entries.map(([code, size]) => ({ code, size, type, solids }));
}
export const models = [
  ...rows(carboxyl, 'Carboxyl Magnetic Beads', '2.5%'),
  ...rows(streptavidin, 'Streptavidin Magnetic Beads', '1.0%'),
  ...rows(tosyl, 'Tosyl Magnetic Beads', '2.5%'),
];
