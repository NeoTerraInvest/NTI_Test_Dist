import styled from './Home.module.scss';
import { kor, eng } from '../assets/language';
const Home = () => {
  return (
    <div className={styled.container}>
      <header id={styled.header}>
        <div id={styled.logo}>
          <span id={styled.main}>NTI</span>
          <span>NEO TERRA INVEST</span>
        </div>
        <div id={styled.menu}></div>
      </header>
      <div id={styled.banner}>
        <div id={styled.bannerImage} />
      </div>
      <div id={styled.contents}>
        <div id={styled.about}>
          <span id={styled.aboutTitle}>About Us</span>
          <div>{kor}</div>
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
