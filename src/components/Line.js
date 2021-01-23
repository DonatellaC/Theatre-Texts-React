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

class Line extends React.Component {
    constructor() {
        super()
        this.state = {
        currentLine: 0,
        quote : "",
        texts :text
        }
    }

  // Functions buttons
  next= () => {
    this.setState({
        currentLine: this.state.currentLine + 1,
        quote : this.state.texts[this.state.currentLine] 
    })
  }

  previous= () => {
    this.setState({
        currentLine: this.state.currentLine -1,
        quote : this.state.texts[this.state.currentLine-2] 
    })
  }


render() {
    return(
        <div>
            <ButtonTheatre>
                <Button onClick={this.previous}>Previous</Button>
                <Button onClick={this.next}>Next</Button>
            </ButtonTheatre>

            <ListStyle>
               
                <div >
                    <ListTheatre>{this.state.quote}</ListTheatre>   
                </div>  

                 {/* Map - json file */}
                 {/* <div>
                    {this.state.texts.map((text, index) => (
                      <div key={index}>
                        <ListTheatre>{text}</ListTheatre>
                      </div>                    
                    ))}
                </div> */}
            </ListStyle>
        </div>
           )           
}
}

export default Line;