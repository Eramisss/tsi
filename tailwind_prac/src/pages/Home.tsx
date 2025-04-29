import Button from "../components/ui/Button";
const Home = () => {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Main page</p>
        <Button>Обычная кнопка</Button>
        <Button variant="secondary">Вторичная</Button>
        <Button variant="success">Успех</Button>

      </div>
    );
  };
  
  export default Home;