function daumPostCodeHook(props) {
    const {
        ref,
        apiUrl,
        method,
        onComplete
    } = props;

    // 내부 변수들 더블 언더바 를 prefix로 사용
    const __postcodeUrl = apiUrl !== undefined ? apiUrl : "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const __scriptId = "daumpostcodemapv2";
    const __method = method !== undefined ? method : {};
    const __onComplete = onComplete !== undefined ? onComplete : (data) => console.log(data);


    // 스크립트가 없을시 로드 해오는 부분
    if (!document.getElementById(__scriptId)) {
        const __postCodeScript = document.createElement('script');
        __postCodeScript.id = __scriptId;
        __postCodeScript.src = __postcodeUrl;
        document.body.appendChild(__postCodeScript);
    }

    const getPostCode = () => {
        if (ref === undefined) {
            getPostCodePopup();
        } else {
            getPostCodeEmbed();
        }
    }

    const getPostCodeEmbed = () => {
        new window.daum.Postcode({
            oncomplete: __onComplete,
            onresize: function (size) {
                ref.current.style.height = size.height + 'px';
            },
            width: "100%",
            height: "100%",
            ...__method
        }).embed(ref.current);
        ref.current.style.display = 'block';
    }

    const getPostCodePopup = () => {
        new window.daum.Postcode({
            oncomplete: __onComplete,
            ...__method
        }).open();
    }

    return getPostCode;
}

export default daumPostCodeHook;