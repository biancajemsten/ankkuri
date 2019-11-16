const baseGutter = 30;

export const row = (gutter = baseGutter) => {
  return `
    display: flex;
    flex-grow: 1;
    margin-right: -${gutter / 2}px;
    margin-left: -${gutter / 2}px;
  `;
};