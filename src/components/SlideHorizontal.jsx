import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import { useState, useRef } from "react";
import gsap from "gsap";
import './SlideHorizontal.css';

export default function SlideHorizontal (props) {

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
  
    //Slide click
    const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
  
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
  
    //Anim
    const anim = (e) => {
      gsap.from(e.target, { scale: 1 });
      gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
      gsap.from(e.target, { scale: 1.5 });
      gsap.to(e.target, { scale: 1 });
    };
  
    const scrollCheck = () => {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };

    return (
        <Box>
            <Box className="carousel" ref={scrl} onScroll={scrollCheck}>
                <Button variant="contained" className="fw-bolder mx-1 position-fixed start-0 z-index"
                    onClick={() => slide(-80)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}>
                    Back
                </Button>
                {Object.values(props).map((e,i)=> 
                    <Box className="element-movie rounded" key={i}
                        style={{backgroundImage: `url(${e.img})`}}>  
                        <h6 className="fw-bolder position-absolute bottom-0 mx-1 text-truncate">
                            {e.name}
                        </h6>                                 
                    </Box>
                )}
                <Button variant="contained" className="fw-bolder mx-1 position-fixed end-0 z-index" 
                    onClick={() => slide(+80)}
                    onMouseEnter={(e) => anim(e)}
                    onMouseLeave={(e) => anim2(e)}>
                    Next
                </Button>
            </Box>
        </Box>

    )

}