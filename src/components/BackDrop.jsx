import React from "react"

const BackDrop = ({ children }) => {
  return (
    <div className="fixed left-0 bottom-0 top-0 right-0 z-50 h-screen w-screen bg-black bg-opacity-70 grid place-content-center">
      {children}
    </div>
  )
}

export default BackDrop
