import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IoIosArrowBack } from "react-icons/io";

type ContextType = {
  currentView: string;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const MyContext = createContext<ContextType | undefined>(undefined);

function App() {

  const [currentView, setCurrentView] = useState('Landing');

  return (
    <>
      <MyContext.Provider value={{ currentView, setCurrentView }}>
        {currentView === 'Landing' && <Landing />}
        {currentView === 'Registration1' && <Registration1 />}
        {currentView === 'Registration2' && <Registration2 />}
      </MyContext.Provider>
    </>

  );
}

const Landing = () => {
  const { setCurrentView } = useContext(MyContext)!;

  return (
    <div className="w-[800px] h-[600px] flex flex-col justify-center items-center p-5 bg-[#212121] gap-8">
      <div className="flex w-full justify-center rounded-2xl px-4 pt-4" style={{ backgroundImage: `url(/assets/back.png)` }}>
        <img src="/assets/backimg.png" alt="img1" />
      </div>
      <div className="flex w-full flex-col px-4 pb-4">
        <p className="text-white text-[22px] font-bold text-md">Informe seus dados de login</p>
        <div className="flex w-full text-white text-md flex-col">
          <div className="flex gap-4">
            <input type="text" style={{ outline: 'none' }} className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]" placeholder='Endereço de e-mail' />
            <input type="text" style={{ outline: 'none' }} className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]" placeholder='CPF' />
          </div>
          <div className="mt-8 bg-[#BF0811] w-full text-center rounded-md py-3 text-lg active:bg-red-800 cursor-pointer" onClick={() => { setCurrentView('Registration2') }}>Entrar</div>
          <div className="w-full text-center rounded-md py-3 text-lg cursor-pointer" onClick={() => { setCurrentView('Registration1') }}>Crie uma nova conta</div>
        </div>
      </div>
    </div>
  )
}

const Registration1 = () => {
  const { setCurrentView } = useContext(MyContext)!;

  return (
    <>
      <div className="w-[800px] h-[600px] flex flex-col font-baloo pb-4">
        <div className="flex w-full bg-[#212121] px-4 justify-between py-5">
          <IoIosArrowBack onClick={() => setCurrentView("Landing")} style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
          <img src="/assets/logo.png" alt="logo" />
          <img src="/assets/progress1.png" alt="progress" />
        </div>
        <div className="flex w-full flex-col px-4">
          <p className="font-bold mt-4 text-[20px]">Detalhes gerais</p>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">Nome
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Escreva seu nome e sobrenome" />
            </label>

            <label htmlFor="gender" className="w-full font-medium text-[16px]">Gênero
              <select id="gender" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" >
                <option value="" disabled>Selecione seu gênero</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="other">Outros</option>
              </select>
            </label>

          </div>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="mail" className="w-full font-medium text-[16px]">E-mail
              <input type="text" id="mail" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Endereço de e-mail" />
            </label>

            <label htmlFor="name" className="w-full font-medium text-[16px]">Senha de acesso
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Defina sua senha" />
            </label>

          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">CPF
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="000.000.000-00" />
            </label>

            <label htmlFor="name" className="w-full font-medium text-[16px]">Número de telefone
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="(00) 0 0000-0000" />
            </label>

          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="date" className="w-full font-medium text-[16px]">Data de nascimento
              <input type="date" id="date" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" />
            </label>
          </div>

          <div className="flex w-full mt-12 gap-4 text-white text-lg">
            <button className="bg-[#F8F8F8] py-3 w-full rounded-md active:bg-gray-200 text-[#929292]" onClick={() => setCurrentView("Landing")}>Voltar</button>
            <button className="bg-[#BF0811] py-3 w-full rounded-md active:bg-red-800" onClick={() => setCurrentView("Registration2")}>Avançar</button>
          </div>
        </div>
      </div>
    </>
  )
}

const Registration2 = () => {
  const { setCurrentView } = useContext(MyContext)!;

  return (
    <>
      <div className="w-[800px] h-[600px] flex flex-col font-baloo pb-4">
        <div className="flex w-full bg-[#212121] px-4 justify-between py-5">
          <IoIosArrowBack onClick={() => setCurrentView("Registration1")} style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
          <img src="/assets/logo.png" alt="logo" />
          <img src="/assets/progress2.png" alt="progress" />
        </div>
        <div className="flex w-full flex-col px-4">
          <p className="font-bold mt-4 text-[20px]">Endereço residencial</p>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">CEP
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="00000-000" />
            </label>

          </div>
          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="mail" className="w-[40%] font-medium text-[16px]">Endereço
              <input type="text" id="mail" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Rua ou avenida" />
            </label>

            <label htmlFor="name" className="w-[20%] font-medium text-[16px]">Número
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="000" />
            </label>

            <label htmlFor="name" className="w-[40%] font-medium text-[16px]">Complemento
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Casa, apartamento ou referência" />
            </label>
          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="name" className="w-full font-medium text-[16px]">Bairro
              <input type="text" id="name" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder="Escreva o nome do seu bairro" />
            </label>

          </div>

          <div className="flex w-full mt-4 gap-4">
            <label htmlFor="date" className="w-[80%] font-medium text-[16px]">Cidade
              <input type="text" id="date" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" placeholder='Ex: Campinas' />
            </label>

            <label htmlFor="estate" className="w-[20%] font-medium text-[16px]">Gênero
              <select id="estate" className="w-full border-solid border-[#E4E4E4] border-[1px] p-3 rounded-md outline-none" >
                <option value="1">SP</option>
                <option value="2">FA</option>
                <option value="3">TX</option>
              </select>
            </label>

          </div>

          <div className="flex w-full mt-12 gap-4 text-white text-lg">
            <button className="bg-[#F8F8F8] py-3 w-full rounded-md active:bg-gray-200 text-[#929292]" onClick={() => setCurrentView("Registration1")}>Voltar</button>
            <button className="bg-[#BF0811] py-3 w-full rounded-md active:bg-red-800" onClick={() => setCurrentView("Landing")}>Avançar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
