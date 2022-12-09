import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import Tabs from '@mui/material/tabs';
import Tab from '@mui/material/tab';
import Typography from '@mui/material/Typography';
import NavBar from "../../components/navbar";
import movies from '../../assets/json/movies.json';
import './Details.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Details() {
    const movieState = movies[0];
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box>
            <Box className="main-movie" style={{ backgroundImage: `url(${movieState.img})` }}>
                <NavBar />
                <Box className="row margin-top-10">
                    <Box className="col-md-12 col-sm-12 text-center px-3 title-main">
                        <h1 className="fw-bolder">
                            {movieState.name}
                        </h1>
                    </Box>
                </Box>
                <Box className='margin-top-10 row'>
                    <Box className="col-md-6 d-flex justify-content-end">
                        <p className="white">
                            <i class="bi bi-clock mx-1"></i>
                            {movieState.time || '1h00min'}
                        </p>
                    </Box>
                    <Box className="col-md-6 d-flex justify-content-start">
                        <p className="white">
                            <i class="bi bi-badge-4k-fill mx-1"></i>
                            Disponível em 4k
                        </p>
                    </Box>
                </Box>
                <Box className='row'>
                    <Box className="col-md-6 d-flex justify-content-end">
                        <Button variant="contained" className="button-main fw-bolder mx-1">Assistir</Button>
                    </Box>
                    <Box className="col-md-6 d-flex justify-content-start">
                        <Button variant="outlined" className="button-addToList fw-bolder mx-1">Adicionar à lista</Button>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs textColor="primary"  indicatorColor="primary" variant="fullWidth"
                 value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sinopse" {...a11yProps(0)} />
                    <Tab label="Episodios" {...a11yProps(1)} />
                    <Tab label="Elenco" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}  textColor="secondary">
                Item One
            </TabPanel>
            <TabPanel value={value} index={1} textColor="secondary">
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2} className="text-light">
                Item Three
            </TabPanel>
        </Box>
    );
}