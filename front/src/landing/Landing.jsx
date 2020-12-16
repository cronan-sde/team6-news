import React from 'react';
import Button from '@material-ui/core/Button';


const Landing = (props) => {
    return (
        <div className="landing">
            <p className="news-headline">Team6-News</p>
            <Button variant="contained" className="enter" style={{backgroundColor: "#66799b", color: "#e5e3e3",}} name="hasClickedLogin" type="button" onClick={()=> {props.leaveLanding()}}>Enter</Button>
        </div>
    )
}

export default Landing;