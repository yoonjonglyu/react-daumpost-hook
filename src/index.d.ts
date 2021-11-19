import React from 'react';

export { };
declare global {
    interface Window {
        daum?: any;
    }

}

declare module 'react-daumpost-hook' {
    const ReactDaumPost: ReactDaumPost

    interface ReactDaumPost {
        (config?: ReactDaumPostProps): VoidFunction
    }

    interface ReactDaumPostProps {
        ref?: React.MutableRefObject<any>,
        onComplete: VoidFunction,
        apiUrl?: string,
        method?: Object
    }

    export default ReactDaumPost;
}