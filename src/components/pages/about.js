import React from 'react';
import profilePicture from '../../../static/assets/images/bio/bioPic.jpg';


export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum totam commodi natus aut debitis excepturi in exercitationem, dolorem cupiditate expedita nemo, repellat asperiores architecto animi quaerat quo tempore, rem non.
                Dolorum, consequatur doloremque? Ducimus asperiores repellat incidunt ex voluptates quos dolorum eveniet, reprehenderit nulla culpa est quod rem. Dolorum harum ducimus, quam consequatur ipsam beatae vitae nihil totam consequuntur. Nam?
                Dolorem, accusantium aut vero numquam consequatur facere accusamus? Saepe temporibus repudiandae nulla, eius ullam delectus, suscipit deleniti cupiditate unde natus doloribus ad nisi odio, alias voluptates culpa a minus placeat!
                Cumque fugiat expedita, adipisci ipsa sed nisi? Mollitia, cupiditate dolorum? Delectus incidunt, velit officiis consequuntur harum a nemo rerum inventore nesciunt et tenetur nisi nihil, est impedit labore maxime beatae!
            </div>
        </div>
    );
}