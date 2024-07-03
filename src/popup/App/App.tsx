
function App() {

  return (
    <div className="w-[430px] flex flex-col justify-center items-center gap-8 bg-[#212121] rounded-2xl">
      <div className="flex w-full justify-center rounded-2xl px-4 pt-4" style={{ backgroundImage: `url(/assets/back.png)` }}>
        <img src="/assets/backimg.png" alt="img1" />
      </div>
      <div className="flex w-full flex-col px-4 pb-4">
        <p className="text-white text-[22px] font-bold text-md">Informe seus dados de login</p>
        <div className="flex w-full text-white text-md flex-col">
          <input type="text" style={{ outline: 'none' }} className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]" placeholder='Endereço de e-mail' />
          <input type="text" style={{ outline: 'none' }} className="bg-[#212121] py-4 w-full border-b-[2px] border-solid border-[#5F5F5F]" placeholder='CPF' />
          <div className="mt-8 bg-[#BF0811] w-full text-center rounded-md py-3 text-lg active:bg-red-800 cursor-pointer">Entrar</div>
          <div className="w-full text-center rounded-md py-3 text-lg cursor-pointer">Crie uma nova conta</div>
        </div>
      </div>
    </div>
  );
}

export default App;
