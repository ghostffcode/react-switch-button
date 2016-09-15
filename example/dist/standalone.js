!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.reactSwitchButton=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var SwitchButton = React.createClass( {

  // Display name
  displayName : 'Switch Button',

  // Version
  version : '1.0.4',

  /**
   * The props types.
   */
  propTypes : {
    id             : React.PropTypes.string,
    name           : React.PropTypes.string,
    title          : React.PropTypes.string,
    label          : React.PropTypes.string,
    labelRight     : React.PropTypes.string,
    defaultChecked : React.PropTypes.string,
    theme          : React.PropTypes.string,
    checked        : React.PropTypes.string,
    onChange       : React.PropTypes.func
  },


  /**
   * Default propos.
   *
   * @returns {{id: string, name: string, title: string, label: string, labelRight: string, defaultChecked: string, theme: string, checked: null, onChange: *}}
   */
  getDefaultProps : function()
  {
    return {
      id             : '',
      name           : 'switch-button',
      title          : '',
      label          : '',
      labelRight     : '',
      defaultChecked : '',
      theme          : 'rsbc-switch-button-flat-round',
      checked        : null,
      onChange       : this.handleChange
    };
  },

  // Handle change
  handleChange : function()
  {
    // Override
  },

  /**
   * Render Switch Button control
   *
   * @returns {XML}
   */
  render : function()
  {
    var id, label, labelRight;

    if( this.props.id == '' && this.props.name != '' ) {
      id = this.props.name;
    }

    if( this.props.label != '' ) {
      label = (
        React.createElement("label", {htmlFor: id}, this.props.label)
      );
    }

    if( this.props.labelRight != '' ) {
      labelRight = (
        React.createElement("label", {htmlFor: id}, this.props.labelRight)
      );
    }

    return (
      React.createElement("div", {className: 'rsbc-switch-button ' + this.props.theme}, 
        label, 
        React.createElement("input", {onChange: this.props.onChange, checked: this.props.checked, defaultChecked: this.props.defaultChecked, 
               id: id, name: this.props.name, type: "checkbox", value: "1"}), 
        React.createElement("label", {htmlFor: id}), 
        labelRight
      )
    );
  }

} );

module.exports = SwitchButton;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});