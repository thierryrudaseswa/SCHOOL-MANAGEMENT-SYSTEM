import Form from "../../components/form/Form";
const SignAdmin = () => {
  return (
    <div className="h-screen bg-orange-500">
     <Form isSignUp={true} isAdmin={true}/>
    </div>
  )
}

export default SignAdmin;
