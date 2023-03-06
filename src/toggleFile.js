import React, {useState, useCallback} from 'react';

const useToggle = (initialState = true) => {
    const [togValue, changeToggle] = useState(initialState);

    const toggler = () => {changeToggle(!togValue)};

    return [togValue, toggler]
};

export default useToggle;