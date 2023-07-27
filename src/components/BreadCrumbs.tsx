import { useRouter } from "next/router";
import React from "react";

const BreadCrumbs = () => {
  const router = useRouter();

  const path = router.basePath.split("/");
  return (
    <div>
      BreadCrumbs
      {path.map((e) => (
        <h1 key={e}>{e}</h1>
      ))}
    </div>
  );
};

export default BreadCrumbs;
