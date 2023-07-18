import React from "react";

const ListItem = ({ story, onStoryClicked }) => {

    const handleClick = function () {
        onStoryClicked(story);
    }

    return (

        <div className="List-item">
        
        <li onClick={handleClick}>
        <h3>{story.title}</h3>
        <h4>Author: {story.by}</h4>
        <a href={story.url}>
        <button>Link to story</button>
        </a>
        </li>


    </div>
            
    )

}
export default ListItem;