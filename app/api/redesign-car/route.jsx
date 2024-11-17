
import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedImage } from "@/config/schema";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
})

export async function POST(req) {
    const { imageUrl, carType, designType, additionalReq ,userEmail} = await req.json();

    try {
        const input = {
                image: "https://replicate.delivery/pbxt/KhTNuTIKK1F1tvVl8e7mqOlhR3z3D0SAojAMN8BNftCvAubM/bedroom_3.jpg",
                prompt: "A bedroom with a bohemian spirit centered around a relaxed canopy bed complemented by a large macrame wall hanging. An eclectic dresser serves as a unique storage solution while an array of potted plants brings life and color to the room",
            }
        // const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",{ input })
        // console.log(output)
        // return NextResponse.json({ result: output })
        const output = "https://replicate.delivery/pbxt/QQYOKkkftyze1kmgeaBuqT5FCMvcjZj2o2nDJshCfnXkUYCPB/out.png"
        const base64Image = await ConvertImageToBase64(output)
        const fileName = Date.now()+'.png'
        const storageRef = ref(storage,'car-redesign/'+fileName)
        await uploadString(storageRef, base64Image,'data_url')
        const downloadUrl = await getDownloadURL(storageRef)
        console.log(downloadUrl)
        // return NextResponse.json({'result':downloadUrl})
        const dbResult = db.insert(AiGeneratedImage).values({
            carType:carType,
            designType: designType,
            orgImage: imageUrl,
            aiImage: downloadUrl,
            userEmail: userEmail,
        }).returning({id:AiGeneratedImage.id});

        console.log(dbResult)
         return NextResponse.json({'result':dbResult[0]})
    } catch (e) {
        return NextResponse.json({ error: e });

    }
}
async function ConvertImageToBase64(imageUrl){
    const resp = await axios.get(imageUrl,{responseType: 'arraybuffer'})
    const base64ImageRaw = Buffer.from(resp.data).toString('base64')

    return "data:image/png;base64,"+base64ImageRaw
}