import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Link href="/admin/add_items" className="text-green-600 hover:text-green-900">
        add item
      </Link>
    </div>
  );
};

export default page;
