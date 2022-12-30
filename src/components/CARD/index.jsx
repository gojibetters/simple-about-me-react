import React, { useEffect, useState } from 'react'
import './index.css'

function Card() {
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/gojibetters/repos'
      )
      const data = await response.json()

      setRepositorys(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="container">
        {repositorys.map(repository => {
          return (
            <div className="item" key={repository.id}>
              <div className="title">{repository.name}</div>

              <div className="description">{repository.description}</div>

              <div className="stats">
                <div className="starIcon">
                  <img src={require('../../assets/star.svg').default} />
                  <div className="stars">{repository.stargazers_count}</div>
                </div>

                <div className="forksIcon">
                  <img src={require('../../assets/git-branch.svg').default} />
                  <div className="forks">{repository.forks}</div>
                </div>

                <div className="languageIcon">
                  <img src={require('../../assets/yellipse.svg').default} />
                  <div className="language">{repository.language}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card