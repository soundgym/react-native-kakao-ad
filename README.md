<span class="module"><a href="https://github.com/soundgym/react-native-kakao-ad" title="View this project"><img src="https://img.shields.io/badge/React Native-react--native--kakao--ad-black?style=flat-square&logo=react" alt="RNKakaoAd" /></a></span>
<span class="npmversion"><a href="https://npmjs.org/package/react-native-kakao-ad" title="View this project on NPM"><img src="https://img.shields.io/npm/v/react-native-kakao-ad.svg" alt="NPM version" /></a></span>
<span class="npmdownloads"><a href="https://npmjs.org/package/react-native-kakao-ad" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/react-native-kakao-ad.svg" alt="NPM downloads" /></a></span>

# react-native-kakao-ad
React-Native KakaoAd SDK, (Not official)

## How to use
```jsx
import React from "react";
import { TouchableOpacity } from "react-native";
import KakaoAd from "react-native-kakao-ad";

const App = () => {
    React.useEffect(() => {
        KakaoAd.init("your-track-id");
    }, []);

    const logAllEvents = () => {
        KakaoAd.logRegistration();
        KakaoAd.logSearch({ searchString: "search-test" });
        KakaoAd.logViewContent({ contentId: "test-id" });
        KakaoAd.logViewCart();
        KakaoAd.logSignUp();
        KakaoAd.logPurchase({ currency: CurrencyCode.KRW }, [{ name: "test", price: 100, quantity: 1 }]);
    };

    return <TouchableOpacity style={{ width: 300, height: 300, backgroundColor: "green" }} onPress={logAllEvents} />;
};
```
