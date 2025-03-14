import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>lamalog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
      </div>
      {/* MOBILE LINK LIST */}
      <div
        className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
          open ? "-right-0" : "-right-[100%]"
        }`}
      >
        <a href="">მთავარი</a>
        <a href="">ტრენდული</a>
        <a href="">პოპულარული</a>
        <a href="">ჩვენ შესახებ</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            შესვლა 👋
          </button>
        </a>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="">მთავარი</a>
        <a href="">ტრენდული</a>
        <a href="">პოპულარული</a>
        <a href="">ჩვენ შესახებ</a>
        <a href="">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            შესვლა 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
