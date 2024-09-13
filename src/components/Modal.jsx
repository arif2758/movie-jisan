"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const overlay = useRef(null);
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <div
      ref={overlay}
      onClick={onHide}
      className="modal-container bg-dark text-white"
    >
      <dialog ref={modalRef} className="modal-content ">
        <span onClick={onHide} className="close-button">
          <Image
            src="/icons/close-red-icon.svg"
            alt="close"
            width={30}
            height={30}
          />
        </span>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
