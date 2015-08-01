/**
 * Created by daneding on 7/14/15.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/tag-input.css');

exports['default'] = _react2['default'].createClass({
  displayName: 'tagInput.react',

  getDefaultProps: function getDefaultProps() {
    return {
      allTagList: [],
      shownTagList: []
    };
  },

  getInitialState: function getInitialState() {
    return {
      allTagList: this.props.allTagList,
      shownTagList: this.props.shownTagList,
      value: '',
      showDropdown: false,
      selectedIndex: -1
    };
  },

  showExistTags: function showExistTags() {
    return this.state.shownTagList.map(function (item, index) {
      return _react2['default'].createElement(
        'li',
        { className: 'tag-manager__tag', onClick: this.removeTagHandler.bind(this, index) },
        item.name,
        _react2['default'].createElement(
          'span',
          { className: 'icon-close' },
          'X'
        )
      );
    }, this);
  },

  removeTagHandler: function removeTagHandler(index) {
    var shownTagList = this.state.shownTagList;
    shownTagList.splice(index, 1);
    this.setState({
      shownTagList: shownTagList
    });
  },

  handleChange: function handleChange(event) {
    this.setState({ value: event.target.value });
  },

  handleKeyUp: function handleKeyUp(event) {
    var keyCode = event.keyCode;

    if (keyCode === 13) {
      //ENTER
      if (this.state.selectedIndex > -1 && !this.state.value) {
        this.addTagToList(this.state.allTagList[this.state.selectedIndex].name);
      } else {
        this.addTagToList(this.state.value);
      }
    } else if (keyCode === 8 && !this.state.value.trim()) {
      //BACKSPACE
      var lastIndex = this.state.shownTagList.length - 1;
      this.removeTagHandler(lastIndex);
      this.setState({
        value: ''
      });
    } else if (keyCode === 38) {
      //UP
      var currentIndex = this.state.selectedIndex;
      var totalLength = this.state.allTagList.length;

      if (currentIndex !== -1) {
        currentIndex -= 1;
      }

      currentIndex = totalLength + currentIndex;
      this.setState({
        selectedIndex: currentIndex % totalLength
      });
    } else if (keyCode === 40) {
      //DOWN
      var currentIndex = this.state.selectedIndex;
      var totalLength = this.state.allTagList.length;

      currentIndex += 1;
      currentIndex = Math.abs(currentIndex);

      this.setState({
        selectedIndex: currentIndex % totalLength
      });
    }
  },

  addTagToList: function addTagToList(tag) {
    var shownTagList = this.state.shownTagList;
    var tagList = shownTagList.map(function (item) {
      return item.name;
    });

    if (!!tag && tagList.indexOf(tag) === -1) {
      this.state.shownTagList.push({ name: tag });
      this.setState({
        shownTagList: this.state.shownTagList
      });
    }

    this.setState({
      value: ''
    });
  },

  handleBlur: function handleBlur() {
    window.setTimeout((function () {
      this.setState({
        showDropdown: false,
        value: ''
      });
    }).bind(this), 100);
  },

  handleFocus: function handleFocus() {
    this.setState({
      showDropdown: true,
      selectedIndex: -1
    });
  },

  dropdownItemClickHandler: function dropdownItemClickHandler(index) {
    var selectedItem = this.state.allTagList[index];
    this.addTagToList(selectedItem.name);
  },

  appendDropdown: function appendDropdown() {
    if (this.state.showDropdown && this.state.allTagList.length > 0) {
      return _react2['default'].createElement(
        'ul',
        { className: 'tag-manager__dropdown', ref: 'dropdown' },
        this.state.allTagList.map(function (item, index) {
          return _react2['default'].createElement(
            'li',
            { className: this.state.selectedIndex === index ? "tag-manager__dropdown-item highlight" : "tag-manager__dropdown-item", onClick: this.dropdownItemClickHandler.bind(this, index) },
            item.name
          );
        }, this)
      );
    } else {
      return null;
    }
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { className: 'tag-manager' },
      _react2['default'].createElement(
        'ul',
        { className: 'tag-manager__tag-list' },
        this.showExistTags()
      ),
      _react2['default'].createElement(
        'span',
        { className: 'tag-manager__input-wrapper', style: { width: '350px' } },
        _react2['default'].createElement('input', { className: 'tag-manager__input', onKeyUp: this.handleKeyUp, onBlur: this.handleBlur, onFocus: this.handleFocus, value: this.state.value, onChange: this.handleChange, placeholder: 'Tag your message with information about your post', type: 'text' }),
        this.appendDropdown()
      )
    );
  }
});
module.exports = exports['default'];