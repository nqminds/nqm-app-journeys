import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
  }, {
  avatar: {
    borderColor: null,
  },
  userAgent: navigator.userAgent,
  appBar: {
    height: 50,
  },
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  page: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
};

export default class App extends Component {
  constructor(props) {
    super(props); 
  }

  handleSettingsMenu(event) {
    console.log("Settings menu");
  }

  handleLogoutMenu(event) {
    console.log("Log out menu");
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.root}>
        <AppBar
          title="NQM Fleet Management"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={
            <IconMenu
              iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" onClick = {this.handleSettingsMenu.bind(this)}/>
              <MenuItem primaryText="Log out" onClick = {this.handleLogoutMenu.bind(this)}/>
            </IconMenu>            
          }
        />
        <div style={styles.root}>
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              actAsExpander={false}
              showExpandableButton={false}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle=""
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>                    
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}