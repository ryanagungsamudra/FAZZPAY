import React from "react";

export default function Footer() {
  return (
    <div className="hidden md:block md:flex md:justify-between md:bg-primary md:text-secondary md:h-[68px] md:items-center md:px-[6rem]">
      <p>2022 FazzPay. All right reserved.</p>
      <div className="flex">
        <p className="pr-4">+62 8228 4798 890</p>
        <p>contact@fazzpay.com</p>
      </div>
    </div>
  );
}
