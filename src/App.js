import "./App.css";
import Status from "./Components/Status";

function App() {
  return (
    <>
      <div className="w-[300px]  mx-auto my-36 rounded-lg overflow-hidden font-kumbh-sans">
        {/* bagian atas: */}
        <div>
          <img src=".\images\bg-pattern-card.svg" alt="pattern-banner" />
        </div>

        {/* bagian bawah */}
        <div className="border text-center border-white bg-white">
          {/* bagian identitas diri */}
          <div>
            <img src=".\images\image-victor.jpg" alt="avatar" className="-my-14 rounded-full border-4 border-white  absolute m-auto left-0 right-0" />
          </div>
          <p className="mt-16 mb-1 text-dark-grayish-blue">
            <span className="text-very-dark-saturated-blue font-semibold">Victor Crest</span> 26
          </p>
          <p className="mb-5 text-dark-grayish-blue">London</p>
          {/* status: */}
          <div className="border-t border-dark-grayish-blue flex flex-row justify-center space-x-10 py-4">
            <Status parent="80k" child="Followers" />
            <Status parent="803k" child="Likes" />
            <Status parent="1.4k" child="Photos" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
