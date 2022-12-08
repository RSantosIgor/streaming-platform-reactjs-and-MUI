import * as React from 'react';
import NavBar from "../../components/navbar";
import SlideHorizontal from "../../components/SlideHorizontal";
import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import './home.css'

const movies  = [{
    name: "Star Wars: O Despertar da Força",
    info: "A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria: a Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido. A resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia.",
    img: 'https://images.hdqwalls.com/download/star-wars-4th-may-kt-3840x2160.jpg'
},
{
    name: "The Last Of Us",
    info: "No universo da franquia, 26 de setembro de 2013 marca o momento em que a infecção Cordyceps se espalhou massivamente pelas cidades dos Estados Unidos, dando início ao caos generalizado que quase levou a humanidade à extinção",
    img: "https://d2d7ho1ae66ldi.cloudfront.net/ArquivoNoticias/11e64ac8-6b49-11ed-aa6e-9587410378a2/chrome_2022-11-23_13-06-24.jpg"
},
{
    name: "Perdido em Marte",
    info: "O astronauta Mark Watney é enviado a uma missão para Marte, mas após uma severa tempestade, ele é dado como morto, abandonado pelos colegas e acorda sozinho no planeta inóspito com escassos suprimentos e sem saber como reencontrar os companheiros ou retornar à Terra",
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/4278D171092FF3D975D678B9E9308ECCEB401CD412841B3D00B84CF866131376/scale?width=1200&aspectRatio=1.78&format=jpeg"
},
{
    name: "Interstellar",
    info: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie",
    img: "https://www.thefactsite.com/wp-content/uploads/2022/07/interstellar-movie-facts.jpg"
},
{
    name: "One Piece",
    info: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie",
    img: "https://loucosporgeek.com.br/wp-content/uploads/2020/11/One-Piece-Wallpaper-de-Wano-Novo-Arco.jpg"
},
{
    name: "A Grande Aposta",
    info: "Em 2008, o guru de Wall Street Michael Burry percebe que uma série de empréstimos feitos para o mercado imobiliário está em risco de inadimplência.",
    img: "https://livecoins.com.br/wp-content/uploads/2021/06/Big-Short.jpg"
}
];

export default function Home () {
    const [movieState, setMovie] = React.useState(movies[0]);
    const change = () => {
        const n = Math.floor(Math.random()*movies.length);
        setMovie(movies[n]);
    }    
        React.useEffect(() => {
            const interval = setTimeout(() => {
                change();
                console.log("Change");
            }, 5000);
            return () => clearTimeout(interval);
        });
    return (
        <Box>
            <Box className="main-movie" style={{backgroundImage: `url(${movieState.img})`}}>
                <NavBar/>
                <Box className="row margin-top-10">
                    <Box className="col-md-6 col-sm-10 text-center px-3 title-main">
                        <h1 className="fw-bolder">
                            {movieState.name}
                        </h1>
                        <p>
                            {movieState.info}
                        </p>
                        <Box className="margin-top-5">
                            <Button variant="contained" className="button-main fw-bolder mx-1">Assistir</Button>
                            <Button variant="outlined" className="button-secondary fw-bolder mx-1">Informações</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="margin-top-2">
                <Box className="row ms-2">
                    <Box className="row">
                        <Box>
                            <h6 className="fw-bolder">
                                Continuar Assistindo
                            </h6>
                        </Box>
                    </Box>
                    <Box className="row mt-1">
                        <SlideHorizontal {...[...movies]}>

                        </SlideHorizontal>
                    </Box>
                </Box>
                <Box className="row ms-2">
                    <Box className="row">
                        <Box>
                            <h6 className="fw-bolder">
                                Categorias
                            </h6>
                        </Box>
                    </Box>
                    <Box className="row mt-1">
                        <SlideHorizontal {...[...movies]}>

                        </SlideHorizontal>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}