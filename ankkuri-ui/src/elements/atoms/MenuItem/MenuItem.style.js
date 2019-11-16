import styled from "styled-components";
const MenuItemWrapper = styled.li`
  display: inline-block;
  margin: 0 10px;
  padding: 0 20px;

  &:last-child {
    padding-right: 0;
  }

  .menuItem-link {
    font-family: ${({ theme }) => theme.text.bodyFont};
    text-decoration: none;
    text-transform: lowercase;
    font-size: 20px;

    &.active {
      color: #e6a444;
    }
  }
`;

export { MenuItemWrapper };
