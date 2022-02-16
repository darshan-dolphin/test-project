// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const { id } = req.body
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()
    if (data.id === parseInt(id))
        res.status(200).json(data)
    else
        res.status(200).json({ "message": "user not found !!!" })
}
