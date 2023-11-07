import React from "react";


const TeamDetailsGroup = () => {
  return (
    <>
      <div className="haskbgclr p-4">

        <div className="row">
          <div>
            <iframe src="./assets/pdf/Prismoline.pdf" width="100%" height="700px" title="pdf"/>
          </div>
        </div>

        <div className="row">
          <img src="./assets/img/team/1.jpg" alt="img" loading="lazy" />
        </div>

        <div className="row mt-3">
          <div className="col-md">
            <img src="./assets/img/team/2.jpg" alt="img" loading="lazy" />
          </div>
          <div className="col-md">
            <img src="./assets/img/team/3.jpg" alt="img" loading="lazy" />
          </div>
        </div>






      </div>

    </>
  );
};

export default TeamDetailsGroup;
