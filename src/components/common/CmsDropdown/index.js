import React, { Component } from 'react';

import './CmsDropdown.css';

class CmsDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuVisible: false,
      enableClickOutside: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    if (this.state.isMenuVisible) this.addClickOutsideListener();
  }

  componentWillUnmount() {
    this.removeclickOutsideListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isMenuVisible } = this.state;

    if (prevState.isMenuVisible !== isMenuVisible) {
      if (isMenuVisible) this.addClickOutsideListener();
      else this.removeclickOutsideListener();
    }
  }

  render() {
    const { children, menus = [], className, menuClassName } = this.props;
    const { isMenuVisible } = this.state;

    return (
      <div ref={this.dropdownRef} className={`cms-dropdown ${className ? className : ""}`}>
        <div className='cms-dropdown__trigger' onClick={this.toggleMenu}>
          {children}
        </div>
        {isMenuVisible &&
          <ul className='cms-dropdown__menu-wrapper'>
            {menus.map((v, i) => (
              <li
                className={`cms-dropdown__menu ${menuClassName ? menuClassName : ""}`}
                key={i}
                onClick={() => this.handleMenuClick(v)}>{v}</li>
            ))}
          </ul>
        }
      </div>
    );
  }

  toggleMenu() {
    const { isMenuVisible } = this.state;
    if (isMenuVisible) this.hideMenu();
    else this.showMenu();
  }

  showMenu() {
    this.setState({ isMenuVisible: true });
  }

  hideMenu() {
    this.setState({ isMenuVisible: false, enableClickOutside: false });
  }

  handleMenuClick(menu) {
    const { onMenuClick } = this.props;
    if (onMenuClick) onMenuClick(menu);
  }

  handleClickOutside() {
    const { enableClickOutside } = this.state;
    if (enableClickOutside) this.hideMenu();
    else this.setState({ enableClickOutside: true });
  }

  addClickOutsideListener() {
    window.addEventListener("click", this.handleClickOutside);
  }

  removeclickOutsideListener() {
    window.removeEventListener("click", this.handleClickOutside);
  }
}

export default CmsDropdown;
