import React from 'react';
import ShopHeader from '@/shop_header/shop_header';
import PaginatedItemsPost from '@/pagination/get_data_post';
import DiscountShop from '@/discount_shop/discount_shop';

const BlogPage = () => {
  return (
    <div>
      <ShopHeader
        logo={true}
        path={'Blog'}
        underTitle={'Blog'}
        classname={'shop_header_icon_blog'}
      />
      <PaginatedItemsPost />
      <DiscountShop />
    </div>
  );
};

export default BlogPage;
