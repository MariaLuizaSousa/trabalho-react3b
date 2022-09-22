import img from "../img/Dia.png"
import "./home.css"

export const Home = () => {
  return (
    <>
    <h1> Página Home </h1>
    <h3> 
      <p> A Informática é um ramo das ciências da informação e da computação. Estuda os processos de recolha, armazenamento, processamento, transferência e difusão de dados digitais. </p>
      <p> As melhores opções de alta performance em computação empresarial para empresas.</p>
    </h3>
    <img className="ima" src={img} alt="" />
   
    </>
  );
}