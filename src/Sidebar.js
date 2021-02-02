import React from 'react'
import "./Sidebar.css";
import { Avatar } from "@material-ui/core"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://wallpaperaccess.com/full/123346.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2> Soner Mezgitci</h2>
                <h4>sonermezgitci9@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stats">
                    <p> Who viewed you</p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>
                <div className="sidebar__stats">
                    <p> Views on post</p>
                    <p className="sidebar__statNumber">2,200</p>

                </div>



            </div>
            <div className="sidebar__bottom "></div>
            <p> Recent</p>
        </div>
    )
}

export default Sidebar
