import React from "react";

export default function GridWrapper({ children }) {

  return (
    <div className="grid grid-cols-3">
      {children}
    </div>
  )
}
