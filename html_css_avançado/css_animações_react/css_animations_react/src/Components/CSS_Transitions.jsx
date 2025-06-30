import React from 'react'
import '../styles/global.css';
import '../styles/CSS_Transitions.css';

const CSS_Transitions = () => {

  


  return (
    <div>
        <div className="transitions flex-to-column g-0.5 px-1">
            <h1>Transições CSS</h1>
            <p className='f-1'>
                Suavidade ao mudar o valor de uma propriedade
            </p>
            <h2 className='f-1'>transition-property</h2>
            <p className='f-1'>Define a propriedade da transição</p>
            <h2 className='f-1'>transition-duration</h2>
            <p className='f-1'>Define a duração da transição (s/ms)</p>
            <h2 className="f-1">transition-delay</h2>
            <p className="f-1">Aplica delay para iniciar e terminar animação</p>

            <h2 className="f-1">
              transition-property: opacity
            </h2>
            <p className="f-1">
              Aplica opacidade no elemento em determinado tempo
            </p>
            <h2 className="f-1">
              transition-property: transform
            </h2>
            <p className="f-1">
              Aplica deslocamento no elemento em determinado tempo
            </p>
            <h2 className="f-1">
              transition-property: all
            </h2>
            <p className="f-1">
              Aplica todas as propiedades 
            </p>
            <p className="f-1">Aplicando: transition-property: opacity, transform;
            transition-duration: 1s, 2s; transition-delay: 200ms;</p>
            <p className="f-1">Aplicando no hover: opacity: 1;
            transform: translateX(50px)</p>
            <div className="area">
            </div>
            <p className="f-1">
              OBS: Em multiplas transições com multiplas durações, o CSS entende onde precisa colocar
              o tempo específico da transição específica com base na ordem em que foram declarados em transition-property e transition-duration
            </p>
            
            <h2 className="f-1">
              transition-timing-function
            </h2>
            <p className="f-1">
              Aplica uma aceleração ou desaceleração da transição do início ao fim
            </p>

            <h2 className="f-1">
              Propriedades do transition-timing-function
            </h2>
            <p className="f-1">
              transition-timing-function: linear; não aplica mudanças na velocidade da transição
            </p>
            <p className="f-1">transition-timing-function: ease-in; chegada suave</p>
            <p className="f-1">transition-timing-function: ease-out; saída suave</p>
            <p className="f-1">transition-timing-function: ease-in-out; saída e chegada suave</p>
            <p className="f-1">transition-timing-function: cubic-bezier(x1, y1, x2, y2); aplica 
              uma aceleração personalizada para a chegada e saída
            </p>
            <p className="f-1">aplicando transition-timing-function: cubic-bezier(.42,0,.5,.9); na área abaixo</p>
            <div className="area2"></div>
            
            <p className="f-1">transition-timing-function: steps(); aplica uma transição por passos de movimento quantitativos</p>
            <p>EX: se transition-timing-function: steps(5); a transição irá parar 5 vezes antes de terminar</p>

            <div className="area3"></div>
            <p className='f-1'>Quanto menor o número de passos, mais visível será a transição</p>
            <p className="f-1">Há também uma shortcut para as transições: transition: ;</p>
            <p className='f-1'>@media (prefers-reduced-motion), permite que o usuário habilite ou não as animações</p>

        </div>
    </div>
  )
}

export default CSS_Transitions;