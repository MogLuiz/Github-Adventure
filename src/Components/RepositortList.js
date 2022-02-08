// Packages
import React from "react";

// Components
import { Repository } from "./Repository";

export const RepositoryList = React.memo(({ getRepositories }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [items, setItems] = React.useState([]);
  const [query, setquery] = React.useState("facebook");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  React.useEffect(() => {
    getRepositories(query)
      .then((res) => res.json())
      .then((data) => setItems((data && data.items) || []));
  }, [getRepositories, query]);

  // -------------------------------------------------
  // Return
  // -------------------------------------------------
  return (
    <div className="list">
      <button
        className="float-btn-rocket"
        onClick={() => setquery("rocketseat")}
      >
        🚀
      </button>
      <br />
      {items &&
        items.map((result) => <Repository key={result.id} {...result} />)}
    </div>
  );
});
