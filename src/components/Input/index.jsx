import React from 'react';
import classNames from 'classnames';

// styles
import styles from './Input.module.scss';

export default function Input(props) {
    const {
        placeholder,
        value,
        classes:{
            inputWrapper,
            inputIcon,
            inputText
        }={},
        onChange,
        icon,

    } = props;

    return (
        <div className={classNames(styles.wrapper, inputWrapper)}>
            {icon && 
                <img
                    className = {classNames(styles.icon, inputIcon)}
                    src={icon}
                    alt="icon"
                />
            }
            <input
                className={classNames(styles.text, inputText)}
                type="text"
                placeholder={placeholder || ''}
                value={value || ''}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}