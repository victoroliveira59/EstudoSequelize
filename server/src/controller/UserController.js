import User from '../../../models/User.js';

async function userController() {
    try{
        const newUser = await User.create({
            firtName: 'John',
            email: 'jonh@gmail.com'
        });


        const  foundUser = await User.findOne({where: {email: 'jonh@gmail.com'} });
        if(foundUser) {
            console.log(foundUser);


            await User.update({firstName: 'Jonh Smith'}, {
                where: {
                    email: 'jonh@gmail.com'
                }
            });

            await User.destroy({where: {email: 'jonh@gmail.com'}});

        }

    }catch(e){console.error('Error in user operations:', e)}
}

manageUsers();