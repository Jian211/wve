import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const userSeed = () => {
    prisma.user.create({
        data: {
            userName: 'sae',
            loginType: 0
        }
    })
}
const postSeeds = () => {

    prisma.post.createMany({
        data: [
            {
                postId : 1,
                content: "hello prisma?",
                authorId: 'Saetester',
                hits: 10
            },
            {
                postId : 2,
                content: "ohayo~",
                authorId: 'Saetester',
                hits: 20
            },
            {
                postId : 3,
                content: "konbanwa~",
                authorId: 'Saetester',
                hits: 20
            },
            {
                postId : 4,
                content: "ohayoguruto",
                authorId: 'Saetester',
                hits: 20
            }
        ]
    })

}


async function main(){
    
    await userSeed();
    await postSeeds();
    
}


main()
    .catch( e => {
        console.error(e)
        process.exit(1)
    })
    .finally( async () => {
        await prisma.$disconnect()
    })