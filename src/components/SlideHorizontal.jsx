import Box from '@mui/material/Box';
import Button from '@mui/material/button';
import { useState, useRef } from "react";
import gsap from "gsap";
import './SlideHorizontal.css';
import { Link } from 'react-router-dom';

export default function SlideHorizontal (props) {
    const {data, height, label} = props;

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
      gsap.to(e.target, { scale: 1.09 });
    };
    const anim2 = (e) => {
      gsap.from(e.target, { scale: 1.09 });
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
            <Box className="d-flex flex-column justify-content-center border-box">
            <Box className="d-flex flex-row position-relative overflow-scroll gap" ref={scrl} onScroll={scrollCheck}>
                  {data.map((e,i)=> 
                    <Link to="/details" className='text-decoration-none'>
                      <Box className="element-movie d-flex flex-row justify-content-center rounded" key={i}
                          style={{
                            backgroundImage: `url(${e.img})`,
                            height: `${height}px`
                          }}
                          >  
                          <h6 className={`fw-bolder align-self-center  mx-1 text-truncate z-index ${label}`}>
                              {e.name}
                          </h6>                                 
                      </Box>
                    </Link>
                  )}
                </Box>
              {scrollX !== 0 && ( 
              <Button variant="contained" className="fw-bolder mx-1 position-absolute start-0 buttom-prev buttom z-index"
                      onClick={() => slide(-100)}
                      onMouseEnter={(e) => anim(e)}
                      onMouseLeave={(e) => anim2(e)}>
                      <i class="bi bi-chevron-compact-left fs-2"></i>
                </Button>
                 )}
                {!scrolEnd && (
                  <Button variant="contained" className="fw-bolder mx-1 position-absolute end-0 buttom-next buttom z-index" 
                      onClick={() => slide(+100)}
                      onMouseEnter={(e) => anim(e)}
                      onMouseLeave={(e) => anim2(e)}>
                      <i class="bi bi-chevron-compact-right fs-2"></i>
                </Button>
                )}
            </Box>
        </Box>

    )

}