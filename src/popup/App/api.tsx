import { rejects } from "assert";
import axios, { AxiosResponse } from "axios";
import { resolve } from "path";

interface RegisterData {
  // Define the structure of your data object
  document: string;
  storeId: string;
  email: string;
  birthDate: string;
  firstname: string;
  lastname: string;
  iAcceptRegulation: boolean;
  iAgreeToReceiveEmail: boolean;
  accordingToLgpd: boolean;
  iAgreeToReceiveSms: boolean;
  sex: number;
  address: string;
  number: string;
  complement: string;
  city: string;
  cellphone: string;
  accountManager: string;
  zipCode: string;
  type: string;
  state: string;
  partnerGroupId: string;
  password: string;
  district: string;
}
interface LoginData {
  document: string;
  email: string;
}
// interface SalaryData {
//   document: string;
//   email: string;
//   cashback: Boolean;
//   validateRuleByOrder: Boolean;
//   validMember: Boolean;
//   purchaseValue: Number;
//   levelValid: Boolean;
//   redeemValid: Boolean;
//   byEmail: string;
// }

export const Register = async (data: RegisterData): Promise<AxiosResponse> => {
  console.log("this is submit====>", data);
  const url =
    "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/public/client-member/sign-up";
  try {
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        "content-type": "application/json",
        "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
        // Origin: "https://dominio-da.requisicao.com",
        "x-language-custom": "en-US",
        "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
      },
    });
    return response;
  } catch (e) {
    return { status: 400 } as AxiosResponse; // Return a dummy response with status 400
  }
};

export const Login = async (data: LoginData): Promise<AxiosResponse> => {
  console.log("this is submit====>", data);
  const url =
    "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/public/authenticate/extension";
  try {
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        "content-type": "application/json",
        "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
        // Origin: "https://dominio-da.requisicao.com",
        "x-language-custom": "en-US",
        "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
      },
    });
    return response;
  } catch (e) {
    return { status: 400 } as AxiosResponse; // Return a dummy response with status 400
  }
};

export const GetBrand = async (token: string): Promise<AxiosResponse> =>
  new Promise((resolve, reject) => {
    const url =
      "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/protected/stores-with-cashback";
    axios
      .get(url, {
        params: { offset: 0, limit: 100 },
        headers: {
          accept: "text/plain",
          "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
          "x-language-custom": "en-US",
          "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
          "x-token-authorization-customer": token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const GetRecent = async (token: string): Promise<AxiosResponse> =>
  new Promise((resolve, rejects) => {
    const url =
      "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/protected/last-visited-stores";
    axios
      .get(url, {
        params: { offset: 0, limit: 100 },
        headers: {
          accept: "text/plain",
          "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
          "x-language-custom": "en-US",
          "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
          "x-token-authorization-customer": token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        rejects(err);
      });
  });

export const GetSalary = async (
  token: string,
  doc: string,
  email: string
): Promise<AxiosResponse> =>
  new Promise((resolve, reject) => {
    const data = {
      document: doc,
      email: email,
      cashback: true,
      validateRuleByOrder: true,
      validMember: true,
      purchaseValue: 0,
      levelValid: true,
      redeemValid: true,
      byEmail: "string",
    };
    console.log("this is Salary====>", data);

    const url =
      "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/protected/motor-of-points/check-balance";
    axios
      .post(url, data, {
        headers: {
          accept: "text/plain",
          "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
          "x-language-custom": "en-US",
          "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
          "x-token-authorization-customer": token,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const Confirm = async (token: string): Promise<AxiosResponse> => {
  const url =
    "https://zeus-browser-extension-mservice.fidelizarmais.com/api/v1/public/authenticate/validate";
  const data = {
    token: token,
  };
  try {
    const response: AxiosResponse = await axios.post(url, data, {
      headers: {
        "content-type": "application/json",
        "x-secret-key": "d5bb12cd-138e-4831-81c6-6b5b7491a578",
        "x-language-custom": "en-US",
        "x-store-key": "77e94448-785d-41e0-b575-7420a192b362",
      },
    });
    return response;
  } catch (e) {
    return { status: 400 } as AxiosResponse; // Return a dummy response with status 400
  }
};
