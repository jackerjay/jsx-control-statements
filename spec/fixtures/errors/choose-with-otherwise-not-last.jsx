﻿var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Choose>
          <Otherwise>
            Fails here!
          </Otherwise>
          <When condition={true}/>
        </Choose>
      </div>
    );
  }
});
