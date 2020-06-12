// outsource dependencies
import React, { memo } from 'react';

// local dependencies
import { Label, FormGroup } from 'reactstrap';

interface RFControlWrapProps {
    id: string,
    label: any,
    className: string,
    message: string,
    children: React.ReactNode
}

export const RFControlWrap: React.FC<RFControlWrapProps> = memo(({ id, label, className, message, children }) =>
    <FormGroup className={className}>
        {label ? <Label for={id}>{label}</Label> : null}
        {children}
        {message ? <Label for={id} className="invalid-feedback">{message}</Label> : null}
    </FormGroup>
);
