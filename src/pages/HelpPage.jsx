import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar2/Navbar';
import Donut from '../components/Donut';
import BarChart from '../components/BarChart';
import SideBar from '../components/SideBar/SideBar';
import StackedBar from '../components/StackedBar';
import DashScore from '../components/DashScore';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WarningIcon from '@mui/icons-material/Warning';
import ProfilePage from "./Dashboard";


function HelpPage(props) {
    return (
        <>
            <Navbar/>
            <FrontPage>
                <div className="title">
                    <HelpCenterIcon/>
                    Ayuda
                </div>
                <div className="text-container">
                    <div className="main-title">Confianza</div>
                    Actualmente mostramos el texto en barras la cual indican la confianza con la que la IA acierta el texto,
                    esto con el fin de añadir transparencia en nuestro funcionamiento.
                    <br/>
                    <br/>
                        Por ejemplo con esta barra decimos que con un 71% de seguridad el sesgo de la noticia es nuetral,
                    hay una correlación directa entre la seguridad y la cantidad de contenido relativa en la noticia que es de este sesgo.
                    <div>
                        <StackedBar data={{"conservador":0.21311697007218125,"liberal":0.07588659219537125,"neutral":0.7109964377324475}} />
                    </div>
                </div>
                <div className="text-container">
                    <div className="main-title">Métricas</div>
                    Para la clasificación de los datos de entrenamiento se usaron las siguientes etiquetas y métricas para definir estas etiquetas.
                </div>
                <div className="text-container">
                    <div className="secondary-title">Sesgo Político</div>
                    Para el juicio de sesgo político dividimos en tres categorías de acuerdo al ala política en la cuál se representan:
                    <span style={{fontWeight: "bold"}}>Izquierda, Centro o Derecha.</span>
                    <div style={{color: "#FF5733"}}><WarningIcon/> Nos basamos en la política Chilena actualmente para esto, por lo que puede ser impreciso con politica exterior.</div>
                    <br/>
                    <br/>
                    Precisión Modelo: 70%
                </div>
                <div className="text-container">
                    <div className="secondary-title">Sesgo económico</div>
                    Tal como indica la barra los extremos implican la visión económica que se plantea en el texto,
                    como criterio nos basamos en cuatro amplias áreas de política que afectan la
                    <span style={{fontWeight: "bold"}}> libertad o igualdad económica</span> ,
                    que son el estado de derecho, el tamaño del gobierno, la eficiencia regulatoria y los mercados abiertos.
                    También toma en consideración algunas categorías específicas como los derechos de propiedad,
                    la eficacia judicial, la integridad del gobierno y la carga fiscal.
                    <br/>
                    <br/>
                    Precisión Modelo: 72%
                </div>
                <div className="text-container">
                    <div className="secondary-title">Sesgo sensacionalista</div>
                    Los medios de comunicación sensacionalistas se caracterizan por difundir información polémica
                    chocante con titulares llamativos, a menudo de escasa trascendencia pero que despierta gran interés
                    entre el público.
                    Es común que en los medios de comunicación sensacionalistas se tienda a verter repetidamente
                    información dudosa, falsa o dañina.
                    <span style={{fontWeight: "bold"}}>Nosotros detectamos este sesgo en base a la forma escrita del titular, también poseemos un tópico clickbait.</span>
                    <br/>
                    <br/>
                    Precisión Modelo: 78%
                </div>
                <div className="text-container">
                    <div className="secondary-title">Sesgo conservador - progresista</div>
                    El sesgo presentado aquí se refiere a la dimensión valórica en la que está sesgada la noticia.
                    Problemáticas como libertades en aborto, LGBT, sesgo de género y otras problemáticas se encuentra aquí.
                    Se entiende entonces el conservadurismo como las tradiciones o costumbres arraigadas en la sociedad
                    que inhiben libertades humanas en el ámbito valórico, y, por su contra parte el progresismo es dejar
                    el arraigo a las viejas costumbres en pos de un cambio.
                    <br/>
                    <br/>
                    Precisión Modelo: 82%
                </div>
                <div className="text-container">
                    <div className="secondary-title">Discurso de odio</div>
                    Este modelo distingue principalmente el lenguaje ofensivo dirigido hacia una entidad en específico
                    que podría verse afectado por los dichos presentes en el texto, de tal forma de existir algún tipo
                    de discriminacion, insulto o mofa de una entidad, esto es detectado por nuestro modelo.
                    <br/>
                    <br/>
                    Precisión Modelo: 74%
                </div>
                <div className="title">
                    <HelpCenterIcon/>
                        Preguntas Frecuentes
                </div>
                <div className="text-container">
                    <div className="secondary-title">¿Cómo se obtiene el sesgo?</div>
                    Nuestro proyecto cuenta con modelos basados en aprendizaje automatizado clásico y aprendizaje profundo.
                    Estos modelos están en constante desarrollo alimentándose por la data obtenida mediante la aplicación.
                </div>
                <div className="text-container">
                    <div className="secondary-title">¿Cómo obtengo la extensión?</div>
                    Actualmente estamos en fase de beta cerrada. Si quieres usar la extensión contáctanos a través de
                    blankpointapp@gmail.com.
                </div>

                <div className="text-container">
                    <div className="secondary-title">¿En base a qué métricas se obtiene el sesgo?</div>
                    Cada etiquetado y las métricas que se usan para el etiquetado está en la sección "Ayuda" arriba.
                </div>

                <div className="text-container">
                    <div className="secondary-title">Quiero dar sugerencias/reclamos, donde puedo hacerlo?</div>
                    Por favor contáctanos a blankpointapp@gmail.com con todas tus dudas, quejas y reclamos,
                    Estamos felices de poder contactarte!
                </div>
            </FrontPage>
        </>
    )
}

export default HelpPage;



const FrontPage = styled.div`
padding-top:60px;
display: grid;
grid-template-columns: 65%;
align-items:center;
justify-content:center;
background-color: #f4f4f9;

.title{
    padding: 10px;
    font-size:2rem;
    font-weight:300;
    background-color:white;
    color:#284b63c7;
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom: 10px;

}

.text-container{
    background-color: white;
    padding: 20px;
}
.main-title{
font-size: 2.5rem;
font-weight: bold;
font-family: 'Monserrat', sans-serif;
margin: 10px 0;
}
.secondary-title{
font-size: 1.5rem;
font-weight: bold;
font-family: 'Monserrat', sans-serif;
margin: 10px 0;
}
`
