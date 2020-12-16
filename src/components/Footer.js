import Telegram from '../assets/telegram.svg'
import GitHub from '../assets/github.svg'
import Uniswap from '../assets/uniswap.svg'

function Footer() {
  return (
    <footer>
      <a target="_blank" rel="noreferrer noopener" href="https://t.me/LIDProtocol">
        <img src={Telegram} alt="LID Protocol Telegram"/>
      </a>
      <a target="_blank" rel="noreferrer noopener" href="https://github.com/Lid-Protocol/ulock-react">
        <img src={GitHub} alt="xLock on GitHub"/>
      </a>
      <a target="_blank" rel="noreferrer noopener" href="https://info.uniswap.org/pair/0xc822d85d2dcedfaf2cefcf69dbd5588e7ffc9f10">
        <img src={Uniswap} alt="xLock on Uniswap"/>
      </a>
    </footer>
  );
}

export default Footer;
