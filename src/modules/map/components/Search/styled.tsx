import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 1;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
`;

export const CountryDetails = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 4px;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin-top: 8px;
  }
`;

export const Detail = styled.div<{ $isEmoji?: boolean; $lastItem?: boolean }>`
  font-size: 12px;
  color: #555;
  margin-bottom: ${(props) => !props.$lastItem && "4px"};

  /* emoji props conditions*/
  position: ${(props) => props.$isEmoji && "absolute"};
  right: ${(props) => props.$isEmoji && "15px"};
  top: ${(props) => props.$isEmoji && "0"};

  span {
    font-size: ${(props) => (props.$isEmoji ? "20px" : "inherit")};
  }
`;
