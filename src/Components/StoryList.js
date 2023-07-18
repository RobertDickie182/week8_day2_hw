import React from "react";
import ListItem from "./ListItem";

const StoryList = ({stories, onStoryClicked}) => {
const storyItems = stories.map((story, index) => {
        return <ListItem story={story} key={index} onStoryClicked={onStoryClicked}/>
    }) 



    return (
        <div className="List">
            <ul>
                {storyItems}
            </ul>
        </div>
    )
}

export default StoryList;
