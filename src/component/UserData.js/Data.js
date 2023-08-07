import React, { useEffect } from "react";

import { useFetch } from "../Hooks/useFetch";

const Data = () => {
  const ft = useFetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  console.log(ft);

  return <div>Data</div>;
};

export default Data;
