
import { Injectable } from '@angular/core';

declare const chrome: any;

@Injectable({
    providedIn: 'root'
})
export class DeviceAuthService {

    // private extensionId = 'jdpbkcdhgbkgidbehgobanipchjlhjjo';

    private extensionId = 'mlcoelbiokdnackjeefieipoeckemfgc';



    verifyDevice(challengeId: string, nonce: string): Promise<any> {

        return new Promise((resolve, reject) => {

            console.log('DEVICE AUTH 1: verifyDevice() started');

            if (
                typeof chrome === 'undefined' ||
                !chrome.runtime ||
                !chrome.runtime.sendMessage
            ) {
                // Extension unavailable: continue with empty device details
                resolve({
                    success: true,
                    uid: '',
                    tid: '',
                    stamps: {
                        'X1.txt': '',
                        'X2.txt': '',
                        'X3.txt': '',
                        'X4.txt': ''
                    }
                });
                return;
            }

            let responseReceived = false;

            const timeout = setTimeout(() => {

                if (!responseReceived) {

                    responseReceived = true;

                    console.warn('Device authentication timed out. Continuing with empty device details.');

                    resolve({
                        success: true,
                        uid: '',
                        tid: '',
                        stamps: {
                            'X1.txt': '',
                            'X2.txt': '',
                            'X3.txt': '',
                            'X4.txt': ''
                        }
                    });
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

                    if (responseReceived) {
                        return;
                    }

                    responseReceived = true;
                    clearTimeout(timeout);

                    if (chrome.runtime.lastError) {

                        console.warn(
                            'Extension error. Continuing without device details:',
                            chrome.runtime.lastError.message
                        );

                        resolve({
                            success: true,
                            uid: '',
                            tid: '',
                            stamps: {
                                'X1.txt': '',
                                'X2.txt': '',
                                'X3.txt': '',
                                'X4.txt': ''
                            }
                        });

                        return;
                    }

                    console.log('DEVICE AUTH 4: Extension response:', response);

                    // Extension returned no response or unsuccessful response
                    if (!response || !response.success) {

                        resolve({
                            success: true,
                            uid: '',
                            tid: '',
                            stamps: {
                                'X1.txt': '',
                                'X2.txt': '',
                                'X3.txt': '',
                                'X4.txt': ''
                            }
                        });

                        return;
                    }

                    // Extension responded successfully, but some details may be missing
                    resolve({
                        success: true,
                        uid: response.uid || '',
                        tid: response.tid || '',
                        stamps: {
                            'X1.txt': response.stamps?.['X1.txt'] || '',
                            'X2.txt': response.stamps?.['X2.txt'] || '',
                            'X3.txt': response.stamps?.['X3.txt'] || '',
                            'X4.txt': response.stamps?.['X4.txt'] || ''
                        }
                    });

                }
            );

        });
    }


}
