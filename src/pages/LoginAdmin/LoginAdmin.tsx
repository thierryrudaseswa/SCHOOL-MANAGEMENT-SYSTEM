import Form from "../../components/form/Form";
const LoginAdmin = () => {
  return (
    <div className="h-screen bg-orange-500">
     <Form isSignUp={false} isAdmin={false}/>
    </div>
  )
}

export default LoginAdmin;
