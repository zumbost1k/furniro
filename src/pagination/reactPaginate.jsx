import React from 'react';
import ReactPaginate from 'react-paginate';
const Paginate = (props) => {
    return (
        <ReactPaginate
            nextLabel='Next'
            onPageChange={props.handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={props.pageCount}
            previousLabel='previous'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='previous_btn'
            previousLinkClassName='page-link'
            nextClassName='page-item page-item-next'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={null}
            initialPage={props.currentPage}
        />
    );
}

export default Paginate