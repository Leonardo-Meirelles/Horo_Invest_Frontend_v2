export const enumRoles = (role: number) => {
    const mapRole: any = {

        1: {
            type: 'User',
            code: 1,
            route: '/user'
        },

        2: {
            type: 'Admin',
            code: 2,
            route: '/admin'
        }
    }

    return mapRole[role]

}

