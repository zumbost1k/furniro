import React from 'react';
import Paginate from './reactPaginate';
import '../products/products.css'
import './pagination.css'
import './get_data_post.css'
import { useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const allPosts = [
    {
        path: 'laptop',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Going all-in with millennial design',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'pen',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Handmade',
        title: 'Exploring new ways of decorating',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'glasses',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Handmade pieces that took time to make',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'laptop',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Going all-in with millennial design 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'pen',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Handmade',
        title: 'Exploring new ways of decorating 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'glasses',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Handmade pieces that took time to make 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'laptop',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Going all-in with millennial design 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'pen',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Handmade',
        title: 'Exploring new ways of decorating 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
    {
        path: 'glasses',
        person: 'Admin',
        date: '14 Oct 2022',
        type: 'Wood',
        title: 'Handmade pieces that took time to make 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.'
    },
]

const categories = [
    {
        name: 'Crafts',
        numberOfPosts: 2
    },
    {
        name: 'Design',
        numberOfPosts: 8
    },
    {
        name: 'Handmade',
        numberOfPosts: 7
    },
    {
        name: 'Interior',
        numberOfPosts: 1
    },
    {
        name: 'Wood',
        numberOfPosts: 6
    },
]

const recentPosts = [
    {
        name: 'notebook',
        mainText: 'Going all-in with millennial design',
        date: '03 Aug 2022'
    },
    {
        name: 'exploring',
        mainText: 'Exploring new ways of decorating',
        date: '03 Aug 2022'
    },
    {
        name: 'handmade',
        mainText: 'Handmade pieces that took time to make',
        date: '03 Aug 2022'
    },
    {
        name: 'milan',
        mainText: `Modern home in Milan`,
        date: '03 Aug 2022'
    },
    {
        name: 'redesign',
        mainText: 'Colorful office redesign',
        date: '03 Aug 2022'
    },
]

const recentPostsList = recentPosts.map(post => {
    return (
        <div key={post.path} className='recent_post_item'>
            <img width='80' height='80' src={`/photos/recent_posts/${post.name}.png`} alt={post.path} />
            <div>
                <p className='recent_post_text'>{post.mainText}</p>
                <time className='recent_post_time' dateTime={post.date}>{post.date}</time>
            </div>
        </div>
    )
})

const categoriesList = categories.map(category => {
    return (
        <div key={category.name} className='catergory_item'>
            <button type='button' className='catergory_item_btn'>{category.name}</button>
            <p className='catergory_item_text'>{category.numberOfPosts}</p>
        </div>
    )
})
const PostInfoDisplayer = ({ photo, text }) => {
    return (
        <div className='post_info_item'>
            <img width='20' height='20' src={`/photos/${photo}`} alt={text} />
            <p className='post_info_item_text'>{text}</p>
        </div>
    )
}

const PostList = ({ posts }) => {
    return posts.map((post) => {
        return (
            <div key={post.path} className='post_item'>
                <img width='817' height='500' src={`/photos/${post.path}.png`} alt={post.path} />
                <div className='post_info'>
                    <PostInfoDisplayer photo={'user.svg'} text={post.person} />
                    <PostInfoDisplayer photo={'calendar.svg'} text={post.date} />
                    <PostInfoDisplayer photo={'ci_tag.svg'} text={post.type} />
                </div>
                <h2 className='post_title'>{post.title}</h2>
                <p className='post_text'>{post.text}</p>
                <div className='post_btn_container'><button type='button' className='post_btn'>Read more</button></div>
            </div >
        )
    })


}

const usePageQueryParam = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    return page;
}



const PaginatedItemsPost = () => {
    const pageCount = Math.ceil(allPosts.length / 3)
    const currentPage = usePageQueryParam()
    const [searchParams, setSearchParams] = useSearchParams();
    const updatePageQueryParam = (newPage) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', newPage);
        setSearchParams(newSearchParams, { replace: true });
    }


    const handlePageClick = (event) => {
        updatePageQueryParam(event.selected)
    };


    return (
        <section className='blog_section'>
            <div className='blog_body'>
                <div className='all_posts'>
                    <PostList posts={allPosts.slice(currentPage * 3, (currentPage * 3 + 3))} />
                </div>
                <div className='more_post_info'>
                    <div className='category'>
                        <input className='input_text_global_pad post_category_input' type='text' id='post_category' />
                        <label className='input_text_global_pad post_category_loop' htmlFor='post_category'><img src='/photos/loop.svg' width='24' height='24' alt='loop' /></label>
                    </div>
                    <div className='additional'>
                        <div className='find_category'>
                            <h3 className='catergory_item_title'>
                                Categories
                            </h3>
                            <div className='categories_list'>{categoriesList}</div>
                        </div>
                        <div className='recent_posts'>
                            <h3 className='catergory_item_title'>Recent Posts</h3>
                            <div className='recent_posts_container'>{recentPostsList}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Paginate handlePageClick={handlePageClick} pageCount={pageCount} currentPage={Number(currentPage)} />
        </section>
    )

}

export default PaginatedItemsPost;
