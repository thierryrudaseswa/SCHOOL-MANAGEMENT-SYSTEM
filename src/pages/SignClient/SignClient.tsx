import Form from "../../components/form/Form";
const SignClient = () => {
  return (
    <div className="h-screen bg-orange-500">
     <Form isSignUp={true} isAdmin={false}/>
    </div>
  )
}

export default SignClient;
