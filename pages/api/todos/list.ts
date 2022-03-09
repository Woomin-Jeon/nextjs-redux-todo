import { NextApiHandler } from 'next'

import DB from '../../../DB'

const handler: NextApiHandler = async (req, res) => {
  const todos = await DB.getTodos()

  const requestId = Math.round(Math.random() * 1000)
  if (requestId > 800) {
    res.status(500).send('Server Error')
    return
  }

  res.status(200).json({ data: { requestId, todos } })
}

export default handler
