import React, { useState } from "react";
import cx from "classnames";
import Link from "next/link";

export default function SidebarItem({image, title, href, active}) {
  const [icSidebar, setIcSidebar] = useState(true);

  
  const classItem = cx({
    "sidebar-item": true,
    "mb-30": true,
    active: active,
  });
  return (
    <>
    <Link href={href}>
      <a className={classItem}>
        {image}
        <span>{title}</span>
      </a>
      </Link>
    </>
  );
}
