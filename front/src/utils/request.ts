import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();


export const request = async (url: string, config: RequestInit) => {
    const response =  await fetch(url, config);
    return await response.json();
};
export const login = (loginRequest: any) => {
    return request(`${publicRuntimeConfig.API_URL}/api/auth/signin`,
        {headers: {'Content-Type': 'application/json'},method: 'POST', body: JSON.stringify(loginRequest)});
};

export const signup = (signupRequest: any) => {
    return request(`${publicRuntimeConfig.API_URL}/api/auth/signup`,
        {headers: {'Content-Type': 'application/json'},method: 'POST', body: JSON.stringify(signupRequest)});
};

export const checkUsernameAvailability = (username: any) => {
    return request(`${publicRuntimeConfig.API_URL}/user/checkUsernameAvailability?username=${username}`,
        {method: 'GET'});
};

export const checkEmailAvailability = (email: any) => {
    return request(`${publicRuntimeConfig.API_URL}/user/checkEmailAvailability?email=${email}`,
        {method: 'GET'});
};

export const getCurrentUser = () => {
    if(!localStorage.getItem('accessToken')) {
        return Promise.reject("No access token set.");
    }

    return request(`${publicRuntimeConfig.API_URL}/user/me`,
        {method: 'GET'});
};