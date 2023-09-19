import Banner from "../../components/Banner";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Banner />
      <section className={style.solucao}>
        <h2>
          A solução para o seu <br /> negocio de seguros
        </h2>
        <p>
          Atualmente é necessário a presença de uma pessoa para realizar o
          processo de vistoria de bicicletas, o que deixa o processo custoso
          para a seguradora e inconveniente para o cliente. É por isso que a
          BikeVision surgiu, para automatizar o processo e aprimorar a
          experiência da seguradora e do cliente com uma solução totalmente em
          web, sem necessidade de uso de API externa ou de BackEnd complexo,
          tornando o processo mais rápido e fornecendo feedback para o usuário
          em tempo real.
        </p>
      </section>
      <section className={style.beneficios}>
        <h2>Benefícios</h2>
        <div className={style.container}>
          <div className={style.card}>
            <h3>Praticidade</h3>
            <p>
              A solução utiliza tecnologia de reconhecimento de imagem que
              dispensa a necessidade de um avaliador para realizar a vistoria,
              automatizando o processo sem comprometer a qualidade.
            </p>
          </div>
          <div className={style.card}>
            <h3>Eficiência</h3>
            <p>
              Desde o início do projeto tornar o processo mais eficiente sempre
              foi o foco, e foi com isso em mente que nós desenvolvemos uma
              solução totalmente web, agilizando e simplificando o processo
            </p>
          </div>
          <div className={style.card}>
            <h3>Escalabilidade</h3>
            <p>
              O uso de tecnologias recentes garante a escalabilidade e
              flexibilidade da solução para que no futuro ela possa ser adaptada
              para diversos outros objetos e tipos de veículos.
            </p>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </>
  );
}
