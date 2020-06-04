import { CurrencyCodeType } from "./currency";
export declare type KakaoAdSearchParams = {
    tag?: string;
    searchString: string;
};
export declare enum KakaoAdSignUpTags {
    SignUp = "SignUp",
    Subscription = "Subscription",
    CardIssuance = "CardIssuance",
    OpeningAccount = "OpeningAccount",
    LoanApplication = "LoanApplication"
}
export declare type KakaoAdViewContentParams = {
    tag?: string;
    contentId: string;
};
export declare type KakaoAdPurchaseParams = {
    tag?: string;
    currency?: CurrencyCodeType;
};
export declare type KakaoAdProduct = {
    name: string;
    quantity: number;
    price: number;
};
declare const KakaoAd: {
    init: (trackId: string) => void;
    activate: () => void;
    setTrackId: (trackId: string) => void;
    logRegistration: (tag?: string) => void;
    logSignUp: (tag?: string | KakaoAdSignUpTags) => void;
    logSearch: ({ tag, searchString }: KakaoAdSearchParams) => void;
    logViewContent: ({ tag, contentId }: KakaoAdViewContentParams) => void;
    logViewCart: (tag?: string) => void;
    logPurchase: ({ tag, currency }: KakaoAdPurchaseParams, products: KakaoAdProduct[]) => void;
};
export declare const CurrencyCode: Record<"CHF" | "MAD" | "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTC" | "BTN" | "BWP" | "BYR" | "BYN" | "BZD" | "CAD" | "CDF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EEK" | "EGP" | "ERN" | "ETB" | "ETH" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHC" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTC" | "LTL" | "LVL" | "LYD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RMB" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRL" | "TRY" | "TTD" | "TVD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XBT" | "XCD" | "XOF" | "XPF" | "YER" | "ZAR" | "ZWD", "CHF" | "MAD" | "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTC" | "BTN" | "BWP" | "BYR" | "BYN" | "BZD" | "CAD" | "CDF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EEK" | "EGP" | "ERN" | "ETB" | "ETH" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHC" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTC" | "LTL" | "LVL" | "LYD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RMB" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRL" | "TRY" | "TTD" | "TVD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XBT" | "XCD" | "XOF" | "XPF" | "YER" | "ZAR" | "ZWD">;
export default KakaoAd;
