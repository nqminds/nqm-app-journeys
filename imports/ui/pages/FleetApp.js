import React from "react";
import {Meteor} from "meteor/meteor";

import FleetDataList from "./fleet-data-container";

class FleetApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FleetDataList resourceId={Meteor.settings.public.fleetTable} />
      </div>
    );
  }
}
export default FleetApp;

