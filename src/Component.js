import ReactQuill from 'react-quill';
import React, { useState } from 'react';

function MyComponent() {
    const [value, setValue] = useState('');
  
    return <ReactQuill style = {{height: '400px'}} placeholder='Enter text' theme="snow" value={value} onChange={setValue}/>;
}

export default MyComponent;