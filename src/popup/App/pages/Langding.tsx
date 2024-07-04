const Landing = () => {
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
          <div className="mt-8 bg-[#BF0811] w-full text-center rounded-md py-3 text-lg active:bg-red-800 cursor-pointer">Entrar</div>
          <div className="w-full text-center rounded-md py-3 text-lg cursor-pointer" onClick={() => { window.location.href = '/registration1' }}>Crie uma nova conta</div>
        </div>
      </div>
    </div>
  )
}
export default Landing;