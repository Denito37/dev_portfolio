
export default function handler(req, res) {
    res.status(200).json(
      [
        {
            id:1,
            title:`Design`,
            skillOne:`CSS + Tailwind`,
            skillTwo:`UI + UX principles`,
            skillThree:`Figma`,
        },
        {
            id:2,
            title:`Technical`,
            skillOne:`JS + ReactJS + NextJS`,
            skillTwo:`HTML`,
            skillThree:`Chrome Dev Tools`,
        }
    ]
    )
}