import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm select-none">
      © {new Date().getFullYear()} Susil &mdash; Crafted with passion & code
    </footer>
  );
}
