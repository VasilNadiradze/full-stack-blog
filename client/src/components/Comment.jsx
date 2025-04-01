import Image from "./Image";

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
            <div className="flex items-center gap-4">
                <Image
                    src="userImg.jpeg"
                    className="w-10 h-10 rounded-full object-cover"
                    w="40"
                />
                <span className="font-medium">ვასო</span>
                <span className="text-sm text-gray-500">
                    25.09.1988
                </span>
                <span className="text-xs text-red-300 hover:text-red-500 cursor-pointer">
                    წაშლა
                    <span>(in progress)</span>
                </span>
            </div>
            <div className="mt-4">
                <p>ეს არის კომენტარი :))))</p>
            </div>
        </div>
    );
};

export default Comment;