export default function Content() {
    return(
        <div className="dark:bg-black flex flex-grow flex-col">
            <div className="p-6 mt-4 text-3xl text-center">
                <span>Get summaries of news articles through the power of AI</span>
            </div>
            <div className="mx-auto w-4/6 flex flex-col items-center">
                <span className="italic">Article URL</span>
                <input type="text" name="" id="" 
                    className="border w-full xl:w-3/5"
                />
                <button className="mt-8 px-5 py-2 border bg-blue-400 text-lg dark:border-none dark:bg-gray-700">
                    Summarize
                </button>
            </div>
        </div>
    )
}