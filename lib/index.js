"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCode = exports.KakaoAdSignUpTags = void 0;
const react_native_1 = require("react-native");
const currency_1 = __importDefault(require("./currency"));
const RNKakaoAd = react_native_1.NativeModules.RNKakaoAd;
var KakaoAdSignUpTags;
(function (KakaoAdSignUpTags) {
    KakaoAdSignUpTags["SignUp"] = "SignUp";
    KakaoAdSignUpTags["Subscription"] = "Subscription";
    KakaoAdSignUpTags["CardIssuance"] = "CardIssuance";
    KakaoAdSignUpTags["OpeningAccount"] = "OpeningAccount";
    KakaoAdSignUpTags["LoanApplication"] = "LoanApplication";
})(KakaoAdSignUpTags = exports.KakaoAdSignUpTags || (exports.KakaoAdSignUpTags = {}));
const KakaoAd = {
    init: (trackId) => {
        RNKakaoAd.init(trackId);
    },
    activate: () => {
        RNKakaoAd.activate();
    },
    setTrackId: (trackId) => {
        RNKakaoAd.setTrackId(trackId);
    },
    logRegistration: (tag = "") => {
        RNKakaoAd.logRegistration(tag);
    },
    logSignUp: (tag = "") => {
        RNKakaoAd.logSignUp(tag);
    },
    logSearch: ({ tag = "", searchString }) => {
        RNKakaoAd.logSearch({ tag, searchString });
    },
    logViewContent: ({ tag = "", contentId }) => {
        RNKakaoAd.logViewContent({ tag, contentId });
    },
    logViewCart: (tag = "") => {
        RNKakaoAd.logViewCart(tag);
    },
    logPurchase: ({ tag = "", currency = "KRW" }, products) => {
        RNKakaoAd.logPurchase({ tag, currency }, products);
    },
};
exports.CurrencyCode = currency_1.default;
exports.default = KakaoAd;
//# sourceMappingURL=index.js.map