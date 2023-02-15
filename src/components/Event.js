import React, {useEffect} from "react";

function Event ({date, description, start, end, title}) { 
    console.log(date, description, start, end, title)
    return (
        <div className="item">
                <div className="header">{title}</div>
                Event Date: {date}
                {description}
                Start Time: {start}
                End Time: {end}
        </div>
    )
}

export default Event;