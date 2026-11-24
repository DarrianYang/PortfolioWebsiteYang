"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const gallery = [
  { src: "/images/gallery/graduation.jpg", caption: "Wentworth graduation", alt: "Darrian in graduation attire at Wentworth Institute of Technology" },
  { src: "/images/gallery/spartan.jpg", caption: "Spartan race", alt: "Darrian at a Spartan race" },
  { src: "/images/gallery/baa-10k.jpg", caption: "B.A.A. 10K", alt: "Darrian with fellow runners at the B.A.A. 10K" },
  { src: "/images/gallery/finish-line.jpg", caption: "Rockfest Half Marathon", alt: "Darrian crossing a race finish line" },
  { src: "/images/gallery/race-day.jpg", caption: "Baystate Marathon", alt: "Darrian and fellow runners wearing race medals" },
  { src: "/images/gallery/post-race.jpg", caption: "Baystate Half Marathon", alt: "Darrian and fellow runners after a race" },
];

export function PhotoGallery() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  function openPhoto(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }
  function move(delta: number) {
    setSelected((index) => (index + delta + gallery.length) % gallery.length);
  }
  const photo = gallery[selected];
  return (
    <>
      <div className="gallery-grid" aria-label="Photos of milestones and races">
        {gallery.map((item, index) => (
          <figure className="gallery-item" key={item.src}>
            <button type="button" onClick={() => openPhoto(index)} aria-label={`View photo: ${item.caption}`}>
              <Image src={item.src} alt={item.alt} width={800} height={1000} sizes="(max-width: 640px) 50vw, 33vw" />
            </button>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} className="gallery-dialog" aria-label="Photo gallery" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
        <div className="gallery-modal">
          <div className="gallery-modal-header">
            <p>{photo.caption} <span>{selected + 1} / {gallery.length}</span></p>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Close photo">×</button>
          </div>
          <Image src={photo.src} alt={photo.alt} width={900} height={1200} className="gallery-modal-image" />
          <div className="gallery-modal-controls">
            <button type="button" onClick={() => move(-1)}>Previous</button>
            <button type="button" onClick={() => move(1)}>Next</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
