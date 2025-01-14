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
          <div>{isLanguage === 'kor' ? kor.about : eng.about}</div>
        </div>
        <div id={styled.invest}>
          <div className={styled.investTitle}>
            <span>Investment</span>
            <span>in the Future</span>
          </div>
          <div id={styled.investContents}>
            <div className={styled.aiContents}>
              <div id={styled.aiImage}></div>
              <span>Ai</span>
            </div>
            <div className={styled.quantumContents}>
              <div id={styled.quantumImage}></div>
              <span>Quantum</span>
            </div>
            <div className={styled.DeFIContents}>
              <div id={styled.DeFImage}></div>
              <span>RWA</span>
            </div>
            <div className={styled.web3Contents}>
              <div id={styled.web3Image}></div>
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
            <span>About</span>
            <span>investment</span>
          </div>
        </div>
        <div>test</div>
      </footer>
    </div>
  );
};

export default Home;
