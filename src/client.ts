import { AccountInfoResponse, AccountInfoParams, BaseParams, BaseResponse, ProcessingStatus } from './types';

class APIError extends Error {
  public response: BaseResponse;

  constructor(message: string, response: BaseResponse) {
    super(message);
    this.response = response;
  }
}

class TinyERPClient {
  private token: string;
  private baseUrl: string = 'https://api.tiny.com.br/api2';

  constructor(token: string) {
    this.token = token;
  }

  private async request<T extends BaseParams, R extends BaseResponse>(endpoint: string, data?: T): Promise<R> {
    try {
      const requestData = { ...data, token: this.token, formato: 'JSON' };

      const params = new URLSearchParams(requestData).toString();

      const response = await fetch(`${this.baseUrl}/${endpoint}.php?${params}`);

      const responseBody: R = await response.json();

      // This is done because the API returns a 200 status code even when there's an error.
      if (responseBody.retorno.status === 'Erro') {
        console.error(`API request failed: ${responseBody.retorno.status}`);
        throw new APIError(responseBody.retorno.erros!.map((error) => error.erro).join(', '), responseBody);
      }

      return responseBody;
    } catch (error) {
      console.error(`Failed to make request: ${error}`);
      throw error;
    }
  }

  getAccountInfo(data?: AccountInfoParams): Promise<AccountInfoResponse> {
    return this.request('info', data);
  }
}

export { TinyERPClient };
