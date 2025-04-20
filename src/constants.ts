export const API_ENDPOINTS = {
    LOGIN: '/thirdData/login',
    GET_PLANT_LIST: '/thirdData/getStationList',
    GET_PLANT_REALTIME_KPI: '/thirdData/getStationRealKpi',
    GET_PLANT_HISTORY_KPI: '/thirdData/getKpiStationDay',
    GET_DEVICE_LIST: '/thirdData/getDevList',
    GET_DEVICE_REALTIME_KPI: '/thirdData/getDevRealKpi',
    GET_DEVICE_HISTORY_KPI: '/thirdData/getDevKpiDay'
};

export const DEFAULT_HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

export const DEFAULT_TIMEOUT = 30000; 