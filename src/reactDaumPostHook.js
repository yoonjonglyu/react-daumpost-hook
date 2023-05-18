import { loadCDN } from 'isa-util';

function daumPostCodeHook(props) {
  const { ref, apiUrl, method, onComplete, config } = props;

  // 내부 변수들 더블 언더바 를 prefix로 사용
  const __postcodeUrl =
    apiUrl !== undefined
      ? apiUrl
      : '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const __scriptId = 'daumpostcodemapv2';
  const __method = { ...method };
  const __onComplete =
    onComplete !== undefined ? onComplete : (data) => console.log(data);
  const __config = { ...config };

  // 스크립트가 없을시 로드 해오는 부분
  loadCDN(__scriptId, __postcodeUrl);

  const getPostCode = () => {
    ref === undefined ? getPostCodePopup() : getPostCodeEmbed();
  };

  const getPostCodeEmbed = () => {
    new window.daum.Postcode({
      oncomplete: __onComplete,
      onresize: function (size) {
        ref.current.style.height = size.height + 'px';
      },
      width: '100%',
      height: '100%',
      ...__method,
      ...__config,
    }).embed(ref.current);
    ref.current.style.display = 'block';
  };

  const getPostCodePopup = () => {
    new window.daum.Postcode({
      oncomplete: __onComplete,
      ...__method,
      ...__config,
    }).open();
  };

  return getPostCode;
}

export default daumPostCodeHook;
