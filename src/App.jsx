import "./App.css";
import ArtistBlock from "./components/ArtistsBlock";
import Genre from "./components/Genre";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <section className="bg-[#222222] w-full pl-[340px] pr-10">
        <div className="w-full flex justify-start items-start flex-col gap-[18px]">
          <h2 className="text-[38px] font-bold text-white">Good morning</h2>
          <div className="grid grid-cols-2 justify-start items-start gap-x-[30px] gap-y-5">
            {[1, 2, 3].map(() => (
              <Genre title="Liked Songs" />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-7">
          <div className="w-full flex justify-between items-center text-white pt-10">
            <h2 className="font-bold text-3xl">Shows you might like</h2>
            <a href="#" className="font-normal text-[17px] no-underline">
              SEE ALL
            </a>
          </div>
          <div className="grid grid-cols-4 justify-start items-start gap-x-[30px] gap-y-5">
            {[1, 2, 3, 4, 5].map(() => (
              <ArtistBlock title="MEDITATION SELF" author="Ibn Hussain Aleen" />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
