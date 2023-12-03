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
                <h2 className='text-white mt-3 mb-2'>
                  {inView &&
                    <span className='counter'>
                      <CountUp delay={0} start={0} end={100} /> +
                    </span>
                  }
                </h2>
                <p className='text-white'>PROJECTS</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <h2 className='text-white mt-3 mb-2' ref={ref}>
                  {inView &&
                    <span className='counter'>
                      <CountUp delay={0} start={0} end={150} />+
                    </span>
                  }
                </h2>
                <p className='text-white'>HAPPY CLIENTS</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>
                <h2 className='text-white mt-3 mb-2'>
                  {inView &&
                    <span className='counter'>
                      <CountUp delay={0} start={0} end={10000} /> +
                    </span>

                  }
                </h2>
                <p className='text-white'>METRIC TONNES</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-counter-inner style-2 text-center'>

                <h2 className='text-white mt-3 mb-2'>
                  {inView &&
                    <span className='counter'>
                      <CountUp delay={0} start={0} end={5000000} /> +
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
