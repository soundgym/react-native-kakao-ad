package com.soundgym.kakaoad;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.kakao.ad.common.json.*;
import com.kakao.ad.tracker.KakaoAdTracker;

import java.util.Arrays;
import java.util.Currency;
import java.util.List;
import java.util.Locale;
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

    private void sendEvent(Event event) {
        KakaoAdTracker.getInstance().sendEvent(event);
    }

    @ReactMethod
    private void init() {
        if (!KakaoAdTracker.isInitialized()) {
            String trackId = reactContext.getString(R.string.kakao_ad_track_id);
            KakaoAdTracker.getInstance().init(reactContext, trackId);
        }
    }

    @ReactMethod
    private void logRegistration(String tag){
        CompleteRegistration event = new CompleteRegistration();
        event.tag = tag; // 분류
        sendEvent(event);
    }

    @ReactMethod
    private void logSignUp(String tag){
        SignUp event = new SignUp();
        event.tag = tag; // 분류
        sendEvent(event);
    }

    @ReactMethod
    private void logSearch(ReadableMap props){
        Search event = new Search();

        if(!props.isNull("tag")){
            event.tag = props.getString("tag"); // 분류
        }

        if(!props.isNull("searchString")){
            event.search_string = props.getString("searchString"); // 검색 문자열
        }

        sendEvent(event);
    }

    @ReactMethod
    private void logViewContent(ReadableMap props){
        ViewContent event = new ViewContent();

        if(!props.isNull("tag")){
            event.tag = props.getString("tag"); // 분류
        }

        if(!props.isNull("contentId")){
            event.content_id = props.getString("contentId"); // 상품 코드
        }

        sendEvent(event);
    }

    @ReactMethod
    private void logViewCart(String tag){
        ViewCart event = new ViewCart();
        event.tag = tag; // 분류
        sendEvent(event);
    }

    @ReactMethod
    private void logPurchase(ReadableMap props, ReadableArray products){
        List<Product> provideProducts = Arrays.asList();

        for (int i = 0; i < products.size(); i++){
            ReadableMap product = products.getMap(i);

            Product provideProduct = new Product();

            if(!product.isNull("name")){
                provideProduct.name = product.getString("name");
            }

            if(product.isNull("quantity")){
                provideProduct.quantity = product.getInt("quantity");
            }

            if(product.isNull("price")){
                provideProduct.price = product.getDouble("price");
            }

            if(provideProduct.name != null){
                provideProducts.add(provideProduct);
            }
        }

        int totalQuantity = 0;
        double totalPrice = 0;

        for (Product p : provideProducts) {
            totalQuantity += p.quantity; // 총 개수
            totalPrice += p.price; // 총 금액
        }

        Purchase event = new Purchase();
        event.setProducts(provideProducts);
        event.total_quantity = totalQuantity;
        event.total_price = totalPrice;

        if(!props.isNull("tag")){
            event.tag = props.getString("tag");
        }
        if(!props.isNull("currency")){
            event.currency = Currency.getInstance(props.getString("currency"));
        } else {
            event.currency =  Currency.getInstance(Locale.KOREA);
        }

        sendEvent(event);
    }
}
