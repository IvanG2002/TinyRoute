import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import Loading from "./Loading"
import { motion } from "framer-motion"

const LINKS = [
    {
        "id": 1,
        "shortUrl": "ua4nhb",
        "url": "https://google.com",
        "date": "04 September, 2024"
    },
    {
        "id": 2,
        "shortUrl": "xy7ksl",
        "url": "https://www.youtube.com/",
        "date": "15 August, 2023"
    },
    {
        "id": 3,
        "shortUrl": "bq3zmn",
        "url": "https://openai.com",
        "date": "22 July, 2022"
    }
]

function Links() {
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 100);
    }, [])

    return (
        <>
            <header className="flex items-center lg:justify-between w-full bg-white">
                <div className="relative rounded-md bg-gray-100 dark:bg-gray-800 w-32 lg:w-48 mr-2">
                    <Input type="text" placeholder="Search" name="search" onChange={e => setSearch(e.target.value)} className="rounded-md outline-none appearance-none  w-32 lg:w-48 pl-8 text-xs" />
                    <SearchIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-600" />
                </div>
                <div className="flex gap-3 font-mono">
                    <Button variant={"outline"}><img className="h-4 w-4 mr-2" src="./box.svg" alt="" /><span>{LINKS.length < 10 ? `0${LINKS.length}` : LINKS.length}/30</span></Button>
                    <Button variant={"outline"}><img className="lg:h-4 lg:w-4 lg:mr-2" src="./tag.svg" alt="" /><span className="lg:block hidden">Select tag</span></Button>
                    <Button variant={"secondary"}><img className="lg:h-4 lg:w-4 lg:mr-2" src="./add.svg" alt="" /><span className="lg:block hidden">Create Link</span></Button>
                </div>
            </header>
            <section className="flex pt-5 flex-col gap-3">
                {isLoading ? <Loading /> : LINKS
                    .filter(link => {
                        return search.toLocaleLowerCase() === "" ? link :
                            link.shortUrl.toLocaleLowerCase().includes(search)
                    })
                    .map(link => (
                        <motion.div initial={{ y: "30px" }} animate={{ y: 0 }} transition={{ ease: "linear", duration: 0.2 }} key={link.id} className="flex flex-col rounded-md border w-full lg:w-[30rem] border-neutral-200 p-3 shadow-sm dark:border-neutral-800 bg-white">
                            <header className="flex">
                                <div className="flex flex-col">
                                    <h1 className="font-semibold font-mono text-[#1a1a1a]">🔗{link.shortUrl}</h1>
                                    <h5 className="text-xs font-mono text-[#9f9f9f]">{link.url}</h5>
                                    <h6 className="text-[10px] font-mono text-[#9f9f9f]">{link.date}</h6>
                                </div>
                                <div className="flex gap-3 ml-auto relative items-center justify-center">
                                    <div className="h-3 w-[1px] bg-[#cecece] mr-2 absolute -left-4"></div>
                                    <Button variant={"secondary"}><img className="h-3 w-3" src="./copy.svg" alt="" /></Button>
                                    <Button variant={"secondary"}><img className="h-3 w-3" src="./config.svg" alt="" /></Button>
                                    <Button variant={"secondary"}><img className="h-3 w-3" src="./delete.svg" alt="" /></Button>
                                </div>
                            </header>
                        </motion.div>
                    ))}
            </section>
        </>
    )
}

export default Links

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}