import React from "react";
import {Meteor} from "meteor/meteor";
import Paper from 'material-ui/Paper';

import FleetDataList from "./fleet-data-container";

class FleetApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <FleetDataList resourceId={Meteor.settings.public.fleetTable} />
        </Paper>
      </div>
    );
  }
}
export default FleetApp;

