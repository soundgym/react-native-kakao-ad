import { NativeModules } from "react-native";
import Currency, { CurrencyCodeType } from "./currency";

const RNKakaoAd = NativeModules.RNKakaoAd;

export type KakaoAdSearchParams = {
    tag?: string;
    searchString: string;
};

export enum KakaoAdSignUpTags {
    SignUp = "SignUp",
    Subscription = "Subscription",
    CardIssuance = "CardIssuance",
    OpeningAccount = "OpeningAccount",
    LoanApplication = "LoanApplication",
}

export type KakaoAdViewContentParams = {
    tag?: string;
    contentId: string;
};

export type KakaoAdPurchaseParams = {
    tag?: string;
    currency?: CurrencyCodeType;
};

export type KakaoAdProduct = {
    name: string;
    quantity: number;
    price: number;
};

const KakaoAd = {
    init: (trackId: string): void => {
        RNKakaoAd.init(trackId);
    },
    activate: (): void => {
        RNKakaoAd.activate();
    },
    setTrackId: (trackId: string): void => {
        RNKakaoAd.setTrackId(trackId);
    },
    logRegistration: (tag = ""): void => {
        RNKakaoAd.logRegistration(tag);
    },
    logSignUp: (tag: string | KakaoAdSignUpTags = ""): void => {
        RNKakaoAd.logSignUp(tag);
    },
    logSearch: ({ tag = "", searchString }: KakaoAdSearchParams): void => {
        RNKakaoAd.logSearch({ tag, searchString });
    },
    logViewContent: ({ tag = "", contentId }: KakaoAdViewContentParams): void => {
        RNKakaoAd.logViewContent({ tag, contentId });
    },
    logViewCart: (tag = ""): void => {
        RNKakaoAd.logViewCart(tag);
    },
    logPurchase: ({ tag = "", currency = "KRW" }: KakaoAdPurchaseParams, products: KakaoAdProduct[]): void => {
        RNKakaoAd.logPurchase({ tag, currency }, products);
    },
};

export const CurrencyCode = Currency;
export default KakaoAd;
