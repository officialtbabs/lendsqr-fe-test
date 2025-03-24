import PaginationSelectComponent from "./PaginationSelectComponent";
import chevronDownIcon from "~/assets/svgs/icons/chevron-down-icon.svg";

interface PaginationProps {
  page: number;
  limit: number;
  limitOptions: number[];
  totalItems: number;
  totalPages: number;
  handleLimitChange: (newLimit: number) => void;
  handlePageChange: (newPage: number) => void;
}

const PaginationComponent = ({
  page,
  limit,
  limitOptions,
  totalPages,
  totalItems,
  handleLimitChange,
  handlePageChange,
}: PaginationProps) => {
  return (
    <div className="paginationContainer">
      {/* Pagination Meta */}
      <div className="paginationMetaContainer">
        <p>Showing</p>

        <PaginationSelectComponent
          name="paginationSelect"
          options={limitOptions}
          value={String(limit)}
          onChange={(e) => handleLimitChange(Number(e.target.value))}
        />

        <p>out of {totalItems}</p>
      </div>

      {/* Pagination Controls */}
      <div className="paginationControls">
        <button
          className="previousButton"
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <img src={chevronDownIcon} alt="previous button icon" />
        </button>

        {page > 2 && (
          <button
            className="paginationIndexes"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        )}
        {page > 3 && <p className="paginationIndexes">...</p>}

        {page > 1 && (
          <button
            className="paginationIndexes"
            onClick={() => handlePageChange(page - 1)}
          >
            {page - 1}
          </button>
        )}

        <button className="paginationIndexes activePageIndex">{page}</button>

        {page < totalPages && (
          <button
            className="paginationIndexes"
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </button>
        )}

        {page < totalPages - 2 && <p className="paginationIndexes">...</p>}
        {page < totalPages - 1 && (
          <button
            className="paginationIndexes"
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}

        <button
          className="nextButton"
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
        >
          <img src={chevronDownIcon} alt="next button icon" />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponent;
