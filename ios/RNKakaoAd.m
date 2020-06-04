//
//  RNKakaoAd.m
//  RNKakaoAd
//
//  Copyright © 2020 Hyungu Kang. All rights reserved.
//

#import "RNKakaoAd.h"
#import <KakaoAdSDK/KakaoAdSDK.h>

@implementation RNKakaoAd

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(init: (NSString *)trackId) {
    KakaoAdTracker.trackId = trackId;
    [KakaoAdTracker activate];
}

@end
