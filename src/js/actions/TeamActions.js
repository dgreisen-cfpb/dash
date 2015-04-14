var AppDispatcher = require('../dispatcher/AppDispatcher');
var TeamConstants = require('../constants/TeamConstants');
var common = require('../utils/common');
var _ = require('lodash');


function dispatch(action, actionType) {
  action.actionType = actionType;
  AppDispatcher.dispatch(action);
}

var TeamActions = {

  /**
   * @param  {string} text
   */
  create: function(opts) {
    var action = _.pick((opts || {}), 'teamName');
    dispatch(action, TeamConstants.TEAM_CREATE);
  },

  addMember: function(opts) {
    var action = _.pick((opts || {}), 'teamName', 'roleName', 'userId');
    dispatch(action, TeamConstants.TEAM_ADD_MEMBER);
  },
  removeMember: function(opts) {
    var action = _.pick((opts || {}), 'teamName', 'roleName', 'userId');
    dispatch(action, TeamConstants.TEAM_REMOVE_MEMBER);
  },

  addAsset: function(opts) {
    var action = _.pick((opts || {}), 'teamName', 'resourceName', 'assetData');
    dispatch(action, TeamConstants.TEAM_ADD_ASSET);
  },

  removeAsset: function(opts) {
    var action = _.pick((opts || {}), 'teamName', 'resourceName', 'assetId');
    dispatch(action, TeamConstants.TEAM_REMOVE_ASSET);
  }
};

module.exports = TeamActions;
