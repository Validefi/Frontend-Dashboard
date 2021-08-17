import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Info } from 'react-feather';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const NewsTransition = ({ title, data }) => {
  const { currentTheme } = useThemeSwitcher();
  return (
    <TransitionGroup className="todo-list">
      {data?.length > 0 ? (
        data?.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="transactions-list">
              <div className="tr-item">
                <div className="tr-company-name">
                  <div className="tr-icon tr-card-icon text-primary tr-card-bg-primary">
                    <Info />
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
                      {item?.title.length > 50
                        ? `${item?.title?.slice(0, 50)}...`
                        : item?.title}
                    </h6>
                    <p className="text-muted">
                      {new Date(item?.published_at)
                        .toDateString()
                        .split(' ')
                        .slice(1)
                        .join(' ')}
                    </p>
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
