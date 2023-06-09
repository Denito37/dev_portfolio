// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { 
        id:1,
        title:`Advice Generator`,
        stack:`ReactJS TailwindCSS API`,
        description: `A fun pastime that gets quotes of great advice from an external API. Original design based on an assigment on Frontend Mentor. Many features were added on top of the orginal concept (like section, like & clear button, makes use of the local storage web API).`,
        site:`https://advice-generator-denito37.vercel.app`,
        repo:`https://github.com/Denito37/advice_generator`,
      },
      { 
        id:2,
        title:`CSS Collection`,
        stack:`ReactJS TailwindCSS`,
        description: `A collection of components that showcases what can be done with CSS. From the simple to the more complex I aim to show how with a little extra CSS you can elevate your site.`,
        site:`https://css-collection-gamma.vercel.app`,
        repo:`https://github.com/Denito37/css_collection`,
      },
      {
        id:3,
        title:`Dictionary Dynamo`,
        stack:`ReactJS TailwindCSS API`,
        description: `A dictionary site that is a hub of words with a random word generated on load & a set of flash cards based on school subjects. With the use of two APIs I aimed to make the classic dictionary site with a fun twist.`,
        site:`https://dictionary-dynamo.vercel.app`,
        repo:`https://github.com/Denito37/dictionary_dynamo`,
      }
    ]
    )
}
