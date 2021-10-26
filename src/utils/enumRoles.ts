export const enumRoles = (role: number) => {
    const mapRole:any = {

        1: {
            type: 'Admin',
            code: 1,
            route: '/admin'
        },

        2: {
            type: 'User',
            code: 2,
            route: '/user'
        }
    }

    return mapRole[role]
}

