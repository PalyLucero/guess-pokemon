import { prisma } from "../../../database/prisma";

const score = async (req, res) => {
  const { method } = req

  switch (method) {
    case "GET":
      return res.json("Im the scores")
    case "POST":
      return res.json("You posted a score")
    default:
      return res.status(400).json('Method not allowed')
  }
}

export default score