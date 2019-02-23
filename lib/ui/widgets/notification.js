import React from 'react';
import { render } from 'react-dom';
import util from 'util'

import BaseWidget from './basewidget';

var notificationLevels = {
  "nominal": 0,
  "normal": 1,
  "alert": 2,
  "warn": 3,
  "alarm": 4,
  "emergency": 5
};

function Notification(id, options, streamBundle, instrumentPanel) {
  BaseWidget.call(this, id, options, streamBundle, instrumentPanel);
  this.options.label = this.getLabelForPath(this.options.path);
  this.notification = {};
  this.streamBundle.getStreamForSourcePath(options.sourceId, options.path).onValue(function(value) {
    if (value === null){
      value = {
        state: 'nominal',
        message: 'no alarm',
        timestamp: '-'
      }
    }
    this.notification.value = value;
    this.notification.value.level = notificationLevels[this.notification.value.state];
    this.notification.value.color = this.instrumentPanel.notificationColors[this.notification.value.level];
    this.instrumentPanel.setNotificationLevel(this.notification.value.level);
    return value;
  }.bind(this))
  class NotificationComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    componentDidMount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.unsubscribe = this.props.notificationStream.getStreamForSourcePath(this.props.options.sourceId, this.props.options.path).onValue(function(value) {
        this.setState({count: this.state.count+1});
      }.bind(this));
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      return (
        <p style={{marginLeft: '5px'}}>{this.props.notification.value.message}</p>
      );
    }
  };

  this.widget = React.createElement(NotificationComponent,{
    key: id,
    options: this.options,
    instrumentPanel: this.instrumentPanel,
    notification: this.notification,
    notificationStream: this.streamBundle
  });
}

util.inherits(Notification, BaseWidget);

Notification.prototype.getReactElement = function() {
  return this.widget;
}

Notification.prototype.getType = function() {
  return "notification";
}

Notification.prototype.getOptions = function() {
  return this.options;
}

Notification.prototype.getInitialDimensions = function() {
  return {h:2, w:100};
}


module.exports = {
  constructor: Notification,
  type: "notification",
  paths: ['notifications.*']
}
