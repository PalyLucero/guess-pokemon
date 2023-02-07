import { prisma } from "../../../database/prisma";

const score = async (req, res) => {
  const { method, body } = req

  switch (method) {
    case "GET":
      const scores = await prisma.score.findMany({
        orderBy: [
          {
            score: 'desc'
          }
        ]
      })
      return res.json(scores)
    case "POST":
      const searchRepeated = await prisma.score.findMany({
        where: {
          AND: {
            name: {
              equals: body.name
            },
            score: {
              equals: body.score
            },
          }
        }
      })
      if (searchRepeated.length < 1) {
        const score = await prisma.score.create({
          data: {
            name: body.name,
            score: body.score
          }
        })
        return res.json(score)
      }
      return res.json("Post failed")
    default:
      return res.status(400).json('Method not allowed')
  }
}

export default score