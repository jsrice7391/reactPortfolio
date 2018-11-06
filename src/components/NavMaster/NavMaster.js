import React from "react";
import {NavBar, NavItem} from "react-materialize";
import Navbar from "react-materialize/lib/Navbar";
import styles from  "./Top.css"

export const NavMaster = () => (
    <Navbar brand="Justin Rice" right>
        <NavItem href="/all">List</NavItem>
    </Navbar>
)

export const Hero = () => (
    <div className={styles.hero}>
        <h1>Hi my name is justin</h1> 
    </div>
)






