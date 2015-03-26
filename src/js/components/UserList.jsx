var React = require('react');
var UserItem = require('./UserItem.jsx');

var UserList = React.createClass({

  componentWillMount: function() {

    var users = this.props.users;

    users = users.map(function(user) {
      return <UserItem userData={user} name={user.data.username} key={user.name} />;
    });
    this.setState({
      users: users
    });
  },

  render: function() {

    return (
      <div>
        <ul className="user-list">
          {this.state.users}
        </ul>
      </div>
    )

  }

});

module.exports = UserList;