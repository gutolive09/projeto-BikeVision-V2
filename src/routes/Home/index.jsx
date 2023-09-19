import Banner from '../../components/Banner'
import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <Banner/>
      <section className={style.solucao}>
        <h2>A solução para o seu negocio de seguros</h2>
        <p>Atualmente é necessário a presença de uma pessoa para realizar o processo de vistoria de bicicletas, o que deixa o processo custoso para a seguradora e inconveniente para o cliente. É por isso que a BikeVision surgiu, para automatizar o processo e aprimorar a experiência da seguradora e do cliente com uma solução totalmente em web, sem necessidade de uso de API externa ou de BackEnd complexo, tornando o processo mais rápido e fornecendo feedback para o usuário em tempo real.</p>
      </section>
    </>
  )
}
