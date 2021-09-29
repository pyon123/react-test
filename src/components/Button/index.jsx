import React, { PureComponent } from 'react';
import classNames from 'classnames';

import LoadingIcon from '../../assets/icons/Loading.svg'

import styles from './Button.module.scss'

export default class Button extends PureComponent {
    onClick = (e) => {
        const { onClick, prevent, stopPropagation, disabled, loading } =
            this.props;

        if (disabled || loading) {
            return;
        }

        if (prevent) {
            e.preventDefault();
        }

        if (stopPropagation) {
            e.stopPropagation();
        }


        if (onClick && typeof onClick === 'function') {
            onClick(e);
        }
    };

    render() {
        const {
            text,
            tabIndex,
            type,

            loading,
            disabled,

            children,
            classes,
        } = this.props;

        return (
            <button
                className={classNames(styles.button, classes.button)}
                onClick={this.onClick}
                disabled={disabled}
                tabIndex={tabIndex}
                type={type}>
                
                {text}
                {children}

                {loading && 
                  <div className={classNames(styles.loading, classes.loading)}>
                    <img src={LoadingIcon} alt='loadingIcon' className={classNames(styles.loader, classes.loader)}/>
                  </div>
                }
            </button>
        );
    }
}
