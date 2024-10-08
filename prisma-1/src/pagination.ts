import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const res = await prisma.post.findMany({
        take : 2,
        skip : 0,
    })
    console.log(res)
}

main();