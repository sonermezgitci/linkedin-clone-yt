import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core"

function Sidebar() {
    const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    };



    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://wallpaperaccess.com/full/123346.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2> Soner Mezgitci</h2>
                <h4>sonermezgitci9@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p> Who viewed you</p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>
                <div className="sidebar__stat">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">2,200</p>

                </div>
            </div>
            <div className="sidebar__bottom ">
                <p> Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('data')}
                {recentItem('design')}

            </div>
        </div>
    )
}

export default Sidebar
