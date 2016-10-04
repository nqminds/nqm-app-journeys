import React from "react";
import FlatButton from "material-ui/FlatButton";
import FontIcon from "material-ui/FontIcon";

class FleetData extends React.Component {
  _onBack() {
    // Just use the browser history, as our state is maintained on the URL. 
    window.history.back();
  }
  render() {
    const styles = {
      backButton: {
        minWidth: 40
      }
    };

    // For simplicity just create a list of divs containing the stringified data.
    const list = _.map(this.props.data, function(d,i) {
      return <div key={i}>{JSON.stringify(d,null,2)}</div>
    });

    return (
      <div>
        {list}
      </div>
    );
  }
}

FleetData.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default FleetData;