import React from "react";
import { useState, useEffect } from "react";
import StoryList from "../Components/StoryList";
import ListItem from "../Components/ListItem";

const Container = () => {
    
    const [ storyIDs, setStoryIDs ] = useState([])
    const [ stories, setStories] = useState([])
    const [ selectedStory, setSelectedStory] = useState(null)

    useEffect( () => {
        fetch( 'https://hacker-news.firebaseio.com/v0/topstories.json' )
        .then( res => res.json() )
        .then( data => setStoryIDs(data.slice(0,20)));
     }, [] )

    useEffect( () => {
    const storypromises = storyIDs.map((storyID)=> {
        return fetch(` https://hacker-news.firebaseio.com/v0/item/${storyID}.json `).then(res => res.json())
    }) 
    Promise.all(storypromises)
    .then((storydata) => {
        setStories(storydata)
    }) 

    }, [storyIDs])

    const onStoryClicked = function(story){
        setSelectedStory(story)
    }


return (

    <div className="main-container">
        <h1>Hacker News!</h1>
        <StoryList stories={stories} onStoryClicked={onStoryClicked}/>

    </div>
)


}


export default Container;
