import mediaQuery from "./mediaQuery";

export const getColumnSize = (size = 12, columns = 12, gutter = 30) => {
  const num = size / columns;
  const percentage = `${num * 100}%`;

  return `
    flex: 0 0 ${percentage};
    max-width: ${percentage};
    padding-right: ${gutter / 2}px;
    padding-left: ${gutter / 2}px;
  `;
};

export const getColumnSizeByMediaQuery = (
  size = 12,
  columns = 12,
  gutter = 30,
  mq = "small"
) => `
  @media ${mediaQuery[mq]} {
    ${getColumnSize(size, columns, gutter)}
  }
`;

export const columnXS = (size = 12, columns = 12, gutter = 30) =>
  getColumnSize(size, columns, gutter);

export const columnSM = (size = 12, columns = 12, gutter = 30) =>
  getColumnSizeByMediaQuery(size, columns, gutter, "small");

export const columnMD = (size = 12, columns = 12, gutter = 30) =>
  getColumnSizeByMediaQuery(size, columns, gutter, "medium");

export const columnLG = (size = 12, columns = 12, gutter = 30) =>
  getColumnSizeByMediaQuery(size, columns, gutter, "large");

export const columnSize = function(xs, sm, md, lg, xl) {
  return `
    ${xs ? columnXS(xs) : ""}
    ${sm ? columnSM(sm) : ""}
    ${md ? columnMD(md) : ""}
    ${lg ? columnLG(lg) : ""}
  `;
};
