export interface IRegisterResponse {
    name:       string;
    username:   string;
    email:      string;
    avatar_url: null;
    googleId:   null;
    id:         string;
    isActive:   boolean;
    google:     boolean;
    token:      string;
}

export interface IRegisterError {
    message: string;
    name:    string;
    stack:   string;
    config:  Config;
    code:    string;
    status:  number;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Env;
    headers:           Headers;
    method:            string;
    url:               string;
    data:              string;
}

export interface Env {
}

export interface Headers {
    Accept:         string;
    "Content-Type": string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}
