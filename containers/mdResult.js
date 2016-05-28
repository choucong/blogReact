import React from 'react'
import { connect } from 'react-redux'
import { mdResult } from '../components/component'
import pushChange from '../action'

const mapStatetoProps = function(state) {
  return {
    content: state.mdContent
  }
};
const mapDispatchToProps = function(dispatch) {
  return {}
};

var MdResult = connect(mapStatetoProps, mapDispatchToProps)(mdResult);

export default MdResult
