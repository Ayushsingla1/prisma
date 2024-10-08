import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
       data:
       {
        "email" : "Ayushsingla1122@gmail.com",
        "name" : "Ayush singla"
       }
    })
}

main();