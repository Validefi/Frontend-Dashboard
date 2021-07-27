import React from 'react';

const LongBox = () => {
  return (
    <div class="col-sm-6 col-xl-4">
      <div class="card stat-widget">
        <div class="card-body">
          <h5 class="card-title">Social Media</h5>
          <div class="transactions-list">
            <div class="tr-item">
              <div class="tr-company-name">
                <div class="tr-icon tr-card-icon tr-card-bg-primary text-primary">
                  <i data-feather="thumbs-up"></i>
                </div>
                <div class="tr-text">
                  <h4>New post reached 7k+ likes</h4>
                  <p>02 March</p>
                </div>
              </div>
            </div>
          </div>
          <div class="transactions-list">
            <div class="tr-item">
              <div class="tr-company-name">
                <div class="tr-icon tr-card-icon tr-card-bg-info text-info">
                  <i data-feather="twitch"></i>
                </div>
                <div class="tr-text">
                  <h4>Developer AMA is now live</h4>
                  <p>01 March</p>
                </div>
              </div>
            </div>
          </div>
          <div class="transactions-list">
            <div class="tr-item">
              <div class="tr-company-name">
                <div class="tr-icon tr-card-icon tr-card-bg-danger text-danger">
                  <i data-feather="instagram"></i>
                </div>
                <div class="tr-text">
                  <h4>52 unread messages</h4>
                  <p>23 February</p>
                </div>
              </div>
            </div>
          </div>
          <div class="transactions-list">
            <div class="tr-item">
              <div class="tr-company-name">
                <div class="tr-icon tr-card-icon tr-card-bg-warning text-warning">
                  <i data-feather="shopping-bag"></i>
                </div>
                <div class="tr-text">
                  <h4>2 new orders from shop page</h4>
                  <p>17 February</p>
                </div>
              </div>
            </div>
          </div>
          <div class="transactions-list">
            <div class="tr-item">
              <div class="tr-company-name">
                <div class="tr-icon tr-card-icon tr-card-bg-info text-info">
                  <i data-feather="twitter"></i>
                </div>
                <div class="tr-text">
                  <h4>Hashtag #circl is trending</h4>
                  <p>03 February</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongBox;
