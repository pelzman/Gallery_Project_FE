import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: apiURL, // Replace with your API base URL
});

// Function to get tokens from local storage (or any other storage mechanism)
export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

// Function to store tokens in local storage
export const storeTokens = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  // localStorage.setItem("refreshToken", refreshToken);
};
// Function to remove tokens from local storage
export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

// Function to refresh tokens
export const refreshTokens = async () => {
  const { refreshToken } = getTokens();
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(
    "https://your-api-base-url.com/auth/refresh-token",
    {
      refreshToken,
    }
  );

  const { accessToken } = response.data;
  storeTokens(accessToken);

  return accessToken;
};

// Request interceptor to add access token to headers
api.interceptors.request.use(
  async (config) => {
    const { accessToken } = getTokens();
    if (accessToken) {
      config.headers["Authorization"] = ` ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshTokens();
        axios.defaults.headers.common[
          "Authorization"
        ] = ` Bearer ${newAccessToken}`;
        originalRequest.headers["Authorization"] = ` Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        clearTokens();
        window.location.href = "auth/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export const apiRequest = api;
