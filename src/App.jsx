import Logo from './assets/logo.svg';
function App() {
  return (
    <section className='p-6 pt-20'>
      <header className='flex flex-col gap-3 justify-center items-center'>
        <div>
          <img
            src={Logo}
            alt='logo-look-like-an-eye-and-letter-o'
          />
        </div>
        <p>PNFT Market</p>
      </header>
      <main className='mt-12'>
        <div></div>
        <div>
          <h1 className='text-3xl font-bold font-inter text-secondary'>
            NFT Access
          </h1>
          <p className='font-inter mt-2 text-dark'>
            Please fill your detail to access your account.
          </p>
        </div>
      </main>
    </section>
  );
}

export default App;
