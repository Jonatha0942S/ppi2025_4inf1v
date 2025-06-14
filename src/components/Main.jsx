import styles from "./Main.module.css";
import Moinho from "../assets/img/MoinhoHolandesMacau.jpg";
import Matriz from "../assets/img/IgrejaMatriz.png";
import Orla from "../assets/img/OrlaCamapum.jpg";
import Ponte from "../assets/img/PontesIlha.jpg";
import Salinor from "../assets/img/salinor.png";

export function Main() {
  return (
    <div className={styles.container}>
      <header className={styles.header1} />
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={Moinho} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>Moinho Holandês</h2>
              <p> O Moinho Holandês, situado em Macau-RN, é um dos pontos turísticos mais representativos da cidade. Inspirado na arquitetura europeia, ele simboliza a herança cultural e a forte ligação da região com a indústria salineira. Com sua estrutura imponente, chama a atenção na paisagem urbana e atrai visitantes em busca de lazer e cultura. O espaço ao seu redor é utilizado para eventos, encontros e atividades ao ar livre, sendo também um local de convivência para a população. Além de embelezar a cidade, o moinho contribui para fortalecer o turismo e a identidade cultural de Macau.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={Matriz} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>Igreja Matriz</h2>
              <p>A Igreja Matriz de Nossa Senhora da Conceição, no centro de Macau-RN, é um dos principais símbolos religiosos e históricos da cidade. Construída no século XIX, destaca-se por sua torre com sino e fachada clara. É dedicada à padroeira do município, cuja festa em dezembro atrai grande participação popular. Além de espaço de fé, a igreja representa a memória e identidade cultural dos macaenses, sendo também ponto de encontro da comunidade e palco de celebrações tradicionais.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={Orla} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>Orla de Camapum</h2>
              <p> A Praia de Camapum, localizada em Macau-RN, é um dos principais cartões-postais da cidade.
                A orla conta com estrutura de lazer, incluindo calçadão, quiosques, duchas, iluminação e espaço para eventos. 
                É palco de festas tradicionais, como o réveillon e o carnaval, sendo um importante ponto de convivência e lazer da população. 
                Além de valorizar o turismo local, a praia movimenta o comércio e contribui para a geração de renda e fortalecimento da identidade cultural de Macau.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={Ponte} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>Ponte Nossa Senhora dos Navegantes</h2>
              <p> A Ponte da Ilha em Macau-RN, inaugurada em 2009, liga a cidade ao bairro Ilha de Santana, substituindo uma
                antiga ponte de madeira. Com cerca de 330 metros, oferece segurança e facilita o trânsito de veículos e pedestres.
                É fundamental para cerca de 1.500 famílias, melhorando o acesso e apoiando a economia local, especialmente a
                produção de sal e camarão. A ponte é um marco importante para o desenvolvimento social e econômico da região.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={Salinor} alt="Random" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2>Salinor – Salinas do Nordeste S.A</h2>
              <p> A Salinor – Salinas do Nordeste S.A, é a maior produtora de sal marinho do Brasil, responsável por mais de 40% da 
                produção nacional. Com salinas localizadas em Macau e Mossoró, a empresa produz sal para consumo humano, industrial e animal, exporta para diversos países e 
                atende milhares de clientes. Além disso, investe em inovação e sustentabilidade, com novas embarcações para transporte 
                e equipamentos modernos em seu parque fabril, sendo fundamental para a economia local e nacional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}