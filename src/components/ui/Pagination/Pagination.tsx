"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { MaterialSymbolsChevronLeft } from "@/components/icons/ChevronLeft";
import { MaterialSymbolsChevronRight } from "@/components/icons/ChevronRight";

type PaginationControlsProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "8";
  return (
    <div className={styles["pagination-container"]}>
      <button
        className={styles["pagination-btn"]}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blog/?page=${Number(page) - 1}`);
        }}
      >
        <MaterialSymbolsChevronLeft />
      </button>

      <div style={{ color: "white" }}>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className={styles["pagination-btn"]}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blog/?page=${Number(page) + 1}`);
        }}
      >
        <MaterialSymbolsChevronRight />
      </button>
    </div>
  );
};

export default PaginationControls;
