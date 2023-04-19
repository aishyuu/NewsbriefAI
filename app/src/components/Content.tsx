import { useState } from "react"

export default function Content() {
    const [newsText, setNewsText] = useState('')

    function handleSummarization(event) {
        event.preventDefault()
        const myParams = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(event.target[0].value)
        }

        fetch('http://127.0.0.1:5000/api/query', myParams).then(
            res => res.json()
        ).then(
            data => {
                console.log(data)
                setNewsText(data['Response'])
            }
        )
    }

    return(
        <div className="dark:bg-black flex flex-grow flex-col">
            {/* Pitch Text */}
            <div className="p-6 mt-4 text-3xl text-center">
                <span>Get summaries of news articles through the power of AI</span>
            </div>
            {/* Input and button to summarize */}
            <form 
                className="mx-auto w-4/6 flex flex-col items-center"
                onSubmit={handleSummarization}
            >
                <span className="italic">Article URL</span>
                <input type="text" name="newsLink" id="newsLink" 
                    className="border w-full xl:w-3/5 dark:text-black"
                />
                <input type="submit"
                    className="mt-8 px-5 py-2 border bg-blue-400 text-lg dark:border-none dark:bg-gray-700 hover:cursor-pointer"
                    value="Summarize"
                />
            </form>
            <div className='p-8'>
                <span>{newsText === '' ? 'Summary will appear here' : newsText}</span>
            </div>
        </div>
    )
}