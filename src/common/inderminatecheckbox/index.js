import { useRef, useEffect } from 'react';

export const IndeterminateCheckbox = (props) => {
    const { isChecked, isIndeterminate, ...otherProps } = props
    const checkRef = useRef();

    useEffect(() => {
        checkRef.current.checked = true == isChecked
        checkRef.current.indeterminate = true == isIndeterminate
    }, [props])

    return (
        <input
            type="checkbox"
            ref={checkRef}
            {...otherProps}
        />
    )
}