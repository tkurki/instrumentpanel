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
    //console.log("notification streamBundle update");
    return value;
  }.bind(this))
  class NotificationComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        x: 10,
        clientX: 0
      };
    }

    handleEvent(event) {
      event.preventDefault();
      const clientX = event.clientX;
      if (event.type === 'mousedown') {
        this.setState({clientX: clientX})
      } else if (event.buttons > 0) {
        var newX = this.state.x + clientX - this.state.clientX;
        this.setState({x: newX, clientX: clientX})
      }
    }

    componentDidMount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      this.unsubscribe = this.props.notificationStream.getStreamForSourcePath(this.props.options.sourceId, this.props.options.path).onValue(function(value) {
        this.setState({count: this.state.count+1});
        //console.log("notificationStream count update:"+this.state.count);
      }.bind(this));
    }

    componentWillUnmount() {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
    }

    render() {
      return (
        <div className="notification">{this.props.options.sourceId} | {this.props.options.label} | {this.props.notification.value.message}
        <p className="notification">{this.props.notification.value.state} | {this.props.notification.value.level} | {this.props.notification.value.timestamp}</p>
        </div>
      );
    }

    render2() {
      return (
        <svg key={id} height="100%" width="100%" viewBox="0 0 640 40" preserveAspectRatio="none" onMouseMove={this.handleEvent} onMouseDown={this.handleEvent}>
          <text x="10" y="6" textAnchor="start" fontSize="6" dominantBaseline="middle">
            {this.props.options.label}
          </text>
          <text x="10" y="37" textAnchor="start" fontSize="4" dominantBaseline="middle">
            {this.props.options.sourceId}
          </text>
          <text x={this.state.x} textAnchor="start" y="25" fontSize="13" dominantBaseline="middle">
            {this.state.message}
          </text>
        </svg>
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
  return {h:1, w:10};
}


module.exports = {
  constructor: Notification,
  type: "notification",
  paths: ['notifications.*']
}
