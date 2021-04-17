export {};
declare global {
    interface Window {
        daum?: any;
    }
    
}
declare module 'react-daumpost-hook' {
    import React from 'react';

    const ReactDaumPost : ReactDaumPost
    
    interface ReactDaumPost {
        (config : ReactDaumPostProps) : Function
    }

    interface ReactDaumPostProps {
        ref? : React.MutableRefObject<null>,
        onComplete? : Function,
        apiUrl? : string,
        method? : Object
    }

    export { ReactDaumPostProps, ReactDaumPost }
    export default ReactDaumPost;
}