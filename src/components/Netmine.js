import React from "react";
import NetflixComponent from "./NetflixComponent";
import "./Style/Netflix.css";
import Sdata from "./Sdata";

const Netmine = () => {
  return (
    <>
      <h1 className="heading_style">List of Top 3 Netflix Series in 2020</h1>
      <NetflixComponent
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
      <NetflixComponent
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}
      />
      <NetflixComponent
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}
      />
    </>
  );
};

export default Netmine;
