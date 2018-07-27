import React, { Component } from 'react';

import './CmsPager.css';

class CmsPager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      curretnBlock: 0,
      minNum: 1,
    }

    this.goFirst = this.goFirst.bind(this);
    this.goLast = this.goLast.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  render() {
    const {
      maxPage,
      pagePerBlock,
      center,
    } = this.props;

    const {
      currentPage,
      minNum,
    } = this.state;

    return (
      <div className={`cms-pager ${center ? 'center' : ''}`}>
        <button className='cms-page__btn first' onClick={this.goFirst}>{'<<'}</button>
        <button className='cms-page__btn prev' onClick={this.goPrev}>{'<'}</button>
        {this.getPageArray(pagePerBlock, minNum, maxPage).map((v) => (
          <button
            key={`page_${v}`}
            className={`cms-pager__page ${v === currentPage ? 'active' : ''}`}
            onClick={() => this.setCurrentPage(v)}>{v}</button>
        ))}
        <button className='cms-page__btn next' onClick={this.goNext}>{'>'}</button>
        <button className='cms-page__btn last' onClick={this.goLast}>{'>>'}</button>
      </div>
    );
  }

  getPageArray(pagePerBlock, start, max) {
    return [...Array(pagePerBlock).keys()]
      .map((v, i) => i + start)
      .filter((v) => v <= max);
  }

  setCurrentPage(page) {
    const { onChange } = this.props;
    if (page < 1 || page > this.props.maxPage) return;
    this.setState({ currentPage: page }, () => {
      if (onChange) onChange(page);
    });
  }

  setCurrentBlock(block) {
    const { pagePerBlock } = this.props;
    const minNum = block * pagePerBlock + 1;
    const maxBlock = this.getMaxBlock();

    if (block < 0 || block > maxBlock) return;

    this.setState({ curretnBlock: block, minNum });
    this.setCurrentPage(minNum);
  }

  goPrev() {
    const { curretnBlock } = this.state;
    this.setCurrentBlock(curretnBlock - 1);
  }

  goNext() {
    const { curretnBlock } = this.state;
    this.setCurrentBlock(curretnBlock + 1);
  }

  goFirst() {
    this.setCurrentBlock(0);
  }

  goLast() {
    const maxBlock = this.getMaxBlock();
    this.setCurrentBlock(maxBlock);
  }

  getMaxBlock() {
    const { maxPage, pagePerBlock } = this.props;
    return Math.floor(maxPage / pagePerBlock);
  }
}

export default CmsPager;
