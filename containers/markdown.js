import React from 'react'
import { connect } from 'react-redux'
import { markdown } from '../components/component'
import pushChange from '../action'

const mapStatetoProps = function(state) {
  return {}
};

const mapDispatchToProps = function(dispatch) {
  return {
    onChange: function(content) {
      dispatch(pushChange(content));
    }
  }
}

var Markdown = connect(mapStatetoProps, mapDispatchToProps)(markdown);

export default Markdown
