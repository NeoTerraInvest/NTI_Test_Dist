import styled from './Home.module.scss';
import { kor, eng } from '../assets/language';
import { useState } from 'react';
const Home = () => {
  const [isLanguage, setLanguage] = useState<string>('Eng');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className={styled.container}>
      <header id={styled.header}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.menu}>
          <button id={styled.language}>
            <select
              name="language"
              id="language-select"
              onChange={handleLanguageChange}
              value={isLanguage}
            >
              <option value="eng">ENG</option>
              <option value="kor">KOR</option>
            </select>
          </button>
        </div>
      </header>
      <div id={styled.banner}>
        <div id={styled.bannerImage} />
      </div>
      <div id={styled.contents}>
        <div id={styled.about}>
          <span id={styled.aboutTitle}>About Us</span>
          <hr />
          <div id={styled.aboutDetail}>
            <div id={styled.aboutus}>
              <span>{isLanguage === 'kor' ? kor.about : eng.about}</span>
              <hr />
              <div id={styled.details}>
                <div>
                  <span>Neo Terra, the Beginning of a New World</span>
                </div>
                <div>
                  <span>New Investments, Sustainable Growth</span>
                </div>
                <div>
                  <span>Leading the Way in Innovation and Challenge</span>
                </div>
                <div>
                  <span>NTI, Creating New Value</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div id={styled.invest}>
          <div className={styled.investTitle}>
            <span>Investment</span>
            <span>in the Future</span>
          </div>
          <hr />

          <div id={styled.investContents}>
            <div className={styled.aiContents}>
              <div id={styled.aiImage}>
                <span>Artificial Intelligence</span>
              </div>
              <span>Ai</span>
            </div>
            <div className={styled.quantumContents}>
              <div id={styled.quantumImage}>
                <span>Quantum Computing</span>
              </div>
              <span>Quantum</span>
            </div>
            <div className={styled.DeFIContents}>
              <div id={styled.DeFImage}>
                <span>Decentralized Finance</span>
              </div>
              <span>RWA</span>
            </div>
            <div className={styled.web3Contents}>
              <div id={styled.web3Image}>
                <span>Web 3.0</span>
              </div>
              <span>Web3</span>
            </div>
          </div>
        </div>
      </div>
      <footer id={styled.footer}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.footerContents}>
          <span>© 2012 Neo Terra Invest</span>
          <div id={styled.footerGroup}>
            <span>Contact</span>
            <span>About Us</span>
            <span>investment in the Future</span>
          </div>
        </div>
        <div>test</div>
      </footer>
    </div>
  );
};

export default Home;
