import img from "../img/download.jpg"
import "./contato.css"
export const Contato = () =>{

    return(
        <>
        <h1> Página de Contatos </h1>
        <h3> 
  
            <p> Whatsapp: (85) 9 9521-7122 / (85) 9 9834-6800 </p>
            <p> Instagram: @infor.servico </p> 
            <p> Email: inforserviço@gmail.com </p>  
          
           
            <img className="contato" src={ img } alt="" />
         
        </h3>
        
     <form action="" className="form">
        <div className="mb-3">
            <label className="form_1">Adicione seu número: </label>
            <br/>

            <input type="número" className="form_control" id="exampleFormControlInput1" placeholder=""/>
     </div>

     <div className="mb-3">
        <label className="form_2"> Adicione seu email: </label>
        <br/>

        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>

     </div> <br/>

     <input type="submit" name=""  value="Editar"/>  <input type="reset" name="" value="Apagar"/>
     </form>
        </>
    ); 
    }