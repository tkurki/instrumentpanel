import React from 'react';
import { render } from 'react-dom';
import { Text } from '@vx/text';
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
        clientX: 0,
        width: 10
      };
      this.refCallback = this.refCallback.bind(this);
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

  refCallback(element) {
    if (element) {
//      console.log(element.getBoundingClientRect());
      this.setState({width: element.getBoundingClientRect().width});
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

    render1() {
      return (
        <div className="notification">{this.props.options.sourceId} | {this.props.options.label} | {this.props.notification.value.message}
        <p className="notification">{this.props.notification.value.state} | {this.props.notification.value.level} | {this.props.notification.value.timestamp}</p>
        </div>
      );
    }

    render2() {
      return (
        <svg key={id} height="100%" width="100%" viewBox="0 0 20 30" preserveAspectRatio="none" onMouseMove={this.handleEvent} onMouseDown={this.handleEvent}>
          <Text x="0" y="0" verticalAnchor="start" textAnchor="start" scaleToFit={false}>
            {this.props.notification.value.message}
          </Text>
        </svg>
      );
    }

    render3() {
      return (
      <svg key={id} height="100%" width="100%" ref={this.refCallback}>
        <Text x={this.state.width/2} y="5" textAnchor="middle" verticalAnchor="start" scaleToFit={false} width={this.state.width}>
          {this.props.notification.value.message}
        </Text>
      </svg>
      );
    }

    render() {
      return (
      <svg key={id} height="100%" width="100%"  viewBox="0 0 20 100">
        <Text x="50" y="5" textAnchor="middle" verticalAnchor="start" scaleToFit={false} width="100">
          {this.props.notification.value.message}
        </Text>
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
  return {h:2, w:10};
}


module.exports = {
  constructor: Notification,
  type: "notification",
  paths: ['notifications.*']
}
