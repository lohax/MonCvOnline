import React from 'react'
import { Chrono } from 'react-chrono'
import data from '../data/dataTimeline'
import '../css/style.css'
import Fade from 'react-reveal/Fade'

const Timeline = () => (

  <div className='timeline' id='Timeline'>

    <div style={{ width: '100%', height: '100%' }}>

      <Chrono
        items={data}
        mode='VERTICAL_ALTERNATING'
        // cardHeight={650}
        theme={{ primary: '#343436', secondary: '#E36D0B' }}
        scrollable
      >
        <Fade right cascade>
          <div className='cardDetailedText'>

            <div>Languages et domaines suivis :</div>
            <div><strong>Langage :</strong> JavaScript ES6 et supérieur</div>
            <div><strong>Librairies :</strong> ReactJS 16+, VueJs 2/3</div>
            <div><strong>Framework :</strong> NuxtJs</div>
            <div><strong>Environnement :</strong> Webpack, Parcel, Snowpack, ViteJs</div>
            <div><strong>Style :</strong> CSS3, Sass, Tailwindcss, Ant design, Bootstrap, Flexbox, DHTMLX</div>
            <div><strong>Hébergement :</strong> Github/Git, Netlify, Heroku</div>
            <div><strong>Backend :</strong> graphQL, SQL, NodeJs, Express, MongoDB, Firebase</div>
            <div><strong>CMS :</strong> Contentful, Joomla</div>
            <div><strong>Tests :</strong> Jest</div>
            <div><strong>Autre :</strong> HTML5, PWA, JAMstack, Gatsby, MERN Stack</div>

          </div>
        </Fade>

        <Fade right cascade>
          <div className='cardDetailedText'>
            <div>Elaboration d'interfaces pour services IT, ressources humaines, services généraux :</div>
            <div>- Gestion de personnel (plannings, congés, temps de travail, pointage, etc.)</div>
            <div>- Création de helpdesk (gestion SLA/SLT, statistiques, etc.)</div>
            <div>- Gestion de réservations</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className='cardDetailedText'>
            <div>Sites vitrine et e-commerce proposant la gestion par les clients (CMS Joomla)</div>
            <div>Visites virtuelles</div>
            <div>Conception d'identité graphique</div>
            <div>Impressions cartes de visite, flyers, etc.</div>
          </div>
        </Fade>

        <Fade right>
          <div className='cardDetailedText'>
            Production de sites vitrine
          </div>
        </Fade>

        <Fade right>
          <div className='cardDetailedText'>
            Finalisation de projets suite au stage durant la formation Euromaster
          </div>
        </Fade>

        <Fade right cascade>
          <div className='cardDetailedText'>
            <div>Apprentissage des techniques de création de site internet par le développement et l’utilisation de CMS (Joomla!).</div>
            <div>Formation Photoshop et montage vidéo (Création d'un clip).</div>
          </div>
        </Fade>

        <Fade right>
          <div className='cardDetailedText'>
            <div>Cariste, manutentionnaire, plongeur, livreur, ouvrier horticole, moniteur en colonie de vacances</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className='cardDetailedText'>
            <div>Stages : </div>
            <div>Institut Médico-Educatif et de Rééducation «le Phénix» à Roanne</div>
          </div>
        </Fade>

        <Fade right cascade>
          <div className='cardDetailedText'>
            <div>Stages :</div>
            <div>Centre de rééducation à Karlstad (Suède)</div>
            <div>Centre social «Détente et loisirs» à le Coteau</div>
            <div>Maison de retraite du parc à Le Coteau</div>
            <div>Ecole maternelle St Marc à Le Coteau</div>
          </div>
        </Fade>

      </Chrono>

    </div>
  </div>

)

export default Timeline
