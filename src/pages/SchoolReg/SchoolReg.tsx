import Image from "../../components/Image/Image";
import Form2 from "../../components/form2/Form2";

const SchoolReg = () => {
  return (
    <div className="flex h-screen bg-white px-10 py-5 justify-center items-center">
      <div className="main2 flex w-5/6 rounded-xl">
        <div className="left flex-1" style={{ background: "#2B59FF" }}>
          <Image />
        </div>
        <div className="right flex-1">
          <Form2 isAdmin={false} isSignUp={true} />
        </div>
      </div>
    </div>
  );
};

export default SchoolReg;
