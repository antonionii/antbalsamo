import styled from "styled-components";

export const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
    padding-left: 0;
    padding-right: 0;
  }
`;