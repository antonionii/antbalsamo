import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 1rem;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: 1280px) {
    max-width: 1200px;
    padding: 2rem 0;
  }
`;