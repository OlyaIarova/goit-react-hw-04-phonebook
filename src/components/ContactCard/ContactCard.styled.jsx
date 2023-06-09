import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    margin-left: auto;
    margin-right: 16px;
    padding: 8px;
    background-color: ${p => p.theme.colors.extraLight};
    /* box-shadow: ${p => p.theme.colors.boxShadow}; */

    border: none;
    border-radius: 10px;

    :hover,
    :focus {
      color: ${p => p.theme.colors.text};
      background-color: ${p => p.theme.colors.main};
    }
  }
`;
