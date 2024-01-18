import Form from "../../components/form/Form";
import Image from "../../components/Image/Image";

const LoginClient = () => {
  return (
    <div className="flex h-screen px-10 py-5 justify-center items-center" >
      <div className="main2 flex w-5/6 rounded-xl">
        <div className="left flex-1" style={{ background: "#2B59FF" }}>
          <Image />
        </div>
        <div className="right flex-1">
        <Form isSignUp={false} isAdmin={false}/>
        </div>
      </div>
    </div>
  );
};

export default LoginClient;
