import React from "react";

export default function MovieLayout({ children, modalParallel }) {
  return (
    <div>
      {modalParallel}
      {children}
    </div>
  );
}
