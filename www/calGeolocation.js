/**
 *  Plugin diagnostic
 *
 *  Copyright (c) 2012 AVANTIC ESTUDIO DE INGENIEROS
 *  
**/


var CalGeolocation = function() {
};

/**
 * Checks if location is enabled (Device setting for location and authorization).
 *
 * @param successCallback	The callback which will be called when diagnostic of location is successful.
 * 							This callback function have a boolean param with the diagnostic result.
 * @param errorCallback		The callback which will be called when diagnostic of location encounters an error.
 * 							This callback function have a string param with the error.
 */

CalGeolocation.prototype.isLocationEnabled = function(successCallback, errorCallback) {
	return cordova.exec(successCallback,
						errorCallback,
						'CalGeolocation',
						'isLocationEnabled',
						[]);
};

/**
 * Checks device settings for location.
 *
 * @param successCallback	The callback which will be called when diagnostic of location is successful.
 * 							This callback function have a boolean param with the diagnostic result.
 * @param errorCallback		The callback which will be called when diagnostic of location encounters an error.
 * 							This callback function have a string param with the error.
 */

CalGeolocation.prototype.isLocationEnabledSetting = function(successCallback, errorCallback) {
	return cordova.exec(successCallback,
						errorCallback,
						'CalGeolocation',
						'isLocationEnabledSetting',
						[]);
};

CalGeolocation.prototype.switchToLocationSettings = function() {
	return cordova.exec(null,
						null,
						'CalGeolocation',
						'switchToLocationSettings',
						[]);
};


/**
 * Checks if the application is authorized to use location.
 *
 * @param successCallback	The callback which will be called when diagnostic of location is successful.
 * 							This callback function have a boolean param with the diagnostic result.
 * @param errorCallback		The callback which will be called when diagnostic of location encounters an error.
 * 							This callback function have a string param with the error.
 */

CalGeolocation.prototype.isLocationAuthorized = function(successCallback, errorCallback) {
	return cordova.exec(successCallback,
						errorCallback,
						'CalGeolocation',
						'isLocationAuthorized',
						[]);
};

/**
 * Checks if exists Wi-Fi connection.
 *
 * @param successCallback	The callback which will be called when diagnostic of Wi-Fi is successful.
 * 							This callback function have a boolean param with the diagnostic result.
 * @param errorCallback		The callback which will be called when diagnostic of Wi-Fi encounters an error.
 * 							This callback function have a string param with the error.
 */

CalGeolocation.prototype.isWifiEnabled = function(successCallback, errorCallback) {
	return cordova.exec(successCallback,
						errorCallback,
						'CalGeolocation',
						'isWifiEnabled',
						[]);
};

/**
 * Checks if exists camera.
 *
 * @param successCallback	The callback which will be called when diagnostic of camera is successful.
 * 							This callback function have a boolean param with the diagnostic result.
 * @param errorCallback		The callback which will be called when diagnostic of camera encounters an error.
 * 							This callback function have a string param with the error.
 */


CalGeolocation.prototype.isCameraEnabled = function(successCallback, errorCallback) {
	return cordova.exec(successCallback,
						errorCallback,
						'CalGeolocation',
						'isCameraEnabled',
						[]);
};

module.exports = new CalGeolocation();

