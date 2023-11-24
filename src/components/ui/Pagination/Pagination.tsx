"use client";
import { Blog } from "@/libs/microcms";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";
import { useRouter } from "next/navigation";

type PaginationProps = {
  itemsPerPage?: number;
  contents: Blog[];
};

const Pagination = ({ contents }: PaginationProps) => {
  const itemsPerPage = 7;
  const router = useRouter();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = contents.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(contents.length / itemsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % contents.length;
    setItemOffset(newOffset);
    router.push(`?page=${selected + 1}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName={styles["paginate-container"]}
      pageClassName={styles["paginate-number"]}
      pageLinkClassName={styles["paginate-number-link"]}
      previousLinkClassName={styles["prev-link"]}
      nextLinkClassName={styles["prev-link"]}
      activeClassName={styles["is-active"]}
      activeLinkClassName={styles["is-active-link"]}
      breakClassName={styles["break-style"]}
      breakLinkClassName={styles["break-style"]}
      previousClassName={styles["page-item"]}
      disabledClassName={styles["is-disabled"]}
    />
  );
};

export default Pagination;
