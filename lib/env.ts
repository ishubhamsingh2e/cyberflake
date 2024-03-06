export const DEBUG = true
export const USE_IP = true
export const DEBUG_URL = "http://127.0.0.1:8000"
export const PRODUCTION_URL = "https://api.cyberflake.in"
export const PRODUCTION_IP = "195.35.20.112"
export const URL = DEBUG ? DEBUG_URL : (USE_IP ? `http://${PRODUCTION_IP}` : PRODUCTION_URL)
