import React from 'react';

export default class HelpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      htmlContent: 'Fetching help content...'
    };
  }

  render() {
    var width = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

    var helpStyle = {
      width: width,
      margin: '2px',
      padding: '5px',
      borderWidth: '1px',
      borderRadius: '5px',
      borderColor: 'darkgray',
      borderStyle: 'solid',
      maxWidth: '600px'
    };

    return (
      <div style={helpStyle} dangerouslySetInnerHTML={ {__html: this.state.htmlContent} } />
    );
  }

  componentDidMount() {
    let that = this;
    fetch('./dist/help/help.html')
    .then(response => {
      if (response.status === 200) {
        return response.text();
      } else {
        return '[' + response.status + ']Error loading help content.';
      }
    }).then( content => {
      that.setState({htmlContent: content})
    });
    this.setState({htmlContent: 'Loading help content...'})
  }
};

