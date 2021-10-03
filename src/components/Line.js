import React, { useState } from "react";
import texts from "../text";
import styled from "styled-components";

// **** START - Styled components ****

const ListStyle = styled.ul`
  list-style-type: none;
  padding: 10px 20px 30px 10px;
  margin-top: 20px;
  font-size: 1.5rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;

  @media (min-width: 768px) and (max-width: 820px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) and (max-width: 1030px) {
    font-size: 2.5rem;
  }
`;

const ListTheatre = styled.li`
  color: white;
  padding-top: 10px;
  display: flex;
`;

const ButtonTheatre = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const ButtonStyle = styled.button`
  background-color: transparent;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  outline: 0;
  text-transform: uppercase;
  font-size: 1.05rem;
  margin: 50px 5px 5px 5px;
  cursor: pointer;
  display: flex;
  width: 100px;
  justify-content: center;
  &:hover {
    background-color: white;
    color: red;
    font-weight: bold;
    transform: scale(1.1);
  }
`;

const TextBackgound = styled.div`
  background-color: white;
  color: red;
  font-weight: bold;
  transform: scale(1.1);
  padding: 5px;
  border-radius: 5px;
`;

// **** END - Styled components ****

function Line() {
  const [currentLine, setCurrentLine] = useState(0);

  // Functions buttons

  const nextLine = () => {
    setCurrentLine(currentLine + 1);
    if (currentLine > texts.length - 1) {
      setCurrentLine(0);
    }
  };

  const prevLine = () => {
    setCurrentLine(currentLine - 1);
    if (currentLine < 0) {
      setCurrentLine(texts.length - 1);
    }
  };

  return (
    <div>
      <div>
        <ButtonTheatre>
          <ButtonStyle onClick={prevLine}>Previous</ButtonStyle>
          <ButtonStyle onClick={nextLine}>Next</ButtonStyle>
        </ButtonTheatre>

        <ListStyle>
          {texts.map((item, index) => (
            <ListTheatre key={index}>
              {currentLine === index ? (
                <TextBackgound>{item}</TextBackgound>
              ) : (
                item
              )}
            </ListTheatre>
          ))}
        </ListStyle>
      </div>
    </div>
  );
}

export default Line;
