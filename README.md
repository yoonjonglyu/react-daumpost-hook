# react-daumpost-hook

[다음 우편 번호 API](http://postcode.map.daum.net/guide)를 리액트에서 커스텀 훅 방식으로 제공하는 라이브러리.


## 설치

```shell
npm install --save react-daumpost-hook
```

## 사용법

```js
import React, { useRef } from 'react';
import ReactDaumPost from 'react-daumpost-hook';

const App = function () {
    const ref = useRef(null);

    const on = (data) => {
        console.log(data);
    }
    
    const postConfig = {
        ref : ref,
        onComplete : on
    };
    const postCode = ReactDaumPost(postConfig);
   
    return (
        <main>
            test
            <input type="text"  onClick={() => postCode()} />
            <div ref={ref}></div>
        </main>
    );
};
```

### react-hook-form을 같이 쓸 경우

```js
import React, { useRef } from 'react';
import ReactDaumPost from 'react-daumpost-hook';
import { useForm } from 'react-hook-form';


const App = function () {
    const { setValue, handleSubmit } = useForm();
    const ref = useRef(null);

    const on = (data) => {
        setValue('test', "tasdasdsasd");
        handleSubmit((data) => console.log(data))();
    }
    
    const postConfig = {
        ref : ref,
        onComplete : on
    };
    const postCode = ReactDaumPost(postConfig);
   
    return (
        <main>
            test
            <input type="text"  onClick={() => postCode()} />
            <div ref={ref}></div>
        </main>
    );
};
```

### License

react-postcode-hook is [MIT licensed](./LICENSE).