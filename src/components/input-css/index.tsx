import React, {HTMLProps} from 'react';
import cn from 'classnames';

import './index.css';

type Props = HTMLProps<HTMLInputElement>;

export function Input({className, ...props}: Props) {
    const inputClass = cn('InputCss', className);

    return <input {...props} className={inputClass} />;
}
