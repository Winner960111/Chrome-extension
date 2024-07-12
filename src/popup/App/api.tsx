import axios, { AxiosResponse } from "axios";

interface RegisterData {
  // Define the structure of your data object
  document: string;
  storeId: string;
  email: string;
  birthDate: string;
  firstname: string;
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
