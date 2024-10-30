/// <reference types="react-scripts" />

interface RuntimeConfig {
    API_URL: string;
}

interface Window {
    runtimeConfig: RuntimeConfig;
}