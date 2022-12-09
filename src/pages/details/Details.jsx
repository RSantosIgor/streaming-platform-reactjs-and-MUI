import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import Tabs from '@mui/material/tabs';
import Tab from '@mui/material/tab';
import Typography from '@mui/material/Typography';
import Comments from '../../components/Comments';
import NavBar from "../../components/navbar";
import Paper from '@mui/material/Paper';
import movies from '../../assets/json/movies.json';
import './Details.css';
import Episodes from '../../components/Episodes';

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

    const actors = [
        {
            name: 'Daisy Ridley',
            character: 'Rey',
            img: 'https://boaforma.abril.com.br/wp-content/uploads/sites/2/2016/10/daisy-riddley-endometriose-ovario_0_0.jpg'
        },
        {
            name: 'John Boyega',
            character: 'Finn',
            img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgVFRIYGBgYGBgZGBgYGhgYGBgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjYhISc0NDQxMTc0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQ0MTQ0NDQ0NT00NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EADsQAAIBAwMCAwYEBAYBBQAAAAABAgMEEQUSITFBE1FxBiJhgZGhFDKx0UJSwfAVI2JykuHCBxYzU7L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgEEAQMDBQEAAAAAAAAAAQIRAwQSITETFEFRBRUyImFxobFS/9oADAMBAAIRAxEAPwCmsNUe5xfmWc7ynn3lz8Ss0t0/xUs9Ox1rHh/iIbfy5WSssMXyelj+oTSpqx7VakNn5cfEzag3zg2+rOh+G4645yUen+H4XPXnJeENvBy6jO80raoohRZdQLHOAALgAQBRABTqhRlUkoxWWzktfZqajcQcumSUrYN/7KaHOjTy0tzIGv6Jd3E23UUYLtnC+Zb+1XtVTsLaM1Hc5e7CPKTklnDeMJHj3tF7Z3l85RnNwpy48KDxDCaeJd5cpPktJpcEFhrdGlaS2Sqqc8ZcYc4XqVkNcdOT8JtdMN/fKM/Hjt8jpGdkljd6xWqT3Tqzk+2W8L4JdEjupqrwko845f7FY+RX5i2C1t7/AJ9/o+hOp1FJZRnkyTbVnTafbuLJLsAjJNZXRgSQAAgAA7hQnJZUW0u5waLSrqnGjiS55ySDnRa0VHDjllg76nnGOfIiezFampz3rq3j0OLyrT/GRaXu85MZYVJ3Z6WPXTjBRUeifPUIQ6rBQ6vqHicIn+084SUdi9TP0IvcnjKys/URxRi7Iza3LkjtqrLnSrrw4+8sEG/bqScoxePMsdVVN00ornhlppU6MbfEorKX1yXUEnZi8+SWNQrhFdpd0lDEVyiNPUqkqm2MeRzR6tOnUmpLhv3Q8eP4pzjHMcdumSPHG7Zb1eZpQjxRLV7UXWIp3K8j/wDWBXxRNfWaj4KbRbLe9zZd1LSmvzFRotSUHhoub6i5wyvIyySe7vg79NjgsN7eSFqEKfh43Gb3NZSZ3cTkm4tjJvBUu7PI1WVTlxGqFABS5ygKIKAAAAAHVOo4vK6iDVzPZCUvJAEDX9Xq3E1GdRyjDiMey8/V9eSpixJc8skW1tKo8L6lW/dkpXwhloVJvuXlvo8f4m/kXdpo1JdYJ+vJk8sTZYJMxig32O1TeOh6HDTaeMKnH6IlxtIJY2L5or5/2LLTv5PL9uBUz0q4sacl/wDHH5JFDqegQkm4e7L7P9iY5k+yJYGlwVWm1E4bc8omFTRpyp1UuvOG+fnlNcFsdEXaMGqAAAEAGWAMAuNCjFywyzuNOTmmkUGl1dtRGzg04pnLmbjK0e9oFDJiproiVrCDh07Ea20+MU20WMKybwNahU202ZqUujtljh+VdFHRoKdVrsi78CmuMEDRaecyZJqUpeJnPBaTt1ZliglG67ZSa3bbJZRYaHQi4ZaHtbobqeQ0Be4WcrxmMcKjqW64aJLVNfwgPOMAMrO3b/BCjXpLpgS51GCi8Mx/iS82Dm33Onwr5PHf1J1SjQ5cz3SbGkApsjzJS3O2AogoKigAAAAAAKQ9Ulim/VfqTCFqq/y36r9Q+gU1Knkv7GjtguCstqfQuqTyjlyS9jpwwrklWz5Lyyg2Udmln8yNPplNvpyYs6kT6Nt6kl2vHQlW1rJ4JtS1a4AM3XtsFZcRwzQ39Nx7/dGa1C7jDKfL8kEm+kHKK7ZQ6zZ7Z+JHv19V1+qGISysl34sKtN4ef1TKKnwseTf6nVhk6pnHmik7XudgAGxgAAAAsJYafkaW21eKhh9cGZArKCl2dODUyw3t9y5t9SxUb7DuqanGccIoQK+ON2a+uybWvk0FnqUKdPHciT1me7joVQE+ON2Q9dlaSTqjQz1eMqeH1GtP1KME0UaAjxRqi3rslp+6LmpquW+QKYCfHEj1uQZFAC5wgKAAAKIKAAAAAZAQ7p43LIJStkq3sJzWUhjWdLqQoym1xFxb9NyX9TZ6ao+GsFN7R6mlGVBxy6kJLrjHbK465/Q5nlk5Uew9Fihi3N81/Zi7d8Etym8Qh1fUhW35sNdC0WYcpdSsnyccVaLPSvZmVRe9Uw+q4z8mP1Fc2U8Ob2+aeYsp6OoXfLgstNYj73vZfbb+6NJSs5VrWUq6Uau97aUtyUobU01Ui1tluclzu6IhJvltBuK4SZeaL7TbklNLPTPQv6mqLZk8s8HwqjSbwn0bWfquGv7wjUQvnUpqLXYylJpm0Ypor9Zv5VZuO9pZ8/qWukaZZqn72yc2uW2m/l5FLdafFqTy03GWJJ9JtPa5Nxe2KeOFzx1GrHS6yhJVLhTWz/L2VZNKba96cZuUWsZ4Ue/Y0SuPZm3UurHr7TYUqm+k2ot4lHth916FE1hy/3S/wD0y70+jVS2zefj2+XwIWoU0stLpLDfm2m+C+GVSp8lM8f02uCEgAEdRxgACkkgIKIQAAAAAADIAIGGQySBQEAAZFEFIIFAQUAAAABRGBZWekyqU9+fQALDTfEWSb/gHxDQYVJScI9nglXV3Up1FBrlvBjJTvg9TDLSqK3dkzTrWVNYbKf2vs4z2z7rj6v92iw1K4qUYqTzyUc9R3zi5/lT6fdfdIyeOSe5nRl1WGWPZEz8VioXtrBTwmUlzNOplf2+/wBy106pgpNOjjhVs0FnplNvPK9HgkX3h047YJuX80m3j0yRra5b4zgc1CPh0Zz6vHHq8cmSs1aXZRwpupPhd+po6FrKMOhVQ1KVGnHw7VzjhOVTK4fkss0Vv7WRlSSUIyko/l2py9MCUWxGSRHs21Lhcrs1n6ryLSLpy58KKl6L7FPp+sTq1MVKEaU08rbJSzF/zY46djQ1aC/NEbWid0WVF9T4/LjBl9Vnwo/6nJ/RJf1+pq76phYZmq9t4lTauzf3x+xrh/Iyz/iynQqJN/aunLHmskY7jzgAABIAAEgMiM2Ps97MQuaO/q338mX1r7AU8e9zj7iiDy8ct6EqktsVlnqVx7BUZYSSXo/1JVj7J0KE09qy1yKB5Nc2s6b2zWGMHs1z7OUK00pQWEu5Dn7F2ylu2rHZdsCgeS5A9c/9rWj/AIIgTRJ4+KhBSCBQQAQAAAAELWw1aVOns9fuVYgBf+zt5OnOUks5eRdTuak68Z46MjaFVxPBpKtspNPBjPK4uj1dPo4ZsalfJW6zUqVqaWOFyZydq1FuS46P4Z6P6m8cFjAxTt4wTeOxl5m1ydUvpsFVOjzW9puM+3P95JdnUJ2vUobZyjCMdso9El1e3t6lRbzElwefKOydGmsquCwurpSjh8mep1XxgkV67iorbJ/7U39cGe2y+6junOW/ZCOF8Fz8kXsYy2qPhz3P/S+fmRNM8Tb7lKXPww/m2TY/i8uKpzXHeSUX/foTtC5I0XVoyW+Etr7tdPn3Lq2u8LrwyLVjdxg99Jf8k8/J4K+1rzxKMoOHPCf6ohxF1wTtQqGfqXfhtNZzl5/QsL6rx1M/WnuZrhj+qzPPKo0OXVy6kssZQiFOo4QAABIMAAA23/p7rMKUnCbws5RtKntXRVXYpLnk8VjJro8BKb65efMsRR7bX1+lBp7opfF9ylu/aSm68Pe48snlkpyfWTfq2cuT8xYo9wp63avndHp5kRa/b5cHOOX2z2PG9z82Jl+YsHsn+NWseFKPHxA8cy/MBYoaFEFKgUBBUSAABSAIIKAA9Zz2zTNxb1MwT+Bgkyyo6tKMcGOXHu6PS0OrWFOMujR07vNTaOahU202ZCF7JT3D9zqkqiwU8LtHX9xg4u+/YdubXfaV5d9u7/i1L/xMjRqFzql9P8NOMW1nG7H8uVlen/ZnISz0LuL5s8/NmjNqvZF5bVOUWzqyxw/jjsZq0uFnkv7aa4MpJoRakWum65XpP3aafrlIto+0N83lU6UfnKTGbC3p456ltDwWkuP6lLZouCtqXl1UeZzST67ePoR7maRY3yiumMGc1K6jT78vogrYdLkYvrnt5leQ72q3Ugv4s5a8k+Ev1Jp1Y47YnHllukGAAEaGYAAEgAACAGBBQAOQAUAMAAABgAAAZDJpno9NcZI97o6UcxMlmizul9PyxTfZRCoSUcPAZNThao6DIgoIAAAEgAoAgBUIKkAN3C/y5f7X+hmGn1L7UbvZFxj+Z/ZefqUcOgByqr/77k+11Vx68kCcBporKCZZTa6Npae0keE2Oz12MXlVOvPUw21ipPyM/EjRZpGyufaZy4im2vuU0757nNvdP7RKyLkdxg+5eONIrLJKROsJZqKTeW88/HBdFDQltafk8/QtqN5Tn/Fh+T4Zq0ZkgAAqSAAwYACALSWZJfEEpW6HKdvOXSI7+AqfymssbeMaaeEMXOo06bw0jn8zbpI9hfT8agpSZmv8Pqfyh/h1T+U1tpcQqLKSI11qcKcsNIhZpN1RMtBhjHc5cGWlbSTxjkfWm1H2Le0nGtU3JcFtKrFS2kyzSXFEYtBjknJvj2Md+Cn5Cmrq0E2+AI8xb7bH5IlazlKeVIcu6mynh88ESOqJVNrZNnOnNcsyaaq0dqlCSltfJjqqbk3gbNbc0aWx4wZaslueDqhPd7HharT+J3d2cCiCmhyCggBACgBCu9QhT4XvS8uy9WCCbKSSy2kviQK2o5e2H/J/0RV1K06kveefh2Xoh62hlv0JSsNnFX656jW3jPkS6sBqEcMlrkixqKydeGhZU9svg+V+wqJoDUqbXQ5WfIkYDAoWNwkxxCCeISB3KQ3OOGc1W9o+1uWSGByhXlHpJ+nb6Eunf/zL5r9itXA9GWRQLiFSMujydMpcY5TJFO8muvvfr9SGiUy/tNOnUWUSY6HURxoevU4+7Kah/v4X/LovmXUdV3TUI4lno1hp/NGE3kvhcHrYYaXanJ8kjTqcoRxIqvaKjFLPcm6hqMqONy6mdvbyVaSXmzOEJbrZvqdVheLbF2Xfs9+T5FNrT/zCZSrTt4LK4fA3U02rVj4uOMZXoaRg1Js5c2ohLAop8ll7P0NsMkqrCLqbslZpNSc4NRzxwRaFKrUqyg5NOPUo8UpSbOha3FCEYpWarjzAppKpHjL4Az8DOj7jhKy6tYqtBZ/M+Sw9oKEadNOEuc9EUlrCdaom30NDVsHOKU5ZOiU4x4Z5WDTZsi3RdEyzs6crZtzWcdPkZ7TrWm5Ty+ksL0LSpR2U3FTwsGYlNwk9rLRnF9FNRgnirc7Or2CjUko9E+BlCNt8g2WOU6OalSMFmTwkQ7jUoR4j7z+31Kq4uJ1HmT9F2QIJF5qMp8RzGP3f7EKMRYxHoQCQOqUCRbLqcRWB23fBpEg7qR4GdpIbyMS5JaKibd6afyz59iCnJfw/cmx4YleOHntL9e5DRYi7p9l9xVv8/sPJCoURY0oNnUYHeDpAkYrrjA5ay930CcTi3eG0R7gkSjk4fHXgeItdc/IPgHTuF6jq5RFJVH8qIi7DBxO7erOnJShOUJLo4tp/YMC7S1Cybc67c1VFVJqe3o3GKf1ilk7sL5eJFtYw0/NFftCccc+TQolM2mpXPjRUEujyW9G9qQobNvOPLsUXso/Eb3cuKX0fT9DQ/iIue05cmVxk0j2NNo8WSCk32Z2w1F28ppr8zyPWfiSqSqR43DPtBb7Z5LrR1/l/ISytRTRXFoovM4y6RCq06zb5YEucp56CGfll8nV6LB/yzPaNW2T5XVmnuIuUMryI0Lekn2JE7qEY9Sk3ulaRvgx+KDjKRlLy4qRk4tkFvJL1Gqp1G0Vt5V2QbXV8L1Z1wXB4Gok3N82hK15CGV1a7L9youbmdR8vjyXRfuKkDgWo5xlRHFEcUBVElIg5jEdghEjtIsgcVY5Q3DkkMYmsPJDQFcMd2P03wNp5OoEJ0DuUQa3Qa7rlHWMiQeGXAyhTupHbJrt1XozkAQUQUARjK4mh5jFTqn8QwTMcEeuuUSI9BuquSJdEIZRIt1x8xjBItlw/UrHsljyidJCpDkYmtFThQErx9yXox7acXH5Jej/QPoE3RL90KkZ9YtYmvOL64+K6mypum571JPPK+Z59D8q9CfbXMko4k+P6GGbEpcrs9DR6x4VtkrX+Gr12ipQyh/SnimZqpqc5R2s5p6lOMcI5/FKqO5a7Esm5fBqHfREMi7iT7gT4ER9z/Yad1L+ZnMq8n1kwA6KR5Msk/k4IOqv3Yr/Vn6L/ALAAUIFNNkhRAC6KsNgbAAA6jAXYKBJU5cDiUQAFhmPDwSUhAM32DuDCSFAvEqJWWYp+X6MZQAWYAAAgsIxqquAAMEuhzE5qrkAIl0BvBItlw/UAIj2QyRFDqADUgBm5fuP++rFAPoHOeESKD7ABSXRZDwgAULAAAQD/2Q=='
        },
        {
            name: 'Harrison Ford',
            character: 'Han Solo',
            img: 'data:image/jpeg;base64,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'
        },
        {
            name: 'Adam Driver',
            character: 'Kylo Ren',
            img: 'https://www.datocms-assets.com/46743/1642185084-adam-driver-adam-driver.jpg?auto=format%2Ccompress&cs=srgb'
        },
        {
            name: 'Oscar Isaac',
            character: 'Poe Dameron',
            img: 'data:image/jpeg;base64,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'
        },
        {
            name: 'Carrie Fisher',
            character: 'Leia Organa',
            img: 'https://cdn.ome.lt/nNxrirv0Bce2QP2j7NSZlyW51RM=/1200x630/smart/extras/conteudos/carriefisher2-xlarge.jpg'
        },
        {
            name: 'Mark Hamill',
            character: 'Luke Skywalker',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DQ4tVhG_iaDiKOGacnvFjygwtgvgWlqUDfnosG869x4Z144S0aGFqd-dRVEcmpkb8-s&usqp=CAU'
        },
        {
            name: 'Gwendoline Christie',
            character: 'Capitã Phasma',
            img: 'https://www.revistanerd.com.br/wp-content/uploads/2021/01/Gwendoline-Christie.jpg'
        }

    ];

    return (
        <Box>
            <Box className="main-movie" style={{ backgroundImage: `url(${movieState.img})` }}>
                <NavBar />
                <Box class="d-flex flex-column justify-content-evenly h-100" >
                    <Box className="row margin-top-5">
                        <Box className="col-md-12 col-sm-12 text-center px-3 title-main">
                            <h1 className="fw-bolder">
                                {movieState.name}
                            </h1>
                        </Box>
                    </Box>
                    <Box className='row'>
                        <Box className="col-6 d-flex justify-content-end">
                            <p className="text-light">
                                <i class="bi bi-clock mx-1"></i>
                                {movieState.time || '1h00min'}
                            </p>
                        </Box>
                        <Box className="col-6 d-flex justify-content-start">
                            <p className="text-light">
                                <i class="bi bi-badge-4k-fill mx-1"></i>
                                Disponível em 4k
                            </p>
                        </Box>
                    </Box>
                    <Box className='row'>
                        <Box className="col-6 d-flex justify-content-end">
                            <Button variant="contained" className="button-main fw-bolder mx-1">Assistir</Button>
                        </Box>
                        <Box className="col-6 d-flex justify-content-start">
                            <Button variant="outlined" className="button-addToList fw-bolder mx-1">Adicionar à lista</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs textColor="primary" indicatorColor="primary" variant="fullWidth"
                    value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sinopse" {...a11yProps(0)} />
                    <Tab label="Episodios" {...a11yProps(1)} />
                    <Tab label="Elenco" {...a11yProps(2)} />
                    <Tab label="Comentarios" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box className="p-5 first-word-uppercase-p" sx={{ width: '100%', maxWidth: '100%', bgcolor: '#303030', position: 'relative', overflow: 'auto', maxHeight: '10rem' }}>
                    {movieState.info}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Episodes />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box className='d-flex row justify-content-center'>
                    {
                        actors.map(e =>
                            <Box className='d-flex flex-column col-md-2 col-sm-5 justify-content-center'>
                                <Box className="m-auto"
                                    sx={{
                                        m: 1,
                                        width: 128,
                                        height: 128,
                                        backgroundImage: `url(${e.img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <Paper elevation={3} />
                                </Box>
                                <h6 className='text-center'>{e.name} como <br /><span className='text-muted'>{e.character}</span></h6>

                            </Box>

                        )}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Comments />
            </TabPanel>
        </Box>
    );
}