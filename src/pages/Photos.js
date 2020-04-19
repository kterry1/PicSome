import React, { useContext } from "react";
import Image from "../components/Image";
import { PictureContext } from "../pictureContext";
import { getClass } from "../utils";

export default function Photos() {
  const { allPhotos } = useContext(PictureContext);

  const imageElements = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)} />
  ));
  return <main className="photos">{imageElements}</main>;
}
