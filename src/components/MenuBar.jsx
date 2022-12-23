import React from "react"
import { NavLink } from "react-router-dom"

const MenuBar = () => {
  return (
    <div className="max-w-28 h-screen bg-primary flex flex-col gap-y-4 items-center px-2 py-4 sticky top-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "w-full " + (isActive ? "fill-active" : "fill-inactive")
        }
      >
        <svg className="w-20 h-20 mx-auto" version="1.0" viewBox="0 0 200 200">
          <path d="M87 41.6c-22.1 4.7-40.8 23.6-45.5 45.9-2.7 12.7-1.6 24.5 3 35l2.2 5-3.4 9c-4.2 11.4-4.2 14.4-.2 18.9 4.6 5.3 8 5.5 19.7 1.4l9.7-3.4 5.7 2.3c33.6 13.6 72.8-7.5 80.3-43.2 4.3-20.4-1.6-39.7-16.4-54.6C127.2 43 107.4 37.2 87 41.6zm24.5 11.9c17.3 4.6 31.6 19.2 35.4 36.2l.9 4.3h-26.6l-1.2-2.9c-1.4-3.6-6.4-8.7-10.4-10.9-2-1-5.5-1.6-9.6-1.7-8.7 0-14.9 3.5-18.8 10.5l-2.7 5H52.2l.9-4.3c5.7-25.8 33.1-42.8 58.4-36.2zm-6.6 37.9c6.7 3.5 6.5 14.3-.4 17.4-9.1 4.1-17.9-5.1-13.1-13.7 2.6-4.7 8.4-6.3 13.5-3.7zM80 108.9c1.4 3.6 6.4 8.7 10.4 10.9 4.1 2.2 15.1 2.2 19.2 0 4-2.2 9-7.3 10.4-10.9l1.2-2.9h26.6l-.9 4.2c-6.7 30.2-42.3 47-68.4 32.4l-4.6-2.5L63 144l-10.9 3.9L56 137l3.9-10.9-3-5.4c-1.6-3-3.3-7.5-3.8-10.1l-.8-4.6h26.5l1.2 2.9z" />
        </svg>
      </NavLink>
      <NavLink
        to="/teams"
        className={({ isActive }) =>
          "w-full text-center text-lg uppercase " +
          (isActive ? "text-active" : "text-inactive")
        }
      >
        Teams
      </NavLink>
    </div>
  )
}

export default MenuBar
