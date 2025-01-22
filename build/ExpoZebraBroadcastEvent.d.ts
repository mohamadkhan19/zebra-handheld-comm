type AppData = {
    PACKAGE_NAME: string;
    ACTIVITY_LIST: string[];
};
export type BroadcastExtras = {
    PROFILE_NAME?: string;
    PROFILE_ENABLED?: string;
    CONFIG_MODE?: string;
    PLUGIN_CONFIG?: {
        PLUGIN_NAME: string;
        RESET_CONFIG?: string;
        PARAM_LIST?: {
            [key: string]: any;
        };
        [key: string]: any;
    };
    APP_LIST?: AppData[];
    [key: string]: any;
};
export type BroadcastEvent = {
    action: string;
    extras: BroadcastExtras | string;
};
export {};
//# sourceMappingURL=ExpoZebraBroadcastEvent.d.ts.map