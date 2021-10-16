import Page from "../components/cards/Page";

export default function Home() {

  const items = [
    "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus",
  ];

  return (
    <main className="p-4 md:p-24">
      <div id="hello">
        <h2 className="gradient-text text-md md:text-2xl">Saturday, 16th October 2021, 10:51 PM</h2>
        <h1 className="text-4xl md:text-6xl font-semibold">Good evening, <span className="gradient-text">Noah!</span></h1>
        <h3 className="mt-1 md:mt-4 text-xl md:text-2xl"><span className="gradient-text">Overcast Clouds</span>, <span className="gradient-text">11</span> degrees, but feels like <span className="gradient-text">9</span> degrees in <span className="gradient-text">Emmeloord</span></h3>

        <h4 className="mt-8 text-3xl md:text-4xl font-semibold">Saved <span className="gradient-text">Pages</span></h4>
        
        <div id="cards" className="md:ml-4 mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
          { 
            items.map((item) => {
              return (
                <Page 
                  key={item}
                  title={item}
                  subTitle="Hypervisor"
                  link="http://dev.local"
                  linkText="dev.local"
                  image="https://dash.davidapps.dev/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F47594764%2F124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png&w=64&q=75"
                />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}
