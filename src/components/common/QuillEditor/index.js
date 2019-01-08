/**
 * quill 에디터 문서
 * @link https://quilljs.com/docs/api/#editor
 * 
 * NOTE: 이 컴퍼넌트는 quill, quill-delta-to-html npm 패키지를 필요로합니다.
 */

import React, { PureComponent } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],

  [{ 'list': 'ordered' }, { 'list': 'bullet' }],

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'align': [] }],

  ['link', 'image', 'video'],
  ['clean']                                         // remove formatting button
];

class QuillEditor extends PureComponent {
  componentDidMount() {
    this.editor = new Quill('#ql-editor', {
      modules: {
        toolbar: toolbarOptions,
      },
      theme: 'snow',
      ...this.props,
    });

    this.editor.getModule('toolbar').addHandler('image', () => {
      this._selectLocalImage();
    });
  }

  componentWillUnmount() {
    const toolbar = document.querySelector('.ql-toolbar.ql-snow');
    toolbar.remove();
  }

  render() {
    return (
      <div id="ql-editor"
        dangerouslySetInnerHTML={{ __html: this.props.initialHtml }}>
      </div>
    );
  }

  _selectLocalImage() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];

      if (/^image\//.test(file.type)) {
        if (this.props.onAddImage) {
          this.props.onAddImage(file, url => {
            this._insertToEditor(url);
          });
        }
      } else {
        alert('You could only upload images.');
      }
    };
  }

  _insertToEditor(url) {
    const range = this.editor.getSelection();
    this.editor.insertEmbed(range.index, 'image', url);
  }

  getHtml() {
    const delta = this.editor.getContents();
    console.warn(delta);
    const converter = new QuillDeltaToHtmlConverter(delta.ops, {
      inlineStyles: true,
    });
    return converter.convert();
  }
}

export default QuillEditor;
