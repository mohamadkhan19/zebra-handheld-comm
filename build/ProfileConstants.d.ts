export type ScannerParams = {
    [key: string]: string;
};
export type CreateProfileData = {
    PROFILE_NAME: string;
    PACKAGE_NAME: string;
    PARAM_LIST?: ScannerParams;
};
export declare const DEFAULT_BARCODES_CONFIG: {
    PROFILE_ENABLED: string;
    CONFIG_MODE: string;
    PLUGIN_CONFIG: {
        PLUGIN_NAME: string;
        RESET_CONFIG: string;
        PARAM_LIST: {
            beam_timer: string;
            scanner_selection: string;
            decoder_code11: string;
            decoder_aztec: string;
            decoder_codabar: string;
            decoder_code39: string;
            decoder_code93: string;
            decoder_code128: string;
            decoder_datamatrix: string;
            decoder_ean13: string;
            decoder_ean8: string;
            decoder_interleaved2of5: string;
            decoder_itf14: string;
            decoder_maxicode: string;
            decoder_pdf417: string;
            decoder_rss14: string;
            decoder_rssexpanded: string;
            decoder_upca: string;
            decoder_upce: string;
            decoder_qrcode: string;
            decoder_i2of5: string;
        };
    };
    APP_LIST: {
        PACKAGE_NAME: string;
        ACTIVITY_LIST: string[];
    }[];
};
export declare const DEFAULT_INTENT_CONFIG: {
    PROFILE_ENABLED: string;
    CONFIG_MODE: string;
    PLUGIN_CONFIG: {
        PLUGIN_NAME: string;
        RESET_CONFIG: string;
        PARAM_LIST: {
            intent_output_enabled: string;
            intent_action: string;
            intent_delivery: string;
        };
    };
};
export declare const DEFAULT_KEYSTROKE_CONFIG: {
    PROFILE_ENABLED: string;
    CONFIG_MODE: string;
    PLUGIN_CONFIG: {
        PLUGIN_NAME: string;
        RESET_CONFIG: string;
        PARAM_LIST: {
            keystroke_output_enabled: string;
        };
    };
};
export declare const DEFAULT_RFID_CONFIG: {
    PROFILE_ENABLED: string;
    CONFIG_MODE: string;
    PLUGIN_CONFIG: {
        PLUGIN_NAME: string;
        RESET_CONFIG: string;
        PARAM_LIST: {
            rfid_input_enabled: string;
            rfid_selection: string;
            rfid_power_level: string;
            rfid_session: string;
            rfid_tag_population: string;
            rfid_operation_mode: string;
            rfid_trigger_mode: string;
            rfid_tag_read_duration: string;
        };
    };
};
//# sourceMappingURL=ProfileConstants.d.ts.map