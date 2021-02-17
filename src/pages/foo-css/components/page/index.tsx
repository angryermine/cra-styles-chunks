import React from 'react';

import {Input} from 'components/input-css';

import './index.css';

export function Page() {
    return (
        <>
            <h1>Foo (css)</h1>
            <Input className="FooCssPage__input" />
        </>
    );
}
