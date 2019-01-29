import Bacon from 'baconjs';
import BaconModel from 'bacon.model';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import RGL, { WidthProvider } from "react-grid-layout";

import InstrumentPanel from './instrumentpanel';
import IpNavBar from './navbar';
import SettingsPanel from './settings/settingspanel';
import StreamBundle from '../streambundle';

var streamBundle = new StreamBundle();
var instrumentPanel = new InstrumentPanel(streamBundle);

var model = BaconModel.Model.combine({
  isLocked: BaconModel.Model(true),
  settingsVisible: BaconModel.Model(false),
  gridSettings: instrumentPanel.gridSettingsModel
});

const ReactGridLayout = WidthProvider(RGL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.model.get();
  }

  render() {
    var wrapInDiv = function(widget, i) {

      var showToolTip = event => {
//        console.log(event.type);
if (event.currentTarget.textContent !== '') {
        event.currentTarget.style.borderStyle = 'none';
        event.currentTarget.style.width = '40px';
        event.currentTarget.textContent = '';
        event.currentTarget.style.height = '40px';
        event.currentTarget.style.backgroundColor = '';
} else {
        var sourceId = (typeof widget.reactWidget.props.options !== 'undefined') ? widget.reactWidget.props.options.sourceId : widget.reactWidget.props.sourceId;
        event.currentTarget.style.borderStyle = 'ridge';
        event.currentTarget.style.width = '100%';
        event.currentTarget.style.height = '';
        event.currentTarget.textContent = sourceId;
        event.currentTarget.style.backgroundColor = 'darkkhaki';
//        alert(sourceId)
}
      };
      return React.createElement('div', {key: widget.reactWidget.key, 'data-grid': widget.layout },
        widget.reactWidget,
        React.createElement('div', {style: {zIndex: 2, width: 40, height: 40, top: 0, right: 0, display: 'inline', position: 'fixed', borderStyle: 'none', borderRadius: 5, textAlign: 'center', backgroundColor: ''}, onClick: showToolTip})
      );
    };

    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var height = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    return (
      <div>
        <IpNavBar model={this.props.model} instrumentPanel={instrumentPanel}></IpNavBar>
        {this.state.settingsVisible ?
          <SettingsPanel instrumentPanel={instrumentPanel}></SettingsPanel> :
          <ReactGridLayout
            className="layout"
            margin= {[5, 5]}
            layout={this.state.gridSettings.layout}
            children={this.state.gridSettings.activeWidgets.map(wrapInDiv)}
            cols={Math.round(width/320*2)}
            rowHeight={50}
            isDraggable={!this.state.isLocked}
            isResizable={!this.state.isLocked}
            onLayoutChange={instrumentPanel.onLayoutChange.bind(instrumentPanel)} />}
      </div>
    );
  }

  componentDidMount() {
    var that = this;
    this.unsubscribe = this.props.model.onValue( (newState) => {
      that.setState(newState)
    });
  }

  componentWillUnmount() {
    if(this.unsubscribe) {
      this.unsubscribe();
    }
  }
};

App.propTypes = {
  model: PropTypes.object.isRequired
};

const IPversion = document.getElementById('version');
IPversion.textContent = `${VERSION}`;

var app = ReactDOM.render(<App model={model}/>, document.getElementById('content'));
