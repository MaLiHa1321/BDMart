

const Social = () => {
    const {user, googleSignIn} = use()
 
    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
                
            }

         axiosPublic.post('/users', userInfo)
         .then(res =>{
            toast.success('Login succesful')
            navigate(location?.state ? location?.state : '/')
         })
           
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
      
            <div onClick={() => handleSocialLogin(googleSignIn)} >

            <button className='btn btn-primary text-2xl'>G</button>
            </div>
            
        </div>
    );
};
export default Social;