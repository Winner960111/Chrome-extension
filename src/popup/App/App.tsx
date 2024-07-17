import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { AxiosResponse } from "axios";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsJournalText } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Service from "./elements/Service";
import ServiceList from "./elements/ServiceList";
import { TbMessage2 } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import Extract from "./elements/Extract";
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { Register, Login, GetBrand, Confirm } from "../App/api";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

interface BrandListType {
  logo: string;
  cashbackFormatted: string;
  companyName: string;
}

type ContextType = {
  brandList: BrandListType[];
  setBrandList: React.Dispatch<React.SetStateAction<BrandListType[]>>;
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  gender: number;
  setGender: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  secNum: string;
  setSecNum: React.Dispatch<React.SetStateAction<string>>;
  CPF: string;
  setCPF: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  birthday: string;
  setBirthday: React.Dispatch<React.SetStateAction<string>>;
  CEP: string;
  setCEP: React.Dispatch<React.SetStateAction<string>>;
  street: string;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  complement: string;
  setComplement: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

const MyContext = createContext<ContextType | undefined>(undefined);

function App() {
  const [currentView, setCurrentView] = useState("Landing");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(0);
  const [email, setEmail] = useState("");
  const [secNum, setSecNum] = useState("");
  const [CPF, setCPF] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [CEP, setCEP] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [brandList, setBrandList] = useState<BrandListType[]>([]); // Provide an initial value as an empty array of strings
  return (
    <>
      <MyContext.Provider
        value={{
          brandList,
          setBrandList,
          currentView,
          setCurrentView,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          gender,
          setGender,
          email,
          setEmail,
          secNum,
          setSecNum,
          CPF,
          setCPF,
          phoneNumber,
          setPhoneNumber,
          birthday,
          setBirthday,
          CEP,
          setCEP,
          street,
          setStreet,
          number,
          setNumber,
          complement,
          setComplement,
          address,
          setAddress,
          city,
          setCity,
          state,
          setState,
        }}
      >
        {currentView === "Landing" && <Landing />}
        {currentView === "Registration1" && <Registration1 />}
        {currentView === "Registration2" && <Registration2 />}
        {currentView === "Home" && <Home />}
      </MyContext.Provider>
    </>
  );
}

const Landing = () => {
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const { setCurrentView, setBrandList } = useContext(MyContext)!;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedInputValue =
      inputValue.substring(0, 3) +
      (inputValue.length > 3 ? "." : "") +
      inputValue.substring(3, 6) +
      (inputValue.length > 6 ? "." : "") +
      inputValue.substring(6, 9) +
      (inputValue.length > 9 ? "-" : "") +
      inputValue.substring(9, 11);

    setCPF(formattedInputValue);
  };

  const handleLogin = async () => {
    const data = {
      document: CPF,
      email: email,
    };
    const response: AxiosResponse | { status: number; data: any } = await Login(
      data
    );
    if (response.status === 200) {
      console.log("this is right", response.data.data.token);
      while (true) {
        const confirmRes: AxiosResponse | { status: number; data: any } =
          await Confirm(response.data.data.token);
        console.log("this is right💖💖💖===>", confirmRes.data.statusCode);
        if (confirmRes.status === 200 && confirmRes.data.statusCode === 200) {
          setCurrentView("Home");
          break;
        }
      }
      const tokenRes: AxiosResponse | { status: number; token: any } =
        await GetBrand(response.data.data.token);

      if (tokenRes.status === 200) {
        console.log("Passed===>", tokenRes.data.data);
        setBrandList(tokenRes.data.data);
      } else {
        console.log("this is wrong", tokenRes);
      }
    } else {
      console.log("this is wrong", response);
    }
  };

  return (
    <div className="w-[800px] h-[600px] flex flex-col justify-center items-center p-5 bg-[#212121] gap-8">
      <div
        className="flex w-full justify-center rounded-2xl px-4 pt-4"
        style={{ backgroundImage: `url(/assets/back.png)` }}
      >
        <img src="/assets/backimg.png" alt="img1" />
      </div>
      <div className="flex w-full flex-col px-4 pb-4">
        <p className="text-white text-[22px] font-bold text-md">
          Informe seus dados de login
        </p>
        <div className="flex w-full text-white text-md flex-col">
          <div className="flex gap-4">
            <input
              type="text"
              style={{ outline: "none" }}
              onChange={handleEmail}
              className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]"
              placeholder="Endereço de e-mail"
            />
            <input
              type="text"
              value={CPF}
              style={{ outline: "none" }}
              onChange={handleCPF}
              className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]"
              placeholder="CPF"
            />
          </div>
          <div
            className="mt-8 bg-[#BF0811] w-full text-center rounded-md py-3 text-lg active:bg-red-800 cursor-pointer"
            onClick={handleLogin}
          >
            Entrar
          </div>
          <div
            className="w-full text-center rounded-md py-3 text-lg cursor-pointer"
            onClick={() => {
              setCurrentView("Registration1");
            }}
          >
            Crie uma nova conta
          </div>
        </div>
      </div>
    </div>
  );
};

const Registration1 = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setGender,
    email,
    setEmail,
    secNum,
    setSecNum,
    CPF,
    setCPF,
    phoneNumber,
    setPhoneNumber,
    birthday,
    setBirthday,
  } = useContext(MyContext)!;
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedInputValue =
      (inputValue.length > 1 ? "(" : "") +
      inputValue.substring(0, 2) +
      (inputValue.length > 2 ? ") " : "") +
      inputValue.substring(2, 3) +
      (inputValue.length > 3 ? " " : "") +
      inputValue.substring(3, 7) +
      (inputValue.length > 7 ? "-" : "") +
      inputValue.substring(7, 11);
    setPhoneNumber(formattedInputValue);
  };

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "mail") {
      setGender(1);
    } else if (e.target.value === "female") {
      setGender(2);
    } else {
      setGender(0);
    }
  };
  const handleCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedInputValue =
      inputValue.substring(0, 3) +
      (inputValue.length > 3 ? "." : "") +
      inputValue.substring(3, 6) +
      (inputValue.length > 6 ? "." : "") +
      inputValue.substring(6, 9) +
      (inputValue.length > 9 ? "-" : "") +
      inputValue.substring(9, 11);

    setCPF(formattedInputValue);
  };

  const handleSecNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    // if (/^[0-9]+$/.test(inputValue) || !inputValue.trim()) {
    setSecNum(e.target.value);
    // }
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z]+$/.test(e.target.value) || !e.target.value.trim()) {
      setFirstName(e.target.value);
    }
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z]+$/.test(e.target.value) || !e.target.value.trim()) {
      setLastName(e.target.value);
    }
  };
  const { setCurrentView } = useContext(MyContext)!;

  return (
    <>
      <div className="w-[800px] h-[600px] flex flex-col font-baloo pb-4">
        <div className="flex w-full bg-[#212121] px-4 justify-between py-5">
          <IoIosArrowBack
            onClick={() => setCurrentView("Landing")}
            style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
          />
          <img src="/assets/logo.png" alt="logo" />
          <img src="/assets/progress1.png" alt="progress" />
        </div>
        <div className="flex w-full flex-col px-4">
          <p className="font-bold mt-4 text-[20px]">Detalhes gerais</p>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="fname" className="w-full font-medium text-[16px]">
              Primeiro Nome
              <input
                type="text"
                id="fname"
                value={firstName}
                onChange={handleFirstName}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Escreva seu nome e sobrenome"
              />
            </label>
            <label htmlFor="lname" className="w-full font-medium text-[16px]">
              Sobrenome
              <input
                type="text"
                id="lname"
                value={lastName}
                onChange={handleLastName}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Escreva seu nome e sobrenome"
              />
            </label>

            <label htmlFor="gender" className="w-full font-medium text-[16px]">
              Gênero
              <select
                id="gender"
                onChange={handleGender}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
              >
                <option value="none" className="text-[#888]">
                  Selecione seu gênero
                </option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Outros</option>
              </select>
            </label>
          </div>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="mail" className="w-full font-medium text-[16px]">
              E-mail
              <input
                type="text"
                id="mail"
                value={email}
                onChange={handleEmail}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Endereço de e-mail"
              />
            </label>

            <label htmlFor="name" className="w-full font-medium text-[16px]">
              Senha
              <input
                type="text"
                id="name"
                value={secNum}
                onChange={handleSecNum}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Defina sua senha"
              />
            </label>
          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">
              CPF
              <input
                type="text"
                id="name"
                value={CPF}
                onChange={handleCPF}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="000.000.000-00"
              />
            </label>

            <label htmlFor="name" className="w-full font-medium text-[16px]">
              Número de telefone
              <input
                type="text"
                id="name"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="(00) 0 0000-0000"
              />
            </label>
          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="date" className="w-full font-medium text-[16px]">
              Data de nascimento
              <input
                type="date"
                id="date"
                value={birthday}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setBirthday(e.target.value);
                }}
                autoComplete="off"
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
              />
            </label>
          </div>

          <div className="flex w-full mt-12 gap-4 text-white text-lg">
            <button
              className="bg-[#F8F8F8] py-3 w-full rounded-md active:bg-gray-200 text-[#929292]"
              onClick={() => setCurrentView("Landing")}
            >
              Voltar
            </button>
            <button
              className="bg-[#BF0811] py-3 w-full rounded-md active:bg-red-800"
              onClick={() => setCurrentView("Registration2")}
            >
              Avançar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Registration2 = () => {
  const {
    setCurrentView,
    CEP,
    setCEP,
    city,
    setCity,
    address,
    setAddress,
    complement,
    setComplement,
    number,
    setNumber,
    street,
    setStreet,
    state,
    setState,
    firstName,
    lastName,
    gender,
    email,
    secNum,
    CPF,
    phoneNumber,
    birthday,
  } = useContext(MyContext)!;

  const handleRegister = async () => {
    const data = {
      document: CPF,
      storeId: "77e94448-785d-41e0-b575-7420a192b362",
      email: email,
      birthDate: birthday,
      firstname: firstName,
      lastname: lastName,
      iAcceptRegulation: true,
      iAgreeToReceiveEmail: true,
      accordingToLgpd: true,
      iAgreeToReceiveSms: false,
      sex: gender,
      address: address,
      number: number,
      complement: complement,
      city: city,
      cellphone: phoneNumber,
      accountManager: "Browser Extension" + CPF,
      zipCode: CEP,
      type: "widget",
      state: state,
      partnerGroupId: "00000000-0000-0000-0000-000000000000",
      password: secNum,
      district: street,
    };
    const response: AxiosResponse | { status: number } = await Register(data);
    if (response.status === 200) {
      console.log("this is right", response);

      setCurrentView("Landing");
    } else {
      console.log("this is wrong", response);
    }
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleComplement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComplement(e.target.value);
  };
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[0-9]*$/.test(newValue) && newValue.length <= 3) {
      setNumber(newValue);
    }
  };

  const handleStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[a-zA-Z0-9 ]+$/.test(e.target.value) || !e.target.value.trim()) {
      setStreet(e.target.value);
    }
  };

  const handleCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    const formattedInputValue =
      inputValue.substring(0, 5) +
      (inputValue.length > 5 ? "-" : "") +
      inputValue.substring(5, 8);
    setCEP(formattedInputValue);
  };

  return (
    <>
      <div className="w-[800px] h-[600px] flex flex-col font-baloo pb-4">
        <div className="flex w-full bg-[#212121] px-4 justify-between py-5">
          <IoIosArrowBack
            onClick={() => setCurrentView("Registration1")}
            style={{ color: "white", fontSize: "2rem", cursor: "pointer" }}
          />
          <img src="/assets/logo.png" alt="logo" />
          <img src="/assets/progress2.png" alt="progress" />
        </div>
        <div className="flex w-full flex-col px-4">
          <p className="font-bold mt-4 text-[20px]">Endereço residencial</p>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">
              CEP
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={CEP}
                onChange={handleCEP}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="00000-000"
              />
            </label>
          </div>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="mail" className="w-[40%] font-medium text-[16px]">
              Endereço
              <input
                type="text"
                id="mail"
                autoComplete="off"
                value={street}
                onChange={handleStreet}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Rua ou avenida"
              />
            </label>

            <label htmlFor="name" className="w-[20%] font-medium text-[16px]">
              Número
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={number}
                onChange={handleNumber}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="000"
              />
            </label>

            <label htmlFor="name" className="w-[40%] font-medium text-[16px]">
              Complemento
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={complement}
                onChange={handleComplement}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Casa, apartamento ou referência"
              />
            </label>
          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">
              Bairro
              <input
                type="text"
                id="name"
                autoComplete="off"
                value={address}
                onChange={handleAddress}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Escreva o nome do seu bairro"
              />
            </label>
          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="date" className="w-[80%] font-medium text-[16px]">
              Cidade
              <input
                type="text"
                id="date"
                autoComplete="off"
                value={city}
                onChange={handleCity}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
                placeholder="Ex: Campinas"
              />
            </label>

            <label htmlFor="estate" className="w-[20%] font-medium text-[16px]">
              Estado
              <select
                id="estate"
                onChange={(e) => setState(e.target.value)}
                className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none"
              >
                <option value="1">AC</option>
                <option value="2">AL</option>
                <option value="3">AP</option>
                <option value="3">AM</option>
                <option value="3">BA</option>
                <option value="3">CE</option>
                <option value="3">DF</option>
                <option value="3">ES</option>
                <option value="3">GO</option>
                <option value="3">MA</option>
                <option value="3">MT</option>
                <option value="3">MS</option>
                <option value="3">MG</option>
                <option value="3">MS</option>
                <option value="3">PA</option>
                <option value="3">PB</option>
                <option value="3">PR</option>
                <option value="3">PE</option>
                <option value="3">PI</option>
                <option value="3">RJ</option>
                <option value="3">RN</option>
                <option value="3">RS</option>
                <option value="3">RO</option>
                <option value="3">RS</option>
                <option value="3">RR</option>
                <option value="3">SC</option>
                <option value="3">SP</option>
                <option value="3">SE</option>
                <option value="3">TO</option>
              </select>
            </label>
          </div>

          <div className="flex w-full mt-12 gap-4 text-white text-lg">
            <button
              className="bg-[#F8F8F8] py-3 w-full rounded-md active:bg-gray-200 text-[#929292]"
              onClick={() => setCurrentView("Registration1")}
            >
              Voltar
            </button>
            <button
              className="bg-[#BF0811] py-3 w-full rounded-md active:bg-red-800"
              onClick={handleRegister}
            >
              Concluir
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const { setCurrentView, brandList } = useContext(MyContext)!;
  const [store, setStore] = useState(true);
  const [extract, setExtract] = useState(false);
  const [setting, setSetting] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [account, setAccount] = useState(false);
  const [modal, setModal] = useState(false);
  const [searchList, setSearchList] = useState<BrandListType[]>(brandList);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = brandList.filter((item) =>
      item.companyName.toLowerCase().includes(searchValue)
    );
    setSearchList(filteredList);
  };

  const handleStore = () => {
    setStore(true);
    setExtract(false);
    setSetting(false);
  };
  const handleExtract = () => {
    setStore(false);
    setExtract(true);
    setSetting(false);
  };
  const handleSetting = () => {
    setStore(false);
    setExtract(false);
    setSetting(true);
  };
  const handleAccount = () => {
    if (account) {
      setAccount(false);
    } else {
      setAccount(true);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      // Click occurred outside the container
      setAccount(false);
      // Perform your desired action here
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      <div
        className={`relative w-[800px] h-[600px] flex flex-col font-baloo ${
          modal ? "bg-black bg-opacity-30" : ""
        }`}
      >
        <div className="relative flex w-full bg-[#212121] px-4 py-5 justify-between">
          <img src="/assets/logo.png" alt="logo" />
          <div className="flex">
            <div
              className="flex items-center bg-[#2A2A2A] px-2 rounded-full cursor-pointer"
              onClick={handleAccount}
            >
              <FaRegUserCircle style={{ color: "white", fontSize: "25px" }} />
              <div className="flex flex-col text-white ml-1 text-[9px]">
                <p className="leading-3">Laura</p>
                <p className="font-bold">R$ 47.32</p>
              </div>
            </div>
            <div className="rounded-full bg-[#2A2A2A] flex justify-center items-center p-1 ml-2">
              <MdOutlineClose style={{ color: "white", fontSize: "25px" }} />
            </div>
          </div>

          {account && (
            <div
              className="absolute top-20 right-8 z-[100] flex w-[477px] bg-white p-5 rounded-xl flex-col"
              ref={containerRef}
            >
              <div className="flex w-full justify-between">
                <div className="flex gap-5 items-center">
                  <FaRegUserCircle
                    style={{ color: "#464646", fontSize: "30px" }}
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-[16px] text-[#464646]">
                      Laura Oliveira
                    </p>
                    <p className="text-[14px] text-[#888]">200.000.000-00</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] text-[#464646]">Meu saldo</p>
                  <p className="text-[16px] font-bold text-[#464646]">
                    R$ 47,32
                  </p>
                </div>
              </div>
              <div className="my-5 border-solid border-[1px] border-[#E4E4E4]"></div>

              <div className="flex w-full flex-col">
                <div className="flex w-full text-[#464646] gap-6 items-center">
                  <TbMessage2 style={{ fontSize: "16px" }} />
                  <p className="font-bold text-[16px]">Precisa de ajuda</p>
                </div>
                <div className="flex w-full text-[#464646] gap-6 items-center my-5">
                  <TbMessage2 style={{ fontSize: "16px" }} />
                  <p className="font-bold text-[16px]">Indique e ganhe</p>
                </div>
              </div>

              <div
                className="flex w-full rounded-full bg-[#F8F8F8] justify-center py-3 cursor-pointer hover:bg-gray-200 active:bg-[#F8F8F8]"
                onClick={() => setCurrentView("Landing")}
              >
                <div className="flex items-center text-[#BF0811]">
                  <RiLogoutBoxLine style={{ fontSize: "20px" }} />
                  <p className="text-[20px]">Finalizar sessão</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {store && (
          <div
            className={`flex w-full flex-col px-4 overflow-y-scroll font-baloo ${
              onSearch ? "bg-black bg-opacity-30" : ""
            } ${account ? "bg-black bg-opacity-30" : ""}`}
          >
            <div className="flex flex-col">
              <div className="relative my-8">
                <input
                  type="text"
                  className={`bg-[#F8F8F8] rounded-full w-full outline-none py-4 px-6 ${
                    onSearch ? "bg-white" : ""
                  }`}
                  onChange={handleList}
                  placeholder="Buscar por nome da loja"
                  onFocus={() => setOnSearch(true)}
                  onBlur={() => setOnSearch(false)}
                />

                <div className="absolute right-4 top-4 z-10">
                  <CiSearch style={{ fontSize: "25px" }} />
                </div>
                {onSearch && (
                  <div className="absolute top-24 w-full h-[280px] bg-white rounded-2xl flex p-5 -mt-5 divide-y-[1px] divide-gray-300 flex-col overflow-y-auto">
                    {searchList.map((items, index) => (
                      <ServiceList
                        logo={items.logo}
                        cashback={items.cashbackFormatted}
                        name={items.companyName}
                        key={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-[#464646] text-[20px]">
                Últimas lojas acessadas
              </p>
              <div className="flex gap-2">
                <Service />
                <Service />
                <Service />
                <Service />
              </div>
            </div>

            <div className="flex flex-col my-8">
              <p className="font-bold text-[#464646] text-[20px]">
                Lojas populares
              </p>
              <div className="flex gap-2">
                <Service />
                <Service />
                <Service />
                <Service />
              </div>
            </div>
          </div>
        )}
        {extract && (
          <div className={`flex w-full font-baloo flex-col `}>
            <div className="flex w-full bg-[#212121] p-5">
              <div className="flex bg-[#2A2A2A] p-5 text-white rounded-md w-full flex-col items-start">
                <p className="text-[18px]">Meu saldo</p>
                <div className="w-full flex justify-between items-center">
                  <p className="text-[28px] font-bold">R$ 47.32</p>
                  <LuEye style={{ fontSize: "24px" }} />
                </div>
                <p className="text-[16px]">
                  O resgate do valor atual ficará disponível assim que seu saldo
                  chegar a R$ 20.
                </p>
              </div>
            </div>
            <div
              className={`flex w-full h-[290px] px-5 py-8 bg-white flex-col overflow-y-auto ${
                modal ? "bg-black bg-opacity-30" : ""
              } ${account ? "bg-black bg-opacity-30" : ""}`}
            >
              <p className="text-[20px] font-bold">Meu extrato</p>
              <div onClick={() => setModal(true)} className="cursor-pointer">
                <Extract />
              </div>
            </div>
            {modal && (
              <div className="absolute top-0 flex w-full h-full justify-center items-center">
                <div className="flex w-[768px] h-[307px] flex-col divide-y-[1px] divide-[#E4E4E4] rounded-2xl bg-white p-5">
                  <div className="flex mb-6 text-[#464646] items-center justify-between">
                    <p className="text-[18px] font-bold">Mais detalhes</p>
                    <div
                      className="hover:text-red-500 cursor-pointer"
                      onClick={() => {
                        setModal(false);
                      }}
                    >
                      <MdOutlineClose style={{ fontSize: "20px" }} />
                    </div>
                  </div>
                  <div className="py-6 flex justify-between items-center">
                    <div>
                      <p className="text-[16px] font-medium text-[#464646]">
                        Magazine Luiza
                      </p>
                      <p className="text-[15px] text-[#9E9E9E]">25/05/24</p>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-[16px] font-medium text-[#464646]">
                        R$ 43,18
                      </p>
                      <p className="text-[15px] text-[#9E9E9E]">
                        4% de R$ 457,13
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center py-6 justify-between">
                      <div className="flex gap-2 items-center">
                        <CiCalendar
                          style={{ fontSize: "20px", color: "text-[#464646]" }}
                        />
                        <p className="text-[16px] font-bold text-[#464646]">
                          Compra realizada
                        </p>
                      </div>
                      <p className="text-[15px] text-[#9E9E9E]">20/05/24</p>
                    </div>

                    <div className="flex items-center py-6 justify-between">
                      <div className="flex gap-2 items-center">
                        <CiLocationOn
                          style={{ fontSize: "20px", color: "text-[#464646]" }}
                        />
                        <p className="text-[16px] font-bold text-[#464646]">
                          Cashback rastreado
                        </p>
                      </div>
                      <p className="text-[15px] text-[#9E9E9E]">20/05/24</p>
                    </div>

                    <div className="flex items-center py-6 justify-between">
                      <div className="flex gap-2 items-center">
                        <IoShieldCheckmarkOutline
                          style={{ fontSize: "20px", color: "text-[#464646]" }}
                        />
                        <p className="text-[16px] font-bold text-[#464646]">
                          Cashback confirmado
                        </p>
                      </div>
                      <p className="text-[15px] text-[#9E9E9E]">20/05/24</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {setting && (
          <div
            className={`flex py-8 px-4 flex-col gap-5 ${
              account ? "bg-black bg-opacity-30" : ""
            }`}
          >
            <div className="flex flex-col">
              <p className="text-[20px] font-bold text-[#464646]">
                Preferências
              </p>
              <p className="text-[16px] text-[#9E9E9E]">
                Escolha as permissões da extensão abaixo.
              </p>
            </div>
            <div className="flex flex-col px-5 border-solid rounded-xl border-[#E4E4E4] border-[1px] divide-y-[1px] divide-[#E4E4E4]">
              <div className="w-full flex py-5 items-center justify-between">
                <p className="text-[16px] font-bold text-[#464646]">
                  Lembrete de ativação de cashback
                </p>
                <div>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* <Typography>Off</Typography> */}
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      {/* <Typography>On</Typography> */}
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className="w-full flex py-5 items-center justify-between">
                <p className="text-[16px] font-bold text-[#464646]">
                  Sites similiares com cashback
                </p>
                <div>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* <Typography>Off</Typography> */}
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      {/* <Typography>On</Typography> */}
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className="w-full flex py-5 items-center justify-between">
                <p className="text-[16px] font-bold text-[#464646]">
                  Produtos similiares com cashback
                </p>
                <div>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* <Typography>Off</Typography> */}
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      {/* <Typography>On</Typography> */}
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className="w-full flex py-5 items-center justify-between">
                <p className="text-[16px] font-bold text-[#464646]">
                  Cupons no carrinho de compras
                </p>
                <div>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* <Typography>Off</Typography> */}
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      {/* <Typography>On</Typography> */}
                    </Stack>
                  </FormGroup>
                </div>
              </div>
              <div className="w-full flex py-5 items-center justify-between">
                <p className="text-[16px] font-bold text-[#464646]">
                  Notificação de cashback
                </p>
                <div>
                  <FormGroup>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {/* <Typography>Off</Typography> */}
                      <AntSwitch
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                      />
                      {/* <Typography>On</Typography> */}
                    </Stack>
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`flex w-full justify-between px-4 ${
            account ? "bg-black bg-opacity-30" : ""
          } shadow-[0_-5px_10px_rgba(0,0,0,0.2)]`}
        >
          <div className="flex items-center px-6 pt-4">
            <div
              className={`flex gap-4 ${
                store
                  ? "text-[#BF0811] items-center border-solid border-[#BF0811] border-b-[5px]"
                  : "text-[#464646] border-none"
              } cursor-pointer pb-4`}
              onClick={handleStore}
            >
              <IoStorefrontOutline style={{ fontSize: "25px" }} />
              <p className="text-[15px] font-bold">Lojas</p>
            </div>
          </div>
          <div className="flex items-center px-6 pt-4">
            <div
              className={`flex gap-4 ${
                extract
                  ? "text-[#BF0811] items-center border-solid border-[#BF0811] border-b-[5px]"
                  : "text-[#464646] border-none"
              } cursor-pointer pb-4`}
              onClick={handleExtract}
            >
              <BsJournalText style={{ fontSize: "25px" }} />
              <p className="text-[15px] font-bold">Extrato</p>
            </div>
          </div>
          <div className="flex items-center px-6 pt-4">
            <div
              className={`flex gap-4 ${
                setting
                  ? "text-[#BF0811] items-center border-solid border-[#BF0811] border-b-[5px]"
                  : "text-[#464646] border-none"
              } cursor-pointer pb-4`}
              onClick={handleSetting}
            >
              <IoSettingsOutline style={{ fontSize: "25px" }} />
              <p className="text-[15px] font-bold">Configuração</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
