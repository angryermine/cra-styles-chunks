import React, {HTMLProps} from 'react';
import cn from 'classnames';

import './index.scss';

type Props = HTMLProps<HTMLInputElement>;

export function Input({className, ...props}: Props) {
    const inputClass = cn('Input', className);

    return <input {...props} className={inputClass} />;
}
