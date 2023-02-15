import React, {useEffect} from "react";
import { Container, Form } from "semantic-ui-react";


const itemStyle = { marginTop: `1.4em` }

const pStyle = { fontSize: `1em` }

const aboutStyle = {
    marginTop: `20em`,
    fonstSize: `6em`
}

const listStyle = {
    marginTop: `4em`,
    }



function About ({events, setEvents}) {
console.log(events)
    return (
        <div>
        <Container className="ui center aligned container" style={aboutStyle} >
        <div className=" ui huge header">Events:</div>
        <div style={listStyle} class="ui list">
            {events.map((event) => {
              return  (<div className="item" style={itemStyle}>
                    <div className="header">{event.title}</div>
                    <p style={pStyle}>Event Date: {event.date}</p>
                    <p style={pStyle}>{event.description}</p>
                    <p style={pStyle}>Start Time: {event.start}</p>
                    <p style={pStyle}>End Time: {event.end}</p>
                </div>)
                })}
        </div>
        </Container>
        </div>
    );
}

export default About;