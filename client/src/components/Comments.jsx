import React from 'react'
import Comment from "./Comment";

const Comments = () => {
    return (
        <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
            <h1 className="text-xl text-gray-500 underline">კომენტარები</h1>
            <form className="flex items-center justify-between gap-8 w-full"
            >
                <textarea
                    name="desc"
                    placeholder="დატოვეთ კომენტარი..."
                    className="w-full p-4 rounded-xl"
                />
                <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl">
                    გაგზავნა
                </button>
            </form>
            <>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </>
        </div>
    );
}

export default Comments