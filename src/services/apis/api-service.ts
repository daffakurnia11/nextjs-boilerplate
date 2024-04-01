import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import {
  loginStorage,
  messageContent,
  setMessageContent,
} from "@/stores/atom";
import * as url from "../urls/base";

export class ApiService {
  /**
   * Create Axios Instance.
   */
  private axiosInstance: AxiosInstance;
  /**
   * Login data declaration from local storage.
   * @returns Login Data string
   */
  private loginData(): string {
    const data = localStorage.getItem("user-login");
    return data ?? "";
  }

  /**
   * API Service constructor.
   * Contains of declaration of API Base URL, Request Interceptor, and Response Interceptor.
   */
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: url.APIURL,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /**
   * Request Interceptor
   * For intercepting the request call to the API.
   * Adding the Authorization headers for using a access token from Backend
   */
  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const userDataString = this.loginData();
        const userData = JSON.parse(userDataString);
        config.headers[
          "Authorization"
        ] = `Bearer ${userData.state.token.access}`;
        config.headers["ngrok-skip-browser-warning"] = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Response Interceptor
   * For intercepting the response call to the API.
   * When the access token is invalid, the API is automatically call the refresh token API
   */
  private initializeResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(undefined, async (err) => {
      const userDataString = this.loginData();
      let userData = JSON.parse(userDataString);
      const originalConfig = err.config;

      if (
        err.config.url !== url.LoginURL &&
        err.response.status === 401 &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true;
        try {
          const data = {
            refresh: userData.state.token.refresh,
          };
          const rs = await this.axiosInstance.post(url.RefreshTokenURL(), data);

          userData.state.token = rs.data;
          localStorage.setItem("user-login", JSON.stringify(userData));

          return this.axiosInstance(originalConfig);
        } catch (_error) {
          this.errorHandling;
          return Promise.reject(_error);
        }
      }

      return Promise.reject(err);
    });
  }

  /**
   * Notification Handling
   * To store the message content to Jotai Atom state management.
   * @param type Toast Message type
   * @param message Message from API Response
   * @returns Message Response string
   */
  private notifHandling(type: any, message: string) {
    setMessageContent.set(messageContent, {
      type: type,
      title: "Something went wrong",
      description: message,
    });
    return message;
  }

  /**
   * Error Handling
   * Used for handling the error when the access token and refresh token is invalid.
   * @param error Error response from API
   * @returns Notification handling function
   */
  private errorHandling(error: AxiosError) {
    delete axios.defaults.headers["Authorization"];
    delete axios.defaults.headers.common["Authorization"];
    if (error?.response?.status === 401) {
      loginStorage.setState((prev: any) => ({
        ...prev,
        login: false,
        userData: {},
        token: {
          access: null,
          refresh: null,
        },
        setup: {
          mode: "light",
        },
      }));
    }
    return this.notifHandling("warning", String(error?.response));
  }

  /**
   * Request function
   * Used for generalizing the request method from Axios.
   * @param config Axios Request Config
   * @returns Axios Instance function
   */
  protected async request(config: AxiosRequestConfig) {
    return this.axiosInstance(config)
      .then((response) => response)
      .catch((error) =>{
        if ("response" in error) return this.notifHandling("warning", error.response.data.message)
        return this.notifHandling("warning", "We can't continue with your request. Please try again later.")
      });
  }

  public async get(url: string) {
    return await this.request({ method: "GET", url: url });
  }

  public async post(url: string, payload?: any) {
    return await this.request({ method: "POST", url: url, data: payload });
  }

  public async put(url: string, payload?: any) {
    return await this.request({ method: "PUT", url: url, data: payload });
  }

  public async patch(url: string, payload?: any) {
    return await this.request({ method: "PATCH", url: url, data: payload });
  }

  public async delete(url: string, payload?: any) {
    return await this.request({ method: "DELETE", url: url, data: payload });
  }
}
