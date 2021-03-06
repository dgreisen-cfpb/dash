var React = require('react');
var ReactTypeahead = require('../../../node_modules/react-typeahead/src/react-typeahead');
var Icon = require('./Icon.jsx');
var Button = require('./Button.jsx');
var TeamActions = require('../actions/TeamActions');
var _ = require('lodash');

var RemoveAsset = React.createClass({
  getInitialState: function() {
    return {
      isConfirming: false
    }
  },
  handleConfirm: function() {
    this.setState({isConfirming: true});
  },
  handleCancel: function() {
    this.setState({isConfirming: false});
  },
  handleRemove: function(e) {
    TeamActions.removeAsset({
      id: this.props.teamName,
      resourceName: this.props.resourceName,
      assetId: this.props.assetId
    });

  },
  render: function() {
    if (this.state.isConfirming) {
      return (
        <span className='remove-asset'>
          <span>Are you sure?</span>
          <ul>
            <li onClick={this.handleRemove}>Yes</li>
            <li onClick={this.handleCancel}>No</li>
          </ul>
        </span>
      )
    } else {
      return (
        <span className='remove-asset'>
          <Icon type={['minus-round', 'action']} color='red' onClick={this.handleConfirm} />
        </span>
      );
    }
  }
});

module.exports = RemoveAsset;
