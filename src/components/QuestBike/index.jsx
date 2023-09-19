import React from "react";
import style from "./QuestBike.module.css"

export default function QuestBike(props) {
  return (
    <>
      <section className={style.questionario}>
        <h1>Vamos iniciar a vistoria !</h1>
        <div >
          <h2>Você ja tem uma bicicleta cadastrada ?</h2>
          <div >
            <button onClick={() => props.setCadastro(true)}>Sim</button>
            <button onClick={() => props.setCadastro(false)}>Não</button>
          </div>
        </div>
      </section>
    </>
  );
}