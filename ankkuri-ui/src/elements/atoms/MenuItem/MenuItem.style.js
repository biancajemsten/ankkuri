import styled from "styled-components";
export const MenuItemWrapper = styled.li`
  display: inline-block;
  margin: 0 20px;
  &:last-child {
    padding-right: 0;
  }

  .menuItem-link {
    font-family: ${({ theme }) => theme.text.bodyFont};
    text-decoration: none;
    text-transform: lowercase;
    font-size: 20px;

    &:after {
      content: "";
      position: relative;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondaryAccent};
      width: 50%;
      margin-top: 5px;
      transform: translateX(-100%);
      opacity: 0;
      display: block;
      
      transition: transform 0.5s;
    }

    &.active {
      color: ${({ theme }) => theme.colors.secondaryAccent};
      &:after {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;