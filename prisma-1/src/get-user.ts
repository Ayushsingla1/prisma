import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   const result =  await prisma.user.findMany({
    include : {
        posts : true,
    }
   });
   console.log(result);

    const res = await prisma.user.findUnique({
        where : {
            "id" : 1,
        },
        include:{
            "posts" : true
        }
    })
    console.log(res);

}

main();