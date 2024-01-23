import { useState } from 'react';
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import "./Faq.css"

const Faq = () => {
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const toggleParagraph = () => {
    setShowSecondParagraph(!showSecondParagraph);
  };

  return (
    <div>
      <div className="h-32 grid justify-center font-bold text-white">
        <h1 className='flex items-center justify-center font-extrabold text-3xl text-black'>FaQs</h1>
        <p className='' style={{ color: "#7F7F7F" }}>Frequently asked question</p>
      </div>

      <div className=" p-5 gap-10">
        <div className="grid grid-cols-12 p-5 rounded-2xl mb-5" style={{background:"#2B59FF1F"}}>
          <div className="faq col-span-11 text-lg font-semibold gap-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit impedit, unde, quaerat nulla ab quibusdam voluptates rerum nemo error, explicabo magni dolorem.Sit debitis doloremque temporibus nemo veritatis eligendi asperiores?</p>

            {showSecondParagraph && (
              <p className='faq font-semibold text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum eius error laudantium. Repellat, laborum a molestiae officiis mollitia amet, quibusdam, fugiat nemo fuga saepe veritatis suscipit sequi quaerat placeat!</p>
            )}
          </div>

          <div className="col-span-1 flex items-center justify-end">
            {showSecondParagraph ? (
              <img src={minus} alt="" className='h-1 w-8 cursor-pointer' onClick={toggleParagraph} />
            ) : (
              <img src={plus} alt="" className='h-5 w-5 cursor-pointer' onClick={toggleParagraph} />
            )}
          </div>
        </div>
        <div className=" faq grid grid-cols-12 p-5 rounded-2xl mb-5" style={{background:"#2B59FF1F"}}>
          <div className="faq col-span-11 text-lg font-semibold gap-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit impedit, unde, quaerat nulla ab quibusdam voluptates rerum nemo error, explicabo magni dolorem.Sit debitis doloremque temporibus nemo veritatis eligendi asperiores?</p>

            {showSecondParagraph && (
              <p className='faq font-semibold text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum eius error laudantium. Repellat, laborum a molestiae officiis mollitia amet, quibusdam, fugiat nemo fuga saepe veritatis suscipit sequi quaerat placeat!</p>
            )}
          </div>

          <div className="faq col-span-1 flex items-center justify-end">
            {showSecondParagraph ? (
              <img src={minus} alt="" className='h-1 w-8 cursor-pointer' onClick={toggleParagraph} />
            ) : (
              <img src={plus} alt="" className='h-5 w-5 cursor-pointer' onClick={toggleParagraph} />
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 p-5 rounded-2xl mb-5" style={{background:"#2B59FF1F"}}>
          <div className="faq col-span-11 text-lg font-semibold gap-2">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit impedit, unde, quaerat nulla ab quibusdam voluptates rerum nemo error, explicabo magni dolorem.Sit debitis doloremque temporibus nemo veritatis eligendi asperiores?</p>

            {showSecondParagraph && (
              <p className='faq font-semibold text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatum eius error laudantium. Repellat, laborum a molestiae officiis mollitia amet, quibusdam, fugiat nemo fuga saepe veritatis suscipit sequi quaerat placeat!</p>
            )}
          </div>

          <div className="col-span-1 flex items-center justify-end">
            {showSecondParagraph ? (
              <img src={minus} alt="" className='h-1 w-8 cursor-pointer' onClick={toggleParagraph} />
            ) : (
              <img src={plus} alt="" className='h-5 w-5 cursor-pointer' onClick={toggleParagraph} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
