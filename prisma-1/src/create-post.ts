import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient({log: ['info', 'query'],});

async function main(){

    await prisma.post.create({
        data : {
            "title" : "Learning postgres",
            "content" : "As i am learning new things would like to thank harkirat",
            "authorId" : 1
        }
    })
}
 
main();
