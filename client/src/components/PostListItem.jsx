import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {

    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/4">
                <Image src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-3/4">
                <Link to='/' className="text-4xl font-semibold">
                    შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>ავტორი</span>
                    <Link className="text-blue-800" to="/">ვასო</Link>
                    <span>თარიღი</span>
                    <Link className="text-blue-800">კატეგორია</Link>
                    <span>25.09.1988</span>
                </div>
                <p>
                    შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს,
                    რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ
                </p>
                <Link to="/" className="underline text-blue-800 text-sm">
                    სრულად
                </Link>
            </div>
        </div>
    );
};

export default PostListItem;