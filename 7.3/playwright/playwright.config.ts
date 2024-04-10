import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 500,
    retries: 0,
    testIgnore: 'App.spec.js',
    use: {
        headless: true,
        ignoreHTTPSErrors: true,
        video: 'off'
    },
    projects: [
        { 
        name: 'Chromium',
        use: {browserName: 'chromium'}
        }
    ]
}
export default config