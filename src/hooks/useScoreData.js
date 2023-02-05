import { useQuery, useMutation, useQueryClient } from "react-query";

const scoreData = async () => {
  const response = await fetch(`/api/score`)
  const data = await response.json()
  return data
}
const addScoreData = async (scoreData) => {
  const response = await fetch(`/api/score`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(scoreData)
  })
  const data = await response.json()
  return data
}

export const useScoreData = () => {
  return useQuery('score', scoreData, {
    refetchOnMount: true,
    refetchOnWindowFocus: false
  })
}
export const useAddScoreData = () => {
  const queryClient = useQueryClient()
  return useMutation((scoreData) => addScoreData(scoreData), {
    onSuccess: () => queryClient.invalidateQueries('score')
  })
}