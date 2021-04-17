import axios from 'axios'

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
export const setUserId = (uid) => axios.defaults.headers.common['userId'] = uid;

const baseUrl = "http://localhost:8080"
export const sendDebugReq = (code, bps) => {
    axios.post(`${baseUrl}/bpjs/debug`,
        {
            "sourceCode": code,
            "skipSyncStateToggle": true,
            "skipBreakpointsToggle": false,
            "breakpoints": bps
        })
};


export const getEventHsitory = (from, to) => {
    axios.get(`${baseUrl}/bpjs/events?from=${from}&to=${to}`)
};

export const stop = () => {
    axios.get(`${baseUrl}/bpjs/stop`)
};

export const stepOut = () => {
    axios.get(`${baseUrl}/bpjs/stepOut`)
};

export const stepInto = () => {
    axios.get(`${baseUrl}/bpjs/stepInto`)
};

export const stepOver = () => {
    axios.get(`${baseUrl}/bpjs/stepOver`)
};

export const cont = () => {
    axios.get(`${baseUrl}/bpjs/continue`)
};

export const nextSync = () => {
    axios.get(`${baseUrl}/bpjs/nextSync`)
};

export const muteBreakpoints = (mute) => {
    axios.put(`${baseUrl}/bpjs/breakpoint`, { skipBreakpoints: mute })
};

export const muteSyncState = (mute) => {
    axios.put(`${baseUrl}/bpjs/syncStates`, { skipSyncStates: mute })
};

export const addExternalEvent = (name) => {
    axios.post(`${baseUrl}/bpjs/externalEvent`,
        {
            "externalEvent": name,
            "addEvent": true,
        })
};

export const backToSnapShot = (time) => {
    axios.post(`${baseUrl}/bpjs/syncSnapshot`,
        {
            "snapShotTime": time
        })
};


export const removeExternalEvent = (name) => {
    axios.post(`${baseUrl}/bpjs/externalEvent`,
        {
            "externalEvent": name,
            "addEvent": false,
        })
};