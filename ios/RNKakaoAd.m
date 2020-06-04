//
//  RNKakaoAd.m
//  RNKakaoAd
//
//  Copyright © 2020 Hyungu Kang. All rights reserved.
//

#import "RNKakaoAd.h"
#import <KakaoAdSDK/KakaoAdSDK.h>
#import <React/RCTConvert.h>

@implementation RNKakaoAd

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();


NSString* KEY_TAG = @"tag";
NSString* KEY_SEARCH_STRING = @"searchString";
NSString* KEY_CONTENT_ID = @"contentId";
NSString* KEY_CURRENCY = @"currency";
NSString* KEY_NAME = @"name";
NSString* KEY_QUANTITY = @"quantity";
NSString* KEY_PRICE = @"price";

RCT_EXPORT_METHOD(init: (NSString *)trackId) {
    KakaoAdTracker.trackId = trackId;
    [KakaoAdTracker activate];
}

RCT_EXPORT_METHOD(logRegistration: (NSString *)tag) {
    [KakaoAdTracker sendCompleteRegisterEventWithTag:tag];
}

RCT_EXPORT_METHOD(logSignUp: (NSString *)tag) {
    [KakaoAdTracker sendSignUpEventWithTag:tag];
}

RCT_EXPORT_METHOD(logSearch: (NSDictionary*)props) {
    NSString* tag = [RCTConvert NSString:props[KEY_TAG]];
    NSString* searchString = [RCTConvert NSString:props[KEY_SEARCH_STRING]];
    
    [KakaoAdTracker sendSearchEventWithTag:tag searchString:searchString];
}

RCT_EXPORT_METHOD(logViewContent: (NSDictionary*)props) {
    NSString* tag = [RCTConvert NSString:props[KEY_TAG]];
    NSString* contentId = [RCTConvert NSString:props[KEY_CONTENT_ID]];
    
    [KakaoAdTracker sendViewContentEventWithTag:tag contentId:contentId];
}

RCT_EXPORT_METHOD(logViewCart: (NSString *)tag) {
    [KakaoAdTracker sendViewCartEventWithTag:tag];
}

RCT_EXPORT_METHOD(logPurchase: (NSDictionary*)props products:(NSArray<NSDictionary *>*)products) {
    NSMutableArray<KakaoAdDetailProduct *>* provideProducts = [[NSMutableArray alloc] init];
    
    for (NSDictionary* product in products) {
        NSString* name = [RCTConvert NSString:product[KEY_NAME]];
        NSUInteger quantity = [RCTConvert NSUInteger:product[KEY_NAME]];
        double price = [RCTConvert double:product[KEY_PRICE]];
        
        if(name){
            KakaoAdDetailProduct* provideProduct = [[KakaoAdDetailProduct alloc]
                                                    initWithName:name
                                                    quantity:quantity
                                                    price:price];
            [provideProducts addObject: provideProduct];
        }
    }
    
    NSInteger totalQuantity = 0;
    double totalPrice = 0;
    
    for (KakaoAdDetailProduct* product in provideProducts) {
        totalQuantity += product.quantity;
        totalPrice += product.price;
    }
    
    
    NSString* tag = [RCTConvert NSString:props[KEY_TAG]];
    NSString* currency = [RCTConvert NSString:props[KEY_CURRENCY]];
    if(!currency){ currency = @"KRW"; }
    
    [KakaoAdTracker sendPurchaseEventWithTag:tag
                               totalQuantity:totalQuantity
                                  totalPrice:totalPrice
                                    currency:currency
                                    products:provideProducts];
}

@end
