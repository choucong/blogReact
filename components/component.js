import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

var markdown = React.createClass({
  handleChange: function() {
    var content = marked(this.refs.input.value);
    this.props.onChange(content);
  },
  render: function() {
    return (
      <textarea onChange={this.handleChange} defaultValue='' ref='input'/>
    )
  }
});

var mdResult = React.createClass({
  render: function() {
    var {content} = this.props;
    return (
      <div dangerouslySetInnerHTML={{
        __html: content
      }}>
      </div>
    )
  }
});

export { markdown, mdResult }
