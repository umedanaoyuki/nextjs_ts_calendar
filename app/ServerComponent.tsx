import prisma from "@/lib/prisma"

const getUser = async () => {
    return await prisma.user.findMany()
}

export const ServerComponent = async () => {

    const users = await getUser()

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

