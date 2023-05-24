import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMedium } from '@utils/api';
import Items, { Item } from './Items';
import ReactPaginate from 'react-paginate';
import { SectionWrapper, Container, Box } from '@components/wrappers';
import { mobile } from '@styles/breakpoints';

interface PaginationProps {
  itemsPerPage: number;
}

const PaginatedItems: React.FC<PaginationProps> = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  console.log(items);
  useEffect(() => {
    getMedium().then(resp => setItems(resp.items));
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (data: { selected: number }) => {
    const newOffset = (data.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <SectionWrapper>
        <Container>
          <ContentWrapper>
            <Items currentItems={currentItems} />
            <PaginateStyles
              activeClassName={'item active '}
              pageLinkClassName={'page-link'}
              breakLabel={'...'}
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              previousLinkClassName="paginate-styles-previous"
              nextLinkClassName="paginate-styles-next"
            />
          </ContentWrapper>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default PaginatedItems;

const PaginateStyles = styled(ReactPaginate)`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin: 10px 5px;
  list-style-type: none;
  .active {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px var(--lbg);
    border-radius: 8px;
    color: var(--lbg);
    cursor: pointer;
    height: 45px;
    width: 45px;
  }

  .break-me {
  }

  .paginate-styles-next {
    display: none;
  }

  a.page-link {
    cursor: pointer;
    padding: 13px 20px;
  }

  .paginate-styles-previous {
    display: none;
  }
`;

const ContentWrapper = styled(Box)`
  margin-top: 100px;
  @media ${mobile} {
    margin-top: 70px;
  }
`;
