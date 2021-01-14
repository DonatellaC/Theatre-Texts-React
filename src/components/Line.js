import React from 'react';
import text from "./text.json";

const theatreText = text;

function Line() {

    return (
        <div>
            <ul>
                {/* Map - json file */}
                {
                    theatreText.map((text, i) => {
                        return(
                            <div key={i}>
                                <li>{text}</li>
                            </div>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default Line