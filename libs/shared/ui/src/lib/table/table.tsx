import { Children, ReactNode } from 'react';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },

  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },

  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
];

interface TableProps {
  key?: number;
  children: ReactNode;
}
interface TableListProps {
  children: ReactNode;
}

export const TableHeadCell = ({ key, children }: TableProps) => {
  return (
    <th
      key={key}
      scope="col"
      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
    >
      {children}
    </th>
  );
};

export const TableBodyCell = ({ children }: TableProps) => {
  return (
    <th
      scope="col"
      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
    >
      {children}
    </th>
  );
};
export const TableHead = ({ children }: TableProps) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

export const TableBody = ({ children }: TableProps) => {
  return <tbody className="bg-white">{children}</tbody>;
};

export const TableRow = ({ children }: TableProps) => {
  return <tr>{children}</tr>;
};
export const Table = ({ children }: TableProps) => {
  return <table className="min-w-full">{children}</table>;
};

export function TableContainer({ children }: TableListProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="rounded shadow overflow-hidden">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
