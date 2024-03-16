import { useEffect, useState } from "react"
import { IRepo } from "./type"

export function useCard() {
  const [repositorys, setRepositorys] = useState<IRepo[]>([])

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.github.com/users/gojibetters/repos')
        .then((response) => response.json())
        .then((data) => setRepositorys(data))
    }

    fetchData()
  }, [])

  return {
    repositorys
  }
}