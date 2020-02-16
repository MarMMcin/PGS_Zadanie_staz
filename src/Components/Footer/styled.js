import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 40px;
  height: 66px;
  width: 100vw;
  background-color: #333;
`;
export const FooterText = styled.p`
  display: flex;

  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  margin-top: 20px;

  :before,
  :after {
    content: "";
    flex: 1 0 20px;
    border-top: 1px solid;
    margin: 0 20px 0 0;
    width: 60px;
  }

  :after {
    margin: 0 0 0 20px;
  }
`;
export const InscriptionContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
