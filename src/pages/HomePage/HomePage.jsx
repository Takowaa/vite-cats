import Button from "../../compomemts/Button/Button.jsx";


const HomePage = () => {
  return (
    <div>
     <Button onCLick={()=> alert('text')} variant='success'> <span> войти</span></Button>
     <Button variant='danger'>Войти</Button>
     <Button variant='warning'>Регистрация</Button>
     <Button>click</Button>

    </div>
  );
};

export default HomePage;