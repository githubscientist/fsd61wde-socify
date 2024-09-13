import instance from './instance';

const userServices = {
    updateProfilePicture: async (formData) => {
        return await instance.put('/users/profilePicture', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default userServices;