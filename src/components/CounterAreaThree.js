import React from "react";
// import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
// import { useState } from "react";
import { useInView } from "react-intersection-observer";
const CounterAreaThree = () => {
  const [ref, inView] = useInView();
  return (
    <>
      {/*================= counter area start {/*=================*/}
      <div className='counter-area bg-base pd-top-100 pd-bottom-60 haskcounter'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                {/* <div className='thumb'>
                  <img src='assets/img/icon/5.svg' alt='img' />
                </div> */}
                <h2 className='text-white mt-3 mb-2'>
                  {/* <TrackVisibility partialVisibility >
                    {({ isVisible }) =>
                      isVisible && ( */}
                        {inView &&
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={90} /> +
                        </span>
                      // )
                    }
                  {/* </TrackVisibility> */}
                </h2>
                <p className='text-white'>PROJECTS</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                {/* <div className='thumb'>
                  <img src='assets/img/icon/6.svg' alt='img' />
                </div> */}
                <h2 className='text-white mt-3 mb-2' ref={ref}>
                  {/* <TrackVisibility partialVisibility >
                    {({ isVisible }) =>
                      isVisible  && (
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={85} />+
                        </span>
                      )
                    }
                  </TrackVisibility> */}

                    {inView &&
                  <span className='counter'>
                          <CountUp delay={0} start={0} end={85} />+
                        </span>
                      }
                </h2>
                <p className='text-white'>HAPPY CLIENTS</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                {/* <div className='thumb'>
                  <img src='assets/img/icon/7.svg' alt='img' />
                </div> */}
                <h2 className='text-white mt-3 mb-2'>
                  
                        {inView &&
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={6000} /> +
                        </span>
                     
                    }
                 
                </h2>
                <p className='text-white'>METRIC TONNES</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                {/* <div className='thumb'>
                  <img src='assets/img/icon/8.svg' alt='img' />
                </div> */}
                <h2 className='text-white mt-3 mb-2'>
                {inView &&
                        <span className='counter'>
                          <CountUp delay={0} start={0} end={1500000} /> +
                        </span>
                     
                    }
                  
                </h2>
                <p className='text-white'>SQ MTRS COVERED</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*{/*================= counter area end {/*=================*/}
    </>
  );
};

export default CounterAreaThree;
