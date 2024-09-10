import { apiRequest } from "../api";
import { ILoginResponse, loginAttribute } from "../types/index"


class AuthService {
  public async login(payload: loginAttribute): Promise<ILoginResponse> {

    return await apiRequest.post(`auth/login`, payload)


  }

}

export default AuthService