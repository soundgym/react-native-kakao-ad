<span class="module"><a href="https://github.com/soundgym/react-native-kakao-ad" title="View this project"><img src="https://img.shields.io/badge/React Native-react--native--kakao--ad-black?style=flat-square&logo=react" alt="RNKakaoAd" /></a></span>
<span class="npmversion"><a href="https://npmjs.org/package/react-native-kakao-ad" title="View this project on NPM"><img src="https://img.shields.io/npm/v/react-native-kakao-ad.svg" alt="NPM version" /></a></span>
<span class="npmdownloads"><a href="https://npmjs.org/package/react-native-kakao-ad" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/react-native-kakao-ad.svg" alt="NPM downloads" /></a></span>

# react-native-kakao-ad
React-Native KakaoAd SDK, (Not official)

## Setup

- Android

Add below dependencies to your `project/android/build.gradle`

```diff
allprojects {
    repositories {
+       google()
+       jcenter()
        //link: https://devtalk.kakao.com/t/gradle-7-0/104816
+       maven {
+           url 'https://devrepo.kakao.com/nexus/content/groups/public/'
+       }
    }
}

subprojects {
    repositories {
        mavenCentral()
-       maven {
-           url 'http://devrepo.kakao.com:8088/nexus/content/groups/public/'
-       }
    }
}
```

## How to use
```jsx
import React from "react";
import { TouchableOpacity, AppState, AppStateStatus, Platform } from "react-native";
import KakaoAd, { CurrencyCode } from "react-native-kakao-ad";

const App = () => {
    const appState = React.useRef<AppStateStatus>(AppState.currentState);
    
    React.useEffect(() => {
        KakaoAd.init("your-track-id");
        AppState.addEventListener("change", appStateHandler);
        
        return () => AppState.removeEventListener("change", appStateHandler);
    }, []);
    
    const appStateHandler = (nextAppState: AppStateStatus) => {
        if (appState.current.match(/inactive|background/) && nextAppState === "active") {
            Platform.OS === "ios" && KakaoAd.activate();
        }
        
        appState.current = nextAppState;
    };

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
