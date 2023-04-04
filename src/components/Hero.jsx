import logo from '../assets/img.png'

function Hero() {
    return (
        <div class={"container mx-12 select-none pt-24 text-jet"}>
            {/*<h1 class={"text-4xl"}>Work in progress ... </h1>*/}
            <div class={"flex items-center"}>
                <div class={"w-2/3"}>
                    {/*andere font*/}
                    <h1 class={"text-7xl font-extrabold"}>Hi, I'm Steven!</h1>
                    <h2 class={"mt-2 text-jungle-green text-7xl font-extrabold flex items-center gap-2"}>Developer</h2>
                    <h2 class={"text-caribbean-current text-7xl font-extrabold flex items-center gap-2"}>Coach</h2>
                    <h2 class={"text-indigo-dye text-7xl font-extrabold flex items-center gap-2"}>People Lead</h2>
                    <p class={"mt-10 text-lg font-extralight w-2/3"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae dolorum eaque hic iusto magni provident quos
                        reprehenderit totam. Dolore nemo quia repellat tempore tenetur?
                    </p>
                </div>
                <div class={"flex w-1/3 relative"}>
                    <div class={"bg-caribbean-current w-96 absolute h-96 top-10 left-10 -z-10"}></div>
                    <div class={"bg-jungle-green w-96 absolute h-96 top-5 left-5 -z-10"}></div>
                    <img src={logo} alt="profile" class={"w-96 h-96"}/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
