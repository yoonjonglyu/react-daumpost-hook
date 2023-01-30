import React from 'react';

export {};
declare global {
  interface Window {
    daum?: any;
  }
}

declare module 'react-daumpost-hook' {
  const ReactDaumPost: ReactDaumPost;

  interface ReactDaumPost {
    (config?: ReactDaumPostProps): VoidFunction;
  }

  interface ReactDaumPostProps {
    ref?: React.MutableRefObject<any>;
    onComplete: (state: PostStateProps) => VoidFunction;
    apiUrl?: string;
    method?: {
      onresize?: (size: { width: number; height: number }) => void;
      onclose?: (state: 'FORCE_CLOSE' | 'COMPLETE_CLOSE') => void;
      onsearch?: (data: { q: string; count: number }) => void;
    };
    config?: any;
  }

  interface PostStateProps {
    postcode: string;
    postcode1: string;
    postcode2: string;
    postcodeSeq: string;
    zonecode: string;
    address: string;
    addressEnglish: string;
    addressType: string;
    bcode: string;
    bname: string;
    bnameEnglish: string;
    bname1: string;
    bname1English: string;
    bname2: string;
    bname2English: string;
    sido: string;
    sidoEnglish: string;
    sigungu: string;
    sigunguEnglish: string;
    sigunguCode: string;
    userLanguageType: string;
    query: string;
    buildingName: string;
    buildingCode: string;
    apartment: string;
    jibunAddress: string;
    jibunAddressEnglish: string;
    roadAddress: string;
    roadAddressEnglish: string;
    autoRoadAddress: string;
    autoRoadAddressEnglish: string;
    autoJibunAddress: string;
    autoJibunAddressEnglish: string;
    userSelectedType: string;
    noSelected: string;
    hname: string;
    roadnameCode: string;
    roadname: string;
    roadnameEnglish: string;
  }

  export default ReactDaumPost;
}
