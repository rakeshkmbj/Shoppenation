
import { Injectable } from '@angular/core';

declare const chrome: any;

@Injectable({
    providedIn: 'root'
})
export class DeviceAuthService {

    private extensionId = 'mlcoelbiokdnackjeefieipoeckemfgc';

    verifyDevice(challengeId: string, nonce: string): Promise<any> {
        return new Promise((resolve, reject) => {

            console.log('DEVICE AUTH 1: verifyDevice() started');

            if (
                typeof chrome === 'undefined' ||
                !chrome.runtime ||
                !chrome.runtime.sendMessage
            ) {
                reject(new Error('Chrome runtime is unavailable'));
                return;
            }

            console.log('DEVICE AUTH 2: Sending message to extension');

            let responseReceived = false;

            const timeout = setTimeout(() => {
                if (!responseReceived) {
                    responseReceived = true;
                    reject(new Error('Device authentication timed out after 10 seconds'));
                }
            }, 10000);

            chrome.runtime.sendMessage(
                this.extensionId,
                {
                    action: 'verify_terminal',
                    challengeId: challengeId,
                    nonce: nonce
                },
                (response: any) => {

                    console.log('DEVICE AUTH 3: Extension callback executed');

                    if (responseReceived) {
                        return;
                    }

                    responseReceived = true;
                    clearTimeout(timeout);

                    if (chrome.runtime.lastError) {
                        console.error(
                            'DEVICE AUTH ERROR:',
                            chrome.runtime.lastError.message
                        );

                        reject(new Error(chrome.runtime.lastError.message));
                        return;
                    }

                    console.log('DEVICE AUTH 4: Extension response:', response);

                    if (!response || !response.success) {
                        reject(new Error(response?.message || 'Device verification failed'));
                        return;
                    }

                    resolve(response);
                }
            );
        });
    }
}
