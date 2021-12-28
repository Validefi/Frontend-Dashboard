import React from 'react';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import Logo from '../../assets/sidewaysLogo.png';

const Footer = () => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <div className="page-content mt-0">
      <div className="main-wrapper py-0">
        <div
          className="row"
          style={{ marginTop: '-20px', marginBottom: '-15px' }}
        >
          <div className="col-sm-12 col-xl-12">
            <div className="card stat-widget overflow-hidden">
              <div className="card-body d-flex justify-content-between align-items-center">
                <img src={Logo} alt="ValiDefi" width="120" />
                <div>
                  <a
                    className="mx-2"
                    href="/privacy"
                    style={{
                      color:
                        currentTheme === 'dark'
                          ? 'rgba(225, 235, 245, 0.6)'
                          : 'rgba(91, 91, 91, 0.6)',
                    }}
                  >
                    Privacy Policy
                  </a>
                  <a className="mx-2" href="/terms">
                    Terms of conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
