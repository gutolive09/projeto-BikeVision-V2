import React from "react";
import Webcam from "react-webcam";
import "./CamVistoria.module.css"

export default function CamVistoria() {
  return (
    <>
      <div className="container-webcam">
        <Webcam />
      </div>
    </>
  );
}