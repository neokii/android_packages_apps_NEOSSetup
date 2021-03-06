import { AsyncStorage } from 'react-native';
import { request as Request, devices as Devices } from '@commaai/comma-api';
import ChffrPlus from '../../native/ChffrPlus';

export const ACTION_CONNECTION_STATUS_CHANGED = 'ACTION_CONNECTION_STATUS_CHANGED';
export const ACTION_WIFI_STATE_CHANGED = 'ACTION_WIFI_STATE_CHANGED';
export const ACTION_DEVICE_IDS_CHANGED = 'ACTION_DEVICE_IDS_CHANGED';
export const ACTION_SOFTWARE_URL_CHANGED = 'ACTION_SOFTWARE_URL_CHANGED';
export const ACTION_HAS_DATA_CONNECTION_CHANGED = 'ACTION_HAS_DATA_CONNECTION_CHANGED';


export function updateWifiState() {
    return async dispatch => {
        const wifiState = await ChffrPlus.getWifiState();

        dispatch({
            type: ACTION_WIFI_STATE_CHANGED,
            wifiState,
        });
    }
}

export function updateConnectionState(status) {
    return function (dispatch) {
        dispatch({
            type: ACTION_CONNECTION_STATUS_CHANGED,
            isConnected: status,
        });
    }
}

export function updateHasDataConnection(hasDataConnection) {
    return function (dispatch) {
        dispatch({
            type: ACTION_HAS_DATA_CONNECTION_CHANGED,
            hasDataConnection,
        });
    }
}

export function setDeviceIds() {
    return async (dispatch, getState) => {
        const imei = await ChffrPlus.getImei();
        const serial = await ChffrPlus.getSerialNumber();
        dispatch({
            type: ACTION_DEVICE_IDS_CHANGED,
            imei,
            serial,
        });
    }
}

export function updateSoftwareUrl(softwareUrl) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTION_SOFTWARE_URL_CHANGED,
            softwareUrl,
        })
    }
}
