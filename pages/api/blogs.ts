// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs'

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
//   fs.promises.readdir("blogData",(err,data)=>{
//     let allBlogs = []
//     data.forEach((item)=>{
//         console.log(item)
//         fs.readFile(`blodata/${item}`,(e,d)=>{
//             allBlogs.push(d);
//         })
//     })
//     res.status(200).json(allB)
//   })
    let data = await fs.promises.readdir(`blogData`);
    let fileData;
    let allBlogs = []

    for(let index = 0 ; index < data.length ; index++){
        console.log(data[index])

        fileData = await fs.promises.readFile(`blogData/${data[index]}`,'utf-8')
        console.log(fileData)
        allBlogs.push(JSON.parse(fileData))
    }
    res.status(200).json(allBlogs);
}
