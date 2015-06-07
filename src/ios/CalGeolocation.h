//
//  CalGeolocation.h
//  Plugin CalGeolocation
//
//  Copyright (c) 2012 AVANTIC ESTUDIO DE INGENIEROS
//

#import <Cordova/CDV.h>

@interface CalGeolocation : CDVPlugin

- (void) isLocationEnabled: (CDVInvokedUrlCommand*)command;
- (void) isLocationEnabledSetting: (CDVInvokedUrlCommand*)command;
- (void) switchToLocationSettings: (CDVInvokedUrlCommand*)command;
- (void) isLocationAuthorized: (CDVInvokedUrlCommand*)command;
- (void) isWifiEnabled: (CDVInvokedUrlCommand*)command;
- (void) isCameraEnabled: (CDVInvokedUrlCommand*)command;

@end
