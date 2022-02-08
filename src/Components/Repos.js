// Packages
import React, { useEffect, useState } from 'react';


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

  return <div />;
}

export default ReposComponent