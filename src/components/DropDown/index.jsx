import React, { PureComponent } from "react";
import styles from "./DropDown.module.scss";
import cn from "classnames";
import { ReactComponent as ChevronIcon } from "./chevron.svg";
import uniqid from "uniqid";

class Dropdown extends PureComponent {
  state = {
    selectedItem: null,
    isOpen: false,
  };
  id = uniqid();

  componentDidMount() {
    window.addEventListener("click", this.onWindowClick);

    if (!this.props.value) return;
    if (Array.isArray(this.props.value) && this.props.value.length === 0) return;

    this.setState({
      selectedItem: this.props.value,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onWindowClick);
  }

  onSelect = (item) => {
    const { selectedItem } = this.state;

    const isInSelected = selectedItem && selectedItem.value === item.value;

    if (isInSelected) {
      this.setState({ isOpen: false });
      return;
    }

    this.setState(
      {
        selectedItem: item,
        isOpen: false,
      },
      () => this.notify(item)
    );
  };

  notify(item) {
    const { onChange } = this.props;
    onChange && onChange(item);
  }

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onToggle = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  onWindowClick = (event) => {
    if (!event.target.closest(`#${this.id}`)) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const {
      prefix,
      items = [],
      disabled,
      showIcon = true,
      classes = {},
    } = this.props;

    const { selectedItem, isOpen } = this.state;

    const displayText = selectedItem && selectedItem.label;
    const isSelected = selectedItem;

    return (
      <div
        id={this.id}
        className={cn(
          styles.dropdown,
          {
            [styles.selected]: isSelected,
            [styles.disabled]: disabled,
            [classes.selected]: isSelected,
          },
          classes.dropdown
        )}
      >
        <button
          className={cn(styles.toggle, classes.toggle)}
          disabled={disabled}
          onClick={this.onToggle}
        >
          {
            prefix &&
              <span
                className={cn(
                  styles.prefix,
                  classes.prefix
                )}
              >
                {prefix}
              </span>
          }

          <span className={cn(styles.label, classes.label)}>
            {displayText}
          </span>
          {showIcon && (
            <ChevronIcon
              className={cn(styles.icon, classes.icon)}
            />
          )}
        </button>

        {isOpen && !disabled && (
          <div className={cn(styles.content, classes.dropdownContent)}>
            <ul className={styles.contentList}>
              {items &&
                items.map((item, i) => (
                  <li
                    key={item.value}
                    onClick={() =>
                      this.onSelect(item)
                    }
                  >
                    <span
                      className={cn(
                        styles.item, classes.item,
                        {
                          [styles.active]: selectedItem && selectedItem.value === item.value,
                          [classes.active]: selectedItem && selectedItem.value === item.value
                        }
                      )}
                    >
                      {item.label}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
