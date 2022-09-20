import styles from './checkbox-list.module.scss';

/* eslint-disable-next-line */
export interface CheckboxListProps {
  list: any;
  onChange: any;
}

export function CheckboxList({ list, onChange }: CheckboxListProps) {
  return (
    <div className={styles['container']}>
      <fieldset>
        <legend className="text-lg font-medium text-gray-900">Members</legend>
        <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
          {list.map((item: any, Idx: number) => (
            <div key={Idx} className="relative flex items-start py-4">
              <div className="ml-3 flex h-5 items-center">
                <input
                  id={`-${item.id}`}
                  name={`person-${item.id}`}
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    onChange({ ...item, checked: !item?.checked });
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={`person-${item.id}`}
                  className="select-none font-medium text-gray-700"
                >
                  {item.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default CheckboxList;
