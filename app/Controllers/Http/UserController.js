'use strict'

const User = use("App/models/User")

class UserController {
    async index(){
        return await User.all()
    }

    async show ({params}) {
        return user = await User.findOrFail(params.id)
        return(user)
    }

    async store() {
        const data = request.only([
        "name",
        "username",
        "email",
        "password",
        "type_user_id"
        ])

        const user = await User.create(data)
        return user
    }

    async update({params, request}) {
        const user = await User.findOrFail(params.id)

        const data = request.only([
            "name",
            "altitude",
            "latitude",
            "longitude",
            "id",
            "timezone"
            ])

            user.merge(data)
            await user.save()
            return user
    }

    async destroy() {
        const user = await User.findOrFail(params.id)
        return await user.delete()

    }
}

module.exports = UserController
