// outsource dependencies
import React, {memo} from 'react';
import { Input as RFInput } from 'reactstrap';

// local dependencies
import { RFControlWrap } from './form-control-wrapper';

interface InputProps {
    rootClassName: string,
    type: string,
    label: React.ReactNode,
    meta: any,
    input: any,
    className: string
}

export const Input: React.FC<InputProps> = memo( ({input, meta, type, label, rootClassName, className, ...attr }) => {

        let message = '';
        if (meta.touched) {
            message = meta.error;
            className += meta.valid ? ' is-valid' : ' is-invalid';
        }

        return <RFControlWrap
            id={input.name}
            label={label}
            message={message}
            className={`mb-0 ${rootClassName}`}>
            <RFInput
                {...input}
                {...attr}
                className={className}
                type={type}
                onBlur={() => input.onBlur(input.value)}
            />
        </RFControlWrap>;

});

