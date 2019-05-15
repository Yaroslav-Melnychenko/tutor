import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { FaUserCog } from 'react-icons/fa';
import './Header.scss';

class Header extends Component {

  logOut =() => {
    this.props.logOut();
  }

  render() {

    const { classes } = this.props;
    const { tutorInfo: { login: { userData } } } = this.props;
    console.log(this.props);

    const userLinks = (
      <div className="navbar-links">
        <span>{userData ? (
          <Chip
            avatar={
              <Avatar src="https://picsum.photos/32">
                <FaceIcon />
              </Avatar>
            }
            label={userData.firstName + ' ' + userData.lastName}
            className={classes.chip}
          />
        ) : null }</span>
        <Link to="profile" className="my-btn"><FaUserCog className="my-icon" /> Мій профіль</Link>
        <div onClick={this.logOut} className="my-btn">Вийти</div>
      </div>
    )

    const guestLinks = (
      <div className="navbar-links">
        <Link to="/login" className="my-btn">Увійти</Link>
        <Link to="/registration" className="my-btn">Зареєструватися</Link>
      </div>
    )

    return (
      <div className={`${classes.root} header`}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <Link className="logo-text" to="/">TuLancer</Link>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            {userData ? userLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Header;