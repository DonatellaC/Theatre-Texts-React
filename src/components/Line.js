import React from 'react';
import text from "../text.json";
import styled from "styled-components";



const ListStyle = styled.ul`
list-style-type: none;
padding: 30px 20px 30px 20px;
margin-top: 70px;
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
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
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