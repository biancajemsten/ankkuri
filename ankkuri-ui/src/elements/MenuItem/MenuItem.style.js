import styled from "styled-components";
const MenuItemWrapper = styled.li`
  display: inline-block;
  margin: 0 10px;
  padding: 20px;

  &:last-child {
    padding-right: 0;
  }

  .menuItem-link {
    color: #4683ee;
    font-family: futura;
    text-decoration: none;
    text-transform: lowercase;

    &.active {
      color: #e6a444;
    }
  }
`;

export { MenuItemWrapper };
