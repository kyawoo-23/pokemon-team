import React from "react"

const Layout = ({ title, children }) => {
  return (
    <div className="p-5 w-full">
      <h1 className="text-xl font-bold capitalize">{title}</h1>
      <div className="flex flex-wrap items-center gap-x-12 gap-y-10 justify-center mt-5">
        {children}
      </div>
    </div>
  )
}

export default Layout
