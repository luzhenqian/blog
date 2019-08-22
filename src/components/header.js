import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import InputBase from "@material-ui/core/InputBase"
import Styles from "./header.module.css"
import SearchIcon from "@material-ui/icons/Search"
import { Link } from "gatsby"

export default function PrimarySearchAppBar() {
  return (
    <div>
      <AppBar position="static" className={Styles.appBar}>
        <Toolbar>
          <Link to="/">卢振千博客</Link>
          <div className={Styles.search}>
            <div className={Styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              className={Styles.input}
              placeholder="搜索文章"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
