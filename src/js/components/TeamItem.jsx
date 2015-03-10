var React = require('react');
var UserList = require('./UserList.jsx');
var Button = require('./Button.jsx');
var TeamActions = require('../actions/TeamActions');

var TeamItem = React.createClass({

  _addUser: function(opts) {
    TeamActions.addUser(opts);
  },

  render: function() {
    return (
      <div className="team-item">
        <h3 className="team-name">{this.props.name}</h3>
        <UserList users={this.props.users} />
        <Button href="#" label="Add User" onClick={this._addUser} />
      </div>
    )
  }

});

module.exports = TeamItem;
