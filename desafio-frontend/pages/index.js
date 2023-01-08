import Head from 'next/head';
import { useState, useCallback } from 'react';
import { InfoTab } from './components/InfoTab/index';
import { data } from './utils/ListaMunicipios';

export default function Home() {
  const [showModal, setShowModal] = useState("none");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = useCallback((event) => {
    const queryValue = event.target.value;
    setQuery(queryValue);
    setResults(data.filter((value)=> {
      return (value["nome"].toUpperCase().includes(queryValue.toUpperCase()));
    }));
  }, [query,results]);
  
  const setQuerySpecific = (queryValue) => {
    setQuery(queryValue);
    setResults([]);
  }


  return (
    <>
      <Head/>
      <header>
        <div style={{ backgroundColor: "#00BCD4", height: "10rem", minWidth:"100%",  padding:"3rem", justifyContent:"space-between",display:"flex" }}>
          <div style={{minHeight:"100%", width:"5rem", justifyContent:"center", alignItems:"center", display:"flex"}}>
            <button onClick={() =>  setShowModal("block")} style={{backgroundColor: "#00BCD4", borderColor: "#00BCD4", width:"auto", border:"0"}}>
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
          <div style={{minHeight:"100%", width:"4rem", justifyContent:"center", alignItems:"center", display:"flex"}}>
            <p style={{fontFamily: "Inter", fontStyle: "normal", lineHeight: "15px",color: "#141919"}}>HOME</p>
          </div>
        </div>
      </header>
      <section>
        <section style={{width:"100%", height:"auto", background:"#ffffff"}}>
          <InfoTab
            contentList={[
              {
                buttonLink: '/',
                buttonTitle: 'SOBRE SAÚDE MENTAL',
                leftTitle: 'Saúde Mental',
                rightContent: 'Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).',
                rightTitle: 'O que é a plataforma de indicadores de Saúde Mental?'
              },
              {
                buttonLink: '/',
                buttonTitle: 'entenda',
                leftTitle: 'Glossário',
                rightContent: 'Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais',
                rightTitle: 'Entenda como interpretar os indicadores'
              }
            ]}
          />
        </section>
        <section>   
          <div style={{display:showModal, position:"fixed",zIndex:"1", left:"0", top:"0",width:"100%", height:"100%", overflow:"auto", backgroundColor:"rgba(31, 31, 31, 0.75)"}}>
              <div style={{marginLeft:"auto", backgroundColor:"#FFFFFF", border:"1px solid #888", width:"40%", height:"100%"}}>
                  <button onClick={() =>  setShowModal("none")} style={{display: "flex", marginLeft:"auto",marginTop:"1rem", marginRight:"1rem" ,flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "10px", gap: "10px", width: "40px", height: "40px",background: "#1F1F1F", borderRadius: "100px",flex: "none",order: "0",flexGrow: "0"}}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9493 1.04972L1.0498 10.9492" stroke="white" strokeWidth="2"/>
                      <path d="M10.9493 10.9503L1.0498 1.05078" stroke="white" strokeWidth="2"/>
                    </svg>
                  </button>
                  <div style={{ marginTop:"10rem", marginLeft:"5rem"}}>
                    <p style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400", fontSize: "1.35rem", lineHeight: "150%", letterSpacing: "-0.01em", color: "#1F1F1F"}}>
                      Escolha um município
                    </p>
                    <input type="text"  onChange={onChange} value={query} style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400", fontSize: "2rem", lineHeight: "130%", letterSpacing: "-0.02em", color: "#1F1F1F", marginTop: "1rem", border: "0", padding:"0.5rem", width:"80%"}}/>
                    <div style={{marginTop:"1rem"}}>
                      {results.slice(0,12).map((value)=> {
                        if(query.length>0)
                          return(
                            <>
                              <button onClick={() => {setQuerySpecific(value["nome"] + ", " + value["uf"])}} style={{borderRadius:"1.75rem", paddingTop:"0.1rem", paddingBottom:"0.1rem", paddingLeft:"0.75rem", paddingRight:"0.75rem", backgroundColor:"#ffffff", borderColor:"rgba(31, 31, 31, 0.15)",  display:"block", marginBottom:"0.5rem", marginTop:"0.5rem"}}>
                                <p style={{fontFamily: "Inter", fontStyle: "normal", fontWeight: "400", fontSize: "1rem", lineHeight: "150%", letterSpacing: "-0.02em", color: "#797979"}}>
                                  {value["nome"] + ", " + value["uf"]}
                                </p>
                              </button>
                            </>
                          );
                      })}
                    </div>
                  </div>
              </div>
          </div>
        </section> 
      </section>
      <footer>
        <div style={{ backgroundColor: "#00BCD4", height: "10rem", minWidth:"100%",  padding:"3rem", justifyContent:"space-between",display:"flex" }}>
          <div style={{minHeight:"100%", width:"5rem", justifyContent:"center", alignItems:"center", display:"flex"}}>
            <button onClick={() =>  setShowModal("block")} style={{backgroundColor: "#00BCD4", borderColor: "#00BCD4", width:"auto", border:"0"}}>
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
        </div>
      </footer>
    </>
  )
}
