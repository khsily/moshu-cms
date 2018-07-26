import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'tui-editor';

import "tui-editor/dist/tui-editor-extColorSyntax.js";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "highlight.js/styles/github.css";
import "tui-color-picker/dist/tui-color-picker.css";
import './TuiEditor.css';

class TuiEditor extends Component {
  constructor(props) {
    super(props);

    this.editorEl = React.createRef();
  }

  componentDidMount() {
    const editorOptions = {
      ...this.props,
      el: this.editorEl.current,
      exts: ['colorSyntax'],
    }
    this.editor = Editor.factory(editorOptions);
  }

  render() {
    return (
      <div className="tui-editor" style={this.props.style} ref={this.editorEl}></div>
    );
  }
};

export default TuiEditor;

TuiEditor.propTypes = {
  initialEditType: PropTypes.string, //markdown, wysiwyg
  initialValue: PropTypes.string,
  previewStyle: PropTypes.string, //tab, vertical
  height: PropTypes.string,
  minHeight: PropTypes.string,
  viewer: PropTypes.bool,
  events: PropTypes.object,
  hooks: PropTypes.object,
  language: PropTypes.string,
  exts: PropTypes.array,
}

TuiEditor.defaultProps = {
  initialEditType:'wysiwyg',
}
