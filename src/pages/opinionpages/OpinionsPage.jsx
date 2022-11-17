import React from 'react';
import Navbar from '../../components/Navbar2/Navbar';
import ThreePIcon from '@mui/icons-material/ThreeP';
import ColumnRow from '../../components/listcomponents/ColumnRow';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import {Link} from 'react-router-dom';
import './Opinions.css';
import EmptyArea from '../../components/UtilsComponents/EmptyArea';
import LoadingArea from '../../components/UtilsComponents/LoadingArea';
import axios from 'axios';

function OpinionsPage(props) {

    const [columnas,setColumnas]= React.useState(null);

    const getOpiniones = async () => {    
        const url = 'https://api-news-feria-2022.herokuapp.com/opinion';        
        
        await axios.get(url)
        .then(res => {       
            console.log(res.data)                        
            setColumnas(res.data)
        
        })
        .catch(err => {
            console.log(err)
        })
    }
    React.useEffect(() => {
        getOpiniones();
    }, []);

    return (
        <>
            <Navbar /> 
            <div className='front-page' >
                <div className="main-title" style={{borderRadius: '0 0 10px 10px'}}>
                    <span>
                        <ThreePIcon fontSize='large' />
                        Lo último en columnas
                    </span>
                    <div className="page-actions" >
                        <Button component={Link} to='/opiniones/crear' variant="outlined" color="primary" endIcon={<MessageIcon />}>
                            Dar una opinión
                        </Button>                    
                    </div>  
                </div>
                {columnas ?                     
                columnas.length !== 0 ?
                <>
                    {columnas.map((columna,i)=>(
                        <ColumnRow key={i} datos = {columna}/>
                    ))} 
                </>
                :
                <EmptyArea />
                :
                <LoadingArea />
                }
            </div>
        </>
    );
}

export default OpinionsPage;

const Columnas =[
    {
        titulo:'En víspera del “Día mundial de enfermedades raras” reivindicamos la salud como un derecho universal',
        fecha: '01 noviembre de 2022',
        pseudo: 'El chicorita',
        body:"Se vive la última semana de febrero, la cual para la mayoría de lo/as chileno/as significa el fin de sus vacaciones de verano, y por supuesto, el temido inicio de la vorágine del año laboral y escolar con todas las obligaciones que conlleva. La pregunta aquí puede parecer sencilla, pero, ¿realmente lo/as chileno/as descansan en sus vacaciones, en este contexto de crisis pandémica a cuestas con dos años de teletrabajo en casa? En muchos casos quizás la respuesta ya no es tan fácil. Primero, en nuestro país todo/a trabajador/a tiene 15 días de vacaciones al año, que pueden aumentar en el área pública a 20 o 25 días (Estatuto Administrativo) o un día cada tres años en el área privada (Código del Trabajo). Si bien, la ley protege al/a trabajador/a estableciendo que debe tomar 10 días seguidos para lograr el descanso, el cuestionamiento es si este tiempo es suficiente. Sobre todo, pensando que la mayoría de lo/as chilenos han trabajado desde sus casas estos últimos dos años, es decir, si bien no desarrollarían labores propias del trabajo, si estarían en muchos casos en su oficina, sentados en la misma silla o compartiendo el mismo espacio en el que trabajan durante las vacaciones.Un estudio de la Universidad Tampere de Finlandia plantea que desde el octavo día de vacaciones la mente de una persona ya es capaz de desconectarse y descansar, no obstante, esto ahora ocurre al estar viendo muebles u otros accesorios propios del empleo. En el régimen laboral anterior a la pandemia, sencillamente se dejaba de ir a la oficina, eliminando los registros visuales de la rutina laboral, pero ahora, un día de vacaciones comienza de igual forma que uno de trabajo e inclusive se vivencia en el mismo espacio."
    },
    {
        titulo:'¿Y se descansa en vacaciones?',
        fecha: '01 noviembre de 2022',
        pseudo: 'El chicorita',
        body:"Se vive la última semana de febrero, la cual para la mayoría de lo/as chileno/as significa el fin de sus vacaciones de verano, y por supuesto, el temido inicio de la vorágine del año laboral y escolar con todas las obligaciones que conlleva. La pregunta aquí puede parecer sencilla, pero, ¿realmente lo/as chileno/as descansan en sus vacaciones, en este contexto de crisis pandémica a cuestas con dos años de teletrabajo en casa? En muchos casos quizás la respuesta ya no es tan fácil. Primero, en nuestro país todo/a trabajador/a tiene 15 días de vacaciones al año, que pueden aumentar en el área pública a 20 o 25 días (Estatuto Administrativo) o un día cada tres años en el área privada (Código del Trabajo). Si bien, la ley protege al/a trabajador/a estableciendo que debe tomar 10 días seguidos para lograr el descanso, el cuestionamiento es si este tiempo es suficiente. Sobre todo, pensando que la mayoría de lo/as chilenos han trabajado desde sus casas estos últimos dos años, es decir, si bien no desarrollarían labores propias del trabajo, si estarían en muchos casos en su oficina, sentados en la misma silla o compartiendo el mismo espacio en el que trabajan durante las vacaciones.Un estudio de la Universidad Tampere de Finlandia plantea que desde el octavo día de vacaciones la mente de una persona ya es capaz de desconectarse y descansar, no obstante, esto ahora ocurre al estar viendo muebles u otros accesorios propios del empleo. En el régimen laboral anterior a la pandemia, sencillamente se dejaba de ir a la oficina, eliminando los registros visuales de la rutina laboral, pero ahora, un día de vacaciones comienza de igual forma que uno de trabajo e inclusive se vivencia en el mismo espacio."
    },{
        titulo:'Comienzo del año escolar: consejos para una vuelta a clases exitosa ',
        fecha: '01 noviembre de 2022',
        pseudo: 'El chicorita',
        body:"Se vive la última semana de febrero, la cual para la mayoría de lo/as chileno/as significa el fin de sus vacaciones de verano, y por supuesto, el temido inicio de la vorágine del año laboral y escolar con todas las obligaciones que conlleva. La pregunta aquí puede parecer sencilla, pero, ¿realmente lo/as chileno/as descansan en sus vacaciones, en este contexto de crisis pandémica a cuestas con dos años de teletrabajo en casa? En muchos casos quizás la respuesta ya no es tan fácil. Primero, en nuestro país todo/a trabajador/a tiene 15 días de vacaciones al año, que pueden aumentar en el área pública a 20 o 25 días (Estatuto Administrativo) o un día cada tres años en el área privada (Código del Trabajo). Si bien, la ley protege al/a trabajador/a estableciendo que debe tomar 10 días seguidos para lograr el descanso, el cuestionamiento es si este tiempo es suficiente. Sobre todo, pensando que la mayoría de lo/as chilenos han trabajado desde sus casas estos últimos dos años, es decir, si bien no desarrollarían labores propias del trabajo, si estarían en muchos casos en su oficina, sentados en la misma silla o compartiendo el mismo espacio en el que trabajan durante las vacaciones.Un estudio de la Universidad Tampere de Finlandia plantea que desde el octavo día de vacaciones la mente de una persona ya es capaz de desconectarse y descansar, no obstante, esto ahora ocurre al estar viendo muebles u otros accesorios propios del empleo. En el régimen laboral anterior a la pandemia, sencillamente se dejaba de ir a la oficina, eliminando los registros visuales de la rutina laboral, pero ahora, un día de vacaciones comienza de igual forma que uno de trabajo e inclusive se vivencia en el mismo espacio."
    },{
        titulo:'Columna de Opinión: Completando nuestro line up',
        fecha: '01 noviembre de 2022',
        pseudo: 'El chicorita',
        body:"Se vive la última semana de febrero, la cual para la mayoría de lo/as chileno/as significa el fin de sus vacaciones de verano, y por supuesto, el temido inicio de la vorágine del año laboral y escolar con todas las obligaciones que conlleva. La pregunta aquí puede parecer sencilla, pero, ¿realmente lo/as chileno/as descansan en sus vacaciones, en este contexto de crisis pandémica a cuestas con dos años de teletrabajo en casa? En muchos casos quizás la respuesta ya no es tan fácil. Primero, en nuestro país todo/a trabajador/a tiene 15 días de vacaciones al año, que pueden aumentar en el área pública a 20 o 25 días (Estatuto Administrativo) o un día cada tres años en el área privada (Código del Trabajo). Si bien, la ley protege al/a trabajador/a estableciendo que debe tomar 10 días seguidos para lograr el descanso, el cuestionamiento es si este tiempo es suficiente. Sobre todo, pensando que la mayoría de lo/as chilenos han trabajado desde sus casas estos últimos dos años, es decir, si bien no desarrollarían labores propias del trabajo, si estarían en muchos casos en su oficina, sentados en la misma silla o compartiendo el mismo espacio en el que trabajan durante las vacaciones.Un estudio de la Universidad Tampere de Finlandia plantea que desde el octavo día de vacaciones la mente de una persona ya es capaz de desconectarse y descansar, no obstante, esto ahora ocurre al estar viendo muebles u otros accesorios propios del empleo. En el régimen laboral anterior a la pandemia, sencillamente se dejaba de ir a la oficina, eliminando los registros visuales de la rutina laboral, pero ahora, un día de vacaciones comienza de igual forma que uno de trabajo e inclusive se vivencia en el mismo espacio."
    },{
        titulo:'El reto de crear una nación con más ciencia',
        fecha: '01 noviembre de 2022',
        pseudo: 'El chicorita',
        body:"Se  asdasdasdas vive la última semana de febrero, la cual para la mayoría de lo/as chileno/as significa el fin de sus vacaciones de verano, y por supuesto, el temido inicio de la vorágine del año laboral y escolar con todas las obligaciones que conlleva. La pregunta aquí puede parecer sencilla, pero, ¿realmente lo/as chileno/as descansan en sus vacaciones, en este contexto de crisis pandémica a cuestas con dos años de teletrabajo en casa? En muchos casos quizás la respuesta ya no es tan fácil. Primero, en nuestro país todo/a trabajador/a tiene 15 días de vacaciones al año, que pueden aumentar en el área pública a 20 o 25 días (Estatuto Administrativo) o un día cada tres años en el área privada (Código del Trabajo). Si bien, la ley protege al/a trabajador/a estableciendo que debe tomar 10 días seguidos para lograr el descanso, el cuestionamiento es si este tiempo es suficiente. Sobre todo, pensando que la mayoría de lo/as chilenos han trabajado desde sus casas estos últimos dos años, es decir, si bien no desarrollarían labores propias del trabajo, si estarían en muchos casos en su oficina, sentados en la misma silla o compartiendo el mismo espacio en el que trabajan durante las vacaciones.Un estudio de la Universidad Tampere de Finlandia plantea que desde el octavo día de vacaciones la mente de una persona ya es capaz de desconectarse y descansar, no obstante, esto ahora ocurre al estar viendo muebles u otros accesorios propios del empleo. En el régimen laboral anterior a la pandemia, sencillamente se dejaba de ir a la oficina, eliminando los registros visuales de la rutina laboral, pero ahora, un día de vacaciones comienza de igual forma que uno de trabajo e inclusive se vivencia en el mismo espacio."
    },

]
