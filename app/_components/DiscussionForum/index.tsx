import { FaCommentDots } from 'react-icons/fa';
import Image from 'next/legacy/image';
import chatBg from '../../_assets/images/chat.png';
import Link from 'next/link';

function DiscussionForum() {
  return (
    <div className='my-10 rounded-lg bg-white p-8 text-center shadow-lg'>
      <div className='mb-6 w-full'>
        <Image
          src={chatBg}
          alt='Have Your Say!'
          layout='responsive'
          width={100}
          height={56}
          className='w-full rounded-lg'
          priority
        />
      </div>
      <h2 className='mb-4 text-2xl font-semibold'>Have Your Say!</h2>
      <p className='my-8 px-2 text-base'>
        With all the happenings in our country, good and bad, we have created a
        forum where you can have your say and discuss these matters with others
        in your community in an open public forum.
      </p>
      <div className='flex justify-center'>
        <Link href='/topics'>
          <button
            type='button'
            className='flex items-center rounded-lg bg-slate-950 px-6 py-3 font-medium text-white focus:outline-none lg:px-10'
          >
            <FaCommentDots className='mr-2' /> Join the Discussion
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DiscussionForum;
