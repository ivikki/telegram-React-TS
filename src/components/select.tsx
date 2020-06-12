// outsource dependencies
import React, {memo} from 'react';
import ReactSelect from 'react-select';

// local dependencies
import { RFControlWrap } from './form-control-wrapper';

interface SelectProps {
    rootClassName: string,
    type: string,
    label: React.ReactNode,
    meta: any,
    input: any,
    className: string,
    options: []
}

export const Select: React.FC<SelectProps> = memo(({ input, meta, rootClassName, className, label, options, ...attr }) => {

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
            <ReactSelect
                id={input.name}
                name={input.name}
                options={options}
                value={input.value}
                className={className}
                onChange={input.onChange}
                {...attr}
            />
        </RFControlWrap>;

});
