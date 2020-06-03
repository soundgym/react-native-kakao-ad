package com.soundgym.kakaoad;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.Map;
import java.util.HashMap;

public class RNKakaoAdModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    RNKakaoAdModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "RNKakaoAd";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("count", 1);
        return constants;
    }
}
