import React from 'react';
import Section from './Section';

const Profile = () => {
  const sections = {
    Subscription: {
      title: ['Current Plan', 'Your Alerts'],
      value: ['Prime', 'Nothing'],
      options: [
        [
          { value: 'Manage', label: 'Manage' },
          { value: 'Delete', label: 'Delete' },
        ],
        [
          { value: 'Manage', label: 'Manage' },
          { value: 'Delete', label: 'Delete' },
        ],
      ],
    },
    Accounts: {
      title: ['Telegram', 'Discord', 'Email'],
      value: ['telegram.org', 'discord.org', 'gmail.com'],
      options: [
        [
          { value: 'Manage', label: 'Manage' },
          { value: 'Delete', label: 'Delete' },
        ],
        [
          { value: 'Manage', label: 'Manage' },
          { value: 'Delete', label: 'Delete' },
        ],
        [
          { value: 'Manage', label: 'Manage' },
          { value: 'Delete', label: 'Delete' },
        ],
      ],
    },
  };
  return (
    <div className="page-content">
      <div className="main-wrapper">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="card stat-widget">
              <div className="card-body">
                {Object.keys(sections)?.map((section) => (
                  <Section title={section} data={sections[section]} />
                ))}
                <div className="row d-inline-block">
                  <button
                    type="button"
                    class="btn btn-danger m-b-xs"
                    style={{ marginLeft: '1rem' }}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
