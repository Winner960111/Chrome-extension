
import { IoIosArrowBack } from "react-icons/io";

const Registration1 = () => {

  return (
    <>
      <div className="w-[800px] h-[600px] flex flex-col font-baloo pb-4">
        <div className="flex w-full bg-[#212121] px-4 justify-between py-5">
          <IoIosArrowBack style={{ color: 'white', fontSize: '2rem' }} />
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
                <option value="" selected disabled>Selecione seu gênero</option>
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
            <button className="bg-[#F8F8F8] py-3 w-full rounded-md active:bg-gray-200 text-[#929292]">Voltar</button>
            <button className="bg-[#BF0811] py-3 w-full rounded-md active:bg-red-800">Avançar</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Registration1;