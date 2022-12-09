import * as React from 'react';
import NavBar from "../../components/navbar";
import SlideHorizontal from "../../components/SlideHorizontal";
import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import './home.css'
import movies from '../../assets/json/movies.json';
import categories from '../../assets/json/categories.json';


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
                    <Box>
                        <Box>
                            <h6 className="fw-bolder">
                                Continuar Assistindo
                            </h6>
                        </Box>
                    </Box>
                    <Box className="row mt-1">
                        <a href="/details" className='text-decoration-none'>
                            <SlideHorizontal {...{data: movies, height: 200, label: "fs-4 text"}}>

                            </SlideHorizontal>
                        </a>
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
                        <SlideHorizontal {...{data: categories, height: 400, label: "fs-1 text"}}>

                        </SlideHorizontal>
                    </Box>
                </Box>
            </Box>
        </Box>

    )
}