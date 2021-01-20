import React from 'react';
import text from "../text.json";
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


 @media (min-width: 768px) and (max-width: 820px){ 
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

const Button = styled.button`
  background-color: transparent;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid white;
  outline: 0;
  text-transform: uppercase;
  margin: 50px 5px 0 5px;
  cursor: pointer;
  display: flex;
  width: 100px;
  justify-content: center;
`;

// **** END - Styled components ****

let theatreText = text;


function Line(props) {  

let currentLine = 0
let quote = ""

function next () {
    if(currentLine < theatreText.length) { 
        quote = theatreText[currentLine++]  
          console.log(quote)
    }
}

function previous () {
    if(currentLine  >= 0) { 
        quote = theatreText[currentLine--]  
     console.log(quote)
    }
}


    return(
        <div>
            <ButtonTheatre>
                <Button onClick={previous}>Previous</Button>
                <Button onClick={next}>Next</Button>
            </ButtonTheatre>
            <ListStyle>
                {/* Map - json file */}
                {/* {
                    theatreText.map((text, i) => {
                        return(
                            <div key={i}>
                                <ListTheatre>{text}</ListTheatre>
                            </div>
                        )
                    }
                )} */}
                <div >
                    <ListTheatre>{quote}</ListTheatre>
                </div>  
            </ListStyle>
        </div>
           )           
}


export default Line;