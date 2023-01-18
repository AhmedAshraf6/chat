import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainProvider';

const Submenu = () => {
  const { isSubmenuOpen, page, location } = useMainContext();

  const container = useRef(null);
  const { category } = useParams();
  const [columns, setColumns] = useState('col-1');
  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page, location]);
  return (
    <aside
      className={`${
        isSubmenuOpen
          ? 'submenu show  mt-4 bg-primary text-white px-3 py-4  '
          : 'submenu'
      }`}
      ref={container}
    >
      <section>
        <div className={`submenu-center ${columns} `}>
          {page.links.map((link, index) => {
            const { label } = link;
            return (
              <Link
                key={index}
                className='text-white text-nowrap text-decoration-none my-1'
                to={`/category/${page.page}/${label}/`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
