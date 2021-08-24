import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const NewsTransition = ({ title, data }) => {
  const { currentTheme } = useThemeSwitcher();
  return (
    <TransitionGroup className="todo-list">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list box-shadow">
              <div className="tr-item">
                <div className="tr-company-name">
                  <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
                    <img
                      alt="Favicon"
                      src={`https://www.google.com/s2/favicons?sz=32&domain_url=${item?.source?.domain}`}
                      width="25px"
                    />
                  </div>
                  <a
                    className="tr-text"
                    href={`${item?.url}`}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    <h6
                      style={{ fontWeight: '400' }}
                      className={
                        currentTheme === 'dark' ? 'text-white' : 'text-dark'
                      }
                    >
                      {/* {item?.title.length > 50
                        ? `${item?.title?.slice(0, 50)}...`
                        : item?.title} */}
                      {item?.title}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text-muted">
                        {new Date(item?.published_at)
                          .toDateString()
                          .split(' ')
                          .slice(1)
                          .join(' ')}
                      </p>
                      <p
                        style={{
                          color: currentTheme === 'dark' ? '#fff' : '#1a1a1a',
                          fontWeight: 600,
                        }}
                      >
                        {item?.source?.domain}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        ))
      ) : (
        <p>No data to display</p>
      )}
      {/* <button className="btn btn-primary w-100" onClick={addItemHandler}>
        Add Item
      </button> */}
    </TransitionGroup>
  );
};

export default NewsTransition;
