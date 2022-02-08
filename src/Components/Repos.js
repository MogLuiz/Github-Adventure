// Packages
import React, { useEffect, useState } from 'react';

// Components
import { RepositoryComponent } from "."


const ReposComponent = ({ getGithubRepositorie }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [items, setItems] = useState([])
  const [query, setQuery] = useState("facebook")

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
      getGithubRepositorie(query)
        .then((res) => res.json())
        .then((data) => setItems((data && data.items) || []))
  }, [getGithubRepositorie, query])

  return (
    <div className="list">
        <button
            className="float-btn-rocket"
            onClick={() => setQuery("rocketseat")}
        >
            Rocket
        </button>
        {
            items && 
               items.map((result) => <RepositoryComponent key={result.id} {...result}/> ) 
        }
    </div>
  )
}

export default React.memo(ReposComponent)