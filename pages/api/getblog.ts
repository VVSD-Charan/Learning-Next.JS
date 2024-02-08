// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from 'fs'

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  fs.readFile(`blogData/${req.query.slug}.json`,'utf-8',(err,data)=>{

    if(err){
        res.status(500).json({ error : "No such blog found"})
    }
    else{
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data));
    }
  })
}
