
export default function handler(req, res) {
    res.status(200).json(
      [
        {
            id:1,
            title:`Design`, 
        },
        {
            id:2,
            title:`Technical`,
        }
    ]
    )
}