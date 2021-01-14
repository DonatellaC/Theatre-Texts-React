import React from 'react';
import text from "./text.json";
import styled from "styled-components";

const ListTheatre = styled.li`
  color: white;
  padding-top: 10px;
  text-align: justify;
`;

const ListStyle = styled.ul`
list-style-type: none;
padding: 60px 20px 30px 20px;
font-size: 1.5rem;
letter-spacing: 1px;

 @media (min-width: 768px) and (max-width: 820px){ 
    font-size: 2rem;
  }

 @media (min-width: 1024px) and (max-width: 1030px) { 
    font-size: 2.5rem;
  }

`;


const theatreText = text;

function Line() {

    return (
        <div>
            <ListStyle>
                {/* Map - json file */}
                {
                    theatreText.map((text, i) => {
                        return(
                            <div key={i}>
                                <ListTheatre>{text}</ListTheatre>
                            </div>
                        )
                    }
                )}
            </ListStyle>
        </div>
    )
}

export default Line;