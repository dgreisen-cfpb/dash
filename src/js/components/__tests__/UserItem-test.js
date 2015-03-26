jest.dontMock('../UserItem.jsx');
describe('Individual user item', function() {
  var React, UserItem, TestUtils, userItem, userData;
  beforeEach(function() {
    React = require('react/addons');
    UserItem = require('../UserItem.jsx');
    TestUtils = React.addons.TestUtils;
    userData = {'team': {'_id': 'team_tools', 'name': 'tools'}};
    userItem = TestUtils.renderIntoDocument(
      <UserItem userData={userData} name='Barbara Toothsmith'/>
    );
  });
  it('should load a div', function() {
    var secondNodeInComponent = userItem.getDOMNode().childNodes[1];
    expect(secondNodeInComponent.className).toEqual('user-name');
    expect(secondNodeInComponent.textContent).toEqual('Barbara Toothsmith');
  });

  it('should trigger remove user action when clicked', function() {
    var teamActions = require('../../actions/TeamActions')
    var button = userItem.getDOMNode().childNodes[0];
    TestUtils.Simulate.click(button);

    expect(teamActions.removeUser).toBeCalled();

  });
});