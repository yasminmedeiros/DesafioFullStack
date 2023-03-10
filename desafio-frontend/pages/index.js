import Head from "next/head";
import { useState, useCallback } from "react";
import { InfoTab } from "./components/InfoTab/index";
import { data } from "./utils/ListaMunicipios"; // Importando a lista de opções existentes.

// Página inicial
export default function Home() {
  const [showModal, setShowModal] = useState("none"); // Variável que armazena o estado do modal, quando ativo o css irá ser display:block, quando inativo display:none.
  const [query, setQuery] = useState(""); // Query que irá ser filtrada as opções e irá armazenar a cidade escolhida.
  const [options, setOptions] = useState([]); // Opções do filtro conforme a query, armazenando as cidades que possuam a query em seu nome.

  // Função que irá atualizar o valor da query e realiza o filtro que retorna as opções para a variável options.
  const onChangeQuery = useCallback((event) => {
    const queryValue = event.target.value;
    setQuery(queryValue); // Armazenando a query digitada até o momento.
    setOptions(data.filter((value)=> {return ((value["nome"] + ", " + value["uf"]).toUpperCase().includes(queryValue.toUpperCase())); // Realização do filtro e armazenando os resultados.
    }));
  }, [query,options]);
  
  // Função utilizada caso o usuário escolha uma das opções listadas, que no caso zeraria as opções, já que uma já foi selecionada.
  const setQuerySpecific = (queryValue) => {
    setQuery(queryValue);
    setOptions([]);
  }
  return (
    <>
      <Head/>
      <header className="headerFooter">
        <div className="containerLogo">
          <button onClick={() =>  setShowModal("block")} className="buttonLogo">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9999 0C12.8354 0 9.74197 0.938351 7.1108 2.69644C4.47963 4.45453 2.4289 6.95338 1.21791 9.87698C0.00691294 12.8006 -0.309912 16.0178 0.307448 19.1215C0.924807 22.2251 2.4486 25.076 4.68623 27.3136C6.92385 29.5513 9.7748 31.0752 12.8785 31.6926C15.9822 32.3099 19.1992 31.993 22.1228 30.782C25.0464 29.571 27.5453 27.5203 29.3034 24.8891C31.0615 22.258 31.9998 19.1645 31.9998 16C31.9998 11.7565 30.3141 7.68687 27.3136 4.68631C24.313 1.68574 20.2433 0 15.9999 0ZM15.9999 24.098C14.3982 24.098 12.8326 23.6232 11.5008 22.7334C10.1691 21.8436 9.13115 20.5788 8.51822 19.0991C7.90529 17.6194 7.74489 15.9909 8.05736 14.4201C8.36983 12.8492 9.14108 11.4064 10.2736 10.2739C11.4062 9.14131 12.8492 8.36984 14.42 8.05737C15.9909 7.7449 17.6192 7.90523 19.0989 8.51816C20.5787 9.13108 21.8434 10.169 22.7332 11.5008C23.6231 12.8325 24.098 14.3983 24.098 16C24.098 18.1477 23.2449 20.2074 21.7262 21.7261C20.2075 23.2448 18.1477 24.098 15.9999 24.098Z" fill="white"/>
                </svg>
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32C4.24344 32 8.31304 30.3142 11.3136 27.3137C14.3142 24.3131 15.9999 20.2434 15.9999 16C15.9999 11.7565 14.3142 7.68687 11.3136 4.68631C8.31304 1.68575 4.24344 0 0 0V7.90193C2.14776 7.90193 4.20751 8.75516 5.7262 10.2739C7.24489 11.7925 8.09812 13.8522 8.09812 16C8.09812 18.1477 7.24489 20.2074 5.7262 21.7261C4.20751 23.2448 2.14776 24.098 0 24.098V32Z" fill="white"/>
                </svg>
                <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 32C4.24344 32 8.31304 30.3142 11.3136 27.3137C14.3142 24.3131 15.9999 20.2434 15.9999 16C15.9999 11.7565 14.3142 7.68687 11.3136 4.68631C8.31304 1.68575 4.24344 0 0 0V7.90193C2.14776 7.90193 4.20751 8.75516 5.7262 10.2739C7.24489 11.7925 8.09812 13.8522 8.09812 16C8.09812 18.1477 7.24489 20.2074 5.7262 21.7261C4.20751 23.2448 2.14776 24.098 0 24.098V32Z" fill="white"/>
                </svg>
              </div>
          </button>
        </div>
        <div className="containerId">
          <p className="pId">HOME</p>
        </div>
      </header>
      <section className="containerInfoTab">
        <InfoTab
          contentList={[
            {
              buttonLink: "/",
              buttonTitle: "SOBRE SAÚDE MENTAL",
              leftTitle: "Saúde Mental",
              rightContent: "Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).",
              rightTitle: "O que é a plataforma de indicadores de Saúde Mental?"
            },
            {
              buttonLink: "/",
              buttonTitle: "entenda",
              leftTitle: "Glossário",
              rightContent: "Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais",
              rightTitle: "Entenda como interpretar os indicadores"
            }
          ]}
        />
      </section>
      <section style={{display:showModal}} className="containerModal">   
        <div className="containerFilterCity">
            <button onClick={() =>  setShowModal("none")} className="buttonCloseModal">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9493 1.04972L1.0498 10.9492" stroke="white" strokeWidth="2"/>
                <path d="M10.9493 10.9503L1.0498 1.05078" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
            <div className="divFilterCity">
              <p className="pFilterCity">
                Escolha um município
              </p>
              <input type="text" onChange={onChangeQuery} value={query} className="inputCity" placeholder="Porto Alegre, RS"/>
              <div style={{marginTop:"1rem"}}>
                {options.slice(0,12).map((value) => {
                  if(query !== "")
                    return(
                      <>
                        <button 
                          onClick={() => {setQuerySpecific(value["nome"] + ", " + value["uf"])}} className="buttonSelectCity">
                            <p className="pCity">
                              {value["nome"] + ", " + value["uf"]}
                            </p>
                        </button>
                      </>
                    );
                })}
              </div>
            </div>
        </div>
      </section> 
      <footer className="headerFooter">
        <div className="containerLogo">
            <a onClick={() =>  setShowModal("block")} className="buttonLogo">
                <div>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9999 0C12.8354 0 9.74197 0.938351 7.1108 2.69644C4.47963 4.45453 2.4289 6.95338 1.21791 9.87698C0.00691294 12.8006 -0.309912 16.0178 0.307448 19.1215C0.924807 22.2251 2.4486 25.076 4.68623 27.3136C6.92385 29.5513 9.7748 31.0752 12.8785 31.6926C15.9822 32.3099 19.1992 31.993 22.1228 30.782C25.0464 29.571 27.5453 27.5203 29.3034 24.8891C31.0615 22.258 31.9998 19.1645 31.9998 16C31.9998 11.7565 30.3141 7.68687 27.3136 4.68631C24.313 1.68574 20.2433 0 15.9999 0ZM15.9999 24.098C14.3982 24.098 12.8326 23.6232 11.5008 22.7334C10.1691 21.8436 9.13115 20.5788 8.51822 19.0991C7.90529 17.6194 7.74489 15.9909 8.05736 14.4201C8.36983 12.8492 9.14108 11.4064 10.2736 10.2739C11.4062 9.14131 12.8492 8.36984 14.42 8.05737C15.9909 7.7449 17.6192 7.90523 19.0989 8.51816C20.5787 9.13108 21.8434 10.169 22.7332 11.5008C23.6231 12.8325 24.098 14.3983 24.098 16C24.098 18.1477 23.2449 20.2074 21.7262 21.7261C20.2075 23.2448 18.1477 24.098 15.9999 24.098Z" fill="white"/>
                  </svg>
                  <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32C4.24344 32 8.31304 30.3142 11.3136 27.3137C14.3142 24.3131 15.9999 20.2434 15.9999 16C15.9999 11.7565 14.3142 7.68687 11.3136 4.68631C8.31304 1.68575 4.24344 0 0 0V7.90193C2.14776 7.90193 4.20751 8.75516 5.7262 10.2739C7.24489 11.7925 8.09812 13.8522 8.09812 16C8.09812 18.1477 7.24489 20.2074 5.7262 21.7261C4.20751 23.2448 2.14776 24.098 0 24.098V32Z" fill="white"/>
                  </svg>
                  <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 32C4.24344 32 8.31304 30.3142 11.3136 27.3137C14.3142 24.3131 15.9999 20.2434 15.9999 16C15.9999 11.7565 14.3142 7.68687 11.3136 4.68631C8.31304 1.68575 4.24344 0 0 0V7.90193C2.14776 7.90193 4.20751 8.75516 5.7262 10.2739C7.24489 11.7925 8.09812 13.8522 8.09812 16C8.09812 18.1477 7.24489 20.2074 5.7262 21.7261C4.20751 23.2448 2.14776 24.098 0 24.098V32Z" fill="white"/>
                  </svg>
                </div>
            </a>
          </div>
      </footer>
    </>
  )
}
