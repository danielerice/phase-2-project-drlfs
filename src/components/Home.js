import React from "react";
import { Container } from "semantic-ui-react";

const homeStyle = { marginTop: `20em` }
const fontStyle = {fontSize: `1.3em`}
function Home () {
    console.log('home')
    return (
    <div>
        <Container className="ui center aligned container" style={homeStyle} >
            <div className=" ui huge header">Welcome to Kaizen Ramen!!</div>
            <img src="https://bigsee.eu/wp-content/uploads/2019/09/00_mochi.jpg" alt="Kaizen Ramen" />
            <div className="ui text container">
                <p style={fontStyle}>Kaizen Ramen is a small family owned ramen bar in the heart of Seattle. 
                    Check out the ABout page for informatioin about upcoming events. Come in and try our noodles!</p>
            </div>
        </Container>
    </div>
    );
}

export default Home;