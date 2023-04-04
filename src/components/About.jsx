import SectionTitle from "./lib/SectionTitle";
import {createSignal, For} from "solid-js"

function About() {
    const themeConfiguration = [
        {keyword: "class", color: 'text-celestial-blue'},
        {keyword: "this", color: 'text-celestial-blue'},
        {keyword: "constructor", color: 'text-celestial-blue'},
        {keyword: "get", color: 'text-celestial-blue'},
        {keyword: "return", color: 'text-celestial-blue'},
        {keyword: "private", color: 'text-celestial-blue'},
        {keyword: "string", color: 'text-celestial-blue'},
        {keyword: "readonly", color: 'text-celestial-blue'},
        {keyword: "About", color: 'text-jungle-green'},
        {keyword: "family", color: 'text-jungle-green'},
        {keyword: "FamilyMember", color: 'text-celestial-blue'},
        {keyword: ";", color: 'text-cambridge-blue'},
        {keyword: "name", color: 'text-cambridge-blue'},
        {keyword: "relation", color: 'text-cambridge-blue'},
        {keyword: "birthDate", color: 'text-cambridge-blue'},
    ];

    const [code, setCode] = createSignal([
        {text: "class About {", indentation: 4},
        {text: "private readonly name: string;", indentation: 12},
        {text: "private readonly birthDate: string;", indentation: 12},
        {text: "", indentation: 4},
        {text: "constructor() {", indentation: 12},
        {text: "this.name = 'Steven Excelmans';", indentation: 20},
        {text: "this.birthDate = 'Mon Nov 21 1983 00:00:00 GMT+0100';", indentation: 20},
        {text: "}", indentation: 12},
        {text: "", indentation: 4},
        {text: "get family(): FamilyMember[] {", indentation: 12},
        {text: "return [", indentation: 20},
        {text: "{ name: 'Sophie', relation: 👰🏼 },", indentation: 28},
        {text: "{ name: 'Finn', relation: 👦🏼 },", indentation: 28},
        {text: "{ name: 'Lio', relation: 👧🏼 },", indentation: 28},
        {text: "{ name: 'Ellie', relation: 😺 },", indentation: 28},
        {text: "{ name: 'Esmee', relation: 😼 }", indentation: 28},
        {text: "];", indentation: 20},
        {text: "}", indentation: 12},
        {text: "}", indentation: 4},
    ]);

    const mapTextToHTML = (text) => {
        themeConfiguration.forEach(config => {
            text = text.replace(config.keyword, (key) => `<span class=${config.color}>${key}</span>`);
        })
        return text;
    };

    const updateCode = () => {
        return code().map(code => {
            return {
                text: mapTextToHTML(code.text),
                ...code
            };
        });
    }

    setCode(updateCode());

    return (
        <div class={"pb-20 bg-sea-salt"}>
            <div class={"mt-52 h-full"}>
                <SectionTitle />
            </div>
            <div class={"mx-12 mt-10"}>
                <div class={"flex flex-col rounded-md border-2 border-neutral-800 shadow-2xl"}>
                    <div class={"flex space-x-2 bg-neutral-800 px-4 py-3 group"}>
                        <div class={"h-3 w-3 rounded-full bg-red-500 ring-[0.2px] ring-red-600 group-hover:bg-red-600"}>
                        </div>
                        <div class={"h-3 w-3 rounded-full bg-amber-400 ring-[0.2px] ring-amber-500 group-hover:bg-amber-500"}>
                        </div>
                        <div class={"h-3 w-3 rounded-full bg-green-500 ring-[0.2px] ring-green-600 group-hover:bg-green-600"}>
                        </div>
                    </div>
                    <div class={""}>
                        <div class={"bg-neutral-600"}>
                            <div class={"flex h-full w-fit items-center space-x-3 bg-jet opacity-100 px-4 py-3 text-sea-salt border-b-[2px] border-jungle-green"}>
                                <div class={"text-sm text-celestial-blue"}>TS</div>
                                <div class={"pr-3 font-light text-anti-flash-white"}>about.ts</div>
                                <div class={"w-2.5 h-2.5 bg-anti-flash-white rounded-full translate-y-px -translate-x-1"}></div>
                            </div>
                        </div>
                        <table class={"w-full select-none"}>
                            <tbody class={"font-mono"}>
                                <tr class={"h-3"}>
                                    <td class={"bg-neutral-600"}></td>
                                    <td class={"bg-jet opacity-95"}></td>
                                </tr>
                                <For each={code()}>
                                    {(code, i) => (
                                        <tr class={"text-anti-flash-white group "}>
                                            <td class={"w-14 bg-neutral-600 px-6 group-hover:bg-indigo-dye"} class={i() < 9 ? "before:content-['0']" : undefined} >{i() + 1}</td>
                                            <td class={"bg-jet group-hover:bg-indigo-dye opacity-95 pl-" + code.indentation} innerHTML={mapTextToHTML(code.text)}></td>
                                        </tr>
                                    )}
                                </For>
                                <tr className={"h-3"}>
                                    <td className={"bg-neutral-600"}></td>
                                    <td className={"bg-jet opacity-95"}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
