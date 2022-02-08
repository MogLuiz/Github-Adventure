// Packages
import React, { useEffect, useState } from 'react';

import { RepositoryComponent } from "."


const ReposComponent = ({ getGithubRepositorie }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [items, setItems] = useState([])

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
      getGithubRepositorie()
        .then((res) => res.json())
        .then((data) => setItems((data && data.items) || []))
  }, [getGithubRepositorie])

  return (
    <div className="list">
        {
            items && 
               items.map((result) => <RepositoryComponent key={result.id} {...result}/> ) 
        }
    </div>
  )
}

export default ReposComponent