import React, { Component } from 'react';

import './CmsPager.css';

class CmsPager extends Component {
  constructor(props) {
    super(props);

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
      page,
    } = this.props;

    const currentBlock = this.getCurrentBlock(page);
    const minNum = this.getMinimumNumberOfBlock(currentBlock);

    return (
      <div className={`cms-pager ${center ? 'center' : ''}`}>
        <button className='cms-page__btn first' onClick={this.goFirst}>{'<<'}</button>
        <button className='cms-page__btn prev' onClick={this.goPrev}>{'<'}</button>
        {this.getPageArray(pagePerBlock, minNum, maxPage).map((v) => (
          <button
            key={`page_${v}`}
            className={`cms-pager__page ${v === page ? 'active' : ''}`}
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
    if (onChange) onChange(page);
  }

  goPrev() {
    const { onChange, page, pagePerBlock } = this.props;
    const prevPage = page - pagePerBlock;
    if (onChange) onChange(prevPage > 0 ? prevPage : 1);
  }

  goNext() {
    const { onChange, page, pagePerBlock, maxPage } = this.props;
    const nextPage = page + pagePerBlock;
    if (onChange) onChange(nextPage < maxPage ? nextPage : maxPage);
  }

  goFirst() {
    const { onChange } = this.props;
    if (onChange) onChange(1);
  }

  goLast() {
    const { onChange, maxPage } = this.props;
    if (onChange) onChange(maxPage);
  }

  getCurrentBlock(page) {
    const { pagePerBlock } = this.props;
    return Math.ceil(page / pagePerBlock) - 1;
  }

  getMinimumNumberOfBlock(block) {
    const { pagePerBlock } = this.props;
    return block * pagePerBlock + 1;
  }
}

export default CmsPager;
