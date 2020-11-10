import React from "react";
import { Chrono } from "react-chrono";
import data from "../data/dataTimeline";
import "../css/style.css";
import Fade from 'react-reveal/Fade'


const Timeline = () => (

  <div className="timeline" id="Timeline">

    <div style={{ width: "100%", height: "140vh" }}>

      <Chrono
        items={data}
        mode="VERTICAL_ALTERNATING"
        cardHeight={650}
        theme={{ primary: "#343436", secondary: "#E36D0B" }}
        scrollable={true}
      >
        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Languages et domaines suivis :</div>
            <div>- React.js, </div>
            <div>- Vue.js, </div>
            <div>- Node.js, </div>
            <div>- les PWA, </div>
            <div>- la JAMstack et bien plus encore !</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Elaboration d'interfaces pour services IT, ressources humaines, services généraux.</div>
            <div>Gestion de personnel (plannings, congés, temps de travail, pointage, etc.)</div>
            <div>Création de helpdesk (gestion SLA/SLT, statistiques, etc.)</div>
            <div>Gestion de réservations</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Sites vitrine et e-commerce proposant la gestion par les clients (CMS Joomla)</div>
            <div>Visites virtuelles</div>
            <div>Conception d'identité graphique</div>
            <div>Impressions cartes de visite, flyers, etc.</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            Production de sites vitrine
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            Finalisation de projets suite au stage durant la formation Euromaster
        </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Apprentissage des techniques de création de site internet par le développement et l’utilisation de CMS (Joomla!).</div>
            <div>Formation Photoshop et montage vidéo (Création d'un clip).</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Nexter System : Cariste et conditionnement de matériels militaires</div>
            <div>O.T.C : Cariste et manutentionnaire</div>
            <div>Sicarev : Manutentionnaire</div>
            <div>Dessert & Co : Plongeur</div>
            <div>Patisserie/Chocolaterie Pralus : Livreur et manutentionnaire</div>
            <div>Eyraud Plant : Horticulture</div>
            <div>Lyon Sport Loisir : Moniteur en colonie de Vacances</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Stages : </div>
            <div>Institut Médico-Educatif et de Rééducation «le Phénix» à Roanne</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className="cardDetailedText">
            <div>Stages :</div>
            <div>Centre de rééducation à Karlstad (Suède)</div>
            <div>Centre social «Détente et loisirs» à le Coteau</div>
            <div>Maison de retraite du parc à Le Coteau</div>
            <div>Ecole maternelle St Marc à Le Coteau</div>
          </div>
        </Fade>

      </Chrono>

    </div>
  </div >

)

export default Timeline;

